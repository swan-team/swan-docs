---
title: 使用说明
header: develop
nav: serverapi
sidebar: useintroduction
---
 

### 步骤一： 选用模板，获取模板ID
打开开发者平台选择“消息模板”，在“模板库”列表页可选择对应的模板消息，也可以通过搜索关键词来查找想要的消息模板。如果没有合适的模板消息关键词，可以申请新增关键词，审核通过后即可使用。
添加模板完成后，可以在我的模板里看到对应模板的模板ID。
![图片](../../../img/api/information/6.png)
![图片](../../../img/api/information/7.png)

### 步骤二：通过<a href="/develop/component/formlist_form/">form</a>组件获取 formId 或者通过支付获取 <a href="http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/standard_interface/push_notice.md">orderId</a> 或者 payId。


#### formid
页面的`<form/>`组件，属性 report-submit 为 true 时，可以声明为需发模板消息:
    1、 属性 report-type 为 default 时（默认），声明为发送表单类模板消息。此时用户点击按钮提交表单可以获取 formId，用于发送表单类模板消息
    2、 属性 report-type 为 subscribe 时，声明为发送订阅类模板消息。此时用户点击按钮，首先弹出请求授权面板，授权成功后可以获取 formId，用于发送订阅类模板消息

#### orderId
当用户通过百度收银台支付后，开发者可以在收银台接口通知支付状态通知参数中获取到orderId 用于发送支付类模板消息。

#### payId
当用户通过直连（微信、支付宝）支付等完成支付行为时，可以获取payId用于发送支付类模板消息。

### 步骤三：调用接口下发模板消息

* 获取小程序模板库标题列表:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#getTemplateLibraryList/">getTemplateLibraryList</a>
* 获取模板库某个模板标题下的关键词库:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#getTemplateLibraryById/">getTemplateLibraryById</a>
* 组合模板并添加至帐号下的个人模板库:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#addTemplate/">addTemplate</a>
* 获取帐号下已存在的模板列表:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#getTemplateList/">getTemplateList</a>
* 删除帐号下的某个模板:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#deleteTemplate/">deleteTemplate</a>
* 推送模板消息:<a href="https://smartprogram.baidu.com/docs/develop/serverapi/open_infomation/#sendTemplateMessage/">sendTemplateMessage</a>
