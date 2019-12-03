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

**授权接口通用错误码**

|错误码|错误码显示信息|说明|
|----|----|----|
|10001|internal error|服务器数据异常|
|10002|network error|网络异常、请求超时，请查看您的网络设置。|
|10003|user deny|用户拒绝授权|
|10004|user not logged in|用户未登录，建议提示用户登录。|
|10005|system deny|系统拒绝授权，可能原因：未申请接口[授权](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)；用户未开启百度 APP 相关权限。|


