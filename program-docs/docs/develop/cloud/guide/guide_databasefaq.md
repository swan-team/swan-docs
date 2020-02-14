---
title: 数据库开发常见问题
header: develop
nav: guide
sidebar: guide_databasefaq
---

 

#### 如果设置记录的唯一ID？

在同一个集合中，创建的文档均有一个唯一 ID，存储在 `_id` 字段中。默认情况下，这个字段是一个 UUID，你也可以手动指定，保证唯一即可。

####  `_cbd_author_id` 字段代表什么含义？

当使用智能小程序端 SDK 创建记录（文档）时，云开发会将当前用户的 ID 存储在此字段中，表明该条记录的作者。参考用户集成相关问题。
