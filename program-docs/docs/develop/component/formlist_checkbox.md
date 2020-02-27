---
title: checkbox 多项选择器
header: develop
nav: component
sidebar: formlist_checkbox
# webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/checkbox/checkbox
---

 

**解释**：多项选择器

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|
|:---- |:---- |:---- |:---- |:---- |
|value | String  | | 否 |`<checkbox/>`标识，选中时触发`<checkbox-group/>`的 change 事件，并携带`<checkbox/>`的 value|
|disabled|Boolean| false| 否 | 是否禁用|
|checked|Boolean | false| 否 |当前是否选中，可用来设置默认选中|
|color| Color| #3c76ff | 否 | checkbox 的颜色，同 CSS 的 color|




## 示例

<a href="swanide://fragment/25ed2aed48756b51d8ee66247ad0e31c1577360470649" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/checkbox.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###  代码示例 

<a href="swanide://fragment/19b41700694c662e8dae6dd6a9d676c91572917630510" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
:::codeTab
```swan
<view class="wrap">
    <view class="title">默认样式</view>
    <view class="checkbox-group">
        <checkbox class="checkbox" checked>&nbsp;&nbsp;选中</checkbox>
        <checkbox class="checkbox" checked="false">&nbsp;&nbsp;未选中</checkbox>
        <checkbox class="checkbox" disabled>&nbsp;&nbsp;不可选</checkbox>
        <checkbox class="checkbox" color="#C3D1FF" checked>&nbsp;&nbsp;我是浅色的</checkbox>
    </view>
</view>
```
:::