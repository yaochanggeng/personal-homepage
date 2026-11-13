// 记住访客的明暗模式偏好；浏览器禁止存储时仍可正常切换。
const themeButton = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("homepage-theme");
} catch {
  // 本地文件或隐私设置可能禁用 localStorage。
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute(
    "aria-label",
    isDark ? "切换到浅色模式" : "切换到深色模式",
  );
}

applyTheme(
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemTheme.matches
      ? "dark"
      : "light",
);
themeButton.hidden = false;

themeButton.addEventListener("click", () => {
  savedTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(savedTheme);
  try {
    localStorage.setItem("homepage-theme", savedTheme);
  } catch {
    // 不支持持久化时，仅在当前页面生效。
  }
});

systemTheme.addEventListener("change", (event) => {
  if (savedTheme !== "light" && savedTheme !== "dark") {
    applyTheme(event.matches ? "dark" : "light");
  }
});
