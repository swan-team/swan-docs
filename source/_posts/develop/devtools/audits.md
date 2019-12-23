---
title: 体验评分
header: develop
nav: devtools
sidebar: audits
---

体验评分是百度开发者工具推出的一项给智能小程序打分的功能，它会在小程序运行过程中实时检查，分析出影响小程序性能和体验的地方，并给出相应的优化建议。

## 运行环境要求

- 下载并安装 2.23.0 或以上版本的开发者工具。
    > 下载链接：[windows 64](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) / [mac](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)

- 基础库需要使用 2.0.0 及以上版本。

## 使用流程
1. 打开开发者工具，进入你的小程序项目，在项目信息中将基础库切换到 xx 以上版本。
2. 在调试器区域切换到 Audits 面板。     
3. 单击最左边“开始”按钮，然后自行操作小程序界面，运行过的页面就会被“体验评分”检测到。
   ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/audits-1.png)
4. 体验评分运行时，会显示所有页面以及当前访问过的页面，开发者可以随时点击停止按钮来关闭体验评分。     
   ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/audits-2.png)
5. 点击“停止”按钮后，会停止检测，并生成检测报告，开发者可以查看报告中的打分，并根据优化建议来优化小程序。     
6. 如果需要再次运行体验评分，可以点击“清除结果”按钮，清空上一次的分析报告，单击“开始”按钮，开始新一次的检查。请注意，体验评分不提供报告存储服务，一旦清空体验评分，将无法再查看本次评分结果。
   ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/audits-3.png)


## 自动运行

为了方便开发者能够及时发现小程序的体验问题，从开发者工具 2.23.0 版本起支持体验评分的 “自动运行” 功能。当开启时，体验评分会在修改代码后自动运行，开发者可以随时切换到体验评分面板来查看评分情况。
在开发者工具的项目信息-本地设置中，可以勾选『自动运行体验评分』来开启此功能。

   ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/audits-4.png)


