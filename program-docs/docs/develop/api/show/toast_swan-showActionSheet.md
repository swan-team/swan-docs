---
title: swan.showActionSheet
header: develop
nav: api
sidebar: toast_swan-showActionSheet
webUrl: https://qft12m.smartapps.cn/api/showActionSheet/showActionSheet
---

**解释**：​显示操作菜单

## 方法参数 

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|itemList |   Array.&lt;string&gt;  |  是 | |  按钮的文字数组，数组长度最大为6个。|
|itemColor |  HexColor|    否   |#3c76ff|按钮的文字颜色。|
|success| Function  |  否  | | 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function |   否  | |  接口调用失败的回调函数|
|complete   | Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明  

|参数名 |类型  |说明|
|---- | ---- | ---- |
|tapIndex |   Number | 用户点击的按钮，从上到下的顺序，从0开始。|

## 示例

<a href="swanide://fragment/c96f91497b4edc0c93df37756919a2001574135826789" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/showActionSheet.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 代码示例 1 - 基础用法

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">基础用法</view>
    <button bind:tap="showActionSheet" type="primary" hover-stop-propagation="true">普通操作菜单</button> 
</view>
```

```js
Page({
    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
```
:::

### 代码示例 2 - 自定义按钮字体颜色

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义按钮字体颜色</view>
        <view>itemColor: '#00BC89'</view>
    </view>
    <button bind:tap="showActionSheetCustom" type="primary" hover-stop-propagation="true">自定义按钮颜色的操作菜单</button> 
</view>
```

```js
Page({
    showActionSheetCustom() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            itemColor: '#00BC89',
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
```

### 代码示例 3 - 按钮数量最多

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">按钮数量最多</view>
    <button bind:tap="showActionSheetMore" type="primary" hover-stop-propagation="true">6个按钮的操作菜单</button> 
</view>
```

```js
Page({
    showActionSheetMore() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四', '选项五', '选项六'],
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
```

### 代码示例 4 - 按钮数量最少

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">按钮数量最少</view>
    <button bind:tap="showActionSheetLess" type="primary" hover-stop-propagation="true">1个按钮的操作菜单</button> 
</view>
```

```js
Page({
    showActionSheetLess() {
        swan.showActionSheet({
            itemList: ['选项一'],
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            }
        });
    }
});
```

### 代码示例 5 - 带有操作结果提示

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">带有操作结果提示</view>
    <button bind:tap="showActionSheetResult" type="primary" hover-stop-propagation="true">带有操作结果提示的操作菜单</button> 
</view>
```

```js
Page({
    showActionSheetResult() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            success: res => {
                swan.showModal({
                    title: '操作成功',
                    content: '用户点击了第' + (res.tapIndex + 1) + '个按钮',
                    showCancel: false
                });
            },
            fail: err => {
                swan.showModal({
                    title: '操作取消',
                    content: '用户关闭了操作菜单',
                    showCancel: false
                });
            }
        });
    }
});
```

##  错误码
### Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|