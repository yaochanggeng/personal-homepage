# 我的个人主页

我的第一个 GitHub 项目：一个可以直接在浏览器打开的个人介绍页。

包含简介、项目展示、GitHub 链接和明暗模式切换，适配手机和电脑。

## 在线访问

个人主页：<https://yaochanggeng.github.io/personal-homepage/>

网站由 GitHub Pages 托管，任何人都可以通过链接访问。代码仓库已公开。

发布源为 `main` 分支的根目录。在 GitHub 提交网页修改后，GitHub Pages 会自动重新部署；通常需要等待几分钟。

之前通过 Sites 发布的页面保留为旧版本：<https://yaochanggeng-homepage.endearingamity16.chatgpt.site>，它不会随 GitHub 提交自动更新。

## 在电脑上查看

双击 `index.html`，用浏览器打开即可。无需安装依赖，也不需要构建。

## 改成自己的内容

| 文件          | 内容                             |
| ------------- | -------------------------------- |
| `index.html`  | 用户名、个人简介、项目介绍与链接 |
| `styles.css`  | 页面样式；开头的变量控制主题颜色 |
| `script.js`   | 明暗模式切换与偏好保存           |
| `favicon.svg` | 浏览器标签页上的小图标           |

目前的介绍是通用起步文字，后续可以补上自己的真实经历、兴趣和联系方式。

## 练习一次修改与提交

### 直接在 GitHub 网页中修改

1. 在仓库的 **Code** 页面打开 `index.html`。
2. 点击右上角的铅笔图标（Edit this file）。
3. 找到“欢迎来到我的个人主页”，改成一句自己的介绍。
4. 点击 **Commit changes**，填写修改说明并确认，改动就会保存在仓库中。

### 在电脑上使用 Git 修改

先完成本机 Git 的 GitHub 登录，然后在另一个空目录中克隆仓库：

```sh
git clone https://github.com/yaochanggeng/personal-homepage.git
cd personal-homepage
```

在克隆得到的文件夹中进行以下操作：

1. 在 `index.html` 中找到“欢迎来到我的个人主页”，改成一句自己的介绍。
2. 保存文件，刷新浏览器查看效果。
3. 在这个项目文件夹打开终端，依次执行：

```sh
git status
git add index.html
git commit -m "更新个人介绍"
git push origin main
```

第一次在本机提交时，如果 Git 提示缺少作者信息，请只为本项目设置：

```sh
git config user.name "你的名字"
git config user.email "你的 GitHub 提交邮箱"
```

提交邮箱可在 GitHub 的 **Settings → Emails** 中找到。也可以使用 GitHub 提供的隐私邮箱。

## 仓库与访问

- 仓库：<https://github.com/yaochanggeng/personal-homepage>
- 此项目保存在公开仓库，任何人均可查看代码。
- 本项目的当前网页通过 GitHub Pages 公开发布。
- 不要把密码、API 密钥或不打算分享的个人信息提交到仓库。

## 技术

原生 HTML、CSS、JavaScript，无第三方依赖。
