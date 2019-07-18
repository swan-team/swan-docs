---
title: web化常见问题
header: develop
nav: faq
sidebar: webfaq
---
 

#### Q：小程序后台审核的 Web 化地址多了一个appkey的参数，有什么影响吗？
A：在预览和审核地址中，会带 appkey 的参数，上线后正式环境没有该参数。

#### Q: Web 化的样式有问题，影响收录吗，是否会对用户产生影响？

A: 会。爬虫的抓取过程，不仅会分析页面文本，页面样式，动态数据，页面交互等所有页面状态都是爬虫收录的重要参考。因此， Web 化页面样式有问题可能会影响收录效果。

#### Q：Web 化页面样式有问题该如何处理？
A：可以通过[ Web 化预览](https://smartprogram.baidu.com/docs/develop/web/webintroduction)调试排查样式问题，如是 Web 化实现的问题，欢迎社区反馈。

#### Q: Web 化后代理接口出错该如何处理？
A： 代理接口出错分以下两种情况：
* 如果错误码为 416 ，则是 request 域名校验未通过。请按该指示完成设置：“小程序后台-设置-开发设置-服务器域名-request的合法域名”。
* 如果非 416 错误码，请检查开发者服务器接口是否针对  Web 化请求环境校验不通过，或者开发者服务器接口不稳定。

#### Q: Web 化的 SEO 信息要在哪里配置？
A：SEO 信息设置请参考[页面基础信息介绍](https://smartprogram.baidu.com/docs/introduction/rank/#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/)， [页面基础信息设置方式](https://smartprogram.baidu.com/docs/develop/api/pageinfo/) 。

#### Q: 移动端站点有 m 站和 mip 站，应该如何配置 url-mapping？
A: 多个 H5 地址指向同一个小程序路径可以配置多条`H5  => 小程序path`规则，具体规则语法请参考：[配置URL映射规则](https://smartprogram.baidu.com/docs/introduction/rank/#%E9%85%8D%E7%BD%AEURL%E6%98%A0%E5%B0%84%E8%A7%84%E5%88%99/)

#### Q: 小程序 Web 化sitemap提交后多久生效？
A：提交完成一周之后即可生效。

#### Q: Web 化的展示形式是怎样的？
A：请阅读[流量接入说明](https://smartprogram.baidu.com/docs/introduction/intro/)了解。

#### Q: web化后，setClipboardData和onReachBottom失效怎么办？
A：setClipboardData为浏览器兼容性问题，在部分内核上无法支持该API，onReachBottom已修复，开发者需要更新开发者工具编译热更新到3.50.0以上后发包