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

