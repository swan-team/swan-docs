---
title: 导航
header: develop
nav: api
sidebar: show_tab
---

> * 以下 5 个 API 都有与之功能一致的 [navigator 组件](/develop/component/nav/) 声明方式。
* 如果两种方式都能满足您的使用场景，推荐您使用 [navigator 组件](/develop/component/nav/) 实现相应的导航功能，以便更好的被搜索引擎理解。


## swan.navigateTo

**解释**：保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 swan.navigateBack 可以返回到原页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/navigateTo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String  |是| -|  需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function  |  否  |-|  接口调用成功的回调函数|
|fail  |  Function  |  否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：
<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 js 文件中

```js

navigateTo(e) {
    swan.navigateTo({
        url: '/pages/detail/detail',
        success: res => {
            console.log('navigateTo success')
        },
        fail: err => {
            console.log('navigateTo fail')
        }
    });
},

```
**Bug & Tip**：
jssdk 在 web-view 中使用 swan.navigateTo 接口跳转 success、fail、complete 回调函数不显示。
 
## swan.redirectTo

**解释**：关闭当前页面，跳转到应用内的某个页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/navigateTo.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | -| 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function |   否  |-|  接口调用成功的回调函数|
|fail   | Function |   否  |-|  接口调用失败的回调函数|
|complete  |  Function  |  否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
swan.redirectTo({
    url: '/api/api?key1=value1&key2=value2',
    success: res => {
        console.log('redirectTo success');
    },
    fail: err => {
        console.log('redirectTo fail', err);
    }
});
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

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
swan.switchTab({
    url: '/api/api',
    success: res => {
        console.log('switchTab success');
    },
    fail: err => {
        console.log('switchTab fail', err);
    }
});

```

## swan.navigateBack

**解释**：关闭当前页面，返回上一页面或多级页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/navigateTo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|delta  | Number | 否  |1|  返回的页面数，如果 delta 大于现有页面数，则返回到首页1。|
|success|	function|		否|-| 	接口调用成功的回调函数|	
|fail|	function|		否|	-| 接口调用失败的回调函数|	
|complete|	function|		否|-| 	接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
            success: res => {
                console.log('navigateTo success');
            },
            fail: err => {
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
            success: res => {
                console.log('navigateBack success');
            },
            fail: err => {
                console.log('navigateBack fail', err);
            }
        });
    }
});
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

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

swan.reLaunch({
    url: '/api/api?key=value',
    success: res => {
        console.log('reLaunch success', res);
    },
    fail: err => {
        console.log('reLaunch fail', err);
    }
});
    
```