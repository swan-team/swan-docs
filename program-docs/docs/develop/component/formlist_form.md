---
title: form 表单
header: develop
nav: component
sidebar: formlist_form
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/form/form
---

 

**解释**：表单，将 form 组件内的用户输入的`<switch/>   <input/>   <checkbox/>   <slider/>   <radio/>   <picker/>`提交。当点击`<form/>`表单中 form-type 为 submit 的`<button/>`组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。


##  属性说明 

|属性名 |类型 | 默认值 | 必填 |说明|最低版本|
|:-----|:---- |:---- |:----|:----|:----|
|report-submit|Boolean| false | 否 |是否返回formId用于发送<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/">模板消息</a> （工具上formId为`''`，请在真机上测试）。|1.12<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|report-type| String  | 'default' | 否 |模板消息的类型，report-submit为true时填写有效。<br>取值：default或subscribe。|3.105.3<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|template-id| String  |  | 否 |report-type 为 subscribe 时必填，发送订阅类模板消息所用的模板库标题ID，可通过<a href="https://smartprogram.baidu.com/docs/develop/serverapi/getTemplateLibraryList/">getTemplateLibraryList</a>获取|3.105.3<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|subscribe-id| String  |  | 否 |report-type 为 subscribe 时必填，发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br>注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |3.105.3<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
| bindsubmit | EventHandle | | 否 | 携带 form 中的数据触发 submit 事件，`event.detail = {value : {'name': 'value'}, formId: '', message: '', status: ''}`,当report-type 为 subscribe 时，status 和message 中返回用户授权具体信息| -|
| bindreset | EventHandle  |  | 否 |表单重置时会触发 reset 事件|- |



###  report-type有效值 

|值 |说明|
|:---- |:---- |
| default |表单类模板消息|
| subscribe |订阅类模板消息，需要用户授权才可发送|


###  report-type 为 subscribe时，status 和 message具体值 

status 为 Number 类型，message 为 String类型，当用户永久拒绝授权的时候，建议开发者不要再展示订阅消息授权面板入口。

|status | message|
|:---- |:---- |
| 500101 |用户永久拒绝授权|
| 500102 |用户单次拒绝授权|
| 500103 |用户取消授权|
| 500104 |请求模板内容失败|
| 500105 |请求formId失败|



## 示例

<a href="swanide://fragment/ae81ba04b8d220d2fdabd48d5a85d29e1577362417374" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/form.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###  代码示例 : 普通表单 

 

* 在 swan 文件中

```xml
<view class="wrap">
    <form bindsubmit="formSubmit"
        bindreset="formReset">
        <view class="card-area">
            <view class="top-description border-bottom">开关选择器</view>
            <view class="item-scroll">
                <text class="switch-text">开关</text>
                <switch></switch>
            </view>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">单项选择器</view>
            <radio-group name="radio-group">
                <radio class="block border-bottom" value="radio1">单选项一</radio>
                <radio class="block" value="radio2">单选项二</radio>
            </radio-group>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">多项选择器</view>
            <checkbox-group name="checkbox">
                <label class="block border-bottom">
                    <checkbox value="checkbox1">多选项一</checkbox>
                </label>
                <label class="block border-bottom">
                    <checkbox value="checkbox2">多选项二</checkbox>
                </label> 
                <label class="block">
                    <checkbox value="checkbox2">多选项三</checkbox>
                </label>
            </checkbox-group>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">滑块选择器</view>
            <slider class='slider' activeColor="#3388FF" block-size="20" name="slider"></slider>
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">输入框</view>
            <input name="input" class="ipt" placeholder="请在此输入" />
        </view>
        <view class="card-area">
            <view class="top-description border-bottom">提交表单</view>
            <button formType="submit" type="primary">提交</button>
            <button formType="reset">清空</button>
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


## 参考示例

###  参考示例 1: 模板类型表单 

<a href="swanide://fragment/0cf7c53906fff54ad2a10034cdfb8ef21575461381127" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <form report-submit="{{true}}" report-type="subscribe" template-id="BD0003" subscribe-id="8026" bindsubmit="formSubmit"
        bindreset="formReset">
            <button formType="submit" type="primary">report-type为subscribe</button>
        </view>
    </form>
</view>

<view class="wrap">
    <form report-submit="{{true}}" report-type="default" bindsubmit="formSubmit"
        bindreset="formReset">
            <button formType="submit" type="primary">report-type为default</button>
        </view>
    </form>
</view>
```
* 在 js 文件中

```javascript
Page({
    onLoad() {
        // 此组件需要在登录  态下使用
        swan.login()
    },
    formSubmit(e) {
        swan.showModal({
            title: '表单数据',
            content: JSON.stringify(e.detail.message) + '/' +JSON.stringify(e.detail.status),
            confirmText: '确定',
            showCancel: false
        });  
    }
});
```

###  参考示例 2:获取 getTemplateLibraryList 示例  

<a href="swanide://fragment/d422d409d3a0257de70e9007b96871bc1575446314278" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">点击获取Access Token</view>
        <button bind:tap="AccessToken" type="primary" hover-stop-propagation="true">button</button>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">点击获取getTemplateLibraryList
</view>
        <button bind:tap="getTemplateLibraryList" type="primary" hover-stop-propagation="true">button</button>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        access_token: ''
    },
    AccessToken() {
        swan.request({
            url: 'https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=WPGsbTTGEQ2VRnNcEIjyo5nT1wGxc3PZ&client_secret=zkDSFBfXvHtmtMAsNrQ8sFN9DNLFNZE4&scope=smartapp_snsapi_base',
            method: 'POST',
            success: res => {
                console.log('request success', res);
                console.log('access_token', res.data.access_token);
                this.setData('access_token', res.data.access_token)
                swan.showModal({
                    title: '请求到的数据',
                    content: JSON.stringify(res.data.data),
                    showCancel: false
                });
            },
            fail: err => {
                console.log('request fail', err);
            }
        });
    },
    getTemplateLibraryList() {
        let access_token = this.getData('access_token');
        console.log(access_token)
        swan.request({
            url: 'https://openapi.baidu.com/rest/2.0/smartapp/template/librarylist?access_token=24.2bd968d94d25bba71157b82890e97422.2592000.1578037913.282335-11136662&offset=2&count=2',
            method: 'POST',
            success: res => {
                console.log('request success', res);
            },
            fail: err => {
                console.log('request fail', err);
            }
        });
    }
});
```

