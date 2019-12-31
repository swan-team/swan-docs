---
title: 小程序白皮书
header: operations
nav: book
sidebar: whitebook
---

此文档旨在帮助开发者规范小程序开发，给小程序用户提供良好的使用体验，建议开发者遵守以下规范，否则可能影响小程序流量分发。

## 1. 名称、logo、简介规范

小程序的名称、logo、服务类目和简介是用户看到小程序的第一印象，建议开发者的选择与核心功能相关。

1）名称规范：通顺可理解，不建议拆字，不能使用无意义的符号数字字母，能反映小程序功能定位

2）logo规范：图片清晰，突出主题，不得含有网站、水印、二维码、联系方式等营销信息。

3）简介及服务类目：与核心功能相符，实时更新，不得含有官网等其他线上相关联系方式。

具体请参考文档：[注册名称规范](http://smartprogram.baidu.com/docs/operations/specification/#1-注册名称规范/)、 [基本信息规范](http://smartprogram.baidu.com/docs/operations/specification/#3-基本信息规范/)

![图片 1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%871.jpg)

## 2. 功能流畅性规范

### 2.1 功能实现规范

#### 2.1.1 所有功能可正确实现

1）小程序页面顶部、中间、底部等所有的分类导航按钮，点击后均应该跳转对应的二级页面，若不能跳转，或跳转后为同一页面，请不要设置该按钮。

![图片 2.1.1.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.1.jpg)

2）所有功能按钮点击后应该可以实现该功能，比如有客服，可在线对话；有电话按钮，可拨打；有相册按钮，可上传照片。

![图片 2.1.1.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.2.jpg)

3）跳出弹窗时用户可选择接受或拒绝，不允许出现弹窗无法关闭的情况。

![图片 2.1.1.3](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.3.jpeg)

4）页面出现的图片轮播，建议点击后可以跳转对应的详情页或支持「大图查看」等交互。

![图片 2.1.1.4](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.4.jpg)

5）页面内同一区域的分类、导航、目录等内容，在样式、大小、排版布局、交互或其他均应保持一致。

![图片 2.1.1.5](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.5.jpg)

6）各个功能的排版、样式、位置要合理，确保用户在任何场景下都可以迅速找到该功能。

![图片 2.1.1.6](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.1.6.jpg)

#### 2.1.2 能返回上一级界面

首页之外的所有页面均必须可返回上级页面。百度提供的返回功能位于页面左上方，为给用户提供协调统一的使用体验，返回功能请位于页面左上方，不要位于其他位置。

![图片 2.1.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.1.2.jpg)

#### 2.1.3 不同类型资源交互规范

1）文本类资源：文章详情页如新闻等长文本内容，建议长按可以选择文字并进行复制；

2）图片资源：页面详情页的图片，尤其是商品、风景图片等，建议点击后可放大、缩小；

3）音/视频资源：可播放、暂停，拖动进度条；

4）地图资源：可查看地图。

### 2.2 必要提醒规范

#### 2.2.1 重要操作提醒

1）当用户在进行某些不可逆操作时，如删除订单、文章，取消支付等情况时应该有必要提醒；

2）当用户在支付失败、登录失败、注册失败、网络连接失败等场景下，应该有必要提醒。

![图片 2.2.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.2.1.jpg)

#### 2.2.2 提醒措辞规范

小程序中的提醒措辞请尽量使用中文表达，避免专用术语，避免中英文符号混杂，慎用感叹号，具体请参考文档：[措辞规范](https://smartprogram.baidu.com/docs/design/foundation/writing/)

### 2.3 不妨碍用户规范

#### 2.3.1 不可频繁跳出弹窗

不允许频繁多次跳出不必要的获取定位、手机号等获取用户权限或其他广告弹窗，以下情况请不要出现：

1）用户刚进入小程序就跳出弹窗，若用户未同意，就无法使用小程序；

2）用户拒绝该弹窗后，可以继续使用小程序，但是在用户接下来的使用中仍频繁跳出，强迫用户同意。

#### 2.3.2 不可诱导用户

未经百度公司同意或授权的情况下，智能小程序提供的服务中，不得存在诱导类行为，包括但不限于诱导分享、诱导关注、诱导抽奖、诱导下载或打开APP等。

具体请参考文档：[诱导关注/分享行为、诱导下载行为](https://smartprogram.baidu.com/docs/operations/specification/#5-行为规范/)

![图片 2.3.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.3.2.jpg)

#### 2.3.3 广告规范

小程序中插入广告，要遵守以下规范：

1）落地页主要内容为文字或图片（如图文/问答）时：正文从开始到结束，中间不能插入广告，页面顶端不建议插入广告，以免引起用户反感，降低用户阅读体验；

2）内容页中不能出现悬浮广告；

3）首屏广告大小不能超过屏幕的1/3或正文区域大小（正文区域指：文字内容/视频播放器/音频播放器等）；

4）一屏最多包含两个非连续广告，列表页连续广告至少间隔三条非广告内容：如第一位和第四位及以上插入广告。

![图片 2.3.3](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.3.3.jpg)

### 2.4 性能规范

#### 2.4.1 加载时长规范

用户在打开、使用小程序时每次操作的加载总时长均值不得超过1.5秒。

#### 2.4.2 不可闪屏、白屏、黑屏

用户使用过程中，任何页面请不要出现全屏或局部闪屏、白屏、黑屏等影响用户体验的情况。

![图片 2.4.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.4.2.jpeg)

#### 2.4.3 不能打不开，不能闪退

不允许出现小程序打不开或闪退的情况。

#### 2.4.4 适配规范

1）小程序在IOS端和Android端均可以正常使用；

2）小程序应适配IOS全面屏手机，IOS全面屏手机底部横线不能遮挡小程序底部功能。

![图片 2.4.4](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%872.4.4.jpg)

## 3. 功能完备性规范

### 3.1 内容资讯类功能完备性规范

内容资讯类小程序应具有搜索、评论、点赞、收藏和分享功能，除此之外，用户发表过的评论，点赞或收藏的文章，需要在个人中心进行查看，因此应该有个人中心页面。

![图片 3.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/new3.1.jpg)

### 3.2 购物类功能完备性规范

购物类小程序应具有商品搜索、在线支付、在线客服、购物车、订单、地址、物流和退货功能。除此之外，订单、地址、物流、退货通常都在个人中心呈现，因此应该有个人中心页面。

![图片 3.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%873.2.jpg)

### 3.3 企业宣传类功能完备性规范

企业宣传类小程序应具备电话联系和地址导航两个基本功能：

1）电话联系方式，且点击后可拨打；

2）公司详细地址，且支持地图导航，建议开发者直接调用百度提供的地图组件进行地址导航。

![图片3.3.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%873.3.1.jpg)

### 3.4 生活服务类功能完备性规范

服务类小程序均应具备在线客服功能，以方便用户在线和服务人员联系。除在线客服外，服务类小程序应具备其他必备的核心功能，如求职服务类、租房买房类小程序应具有搜索、收藏、个人中心等功能。其他类型的小程序应具备满足用户需要的基本功能。

## 4. 页面浏览质量体验规范

### 4.1 页面顶部标题规范

小程序页面标题应位于页面顶部，居中分布，每个页面顶部均应有对应的标题导航：

1）首页顶部标题最好不要用「首页」俩字，建议首页标题为小程序名字；

2）其他非首页页面标题应与该页面相关，建议与对应的底部导航标题保持一致；

3）内容详情页标题应尽量简洁，建议标题为短语，不用标点符号，尽可能展示完整。

![图片 4.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.1.jpg)

### 4.2 内容质量规范

#### 4.2.1 内容重复性规范

小程序页面不允许出现以下重复情况：同一页面大量图片重复；标题重复；内容详情重复。

![图片4.3.1](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.3.1.jpg)


#### 4.2.2 内容一致性规范

小程序内容应图文相符，标题和文章详情相符。

![图片4.3.2](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.3.2.jpg)


#### 4.2.3 内容完整性规范

小程序页面内容应尽可能完整，如商品详情页应有价格、参数、产品详情、用户评论；文章详情页应有标题、时间、作者、内容；视频应有画面，可正常播放等。

![图片4.3.3](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.3.3.jpg)

#### 4.2.4 内容可读性规范

小程序页面不允许出现错别字、乱码或病句等不可理解的内容。

![图片4.3.4](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.3.4.jpg)

#### 4.2.5 内容时效性规范

请保证内容实时更新，尤其是内容资讯类小程序，若长时间未更新内容，可能会影响小程序流量分发。

#### 4.2.6 不同资源质量清晰规范

1）图片：要清晰，请选择像素较高的图片；

2）音/视频：声音和画面均要清晰可辨。

![图片4.3.6](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%874.3.6.jpg)

## 5. 内容数量规范

小程序内容数量应足够满足用户基本需求，如“作文大全”小程序中作文总数量不能只有几篇，数量过少；购物类小程序不能只有几件商品，商品总数量过少。

![图片 5](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%9B%BE%E7%89%875.jpg)

## 相关链接

小程序基本上线流程请参考文档：[百度智能小程序介绍](https://smartprogram.baidu.com/docs/introduction/enter_application/)

小程序设计基本规范请参考文档：[智能小程序体验指南](https://smartprogram.baidu.com/docs/design/overview/introduction/)

小程序开发规范请参考文档：[小程序开发文档](https://smartprogram.baidu.com/docs/develop/fuctionlist/list/)

小程序运营基本规范请参考文档：[平台运营规范](https://smartprogram.baidu.com/docs/operations/specification/)

小程序入feed落地页规范请参考文档：[信息流审核规范](https://smartprogram.baidu.com/docs/introduction/auditinginfo_settled/)

百家号流量接入规范请参考文档：[百家号素材审核规范](https://smartprogram.baidu.com/docs/introduction/baijiahao_audit/)

贴吧流量接入规范请参考文档：[贴吧素材审核规范](https://smartprogram.baidu.com/docs/introduction/auditing_tieba/)


