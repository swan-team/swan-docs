---
title: swan.canIUse
header: develop
nav: api
sidebar: swan-canIUse
---


**解释**： 判断智能小程序的API，回调，参数，组件等是否在当前版本和当前系统下可用。

 
## 方法参数 

 String schema

### schema 的表达形式 
* `${API}.${method}.${param}.${option}`
* `${class}.${method}.${param}.${option}`
* `${component}.${attribute}.${option}`

### 返回值

Boolean 当前版本是否可用

入参类型错误时，会抛出一个标准的`Error`对象。

### `schema`参数说明  

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${class}  | 类名 |
|${method} |  调用方式，有效值为return, object, 回调函数的名称（多数为success和callback）|
|${param} | 参数或者返回值  |
|${option} |参数的有效值或者返回值的属性或者组件属性的有效值  |
|${component} |   组件名字 |
|${attribute} | 组件属性 |



## 示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/canIuse.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例


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

###  代码示例 1

<a href="swanide://fragment/2d9c4a9cd34aac2e3f951cecc6b1fe0e1569499882524" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="canIUse">canIUse</button>
</view>
```

* 在 js 文件中

```js
Page({
    canIUse() {
        // 组件
        console.log('view.hover-class', swan.canIUse('view.hover-class'));
        console.log('scroll-view.scroll-x', swan.canIUse('scroll-view.scroll-x'));
        console.log('cover-view', swan.canIUse('cover-view'));
        console.log('button.size.default', swan.canIUse('button.size.default'));

        // API: ${method} 为 object
        console.log('request.object.method.OPTIONS', swan.canIUse('request.object.method.OPTIONS'));

        // API: ${method} 为 success
        console.log('ai.imageAudit.success.data.stars.name', swan.canIUse('ai.imageAudit.success.data.stars.name'));

        // API: ${method} 为 callback
        console.log('onAppShow.callback.entryType.user', swan.canIUse('onAppShow.callback.entryType.user'));

        // API: ${method} 为 return
        console.log('getEnvInfoSync.return.env.trial', swan.canIUse('getEnvInfoSync.return.env.trial'));

        // API: 类
        console.log('VideoContext.requestFullScreen.object.direction', swan.canIUse('VideoContext.requestFullScreen.object.direction'));
        console.log('CanvasContext.fill', swan.canIUse('CanvasContext.fill'));
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
                     

###  代码示例2 - 判断智能小程序的某个API是否在当前版本可用 ：

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

###  代码示例3 - 判断智能小程序的某个API的调用方式是否在当前版本可用 ：

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

###  代码示例4 - 判断智能小程序的某个API的调用方式的返回值是否在当前版本可用 ：

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

###  代码示例5 - 判断智能小程序的某个API的调用方式返回的参数可选值是否在当前版本可用 ：

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

###  代码示例6 - 判断智能小程序的某个组件是否在当前版本可用 ：

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

###  代码示例7 - 判断智能小程序的某个组件属性是否在当前版本可用 ：

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

###  代码示例8 - 判断智能小程序的某个组件属性的可选值是否在当前版本可用 ：

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

## Bug&Tip

* 若判断的 schema 在不同机型下支持不同，无法通过 canIUse 进行判断
* 回调函数的名称以文档为准；
* 不支持 fail 和 complete 回调函数的判断；
* 支持success回调参数的判断，举例如下：
```js
swan.canIUse('request.success.data');
```
* 纯 number 类型的属性不做支持；
* 带有`.`或空格的属性不做支持；
* 如果参数是 Array.<Object\> 或 Array.<string\> 类型，校验方式举例如下：
```js
// swan.ai.textReview   Array.<Object>
swan.canIUse('ai.textReview.success.result.reject.label');

// swan.chooseImage  Array.<string>
swan.canIUse('chooseVideo.object.sourceType.album');
```