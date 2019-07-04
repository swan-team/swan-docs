---
title: 小程序代码构成
header: develop
nav: tutorial
sidebar: json
---


​在上一讲中，通过开发者工具快速创建了一个初始化项目。在项目工程里，可以看到每个页面有以下四类文件：

- .json 后缀的`JSON`配置文件
- .swan 后缀的`SWAN`模板文件
- .css 后缀的`CSS`样式文件
- .js 后缀的`JS`脚本逻辑文件

四种文件的含义以及作用会在本章进行介绍。

## JSON 配置

JSON 是一种数据格式，并不是编程语言，在小程序中，使用JSON配置可以完成一些页面的静态设置。

我们可以看到在项目的根目录有一个`app.json`和`project.config.json`，此外在`pages/index`目录下还有一个`index.json`，我们依次来说明一下它们的用途。

### 小程序配置 app.json

app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。项目里边的`app.json`配置内容如下：

```js
{
  "pages":[
    "pages/index/index"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "SWAN",
    "navigationBarTextStyle":"black"
  }
}
```

我们简单说一下这个配置各个项的含义:

- `pages`字段 —— 用于描述当前小程序所有页面路径，用于框架初始化页面。
- `window`字段 —— 定义小程序所有页面的配置，例如：顶部背景颜色，文字颜色定义等。

其他配置项细节可以参考文档 [小程序的配置 app.json](==TODO==)。

- **工具配置`project.config.json`**

小程序开发者工具会记住你的一切设置，当你换一台电脑开发时，工具会恢复到你之前设置的状态继续工作。

其他配置项细节可以参考文档 [开发者工具的配置](https://smartprogram.baidu.com/docs/develop/devtools/editor/#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/)。

- **页面配置 page.json**

这里的`page.json`其实用来表示`pages/index`目录下的`index.json`这类和小程序页面相关的配置。

根据所开发的小程序风格，我们可以在`app.json`里边声明相应的顶部颜色。但大多数情况下，每个页面都有自己独特的风格，因此将此页面相关的配置写在对应的页面`page.json`，使得每个页面都可以有自己的风格，并且页面级配置优先级比App级要高。

其他配置项细节可以参考文档 [页面配置](https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/)。

- **JSON 语法**

在开发小程序的过程中，JSON配置有一些注意事项需要开发者清晰的了解。

JSON文件都是被包裹在一个大括号中 {}，通过`key-value`的方式来表达数据。JSON的Key必须包裹在一个双引号中，在实际开发中，引起JSON格式的错误一般是没有对key加双引号，或者使用了单引号。

**JSON的值只能是以下几种数据格式:**

- 数字，包含浮点数和整数
- 字符串，需要包裹在双引号中
- Bool值，true 或者 false
- 数组，需要包裹在方括号中 []
- 对象，需要包裹在大括号中 {}
- Null

**注意：**
- 其他任何格式都会触发报错，例如值为`undefined`是不允许；
- `JSON`文件中无法使用注释。


