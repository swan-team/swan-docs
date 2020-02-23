---
title:  模拟器功能
header: develop
nav: devtools
sidebar: smartappdebug_function_monitor
---




模拟器提供了和百度App客户端一致的运行环境，对于绝大部分的 API 均能够在模拟器上呈现出与客户端一致的状态。
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/tool/simulator1.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

### 切换设备
开发者可以选择不同的设备，也可以添加自定义设备来调试小程序在不同机型上的适配问题。
### 切换百分比
开发者可以控制模拟屏幕的显示比例。
### 模拟操作
在模拟器进行调试的时候，很多真实手机上的操作，比如截屏、震动等，可以通过模拟操作面板来模拟。
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/tool/simulator2.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

**功能介绍**：

|功能|说明|
|--|--|
|Home|切后台|
|返回|返回上一页|
|扫码|设置扫码返回结果。当未设置扫码返回结果时，调用swan.scanCode api会出现图标跳动提示，提示开发者设置扫码返回结果。|
|震动|模拟手机震动|
|webview|当前页面有web-view组件时，点击打开当前web-view组件调试器|
|授权管理|打开授权管理页面|
|截屏|模拟手机截屏操作|
|内存警告|模拟内存警告|
|网络|切换网络|

### 独立窗口
开发者可以通过点击|独立窗口|按钮，将模拟器区域从开发者工具主窗口弹出，以独立窗口的形式展现。
### 布局切换
在模拟器设备宽度小于1000时可将模拟器的位置与编辑器、调试器进行左右切换