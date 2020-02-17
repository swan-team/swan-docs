---
title: sendTemplateMessage
header: develop
nav: serverapi
sidebar: sendTemplateMessage
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/templateMessage/templateMessage
---
 

**解释：**推送模板消息

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/templateMessage.png"  class="demo-qrcode-image" />


**接口调用请求说明：**请提前在开发者平台创建消息模板。用`application/x-www-form-urlencoded`方式提交数据。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/send?access_token=ACCESS_TOKEN

```


**名词解释：**

- swan_id：百度生成的与设备相关的唯一标识，APP卸载重安装不会变，详见 [swanid机制说明](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#swanid%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E/)
- open_id：百度用户登录唯一标识，详见 [开放接口-登录](https://smartprogram.baidu.com/docs/develop/api/open/log_Session-Key/)
- formId：页面内form组件的`report-submit`属性为true时返回formid，详见 [form表单](https://smartprogram.baidu.com/docs/develop/component/formlist_form/)

**公共请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | [access_token](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)，授权小程序的接口调用凭据

**请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
template\_id |string |是| 所需下发的模板消息的id
touser|string|否|接收者swan_id
touser\_openId|string|否|接收者open_id
data|json/string|是|{"keyword1": {"value": "2018-09-06"},"keyword2": {"value": "kfc"}}
page|string|否|点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数，（示例index?foo=bar），该字段不填则模板无跳转。
scene\_id|string|是|场景id，例如表单id和订单id
scene\_type|int|是|	场景type，1：表单；2：百度收银台订单；3:直连订单
ext|json/string|否|{"xzh\_id":111,"category\_id":15}                           |

**touser&touser_openId使用规则说明：**

- 百度登录用户使用touser_openId，游客用户使用touser（参考Q&A：怎么判断当前用户是游客状态还是 登录状态）

### Q&A

1. 消息发送失败可能的原因？

 - scene\_id 状态需要和用户登录状态保持一致，否则 scene_id 校验会失败

 - 发送消息时用到的 touser/touser\_openid 必须和申请 scene\_id 时的 touser/touser\_openid 一一对应， 否则也会导致 scene\_id 检验失败

 - 如果通过上面的查验仍然发送消息失败，请检查 appkey 是否异常

2. 怎么判断当前用户是游客状态还是 登录状态？

 - scene_id最后一位是 1 代表登录状态, 最后一位是 0 代表未 登录游客状态

 - 通过[swan.isLoginSync](https://smartprogram.baidu.com/docs/develop/api/open/log_swan-isLoginSync/) API可以判断当前用户是否为 登录状态

3. 如何获取swan\_id & open\_id？

 - 获取swan\_id：详见 [swan.getSwanId](https://smartprogram.baidu.com/docs/develop/api/open/userinfo_swan-getSwanId/)

 - 获取open\_id：详见 [ 登录](https://smartprogram.baidu.com/docs/develop/api/open/log_Session-Key/) 文档中获取登录用户OpenId相关内容


### 模板消息开发流程图：

![<picture>](../../../img/api/information/user3.png)

### 错误码

| 错误码  | 说明               |
|-------|------------------|
| 2002 | 参数错误             |
| 4001 | template\_id 不正确 |
| 4002 | 消息推送接口调用失败       |
| 4003 | 表单无效             |
| 4004 | 场景id无效           |
| 6001 | 无 push 权限        |

### 请求示例

**实际请求使用form 不是json**

```json
    {
    	"touser_openId": "",
    	"access_token":"24.173e34227090dbe664c4991ef5c24779.2592000.1573901211.282335-16099124", 
    	"page": "pages/home/home",
    	"touser":"SL9aK4AETi6bpnzaBVSMgfcTPfkUuNKuvKbyLZmNLKfxanvypng1UCzjgn5VG82QbFeiRdhdsa1q1JnV279RWu8pA", 
    	"scene_type": 1, 
    	"scene_id": "11.d9ea3ac49f00320f4269b8fb72b53194.290079.1571309167.0",
    	"data": {
    		"keyword1": {
    			"value": "16601213222"
    		},
    		"keyword2": {
    			"value": "2019年10月23日 12:30"
    		},
    		"keyword3": {
    			"value": "百度科技园"
    		} ,
    		"keyword4": {
    			"value": "北京市海淀区西北旺东路10号院"
    		}, 
    	"template_id": "ad92f10716024214be69b0db539a30b6"
    }
```
 
### 返回示例

```json
    {
	    "errno":0,
	    "msg":"success",
	    "data":{
	    	"msg_key":4330862
	    }
    }
```
