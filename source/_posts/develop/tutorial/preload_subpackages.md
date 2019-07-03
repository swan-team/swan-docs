---
title: 分包预下载
header: develop
nav: tutorial
sidebar: preload_subpackages
---

**功能介绍**：开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

分包预下载目前既支持通过全局配置方式使用，也支持开发者通过调用API完成。
API调用方式参考：<a href="https://smartprogram.baidu.com/docs/develop/api/open_preloadsubpackage/#loadSubPackage/">loadSubPackage</a>

全局配置方法：

```json
{
  "pages": ["pages/index"],
  "subpackages": [
    {
      "root": "important",
      "pages": ["index"],
    },
    {
      "root": "sub1",
      "pages": ["index"],
    },
    {
      "name": "hello",
      "root": "path/to",
      "pages": ["index"]
    },
    {
      "root": "sub3",
      "pages": ["index"]
    }
  ],
  "preloadRule": {
    "pages/index": {
      "network": "all",
      "packages": ["important"]
    },
    "sub1/index": {
      "packages": ["hello", "sub3"]
    },
    "sub3/index": {
      "packages": ["path/to"]
    }
}
```
preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项：

|字段|类型|必填|默认值|说明|
|--|--|--|--|--|
|packages|StringArray|是 |无|进入页面后预下载分包的 root。|
|network |String|否|wifi |在指定网络下预下载，可选值为：<br/>**all:** 不限网络 <br/>**wifi:** 仅wifi下预下载|
