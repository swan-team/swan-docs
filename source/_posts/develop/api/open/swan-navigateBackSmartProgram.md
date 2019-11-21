---
title: swan.navigateBackSmartProgram
header: develop
nav: api
sidebar: swan-navigateBackSmartProgram
---
 

 

>  基础库 1.10.8 版本开始支持。在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**： 返回到上一个小程序。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|extraData | Object | 否 | | 需要返回给上一个小程序的数据，上一个小程序可在 [App.onLaunch()，App.onShow()](http://smartprogram.baidu.com/docs/develop/framework/app_service_register/) 中获取到这份数据。|
|success | Function |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**：
<a href="swanide://fragment/df2bcb7ca1229b466e859bc1a40c21091559044133015" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateBackSmartProgram">navigateBackSmartProgram</button>
</view>
```

* 在 js 文件中

```js
Page({
    navigateBackSmartProgram() {
        swan.navigateBackSmartProgram({
            extraData: {
                foo: 'baidu'
            },
            success: res => {
                console.log('navigateBackSmartProgram success', res);
            },
            fail: err => {
                console.log('navigateBackSmartProgram fail', err);
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

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

