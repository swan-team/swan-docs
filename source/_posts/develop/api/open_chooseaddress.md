---
title: 选择收货地址
header: develop
nav: api
sidebar: open_chooseaddress
---
## swan.chooseAddress

**解释**： 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success | Function |  否  |  -|返回用户选择的收货地址信息|
|fail   | Function  |  否  |  -|接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|最低版本
|---- | ---- | ---- |
|userName|String |  收货人姓名|-|
|postalCode  |String|  邮编|-|
|provinceCode|	String|	国标收货地址第一级地址国家码|最低支持版本 3.90.4 |
|provinceName|    String|  国标收货地址第一级地址|-|
|cityCode|	String|	国标收货地址第二级地址国家码|最低支持版本 3.90.4|
|cityName|    String|  国标收货地址第二级地址|-|
|countyCode|	String|	国标收货地址第三级地址国家码|最低支持版本 3.90.4 |
|countyName|  String|  国标收货地址第三级地址|-|
|townCode	|String	|国标收货地址第四级地址国家码	|最低支持版本 3.90.4 |
|townName|	String|	国标收货地址第四级地址	|最低支持版本 3.90.4 |
|detailInfo|  String|  详细收货地址信息|-|
|telNumber|   String|  收货人手机号码|-|
|nationalCode|	String	|收货地址国家码|-|

**示例**：

<a href="swanide://fragment/5d1a82023678a73b86f305e73aad9ebe1558336758577" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="chooseAddress">chooseAddress</button>
</view>
```

* 在 js 文件中

```js
Page({
    chooseAddress() {
        swan.chooseAddress({
            success: function (res) {
                console.log('chooseAddress success', res);
            },
            fail: function (err) {
                console.log('chooseAddress fail', err);
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
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|1002|用户取消操作错误码|
|1003|选择失败状态码|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|10001|内部错误|
|10002|网络请求失败|
|10004|用户拒绝(user not login)| -->
