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
### 适配样式
为了兼容iPhoneX底部安全区，我们提供了一组兼容样式：
```css
.swan-security-padding-bottom {
    padding-bottom: 34px;
}
.swan-security-margin-bottom {
    margin-bottom: 34px;
}
.swan-security-fixed-bottom {
    bottom: 34px;
}
```
该组样式会自动在需要适配安全区的场景动态注入，**开发者不需要自行添加**，只要在`.swan`文件中使用这组类名即可。
**举例**：

```html
<!--test.swan-->
<view class="swan-security-padding-bottom">test</view>
<!--在iPhoneX等机型下，该view节点会自动获得一个“padding-bottom:34px”的样式-->
```

**说明**：
* 使用时请注意 box-sizing 属性为非默认值的场景。
* 手机百度客户端版本11.0开始支持iPhoneX，11.0.5开始支持iPhoneXS iPhoneXSMax iPhoneXR