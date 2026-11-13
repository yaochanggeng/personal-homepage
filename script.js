// 新版默认深色；使用独立的存储键，保留访客在新版手动选择的主题。
const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const copyButton = document.querySelector(".copy-link");
const toast = document.querySelector(".toast");
const themeMeta = document.querySelector('meta[name="theme-color"]');
root.classList.add("js-enabled");

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute(
    "aria-label",
    isDark ? "切换到浅色模式" : "切换到深色模式",
  );
  themeMeta.setAttribute("content", isDark ? "#090a12" : "#f5f5fb");
}
let initialTheme = "dark";
try {
  const saved = localStorage.getItem("yc-theme-v2");
  if (saved === "light" || saved === "dark") initialTheme = saved;
} catch {
  /* 禁止存储时使用默认主题。 */
}
applyTheme(initialTheme);
themeButton.hidden = false;
themeButton.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try {
    localStorage.setItem("yc-theme-v2", theme);
  } catch {
    /* 当前页面仍可切换。 */
  }
});

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航菜单");
}
menuButton.hidden = false;
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "关闭导航菜单" : "打开导航菜单",
  );
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
if ("IntersectionObserver" in window) {
  const navLinks = [...navigation.querySelectorAll("a")];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          if (link.getAttribute("href") === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-15% 0px -45% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main > section[id]")
    .forEach((section) => observer.observe(section));
}
let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("https://github.com/yaochanggeng");
    showToast("GitHub 链接已复制");
  } catch {
    showToast("暂时无法复制，请打开上方 GitHub 链接");
  }
});
document.querySelector("#copyright-year").textContent = String(
  new Date().getFullYear(),
);
