---
title: swan.canIUse
header: develop
nav: api
sidebar: swan-canIUse
---


**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_canIuse.png"  class="demo-qrcode-image" />

**方法参数**： String schema

使用 `${API}.${method}.${param}.${options} `或者 `${component}.${attribute}.${option}` 方式来调用。

**`schema`参数说明**：

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${method} |  调用方式，有效值为return, success, object, callback   |
|${param} | 参数或者返回值  |
|${options} |参数的有效值   |
|${component} |   组件名字 |
|${attribute} | 组件属性 |
|${option}  |  组件属性的有效值 |


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canIUse.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - 判断智能小程序的某个API是否在当前版本可用**：

<a href="swanide://fragment/799d9f8fdf9d0303e24c486a48f52eb91574252240282" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="getSystemInfo" type="primary" bindtap="bindCanIUse">swan.getSystemInfo</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例2 - 判断智能小程序的某个API的调用方式是否在当前版本可用**：

<a href="swanide://fragment/7145c994b775be30d07c661859b03a081575207885919" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="getSystemInfo.success" type="primary" bindtap="bindCanIUse">getSystemInfo.success</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例3 - 判断智能小程序的某个API的调用方式的返回值是否在当前版本可用**：

<a href="swanide://fragment/e429d736e4bb99992f59f0637668d7041575207920406" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="getSystemInfoSync.return.screenWidth" type="primary" bindtap="bindCanIUse">getSystemInfoSync.return.screenWidth</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例4 - 判断智能小程序的某个API的调用方式返回的参数可选值是否在当前版本可用**：

<a href="swanide://fragment/8fc2dfbb12f05e73c1f3a90fdc1c08281575208710364" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="chooseImage.success.tempFiles.path" type="primary" bindtap="bindCanIUse">chooseImage.success.tempFiles.path</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // false
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例5 - 判断智能小程序的某个组件是否在当前版本可用**：

<a href="swanide://fragment/002abb999d8f0bdcbee2b2beff24f0ce1575208828329" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="text" type="primary" bindtap="bindCanIUse">text</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例6 - 判断智能小程序的某个组件属性是否在当前版本可用**：

<a href="swanide://fragment/3d4389416e3c25ae9302d8a3ec725db81575208915549" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="text.selectable" type="primary" bindtap="bindCanIUse">text.selectable</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```

**代码示例6 - 判断智能小程序的某个组件属性的可选值是否在当前版本可用**：

<a href="swanide://fragment/533ae4d979cc6004066e29ec9ebf1e191575209002144" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button data-name="button.open-type.contact" type="primary" bindtap="bindCanIUse">button.open-type.contact</button>
```

* 在 js 文件中

```js
Page({
    bindCanIUse(e) {
        let canIuseResult = swan.canIUse(e.currentTarget.dataset.name);  // true
        swan.showToast({
            title: JSON.stringify(canIuseResult),
            icon: 'none'
        });
    }
});
```
