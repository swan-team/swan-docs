---
title: checkbox-group 多项选择器组
header: develop
nav: component
sidebar: formlist_checkbox-group
# webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/checkbox/checkbox
---


 

**解释**：多项选择器组，内部由多个 checkbox 组成

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|
|:---- | :---- | :---- |:---- |:---- |
|bindchange | EventHandle  | | 否 |`<checkbox-group/>`中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}|

## 示例

<a href="swanide://fragment/25ed2aed48756b51d8ee66247ad0e31c1577360470649" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/checkbox.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



 

###  代码示例1 - 默认样式 

<a href="swanide://fragment/aaacfd95fdcd62bd6cade29e143a74ed1572917879202" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">默认样式</view>
    <checkbox-group name="checkbox">
        <label class="block border-bottom">
            <checkbox value="checkbox1" checked>多选项一</checkbox>
        </label>
        <label class="block border-bottom">
            <checkbox  value="checkbox2">多选项二</checkbox>
        </label>
    </checkbox-group>
</view>
```
:::
###  代码示例2 - 列表展示 

 

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">列表展示</view>
    <checkbox-group bindchange="checkboxChange">
        <label class="block border-bottom" s-for="item in items">
            <checkbox class="check-box" value="{{item.value}}" checked="{{item.checked}}" id="{{item.id}}">{{item.text}}</checkbox>
        </label>
    </checkbox-group>
</view>
```

 

```js
Page({
    data: {
        items: [
            {
                text: '多选项一',
                checked: true,
                id: '1'
            },
            {
                text: '多选项二',
                id: '2'
            },
            {
                text: '多选项三',
                id: '3'
            }
        ]
    }
});
```
:::
###  代码示例3 - 包含禁用选项 

 

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">
        <view>包含禁用选项</view>
        <view>disabled</view>
    </view>
    <checkbox-group bindchange="checkboxChange" >
        <label class="block border-bottom">              
            <checkbox value="checkbox1" checked/>可用选项
        </label>
        <label class="block border-bottom">              
            <checkbox value="checkbox1"/>可用选项
        </label>
        <label class="block border-bottom">
            <checkbox value="checkbox1" disabled color="#ccc"/>
            <text class="disabledText">禁用选项</text>
        </label>
        <label class="block border-bottom">
            <checkbox value="checkbox1" disabled color="#C3D1FF" checked/>
            <text class="disabledText">禁用选项</text>
        </label>
    </checkbox-group>
</view>
```
:::
###  代码示例4 - 默认不选中 

 

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">
        <view>默认不选中</view>
        <view>checked="false"</view>
    </view>
    <checkbox-group bindchange="checkboxChange" >
        <label class="block border-bottom">
            <checkbox value="checkbox1" checked/>多选项一
        </label>
        <label class="block border-bottom">
            <checkbox value="checkbox1"/>多选项二
        </label>
    </checkbox-group>
</view>
```
:::
###  代码示例5 - 自定义颜色 

 

:::codeTab
```swan
<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义颜色</view>
        <view>color="#00BC89"</view>
    </view>
    <checkbox-group bindchange="checkboxChange" >
        <label class="block border-bottom">
            <checkbox value="checkbox1" color="#00BC89" checked/>选项名称
        </label>
        <label class="block border-bottom">
            <checkbox color="#00BC89" value="checkbox1"/>选项名称
        </label>
    </checkbox-group>
</view>
```
:::
