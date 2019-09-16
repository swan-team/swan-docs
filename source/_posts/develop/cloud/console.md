---
title: 云开发控制台
header: develop
nav: cloud
sidebar: console
---

云开发提供了一个控制台用于可视化管理云资源。控制台包含以下几大模块。


## 概览

概览可查看当前环境的环境名称，环境 id，资源使用量和套餐内容。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_console_overview.png)

### 创建环境

智能小程序云开发提供2个免费的云环境。

可通过当前环境列表点击`创建环境`进入创建环境的页面。

![图片](../../../img/cloud/cloud_console_create_env.png)

在创建环境的页面，填入环境名称和选择环境后，点击确认，即可创建新环境。

![图片](../../../img/cloud/cloud_console_create_list.png)

环境创建成功后会自动进入概览页面。

## 云数据库

管理数据库集合、记录、索引设置。

### 合集

合集操作包括创建合集，删除合集。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_overview.png)

右击合集名称可删除合集或拷贝合集名称

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_collection1.png)

### 文档

通过控制台可进行文档的新建，删除，导入，导出，查询。

右击文档名称可以删除或拷贝文档 id

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_document.png)

对于单个文档可进行字段的查看，新增，修改和删除。

字段编辑可以修改字段的 key, 类型和值。其中类型可选为`string`, `number`, `boolean`, `null`, `array`, `object`, `date`, `geopoint`

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_edit.png)

### 索引

索引管理可以新建，查询，删除索引。

添加索引可选唯一非唯一索引。可以添加多个字段。

> 注意唯一索引需要保证所有文档中该字段的值都不相等。否则索引会创建失败。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud_db_index.png)


## 云存储

云存储控制面板可查看管理文件。包括上传文件，新建文件夹，删除文件。

点击文件夹可进入文件夹。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud-develop-bos-folder.png)

点击文件会显示文件信息。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/cloud-develop-bos-file.png)

## 云函数

云函数面板可管理云函数、查看调用日志。

### 函数管理

可新建函数，查询，测试，配置，删除云函数。

![图片](../../../img/cloud/cloud_console_function.png)

#### 新建云函数

点击新建云函数，输入函数名和描述可新建云函数。云函数名支持英文字母大小写、数字、- 和 _，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度 1-40。云函数描述不能超过 85 个字符。

创建云函数后，默认生成一个空白函数，空白函数的返回值为输入参数。可在开发者工具编辑器中修改、部署云函数。

云函数将从index.js中的main方法执行，请确保文件中含有同名函数main

![图片](../../../img/cloud/cloud_console_function_new.png)

#### 配置云函数

配置云函数时可配置环境变量。云函数运行时会注入到`process.env`


![图片](../../../img/cloud/cloud_console_function_config.png)

#### 云函数测试

点击云函数测试可测试云函数。测试云函数的参数为 json 格式。编辑好参数点击运行测试即可看到测试结果。


![图片](../../../img/cloud/cloud_console_function_test_result.png)


### 日志

日志可按函数名筛选和按request ID 搜索。

![图片](../../../img/cloud/cloud_console_function_log.png)
