---
title: 图片上传
header: develop
nav: third
sidebar: upload
---

**接口说明**:
目前只支持bmp、jpeg、jpg、png格式

```
POST https://openapi.baidu.com/file/2.0/smartapp/upload/image
```

**参数说明**：

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access\_token|string | 是 | 授权小程序的接口调用凭证/第三方调用凭证|
|multipartFile | File | 是 | 文件|
|type|int | 否 | 图片用途|

**type 说明**：

|参数值 | 图片用途 | 文件大小限制 | 图片像素限制 |
|----- |------|-----| ------|
|1/null|小程序头像|小于等于2M |` 256px * 256px`以内推荐`144px * 144px`|
|2|服务类目资质图片|小于等于5M | -|
|3|小程序名称审核资料|小于等于5M | -|


**错误码说明**：

|错误码 | 错误描述 | 
|----- |-----|
|47003 | 图片尺寸超过限制|
|47000|图片格式无效|

**返回值示例:**

```json
{   
    "errno": 0,
    "msg": "success",
    "data" : "图片url" 
}
```