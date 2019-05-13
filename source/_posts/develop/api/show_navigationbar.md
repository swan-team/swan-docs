---
title: 设置导航条
header: develop
nav: api
sidebar: show_navigationbar
---
## swan.setNavigationBarTitle

**解释：**动态设置当前页面的标题。

**方法参数：** Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title   |String|  是 |-|  页面标题|
|success |Function |   否 |-|   接口调用成功的回调函数|
|fail   | Function|    否 |-|   接口调用失败的回调函数|
|complete   | Function   | 否| -|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
<a href="swanide://fragment/838b39ada87c91e7cb866a4d9e65de2e1540397160" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.setNavigationBarTitle({
    title: '我是页面标题'
});
```
<!-- #### 错误码
**Andriod**
|错误码|说明|
|--|--|
|1001|执行失败 |
**iOS**
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.showNavigationBarLoading

**解释：** 该方法在当前页面显示导航条加载动画。

**方法参数：**无

**示例：**

<a href="swanide://fragment/3d496fc2607b3bd1b8ffedef5228609d1557728152780" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showNavigationBarLoading">showNavigationBarLoading</button>
</view>
```

* 在 js 文件中

```js
Page({
    showNavigationBarLoading() {
        swan.showNavigationBarLoading();
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```


## swan.hideNavigationBarLoading

**解释：** 隐藏导航条加载动画。

**方法参数：**无

**示例：**

<a href="swanide://fragment/0060abe0cf362da58c48f49c569351991557728006673" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showNavigationBarLoading">showNavigationBarLoading</button>
    <button type="primary" bindtap="hideNavigationBarLoading">hideNavigationBarLoading</button>
</view>
```

* 在 js 文件中

```js
Page({
    showNavigationBarLoading() {
        swan.showNavigationBarLoading();
    },
    hideNavigationBarLoading() {
        swan.hideNavigationBarLoading();
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 30rpx;
}
```

## swan.setNavigationBarColor

**解释：**动态设置当前页面导航条的颜色。

**方法参数：** Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|frontColor | String|  是  |-| 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000。|
|backgroundColor| String | 是  |-| 背景颜色值，有效值为十六进制颜色。|
|animation  | Object  |否  |-| 动画效果|
|animation.duration|  Number | 否  |0|动画变化时间，单位：毫秒。|
|animation.timingFunc |   String | 否  |linear| 动画变化方式  |
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail|    Function |   否  |-| 接口调用失败的回调函数|
|complete|    Function |   否   |-|接口调用结束的回调函数（调用成功、失败都会执行）|

**animation.timingFunc 有效值：**

|值  | 说明|
| ---- |---- |
|linear|  动画从头到尾的速度是相同的。|
|easeIn | 动画以低速开始|
|easeOut |动画以低速结束。|
|easeInOut  | 动画以低速开始和结束。|

<!-- **success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- |---- |
|errMsg | String  |调用结果| -->


**示例：**

<a href="swanide://fragment/0db7b37e85705e66e6f53956f0a7e5091557728238505" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setNavigationBarColor">setNavigationBarColor</button>
</view>
```

* 在 js 文件中

```js
Page({
    setNavigationBarColor() {
        swan.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ff0000',
            animation: {
                duration: 500,
                timingFunc: 'linear'
            },
            success: function () {
                console.log('setNavigationBarColor success');
            },
            fail: function (err) {
                console.log('setNavigationBarColor fail', err);
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
