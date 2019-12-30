---
title: smtUI介绍
header: develop
nav: extensioned
sidebar: info
---

smtUI是一套开发、设计风格统一的智能小程序扩展组件库，由百度智能小程序官方设计团队和智能小程序团队为小程序量身设计，以增强开发者开发体验。

### smtUI目前提供的核心能力如下： 

信息流、信息流子项、刷新、下拉加载、页面状态、icon等基础组件。

## smtUI快速上手： 

* 使用前： 扩展组件库基于智能小程序自定义组件构建，在使用扩展组件库之前，建议先阅读熟悉[智能小程序自定义组件](https://smartprogram.baidu.com/docs/develop/framework/custom-component/)。

* 引入组件： 可以通过npm方式下载构建，npm包名为@smt-ui/component

* 如何使用：

1. 假设组件的目录为smtui-miniprogram，首先要在该项目中npm安装依赖包@smt-ui/component；

2. 引入 npm 包中的自定义组件
```
{
    "usingComponents": {
        "smt-icon": "@smt-ui/component/src/icon"
    }
}
```

3. 在对应页面的 swan 中直接使用该组件
```
<smt-icon name="arrow-left"></smt-icon>
```
 具体使用可[参考组件文档](/develop/extended/ui_component/smt-feed/) 
