---
title: 交互反馈
header: develop
nav: api
sidebar: show_toast
---

## swan.showToast


**解释：**显示消息提示框

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  |-| 提示的内容 |
|icon | String | 否  | success|图标，有效值` "success"、"loading"、"none"`。 |
|image  |  String | 否 | -| 自定义图标的本地路径，image 的优先级高于 icon |
|duration  |  Number | 否 |  2000| 提示的延迟时间，单位毫秒。 |
|success| Function |   否 | -| 接口调用成功的回调函数 |
|fail  |  Function |   否  |-| 接口调用失败的回调函数 |
|complete   | Function |   否| -|  接口调用结束的回调函数（调用成功、失败都会执行）|
|mask|Boolean|否|false|是否显示透明蒙层，防止触摸穿透。|

**icon有效值：**

|有效值 |说明  |
|---- | ---- |
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。  |

**示例：**
<a href="swanide://fragment/4eae9e20dfda147fe6634d9d8fcc11231548067816375" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>
```js
swan.showToast({
    title: '我是标题',
    icon: 'loading',
    duration: 1000,
});
```
<!-- #### 错误码
**Andriod**
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|302|无法找到调起协议对应端能力方法|
**iOS**
|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.showLoading


**解释：**显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  |-| 提示的内容|
|mask | Boolean| 否 |false|  是否显示透明蒙层，防止触摸穿透。|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function   | 否 |-|   接口调用失败的回调函数|
|complete  |  Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->

## swan.hideToast


**解释：** 隐藏消息提示框

**方法参数：**无

## swan.hideLoading

**解释：**隐藏 loading 提示框

**方法参数：**无

**示例：**
```js
swan.showLoading({
    title: '加载中',
    mask: true
});

setTimeout(function() {
    swan.hideLoading();
}, 2000);
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败| -->

## swan.showModal

**解释：**显示模态弹窗

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String|  是 | -| 提示的标题|
|content |String | 是 |-|  提示的内容|
|showCancel | Boolean|否  | true| 是否显示取消按钮 。|
|cancelText  |String | 否  |取消|取消按钮的文字，最多 4 个字符。|
|cancelColor |HexColor|    否  |#000000| 取消按钮的文字颜色。|
|confirmText |String | 否 | 确定| 确定按钮的文字，最多 4 个字符。|
|confirmColor |   HexColor  |  否 |#3c76ff|  确定按钮的文字颜色。|
|success| Function|    否  |-| 接口调用成功的回调函数|
|fail   | Function  |  否  |-|接口调用失败的回调函数|
|complete   | Function  |  否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|confirm |Boolean |为 true 时，表示用户点击了确定按钮 。 |
|cancel | Boolean |为 true 时，表示用户点击了取消。|

**示例：**
<a href="swanide://fragment/553a0685c5979cfe831b1178661476001540395468" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果
        </a>
```js
swan.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    cancelColor: '#999999',
    confirmColor: '#0099cc',
    success: function (res) {
        if (res.confirm) {
            console.log('用户点击了确定');
        } else if (res.cancel) {
            console.log('用户点击了取消');
        }
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->


## swan.showActionSheet

**解释：**​显示操作菜单

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|itemList |   Array.<string>  |  是 |-|  按钮的文字数组，数组长度最大为6个。|
|itemColor |  HexColor|    否   |#3c76ff|按钮的文字颜色。|
|success| Function  |  否  |-| 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function |   否  |-|  接口调用失败的回调函数|
|complete   | Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|tapIndex |   Number | 用户点击的按钮，从上到下的顺序，从0开始。|


**示例：**
<a href="swanide://fragment/cb742037e729ede5fd6efe8967dfd55f1540397056" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>


```js
swan.showActionSheet({
    itemList: ['同意', '一般', '不同意'],
    success: function (res) {
        console.log('用户点击了第' + (res.tapIndex + 1) + '按钮');
    }
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|202|解析失败，请检查参数是否正确。| -->