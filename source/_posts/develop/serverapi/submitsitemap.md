---
title: submitsitemap
header: develop
nav: serverapi
sidebar: submitsitemap
---

 

## 提交sitemap 

**解释**：提交链接文件（即Sitemap）接口，链接文件提交方式（即sitemap提交）。
> 1.需要注意sitemap链接的内容格式（sitemap链接打开后，为多个loc链接；每个loc链接打开后，为单条素材内容。<br>2.提交素材或更新素材，则链接文件的type（即sitemap）选为“1”。<br>3.删除素材或下线素材，则链接文件的type选为“0”。<br>4.每个小程序，最多提交3条sitemap链接，建议一条type为1的sitemap链接，一条type为0的sitemap链接的（即增量/更新的sitemap一个，线下/删除的sitemap一个），若已满3条sitemap，若想添加新的sitemap链接，建议先删除一条sitemap，再进行添加新的sitemap。<br>5.提交sitemap链接方法共两种,两种提交方法任选其一即可：a.通过下方接口提交；b.通过智能小程序开发者平台端提交，提交入口：流量配置-信息流-上传素材-链接文件提交。 
``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/sitemap/submit
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|小程序权限校验Token|--|
**请求参数** 
|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|desc|string|是|描述信息|智能小程序示例|
|frequency|string|是|更新频率 3-每天 4-每周|3|
|type|string|是|类型 1-增量/更新； 0-下线/删除|1|
|url|string|是|sitemap链接|???|
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

**sitemap内容格式**

```
{
    "sitemapindex": [
        {
            "sitemap": {
                "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_01.json",
                "lastmod": "2018-07-17"
            }
        },
        {
            "sitemap": {
                "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_02.json",
                "lastmod": "2018-07-17"
            }
        },
        {
            "sitemap": {
                "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_03.json",
                "lastmod": "2018-07-17"
            }
        }
    ]
}
```
**loc为小于5M的分片数据，格式如下**：
```
[
    {
        "app_id": "1000001",
        "title": "百度智能小程序，给你全新的智能体验",
        "body": "智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验",
        "path": "/pages/index/index",
        "images": [
            "https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png",
            "https://www.baidu.com/img/bd_logo1.png?qua=high%26where=super"
        ],
        "mapp_type": "1000",
        "mapp_sub_type": "1001",
        "feed_type": "娱乐",
        "feed_sub_type": "明星八卦",
        "tags": "组件,接口",
        "ext": {
            "desc": "智能小程序官方示例",
            "version": "10.7.1"
        }
    },
    {
        "app_id": "1000001",
        "title": "小程序接口",
        "body": "百度智能小程序提供丰富的接口，为开发者赋能。",
        "path": "/pages/api/api",
        "images": [
            "https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png"
        ],
        "mapp_type": "1000",
        "mapp_sub_type": "1001",
        "feed_type": "娱乐",
        "feed_sub_type": "明星八卦",
        "tags": "接口",
        "ext": {}
    }
]
```

