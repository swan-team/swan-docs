---
title:  模块化
header: develop
nav: framework
sidebar: app_service_routemodule
---
 
**解释**：可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块可以通过 module.exports、exports 或者 export 对外暴露接口，使用require 或者 import 进行导入。

**代码示例**

```js
// utils.js
var name = 'swan';
var age = 0;
function logName() {
    console.log(name);
}
function logAge() {
    console.log(age);
}
module.exports.logName = logName;
module.exports.logAge = logAge;
```

可以在需要使用这些模块的文件中，对模块进行引用：

```js
var utils = require('./utils');
Page({
    onLoad: function () {
        utils.logName();
    }
});
```

### 模块化编译方式


编译工具提供**依赖分析模式**和**普通编译模式**两种编译模式：

* 依赖分析模式：无用文件（不包含图片）不会被打包到产出中,支持node_modules的使用。

    在依赖分析编译模式下正确的模块引用方式:
    **代码示例**
    ```js
        // 在app.js中引用util文件夹下的a.js的方式:
        require('./util/a.js');
        // b.js中引用a.js
        require('./a.js');
        // 从当前目录到项目根目录下递归寻找node_modules文件夹中是否存在a.js，没有则报错；
        require('a.js');
    ```

* 普通编译模式：不支持node_modues的使用。

    在普通模式下正确的模块引用方式:
    **代码示例**
    ```js
        // 在app.js中引用util文件夹下的a.js的方式:
        1. require('/util/a.js');
        2. require('./util/a.js');
        3. require('util/a.js');
    ```


