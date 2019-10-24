---
title: deleteresource
header: develop
nav: serverapi
sidebar: deleteresource
---
  
**解释**：删除素材接口，API实时接口提交方式。

>若有资源在小程序内下线或资源推送错误需要删除的情况，请调用该接口进行资源的删除，删除后的素材无法重新提交。

**接口url**:<https://openapi.baidu.com/rest/2.0/smartapp/access/deleteresource>
**method**: GET&POST
**params**:

| **key**   | **类型** | **是否必填** | **method** | **备注**  | **示例** 
| ------------ | -------- | ------------ | ---------- | ------------------ | ------------------------------ |
| access_token | string   | true   | GET  | 权限校验TOKEN   |  |
| app_id | string   | true   | POST | 智能小程序ID | 15625863  |
| path   | string   | true   | POST | 智能小程序内页链接 | /pages/detail/detail?id=100001 |
 |

return:json

| **key** | **类型** | **备注** |
| ------- | -------- | -------- |
| errno   | int   | 0  |
| msg  | string   | 错误信息 |
| data | string   | 返回数据 |


返回示例

```
`{   　　"errno":0,   　　"msg":"success",   　　"data":""   }`
```
