---
title: swanid机制说明
header: develop
nav: api
sidebar: userinfo_swanid 
---


 

由于宿主应用并不一定强制用户登录，因此用户也有可能处于未登录状态。此时开发者可能不希望通过调用`swan.login()`强制用户登录，而是希望直接使用用户的设备标识来关联用户，存储一些非敏感的数据。因此智能小程序还提供一个 SwanID 的标识，可视作用户的设备标识。
* 用户在同一台设备上使用同一个开发者所开发的不同智能小程序，得到的是相同的 SwanID 。
* 用户在同一台设备上使用不同开发者所开发的不同智能小程序，得到的 SwanID 是不同的。
开发者通过对比接口中返回的`swanid_signature`和采用<a href="https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#signature-%E8%AE%A1%E7%AE%97%E6%96%B9%E6%B3%95/">signature 计算方法</a> 的计算值是否一致来判断 swanid 是否有效。



