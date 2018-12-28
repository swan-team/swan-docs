---
title: 搬家工具
header: develop
nav: devtools
sidebar: move
---


## 介绍
搬家工具，是基于`Abstract Syntax Tree`开发的辅助工具，可以帮助您把微信小程序的部分代码迁移到百度智能小程序上。工具可进行静态语法上的转换，根据一些规则去转换代码，抹平微信小程序语法和百度智能小程序语法上的差异，为大家减少因平台差异带来的苦恼。
需要注意的是：工具做不到运行时diff的抹平，也做不到一个API从无到有的过程。所以，需要大家根据转换log，进行二次开发。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/move-tool.gif)

## 获取途径
当前支持NPM和百度开发者工具入口两种方式，请您根据需求进行选择：

* 正常`node.js`和`NPM`支持的情况下，因为版本的差异和报错信息抛出的问题，推荐用`NPM`的方式。
* 在win下，由于`node.js`环境兼容性较差，建议使用开发者工具中的入口。

### NPM
执行一下操作，在[NPM官网](https://www.npmjs.com/package/wx2swan)获取工具：
1. 全局按照个命令行工具： `npm i -g wx2swan`;
2. 执行命令： `wx2swan wxmp`  wxmp是微信小程序的目录;
3. 查看生成目录的log;
4. 根据开发者工具报错以及转换log进行二次开发。
 
### 百度开发者工具入口
除了上面NPM的方式使用搬家工具，您还可以在在百度开发者工具里进入搬家工具：
1. **登录开发者工具。**
2. 单击“工具 > 转换”，即可使用搬家工具，进行转换。
![图片](../../../img/tool/move.png)






