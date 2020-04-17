---
title: 模板消息介绍
header: develop
nav: serverapi
sidebar: open_infomation
---

## 为什么要使用模板消息？

**开发者可通过模板消息高效触达用户**。

1.通知用户当前行为的结果及状态、订阅的推送内容等信息，例如：交易状态、物流状态、订阅提醒等。
2.百度APP为模板消息提供多种途径入口，可在模板消息中配置跳转小程序指定页面地址，当用户查看并点击消息体时返回小程序，进入开发者配置的小程序指定页面。详见[模板消息使用说明](https://smartprogram.baidu.com/docs/develop/serverapi/useintroduction/)。
3.定制化满足每一个用户的需求，给予用户最佳的服务体验。
例如：某电商小程序如何设置好的模版消息流程？
•	用户浏览——推荐相关最新、最火产品；
•	已加购物车——提示购物车优惠时间、最新活动；
•	支付完成——支付信息、发货信息、签收提醒；
•	收货完成——客户评价；
•	特殊优惠活动——模版消息提醒；
•	其他更多定制化


### 什么是模板消息？
用户在小程序内产生交互行为后，开发者可以通过用户交互行为产生的凭证配置模板消息，发送给用户。目前仅支持文本消息。
现已开放的模板消息有三类：支付类、表单类、订阅类，三种类型的下发条件有所差异，详见[模板消息下发条件](https://smartprogram.baidu.com/docs/develop/serverapi/sendintroduction/)。

#### 支付类适用场景
```
与小程序内用户支付流程相关的交互场景，如付款结果通知、订单发货通知 等。
```
#### 表单类适用场景
```
用户在小程序内提交表单信息的交互场景，如 预约成功通知、业务受理通知、专家回复通知 等。
```
#### 订阅类适用场景
```
用户主动发起订阅某个信息的交互场景，如 商品降价提醒、动漫开播通知、演唱会开售提醒 等。
```

### 模板消息入口


- 首页入口

“百度APP首页-我的-通知”

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/api/information/1.jpg">
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src=" ">
	</div>
</div>


- 搜索结果页入口

“百度App-搜索结果页-菜单-通知”

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/api/information/2.jpg">
		<!-- <p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容左右边距应至少34px(17pt)。</p> -->
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src=" ">
		<!-- <p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">边距过宽，页面元素过于集中。</p> -->
	</div>
</div>

- 小程序内消息聚合入口（用户需升级至百度APP v11.16版本以上）

“小程序各级内置页面-菜单-消息”

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/api/information/3.jpg">
		<!-- <p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容左右边距应至少34px(17pt)。</p> -->
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src=" ">
		<!-- <p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">边距过宽，页面元素过于集中。</p> -->
	</div>
</div>

- 消息体示意图

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="../../../img/api/information/4.jpg">
		<!-- <p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容左右边距应至少34px(17pt)。</p> -->
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="">
		<!-- <p class="m-doc-custom-examples-title">错误</p><p class="m-doc-custom-examples-text">边距过宽，页面元素过于集中。</p> -->
	</div>
</div>
- 订阅类消息的用户授权面板

<div class="m-doc-custom-examples">
	<div class="m-doc-custom-examples-correct">
		<img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/%E7%94%BB%E6%9D%BF.png">
		<!-- <p class="m-doc-custom-examples-title">正确</p><p class="m-doc-custom-examples-text">内容左右边距应至少34px(17pt)。</p> -->
	</div>
	<div class="m-doc-custom-examples-error ">
		<img src="">
	</div>
</div>
 


