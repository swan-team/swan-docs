---
title: 导航
header: develop
nav: api
sidebar: show_tab
---

> * 以下 5 个 API 都有与之功能一致的 [navigator 组件](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) 声明方式。
* 如果两种方式都能满足您的使用场景，推荐您使用 [navigator 组件](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) 实现相应的导航功能，以便更好的被搜索引擎理解。


## swan.navigateTo

**解释**：保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 swan.navigateBack 可以返回到原页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String  |是| -|  需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function  |  否  |-|  接口调用成功的回调函数|
|fail  |  Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：
<a href="swanide://fragment/d2ca0174fbc5e441f603668b91abaee21560167954476" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="navigateTo" type="primary" hover-stop-propagation="true">跳转新页面</button>
        <button bind:tap="navigateBack" type="primary" hover-stop-propagation="true">返回上一页</button>
        <button bind:tap="redirectTo" type="primary" hover-stop-propagation="true">在当前页面打开</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'navigateTo/Back,redirectTo'
    },

    navigateTo(e) {
        swan.navigateTo({
            url: '/pages/detail/detail'
        });
    },

    navigateBack(e) {
        swan.navigateBack({
            delta: 2
        });
    },

    redirectTo(e) {
        swan.redirectTo({
            url: '/pages/detail/detail'
        });
    }
});
```


## swan.redirectTo

**解释**：关闭当前页面，跳转到应用内的某个页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | -| 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function |   否  |-|  接口调用成功的回调函数|
|fail   | Function |   否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/00b8b93225cfaf30de9f4329f1962ee91557729109817" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="redirectTo">redirectTo</button>
</view>
```

* 在 js 文件中

```js
Page({
    redirectTo() {
        swan.redirectTo({
            url: '/api/api?key=value',
            success: function () {
                console.log('redirectTo success');
            },
            fail: function (err) {
                console.log('redirectTo fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.switchTab

**解释**：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | -| 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。|
|success |Function  |  否  |-|  接口调用成功的回调函数|
|fail   | Function |   否  |-|  接口调用失败的回调函数|
|complete |   Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/b62ad6cdc0ef78061a6581fa9a1fc9ab1557729238493" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="switchTab">switchTab</button>
</view>
```

* 在 js 文件中

```js
Page({
    switchTab() {
        swan.switchTab({
            url: '/api/api',
            success: function () {
                console.log('switchTab success');
            },
            fail: function (err) {
                console.log('switchTab fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.navigateBack

**解释**：关闭当前页面，返回上一页面或多级页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|delta  | Number | 否  |1|  返回的页面数，如果 delta 大于现有页面数，则返回到首页1。|
|success|	function|		否|-| 	接口调用成功的回调函数|	
|fail|	function|		否|	-| 接口调用失败的回调函数|	
|complete|	function|		否|-| 	接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/f8d91e30ca7ed70b3114add6fd1a58711557729485160" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 component.swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateTo">navigateTo</button>
</view>
```

* 在 api.swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateBack">navigateBack</button>
</view>
```

* 在 component.js 文件中

```js
Page({
    navigateTo() {
        swan.navigateTo({
            url: '/api/api?key=value',
            success: function () {
                console.log('navigateTo success');
            },
            fail: function (err) {
                console.log('navigateTo fail', err);
            }
        });
    }
});
```
* 在 api.js 文件中

```js
Page({
    onLoad(options) {
        console.log('onLoad', options);
    },
    navigateBack() {
        swan.navigateBack({
            success: function () {
                console.log('navigateBack success');
            },
            fail: function (err) {
                console.log('navigateBack fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```


## swan.reLaunch

**解释**：关闭所有页面，打开到应用内的某个页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是|  -|  需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用=相连，不同参数用 & 分隔；如 ‘path?key=value&key2=value2’，如果跳转的页面路径是 tabBar 页面则不能带参数。|
|success| Function |   否 | -|  接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/7a5d527292a5ff0339bc3dc24803bc7c1557729741562" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="reLaunch">reLaunch</button>
</view>
```

* 在 js 文件中

```js
Page({
    reLaunch() {
        swan.reLaunch({
            url: '/api/api?key=value',
            success: function () {
                console.log('reLaunch success');
            },
            fail: function (err) {
                console.log('reLaunch fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```