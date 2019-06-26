---
title: 代码编辑
header: develop
nav: devtools
sidebar: editor 
---

## 文件支持
工具目前提供了 4 种文件的编辑：swan、css、js、json 以及图片文件的预览。

## 文件操作

新建页面的方式：在目录树上右键，选择新建 Page，输入名称后将自动生成页面所需要的 swan、css、js、json。


## 自动保存

1、如果设置中开启了 “修改文件时自动保存”（设置-编辑设置-修改文件自动保存），工具在修改文件时会自动保存到硬盘中，无需手动保存的效果。
2、设置中开启 “编译时自动保存所有文件”（设置-编译设置-编译时自动保存所有文件），在点击编译时自动保存所有文件的效果。


## 自动补全

同大部分编辑器一样，工具提供了较为完善的自动补全：

1、js 文件编辑会帮助开发补全所有的 API 及相关的注释解释，并提供代码模板支持。
2、swan 文件编辑会帮助开发者直接写出相关的标签和标签中的属性。
3、json 文件编辑会帮助开发者补全相关的配置，并给出实时的提示。


## 项目配置文件
可以在项目根目录使用`project.swan.json`文件对项目进行配置。

|字段名 | 类型 |说明|
|---|---|---|
|smartProgramRoot|String|小程序源码的目录(需为相对路径)|
|appid|String| 项目的 AppID，如有变更，请在项目信息中修改 |
|compilation-args|Object|条件参数，目前包含自定义编译条件参数和项目设置编译参数|
|compileType|String|编译类型|
|setting|Object|项目设置|
|developType|String|开发模式|
|editor|Object|编辑器参数|
|host|String|宿主名称|
|minSwanVersion|String|最小基础库版本|
|preview|Object|web预览信息|
|publish|Object|发布信息|
|swan|Object|宿主信息|
|swanList|Object|基础库版本列表|


setting 中可以指定以下设置

|名称 | 类型  | 说明|
|---|---|---|
|urlCheck|Boolean|是否检查安全域名|


compilation-args.common 中可以指定以下设置

|名称 | 类型  | 说明|
|---|---|---|
|ignoreTransJs|Boolean|ES6 转 ES5|
|ignorePrefixCss|Boolean|上传代码时样式自动补全|
|ignoreUglify|Boolean|上传代码时自动压缩混淆|
