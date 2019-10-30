---
title: 需授权接口列表
header: develop
nav: api
sidebar: authorize_list
---

 

|接口|	描述|
|---|---|
|[swan.getUserInfo](http://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getUserInfo/)|	用户信息|
|[swan.getLocation](http://smartprogram.baidu.com/docs/develop/api/location/swan-getLocation/), [swan.chooseLocation](http://smartprogram.baidu.com/docs/develop/api/location/swan-chooseLocation/)|地理位置|
|[swan.saveImageToPhotosAlbum](http://smartprogram.baidu.com/docs/develop/api/media_image/#swan-saveImageToPhotosAlbum/)|保存到相册|
|	[swan.chooseAddress](http://smartprogram.baidu.com/docs/develop/api/open/chooseaddress_swan-chooseAddress/)|	收货地址|
|[swan.chooseInvoiceTitle](http://smartprogram.baidu.com/docs/develop/api/open/swan-chooseInvoiceTitle/)	|发票抬头|
|	[swan.getRecorderManager](http://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getRecorderManager/)|	录音功能|
|	[camera](/develop/component/media_camera/)|	摄像头|


**此类接口调用时需注意**：
* 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
* 如果用户之前已经同意授权，则不会出现弹窗，可直接调用接口；
* 如果用户之前已经拒绝，则再次调用也不会弹窗，会执行 fail 回调。请开发者兼容用户拒绝授权的场景。

