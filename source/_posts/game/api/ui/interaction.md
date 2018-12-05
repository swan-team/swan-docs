---
title: 交互
layout: gamedoc
topic: ui
categoryName: api
---

### swan.showActionSheet()

显示操作菜单。

```js
swan.showActionSheet(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|itemList|Array.<string\>|是|按钮的文字数组，数组长度最大为 6|
|itemColor|hexColor|否|按钮的文字颜色，默认颜色为 `'#3c76ff'`|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.tapIndex|number|用户点击的按钮，从上到下的顺序，从 0 开始|

**示例：**

```js
swan.showActionSheet({
    itemList: ['item1', 'item2'],
    itemColor: '#ff0000',
    success: function (res) {
        console.log('点击按钮的索引', res.tapIndex);
    }
});
```

### swan.showModal()

显示模态对话框。

```js
swan.showModal(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|title|string|是|提示的标题|
|content|string|是|提示的内容|
|showCancel|boolean|否|是否显示取消按钮，默认为 true|
|cancelText|string|否|取消按钮的文字，最多 4 个字符，默认为 `'取消'`|
|cancelColor|hexColor|否|取消按钮的文字颜色，默认为 `'#000000'`|
|confirmText|string|否|确定按钮的文字，最多 4 个字符，默认为 `'确定'`|
|confirmColor|hexColor|否|确定按钮的文字颜色，默认为 `'#3c76ff'`|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.confirm|boolean|为 true 时，表示用户点击了确定按钮|
|res.cancel|boolean|为 true 时，表示用户点击了取消按钮|

**示例：**

```js
swan.showModal({
    title: '标题',
    content: '这是一个模态弹窗',
    cancelColor: '#ff0000',
    confirmColor: '#fff000',
    success: function (res) {
        if (res.confirm) {
            console.log('点击了确定');
        } else if (res.cancel) {
            console.log('点击了取消');
        }
    }
});
```

### swan.showToast()

显示消息提示框。

```js
swan.showToast(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|title|string|是|提示的内容|
|icon|string|否|图标，有效值 “success”、“loading”、“none”, 默认“none”|
|duration|number|否|提示的延迟时间，单位毫秒，默认：2000|
|mask|boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

icon 合法值：

|属性|描述|
|-|-|
|success|显示成功图标，此时 title 文本最多显示 7 个汉字长度。|
|loading|显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none|不显示图标，此时 title 文本最多可显示两行。默认值|

**示例：**

```js
swan.showToast({
    title: '标题',
    icon: 'success',
    duration: 1000,
    success: () => console.log('提示框显示成功')
});
```

### swan.showLoading()

显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。

```js
swan.showLoading(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|title|string|是|提示的内容|
|mask|boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.showLoading({
    title: '标题',
    mask: true,
    success: () => console.log('loading 提示框显示成功')
});
```

### swan.hideToast()

隐藏消息提示框。

```js
swan.hideToast()
```

**示例：**

```js
swan.showToast({
    title: '标题',
    icon: 'success',
    duration: 1000
});
setTimeout(function() {
    swan.hideToast();
}, 2000);
```

### swan.hideLoading()

隐藏 loading 提示框。

```js
swan.hideLoading(config)
```

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