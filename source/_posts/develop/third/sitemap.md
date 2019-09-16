---
title: 流量配置
header: develop
nav: third
sidebar: sitemap
---



## 自然搜索流量配置流程详解

为小程序接入百度自然搜索有两种方式：

* 小程序开发者已有h5站点，寻求用小程序替换原有的h5收录结果，则小程序可继承原有h5页面的搜索权重与排位，具体可参考：[接入自然搜索指南](https://smartprogram.baidu.com/docs/introduction/rank/)
* 小程序开发者没有原始h5站点，寻求将小程序页面以新站资源形式接入自然搜索，可参考下述流程

### 为小程序以新站形式接入自然搜索

#### 第一步：模板开启web化
若第三方选择以模板方式代授权小程序提交代码包，则第三方小程序模板需要开启web化

* 查询模板是否开启web化可参考：[模板列表API](https://smartprogram.baidu.com/docs/develop/third/module/)

**注意：目前，提交模板将默认开启web化，无需您进行任何操作。而存量未开启web化的模板则需要重新提交草稿并添加至模板库**

#### 第二步：小程序开启web化
在小程序提交代码包审核前，需要确保开启小程序web化

* 开启小程序web化可参考：[设置web化开关API](https://smartprogram.baidu.com/docs/develop/third/sitemap/#设置web化开关)
* 查询小程序是否开启web化可参考：[获取小程序基础信息API](https://smartprogram.baidu.com/docs/develop/third/pro/#8、获取小程序基础信息)

**注意：目前，新创建的小程序将默认开启web化，而存量未开启web化的小程序需调用上述API开启web化**

#### 第三步：设置页面基础信息
智能小程序被搜索引擎正常收录的前提是Web化，Web化后小程序将以普通网页的形式被爬虫发现和抓取，因此需要进行页面基础信息的设置用于提升搜索引擎优化。具体配置方式可参考：[设置页面基础信息指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/)

#### 第四步：小程序发布上线
小程序上线后才能被自然搜索收录，具体发布上线流程可参考：[小程序包管理](https://smartprogram.baidu.com/docs/develop/third/apppage/)

#### 第五步：绑定熊掌ID
绑定熊掌ID后才可提交Sitemap从而被百度收录并获取流量。第三方可通过API代授权小程序绑定当前超管账号的熊掌ID，或引导开发者自行前往开发者平台绑定已有的其他熊掌ID。

* 绑定当前超管账号熊掌ID可参考：[绑定熊掌ID API](https://smartprogram.baidu.com/docs/develop/third/sitemap/#小程序熊掌ID绑定)
* 绑定其他熊掌ID则需要引导开发者前往小程序开发者平台进行操作：[绑定熊掌ID操作指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E7%BB%91%E5%AE%9A%E7%86%8A%E6%8E%8CID/)

#### 第六步：提交sitemap
Sitemap（即站点地图）就是您⽹站上各⽹⻚的列表。创建并提交 Sitemap 有助于百度发现并了解您⽹站上的所有⽹⻚。您还可以使⽤ Sitemap 提供有关您⽹站的其他信息，如上次更新⽇期、Sitemap ⽂件的更新频率等，供百度 Spider 参考。

百度对已提交的数据，不保证⼀定会抓取及索引所有⽹址。但是，我们会使⽤ Sitemap 中的数据来了解⽹站的结构等信息，这样可以帮助我们改进抓取策略，并在⽇后能更好地对⽹站进⾏抓取。

此外，Sitemap 与搜索排名没有关系，提交的 Sitemap 内容为⼩程序⻚⾯的 Path路径列表，以便百度 spider 按照其规则尽可能多的抓取和收录⼩程序的⻚⾯。

* 通过API提交sitemap可参考：[提交sitemap API](https://smartprogram.baidu.com/docs/develop/third/sitemap/#提交sitemap)
* sitemap的内容、格式等其他信息可参考：[提交sitemap指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E6%8F%90%E4%BA%A4sitemap/)



## 提交sitemap

请求路径:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/access/submit/sitemap?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token	|string|	是	|第三方平台access_token
type |int | 是 | 上传级别 0：周级别，一周左右生效；1：天级别，2~3天生效
url\_list |string | 是 | url集合；上传级别上限，0：每天3000条，1：每天5000条 多个,分割

返回值示例:
```
{
  "errno": 0,
  "msg": "success"
}
```

错误码说明：

错误码 | 错误描述 | 
----- |-----
0| 成功
2002|小程序不存在/选择的收录级别不合法/url数量不合法
30001| 参数有误
30013| 数量超上限
47005| 文件上传失败
60005|尚未绑定熊掌ID，请先绑定熊掌ID

## 设置web化开关

决定是否能将小程序sitemap推送到百度搜索，需要在提代码包前进行操作。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebstatus?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
web\_status |int | 是 | 1:开启 2:关闭
返回值示例:

```
{
  "errno": 0,
  "msg": "success"
}
```

## 小程序熊掌ID绑定

小程序sitemap进入搜索，需要先绑定熊掌ID。此目前只支持绑定当前账户主体对应的熊掌ID。

接口调用请求说明：

```
POST https://openapi.baidu.com/rest/2.0/smartapp/promotion/bind/xzh?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| ----
access_token	|string|	是	|授权小程序的接口调用凭据

返回值示例:
```
{
	"errno": 0,
	"msg": "success"
}
```
错误码表

错误码 | 错误描述 | 
----- |-----
50033 | 主体资质没有审核通过，请先通过主体资质审核
50034 | 熊掌ID尚未审核通过
50036	| 主体未绑定熊掌ID，请先在开发者平台进行绑定
