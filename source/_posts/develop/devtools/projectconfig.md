---
title: 项目配置文件
header: develop
nav: devtools
sidebar: projectconfig
---

可以在项目根目录使用`project.swan.json`文件对项目进行配置。

|字段名 | 类型 |说明|
|---|---|---|
|smartProgramRoot|String|小程序源码的目录(需为相对路径)|
|appid|String| 项目的 AppID，如有变更，请在项目信息中修改 |
|compilation-args|Object|条件参数，目前包含自定义编译条件参数|

以下是一个包含了所有配置选项的`project.swan.json`：

```json
{
    "appid": "",
    "compilation-args": {
        "selected": 0,
        "options": []
    }
}
```
