---
title: 提交Sitemap
header: introduction
nav: book
sidebar: rank_sitemap
---

**1.什么是Sitemap？为何要提交Sitemap？**

Sitemap（即站点地图）指站点上各页面的列表目录。在小程序进搜索的过程中，Sitemap 可方便百度发现并了解小程序上有哪些可供抓取的页面。
百度对已提交的数据，不保证⼀定会抓取及索引所有⽹址。但是，通过对 Sitemap 中的数据进行分析，百度能更好的了解小程序页面结构等信息，改进抓取策略，更好地对小程序进⾏抓取。
需要注意的是，Sitemap 与搜索排名没有关系，提交的 Sitemap 内容为⼩程序⻚⾯的 Path路径列表，以便百度 spider 按照其规则尽可能多的抓取和收录⼩程序的⻚⾯。


**2.Sitemap的内容**
Sitemap 用于声明主动推送给百度自然搜索收录的页面。列表中每一行都是一个要被收录页面的“路径+参数”，格式例如 pages/list/index?id=1。
Sitemap 示例:
>path/to/smartapp/list?city=bj
>path/to/smartapp/list?city=sh
>path/to/smartapp/detail?id=1024
>pages/detail?page=2048&id=1024&deailId=4096

**3. Sitemap ⽀持哪些提交格式？**
百度⼩程序中 Sitemap 协议⽀持⼀种格式：txt ⽂本格式，开发者需要在⼀个 txt ⽂本中列明向百度⼩程序提交的⼩程序⻚⾯ Path 地址，并将 txt ⽂本⽂件通过开发者平台-流量配置-⾃然搜索结果-Sitemap 提交入口进⾏提交
格式示例如下：
>pages/articleDetail/articleDetail?articleId=579379
>pages/articleDetail/articleDetail?articleId=600884
>pages/articleDetail/articleDetail?articleId=582423
>pages/articleDetail/articleDetail?articleId=574993

此⽂本⽂件需要遵循以下指南：

* ⽂本⽂件每⾏都必须有⼀个 Path 路径地址，每个路径中不能有换⾏；
* 不应包含 Path 路径列表以外的任何信息；
* 您必须书写完整的⽹址⼩程序路径，包括⻚⾯ path 内的参数；
* ⽂本⽂件需使⽤ UTF-8 编码。



**4.如何提交Sitemap？**

进入【自然搜索】-【小程序新资源提交】-【天级收录/周级收录】里提交上传 Sitemap资源，点击上传文件即可进行提交。
 ![Alt text](https://b.bdstatic.com/searchbox/icms/searchbox/img/0206sitemap1.png)

• 天级别收录（供高时效性内容使用）：预计2-3天完成提交资源的收录，但每日数量配额少，且会根据上周总体配额使用情况和资源质量情况动态进行调节。上传的文件仅支持txt，每次上传不能超过10mb。
• 周级别收录（供通用内容使用）：预计2-3周完成提交资源的收录，当前每日可提交5W 条，文件仅支持txt，每次上传文件不能超过10mb。

**5.如何得知 Sitemap 资源的收录索引情况**

开发者可在天级/周级收录tab下查看资源提交记录及索引资源量，点击查看详情，可查看资源未索引原因。
 ![Alt text](https://b.bdstatic.com/searchbox/icms/searchbox/img/0206sitemap2.png)
 
 开发者也可在【搜索接入】-【自然搜索】-【数据概况】中，查看小程序在搜索中的流量概况、点展统计、流量关键词以及索引概况。
 ![Alt text](https://b.bdstatic.com/searchbox/icms/searchbox/img/0206sitemap3.png)
 ![Alt text](https://b.bdstatic.com/searchbox/icms/searchbox/img/0206sitemap4.png)
