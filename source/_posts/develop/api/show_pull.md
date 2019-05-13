---
title: 下拉刷新
header: develop
nav: api
sidebar: show_pull
---
## onPullDownRefresh

详情参见<a href="http://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。

## swan.startPullDownRefresh

**解释：**开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function |   否  | -|接口调用成功的回调函数|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

<a href="swanide://fragment/52a39e929f29f6e6e6673dd65f59e45c1557730225489" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startPullDownRefresh">startPullDownRefresh</button>
</view>
```

* 在 js 文件中

```js
Page({
    startPullDownRefresh() {
        swan.startPullDownRefresh({
            success: function () {
                console.log('startPullDownRefresh success');
            },
            fail: function (err) {
                console.log('startPullDownRefresh fail', err);
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

 
## swan.stopPullDownRefresh

**解释：** 停止当前页面下拉刷新。

**方法参数：** 无

**示例：**

<a href="swanide://fragment/400bd77feef9dce5451ac6d9b1939ac31557730312251" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startPullDownRefresh">startPullDownRefresh</button>
    <button type="primary" bindtap="stopPullDownRefresh">stopPullDownRefresh</button>
</view>
```

* 在 js 文件中

```js
Page({
    startPullDownRefresh() {
        swan.startPullDownRefresh();
    },
    stopPullDownRefresh() {
        swan.stopPullDownRefresh({
            success: function () {
                console.log('stopPullDownRefresh success');
            },
            fail: function (err) {
                console.log('stopPullDownRefresh fail', err);
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

.wrap button {
    margin-bottom: 30rpx;
}
```