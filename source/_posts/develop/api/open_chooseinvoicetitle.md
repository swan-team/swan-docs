---
title: 获取发票抬头
header: develop
nav: api
sidebar: open_chooseinvoicetitle
---
## swan.chooseInvoiceTitle

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。

**解释**： 选择用户的发票抬头，需要[用户授权](http://smartapp.baidu.com/docs/develop/api/open_authorize/#swan-authorize/) scope.invoiceTitle。
**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success | Function |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|type|    String|  抬头类型（0：单位，1：个人）|
|title|   String|  抬头名称|
|taxNumber|   String|  抬头税号|
|companyAddress|  String|  单位地址|
|telephone|   String|  手机号码|
|bankName|    String|  银行名称|
|bankAccount| String|  银行账号|
<!-- |errMsg|  String|  接口调用结果| -->

**示例**：

<a href="swanide://fragment/cc76d7bff883f25aae817297814658931559043491920" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="chooseInvoiceTitle">chooseInvoiceTitle</button>
</view>
```

* 在 js 文件中

```js
page({
    chooseInvoiceTitle() {
        swan.chooseInvoiceTitle({
            success: function (res) {
                console.log('chooseInvoiceTitle success', res);
            },
            fail: function (err) {
                console.log('chooseInvoiceTitle fail', err);
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|
|1002|取消选择状态码|
|1003|选择失败状态码|

**iOS**

|错误码|说明|
|--|--|
|1001|解析失败，请检查参数是否正确。|
|1002|取消获取发票|
|1003|获取发票失败| -->