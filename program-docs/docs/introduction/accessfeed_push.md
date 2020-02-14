---
title: 素材上传
header: introduction
nav: book
sidebar: accessfeed_push
---


**建议tips：首次上传物料时建议您对素材少量试传，待收到审核概况反馈后再进行大批量的物料上传**

 

**为什么初次建议少量提交素材进行试传？**

当您的小程序发布上线后，为了使您获取到与小程序内容更加匹配的信息流流量，建议您首次对素材进行少量试传（30-50条），同时建议您可以提交多种素材分类资源，便于我们对您的素材物料进行更加精准的分发判断，试传完成后，我们将尽快完成审核，并为您展示审核概况以及审核结果，作为您后续素材上传的参考



![图片](../../img/introduction/auditing/图5.png) 

 

**关于素材提交方式**

当前，百度为开发者提供了3种素材上传方式，用于应对不同的素材量以及时效性，详情参考下表：

 

| **提交方式**    | **上传原理** | **时效性** | **是否需要开发** | **适用素材量** |
| --------------- | ------------ | ---------- | ---------------- | -------------- |
| 链接文件提交    | sitemap      | 定时       | 是               | 不限量         |
| API实时接口提交 | API          | 实时       | 是               | ＜500/天       |
| 单条资源提交    | 模板         | 实时       | 否               | 1/次           |



![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction9.png) 



**方式1-链接文件提交（sitemap提交）**

提交原理说明：资源Sitemap是小程序结构化资源url列表。开发者需要将小程序落地页信息按[信息流素材审核规范](https://smartprogram.baidu.com/docs/introduction/auditinginfo_settled/)整理成标题、正文 、图片等结构化信息；百度Spider会根据上次更新时间、更新频率等信息对资源数据进行提取，经过审核最终投放到feed中进行分发，为小程序带来巨大的流量。 

 

方法1：接口提交，详见[开发者文档](https://smartprogram.baidu.com/docs/develop/serverapi/open_feed/)；

方法2：B端链接文件提交，如下图；

 

操作步骤：



![图片](../../img/introduction/auditing/图7.png) 



![图片](../../img/introduction/auditing/图8.png) 



![图片](../../img/introduction/auditing/图9.png) 

 

**填写说明：**

每个APPID可有三个有效链接文件（sitemap），需要按素材提交接口字段要求提前准备好素材，使用方法简述：

1.提交增量资源或修改更新资源：使用链接文件，即sitemap进行提交，其中文件素材类型选择“增量/更新”，代表资源无问题，可使用在feed中进行分发

 

2.下线资源或删除资源：使用链接文件，即sitemap进行提交，其中文件素材类型选择“下线”，代表资源弃用，不在feed中使用分发，弃用的path，未来不可继续上传，再次提交上传会入库失败

 

**方式2-API实时接口提交**



![图片](../../img/introduction/auditing/图10.png) 

 提交原理说明：通过调用接口进行资源提交，该提交方式适用于少量素材提交，每天有500次调用限制。



**详情请参考[开发者文档](/develop/serverapi/submitresource/)内容**

 

 

**方式3-单条资源提交**

提交原理说明：适用于少量资源提交，直接在页面编辑，资源需要逐条填写。



![图片](../../img/introduction/auditing/图11.png) 



![图片](../../img/introduction/auditing/图12.png) 
