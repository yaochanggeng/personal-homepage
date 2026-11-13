# 我的个人主页

我的第一个 GitHub 项目：一个可以直接在浏览器打开的个人介绍页。

包含简介、项目展示、GitHub 链接和明暗模式切换，适配手机和电脑。

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
- 此项目保存在私有仓库，代码仅自己和获邀成员可访问。
- 创建 GitHub 仓库与公开发布网站是两件事。本项目默认供本地预览，未配置公开网站部署。
- 不要把密码、API 密钥或不打算分享的个人信息提交到仓库。

## 技术

原生 HTML、CSS、JavaScript，无第三方依赖。
