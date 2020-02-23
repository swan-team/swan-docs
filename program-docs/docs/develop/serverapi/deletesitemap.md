---
title: deletesitemap
header: develop
nav: serverapi
sidebar: deletesitemap
---

 

## 删除sitemap 

**解释**：删除链接文件（即sitemap）接口，链接文件提交方式（即sitemap提交）。
> 若需要删除sitemap文件，请调用该接口，删除的仅为sitemap链接地址，对sitemap中已提交成功的素材无影响。

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/deletesitemap 
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|小程序权限校验Token|--|

**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|url|string|是|sitemap链接|--|

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|integer|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

  

 

**响应示例** 

```json
{
	"errno":0,   　　
	"msg":"success",   　　
	"data":""   
}
```
