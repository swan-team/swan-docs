---
title: 搬家工具
header: develop
nav: tutorial
sidebar: frame
---

小程序的开发除去常见的原生小程序语法的开发模式，还可以应用层框架开发，用类现代框架 (vue/react) 的语法去开发小程序，提升开发体验和解决跨平台的问题。本文主要讲解如何用常见的小程序框架开发百度小程序。

> 1. 如果遇到相关问题，可以社区里提问或者添加客服微信咨询：`wx2swan-helper`。
> 2. <a href="https://smartprogram.baidu.com/docs/html/third_party/acess-wenjuan/#/wenjuan/">接入调查问卷</a>

## Taro

### 第一步: 安装开发工具
安装Taro开发工具 `@tarojs/cli`;
使用npm或者yarn的方式都可以获取，也可以直接使用npx(在npm 5.2+下)

```
	$ npm install -g @tarojs/cli
	$ yarn global add @tarojs/cli

```

### 第二步: 初始化项目
使用命令创建模板项目

```
	$ taro init swan-taro
```

也可以参考[Taro开发百度小程序示例](https://github.com/zhengjiaqi/taro-demo-swan)

### 第三步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
```

### 第四步: 构建目标代码

> 去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包

```
	# npm script
	$ npm run dev:swan // 开发模式
	$ npm run build:swan // 线上模式
	# 仅限全局安装
	$ taro build --type swan --watch
	$ taro build --type swan
```

### 第五步: 开发者工具预览
在百度开发者工具中选择打开项目目录下的`dist`目录，就可以在开发者工具中预览项目。


## mpvue

### 第一步: 初始化项目
使用示例项目:

```
	$ git clone git@github.com:hucq/mpvue-platform-sample.git
```

也可以参考[mpvue百度小程序demo ](https://github.com/zhengjiaqi/mpvue-demo-swan)

### 第二步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
	$ npm install mpvue@beta mpvue-loader@beta mpvue-template-compiler@beta
```

### 第三步: 构建目标代码


```
	$ npm run dev:swan  // 开发模式
	$ npm run build:swan // 线上模式
```

### 第四步: 开发者工具预览
在百度开发者工具中选择打开项目目录下的`dist/swan`目录，就可以在开发者工具中预览项目。

## WePY

### 第一步: 安装开发工具
安装WePY开发工具 `wepy-cli`;

```
	$ npm install -g wepy-cli@1.7.3-alpha6

```

### 第二步: 初始化项目
使用命令创建模板项目

```
	$ wepy init standard
```
也可以参考[WePY开发百度小程序示例](https://github.com/qianliu013/swan-wepy-todo-demo)

### 第三步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
```

### 第四步: 构建目标代码

注：去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包

```
	# 仅限全局安装
	$ wepy build -o baidu --watch
	$ wepy build -o baidu
```

### 第五步: 开发者工具预览
在百度开发者工具中选择打开项目目录下的`dist`目录，就可以在开发者工具中预览项目。

## Okam

### 第一步：安装 CLI 工具

* Node 安装（要求 `Node >=8 && NPM >= 3`），具体安装可以到[官网下载](https://nodejs.org)；
* CLI 工具安装:
 ```
 npm install okam-cli -g
 ```

### 第二步：初始化项目

```shell
okam init my-project
cd my-project
npm i
```

### 第三步：构建目标代码

|代码|说明|
|--|--|
| `npm run dev`| 带 watch 开发模式|
|`npm run dev:clean`| 删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式|
|`npm run dev:server`|带 watch && 开发 Server 开发模式|
|`npm run build`| 删掉构建重新构建（没有 watch && 开发 Server）|
|`npm run prod`| 生产环境构建|

### 第四步：开发工具预览

在百度开发者工具中选择打开项目目录下的 `dist` 目录，就可以在开发者工具中预览项目。

更多关于 `Okam` 使用，可以参考 [Okam 文档](https://ecomfe.github.io/okam)。


