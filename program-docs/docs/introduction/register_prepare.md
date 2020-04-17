---
title: 开发前准备
header: introduction
nav: book
sidebar: register_prepare
---


## 成员管理

登录智能小程序平台，进入平台首页- 成员管理，添加智能小程序项目成员并配置成员权限，适用于需要区分管理者、技术、运营等多个成员角色的组织，目前一个智能小程序只能添加一名管理员。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction1.jpg)

## 获取 AppID

进入“开发管理-设置”，需要获取 AppID（智能小程序 ID）、App Key、App Secret（智能小程序密钥）与开发者工具进行绑定后正式进入开发环节。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction2.png)

## 配置服务器 
在开发设置页面查看 AppID 和 AppSecret，配置服务器域名。

![图片](../../img/introduction/register/33.png)


## FAQ

#### Q: Ticket  解密算法demo红框处的两个值指的是？ 

A:第一个是第三方平台ID，第二个是消息加解密key

 

#### Q: 配置业务域名的前提是什么? 

A:目前小程序只支持https的协议，请检查是否有校验文件，并且文件的appid是否与小程序一致。并且经过ICP备案

 

#### Q: 小程序自定义二维码配置好路径后，为什么app扫码提示未找到相应页面？ 

A:自定义二维码配置完成之后，需要开发者重新提包上线后，才能访问

 

#### Q: 开发者工具request请求异常，但是真机和预览正常，怎么解决？ 

A:目前开发者工具的request请求的header头默认参数缺少，如果开发者后台对header有验证，需要自己手动添加

 

#### Q: 域名限制是20个 如果有超出的话是否可以加入白名单不受域名个数的限制呢？ 

A:可以加泛域名，*.[baidu.com](http://baidu.com/)这种
