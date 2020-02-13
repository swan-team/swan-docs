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
- 对于自适应的单位，推荐使用 CSS3 vw 为单位，vw 代表视窗( Viewport )的宽度为1%；
- 同时也支持 rpx，规定屏幕宽为750rpx。在 iPhone X 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

### 样式导入
为了工程化和代码复用，我们支持 @import 语句，导入 CSS 文件。

**代码示例**

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

**注意:** 该组样式会自动在需要适配安全区的场景动态注入，**开发者不需要自行添加**，只要在`.swan`文件中使用这组类名即可。

**代码示例**

```xml
<!--test.swan-->
<view class="swan-security-padding-bottom">test</view>
<!--在iPhoneX等机型下，该view节点会自动获得一个“padding-bottom:34px”的样式-->
```

### 内联样式

内联样式与Web开发一致,且支持动态更新

**代码示例**

```xml
<view style="color: {{eleColor}}; font-size: {{eleFontsize}}"> swan </view>
```

```js
Page({
    data: {
        eleColor: 'red',
        eleFontsize: '48rpx'
    }
});
```

### 选择器权重

权重越高越优先。在优先级相同的情况下，后设置的样式优先级高于先设置的样式。

**代码示例**

<a href="swanide://fragment/cce33f29c0c7ede9cabc2912232320931577177401032" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```css
view{ 
    // 权重为 1
  color: blue
}

.ele{ 
    // 权重为 10
  color: red
}

#ele{ 
// 权重为 100
  color: pink
}

view#ele{ 
// 权重为 1 + 100 = 101，优先级最高，元素颜色为orange
  color: orange
}

view.ele{ 
// 权重为 1 + 10 = 11
  color: green
}
```


**说明**：
* 使用时请注意 box-sizing 属性为非默认值的场景；
* 百度 App 11.0 版本开始支持 iPhoneX，11.0.5 开始支持 iPhoneXS iPhoneXSMax iPhoneXR。
