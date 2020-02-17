---
title: getTemplateLibraryById
header: develop
nav: serverapi
sidebar: getTemplateLibraryById
---

### 获取模板库某个模板标题下关键词库

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/libraryget
```

**解释**：获取模板库某个模板标题下的关键词库。

**公共请求参数**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 

**请求参数**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
id | int | 是 | 模板标题id，可通过接口获取，也可登录小程序后台查看获取

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

字段名 | 类型  | 描述
----- |-----| -----
id| string| 模板标题id
title|string|模板标题
keyword_count|int| 关键字条数
keyword_id | int| 关键词id，添加模板时需要
name |string | 关键词内容
example |string | 关键词内容对应的示例

**请求实例**

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/libraryget?access_token=24.ee3671b4e41f2704280d5ddbe9a3f94c
  .3600.1556461507.C8Bds396khnu6KDKnqfoUUgZ31K-hBY-gJNc4SsGGjYJrS2RMh&id=wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc'
```



**响应示例**:

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "id": "BD0016",
        "title": "取票成功通知",
        "keyword_count": 13,
        "keyword_list": [
            {
                "keyword_id": 1,
                "name": "金额",
                "example": "300元"
            },
            {
                "keyword_id": 2,
                "name": "订单号",
                "example": "321254555"
            },
            {
                "keyword_id": 3,
                "name": "预订时间",
                "example": "2016年9月9日 10：10"
            },
            {
                "keyword_id": 4,
                "name": "发车时间",
                "example": "2016年9月10日 10：20"
            },
            {
                "keyword_id": 5,
                "name": "出发地",
                "example": "广州"
            },
            {
                "keyword_id": 6,
                "name": "目的地",
                "example": "北京"
            },
            {
                "keyword_id": 7,
                "name": "备注",
                "example": "请尽快完成支付"
            },
            {
                "keyword_id": 8,
                "name": "上车地点",
                "example": "3号口"
            },
            {
                "keyword_id": 9,
                "name": "车牌号",
                "example": "粤A00951"
            },
            {
                "keyword_id": 10,
                "name": "司机姓名",
                "example": "王师傅"
            },
            {
                "keyword_id": 11,
                "name": "手机号码",
                "example": "15201912039"
            },
            {
                "keyword_id": 12,
                "name": "联系人",
                "example": "张三"
            },
            {
                "keyword_id": 13,
                "name": "坐席类型",
                "example": "一等座"
            }
        ]
    }
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|2002|参数错误|
