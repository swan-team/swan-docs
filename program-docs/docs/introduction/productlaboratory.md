---
title: 论坛小程序开通指引
header: introduction
nav: book
sidebar: productlaboratory
---



## 开通条件

**注册：**
注册以及创建小程序请参考 『[智能小程序注册指导文档](https://smartprogram.baidu.com/docs/introduction/enter_application/)』。

**Discuz!论坛版本和编码要求：**
目前支持 x3.4；编码支持 utf-8 和 gbk。

**https证书要求：**
由于小程序请求数据限制，目前只支持安装了 https 证书域名的论坛开通。

**服务器配置要求：**
放置 Discuz! 论坛的服务器只支持 Linux。

**PHP版本要求：**
目前只支持 PHP 5.3 及以上版本。

## 登录智能小程序平台


登录智能小程序平台，点击“产品实验室”模块。

产品实验室 >Discuz! 论坛目前采用申请制，请填写用于开通 Discuz! 论坛服务的域名信息，百度会对您所填写的域名信息进行审核，审核通过后即可使用 Discuz! 论坛的相关服务（目前仅支持以 https 开头的域名）。

>说明：由于目前 Discuz! 论坛仍处于内测阶段，未全面放开，因此，产品实验室>Discuz!论坛入口仅对部分小程序可见，全面放开时间请您持续关注官网动态，感谢您的理解与支持！

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction15.png)

## 开通使用 Discuz! 论坛


点击“立即使用”按钮，进入 Discuz!论坛小程序介绍页，阅读用户协议后并勾选，点击“立即开通”，并根据页面提示操作。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction16.png)

## Discuz! 数据对接流程


1.1 输入Discuz!论坛的完整域名，以及小程序的App Secret。填完后您可通过两种方式安装插件（任意选择一种即可）：

1）点击前往插件中心，可直接安装插件。

2）若插件中心不存在最新插件，可下载“配置文件”，解压下载后的zip文件后打开README文档，根据README文档中的说明进行操作。

**App Secret请前往 『设置』-『开发管理』复制粘贴。**

请务必按照README文档说明部署“bd_mapp_domaincer.txt”、“baidusm_smartprogram”文件夹到服务器。

1.2 粘贴完“baidusm_smartprogram”到服务器并且将文件夹读写权限设置为 777 后，请用管理员账号登录Discuz!论坛，打开管理中心，在『应用』-『插件』中找到“百度小程序”。

依次进行插件的**安装、启用**，根据“百度小程序”插件页面提示填写Discuz!论坛完整域名和小程序的App Secret。

**注意：每次在小程序后台重置App Secret后，都需要到两端重新粘贴最新App Secret。**

![图片](../../img/introduction/discuz/3.jpg)

1.3  在“百度小程序”中填写完数据后返回Discuz!论坛开通页，填写论坛域名和App Secret（**注意：两端填写的域名和App Secret需完全一致**），点击<确认开通>按钮，若数据对接成功，即可进入Discuz!小程序管理页面。若数据对接失败，请按报错提示进行错误排查。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction17.png)

## 提交小程序审核
 

若数据对接成功，将进入Discuz!小程序管理页面，系统会自动提包审核。您可以用百度App扫描二维码预览小程序。

**注意：只要<小手机>上有数据展示，就表示对接成功。若无数据展示，请将问题反馈到开发者社区或者联系官方运营人员排查问题。**

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/introduction18.png)

审核通过后，在页面点击<发布上线>按钮，即可将小程序发布到线上。届时，在百度App搜索论坛名称即可找到对接的小程序。（搜索结果将在24小时内生效）

若审核失败，可点击<重新提交>按钮，或者将问题反馈给小程序官方运营人员。
 
<!-- ## 开通条件 

#### 注册
注册以及创建小程序请参考 [『智能小程序注册指导文档』](https://smartprogram.baidu.com/docs/introduction/enter_application/)。

#### Discuz!论坛版本和编码要求

目前支持x3.3、x3.4；编码支持utf8和gbk。

#### https证书要求

由于小程序请求数据限制，目前只支持安装了https证书域名的论坛开通。

#### 服务器配置要求

放置Discuz!论坛的服务器只支持Linux。

 
 -->
