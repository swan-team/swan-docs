---
title: 小程序API提交
header: introduction
nav: book
sidebar: rank_api
---



#### 什么是小程序API提交？与上传sitemap文件有何区别？

小程序API提交是将小程序资源提交到搜索的一种方式，即开发者可通过请求API接口，将小程序资源path路径，提交到API接口中。相比于上传sitemap文件，API提交方式能给用户更便捷的提交体验，两种方式都会占用当日提交配额。

#### 请求路径:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/access/submitsitemap/api?access_token=ACCESS_TOKEN
```


#### 参数说明:

参数名 | 类型 | 是否必须 | 描述 | 示例
----- |-----| ------| ----- | ----
access_token	|string|	是	|权限校验Token，获取方式见[开发者服务权限说明](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)。|
type |int | 是 | 通过TYPE字段选择上传接口。<br>**·**0：周级提交，一周左右生效；<br>**·**1：天级提交，2~3天生效| 0
url\_list |string  | 是 | 小程序path集合，多个path用逗号分隔。<br>**·**天级提交配额根据提交活跃度和资源质量进行调节，具体以平台显示为准；<br>**·**周级提交配额每日上限为5W条，每次提交上限为3000条。|/pages/index1?id=1,/pages/index2



#### 返回值示例:
```
{
  "errno": 0,
  "msg": "success"
}
```

#### 错误码说明：

错误码 | 错误描述 | 
----- |-----
0| 成功
-1024|业务异常
500| 对不起，服务器出错了，请稍候再试
2002|小程序不存在/选择的收录级别不合法/url数量不合法
30001| 参数有误
30013| 数量超上限
47005| 文件上传失败
60005| 尚未绑定熊掌ID，请先绑定熊掌ID
