---
title: 项目配置文件
header: develop
nav: devtools
sidebar: editor_set
---

  
可以在项目根目录使用`project.swan.json`文件对项目进行配置。

|字段名 | 类型 |说明|
|---|---|---|
|smartProgramRoot|String|智能小程序源码的目录(需为相对路径)|
|appid|String| 项目的 AppID，如有变更，请在项目信息中修改 |
|compilation-args|Object|条件参数，目前包含自定义编译条件参数和项目设置编译参数|
|compileType|String|编译类型|
|setting|Object|项目设置|
|developType|String|开发模式|
|editor|Object|编辑器参数|
|host|String|宿主名称|
|preview|Object|web预览信息|
|publish|Object|发布信息|
|swan|Object|宿主信息|

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
|babelSetting|Object|增强编译下Babel的配置项|

compilation-args.common.babelSetting 中可以指定以下设置

|名称 | 类型  | 说明|
|---|---|---|
|ignore|Array&lt;String&gt;|配置需要跳过Babel编译(包括代码压缩)处理的文件或目录|
