---
title: 风控检测说明
header: develop
nav: serverapi
sidebar: open_risk_power
---

## detectrisk 
**解释**：检测用户是否是作弊用户。
**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/detectrisk?access_token=ACCESS_TOKEN
```

#### 参数说明

**query参数**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	[接口调用凭证](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)|

**post参数**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|appkey|	string|	是|	小程序appkey|
|xtoken|	json string|	是|	小程序通过[`swan-getSystemRiskInfo`](/develop/api/open_riskInfo/#swan-getSystemRiskInfo)获取的内容,格式：`{"key":"xxxx","value":"xxxx"}`|
|type |string	|是|	运营活动的类型，该值由风控平台分配。目前只有一种marketing|
|clientip|string|是|客户端的IP，非小程序服务本地IP|
|ts|int|是|服务器的时间戳，秒级
|ev|string|否|事件类型，预先分配事件ID定义。<br/>1、点击活动按钮（或者活动操作），活动相关操作默认选择此事件<br/>2、 进入活动页面<br/>3、注册<br/>4、登录<br/>5、分享<br/>6、点赞<br/>7、评论<br/>8、 提现<br/>9、下单/提单<br/>10、支付<br/>11、业务自定义动作<br/>12、浏览feed<br/>13、开宝箱<br/>14、领取红包<br/>15、分享feed<br/>16、做任务<br/>17、签到<br/>18、排行榜<br/>19、邀请<br/>20、新客红包<br/>21、摇一摇<br/>22、语音红包<br/>23、视频红包<br/>24、金融授信<br/>25、答题<br/> |
|useragent|string|否|客户端请求小程序Server的useragent|
|phone|string|否|加密后的电话号码，加密方法：sha1|

**返回值说明**:

|名称|类型|描述|
|---|---|---|
|errno|	int|错误码 0：正确返回，1：异常返回|
|errmsg| string |错误信息|
|request_id|	string|请求ID，标识一次请求|
|data|	object| 详细数据，errno为0的情况下才有意义|

**data字段描述**:

|名称|类型|描述|
|---|---|---|
|level|	string|风险级别，目前有四个，风险等级依次降低（其中1最高，4最低)<br/>1 - 高危 <br/> 2 - 嫌疑 <br/>3 - 普通 <br/>4 - 正常。<br/>建议开发者将风险等级为1、2的做拦截处理|
|tag| array |对应的描述|


**返回值示例**:
```json
{
    "data": {
        "level": "3",
        "tag": [
            "空"
        ]
    },
    "errmsg": "succ",
    "errno": 0,
    "request_id": "3922098303",
    "timestamp": 1561110003
}
```