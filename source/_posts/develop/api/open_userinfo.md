---
title: 用户信息
header: develop
nav: api
sidebar: open_userinfo
---


## swanid机制说明

由于宿主应用并不一定强制用户登录，因此用户也有可能处于未登录状态。此时开发者可能不希望通过调用`swan.login()`强制用户登录，而是希望直接使用用户的设备标识来关联用户，存储一些非敏感的数据。因此智能小程序还提供一个SwanID的标识，可视作用户的设备标识。

1. 用户在同一台设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的SwanID。
2. 用户在同一台设备上使用不同开发者所开发的不同智能小程序，得到的SwanID是不同的。

**swanid校验性有以下两种方法**：
1. 采用 <a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/">verify</a> 接口请求服务端。
2. 对比接口返回中 swanid_signature 字段的值与采用<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#signature 计算方法/">signature 计算方法</a> 的计算值是否一致。

getSwanId
---
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

<!-- **data 返回参数说明**

|参数  |类型|说明 |
|---- | ---- |---- |
|swanid|string|由 cuid 生成|
|swanid_signature|string|对 swanid 进行校验| -->
<!-- |swanid_old|string
|swanid_old_signature |string        -->


**示例：**

```js
swan.getSwanId({
    success: function (res) {
        console.log(res.data.swanid);
    }
});
```

getUserInfo
---
**解释：**获取用户信息，首次使用的用户会弹出授权提示窗，若用户同意，则会返回用户的真实数据；若用户未登录或者拒绝授权，会返回默认用户“百度网友”及默认的头像地址。

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
|data  | String  |包括敏感数据在内的完整用户信息的加密数据，加解密逻辑参考[用户数据的签名验证和加解密](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E7%9A%84%E7%AD%BE%E5%90%8D%E9%AA%8C%E8%AF%81%E5%92%8C%E5%8A%A0%E8%A7%A3%E5%AF%86)。|
|iv | String | 加密算法的初始向量|


**userInfo参数说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|nickName  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|avatarUrl  | String  |用户头像|
|gender | String | 性别:值为0时是未知，为1时是男性，为2时是女性。|
|isAnonymous | bool | 表示用户信息是否为匿名，若是用户未登录或者拒绝授权为true，正常流程为false。 |
**用户数据解密后字段说明：**

|参数  |类型|说明 |
|---- | ---- |---- |
|nickname  | String  |用户昵称，用户未设置用户昵称时，将获取用户名。|
|headimgurl  | String  |用户头像|
|sex | String | 性别:值为0时是未知，为1时是男性，为2时是女性。|

**示例：**
<!-- <a href="swanide://fragment/d12f967d05c0b93ac15d66d138658d9b1540398240" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a> -->
```js
swan.getUserInfo({
    success: function (res) {
        console.log('用户昵称/用户名', res.userInfo.nickName);
    }
});
```

## verify

**解释**：swanid有效性校验接口：true表示有效，false表示无效。
**接口地址**：`https://openapi.baidu.com/rest/2.0/smartapp/swanid/verify`
**请求类型**：POST
**参数**：

|参数|含义|举例|
|--|--|--|
|<a href="http://smartprogram.baidu.com/docs/develop/server/power_exp/">access_token</a>|	小程序标识|xx.xxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxx.<p>xxxxxxxxxxxxxxxxx.xxxxxxxx-xxxxxxxx|
|swanid	|用户标识	|SSr1ngSR9kY5dGVPADtuhz4F31Q9nzpoaPwTazUVmTphieQzyqtUcaM4Kr4H5ViAp<p>kcZEvLb33S3fMMZUsoeLKbiW|

**示例**：
校验成功：
```json
{
    "data": {
        "result": true
    },
    "errmsg": "",
    "errno": "0"
}
```
校验失败：
```json
{
    "data": {
        "result": false
    },
    "errmsg": "",
    "errno": "0"
}
```
异常：
* 未通过参数检查：
```json
{
    "error_msg": "Invalid parameter",
    "error_code": 100
}
```
* access_token无效
```json
{
    "error_msg": "Access token invalid or no longer valid",
    "error_code": 110
}
```
* swanid校验失败
```json
{
    "errmsg": "no swanid found, or swanid is invalid",
    "errno": "-1"
}
```

## signature 计算方法

```js
params := map[string]string{
        "appkey":     "appkey", // 小程序标识
        "secret_key": "secret_key",  // 小程序私钥
        "swanid":     "swanid",   // 用户swanid
    }
signature := "signature"  // 常量，
// 计算签名
swanid_signature :=generageSignature(params, signature)
func generageSignature(params map[string]string, signature string) string {
    keys := []string{}
    for k := range params {
        keys = append(keys, k)
    }
    sort.Strings(keys)
    material := ""
    for _, k := range keys {
        if k == signature {
            continue
        }
        material += fmt.Sprintf("%s=%v", k, params[k])
    }
    md5Sum := md5.Sum([]byte(material))
    return hex.EncodeToString(md5Sum[:])
}
```