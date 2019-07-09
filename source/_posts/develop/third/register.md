## 代注册账号、代创建小程序功能文档

> 使用此功能前找百度相关同学开通使用权限


### 流程图
![授权流程图](https://b.bdstatic.com/searchbox/mappconsole/image/20190320/95cca28f-6c25-4ae8-b286-97a1452772e6.png)


#### 授权-在原有授权流程上变更 变更点：

在原有授权流程步骤四（引导小程序管理员对第三方平台进行授权）请求中增加参数type=1，用来标识授权注册，其他授权流程保持不变。客户扫码授权后会在和原有授权流程一样在授权二维码页面跳转到预留地址，同时在链接后追加授权码参数。


## 代注册+创建小程序
代客户注册小程序账号及创建小程序，审核失败后可修改注册信息再次调用。
注册的百度账号需未绑定熊掌号，同时不是某个小程序的管理员或成员。提交成功后，不代表小程序名称已占用，在资料审核通过后，创建小程序可能会失败（审核机制变更，期间被名称占用等），失败原因会在推送中体现。图片字段需要使用通过[图片上传接口](https://smartprogram.baidu.com/docs/develop/third/upload)返回的url。

### 接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/account/register?access_token=ACCESS_TOKEN
```

### 参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 第三方接口调用凭据
authorization\_code|string | 是 | 授权码
account\_name|string|是|账户名称 账号介绍字数要求在10-20个字符之间（两个英文等于一个字符，不足两个相当于一个字符），只支持数字，英文，汉字和符号· )
account\_desc|string|是|账户描述 账号介绍字数要求在10-20个字之间（两个英文等于一个字符，不足两个相当于一个字符)
confirm\_letter|string|否|确认公函（政府类型账号必传）
website|string|否|政务官网（政府类型账号必传）
app\_name|string | 是 | 小程序名称 字数要求4-30个字符之间，仅支持使用中文、数字、英文、下划线、竖线及括号（一个中文算两个字符）
app\_desc|string | 是 | 小程序描述 小程序简介字数要求10-56个字符之间 （一个中文算两个字符）
app\_avatar|string | 是 | 小程序头像
app\_category|json| 是 | 小程序类目及资质
location|string | 是 | 位置(选取获取地域列表返回值 例：北京市-北京市）
domain|int | 是 | 小程序领域(选取获取行业列表返回值)
owner\_name|string | 是 | 运营者姓名
owner\_id|string | 是 | 运营者身份证号
owner\_photo|string | 否 | 运营者手持身份证照片
org\_name|string | 是 | 组织(企业)名称
org\_code|string | 是 | 组织机构（营业执照）代码
org\_license|string | 是 | 组织机构代码证影印件
org\_type|int | 是 | 组织类型 2—媒体 3—企业 4—政府 5—其他
org\_sub\_type|int | 否 | org\_type=2 媒体类型时 <br> 1: 组织机构/事业单位类<br> 2: 企业类媒体   <br> org\_type=3 企业类型时 <br>  1: 个体工商 <br> 2: 公司企业<br>（org\_type=2,3时必传）
app\_name\_material | string | 否 | 小程序名称审核补充材料（当名称包含品牌词，高流量词时需上传） 多个,分割
agent|string| 否 | 代理商名称


categorys示例：
> 注意：1、不需要资质qualis字段不传 2、[获取小程序全类目列表接口](https://smartprogram.baidu.com/docs/develop/third/info) 3.id为子类目id

```
[{
	"sub_category_id": 216
}, {
	"sub_category_id": 2,
	"qualis": [{
		"id": 1,
		"addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970498145990.jpg"
	}]
}]

```

### 返回值说明:

字段名  | 类型   | 描述
------ | ----- | ----
customer_id | int | 客户id

返回值示例:

```
{
	"errno": 0,
	"msg": "success",
	"data": {
		customer_id:133
	}
}
```

### 错误码说明:

错误码  | 错误描述
------ | ----- 
50016 | 账号已注册 
50017 | 账户名已存在
50018 | 同一个身份证号只能申请一个账号
50019 | 当前百度账号已经开通熊掌号
50020 | 账号正在审核中，请耐心等待审核结果
50021 | 修改内容一致,无需修改
50022 | 运营者姓名与身份证号不匹配
50023 | 当前资质开号数量已达上限
50024 | 小程序名称已经被占用
50025 | 小程序名称非法
50027 | 当前账号已经绑定为小程序的管理员或成员，请解除绑定
47008 | 图片来源非法
40001 | 参数错误


## 审核结果推送

当资料审核成功/失败时，百度服务器会向第三方平台方的授权事件接收URL（创建第三方平台时填写）推送相关通知。

POST数据示例：

### 审核成功通知

```json
{
    "customerId":1,
    "appId": 小程序appid,
    "appKey": "APPKEY",
    "tpAppId": 第三方平台appid,
    "examineId":1,
    "eventTime": "2019-01-14 12:45:10",
    "event": "ACCOUNT_AND_APP_CREATE_AUDIT_PASS",
    "authorizationCode":"ACCESS_TOKEN",
    "authorizationCodeExpiresIn":1800
}
```

### 审核失败通知

```json
{
	"customerId":1,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "ACCOUNT_AND_APP_CREATE_AUDIT_FAIL",
    "reason": "名称过长（名称控制在10个字以内）。"
}
```

### 参数说明

参数名 | 类型 | 描述
----- |-----|  -----
appId |int | 小程序appid
customer_id | int | 客户id
appKey |string | 小程序appKey
tpAppId | int | 第三方平台id
examineId | int | 小程序基本信息审核id
event |string | ACCOUNT\_AND\_APP\_CREATE\_AUDIT\_PASS:账号及小程序审核通过<br>ACCOUNT\_AND\_APP\_CREATE\_AUDIT\_FAIL:账号及小程序审核失败<br>APP\_CREATE\_FAIL:小程序创建失败
eventTime |string | 事件发生时间 示例：2019-03-01 10:00:00
reason |string | 失败原因
authorizationCode |string | 授权码可以换取小程序的接口调用凭据
authorizationCodeExpiresIn |int | 授权码过期时间（单位：秒）


## 获取行业列表

代注册API domain字段码表接口

###  接口调用请求说明:

```
GET https://openapi.baidu.com/rest/2.0/smartapp/account/getdomain?access_token=ACCESS_TOKEN
```

###  参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 第三方接口调用凭据

### 返回值说明:

字段名  | 类型   | 描述
------ | ----- | ----
id | int | 行业id
domain | string | 行业描述


### 返回值示例:

```json

{
	"errno": 0,
	"msg": "success",
	"data": [
		{
			"id": 1,
			"domain": "汽车"
		},
		{
			"id": 2,
			"domain": "美食"
		},
		{
			"id": 3,
			"domain": "娱乐"
		},
		{
			"id": 4,
			"domain": "体育"
		},
		{
			"id": 5,
			"domain": "职场"
		},
		{
			"id": 6,
			"domain": "新闻"
		},
		{
			"id": 7,
			"domain": "政务"
		},
		{
			"id": 8,
			"domain": "财经"
		},
		{
			"id": 9,
			"domain": "科技"
		}
		......
	]
}

```


## 获取地域列表

代注册API location字段码表

### 接口调用请求说明:

```
GET https://openapi.baidu.com/rest/2.0/smartapp/account/getcity?access_token=ACCESS_TOKEN
```

### 参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 第三方接口调用凭据

### 返回值说明:

字段名  | 类型   | 描述
------ | ----- | ----
province | string | 省名
city | array | 市名

### 返回值示例:

```json

{
    "errno": 0,
    "msg": "success",
    "data": [
        {
            "province": "北京市",
            "city": [
                "北京市"
            ]
        },
        {
            "province": "河北省",
            "city": [
                "石家庄",
                "唐山",
                "秦皇岛",
                "邯郸",
                "邢台",
                "保定",
                "张家口",
                "承德",
                "沧州",
                "廊坊",
                "衡水"
            ]
        },
        ......
    ]
}
```
## 代创建小程序

进行代注册的授权同时会完成代创建小程序的授权,在扫码完成授权之后会返回authorization\_code 与 create\_authorization\_code两个授权码,authorization\_code为调用代注册接口所需要的授权码,create\_authorization\_code为调用代创建小程序接口所需要的授权码。<br/>
若之前完成过代注册 或 用户已注册过熊掌号,<b>重新完成上述授权操作(增加type=1)</b>,获得create\_authorization\_code,作为调用代创建接口的凭证。

### 接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/createbytp?access_token=ACCESS_TOKEN
```

### 参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 第三方平台的token
authorization\_code |string | 是 | 代创建授权码
app\_name |string | 是 | 小程序名称
app\_desc |string | 是 | 小程序描述
photo | string | 是 | 小程序头像
category | string| 是 | 小程序服务类目(json)
app\_name\_material|string |否| 名称审核材料(多个时,分割)

category示例：
> 注意：1、不需要资质qualis字段不传 2、[获取小程序全类目列表接口](https://smartprogram.baidu.com/docs/develop/third/info) 3.id为子类目id

```json
[
    {
        "sub_category_id": 197,
        "qualis": [
            {
                "id": 1,
                "addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970481267095.jpg"
            }
        ]
    },
    {
        "sub_category_id": 2
    }
]
```
### category说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
sub\_category\_id |int | 是 | 服务类目id
qualis| object | 否 |服务类目资质信息
id|int|否|服务类目资质id|
addr |int|否|服务类目资质照片地址|

### 返回值示例:

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "app_id": 1111,
        "app_key": "APP_KEY",
        "examine_id": 1,
        "authorization_code": "c210YXBwMjAzMTQxODMzMThiMDlhMzhlZmEzMGM2MjAzY2NjMGQ5MTBlNGNmZWI1"
    }
}
```

### 返回值说明:

字段名  | 类型   | 描述
------ | ----- | ----
app\_id | int | App ID (智能小程序ID)
app\_key | string | App Key
examine\_id|int|审核Id
authorization\_code |string| 换取token的授权码

### POST数据示例（代创建权限取消授权）:

```json
{
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "CREATE_APP_AUTH_CANCEL",
    "createAuthorizationCode":"失效的代创建授权码",
}
```
## 通过授权码换取customer_id

防止代注册返回的customer_id丢失导致授权码和customer_id对应关系无法对应，增加补偿机制，可以通过授权码来换取customer_id

### 接口调用请求说明:

```
GET https://openapi.baidu.com/rest/2.0/smartapp/auth/tp/authcodetocustomerid?access_token=ACCESS_TOKEN&authorization_code=AUTHORIZATION_CODE
```
### 参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token	|string|	是	|授权小程序的接口调用凭据
authorization_code |string | 是 | 代注册授权码

### 返回值示例:

```json
{
  "errno": 0,
  "msg": "success",
  "data" : {
  	"customer_id" : 11233
  }
}
```