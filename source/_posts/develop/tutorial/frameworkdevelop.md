---
title: 框架开发
header: develop
nav: tutorial
sidebar: frameworkdevelop
---

 
小程序的开发除去常见的原生小程序语法的开发模式，还可以应用层框架开发，用类现代框架 (vue/react) 的语法去开发小程序，提升开发体验和解决跨平台的问题。本文主要讲解如何用常见的小程序框架开发百度小程序。

>  * 由于开发者工具会 watch 项目文件修改，如果出现三方框架构建时变更大量文件而导致无法编译的情况，请尝试在三方框架的构建结束后重新打开项目。
* 当使用第三方框架生成百度小程序的代码带有 source-map 时，建议关闭第三方框架生成代码的配置。

### Taro

#### 第一步: 安装开发工具
安装 Taro 开发工具 `@tarojs/cli`;
使用 npm 或者 yarn 的方式都可以获取，也可以直接使用 npx(在 npm 5.2+ 下)

```
	$ npm install -g @tarojs/cli
	$ yarn global add @tarojs/cli

```

#### 第二步: 初始化项目
使用命令创建模板项目

```
	$ taro init swan-taro
```

也可以参考 [Taro 开发百度小程序示例](https://github.com/zhengjiaqi/taro-demo-swan)

#### 第三步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
```

#### 第四步: 构建目标代码

> 去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包

```
	# npm script
	$ npm run dev:swan // 开发模式
	$ npm run build:swan // 线上模式
	# 仅限全局安装
	$ taro build --type swan --watch
	$ taro build --type swan
```

#### 第四步: 开发者工具打开项目
可以通过两种方式打开项目：
方式一：使用开发者工具打开生成的 `dist` 目录，进行调试、预览、上传，
方式二：使用 2.8.1 及以上版本开发者工具打开项目目录，同时进行以下配置，配置完成后，就可以在开发者工具中开发、调试、预览、上传。

1. `npm run build:swan`
2. 在 `project.swan.json`文件中增加配置 `"smartProgramRoot": "dist"`（如果已有此配置，请忽略）
3. 在项目信息面板中设置如下自定义预处理指令。
	- 编译前预处理: `npm run dev:swan` 并勾选 **异步执行**
	- 上传前预处理: `npm run build:swan`
4. 重新打开项目

### mpvue

#### 第一步: 初始化项目
使用示例项目:

```
	$ git clone git@github.com:hucq/mpvue-platform-sample.git
```

也可以参考 [mpvue 开发百度小程序示例](https://github.com/zhengjiaqi/mpvue-demo-swan)

#### 第二步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
	$ npm install mpvue@beta mpvue-loader@beta mpvue-template-compiler@beta
```

#### 第三步: 构建目标代码

```
	$ npm run dev:swan  // 开发模式
	$ npm run build:swan // 线上模式
```

#### 第四步: 开发者工具打开项目
可以通过两种方式打开项目：
方式一：使用开发者工具打开生成的 `dist/swan` 目录，进行调试、预览、上传，
方式二：使用 2.8.1 及以上版本开发者工具打开项目目录，同时进行以下配置，配置完成后，就可以在开发者工具中开发、调试、预览、上传。

1. `npm run build:swan`
2. 在`project.swan.json`文件中增加配置 `"smartProgramRoot": "dist/swan"`（如果已有此配置，请忽略）
3. 在项目信息面板中设置如下自定义预处理指令。
	- 编译前预处理: `npm run dev:swan` 并勾选 **异步执行**
	- 上传前预处理: `npm run build:swan`
4. 点击编译按钮

### WePY

#### 第一步: 安装开发工具
安装WePY开发工具 `wepy-cli`;

```
	$ npm install -g wepy-cli@1.7.3-alpha6

```

#### 第二步: 初始化项目
使用命令创建模板项目

```
	$ wepy init standard
```
也可以参考 [WePY 开发百度小程序示例](https://github.com/qianliu013/swan-wepy-todo-demo)

#### 第三步: 安装依赖
进入项目目录，安装依赖

```
	$ npm install
```

#### 第四步: 构建目标代码

注：去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包

```
	# 仅限全局安装
	$ wepy build -o baidu --watch
	$ wepy build -o baidu
```

#### 第五步: 开发者工具预览
在百度开发者工具中选择打开项目目录下的`dist`目录，就可以在开发者工具中预览项目。

### Okam

#### 第一步：安装 CLI 工具

* Node 安装（要求 `Node >=8 && NPM >= 3`），具体安装可以到[官网下载](https://nodejs.org)；
* CLI 工具安装:
 ```
 npm install okam-cli -g
 ```

#### 第二步：初始化项目

```shell
okam init my-project
cd my-project
npm install
```

#### 第三步：构建目标代码

|代码|说明|
|--|--|
| `npm run dev`| 带 watch 开发模式|
|`npm run dev:clean`| 删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式|
|`npm run dev:server`|带 watch && 开发 Server 开发模式|
|`npm run build`| 删掉构建重新构建（没有 watch && 开发 Server）|
|`npm run prod`| 生产环境构建|

#### 第四步: 开发者工具打开项目
可以通过两种方式打开项目：
方式一：使用开发者工具打开生成的 `dist` 目录，进行调试、预览、上传，
方式二：使用 2.8.1 及以上版本开发者工具打开项目目录，同时进行以下配置，配置完成后，就可以在开发者工具中开发、调试、预览、上传。

1. `npm run prod`
2. 在 `project.swan.json`文件中增加配置 `"smartProgramRoot": "dist"`（如果已有此配置，请忽略）
3. 在项目信息面板中设置如下自定义预处理指令。
	- 编译前预处理: `npm run dev` 并勾选 **异步执行**
	- 上传前预处理: `npm run prod`
4. 点击编译按钮

更多关于 `Okam` 使用，可以参考 [Okam 文档](https://ecomfe.github.io/okam)。













