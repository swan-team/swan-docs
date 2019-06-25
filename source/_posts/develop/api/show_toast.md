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
<a href="swanide://fragment/01994f6893c352812490ee52cabd36ef1560167169455" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="showToast" type="primary" hover-stop-propagation="true">点击弹出默认toast</button>
        <button bind:tap="showToastIcon" type="primary" hover-stop-propagation="true">点击弹出设置icon的toast</button>
        <button bind:tap="showToastDuration" type="primary" hover-stop-propagation="true">点击弹出设置duration的toast</button>
        <button bind:tap="showToastLoading" type="primary" hover-stop-propagation="true">点击弹出显示loading的toast</button>
        <button bind:tap="hideToast" type="primary" hover-stop-propagation="true">点击隐藏toast</button>
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
        title: 'toast'
    },

    onHide() {
        swan.hideToast();
    },

    showToast() {
        swan.showToast({
            title: '默认'
        });
    },

    showToastIcon() {
        swan.showToast({
            title: 'success',
            icon: 'success'
        });
    },

    showToastDuration() {
        swan.showToast({
            duration: 5000,
            title: 'duration 5000'
        });
    },

    showToastLoading() {
        swan.showToast({
            title: '正在加载...',
            icon: 'loading'
        });
    },

    hideLoading() {
        swan.hideLoading();
    },

    hideToast() {
        swan.hideToast();
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

<a href="swanide://fragment/57166a3f5efd17f9397b6abde17b57b61557727729286" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showLoading">showLoading</button>
</view>
```

* 在 js 文件中

```js
Page({
    showLoading() {
        swan.showLoading({
            title: 'loading',
            mask: true,
            success: function () {
                console.log('showLoading success');
            },
            fail: function (err) {
                console.log('showLoading fail', err);
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

## swan.hideToast


**解释**： 隐藏消息提示框

**方法参数**：无

**示例**：

<a href="swanide://fragment/a0acd2d1849d0584f88c644db70b4c1f1557727806672" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showToast">showToast</button>
    <button type="primary" bindtap="hideToast">hideToast</button>
</view>
```

* 在 js 文件中

```js
Page({
    showToast() {
        swan.showToast({
            title: 'toast',
            duration: 10000
        });
    },
    hideToast() {
        swan.hideToast();
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

## swan.hideLoading

**解释**：隐藏 loading 提示框

**方法参数**：无

**示例**：

<a href="swanide://fragment/f9c9c15b36a79c338e7ff389eb3eccde1557727891494" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showLoading">showLoading</button>
    <button type="primary" bindtap="hideLoading">hideLoading</button>
</view>
```

* 在 js 文件中

```js
Page({
    showLoading() {
        swan.showLoading({
            title: 'loading'
        });
    },
    hideLoading() {
        swan.hideLoading();
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
<a href="swanide://fragment/76a314862cb93d31184b7a251cc5cd061560167300670" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="showModal" type="primary" hover-stop-propagation="true">有标题的modal</button>
        <button bind:tap="showModalNotitle" type="primary" hover-stop-propagation="true">无标题的modal</button>
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
        title: 'modal'
    },

    showModal() {
        swan.showModal({
            title: '标题',
            content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
            showCancel: false
        });
    },

    showModalNotitle() {
        swan.showModal({
            content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
            confirmText: '确定',
            cancelText: '取消'
        });
    }
});
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
<a href="swanide://fragment/cb742037e729ede5fd6efe8967dfd55f1540397056" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="showActionSheet" class="button" type="default" hover-stop-propagation="true">弹出action sheet</button>
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
        title: 'action-sheet'
    },

    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            itemColor: '#333',
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
```
