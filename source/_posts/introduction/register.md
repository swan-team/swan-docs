---
title: 智能小程序注册指导文档
header: introduction
nav: book
sidebar: register
---

## 智能小程序注册
<div></div>
### 注册登录百度账号

注册地址：<a href="https://passport.baidu.com/v2/?reg&tt=1521786256298&overseas=undefined&gid=D8D45DC-FFC4-486A-BA34-B3215E98FF74&tpl=mn&u=https%3A%2F%2Fwww.baidu.com%2F" >点击注册</a>

登录地址：<a href="https://smartprogram.baidu.com/mappconsole/main/login">点击登录</a>
 - 使用百度App扫码登录
 - 手机短信验证登录
 - 百度账号密码登录

![图片](../../img/introduction/register/register-01.png)

### 选择主体类型
<!-- 主体类型：个人、媒体、企业、政府、其他组织五种主体类型。
 主体类型说明：
 - 个人：由自然人注册和运营的公众帐号；
 - 媒体：报纸、杂志、电视、电台、通讯社、其他等；
 - 企业：企业、个体工商户、企业相关品牌；
 - 政府：国内、各级、各类政府机构、事业单位、具有行政职能的社会组织等；
 - 其他组织：公共场馆、公益机构、学校、社团、民间组织等机构团体申请； -->
 主体类型：媒体、企业、政府、其他组织五种主体类型。
 主体类型说明：
 - 媒体：报纸、杂志、电视、电台、通讯社、其他等；
 - 企业：企业、个体工商户、企业相关品牌；
 - 政府：国内、各级、各类政府机构、事业单位、具有行政职能的社会组织等；
 - 其他组织：公共场馆、公益机构、学校、社团、民间组织等机构团体申请；

![图片](../../img/introduction/register/register-02.png)

### 主体信息登记

不同类型的开发者所需的登记信息；包括主体信息、超级管理员信息两部分。

|类型|定义|所需资料|
|---|---|---|
|企业 | 企业、个体工商、企业相关品牌 |1. 企业名称 <br> 2. 营业执照注册号／统一社会信用代码<br>3. 营业执照原件照片<br>4. 企业类型（企业、个人工商户）|
|政府 | 国内、各级、各类政府机构、事业单位、具有行政职能的社会组织等 | 1. 政府名称<br>2. 确认公函<br>3. 组织机构代码证原件照片 |
|媒体 | 报纸、杂志、电视、电台、通讯社、其他等 | 1. 机构名称<br>2. 组织机构代码<br> 3. 组织机构代码证原件照片 |
|其它组织 | 公共场馆、公益机构、学校、社团、民间组织等机构团体申请 | 1. 组织名称<br>2. 组织机构代码<br>3. 组织机构代码证原件照片 |

<!-- |个人 | 由自然人注册和运营的账号 | 超级管理员信息 | -->

注：每个帐号有5次提交审核机会，5次审核仍然没通过的，将不能再提交。

### 超级管理员信息登记


登记管理员身份证姓名、身份证号码并验证手机号。（超级管理员不支持更换）
![图片](../../img/introduction/register/register-03.png)

### 确认主体信息

![图片](../../img/introduction/register/register-04.png)

### 提交并等待审核通知


![图片](../../img/introduction/register/register-05.png)

### 审核通过

信息审核通过后，进入首页会有高级认证的链接，点击后跳转到高级认证页面，认证通过即可创建智能小程序并正常使用平台各项功能。
![图片](../../img/introduction/register/register-06.png)
![图片](../../img/introduction/register/register-07.png)
## 智能小程序信息完善
<div></div>
### 完善智能小程序基本信息


注册审核通过后，点击“创建智能小程序”完善智能小程序基本信息（填写智能小程序名称、简介，上传头像并选择服务范围）。
![图片](../../img/introduction/register/register-08.png)


## 开发前准备
<div></div>
### 智能小程序项目成员管理


登录智能小程序平台，进入平台首页- 成员管理，添加智能小程序项目成员并配置成员权限，一个智能小程序只能添加一名管理员。
![图片](../../img/introduction/register/register-09.png)

管理员可绑定的项目成员数量：

<!-- |个人 | 未认证、未发布 |已认证、未发布 |已认证、已发布|
|---|---|---|---|
|15 | 30| 60 | 90| -->
| 未认证、未发布 |已认证、未发布 |已认证、已发布|
|---|---|---|
| 30| 60 | 90|

### 获取AppID

进入“平台首页-设置”，获取AppID（智能小程序ID）、App Key、App Secret（智能小程序密钥）。
![图片](../../img/introduction/register/register-10.png)
### 开发工具

下载开发者工具（[Windows 64版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online)  |   [Mac版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)）进行代码的开发和上传。
![图片](../../img/introduction/register/register-11.png)

### 配置服务器


在开发设置页面查看AppID和AppSecret，配置服务器域名。
![图片](../../img/introduction/register/register-10.png)
### 版本发布

需先提交代码，然后提交审核，审核通过后可发布。
![图片](../../img/introduction/register/register-12.png)
