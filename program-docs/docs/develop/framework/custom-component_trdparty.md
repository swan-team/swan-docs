---
title: 第三方自定义组件
header: develop
nav: framework
sidebar: custom-component_trdparty
---


第三方自定义组件包的开发与自定义组件开发基本相同，差异就是需要使用 npm 来管理自定义组件包。要求开发者具有基础的 node.js 和 npm 相关的知识，如若之前未接触过 npm，可参考官方 [npm](https://docs.npmjs.com/about-npm/index.html) 文档，同时需要百度开发者工具辅助开发。

## 开发前准备

* 要求开发者具有基础的 node.js 和 npm 相关的知识，同时需要百度开发者工具辅助开发。
* 下载百度开发者工具。 [Windows 64版下载地址](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online)  |   [Mac版下载地址](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)。

## 使用 npm 包

在小程序根目录中执行命令安装 npm 包。下载后的文件在文件夹 node_modules 中。

```
npm install
```
在引用的时候，直接使用包中package.json的 name 名字即可。

```
"usingComponents": {
    "swan-custom-component": "swan-custom-component"
}
```

## 开发 npm 包

### 下载模板

为了方便开发者能够快速开发第三方自定义组件，为此提供了一个可用于开发、调试、测试用的[项目模板](https://github.com/swan-team/swan-templates/tree/master/packages/swan-custom-component)，可以通过以下几种方式进行下载:

* 直接从 github 上下载 zip 文件并解压，文件夹 swan-custom-component 下即为自定义组件模板;
* 直接从 github 上的仓库 clone 下载，cd swan-custom-component 进入即为自定义组件模板;
* 使用命令行工具初始化项目，用法见下面说明。

### 命令行工具

快速安装

```
npm install -g smartprogram-cli
```

初始化自定义模板
```
smartprogram init --type custom-component test
```

执行完上述命令后会生成以 test 为文件名的自定义组件模板，开发者可以在此项目中进行开发修改。命令行工具的更多用法可以查看 github 仓库上的 [README.md](https://github.com/swan-team/swan-templates/blob/master/packages/swan-custom-component/README.md) 文件。

## 发布 npm 包

发布 npm 包的流程简述如下：

1. 如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。
2. 在本地登录 npm 帐号，在本地执行：
    ```
    npm adduser
    ```
    或者
    ```
    npm login
    ```
3. 在已完成编写的 npm 包根目录下执行：
```
npm publish
```

至此，npm 包就成功发布到 npm 平台了。

> 一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。
