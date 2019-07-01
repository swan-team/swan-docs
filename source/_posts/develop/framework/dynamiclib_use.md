---
title: 使用动态库
header: develop
nav: framework
sidebar: dynamiclib_use
---

#### 动态库介绍
动态库，是指可被添加到小程序内直接使用的功能组件。开发者可直接在小程序内使用动态库，无需重复开发，为用户提供更丰富的服务。

动态库采用静默更新的方式，即小程序中引用了动态库，动态库更新之后，用户小程序里使用了该动态库的功能将在小程序调起后进行更新，更新操作对用户小程序开发者无感知。

### 引入动态库代码包


使用动态库前，开发者要在 app.json 中声明需要使用的动态库，例如：
###### 代码示例：

```
{
    "dynamicLib": {
        // 定义一个别名，小程序中用这个别名引用动态库。
        "myDynamicLib": {
            // 这是动态库的 `dynamicLibName`，是全局唯一的名字，标志着被引用的动态库
            "provider": "TheUniqueNameOwnedByThisDynamicLib"
        }
    }
}
```
如上例所示， dynamicLib 定义段中可以包含多个动态库声明，每个动态库声明以一个开发者自定义的动态库引用名作为标识，并指明动态库的唯一标识，及动态库名称。其中，引用名（如上例中的 myDynamicLib）由开发者自定义，无需和动态库名称保持一致。在后续的动态库使用中，该引用名将被用于表示该动态库。

### 使用动态库
使用动态库时，动态库的代码对于开发者来说是不可见的。为了正确使用动态库，开发者应查看动态库的详细信息，阅读提供的动态库开发文档，通过文档来明确动态库提供的自定义组件、js 接口规范等。
##### 自定义组件
使用动态库提供的自定义组件，和使用普通自定义组件的方式相仿。在 json 文件定义需要引入的自定义组件时，使用 dynamicLib:// 协议指明动态库的引用名和自定义组件名，例如：

```
{
    "usingComponents": {
        // 这里的 'myDynamicLib' 就是上面定义的，本小程序使用此动态库的别名。
        // 这里的 'special-list' 是此动态库的公开的自定义组件（publicComponents）的名称。
        // 动态库有哪些公开的自定义组件，应从各个动态库的用户文档中得到。
        // 这里的 'my-special-list' 也是个自己定的别名，本页面或者本组件在模版中用此别名引用这个自定义组件。
        "my-special-list": "dynamicLib://myDynamicLib/special-list"
    }
}
```
从而页面中可以使用此自定义组件：


```
<view class="container">
    <view>下面这个自定义组件来自于动态库</view>
    <!-- 这里的 'my-special-list' 就是本页面中对于此自定义组件的别名 -->
    <my-special-list />
</view>
```

##### js接口
使用动态库的 js 接口时，可以使用 requireDynamicLib 方法。例如，动态库提供一个名为 hello 的方法和一个名为 world 的变量，则可以像下面这样调用：

```
// 这里的 'myDynamicLib' 就是上面定义的，本小程序使用此动态库的别名。
let lib = requireDynamicLib('myDynamicLib');
// 这里调用动态库里定义的一个叫做 getData 的方法。
// 动态库有哪些公开的方法或属性可以被调用或访问，应从各个动态库的用户文档中得到。
lib.getData();
```

**Tips**:

* 使用动态库，请确保小程序基础库版本在3.60.2及以上。开发者工具版本在2.4.0及以上。
* 目前暂不支持开发者自行开发动态库，但任何小程序开发者都可以使用已有动态库。
* 当前您可使用的动态库功能：[topOne动态库](http://smartprogram.baidu.com/docs/develop/framework/dynamiclib_topone/)。