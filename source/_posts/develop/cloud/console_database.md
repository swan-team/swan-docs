---
title: 云数据库
header: develop
nav: cloud
sidebar: console_database
---

# 云数据库

管理数据库集合、记录、索引设置。

## 合集

合集操作包括创建合集，删除合集。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_overview.png)

右击合集名称可删除合集或拷贝合集名称

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_collection1.png)

## 文档

通过控制台可进行文档的新建，删除，导入，导出，查询。

右击文档名称可以删除或拷贝文档 id

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_document.png)

对于单个文档可进行字段的查看，新增，修改和删除。

字段编辑可以修改字段的 key, 类型和值。其中类型可选为`string`, `number`, `boolean`, `null`, `array`, `object`, `date`, `geopoint`

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_edit.png)

## 索引

索引管理可以新建，查询，删除索引。

添加索引可选唯一非唯一索引。可以添加多个字段。

> 注意唯一索引需要保证所有文档中该字段的值都不相等。否则索引会创建失败。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_index.png)
