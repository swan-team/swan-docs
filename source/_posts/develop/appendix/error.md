---
title: 错误码
header: develop
nav: appendix
sidebar: error
---

## ARGUMENTS_CHECK_API_ERROR

API对入参进行特殊校验时，如果校验失败会报如下错误码：

|错误码|说明|
|--|--|
| `setNavigationBarColor`|验证 frontColor 是否为黑色和白色|
|`showModal`|验证 confirmText 和 cancelText 的长度|
| `showActionSheet`|验证 itemList 的长度|
|`getFileInfo`|验证 digestAlgorithm 的类型|
|`setBackgroundTextStyle`|验证 textStyle 的类型|

## ARGUMENTS_REQUIRED_API_ERROR

使用 API 时，入参中有必填项缺失。

## ARGUMENTS_TYPE_API_ERROR

使用 API 的时候，入参中有部分参数值的类型有误。
如：应该传入 object ，结果传入 string 。需要开发者严格按照文档规定来使用API。

## ARGUMENTS_TYPE_ERROR

函数传递的参数类型错误，如： 
App 和 Page 传的参数类型必须为 bject 对象。

## EVENT_HANDLER_APP_ERROR

在 App 事件处理函数中，JS 执行错误时会出现此错误码。 
具体发生位置及错误信息请依据控制台错误提示。

## EVENT_HANDLER_PAGE_ERROR

在 Page 事件处理函数中，JS 执行错误时会出现此错误码。 
具体发生位置及错误信息请依据控制台错误提示。

## LIFE_CYCLE_APP_ERROR

在 App 生命周期函数中，JS 执行错误时会出现此错误码。 
具体发生位置及错误信息请依据控制台错误提示。

## LIFE_CYCLE_INEXISTENT_ERROR

生命周期未提供错误提示，开发者在App中使用了onLoad、onReady未提供的生命周期函数时给予报错提示。

## LIFE_CYCLE_PAGE_ERROR

在 App 生命周期函数中，JS 执行错误时会出现此错误码。 
具体发生位置及错误信息请依据控制台错误提示。

## LIFE_CYCLE_TYPE_ERROR

生命周期类型错误提示，App和Page中所有生命周期的类型应该为funtion，如果不是会给予抛错提示。

## SET_DATA_ARGUMENTS_LENGTH_ERROR

setData参数长度错误，setData最多允许传递3个参数。详情参考<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#Page-prototype-setData/">setData使用文档</a>。

## SET_DATA_ARGUMENTS_TYPE_ERROR

setData参数类型错误：

|类型举例|说明|
|--|--|
|setData({a:123})|setData 函数只有一个参数时，参数必须是对象。 |
|setData(a, 123) 或 setData({a:123}, function(){})|setData 函数有两个参数时，第一个参数必须是字符串或者对象。 | 
|setData({a:123}, function(){})|setData 函数有两个参数时，第一个参数如果为对象，第二个参数必须为函数。 |
|this.setData(‘a’, 123, function(){});|setData有三个参数时，第一个参数必须是字符串。 |
|this.setData(‘a’, 123, function(){});|setData有三个参数时，第三个参数必须是函数。 |

详情参考<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#Page-prototype-setData/">setData使用文档</a>。

## THIRDJSERROR_API_ERROR

开发者传入的success、fail、complete中有js报错。

## USE_API_ERROR

开发者使用的问题，如：分享时点了取消按钮。