---
title: swan.getMenuButtonBoundingClientRect
header: develop
nav: api
sidebar: menu_info
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/getMenuButtonBoundingClientRect/getMenuButtonBoundingClientRect
---


> 基础库 3.20.3 开始支持，低版本需做兼容处理。

**解释**：获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

 
## 方法参数 

无

### 返回参数说明 

|参数	|类型	|说明|
|---|---|---|
|width|	number|	宽度，单位：px|
|height|	number|	高度，单位：px|
|top|	number|	上边界坐标，单位：px|
|right	|number|	右边界坐标，单位：px|
|bottom|	number|	下边界坐标，单位：px|
|left	|number|	左边界坐标，单位：px|
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getMenuButtonBoundingClientRect.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###  代码示例1 - 属性全集 

<a href="swanide://fragment/b7950613332a792d444e4e4842d063291569477029937" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
:::codeTab
```swan
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
:::
###  代码示例2 - 应用场景 

<a href="swanide://fragment/50a8932d2b9cd6ee093c3b6895f5f3d81576573561180" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
:::codeTab
```swan
<view class="status-height" style="height:{{ statusHeight }}px">状态栏</view>
<view class="nav-height"  style="height:{{ navHeight }}px">导航栏</view>
```
 

```js
Page({
    data: {
            statusHeight: 0,  //状态栏高度
            navHeight: 0      //导航栏高度
        },
    / 
     * 获取状态栏|导航栏高度,
     */
    onLoad (){
        let capsule = swan.getMenuButtonBoundingClientRect() ; //胶囊信息
        console.log(capsule)
        let that = this;
        swan.getSystemInfo({
            success(res) {
                console.log(capsule.height + (capsule.top - res.statusBarHeight) * 2)
                that.setData({
                    statusHeight: res.statusBarHeight,
                    navHeight: capsule.height + (capsule.top - res.statusBarHeight) * 2 // 与res.navigationBarHeight相同
                })
            }
        })
      
    }
});

```
:::