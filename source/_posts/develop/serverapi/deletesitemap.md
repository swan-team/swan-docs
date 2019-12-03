---
title: deletesitemap
header: develop
nav: serverapi
sidebar: deletesitemap
---

 

**解释**：删除链接文件（即sitemap）接口，链接文件提交方式（即sitemap提交）。

> 若需要删除sitemap文件，请调用该接口，删除的仅为sitemap链接地址，对sitemap中已提交成功的素材无影响。

**接口url**: <https://openapi.baidu.com/rest/2.0/smartapp/access/deletesitemap>
**method**: GET&POST
**params**:

| **key**   | **类型** | **是否必填** | **method** | **备注**   | **代码示例** |
| ------------ | -------- | ------------ | ---------- | ------------- | -------- |
| access_token | string   | true   | GET  | 权限校验TOKEN | |
| app_id | string   | true   | POST | 智能小程序ID  | 100001   |
| url | string   | true   | POST | sitemap链接   | |



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