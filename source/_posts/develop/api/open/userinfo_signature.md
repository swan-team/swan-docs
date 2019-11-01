---
title: signature 计算方法
header: develop
nav: api
sidebar: userinfo_signature 
---
 
 

```js
// 生成签名
// appkey 小程序标识
// secret_key 小程序私钥
// swanid 用户swanid
func generageSignature(appKey, secrectKey, swanID string) string {
    plainText := fmt.Sprintf("appkey=%ssecret_key=%sswanid=%s", appKey, secrectKey, swanID)
    md5Sum := md5.Sum([]byte(plainText))
    return hex.EncodeToString(md5Sum[:])
}
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|
|-200|权限拒绝，仅开发者可见|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误                                           |
|10002|网络请求失败|
|10003|用户拒绝(user deny)|
|10004|用户拒绝(user not login)|
|10005|系统拒绝|