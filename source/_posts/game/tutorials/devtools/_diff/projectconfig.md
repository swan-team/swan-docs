### 项目配置文件

可以在项目根目录使用`project.swan.json`文件对项目进行配置。

|字段名 | 类型 |说明|
|---|---|---|
|appid|String| 项目的 AppID，只在新建项目时读取 |
|condition|Object|条件参数，目前包含自定义编译条件参数|

以下是一个包含了所有配置选项的`project.swan.json`：

```json
{
    "appid": "",
    "condition": {
        "swan": {
            "current": 0,
            "list": [
                {
                    "id": "-1",
                    "name": "view",
                    "pathName": "pages/view/view",
                    "query": "name=swan&action=home"
                }
            ]
        }
    }
}
```

