---
title: CSS
header: develop
nav: framework
sidebar: view_css
---

CSS 是描述 SWAN 的样式语言。支持 CSS 的属性。
在此基础上，做了一些编译支持：
- 尺寸单位
- 样式导入

### 尺寸单位
对于自适应的单位，推荐使用 CSS3 vw 为单位，vw 代表视窗( Viewport )的宽度为1%。
同时也支持 rpx，规定屏幕宽为750rpx。在 iPhone X 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

<br />

### 样式导入
为了工程化和代码复用，我们支持 @import 语句，导入 CSS 文件。

<br />

```css
/* header.css */
.header {
    padding: 8px;
}
```

```css
/* index.css */
@import "header.css";
.body {
    padding: 12px;
}
```

<br />
