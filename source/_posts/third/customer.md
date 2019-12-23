---
title: 人脸识别高级认证
header: third
nav: third
sidebar: customer

---

### 小程序主体高级认证需要在小程序上线前完成，目前第三方代客户进行高级认证有

### 两种方式：

1.对公打款(两种方式)

>1.对公打款可以在第三方平台-客户管理页面进行操作，通过点击客户高级认证栏『待认证』跳转到百度信誉的高级认证页面，代客户进行对公打款高级认证。
>2.通过获取对公认证页面链接接口，获得对公认证页面链接，用户可免登录进行填写信息完成认证

2.法人人脸识别

>通过人脸识别调起二维码接口，跳转百度信誉人脸识别页面，进行法人身份高级认证。


## 人脸识别调起二维码

> 调用接口成功后,获得base64编码图片,使用手百扫码后可进入法人人脸识别认证

```
GET https://openapi.baidu.com/rest/2.0/smartapp/auth/faceauthen
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

  

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

| 字段名              | 类型   | 描述                                                 |
| ------------------- | ------ | ---------------------------------------------------- |
| qrcode              | string | 二维码(base64编码图片)                               |
| timeout             | string | 过期时间                                             |
| legal\_face\_status | string | 认证任务状态(1：初始化；2：通过；4：拒绝；6：进行中) |

**请求示例** 

```shell
curl -X GET \
  'http://openapi.baidu.com/rest/2.0/smartapp/auth/faceauthen?access_token=45.f1f396c856279f33cd17580c29ffcc8a.3600.1558582178.ZMHOZl6h9xbNoKOOv3trh0g_-m6tAQo-1W3JTSQkkj5RZ9lgfC' \
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "qrcode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAH+AQMAAABHof5mAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAQOSURBVHic7ZrNreMwDIQJuACX5NZVUgoIwI01HJLJ7mGBMLfRwS+2qS+XefwZxfzLZQIIMANYFsv9sf8ejk/X/Xrf3iG+Tu5Z55N7TgEEGAPgxfNG3cG8fQHuZ6/gF+9wuwC99+5nQAkgwBwgnyEugnF7SxlvF7fFbchbAAHGAQuXV8hWMdajcuwTKTc0LoAAvwJEcNTztqDsW8XXDhFAgJ8APJ8xqVbajELv0HM9g84FEGAQQMEyqf7XJZYAAowB2soec9d4JNq3uScufQkgwBAAUk51YuTh8P32bEPdW/K9BBBgDrCf7UFnG5Jnifpo8q4XMQGFqAUQYAiwr1fzwqndcsWdg07zIh0NqQACTAFWHr7gkIYhMejcC50la3wpWwAB5gF9lIk4OpB9G51yHtcIIMAYwDjjNN/RS7Zv5R3fllPR5QIIMAWoHWg5rdvgqdjPM0OEtP5AAAG+BVDANcqUlAtKKTPvrlC2AAKMAY5mPlr7zcT+ZMbjwmov22GOAALMAaqz/LuyW6OkK86WcydWAQSYASyLhfss5QjJeg497+D7iziQCyDAGOCMpnJnUZ7AmAF1EdpeXC35CiDAFCAEXNrtmTWk/OjWOBaHJAEEGAKs3JYNZD/Mpj8UqdTquBDPBBBgCOC1w47Mot0p514LG+gNL4AAY4A0ddrcHctzIGcbsPc6/SEBBBgFcFtPqiFblHd6lv07ug0kgABfAxarOHvMe5U/fks55u50hWiXR6MpgABzgMqi6CJzArfyhyKuUm6XsgACfA3wJtEcqnMM6un1be5BVyqAAIOA6DbN8mjwYHr1eEsb0jLHdikLIMDXAC+Ph2KlIdkT6AYZhh9QKGUBBBgBLLx9tiretIsJqNR+Rt+JDGynAAJMAbyFlNvDAm4fRZ2Sz2ABBBgEIG/ecUyWYfQgzjkBBd6f+R8ggABTgFRxUWoHzceOd1hDuAggwBTA6fbEtOPOVPqgA7mhCyc1LO+YgE4BBJgDlAOUSbWgOXJnB0rdHy6AAMOAmqdbAUcw5x4qe6PcP/oDAQT4GvB+DBgUyrfmbggdcWZsAwQQYAwQQ41ZCZh782cV+aJ9Ci9IAAHGAKlTdpHoJ42HhEigix1AyBs7BBBgCrDfflTxRjHKNprPqvE5vQsgwASg1kbB96bR497yaZb33WgiTgABpgArpMm9qdjUc+sAWqI9aQMJIMAMAMU6ZRuWt4fv41XoHRR8WnXyLYAAM4AMSVFvy/HyZ95aS6oRF1ABBPgJwFczJHlwHeQjR54dfPxTygIIMAAIa/Ld6Amncq+LHSiMS3cBBJgDsLxDyhYTOF4noFrOyLZR4wUQYApgsSKfPvhLCcvTm6uVd+O4HkIXQIAhwJdLAAFGAH8ACZnb8hxxvS4AAAAASUVORK5CYII=",
        "timeout": "1558150057",
        "legal_face_status": 1
    }
}
```

## 获取对公认证页面链接

> 通过获取对公认证页面链接接口，获得对公认证页面链接，用户可免登录进行填写信息完成认证

```
GET https://openapi.baidu.com/rest/2.0/smartapp/auth/paymentCertification
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 授权小程序Token | --     |

  

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

| 字段名 | 类型   | 描述            |
| ------ | ------ | --------------- |
| url    | string | 认证页面调起url |

**请求示例** 

```shell
curl -X GET \
  'http://{{openapiHTTP}}/rest/2.0/smartapp/auth/paymentCertification?access_token=45.f1f396c856279f33cd17580c29ffcc8a.3600.1558582178.ZMHOZl6h9xbNoKOOv3trh0g_-m6tAQo-1W3JTSQkkj5RZ9lgfC' \
```



**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
          "url": "http://auth.baidu.com/thrones/auth/acctcheck?officialid=OFFICIALID&appkey=APPKEY&token=TOKEN",
    }
}
```

## 高级认证结果推送

>当客户的高级认证状态发生变化后,第三方平台将可以通过开放平台上填写的消息与事件接受URL,获得变更内容。若客户账号下有多个小程序,会收到数量与客户小程序数量相等的推送

认证状态变更时，接收到的推送数据示例如下：

```json
{
    "appId":1452365,
    "tpAppId": 17328232,
    "eventTime": "2019-01-14 12:45:10",
    "event": "ADVANCED_AUDIT_CHANGED",
    "adType":2, 
    "adStatus":1
}
```

**参数说明**

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | long   | 小程序appid                                                  |
| tpAppId   | long   | 第三方平台appid                                              |
| eventTime | string | 事件发生时间                                                 |
| event     | string | ADVANCED\_AUDIT\_CHANGED 高级认证状态变更                    |
| adType    | int    | 认证类型 <br>-1：其他类型验证<br>0：未做高级认证 <br>1：对公验证 <br>2：活体验证<br>23：法人人脸验证 |
| adStatus  | int    | 认证状态<br>1:<br>真实性认证通过<br>7:<br>对公打款认证: 对公打款认证完成,待支付认证费用<br>法人人脸识别认证: 人脸识别认证完成,待支付认证费用 |