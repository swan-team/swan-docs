---
title: 订单同步接口
header: develop
nav: function
sidebar: ordercenter 
---
 

订单中心是百度APP内统一的订单查询和回访入口，用户可在**百度App-个人中心-订单**中查看订单信息。<br>开发者可以在用户完成支付后，同步小程序的订单数据至百度订单中心。同时，订单状态发生变化时更新订单数据，如商家发货、订单已完成等。


>导入主订单信息<br>更新主订单信息<br>更新主订单状态<br>导入售后订单信息<br>更新售后订单信息<br>更新售后订单状态

## 导入主订单信息

>该接口用于**添加主订单**，即当POST请求中ResourceID参数不存在时,导入新的主订单数据<br>POST请求中Data参数不可填写多个,暂不支持批量导入<br>**注：若ResourceID已存在,则会用当前POST请求中信息全量覆盖该条记录中主、售后订单信息,故更新订单场景请使用更新专用接口**

接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/ordercenter/add/main/info?access_token=ACCESS_TOKEN
```

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  

**请求body**：

```json

{
  "Data": [
    {
      "CateID": 1,       // 1:订单种类-实物商品
      "BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 小程序AppKey
      "Title": "test",                                // 订单名称
      "ResourceID": "2221554346520",                  // 订单ID，业务方接入的唯一订单ID
      "Ctime": 1233212343,                            // 订单创建时间
      "Mtime": 1233212343,                            // 订单最后修改时间
      "Status": 200,                                  // 200:订单状态-已完成交易
      "EXT": {                                        // 拓展字段 根据订单的不同其结构也不固定 此处以订单为例
        "MainOrder": {                                // 主订单信息
          "Products": [                               // 商品信息
            {
              "ID": "1014093064",                               //商品ID
              "Name": "四川大凉山丑苹果脆甜红将军盐源丑苹果",         //商品名称
              "Desc": "四川大凉山丑苹果脆甜:5斤小果25个左右偏小;",    //商品详情
              "Quantity": 1,                                    //商品数量
              "Price": 2390,                                    //商品原价,单位分。
              "PayPrice": 2390,                                 //实付价格,单位分。
              "ImgList": [                                      //商品图片地址
                "https://imagelib.cdn.bcebos.com/cip_ml_picbc34db9a-7e10-4a96-bf8e-1c690640c6a4.jpeg"
              ],
              "SkuAttr": [                                      //商品SKU属性
                {
                  "Name": "四川大凉山丑苹果脆甜",
                  "Value": "5斤小果25个左右偏小"
                }
              ]
            }
          ],
          "Payment": {                                          //支付信息
            "Time": 0,                                          //付款时间，时间戳
            "Method": 1,                                        //支付方式
            "Amount": 2390,                                     //合计金额，单位分
            "IsPayment": false,                                 //是否支付
            "PreferentialInfo": [                               //优惠信息
              {
                "Name":"优惠券使用",                             //名称
                "Value":100,                                    //优惠金额，单位分
                "Quantity":1                                    //数量
              }
            ],                         
            "PaymentInfo": [                                    //付款信息
              {
                "Name":"运费",                                    //展示名称
                "Value":100,                                    //付款金额，单位分
                "Quantity":1                                    //数量
              }
            ]                          
          },
          "Appraise": {                                         // 订单评价跳转
            "Status": 0,
            "Name": "",
            "H5Schema": "",
            "SwanSchema": "",
                   },
          "OrderDetail": {                                      // 订单详情跳转
            "Status": 2,
            "Name": "",
            "H5Schema": "",
            "SwanSchema": "baiduboxapp://swan/B3GF3AWvCSr59myIs61uqaoYz7pPCSY1/wjz/bdxd/order-detail/order-detail?orderId=159259079195",
       
          }
        },
        "SubsOrder": {                                          // 售后订单信息，若该主订单发生退款/售后，需新增同步其售后订单的售后信息状态
          "Status": 0,
          "Items": [
            {
              "SubOrderID":"onlyOne",                           // 售后订单ID
              "SubStatus":"",                                   // 自订单状态,枚举参照 【退换货枚举值】
              "CTime":1571026201,                               // 售后订单创建时间,时间戳
              "MTime":1571026201,                               // 售后订单修改时间,时间戳
              "OrderDetail":{                                   // 退款退货订单详情跳转
                "Status": 2,
                "Name": "",
                "H5Schema": "",
                "SwanSchema": "baiduboxapp://swan/B3GF3AWvCSr59myIs61uqaoYz7pPCSY1/wjz/bdxd/order-detail/order-detail?orderId=159259079195",
                "IPhoneSchema": "",
                "AndroidSchema": ""
               },
              "Refund":{                                        //商品 退款／退货 信息
                "Amount":10,                                    //退款总金额
                "Product":[                                     //退款/退货商品
                  {
                    "ID":"1014093064",                          //商品ID
                    "Quantity":1,                               //商品退款/商品退货 数量
                    "Amount":0                                  //应退金额,单位分
                  }
                ]
              },
              "OrderType":1                                     // 退款订单类型
            }
          ]
        }
      }
    }
  ]
}

```

## 更新主订单信息接口

>POST请求中ResourceID必须对应存在主订单信息,否则无法更新

接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/ordercenter/update/main/info?access_token=ACCESS_TOKEN
```

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  

**请求body参数**

```
{
	"Data": [{
		"CateID": 2, // 2:订单种类-虚拟物品
		"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 小程序的key
		"ResourceID": "2221554346520", // 业务方接入的资源唯一ID
		"Status": 200, // 200:订单状态-已完成交易
		"EXT": { // 拓展字段 根据资产的不同其结构也不固定 此处以订单为例
			"MainOrder": { // 主订单信息
				"Products": [ // 商品信息
					{
						"ID": "1014093064", //商品ID
						"Name": "四川大凉山丑苹果脆甜红将军盐源丑苹果", //商品名称
						"Desc": "四川大凉山丑苹果脆甜:5斤小果25个左右偏小;", //商品详情
						"Quantity": 1, //商品数量
						"Price": 2390, //商品原价,单位分。
						"PayPrice": 2390, //实付价格,单位分。
						"ImgList": [ //商品图片地址
							"https://imagelib.cdn.bcebos.com/cip_ml_picbc34db9a-7e10-4a96-bf8e-1c690640c6a4.jpeg"
						],
						"SkuAttr": [ //商品SKU属性
							{
								"Name": "四川大凉山丑苹果脆甜",
								"Value": "5斤小果25个左右偏小"
							}
						]
					}
				],
				"Payment": { // 支付信息
					"Time": 0, //付款时间，时间戳
					"Method": 1, //支付方式
					"Amount": 2390, //合计金额，单位分
					"IsPayment": false, //是否支付
					"PreferentialInfo": [ //优惠信息
						{
							"Name": "优惠券使用", //名称
							"Value": 100, //优惠金额，单位分
							"Quantity": 1 //数量
						}
					],
					"PaymentInfo": [ //付款信息
						{
							"Name": "运费", //展示名称
							"Value": 100, //付款金额，单位分
							"Quantity": 1 //数量
						}
					]
				},
				"Appraise": { // 订单评价跳转
					"Status": 0,
					"Name": "",
					"H5Schema": "",
					"SwanSchema": "",
					"IPhoneSchema": "",
					"AndroidSchema": ""
				},
				"OrderDetail": { // 订单详情跳转
					"Status": 2,
					"Name": "",
					"H5Schema": "",
					"SwanSchema": "baiduboxapp://swan/B3GF3AWvCSr59myIs61uqaoYz7pPCSY1/wjz/bdxd/order-detail/order-detail?orderId=159259079195",
					"IPhoneSchema": "",
					"AndroidSchema": ""
				}
			}
		}
	}]
}
```

## 更新主订单状态接口

>POST请求中ResourceID必须对应存在主订单信息,否则无法更新

接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/ordercenter/update/main/status?access_token=ACCESS_TOKEN
```

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  

**请求body参数**

```
{
	"Data": [{
			"CateID": 2, // 2:订单种类-虚拟物品
			"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 应用小程序Key
			"ResourceID": "2221554346520", // 业务方接入的资源唯一ID
			"Status": 200, // 200:订单状态-已完成交易
		},
		{
			"CateID": 2, // 2:订单种类-虚拟物品
			"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 小程序Key
			"ResourceID": "3221554346520", // 业务方接入的资源唯一ID
			"Status": 200, // 200:订单状态-已完成交易
		}
	]
}
```

## 导入售后订单信息接口


接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/ordercenter/sub/append?access_token=ACCESS_TOKEN
```

> Data.Ext.SubsOrder.Item参数可填写多个,实现批量导入<br>必须先导入POST中ResourceID参数对应的主订单信息,否则无法导入售后订单信息

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  

**请求body**：

```json

{
	"Data":[{
		"CateID": 2, // 2:订单种类-虚拟物品
		"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 小程序的appKey
		"ResourceID": "2221554346520", // 业务方接入的资源唯一ID
		"EXT": { // 拓展字段 根据资产的不同其结构也不固定 此处以订单为例
			"SubsOrder": { // 售后订单信息，
				"Items": [{
					"SubOrderID": "onlyOne", // 售后订单ID
					"SubStatus": "", // 自订单状态,枚举参照 【退换货枚举值】
					"CTime": 1571026201, // 售后订单创建时间,时间戳
					"MTime": 1571026201, // 售后订单修改时间,时间戳
					"OrderDetail": { // 退款退货订单详情跳转
						"Status": 2,
						"Name": "",
						"H5Schema": "",
						"SwanSchema": "baiduboxapp://swan/B3GF3AWvCSr59myIs61uqaoYz7pPCSY1/wjz/bdxd/order-detail/order-detail?orderId=159259079195",
						"IPhoneSchema": "",
						"AndroidSchema": ""
					},
					"Refund": { //商品 退款／退货 信息
						"Amount": 10, //退款总金额
						"Product": [ //退款/退货商品
							{
								"ID": "1014093064", //商品ID
								"Quantity": 1, //商品退款/商品退货 数量
								"Amount": 0 //应退金额,单位分
							}
						]
					},
					"OrderType": 1 // 退款订单类型
				}]
			}
		}
	}]
}

```



## 更新售后订单信息接口

> 当前POST请求参数中售后订单信息,**全量覆盖**现有售后订单信息数据<br>POST请求中ResourceID必须对应存在主订单信息,且SubOrderID必须对应存在售后订单信息,否则无法更新

接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/ordercenter/update/sub/info?access_token=ACCESS_TOKEN
```

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  


**请求body参数**

```
{
	"Data": [{
		"CateID": 2, // 2:订单种类-虚拟物品
		"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 应用ID
		"ResourceID": "2221554346520", // 业务方接入的资源唯一ID
		"EXT": { // 拓展字段 根据资产的不同其结构也不固定 此处以订单为例
			"SubsOrder": {                                          // 售后订单信息
			"Status": 0,
			"Items": [{
				"SubOrderID": "onlyOne", // 售后订单ID
				"SubStatus": "", // 自订单状态,枚举参照 【退换货枚举值】
				"CTime": 1571026201, // 售后订单创建时间,时间戳
				"MTime": 1571026201, // 售后订单修改时间,时间戳
				"OrderDetail": { // 退款退货订单详情跳转
					"Status": 2,
					"Name": "",
					"H5Schema": "",
					"SwanSchema": "baiduboxapp://swan/B3GF3AWvCSr59myIs61uqaoYz7pPCSY1/wjz/bdxd/order-detail/order-detail?orderId=159259079195",
					"IPhoneSchema": "",
					"AndroidSchema": ""
				},
				"Refund": { //商品 退款／退货 信息
					"Amount": 10, //退款总金额
					"Product": [ //退款/退货商品
						{
							"ID": "1014093064", //商品ID
							"Quantity": 1, //商品退款/商品退货 数量
							"Amount": 0 //应退金额,单位分
						}
					]
				},
				"OrderType": 1 // 退款订单类型
			}]
		}
	}]
}
```
## 更新售后订单状态接口

>POST请求中ResourceID必须对应存在主订单信息,且SubOrderID必须对应存在售后订单信息,否则无法更新


接口调用请求说明:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/update/sub/status?access_token=ACCESS_TOKEN
```

### 参数说明:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
open_id| string | 是 |用户openId  

**请求body**：

```json

{
	"Data": [{
		"CateID": 2, // 2:订单种类-虚拟物品
		"BizAPPID": "a392qXwK8L5GDUWhFoC01cKwoy7tmehg", // 小程序的appKey
		"ResourceID": "2221554346520", // 业务方接入的资源唯一ID
		"EXT": { // 拓展字段 根据资产的不同其结构也不固定 此处以订单为例
			"SubsOrder": { // 售后订单信息
				"Status": 0,
				"Items": [{
						"SubOrderID": "onlyOne", // 售后订单ID
						"SubStatus": "", // 自订单状态,枚举参照 【退换货枚举值】
					},
					{
						"SubOrderID": "onlyOne", // 售后订单ID
						"SubStatus": "", // 自订单状态,枚举参照 【退换货枚举值】
					}
				]
			}
		}
	}]
}

```


**响应示例**:

```json
{
    "errno": 0,
    "msg": "success",
    "data": [
        {
            "biz_app_id": "IGRshW1EovxlMIoeLXQZkQiGcGGyjsPX",
            "cate_id": "1",
            "resource_id": "aa",
            "rows_affected": "0"
        }
    ]
}
```

**返回值参数说明**

|字段名称|字段类型|备注|
|---|---|---|
| biz_app\_id | string | POST请求参数中BizAPPID
| cate_id | int | POST请求参数中CateID
| resource_id | string | POST请求参数中ResourceID
| rows_affected | int | 请求受影响行数(即请求是否成功 0为失败 非0为成功)

# POST请求参数说明

## Data

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|ResourceID|string|是|主订单ID|
|BizAPPID|string|是|小程序AppKey|
|Ctime|int|是|订单创建时间|
|Mtime|int|是|订单最后被修改时间|
|CateID|int|是|订单种类：1(实物)，2(虚拟物品)|
|Title|string|是|订单标题，展示用|
|Status|int|是|订单状态，其值根据`TypeID`不同有不同的定义，详细见下|
|Ext|Data.Ext|是|扩展信息，详细结构见下|

**CateID==1，即实物订单时**

|Data.Status|含义|
|---|---|---|
|1|待付款|
|5|等待卖家发货|
|6|等待买家收货|
|100|交易关闭，例如用户主动取消订单等|
|200|交易完成|
|300|隐藏，用于订单删除,不向用户展示的场景|

**CateID==2，即虚拟物订单时**

|Data.Status|含义|
|---|---|---|
|1|待付款|
|2|等待卖家确认|
|3|卖家处理中|
|4|卖家已确认|
|100|交易关闭，例如用户主动取消订单等|
|200|交易完成|
|300|隐藏，用于订单删除,不向用户展示的场景|

## Data.Ext

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|MainOrder|Data.Ext.MainOrder|是|主订单信息 （购买商品订单）|
|SubsOrder|Data.Ext.SubsOrder|否|售后订单信息（退换货／售后订单）|

## Data.Ext.MainOrder

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Products|[]Data.Ext.MainOrder.Product|是|**数组**，商品信息列表，若商品只有1个则数组长度为1|
|Payment|Data.Ext.MainOrder.Payment|是|支付信息|
|Appraise|Data.Ext.MainOrder.Appraise|否|评价内容跳转的跳转结构|
|OrderDetail|Data.Ext.MainOrder.OrderDetail|否|订单详情页的结构|

## Data.Ext.MainOrder.Product

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|ID|string|是|商品ID，业务方的唯一商品ID|
|Name|string|是|商品名字|
|Desc|string|否|商品简述|
|Quantity|int|是|本商品的交易数量|
|Price|int|是|本商品原价，单位分，即`100`代表`1元`|
|PayPrice|int|是|实付价，单位分，即`100`代表`1元`|
|ImgList|[]string|否|商品预览，值为预览图URL地址，最多5张|
|DetailPage|Data.Ext.MainOrder.Product.DetailPage|否|商品详情的跳转的跳转结构|
|SkuAttr|[]Data.Ext.MainOrder.Product.SkuAttr|否|商品规格，最多4个|

## Data.Ext.MainOrder.Product.DetailPage

见[DetailPage](#DetailPage)结构

## Data.Ext.MainOrder.Product.SkuAttr

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Name|string|是|规格名称，例如“颜色”或“尺寸”|
|Value|string|是|规格值|


```
// []Data.Ext.MainOrder.Product.SkuAttr示例

[{
    "Name": "颜色",
    "Value": "Red"
},{
    "Name": "颜色",
    "Value": "Black"
}]
```

## Data.Ext.MainOrder.Payment

`Payment.Amount = (Products.PayPrice * Products.Quantity) + (PaymentInfo.Value * PaymentInfo.Quantity)  - (PreferentialInfo.Value * PreferentialInfo.Quantity)`

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Method|int|是|付款方式，1(在线付)，2(货到付款)|
|Amount|int|是|合计金额，单位分，即`100`为`1元`|
|IsPayment|bool|是|是否已付款|
|Time|int|否|付款时间|
|PreferentialInfo|[]Data.Ext.MainOrder.Payment.PaymentSpecInfo|否|优惠券信息|
|PaymentInfo|[]Data.Ext.MainOrder.Payment.PaymentSpecInfo|否|其他支付信息，如运费、保险等。|

## Data.Ext.MainOrder.Payment.PaymentSpecInfo

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Name|string|是| 展示名称|
|Value|int|是|合计金额，单位分，即`100`为`1元`|
|Quantity|int|是|数量|

## Data.Ext.MainOrder.Appraise

见[DetailPage](#DetailPage)结构

## Data.Ext.MainOrder.OrderDetail

见[DetailPage](#DetailPage)结构

## Data.Ext.SubsOrder

多为退换货产生的售后订单

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Status|int|是|所有售后订单的状态汇总最终状态|
|Items|[]Data.Ext.SubsOrder.Item|是|售后订单列表|

## Data.Ext.SubsOrder.Status

|Status值|含义|
|---|---|
|400|申请中，买家发起申请，等待卖家同意申请|
|401|处理中，卖家同意售后申请，售后处理中状态|
|402|退款成功，已完成售后。针对需退款的订单已退款成功。|
|403|退款成功，已完成售后。对换货订单，买家已收到货物。|
|404|已关闭，买家主动关闭售后，或者系统关闭售后。|
|407|卖家已拒绝，卖家主动拒绝售后申请。|

## Data.Ext.SubsOrder.Item

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|SubOrderID|string|是|售后订单ID|
|SubStatus|int|是|售后订单状态，同Data.Ext.SubsOrder.Status|
|CTime|int|是|创建时间|
|MTime|int|是|修改时间|
|OrderType|int|是|退款类型，1(仅退款)，2(换货)，3(退款+退货)|
|OrderDetail|Data.Ext.SubsOrder.Item.OrderDetail|否|跳转到这个订单的详情结构|
|Refund|Data.Ext.SubsOrder.Item.Refund|否|售后订单商品信息|

## Data.Ext.SubsOrder.Item.OrderDetail

见[DetailPage](#DetailPage)结构

## Data.Ext.SubsOrder.Item.Payment

参照[Data.Ext.MainOrder.Payment](#Data-Ext-MainOrder-Payment)结构

## Data.Ext.SubsOrder.Item.Refund

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Amount|int|是|退款总金额，单位分，即`100`为`1元`|
|Product|[]Data.Ext.SubsOrder.Item.Refund.Product|是|售后商品列表|

## Data.Ext.SubsOrder.Item.Refund.Product

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|ID|string|是|商品ID|
|Quantity|int|是|售后商品数量|
|Amount|int|是|退款金额，单位分，即`100`为`1元`|

<!-- ## Data.Ext.SubsOrder.Item.Aftermarket

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Product|[]Data.Ext.SubsOrder.Item.Aftermarket.Product|是|退货商品列表|

## Data.Ext.SubsOrder.Item.Aftermarket.Product

参照[Data.Ext.SubsOrder.Item.Refund.Product](#Data-Ext-SubsOrder-Item-Refund-Product)结构
 -->

## DetailPage

DetailPage内部定义了如何执行跳转的数据结构协议。
Scheme即客户端统一调起协议，协议的使用需要确保参数传递的正确。

|字段名称|字段类型|必填|备注|
|---|---|---|---|
|Status|int|否|0(隐藏)、1(正常展示，禁止跳转)、2(正常展示，允许跳转)|
|Name|string|否|展示名称|
|H5Schema|string|否|用以H5跳转Scheme|
|SwanSchema|string|否|用以小程序跳转Scheme|
|IPhoneSchema|string|否|用以苹果手机跳转Scheme|
|AndroidSchema|string|否|用以安卓手机跳转Scheme|
