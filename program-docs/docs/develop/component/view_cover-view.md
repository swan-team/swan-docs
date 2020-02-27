---
title: cover-view 文本视图
header: develop
nav: component
sidebar: view_cover-view
# webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/cover-view/cover-view
---



**解释**：覆盖在<a href="https://smartprogram.baidu.com/docs/develop/component/native/">原生组件</a>之上的文本视图。只支持嵌套cover-view、cover-image组件。客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，不支持嵌套在其它组件中使用。

##  属性说明 

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|:------ |:------ |:------ |:------ |:------ |
| scroll-top | number | | 否 | 设置顶部滚动偏移量，仅在设置了overflow-y: scroll成为滚动元素后生效 |


## 示例

<a href="swanide://fragment/97788bb33bef37a044972011e5960b561577360497251" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/cover-view.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###  代码示例 ：文本视图



 
:::codeTab
```swan
<map id="myMap"
     longitude="{{longitude}}"
     latitude="{{latitude}}">
    <cover-view class="cover-view">
        <cover-view class="container">
            <cover-view class="flex-wrp" style="flex-direction:row;">
              <cover-view class="flex-item demo-text-1"></cover-view>
              <cover-view class="flex-item demo-text-2"></cover-view>
              <cover-view class="flex-item demo-text-3"></cover-view>
            </cover-view>
        </cover-view>
    </cover-view>
</map>
```
 
```js
Page({
    data: {
        latitude: '40.042500',
        longitude: '116.274040'
    }
});
```
:::
 