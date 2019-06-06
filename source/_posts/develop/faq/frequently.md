---
title: 常见问题
header: develop
nav: faq
sidebar: frequently
---

## API & 组件

####  Q: request 请求在 iOS 端会进入 fail 回调函数的原因有哪些？ 

A:请查看 url 中是否出现了中文，如需要使用中文字体，请对中文字符进行 [encodeURIComponent](http://smartprogram.baidu.com/docs/develop/api/net_request/)。


#### Q: 在webview 中使用了 cookie，导致存储信息与小程序不能共享的原因是什么？

A: web-view 网页与小程序之间不支持除 JSSDK 提供的接口之外的通信； 
1. 小程序中如需设置cookie 建议使用Storage； 参见[详情](https://smartprogram.baidu.com/docs/develop/api/storage_save/) 。
2. 如需要共享小程序参数到 webview 页面中， 可在 webview的src中加上链接参数。


#### Q:webview 中参入含有中文使用三方自己的约定方式进行编码 iOS 打开后出现白屏的情况该如何处理？
A： 避免在链接中带有中文字符，在 iOS 中会有打开白屏的问题，如需要使用中文字体，请对中文字符进行 [encodeURIComponent](http://smartprogram.baidu.com/docs/develop/api/net_request/)。

#### Q：如何在web-view中使用拨打电话的功能？
A：如果想在 web-view 使用 JSSDK 提供的接口能力，需要引入 [swanjs](https://smartprogram.baidu.com/docs/develop/component/open/#web-view/) 包，如下示例：

![](../../../img/faq/webview.png)


## Web 化

#### Q：小程序后台审核的 Web 化地址多了一个appkey的参数，有什么影响吗？ 
A：在预览和审核地址中，会带 appkey 的参数，上线后正式环境没有该参数。

#### Q:  Web 化的样式有问题，影响收录吗，是否会对用户产生影响？

A: 会。爬虫的抓取过程，不仅会分析页面文本，页面样式，动态数据，页面交互等所有页面状态都是爬虫收录的重要参考。因此， Web 化页面样式有问题可能会影响收录效果。

#### Q： Web 化页面样式有问题该如何处理？ 
A：可以通过[ Web 化预览](https://smartprogram.baidu.com/docs/develop/web/webintroduction)调试排查样式问题，如是 Web 化实现的问题，欢迎社区反馈。

#### Q: Web 化后代理接口出错该如何处理？
A： 代理接口出错分以下两种情况：
* 如果错误码为 416 ，则是 request 域名校验未通过。请按该指示完成设置：“小程序后台-设置-开发设置-服务器域名-request的合法域名”。
* 如果非 416 错误码，请检查开发者服务器接口是否针对  Web 化请求环境校验不通过，或者开发者服务器接口不稳定。

#### Q:  Web 化的 SEO 信息要在哪里配置？
A：SEO 信息设置请参考[页面基础信息介绍](https://smartprogram.baidu.com/docs/introduction/rank/#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/)， [页面基础信息设置方式](https://smartprogram.baidu.com/docs/develop/api/pageinfo/) 。

#### Q8:移动端站点有 m 站和 mip 站，应该如何配置 url-mapping？
A: 多个 H5 地址指向同一个小程序路径可以配置多条`H5  => 小程序path`规则，具体规则语法请参考：[配置URL映射规则](https://smartprogram.baidu.com/docs/introduction/rank/#%E9%85%8D%E7%BD%AEURL%E6%98%A0%E5%B0%84%E8%A7%84%E5%88%99/)

#### Q：小程序 Web 化sitemap提交后多久生效？ 
A：提交完成一周之后即可生效。

#### Q: Web 化的展示形式是怎样的？
A：请阅读[流量接入说明](https://smartprogram.baidu.com/docs/introduction/intro/)了解。

## 工具

#### Q：为什么 Electron 2.x 在部分中文 win7 上无法打开？

A：
**现象**：部分 windows7 下 1.x 工具可以打开，升级到 2.x 后，打开工具无反应，后台没有启动任何进程。
**原因分析**：应该是启动时直接崩溃，未找到有效错误信息。猜测是 electron 的bug，远程协助连接问题机器，尝试安装 electron 官方 demo 后发现，启动 demo 直接报错，搜索错误信息找到相关的 [issue](https://github.com/electron/electron/issues/12980) 。

**解决方案**

 - 安装 [windows 系统更新](https://support.microsoft.com/en-us/help/4343900/windows-7-update-kb4343900) 
 - 命令行执行 `netsh winsock reset`
 - 重启电脑


#### Q：小程序支持使用 npm 吗？ 
A：支持，把开发工具的编译模式更改为“依赖分析“模式就可以使用npm安装依赖包了。


#### Q:转换工具转换完使用依赖分析报错时该如何处理？ 
A:切换成普通编译


#### Q: 点击预览或调试按钮提示当前版本的开发者工具无法发布小程序时，该如何处理？
A: 确认为最新开发者工具，考虑appid填写错误，如：小游戏填写小程序的appid

#### Q: 开发者工具一直提示编译中，无法结束时该如何处理？
A: 请尝试下述解决方案：
* Windows 可尝试 `C:\Users\你的用户名\.swan-cli` 这个目录，重启工具。
* Mac 下 删除 `~/.swan-cli` 目录，重启工具
