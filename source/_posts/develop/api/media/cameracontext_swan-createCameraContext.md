---
title: swan.createCameraContext
header: develop
nav: api
sidebar: cameracontext_swan-createCameraContext
---





**解释**：创建并返回 camera 上下文 `cameraContext`对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/camera.png"  class="demo-qrcode-image" />


**方法参数**：无

**返回值**：cameraContext

**示例**：
<a href="swanide://fragment/21b60b0d38bf33771697da5c7d5149cd1556528875741" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    data: { },
    onLoad() {
        swan.createCameraContext();
    }
});
```

