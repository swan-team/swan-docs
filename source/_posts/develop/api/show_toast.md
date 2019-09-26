---
title: 交互反馈
header: develop
nav: api
sidebar: show_toast
---

## swan.showToast


**解释**：显示消息提示框

**方法参数**：Object object

**`object`参数说明**：

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

**icon有效值**：

|有效值 |说明  |
|---- | ---- |
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。  |

**示例**：
<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.showToast({
    title: 'success',
    icon: 'success',
    duration: 5000,
    mask: true,
    success: res => {
        console.log('showToast success');
    },
    fail: err => {
        console.log('showToast fail', err);
    }
});
```
 

## swan.showLoading


**解释**：显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  |-| 提示的内容|
|mask | Boolean| 否 |false|  是否显示透明蒙层，防止触摸穿透。|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function   | 否 |-|   接口调用失败的回调函数|
|complete  |  Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
swan.showToast({
    title: '正在加载...',
    icon: 'loading'
});
   
```

## swan.hideToast


**解释**： 隐藏消息提示框

**方法参数**：Object object

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success|	function|		否||	接口调用成功的回调函数|
|fail	|function		|否||	接口调用失败的回调函数|
|complete|	function	|	否||	接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js

    showToast() {
        swan.showToast({
            title: 'toast',
            icon: 'none'
        });
    },
    hideToast() {
        swan.hideToast();
    }

```

## swan.hideLoading

**解释**：隐藏 loading 提示框

**方法参数**：Object object

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success	|function	|	否||接口调用成功的回调函数|
|fail|	function	|	否	||接口调用失败的回调函数|
|complete|	function|		否||	接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

    showLoading() {
        swan.showLoading({
            title: 'loading'
        });
    },
    hideLoading() {
        swan.hideLoading();
    }

```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败| -->

## swan.showModal

**解释**：显示模态弹窗

**方法参数**：Object object

**`object`参数说明**：

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

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|confirm |Boolean |为 true 时，表示用户点击了确定按钮 。 |
|cancel | Boolean |为 true 时，表示用户点击了取消。|

**示例**：
<a href="swanide://fragment/35d07dce512008b2cd12cc231e86b0f41569463801299" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.showModal({
    title: '标题',
    content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
    showCancel: false
});

showModalNotitle() {
    swan.showModal({
        content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
        confirmText: '确定',
        confirmColor: '色值',
        cancelText: '取消',
        cancelColor	: '确定',
    });
}
```


## swan.showActionSheet

**解释**：​显示操作菜单

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|itemList |   `Array.<string>`  |  是 |-|  按钮的文字数组，数组长度最大为6个。|
|itemColor |  HexColor|    否   |#3c76ff|按钮的文字颜色。|
|success| Function  |  否  |-| 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function |   否  |-|  接口调用失败的回调函数|
|complete   | Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|tapIndex |   Number | 用户点击的按钮，从上到下的顺序，从0开始。|


**示例**：
<a href="swanide://fragment/5b21419f4f4abd6685556b4f7e524cd81569464246835" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            itemColor: '#333',
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            },
            fail: err => {
                console.log('showActionSheet fail', err);
            }
        });
    }
});
```
