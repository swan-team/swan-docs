---
title: 菜单
header: develop
nav: api
sidebar: menu_info
---


## swan.getMenuButtonBoundingClientRect

> 基础库 3.20.3 开始支持，低版本需做兼容处理。

**解释**：获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getMenuButtonBoundingClientRect.png"  class="demo-qrcode-image" />

**方法参数**： 无

**返回参数说明**：

|参数	|类型	|说明|
|--|--|--|
|width|	number|	宽度，单位：px|
|height|	number	|高度，单位：px|
|top	|number|	上边界坐标，单位：px|
|right|	number|	右边界坐标，单位：px|
|bottom|	number	|下边界坐标，单位：px|
|left	|number|	左边界坐标，单位：px|
 
**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/getMenuButtonBoundingClientRect.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/b7950613332a792d444e4e4842d063291569477029937" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">  
        <view class="list-area border-bottom" s-for="item in infoList">
            <view class="list-item-key-4">{{item.chinaName}}}</view>
            <view class="list-item-value">{{item.value}}</view>
        </view>        
        <button type="primary" bindtap="getMenuButtonBoundingClientRect">点击获取胶囊布局信息</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        result: '',
        infoList: [{
            chinaName: '高度',
            engName: 'height', 
            value: ''
        }, {
            chinaName: '宽度',
            engName: 'width', 
            value: ''
        }, {
            chinaName: '距下',
            engName: 'bottom', 
            value: ''
        }, {
            chinaName: '距左',
            engName: 'left', 
            value: ''
        }, {
            chinaName: '距右',
            engName: 'right', 
            value: ''
        }, {
            chinaName: '距上',
            engName: 'top', 
            value: ''
        }]
    },
    getMenuButtonBoundingClientRect() {
        try {
            const result = swan.getMenuButtonBoundingClientRect();
            console.log('getMenuButtonBoundingClientRect success', result);
            this.updateInfoList(result);
        } catch (err) {
            console.log('getMenuButtonBoundingClientRect fail', err);
        }
    },
    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            if (res[infoList[i].engName] === '') {
                infoList[i].value = '暂无';
            } else {
                infoList[i].value = res[infoList[i].engName]+ "px";
            }
        }
        this.setData('infoList', infoList);
    }
});
```


**Bug & Tip**

- 基础库 3.130.1 之前，入参错误时会返回一个`Error`对象，接口调用失败时会返回一个对象，对象中包含`errCode`和`errMsg`。
- 基础库 3.130.1 及以后，入参错误和接口调用失败时都会返回一个`Error`对象。