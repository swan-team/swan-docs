---
title: deleteresource
header: develop
nav: serverapi
sidebar: deleteresource
---
  

## 下线物料资源 
**解释**：删除素材接口，API实时接口提交方式。
> 若有资源在小程序内下线或资源推送错误需要删除的情况，请调用该接口进行资源的删除，删除后的素材无法重新提交。 
``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/resource/delete 
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|小程序权限校验Token|--|

**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|path|string|是|智能小程序内页链接|/pages/detail/detail?id=100001|

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|integer|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
| | | |

**请求示例** 

**响应示例** 
```json
{   　　
	"errno":0,   　　
	"msg":"success",   　　
	"data":""   
}
```
 
