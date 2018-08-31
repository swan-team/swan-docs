---
title: 代码构成
header: develop
nav: server
sidebar: power
---

## 开发者服务权限说明
使用对开发者服务相关接口需要先从智能小程序开发者平台申请该服务

调用服务权限校验方式：
<notice>Client Credentials 授权</notice>

采用 Client Credentials 方式，即应用公钥、密钥方式获取 Access Token, 后 Access Token 访问各服务接口。对于应用而言，其流程只有一步，即直接获取 Access Token。

使用 Client Credentials 获取 Access Token 需要应用在其服务端发送请求（推荐用POST方法）到百度  OAuth2.0 授权服务的 https://openapi.baidu.com/oauth/2.0/token 地址上，并带上以下参数：

```
grant_type：必须参数，固定为“client_credentials”
client_id： 必须参数，智能小程序的AppKey 从开发者平台中获取
client_secret：必须参数，智能小程序的AppSecret 从开发者平台中获取
scope：必须参数，固定为"smartapp_snsapi_base"
```

例如：

>https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=Va5yQRHlA4Fq4eR&client_secret=0rDSjzQ20XUj5itV7WRtznPQS&scope=smartapp_snsapi_base

 响应数据包格式

```
{
　　"access_token":"1.a6b7dbd428f731035f771b8d15063f61.86400.1292922000-2346678-124328",
　　"expires_in":86400,
　　"refresh_token":"2.385d55f8615fdfd9edb7c4b5ebdc3e39.604800.1293440400-2346678-124328",
　　"scope":"smartapp_snsapi_base",
　　"session_key":"ANXxSNjwQDugf8615OnqeikRMu2bKaXCdlLxn",
　　"session_secret":"248APxvxjCZ0VEC43EYrvxqaK4oZExMB"
}
```

默认情况下，Access Token 的有效期为一个月，如果 Access Token 过期可以重新获取。


## 各服务接口部分


### 1.消息推送服务单播接口

url: 邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否为空 | method | 备注 | 示例|
|---|---|---|---|---|---|
|access_token|string|false|GET|权限校验TOKEN||
|app_id|string|false|POST|智能小程序ID|1000001|
|swan_ids|string|false|POST|智能小程序用户id(1-100个，逗号分隔)|D43857DGDG,JDKFGJ94|
|title|string|false|POST|手机通知栏标题|优惠活动|
|description|string|false|POST|手机通知栏消息体|2018最大力度优惠|
|path_url|string|false|POST|点开链接(智能小程序内页)|/pages/detail/detail/|
|type|int|false|POST|消息类型 固定值21|21|
|content|string|false|POST|消息体|JSON格式|

 **content** 字段格式说明

       "content": {
           "title":"积分变动通知"  //标题
           "first": { //消息体第一部分
               "value":"亲爱的用户，近期我们有如下优惠活动" //消息体第一部分文本
           },
           "keywords":[//消息主体
               {
                   "name":"服装类商品",
                   "value":"满1000减100"
               },
               {
                   "name":"日用品类商品",
                   "value":"全部9折"
               }
               ...
           ]
       }　
       　　　　　　　　　　
 **return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|push发送成功|

**返回示例**
```
{
     "errno":0,
     "msg":"success",
     "data":{
         "msg_key":123456789
         }
}
```
错误时会返回错误码信息，说明如下：
```
返回码	 说明
6001     无权限
1009     internal error/信息下发失败
2002     参数错误
2003     表单校验失败
116001   发送消息次数过多
30010002 消息下发参数错误
```
### 2.消息推送服务组播接口

url: 邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否为空 | method | 备注 | 示例|
|---|---|---|---|---|---|
|access_token|string|false|GET|权限校验TOKEN||
|app_id|string|false|POST|智能小程序ID|1000001|
|title|string|false|POST|手机通知栏标题|优惠活动|
|description|string|false|POST|手机通知栏消息体|2018最大力度优惠|
|path_url|string|false|POST|点开链接(智能小程序内页)|/pages/detail/detail/|
|type|int|false|POST|消息类型 固定值21|21|
|content|string|false|POST|消息体|JSON格式|

 **content** 字段格式说明

       "content": {
           "title":"积分变动通知"  //标题
           "first": { //消息体第一部分
               "value":"亲爱的用户，近期我们有如下优惠活动" //消息体第一部分文本
           },
           "keywords":[//消息主体
               {
                   "name":"服装类商品",
                   "value":"满1000减100"
               },
               {
                   "name":"日用品类商品",
                   "value":"全部9折"
               }
               ...
           ]
       }　
       　　　　　　　　　　
 **return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|push发送成功|

**返回示例**
```
{
     "errno":0,
     "msg":"success",
     "data":{
         "msg_key":123456789
         }
}
```


### 3.Feeds横滑卡片推广接口

url: 该服务即将对外开放，敬请期待
method: POST
params:

|key | 类型 | 是否为空 | 备注 | 示例 |
|---|---|---|---|
|access_token|string|false|权限校验TOKEN||
|app_id|int|false|智能小程序ID|1000001|
|mcard_title|string|false|主卡片标题（长度限制10个字）|精选影视推荐|
|recommend_type|int|false|推荐类型3智能小程序内容|3|
|templete_type|int|false|模板类型1大图有摘要2大图无摘要|1|
|scard_list|string|false|子卡片集合 (限制5-9个子卡片)|JSON格式|
|-scard_title|string|false|子卡片标题 (长度限制：模板类型1限制8个字，模板类型2限制20个字)|金牌投资人|
|-scard_desc|string|模板类型1必须|子卡片摘要 (长度限制：20个字)|更新至6集，励志精英燃情商战|
|-img_url|string|false|子卡片图片url (长度限制：500个字，格式限制：JPG，高宽限制：456*306)|http://xxx.xxx/1.jpg|
|-path_url|string|false|智能小程序调起路径 (长度限制：500个字)|/pages/home/home/|

 **scard_list** 字段格式示例

       "scard_list":[   
               {
                   "scard_title":"金牌投资人",
                   "scard_desc":"更新至6集，励志精英燃情商战",
                   "img_url":"http://xxx.xxx/1.jpg",
                   "path_url":"/pages/home/home/",
               },
               {
                   "scard_title":"南方有乔木",
                   "scard_desc":"更新至31集，陈伟霆白百合分手泪崩",
                   "img_url":"http://xxx.xxx/2.jpg",
                   "path_url":"/pages/home/home/",
               }
               ...
           ]


**return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|发送成功|

**返回示例**

```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

### 4.投放服务提交素材接口
url: 邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否必填 | method | 备注 | 示例 |
|---|---|---|---|---|
|access_token|string|true|GET| 权限校验TOKEN ||
|app_id|string|true|POST| 智能小程序ID |1000001|
|title|string|true|POST| 标题   |百度智能小程序|
|body|string|true|POST| 消息体   |智能小程序，智能连接人与信息、人与服务、人与万物的开放生态。|
|path|string|true|POST| 智能小程序内页链接 |/pages/index/index|
|images|string|true|POST| 图片链接 |JSON格式`["https://b.bdstatic.com/miniapp/resource/image/headImg.png"]`|
|mapp_type|string|true|POST| 类型  |	1000|
|mapp_sub_type|string|true|POST| 子类型  |1001|
|tags|string|false|POST| 标签，英文逗号分割  |组件,接口|
|ext|string|false|POST| 扩展信息  | JSON格式`{"desc": "智能小程序官方示例","version": "10.7.1"}`|

** mapp_type列表：**

|type | id |
|---|---|
|内容|1000|
|服务|2000|
|工具|3000|
|游戏|4000|

** mapp_sub_type列表： **

|type | id | pid |
|---|---|---|
|图文|	1001|	1000|
|视频|	1002|	1000|
|直播|	1003|	1000|
|音频|	1004|	1000|
|横滑卡主卡|	1005|	1000|
|横滑卡子卡|	1006|	1000|
|酒店|	2001|	2000|
|景点|	2002|	2000|
|商品|	2003|	2000|
|汽车|	2004|	2000|
|金融|	3001|	3000|
|天气|	3002|	3000|
|车辆|	3003|	3000|
|娱乐|	3004|	3000|
|对战|	4001|	4000|
|单机|	4007|	4000|


**return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|返回数据|

**返回示例**
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

### 5.投放服务删除素材接口

url:邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否必填 | method | 备注 | 示例 |
|---|---|---|---|---|
|access_token|	string|	true|	GET|	权限校验TOKEN|	|
|app_id|	string|	true|	POST|	智能小程序ID|	100001|
|path|	string|	true|	POST|	智能小程序内页链接|	/pages/index/index|

**return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|返回数据|

**返回示例**
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

### 6.投放服务提交sitemap接口

url:  邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否必填 | method | 备注 | 示例 |
|---|---|---|---|---|
|access_token|	string|	true|	GET|	权限校验TOKEN|	 |
|app_id|	string|	true|	POST|	智能小程序ID|	100001|
|url|	string|	true|	POST|	sitemap链接|	 |
|desc|	string|	true|	POST|	描述信息|	智能小程序示例|
|type|	int|	true|	POST|	类型 1-增量 0-下线|	1|
|frequency|	int| true| POST| 更新频率 1-每分钟 2-每小时 3-每天 4-每周 5-每月 6-每年| 3|

** sitemap内容格式如下：**

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

** loc为小于5M的分片数据，格式如下：**

```
[
    {
        "app_id": "1000001",
        "title": "百度智能小程序",
        "body": "智能小程序，智能连接人与信息、人与服务、人与万物的开放生态。",
        "path": "/pages/index/index",
        "images": [
            "https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png",
            "https://www.baidu.com/img/bd_logo1.png?qua=high%26where=super"
        ],
        "mapp_type": "1000",
        "mapp_sub_type": "1001",
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
        "tags": "接口",
        "ext": {}
    }
]
```

**return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|返回数据|

**返回示例**

```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

###  7.投放服务删除sitemap接口

url: 邀请制，受邀开发者可使用该服务
method: GET&POST
params:

|key | 类型 | 是否必填 | method | 备注 | 示例 |
|---|---|---|---|---|
|access_token|	string|	true|	GET|	权限校验TOKEN|	 |
|app_id|	string|	true|	POST|	智能小程序ID|	100001|
|url|	string|	true|	POST|	sitemap链接|	||

**return:json**

|key | 类型 | 备注 |
|---|---|---|
|errno|int|0|
|msg|string|错误信息|
|data|string|返回数据|

**返回示例**

```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```
