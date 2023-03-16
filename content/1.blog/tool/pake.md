---
title: '#FFF Pack - 轻量级打包网页生成桌面应用'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'Pack - 轻量级打包网页生成桌面应用'

summary:
  title: 'Pack - 轻量级打包网页生成桌面应用'
  icon: '🍂'
  type: '便捷工具'
  desc: 'Pack - 轻量级打包网页生成桌面应用'
  tags: 'HashColor'
  createtime: '2023-01-30'
  pic: '/img/pic/hash_color.jpg'
---

# Pack - 轻量级打包网页生成桌面应用

今天在 github 上面看到一个仓库 - [Pake](https://github.com/tw93/Pake){:target="\_blank"}, 使用 Rust 轻松将任何网页变成桌面应用程序。

> Pake 支持 Mac、Windows 和 Linux。查看 README 以获得流行的包、命令行打包和自定义开发信息。欢迎在讨论中分享您的建议。

#### 特征

- 🎐 比 Electron 封装小近 40 倍（不到 3M！）
- 🚀 有了 Rust Tauri，Pake 比基于 JS 的框架更轻量、更快。
- 📦 电池包——快捷直通、沉浸式窗口和极简定制。
- 👻Pake 只是一个简单的工具——用 Rust 替换旧的捆绑方法（尽管 PWA 已经足够好了）。

#### 命令行打包

Pake 提供了一个命令行工具，使包定制流程更快更容易。有关详细信息，请参阅[文档](https://github.com/tw93/Pake/blob/master/bin/README_EN.md){:target="\_blank"}。

```md
# Install with npm

npm install -g pake-cli

# Command usage

pake url [OPTIONS]...

# Feel free to play with Pake! It might take a while to prepare the environment the first time you launch Pake.

pake https://weekly.tw93.fun --name Weekly --transparent
```

如果您不熟悉命令行，可以使用 GitHub Actions 在线编译包。有关详细信息，请参阅[教程](https://github.com/tw93/Pake/wiki/GitHub-Actions-Online-Compilation-Multi-system-Version){:target="\_blank"}。

#### 准备

开始前准备环境。确保您的计算机上安装了 Rust>=1.63 和 Node >=16（例如，16.18.1）。有关安装指南，请参阅 [Tauri 文档](https://tauri.app/v1/guides/getting-started/prerequisites){:target="\_blank"} 。

如果你对这些不熟悉，不妨试试上面的工具一键打包。

```md
# Install Dependencies

npm i

# Local development

npm run dev

# Local debug

npm run dev:debug

# Pack application

npm run build
```
