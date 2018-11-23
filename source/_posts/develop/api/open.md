---
title: 开放接口
header: develop
nav: api
sidebar: open
---
### 开放接口 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_login/#login">login</a>| 调用接口 swan.login 获取 临时登录凭证（code）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_login/#checkSession">checkSession</a>|通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 swan.checkSession 接口 检测当前用户登录态是否有效，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_authorize/#authorize">authorize</a>|提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getSwanId">getSwanId</a>|获取 swanid。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getUserInfo">getUserInfo</a>|获取用户信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_setting/#openSetting">openSetting</a>|调起客户端智能小程序设置界面，返回用户设置的操作结果。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_setting/#getSetting">getSetting</a>|获取用户的当前设置|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_share/#onShareAppMessage">onShareAppMessage</a>|在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_chooseaddress/#chooseAddress">chooseAddress</a>|调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment">requestPolymerPayment </a><br/>版本：swanjs 1.8.5 版本开始支持。|百度聚合收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。了解更多信息，请查看 [百度电商开放平台：产品介绍](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_3_business/mini_program_cashier/product_intro.md)|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_chooseinvoicetitle/#chooseInvoiceTitle">chooseInvoiceTitle</a>|选择用户的发票抬头。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram">navigateToSmartProgram</a>|打开另一个小程序。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateBackSmartProgram">navigateBackSmartProgram</a>|返回到上一个小程序。|




<!-- 登录
-----

智能小程序可以通过百度官方提供的登录能力方便地获取百度提供的用户身份标识，快速建立智能小程序内的用户体系。

**流程说明**
1、调用 swan.login() 获取 **临时登录凭证code** ，并回传到开发者服务器。
2、开发者服务器以 code 换取 **session_key**。
3、调用 swan.getUserInfo() 获取用户信息。
4、[点击查看详细流程](https://smartprogram.baidu.com/docs/develop/server/oauth/)。

### login

**解释：** 调用接口 swan.login 获取 **临时登录凭证（code）**

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|code|String|用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息|

**示例：**

```js
swan.login({
    success: function (res) {
        swan.request({
            url: 'https://xxx/xxx', // 开发者服务器地址
            data: {
                code: res.code
            }
        });
    },
    fail: function (err) {
        console.log('login fail', err);
    }
});
```

#### 登录凭证校验

临时登录凭证校验接口是一个 HTTPS 接口，开发者服务器使用 **临时登录凭证(code)** 获取 session_key。

**注意：**

1、会话密钥 session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，开发者服务器**不应该把会话密钥下发到智能小程序，也不应该对外提供这个密钥**。
2、临时登录凭证 code 只能使用一次。

**接口地址：**

`https://openapi.baidu.com/nalogin/getSessionKeyByCode`

**请求参数**

|参数|说明|
| ---- | ---- |
|client_id| 开放平台申请的 App Key|
|sk| 开放平台申请的 App Secret|
|code | swan.login 返回的临时登录凭证|

**Bug & Tip**
1、tip: 调用 login 会引起登录态的刷新，之前的 session_key 可能会失效。

### checkSession

**解释：**通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由百度 App 维护，对开发者透明。开发者可以调用 swan.checkSession 接口 **检测当前用户登录态是否有效**，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.checkSession({
    success: function (res) {
        console.log('登录态有效');
    },
    fail: function (err) {
        console.log('登录态无效');
    }
});
```

### 用户数据的签名验证和加解密

智能小程序可以通过各种前端接口获取百度提供的开放数据。考虑到开发者服务器也需要获取这些开放数据，百度会对这些数据做签名和加密处理。开发者后台拿到开放数据后可以对数据进行校验签名和解密，来保证数据不被篡改。

**加密数据解密算法**

接口如果涉及敏感数据，接口的明文内容将不包含这些敏感数据。开发者如需要获取敏感数据，需要对接口返回的加密数据（data）进行对称解密。

解密过程：开发者智能小程序（通过 swan.request）将加密数据发送至自身 Server 进行解密后返回智能小程序。

**解密算法如下：**

1、对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充。
2、对称解密的目标密文为 Base64_Decode(data)。
3、对称解密秘钥 AESKey = Base64_Decode(session_key), AESKey 是24字节。
4、对称解密算法初始向量 为Base64_Decode(iv)，其中iv由数据接口返回。


授权
-----

### authorize

**解释：**提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权智能小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。

**参数：**Object

**Object参数说明：**

|参数名  |类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|scope  | String| 是  | 需要获取权限的 scope，详见 scope 列表|
|success |Function|    否  | 接口调用成功的回调函数|
|fail |   Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**scope 列表**

|scope  | 对应接口  |  描述|
|---- | ---- | ---- |
|scope.userInfo | swan.getUserInfo | 用户信息 |
|scope.userLocation | swan.getLocation, swan.chooseLocation  | 地理位置 |
|scope.writePhotosAlbum  |swan.saveImageToPhotosAlbum  | 保存到相册 |
|scope.address | swan.chooseAddress | 收货地址 |
|scope.invoiceTitle | swan.chooseInvoiceTitle | 发票抬头 |
|scope.record | swan.getRecorderManager | 录音功能 |
|scope.camera  | `<camera/>` | 摄像头|

**success返回参数说明：**

|参数名  |类型 | 说明|
|---- | ---- | ---- |
|errMsg | String | 调用结果|

**示例：**

```js
swan.authorize({
  scope: 'scope.userLocation',
  success: function (res) {
    // 用户已经同意智能小程序使用定位功能
    swan.getLocation();
  }
});
```

**Bug & Tip**

1、tip: 授权操作为异步操作，完成前请不要多次调用。

用户信息
-----

### swanid 机制说明

swanid 是用户使用智能小程序时的标识符，开发者可以通过 swanid 来区分用户的唯一性。

1、用户在非登陆情况下使用智能小程序时，在同一台设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的 swanid。
2、用户在登陆情况下使用智能小程序时，在多台不同设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的 swanid。
3、用户使用同一台设备时，在非登陆情况下与登陆情况下使用同一个智能小程序，得到的 swanid 是不同的。

### getSwanId

**解释：**获取 swanid。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|errno  | String  |errno|
|data  | Object  |{swanid}|
|errmsg  | String  |errmsg|

**示例：**

```js
swan.getSwanId({
    success: function (res) {
        console.log(res.data.swanid);
    }
});
```

### getUserInfo

**解释：**获取用户信息

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|userInfo  | Object  |用户信息对象|
|data  | String  |包括敏感数据在内的完整用户信息的加密数据，加解密逻辑参考[用户数据的签名验证和加解密](https://smartprogram.baidu.com/docs/develop/api/open/#%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E7%9A%84%E7%AD%BE%E5%90%8D%E9%AA%8C%E8%AF%81%E5%92%8C%E5%8A%A0%E8%A7%A3%E5%AF%86)|
|iv | String | 加密算法的初始向量|


**userInfo参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|nickName  | String  |用户名|
|avatarUrl  | String  |用户头像|
|gender | String | 性别:值为1时是男性，值为2时是女性。|

**示例：**
```js
swan.getUserInfo({
    success: function (res) {
        console.log('用户名', res.userInfo.nickName);
    }
});
```

设置
-----

### openSetting

**解释：**调起客户端智能小程序设置界面，返回用户设置的操作结果。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权|


**示例：**

```js
swan.openSetting({
    success: function (res) {
        console.log(res.authSetting['scope.userInfo']);
        console.log(res.authSetting['scope.userLocation']);
    }
});
```

### getSetting

**解释：**获取用户的当前设置

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权|


**示例：**

```js
swan.getSetting({
    success: function (res) {
        console.log(res.authSetting['scope.userInfo']);
        console.log(res.authSetting['scope.userLocation']);
    }
});
```

分享
-----

### onShareAppMessage

**解释：**在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。

- 用户点击分享按钮的时候会调用
- 此事件需要 return 一个`Object`，用于自定义分享内容

**参数：**Object

**Object参数说明：**

|参数名 |类型  |说明  |
|---- | ---- | ---- |
|from |String  |  分享事件来源。button：页面内转发按钮；menu：右上角分享菜单  |
|currentTarget |Object  |  如果 from 值是 button，则 currentTarget 是触发这次转发事件的 button，否则为 undefined  |

**自定义分享字段：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title |String  |  否  | 分享标题|
|content |String  |  否  | 分享内容|
|imageUrl |String  |  否  | 分享图标|
|path |String  |  否  | 页面 path ，必须是以 / 开头的完整路径|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```javascript
Page({
    onShareAppMessage() {
        return {
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value'
        };
    }
});
```
**Bug & Tip**

1、bug: iOS 点击分享面板的取消时，会执行 fail，Android 不会执行。

收货地址
-----

### chooseAddress

**解释：**调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。

需要用户授权 scope.address

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success | Function |  否  | 返回用户选择的收货地址信息|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|errMsg  |String | 调用结果|
|userName|String |  收货人姓名|
|postalCode  |String|  邮编|
|provinceName|    String|  国标收货地址第一级地址|
|cityName|    String|  国标收货地址第二级地址|
|countyName|  String|  国标收货地址第三级地址|
|detailInfo|  String|  详细收货地址信息|
|telNumber|   String|  收货人手机号码|

**示例：**
```js
swan.chooseAddress({
    success: function (res) {
        console.log(res.userName);
        console.log(res.postalCode);
        console.log(res.provinceName);
        console.log(res.cityName);
        console.log(res.countyName);
        console.log(res.detailInfo);
        console.log(res.telNumber);
    }
});
```

聚合收银台支付
-----

### requestPolymerPayment

**版本：**swanjs 1.8.5 版本开始支持。

**解释：**百度聚合收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。

了解更多信息，请查看 [百度电商开放平台：产品介绍](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_3_business/mini_program_cashier/product_intro.md)

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|orderInfo| Object | 是 |订单信息|
|bannedChannels| StringArray | 否 | 需要隐藏的支付方式|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**orderInfo 参数说明：**
- dealId: 跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到dealId对应的协议主体。
- appKey: 用以表示应用身份的唯一ID，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。
- totalAmount: 订单金额，单位为人民币分。
- tpOrderId: 商户平台自己记录的订单ID，当支付状态发生变化时，会通过此订单ID通知商户。
- dealTitle: 订单的名称。
- rsaSign: 对`appKey+dealId+tpOrderId`进行RSA加密后的密文，防止订单被伪造。签名过程见 [百度电商开放平台：签名与验签](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/sign_v2.md)
- bizInfo: 订单详细信息，需要是一个可解析为JSON Object的字符串。字段内容见： [百度电商开放平台：收银台接入](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/beginner_v2/step3/cash.md)

**bannedChannels 参数说明：**

|channel |说明 |
|---- | ---- |
| Alipay | 支付宝 |
| BDWallet | 百度钱包 |
| WeChat | 微信支付|

**示例：**

```js
swan.requestPolymerPayment({
    orderInfo: {
        "dealId": "470193086",
        "appKey": "MMMabc",
        "totalAmount": "1",
        "tpOrderId": "3028903626",
        "dealTitle": "智能小程序Demo支付测试",
        "rsaSign": '',
        "bizInfo": ''
    },
    success: function (res) {
        swan.showToast({
            title: '支付成功',
            icon: 'success'
        });
    },
    fail: function (err) {
        swan.showToast({
            title: JSON.stringify(err)
        });
        console.log('pay fail', err);
    }
});
```

获取发票抬头
-----

### chooseInvoiceTitle

**解释：**选择用户的发票抬头。

需要用户授权 scope.invoiceTitle

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|type|    String|  抬头类型（0：单位，1：个人）|
|title|   String|  抬头名称|
|taxNumber|   String|  抬头税号|
|companyAddress|  String|  单位地址|
|telephone|   String|  手机号码|
|bankName|    String|  银行名称|
|bankAccount| String|  银行账号|
|errMsg|  String|  接口调用结果|

**示例：**
```js
swan.chooseInvoiceTitle({
    success: function (res) {
        console.log(res.type);
        console.log(res.title);
        console.log(res.taxNumber);
        console.log(res.companyAddress);
        console.log(res.telephone);
        console.log(res.bankName);
        console.log(res.bankAccount);
    }
})
```

打开小程序
-----

### navigateToSmartProgram

**解释：**打开另一个小程序。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|appKey | String | 是 | 要打开的小程序App Key |
|path | String | 否 | 打开的页面路径，如果为空则打开首页 |
|extraData | Object | 否 | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
```js
swan.navigateToSmartProgram({
    appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
    path: '', // 打开的页面路径，如果为空则打开首页
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 打开成功
    }
});
```

### navigateBackSmartProgram

**解释：**返回到上一个小程序。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|extraData | Object | 否 | 需要返回给上一个小程序的数据，上一个小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**
```js
swan.navigateBackSmartProgram({
    extraData: {
        foo: 'baidu'
    },
    success: function (res) {
        // 返回成功
    }
});
``` -->
