---
title: 获取用户授权设置
header: develop
nav: api
sidebar: authorize_set
---

 
 

> 在真正需要使用授权接口时，才向用户发起授权申请，并需要在授权申请中说明清楚要使用该功能的理由。

1. 开发者可以使用 [swan.getSetting](https://smartprogram.baidu.com/docs/develop/api/open/setting_swan-openSetting/) 获取用户的当前设置。
 
2. 打开设置界面

  * **用户打开设置界面方法**：
  可以在小程序设置界面（“右上角 -> 关于 -> 右上角 -> 权限管理”）中控制对该小程序的授权状态。

  * **开发者打开设置界面方法**：
  可以调用 [swan.openSetting](https://smartprogram.baidu.com/docs/develop/api/open/setting_swan-openSetting/) 调起客户端智能小程序设置界面，返回用户设置的操作结果。

3. 开发者可以使用 [swan.authorize](http://smartprogram.baidu.com/docs/develop/api/open/authorize_swan-authorize/) 提前向用户发起授权请求。

**授权有效期**
一旦用户明确同意或拒绝过授权，其授权关系会记录在后台，直到用户主动删除小程序。
 

