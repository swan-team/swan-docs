---
title: 模版消息 
header: develop
nav: third
sidebar: api
---
为了便于第三方开发者对小程序模板消息接口的模版进行设置，更好得发送模版消息，现提供如下接口：

### 获取帐号下已存在的模板列表

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/library/list?access_token=ACCESS_TOKEN
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 
offset | int | 是 | 用于分页，表示从offset开始，默认值为0
count | int | 是 | 用于分页，表示拉取count条记录，默认值为0,最大为20
**返回值说明**:

字段名 | 类型  | 描述
----- |-----| -----
total_count | int| 模板库标题总数
id |string | 模板标题id（获取模板标题下的关键词库时需要）
title |string | 模板标题内容
**返回值示例**:
```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 2278,
        "list": [
            {
                "id": "BD0001",
                "title": "订单支付成功通知"
            },
            {
                "id": "BD0002",
                "title": "购买成功通知"
            },
            {
                "id": "BD0003",
                "title": "订单发货提醒"
            },
            {
                "id": "BD0004",
                "title": "待付款提醒"
            },
            {
                "id": "BD0005",
                "title": "付款成功通知"
            }
        ]
    }
}
```
### 获取模板库某个模板标题下关键词库

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/library/get?access_token=ACCESS_TOKEN
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 
id | int | 是 | 模板标题id，可通过接口获取，也可登录小程序后台查看获取

**返回值说明**:

字段名 | 类型  | 描述
----- |-----| -----
id| string| 模板标题id
title|string|模板标题
keyword_count|int| 关键字条数
keyword_id | int| 关键词id，添加模板时需要
name |string | 关键词内容
example |string | 关键词内容对应的示例

**返回值示例**:
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

### 组合模板并添加至帐号下的个人模板库

```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/add?access_token=ACCESS_TOKEN&id=ID&keyword_id_list=KEYWORD_ID_LIST
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 
id | int | 是 | 模板标题id
keyword\_id\_list | string | 是 | 模板关键词id列表，如[1,2,3]；

**返回值说明**:

字段名 | 类型  | 描述
----- |-----| -----
template_id | string| 添加至帐号下的模板id，发送小程序模板消息时所需 

**返回值示例**:
```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc"
    }
}
```

**错误码说明**：

|错误码 | 错误描述 | 
|----- |-----|
|2002/30001|参数错误（具体提示见返回值）|

为便于第三方开发者对帐号下已存在的模板进行操作，现提供如下接口：

### 获取帐号下已存在的模板列表

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/list?access_token=ACCESS_TOKEN
```
**参数说明:**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 
offset | int | 是 | 用于分页，表示从offset开始，默认值为0
count | int | 是 | 用于分页，表示拉取count条记录，默认值为0,最大为20

**返回值说明**:

字段名 | 类型  | 描述
----- |-----| -----
total_count | int| 模板库标题总数
template_id |string | 模板id,发送小程序模板消息时所需
title |string | 模板标题
content |string | 模板内容
example |string | 模板内容示例

**返回值示例:**
```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 2,
        "list": [
            {
                "template_id": "e4313219538c4b0262e3a14a0507000e8bd79e9PTPAz",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            },
            {
                "template_id": "f34178cd598201d9dc8d5c88cd87b44cf7cd0e64d90Y",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            }
        ]
    }
}
```
### 删除帐号下的某个模板
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/del?access_token=ACCESS_TOKEN?template_id=TEMPLATE_ID
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据
template_id |string |是| 模板id,发送小程序模板消息时所需

**返回值示例**:

```json
{
    "errno": 0,
    "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 | 
|----- |-----|
|30001|参数错误（具体提示见返回值）|

### 推送模板消息
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/sendmessage?access_token=ACCESS_TOKEN
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据
template\_id |string |是| 所需下发的模板消息的id
touser|string|否|接收者swan_id
touser\_openId|string|否|接收者open_id
data|json/string|是|{"keyword1": {"value": "2018-09-06"},"keyword2": {"value": "kfc"}}
page|string|否|点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数，（示例index?foo=bar），该字段不填则模板无跳转。
scene\_id|string|是|场景id，例如表单id和订单id
scene\_type|int|是|	场景type，1：表单；2：百度收银台订单；3:直连订单
ext|json/string|否|{"xzh\_id":111,"category\_id":15}

**说明**：

+ 当开发者获得用户openid，填写到touser\_openid，否则获取用户swanid，填写到touser。
+ 当touser\_openId 和touser至少填写一个，如同时填写，仅以touser\_openId 下发消息。
+ 评价服务必须填写touser\_openId 以及ext字段。其中ext字段以json格式包含category\_id和xzh\_id。

#### 消息发送失败可能的原因
+ scene\_id 状态需要和用户登录状态保持一致，否则 scene_id 校验会失败。

>如：登录态scene\_id最后一位是1, 未登录态最后一位是0， 登录态对应的是touser\_openId，未登录态对应的是touser。
如果不匹配 scene\_id 将会校验失败，导致消息无法发送。

+ 发送消息时用到的 touser/touser\_openid 必须和 申请 scene\_id 时的 touser/touser\_openid 一一对应， 否则也会导致 scene_id 检验失败。

+ 如果通过上面的查验仍然发送消息失败， 请检查 appkey 是否异常。
**返回值示例**:
```json
{
		"errno": 0,
		"msg": "success",
		"data": {
		    "msg_key": 158
		}
}
```
#### 错误码

结果码 | 错误描述 
----- | -----  
2002| 参数错误
4001| template_id 不正确
4002| 消息推送接口调用失败
4003| 表单无效
4004| 场景id无效
6001| 无push权限