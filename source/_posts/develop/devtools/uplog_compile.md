---
title: 编译工具历史更新日志
header: develop
nav: devtools
sidebar: uplog_compile
---
### 编译工具提供依赖分析模式和普通编译模式两种编译模式：

<p>**· 依赖分析模式** :无用文件不会被打包到产出中,支持node_modules的使用;
<p>**· 普通编译模式** :不支持node_modues的使用;不支持以下写法：
#### 项目目录结构如下所示：
```
├── app.js
├── app.json
├── pages
└── util
    ├── a.js
    └── b.js
```
#### 在普通模式下正确的模块引用方式:
```
    // 在app.js中引用util文件夹下的a.js的方式:
    1. require('/util/a.js');
    2. require('./util/a.js');
    3. require('util/a.js');
    ```
#### 在依赖分析编译模式下正确的模块引用方式:
```
    // 在app.js中引用util文件夹下的a.js的方式:
    require('./util/a.js');
    // b.js中引用a.js
    require('./a.js');
    // 从当前目录到项目根目录下递归寻找node_modules文件夹中是否存在a.js，没有则报错；
    require('a.js');
```
<!-- ├── a.js
└── b.js
// 项目结构如上所示

// b.js的内容
require('a.js'); // bad
require('./a.js'); // good
``` -->
2.0版本更新日志
---
|版本号|更新内容|
|----|----|
|v2.0.8|**Change**<p>**·**css标签样式加swan-前缀的bug修改;<p>**·**事件绑定支持字符串加表达式的混合使用。<p>**BugFix**<p>解决十六进制颜色值简写无效的问题。|
|v2.0.6|**New**<p>**·** 新增依赖分析编译模式;<p>**·** 增量编译，编译模式分为普通编译模式及依赖分析编译模式。<p>**BugFix**<p>**·** 解决单引号包含双引号，页面空白的问题。|
|v2.0.4|**BugFix**<p>**·** 修复动画失效的问题；<p> **·** 修复因引入filter功能从而影响页面渲染的问题。|
|v2.0.0|**BugFix**<p> **·** 自定义组件引用js，报模块未定义的bug。<p> **·** 模板命名问题。|
