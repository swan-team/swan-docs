---
title: 流量主开通指导文档
layout: gamedoc
categoryName: introduction
sidebar: guide
topic: flow_open
priority: 04-01
---

#### 1 新建小程序流程

![](/img/game/introduction/flow_open/flow_open001.png)

#### 2 登录小程序平台

![](/img/game/introduction/flow_open/flow_open002.png)

#### 3 开通白名单

开发者或对接 BD 邮件申请（前提：已完成基础开发或已提包，方便评估包体质量）

**短期方案**
目前广告组件为白名单邮件申请，审批通过后将开通白名单并提供开发文档
发送：wangzhiyan@baidu.com
抄送：vgame-bd@baidu.com
邮件标题：小游戏广告组件白名单开通申请+小游戏名称+APPID
邮件内容：
1、公司主体全称
2、小游戏测试地址，可以体验游戏链接或者二维码
注：小游戏广告组件白名单开通时间每周四，逾期未开通联系相关 BD 推动进展。


#### 4 注册联盟平台帐号

####  4.1 Mssp 平台注册
无 Mssp 平台账号的开发者请先注册账号（小程序平台首页 > 流量主 > 开通）
![](/img/game/introduction/flow_open/flow_open05.png)
![](/img/game/introduction/flow_open/flow_open005.png)

注册流程请参考：<http://yingxiao.baidu.com/new/home/help/details/id/14689?ly=helpcd>

#### 4.2 Mssp 平台登陆

已有 Mssp 平台账号的开发者请直接登录（选择开发者 tab ）
![](/img/game/introduction/flow_open/flow_open006.png)

####  5 新建应用

#### 5.1 新建小程序应用

首页 > 应用管理 > 新建应用
**新注册用户请务必在财务审核通过后再新建应用**
![](/img/game/introduction/flow_open/flow_open007.png)

####  5.1.1 首次新建小程序应用

首次新建小程序应用的开发者需与小程序平台的进行账号绑定。

**绑定路径：在“新建应用 > 填写基本信息”页面填写开发者账号（小程序平台的超级管理员账号）和 6 位验证码进行绑定**

![](/img/game/introduction/flow_open/flow_open008.png)

####  5.1.2 非首次新建小程序应用

无验证码绑定环节
![](/img/game/introduction/flow_open/flow_open009.png)

####  5.2 编辑小程序应用

新建成功后，可在应用列表页找到该小程序应用。支持修改应用信息、删除应用等操作

#### 5.2.1 修改操作
![](/img/game/introduction/flow_open/flow_open010.png)
![](/img/game/introduction/flow_open/flow_open011.png)
![](/img/game/introduction/flow_open/flow_open012.png)

#### 5.2.2 删除操作

![](/img/game/introduction/flow_open/flow_open13.png)
![](/img/game/introduction/flow_open/flow_open013.png)

####  6 新建代码位

应用管理 > 代码位管理 > 新建代码位
![](/img/game/introduction/flow_open/flow_open014.png)

####  6.1 新建代码位

代码位类型目前“小程序只开放横幅广告，小游戏只开放激励视频”；

样式、物料类型、代码位比例在用户选择代码位类型后系统默认设置，不可修改。
![](/img/game/introduction/flow_open/flow_open015.png)
![](/img/game/introduction/flow_open/flow_open016.png)
![](/img/game/introduction/flow_open/flow_open017.png)

#### 6.2 编辑代码位

新建成功后，可在代码位列表页找到该代码位。支持修改代码位信息、删除代码位等操作

#### 6.2.1 修改操作

![](/img/game/introduction/flow_open/flow_open018.png)
![](/img/game/introduction/flow_open/flow_open019.png)
![](/img/game/introduction/flow_open/flow_open020.png)

#### 6.2.2 删除操作

![](/img/game/introduction/flow_open/flow_open18.png)
![](/img/game/introduction/flow_open/flow_open021.png)

#### 6.3 获取代码

#### 6.3.1 banner广告
小程序和 H5 小游戏代码获取路径：代码位新建完成后，开发者可在代码位列表中找到该代码位，点击“获取代码”按钮。

![](/img/game/introduction/flow_open/flow_open22.png)
![](/img/game/introduction/flow_open/flow_open022.png)

基于游戏框架的小游戏不可采用上述方法，接入步骤请参加如下截图的[文档](/game/tutorials/ad/banner/)。

![](/img/game/introduction/flow_open/newadd09.png)

#### 6.3.2 小游戏代码

小游戏代码适用于基于游戏框架的小游戏。

接入路径：等待开发文档

![](/img/game/introduction/flow_open/adUnitId_appSid.png)

在开发文档里接入广告组件的部分中，开发者在新建 banner 广告组件或者激励视频广告组件时需要传入的 adUnitId 即为图中红框部分的代码位 ID，appSid 即为图中红框部分的所属应用 ID。

####  7 数据报告

广告上线后，开发者可在后台-报告 tab 中查看您的小程序收入报告。支持分应用、分代码位、以及多种自定义查询。

![](/img/game/introduction/flow_open/flow_open023.png)
![](/img/game/introduction/flow_open/flow_open024.png)
![](/img/game/introduction/flow_open/flow_open025.png)
