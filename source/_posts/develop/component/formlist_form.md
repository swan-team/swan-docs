---
title: form 表单
header: develop
nav: component
sidebar: formlist_form
---

 

**解释**：表单，将 form 组件内的用户输入的`<switch/>   <input/>   <checkbox/>   <slider/>   <radio/>   <picker/>`提交。当点击`<form/>`表单中 form-type 为 submit 的`<button/>`组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/form.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型 | 默认值 | 必填 |说明|最低版本|
|-----|---- |---- |----|----|----|
|report-submit|Boolean| false | 否 |是否返回formId用于发送<a href="http://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/">模板消息</a> （工具上formId为`''`，请在真机上测试）。|1.12|
|report-type| String  | 'default' | 否 |模板消息的类型，report-submit为true时填写有效。<br>取值：default或subscribe。|3.105.3|
|template-id| String  |  | 否 |report-type 为 subscribe 时必填，发送订阅类模板消息所用的模板库标题ID，可通过<a href="http://smartprogram.baidu.com/docs/develop/serverapi/getTemplateLibraryList/">getTemplateLibraryList</a>获取|3.105.3|
|subscribe-id| String  |  | 否 |report-type 为 subscribe 时必填，发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br>注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |3.105.3|
| bindsubmit | EventHandle | | 否 | 携带 form 中的数据触发 submit 事件，`event.detail = {value : {'name': 'value'}, formId: '', message: '', status: ''}`,当report-type 为 subscribe 时，status 和message 中返回用户授权具体信息| |
| bindreset | EventHandle  |  | 否 |表单重置时会触发 reset 事件| |



**report-type有效值**：

|值 |说明|
|---- |---- |
| default |表单类模板消息|
| subscribe |订阅类模板消息，需要用户授权才可发送|


**report-type 为 subscribe时，status 和 message具体值**：

status 为 Number 类型，message 为 String类型，当用户永久拒绝授权的时候，建议开发者不要再展示订阅消息授权面板入口。

|status | message|
|---- |---- |
| 500101 |用户永久拒绝授权|
| 500102 |用户单次拒绝授权|
| 500103 |用户取消授权|
| 500104 |请求模板内容失败|
| 500105 |请求formId失败|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/form.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/76cdbf7140fe788bb467feeca6abaddf1565507977593" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <form
        bindsubmit="formSubmit"
        bindreset="formReset"
        report-submit="true"
        report-type="subscribe"
        subscribe-id="food"
        template-id="BD0001"
    >
        <view class="section">
            <view class="section-title">switch</view>
            <switch name="switch" checked/>
        </view>
        <view class="section">
            <view class="section-title">radio</view>
            <radio-group name="radio-group">
                <label><radio value="radio1" checked/>选中</label>
                <label class="label"><radio value="radio2"/>未选中</label>
            </radio-group>
        </view>
        <view class="section section-gap">
            <view class="section-title">checkbox</view>
            <checkbox-group name="checkbox">
                <label><checkbox value="checkbox1" checked/>选项一</label>
                <label class="label-checkbox"><checkbox  value="checkbox2"/>选项二</label>
            </checkbox-group>
        </view>
        <view class="section section-gap">
            <view class="section-title">slider</view>
            <slider name="slider" show-value ></slider>
        </view>
        <view class="section">
            <view class="section-title">input</view>
        </view>
         <input name="input" placeholder="这是一个输入框" />
        <view class="btn-area">
            <button formType="submit" type="primary">Submit</button>
            <button formType="reset">Reset</button>
        </view>
    </form>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {},
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        swan.showModal({
            content: '数据：' + JSON.stringify(e.detail.value),
            confirmText: '确定'
        });
    },
    formReset: function() {
        console.log('form表单reset');
    }
});

```
