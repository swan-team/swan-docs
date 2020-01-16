---
title: 基本信息设置
header: third
nav: third
sidebar: info
---

## 获取小程序全类目列表

> 获取类目字典,用于参数中需要使用到类目字段时查询 

``` 
 GET https://openapi.baidu.com/rest/2.0/smartapp/app/category/list 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数          | 类型   | 是否必填 | 描述                                                | 示例值 |
| ------------- | ------ | -------- | --------------------------------------------------- | ------ |
| category_type | string | 是       | 1.个人类型类目 2.企业类型类目 为2时可以查出全部类目 | 1      |

**公共响应参数** 

| 参数  | 类型          | 描述     | 示例值   |
| ----- | ------------- | -------- | -------- |
| errno | Int           | 状态码   | 40001    |
| msg   | string        | 状态描述 | 参数错误 |
| data  | array[object] | 响应参数 | --       |

**响应参数** 

|参数名|类型|描述|
|---|---|---|
|id| int| 类目id|
|category_name|string|父类目名称|
|category_type|string|父类目类型 1.个人服务 2.企业服务 主体为企业类型所有类目均可设置，主体为个人类型时只能设置个人服务|
|sub_items|object|子类目 key为类目id value为类目详情|
|sub_items.id|int|子类目id|
|sub_items.category_name|int|子类目名称|
|sub_items.category_type|int|子类目类型 规则同父类目类型|
|sub_items.need_quali|int|类目是否需资质 1：需要 0：不需要|
|sub_items.category_quali|string|类目 资质要求|
|category_quali.desc|string|资质描述|
|category_quali.list|array|资质项要求 数组中包含多个值时 为或的关系 多选一即可|
|category_quali.list.id|int|资质项id|
|category_quali.list.must|int|资质项是否必须 1:必须 0:非必须|
|category_quali.list.name|string|资质项名称|
|category_quali.list.desc|string|资质项描述|

**请求示例** 

```shell
curl -X GET \
  'https://open api.baidu.com/app/category/list?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&category_type=2' 
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": [
      {
        "id": 1,
        "category_name": "快递业与邮政",
        "category_type": 2,
        "sub_items": {
            "2": {
                "id": "2",
                "category_name": "快递",
                "category_type": 2,
                "need_quali": 1,
                "category_quali": "{\"desc\":\"请上传《快递业务经营许可证》\",\"list\":[[{\"id\":1,\"must\":1,\"name\":\"快递业务经营许可证\",\"desc\":\"\"}]]}"
            },
            "3": {
                "id": "3",
                "category_name": "邮政",
                "category_type": 2,
                "need_quali": "0",
                "category_quali": ""
             }
        } 
     ]
}
```

**相关内容导读**

获取小程序全类目列表：[服务类目](https://smartprogram.baidu.com/docs/operations/catagory/)

## 修改小程序类目

> 现在只支持类目的覆盖修改，主体下类目资质已经审核通过的不会再次审核，小程序类目上限为5个。资质图片需要使用<a href="https://smartprogram.baidu.com/docs/third/upload/">图片上传接口</a>的返回值

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/category/update
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数       | 类型   | 是否必填 | 描述     | 示例值 |
| ---------- | ------ | -------- | -------- | ------ |
| categories | string | 是       | 类目类别 | 如下   |

**categorys示例**

```json
[{
    "sub_category_id": 197,
    "qualis": [{
        "id": 1, 
        "addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970481267095.jpg"
    }]
}, {
    "sub_category_id": 6
}]
```

**categorys说明**

|参数名	|类型|描述|
|---|---|---|
|sub_category_id| int| 获取小程序全类目列表接口获取的的子类目id|
|qualis|array|资质|
|qualis.id|int|资质项id|
|qualis.addr|int|资质项图片|

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

 

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/category/update?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&categorys=[{"sub_category_id":197,"qualis":[{"id":1,"addr":"https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970481267095.jpg"}]}]'
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|50013| 暂时不支持小游戏，敬请期待！|
|50060| 小程序类目上限为5个|
|50061| 类目id不正确，请检查|
|50062| categorys格式非法，请检查|
|50063| 资质信息不正确，请检查|
|47008| 图片来源非法|
|47007| 修改服务分类超过限制次数|

## 修改小程序icon

> 修改小程序icon会送审核，审核结果的推送见<a href="https://smartprogram.baidu.com/docs/third/info/#基本信息审核通知">基本信息审核结果推送。</a>


```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifyheadimage
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数      | 类型   | 是否必填 | 描述                                                | 示例值 |
| --------- | ------ | -------- | --------------------------------------------------- | ------ |
| image_url | string | 是       | 小程序icon地址，可以通过图片上传接口获取icon的url。 | --     |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |


**请求示例** 

```shell
curl -X POST \
  'https://address_java/app/modifyheadimage?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&image_url=https://b.bdstatic.com/searchbox/mappconsole/image/20181204/9adf15d0-b437-4e30-9f7a-13ffd19a98f0.png' 
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```
**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|47005|修改头像超过限制次数|
|47008|图片来源非法|

## 修改功能介绍 

> 修改小程序功能介绍会送审核，审核结果的推送见基本信息审核结果推送。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifysignature 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数      | 类型   | 是否必填 | 描述             | 示例值 |
| --------- | ------ | -------- | ---------------- | ------ |
| signature | string | 是       | 功能介绍（简介） | --     |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/modifysignature?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&signature=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E7%9B%B8%E5%85%B3%E6%8F%8F%E8%BF%B0'
```

**响应示例** 
```json
{
    "errno": 0,
    "msg": "success"
}
```
**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|47006| 修改简介超过限制次数|

## 暂停服务 

> 暂停服务后，用户将不可以正常访问线上小程序版本小程序 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/app/pause 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

 

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

 

**请求示例** 

```shell
curl -X POST \
  'https://address_java/app/pause?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC'
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```

## 开启服务 

> 开启服务，可将暂定服务的小程序恢复正常 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/app/resume 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

 

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

 

**请求示例** 

```shell
curl -X POST \
  'https://address_java/app/resume?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC' 
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```

 **小程序状态变更推送**
>当小程序暂停服务、重新启用、强制下线、限时整改、流量下线时通知TP
>暂停服务、重新启用会通知小程序授权基本信息设置权限的TP
>强制下线会通知小程序授权任意权限的TP
>限时整改、流量下线会通知小程序开发管理权限的TP
>推送接收地址为消息与事件接收URL

```json
{
    "appId":小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_FORCE_OFFLINE",
    "reason":"强制下线原因",
    "offlineReason":3,
    "illegalFields":"appName,photoAddr,appDesc"
}
```

**事件推送内容**

|参数名 | 类型  | 描述|
|----- |-----| -----|
|appId |int | 小程序appid|
|tpAppId |int | 第三方平台id|
|eventTime |string | 事件发生时间|
|event |string | APP\_FORCE\_OFFLINE 小程序强制下线<br>APP\_SERVER\_PAUSE 小程序暂停服务<br>APP\_SERVER\_RESUME 小程序服务启用<br>TIME_LIMIT_RECTIFY_NOTIFY 小程序限时整改通知<br>FLOW_CLOSE_NOTIFY 小程序流量下线通知 |

> 当 event 为 APP\_FORCE\_OFFLINE 时会多出以下一些内容

|参数名 | 类型  | 描述|
|----- |-----| -----|
|reason |string | 强制下线原因描述|
|offlineReason |int | 强制下线类型<br> 1:基本信息强制下线 <br>2:小程序代码包强制下线<br> 3:基本信息和代码包强制下线|
|illegalFields |string | 强制下线原因 <br> appName:名称 <br> photoAddr:图片 <br> appDesc:简介<br>当有多个时用逗号(,)连接, offlineReason为1或3时才有|

## 申请恢复流量下线

> 当小程序涉及违规行为被流量下线后，若具体违规问题可通过热更新方式修改，无需重新提交代码包、基本信息审核时，可在修复问题后通过此API申请恢复流量下线。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/appflow/applyRecovery
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|audit_desc|	string|	是| 申请恢复流量下线提交审核描述，字数限制在 1 - 100 之间 |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/appflow/applyRecovery?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&audit_desc=%E5%AE%A1%E6%A0%B8%E6%8F%8F%E8%BF%B0%E4%BF%A1%E6%81%AF' \
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|30007|当前登录账号无操作权限|
|40028|未查询到主体信息|
|40032|未查询到线上包或者审核通过的包|
|40045|小程序状态不正确|

**审核结果推送**

**当审核成功/失败时，百度服务器会向第三方平台方的消息事件接收URL（创建第三方平台时填写）推送相关通知。**

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | int    | 小程序客户Id                                                 |
| tpAppId   | int    | 第三方平台appId                                              |
| event     | string | BASE\_INFO\_OFFLINE\_AUDIT\_SUCCESS:审核通过<br> BASE\_INFO\_OFFLINE\_AUDIT\_FAIL:审核失败 |
| eventTime | string | 事件发生时间 示例：2019-03-01 10:00:00                       |
| reason    | string | 失败原因                                                     |

**审核成功事件推送内容**:

```json
{
    "appId":15263713,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": "FLOW_CLOSE_AUDIT_PASS"
}
```

**审核失败事件推送内容**

```json
{
    "appId":15263713,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": "FLOW_CLOSE_AUDIT_FAIL",
    "reson":"审核失败原因"
}
```


## 二维码

> 支持自定义路径、图片大小

**接口说明**:

```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/qrcode
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
path |string | 否 | 自定义打开路径
package\_id |string | 否 | 可指定代码包id(只支持审核、开发、线上版本)，不传默认线上版本。
width |int | 否 | 默认200px，最大1280px，最小200px

**正确情况下返回图像的字节流，响应 header 中包含:**

```
HTTP/1.1 200 OK

Content-Type: image/png
```

**错误情况下返回**

字段名   | 类型 | 描述
------ | -----| ----
errno | int | 错误码
msg | string | 错误描述信息，用来帮助理解和解决发生的错误

##### 错误码表
错误码 | 错误描述 |
----- |-----
470018| 二维码 width 字段超过指定范围
470019| 二维码 package_id 非法，只支持审核，开发，线上版本的 package
470020| 此小程序没有线上版本的包，需要指定 package_id
40001 | 请求参数内容或格式非法
47002 | 获取二维码失败

## 修改小程序名称

> 修改小程序名称会送审核，审核结果的推送见<a href="https://smartprogram.baidu.com/docs/third/info/#基本信息审核通知">基本信息审核结果推送。</a>

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/setnickname
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|nick_name|	string|	是|	小程序名字|
|app_name_material| string | 否 | 如果小程序名称包含品牌词，需要上传品牌资质证明。要求图片链接来自于<a href="https://smartprogram.baidu.com/docs/third/upload/">图片上传接口</a>返回的url，多个图片链接以逗号 , 分隔 |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

 


**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/setnickname?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&nick_name=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%90%8D%E7%A7%B0' \
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|47004|修改名称超过限制次数|
|47008|图片来源非法|

## 设置最低基础库版本

> 若用户使用的基础库版本低于设置的最低版本时，用户本地版本将不更新

**接口说明**：

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/setsupportversion
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数    | 类型   | 是否必填 | 描述           | 示例值 |
| ------- | ------ | -------- | -------------- | ------ |
| version | string | 是       | 最低基础库版本 | --     |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |


**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/setsupportversion?version=1.0.0' \
```

**响应示例** 

```
{
  "errno": 0,
  "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|470021| 版本输入错误|

### 相关内容导读

设置最低基础版本库：[基础库](https://smartprogram.baidu.com/docs/develop/swan/client-lib/)

## 查询当前设置的最低基础库版本及各版本列表 

> 查询当前设置的最低基础库版本及各版本列表 

``` 
 GET https://openapi.baidu.com/rest/2.0/smartapp/app/getsupportversion 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

  

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

|字段名  | 类型   | 描述|
|------ | ----- | ----|
|now\_version | string | 当前版本|
|items | object | 版本号列表|
|version | string | 版本号|

**请求示例** 

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/getsupportversion?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC'
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "now_version": "2.5.15",
        "items": [
            {
                "version": "1.10.15"
            },
            {
                "version": "1.10.17"
            },
            {
                "version": "1.10.18"
            },
            {
                "version": "1.10.20"
            },
            {
                "version": "1.10.21"
            }
            ......
        ]
    }
}
```


**基本信息审核通知**

>当小程序基本信息有审核结果后，第三方平台将可以通过开放平台上填写的回调地址，获得审核结果通知。

审核通过时，接收到的推送数据示例如下：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_NAME_AUDIT_PASS"
}
```

审核不通过时，接收到的推送数据示例如下：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_NAME_AUDIT_FAIL",
    "reason": "名称过长（名称控制在10个字以内）。"
}
```


#### **推送内容**

|参数名 | 类型 | 描述|
|----- |-----|  -----|
|appId |long | 小程序appid|
|tpAppId | long | 第三方平台id|
|eventTime |string | 事件发生时间|
|event |string | APP\_NAME\_AUDIT\_PASS:小程序名称审核成功<br>APP\_NAME\_AUDIT\_FAIL:小程序名称审核失败 <br>APP\_ICON\_AUDIT\_PASS:小程序头像审核成功 <br>APP\_ICON\_AUDIT\_FAIL:小程序头像审核失败<br>APP\_DESC\_AUDIT\_PASS:小程序描述审核成功 <br>APP\_DESC\_AUDIT\_FAIL:小程序描述审核失败<br>APP_CATEGORY_AUDIT_PASS:小程序行业类目审核成功<br>APP_CATEGORY_AUDIT_FAIL:小程序行业类目审核失败|


## 设置小程序服务器域名

> 授权给第三方的小程序，其服务器域名只可以为第三方的服务器，当小程序通过第三方发布代码送审后，小程序原先自己配置的服务器域名将被删除，只保留第三方平台的域名，所以第三方平台在代替小程序送审之前，需要调用接口为小程序添加服务器域名。
> 1. 需要先将域名登记到第三方平台的小程序服务器域名中，才可以调用接口进行配置。
> 2. 为授权的小程序配置域名时支持配置子域名，例如第三方登记的服务器域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifydomain
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数            | 类型   | 是否必填 | 描述                                                         | 示例值 |
| --------------- | ------ | -------- | ------------------------------------------------------------ | ------ |
| action          | string | 否       | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序业务域名全部添加到授权的小程序中。 | --     |
| download_domain | string | 否       | download合法域名，多个时用,分割，当action参数是get时不需要此字段 | --     |
| request_domain  | string | 否       | request合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |
| socket_domain   | string | 否       | socket合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |
| upload_domain   | string | 否       | upload合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

| 参数            | 类型   | 描述             | 示例值 |
| --------------- | ------ | ---------------- | ------ |
| download_domain | string | download合法域名 | --     |
| request_domain  | string | request合法域名  | --     |
| socket_domain   | string | socket合法域名   | --     |
| upload_domain   | string | upload合法域名   | --     |

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/modifydomain?access_token=45.6fe3b83637bcf969ecbd076390aff5be.3600.1574865809.HPiKUxSxNQ-3Fy3JR1wLsECD15bpJHQ-1W3JTSQkkj5RZ9lgfC&download_domain=https://www.baidu.com&request_domain=https://www.baidu.com&socket_domain=https://www.baidu.com&upload_domain=https://www.baidu.com'
```



**action=get 响应示例**

```
{
    "errno":0,
    "msg":"success",
    "data":
    {
        "request_domain":"https://www.baidu.com,https://www.baidu.com",
        "socket_domain":"wss://www.baidu.com,wss://www.baidu.com",
        "download_domain":"wss://www.baidu.com,wss://www.baidu.com",
        "upload_domain":"wss://www.baidu.com,wss://www.baidu.com"
    }
}
```

**action=delete | set | add 响应示例**

```
{
    "errno":0,
    "msg":"success"
}
```
**错误码说明**：

|参数名 | 类型 |
|----- |-----|
|470011 | 修改服务器域名超过限制次数。 |
|470013 | 至少传递一个要被操作的服务域名类型。|
|470014 | 域名格式非法，请检查格式，协议目前只支持https:// https:// wss://。|
|470015 | 被操作的域名不能为空。|
|470016 | 请求保存的域名不是第三方平台中已设置的小程序域名或子域名。|
|470017 | 删除的域名在小程序中没有设置过。|

## 设置小程序业务域名

授权给第三方的小程序，其业务域名只可以为第三方的服务器，当小程序通过第三方发布代码送审后，小程序原先自己配置的业务域名将被删除，只保留第三方平台的域名，所以第三方平台在代替小程序送审之前，需要调用接口为小程序添加业务域名。
> 1. 需要先将域名登记到第三方平台的小程序业务域名中，才可以调用接口进行配置。
> 2. 为授权的小程序配置域名时支持配置子域名，例如第三方登记的业务域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebviewdomain
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
action | string | 否 | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序业务域名全部添加到授权的小程序中。
web_view_domain | string | 否 | 小程序业务域名，多个时用,分割，当action参数是get时不需要此字段
**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | String  | 响应参数 | --       |

  

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebviewdomain?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&web_view_domain=https://www.baidu.com&action=get'
```

**action=get 响应数据**

```json
{
    "errno":0,
    "msg":"success",
    "data":"https://www.baidu.com,https://www.baidu.com"
}
```
**action=delete | set | add 响应数据**

```json
{
    "errno":0,
    "msg":"success"
}
```

**错误码说明**：

| 参数名 | 类型                                                         |
| ------ | ------------------------------------------------------------ |
| 470012 | 修改业务域名超过限制次数                                     |
| 470013 | 至少传递一个要被操作的服务域名类型                           |
| 470014 | 域名格式非法，请检查格式，协议目前只支持https:// https:// wss:// |
| 470015 | 被操作的域名不能为空                                         |
| 470016 | 请求保存的域名不是第三方平台中已设置的小程序域名或子域名     |
| 470017 | 删除的域名在小程序中没有设置过                               |


## 小程序名称检测 
> 小程序名称检测 
``` 
 GET https://openapi.baidu.com/rest/2.0/smartapp/app/checkname 
```
**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序Token|--|
**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_name|string|是|小程序名字|--|
**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|Int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|
**响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|checkResult|int|检测结果码|--|
|checkWords|array[array]|命中关键词|--|
##### 结果码说明：

| 结果码 | 错误描述                 |
| ------ | ------------------------ |
| 0      | 检测通过                 |
| 1      | 重名检测未通过           |
| 2      | 敏感&黄反检测未通过      |
| 3      | 完全对等品牌词检测未通过 |
| 4      | 包含品牌词检测未通过     |
| 5      | 高流量词检测未通过       |

**请求示例** 

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/checkname?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC&app_name=appName'
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "checkResult": 0
    }
}
```


## 基本信息强制下线后修改基本信息

> 小程序被强制下线后,调用接口修改对应的基本信息,送审基本信息

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/offline/update?access_token=ACCESS_TOKEN
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**请求参数** 

| 参数名              | 类型   | 是否必须 | 描述                     |
| ------------------- | ------ | -------- | ------------------------ |
| app\_name           | string | 否       | 小程序名称               |
| app\_desc           | string | 否       | 小程序描述               |
| photo\_addr         | string | 否       | 小程序图片               |
| app\_name\_material | string | 否       | 名称相关物料             |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

| 参数       | 类型    | 描述   | 示例值 |
| ---------- | ------- | ------ | ------ |
| examine_id | integer | 审核ID | --     |

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/offline/update?access_token=45.a6fa2580056b68d73d0a8ed7e6d42482.3600.1568862387.A0H_1RdLqyGDEcy-lrwC1EjN9An2DRs-1W3JTSQkkj5RZ9lgfC&appName=%E8%81%8A%E8%81%8A%E8%81%8A%E6%B5%8B%E8%AF%95' 
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
    	"examine_id":123
    }
}
```

**审核结果推送**

**当审核成功/失败时，百度服务器会向第三方平台方的消息事件接收URL（创建第三方平台时填写）推送相关通知。**

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | int    | 小程序客户Id                                                 |
| examineId | int    | 审核id                                                       |
| tpAppId   | int    | 第三方平台appId                                              |
| event     | string | BASE\_INFO\_OFFLINE\_AUDIT\_SUCCESS:审核通过<br> BASE\_INFO\_OFFLINE\_AUDIT\_FAIL:审核失败 |
| eventTime | string | 事件发生时间 示例：2019-03-01 10:00:00                       |
| reason    | string | 失败原因                                                     |

**审核成功事件推送内容**:

```json
{
    "appId":15263713,
    "examineId": 15237,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": " BASE_INFO_OFFLINE_AUDIT_SUCCESS"
}
```

**审核失败事件推送内容**

```json
{
    "appId":15263713,
    "examineId": 15237,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": " BASE_INFO_OFFLINE_AUDIT_FAIL",
    "reson":"审核失败原因"
}
```


## 申请获取用户手机号

当小程序开发者需要获取用户手机号时，服务商可调用此API代开发者进行申请。申请时，需要说明手机号的具体使用场景，并附上相关交互demo。

**使用场景描述示例**

以购物小程序为例，该小程序主要用于网络购物（请描述业务场景，而不是登录注册）。需要手机号填写联系方式。
具体步骤如下：
1、打开小程序，选择要购买的商品，进入商品详情页；
2、点击购买，提示用户授权获取手机号；
3、用户点击同意后，授权并进入下一步；如果用户点击不同意，则返回；
4、点击下一步，进入正常的服务流程。

**使用场景demo示例**

![使用场景demo示例](https://b.bdstatic.com/searchbox/icms/searchbox/img/a5b166a32317553169013ac60.png)

### 申请手机号权限

> 申请手机号权限 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/app/apply/mobileauth
```

**请求参数** 

| 参数         | 类型   | 是否必填 | 描述                                                         | 示例值                                                       |
| ----------- | ------ | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| access_token | string | 是       | 授权小程序Token   | --  |
| reason       | int | 是       | 申请原因<br>(0:"用于登录"<br> 1:"收货联系方式"<br> 2："其他")    | 1  |
| used_scene   | int | 是       | 使用场景<br>(0:"网络购物"<br> 1:"账号下信息内容同步"<br> 2:"票务预订"<br> 3:"业务办理"<br> 4:"信息查询（如社保、公积金查询"<br> 5:预约") | 1|
| scene_desc   | string | 是       | 使用场景描述                                                 | "使用场景描述不得超过500字"   |
| scene_demo   | string | 是       | 使用场景demo(场景实例图片)                                   | "实例图片路径需先调用上传图片接口" |

**公共响应参数** 

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | Int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**请求示例** 


```shell
curl -X POST \
  'http://openapi.baidu.com/rest/2.0/smartapp/app/apply/moblieauth?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC&reason=收货联系方式&used_scene=票务预订&scene_desc=描述&scene_demo=https://mbs1.bdstatic.com/searchbox/mappconsole/image/20191224/62a0575e-2ea8-4d4d-b5a2-3126f3f94eec.png'
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        
    }
}
```



## 取消手机号权限

> 取消手机号权限 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/app/cancel/mobileauth
```

**请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**公共响应参数** 

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | Int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**请求示例** 

```shell
curl -X POST \
  'http://openapi.baidu.com/rest/2.0/smartapp/app/cancel/moblieauth?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC'
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        
    }
}
```





## 查询手机号权限状态

> 查询手机号权限状态 

``` 
 GET https://openapi.baidu.com/rest/2.0/smartapp/app/get/mobileauthstatus
```

**请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

**公共响应参数** 

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**响应参数** 

| 参数   | 类型   | 描述                                | 示例值 |
| ------ | ------ | ----------------------------------- | ------ |
| status | int    | 状态(0:取消 1:待审核 2:拒绝 3:通过) | 1      |
| reason | string | 失败原因(仅在被拒绝时存在)          |        |

**请求示例** 

```shell
curl -X GET \
  'http://openapi.baidu.com/rest/2.0/smartapp/app/cancel/moblieauth?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC'
```

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "status":1,
      	"reason":"原因"
    }
}

```



**审核结果推送**

> 当审核成功/失败时，百度服务器会向第三方平台方的消息事件接收URL（创建第三方平台时填写）推送相关通知。

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | int    | 小程序客户Id                                                 |
| tpAppId   | int    | 第三方平台appId                                              |
| event     | string | APPLY\_APP\_MOBILE\_AUTH\_PASS:审核通过<br> APPLY\_APP\_MOBILE\_AUTH\_REJECT:审核拒绝 |
| eventTime | string | 事件发生时间 示例：2019-03-01 10:00:00                       |
| reason    | string | 失败原因                                                     |

**审核成功事件推送内容**:

```json
{
    "appId":15263713,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APPLY_APP\_MOBILE_AUTH_PASS"
}

```

**审核失败事件推送内容**

```json
{
    "appId":15263713,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APPLY_APP_MOBILE_AUTH_REJECT",
    "reson":"审核失败原因"
}

```



**授权取消事件推送**

> 当主体账号信息发生变更时.会取消当前账号下所有小程序的获取手机号权限
>
> 若想要恢复权限,需重新调用申请手机号权限API重新审核

| 参数名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| appId     | int    | 小程序客户Id                                   |
| tpAppId   | int    | 第三方平台appId                                |
| event     | string | APP\_MOBILE\_AUTH\_CANCEL : 获取手机号权限取消 |
| eventTime | string | 事件发生时间 示例：2019-03-01 10:00:00         |
| reason    | string | 失败原因(主体信息变更)                         |

**推送内容**:

```json
{
    "appId":15263713,
    "tpAppId": 14242323,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APPLY_APP\_MOBILE_AUTH_PASS",
    "reson":"主体信息变更"
}

```



