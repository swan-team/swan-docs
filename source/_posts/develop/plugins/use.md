---
title: 使用插件
header: develop
nav: plugins
sidebar: use
---

## 引入插件代码包 
使用插件前，使用者要在 app.json 中声明需要使用的插件，例如：

** 代码示例：**

``` js
{
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "$providerAppId"
    }
  }
}

```

如上例所示， plugins 中可以定义多个插件声明，每个插件声明以一个使用者自定义的插件引用名作为标识，并指明插件的 appid 和需要使用的版本号。

其中，引用名（如上例中的 myPlugin）由使用者自定义，无需和插件开发者保持一致或与开发者协调。在后续的插件使用中，该引用名将被用于表示该插件。

## 使用插件
使用插件时，插件的代码对于使用者来说是不可见的。

为了正确使用插件，使用者应查看插件提供方给出的“开发文档”，通过文档来明确插件提供的自定义组件、页面名称及提供的 js 接口规范等。

### 使用插件的自定义组件
使用插件提供的自定义组件，和使用普通自定义组件的方式相仿。在 json 文件定义需要引入的自定义组件时，使用 plugin:// 协议指明插件的引用名和自定义组件名，例如：

** 代码示例：** 
``` js
{
  "usingComponents": {
    "list": "plugin://myPlugin/list"
  }
}
```

### 使用插件的页面

需要跳转到插件页面时，url 使用 plugin:// 前缀，形如 plugin://PLUGIN_NAME/PLUGIN_PAGE， 如：

代码示例：
``` js
<navigator url="plugin://myPlugin/public">
  Go to pages/public!
</navigator>
```

### 使用插件的 js 接口
使用插件的 js 接口时，可以使用 requirePlugin 方法。例如，插件提供一个名为 getWelcome 的方法和一个名为 data 的变量，则可以像下面这样调用：
``` js
var pluginApi = requirePlugin('myPlugin');

pluginApi.getWelcome();
var data = pluginApi.data;
```

## 其他注意事项
1. 分包中暂时不支持使用插件。
2. 使用插件时，小程序主体不可以跳转到插件未定义的私有页面，但是插件已定义的公有页面中，可以跳转到插件的私有页面。