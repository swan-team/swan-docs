---
title: 代码编译
header: develop
nav: devtools
sidebar: complation
---

开发者工具从 [2.2.7](https://smartprogram.baidu.com/docs/develop/devtools/history/) 版本提供 ES6 转 ES5、样式补全、压缩代码等代码编译能力，开发者可在菜单栏“项目信息”中，勾选需要开启的功能。
![图片](../../../img/tool/complation.png) 

## 增强编译
开发者工具从 2.16.0 版本起增加了增强编译的选项来增强ES6转ES5的能力，启用后会使用新的编译逻辑以及提供额外的选项供开发者使用。
开启功能路径：项目信息 => 本地配置 => 增强编译
![图片](../../../img/tool/enhance-compilation.png)
启用增强编译后的编译能力的对比：

|特性 |原有逻辑 |增强编译 |
|---- | ---- | ---- |
|Babel版本 |babel6 |babel7 |
|Presets |env {} |env {chrome:53, ios:8} |
|Helpers |单文件内联 |跨文件共享 |
|Async/Await |不支持 |支持 |
|忽略文件目录 |不支持 |支持 |
|代码压缩 |uglify-js |terser |

- 使用preset-env，支持最新的ECMAScript语法
- 共享Babel辅助函数，减小产出包体积
- 支持async/await语法，按需注入regeneratorRuntime
- 忽略文件目录，可通过<a href="https://smartprogram.baidu.com/docs/develop/devtools/editor_set/">项目配置</a>文件配置
- 可通过项目配置文件指定任意文件、目录不经过编译

## ES6 转 ES5

在开发者工具中，会默认使用 babel 将开发者 ES6 语法代码转换为三端都能很好支持的 ES5 的代码，帮助开发者解决环境不同所带来的开发问题。
需要注意的是：
    为了提高代码质量，在开启 ES6 转换功能的情况下，默认启用 javasctipt 严格模式，请参考 "[use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)"



## 样式补全

开启此选项，开发者工具会自动检测并补全缺失样式，保证在低版本系统上的正常显示。尽管可以规避大部分的问题，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。

## 压缩代码

开启此选项，开发者工具在上传代码时候将会帮助开发者压缩和混淆 javascript 代码，减小代码包体积。
