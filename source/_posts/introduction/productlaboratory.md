---
title: 论坛小程序开通指引
header: introduction
nav: book
sidebar: productlaboratory
---


 
## 开通条件 

#### 注册
注册以及创建小程序请参考 [『智能小程序注册指导文档』](https://smartprogram.baidu.com/docs/introduction/enter_application/)。

#### Discuz!论坛版本和编码要求

目前支持x3.3、x3.4；编码支持utf8和gbk。

#### https证书要求

由于小程序请求数据限制，目前只支持安装了https证书域名的论坛开通。

#### 服务器配置要求

放置Discuz!论坛的服务器只支持Linux。

 

## 登录小程序平台

登录小程序平台，点击“产品实验室”模块。
> 产品实验室模块目前只有白名单内的内测合作伙伴在小程序后台可见。请提供登录小程序后台的用户名给商务人员，用于开通白名单。
  
![图片](../../img/introduction/discuz/1.jpg)
 
 
## 开通使用Discuz!论坛

点击“立即使用”按钮，进入 Discuz!论坛小程序介绍页，阅读用户协议后并勾选，点击“立即开通”，并根据页面提示操作。

![图片](../../img/introduction/discuz/2.jpg)
	
1.  Discuz! 数据对接流程

1.1.  输入Discuz!论坛的完整域名，以及小程序的App Secret。填完后下载“配置文件”，解压下载后的zip文件后打开README文件，根据README文件内容进行操作。

> App Secret请前往 『设置』-『开发管理』复制粘贴。

请务必按照README文件部署“bd_mapp_domaincer.txt”、“baidusm_smartprogram”文件夹到服务器。
	


1.2. 粘贴完“baidusm_smartprogram”到服务器并且将文件夹读写权限设置为 777 后，请用管理员账号登录discuz论坛，打开管理中心，在『应用』-『插件』中找到“百度小程序”。

依次进行插件的安装、启用，根据“百度小程序”插件页面提示填写Discuz!论坛完整域名和小程序的App Secret。

注意：每次在小程序后台重置App Secret后，都需要到此重新粘贴最新App Secret。

![图片](../../img/introduction/discuz/4.jpg)

1.3. 在“百度小程序”中填写完数据后返回Discuz!论坛开通页，填写论坛域名和App Secret（注意：两端填写的域名和App Secret需完全一致），点击<确认提交>按钮，若数据对接成功，即可进入Discuz!小程序管理页面。若数据对接失败，请按报错提示进行错误排查。

![图片](../../img/introduction/discuz/5.jpg)

2. 提交小程序审核
进入Discuz!小程序管理页面后，将自动提包审核，同时可用百度App扫描二维码预览小程序。

> 注意：只要<小手机>上有数据展示，就表示对接成功。若无数据展示，请将问题反馈到开发者社区或者联系工作人员排查问题。

![图片](../../img/introduction/discuz/6.jpg)

> 审核通过后，在页面点击“发布上线”，即可将小程序发布到线上。届时，在百度App搜索论坛名称即可找到对接的小程序。（搜索结果在24小时内生效）
若审核失败，在页面上可点击“重新提交”，或咨询客服。


