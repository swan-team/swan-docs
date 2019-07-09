---
title: 人脸识别高级认证
header: develop
nav: third
sidebar: customer
---

### 小程序主体高级认证需要在小程序上线前完成，目前第三方代客户进行高级认证有

### 两种方式：

1.对公打款
>对公打款可以在第三方平台-客户管理页面进行操作，通过点击客户高级认证栏『待认证』跳转到百度信誉的高级认证页面，代客户进行对公打款高级认证。

2.法人人脸识别
>通过人脸识别调起二维码接口，跳转百度信誉人脸识别页面，进行法人身份高级认证。


## 人脸识别调起二维码
调用接口成功后,获得base64编码图片,使用手百扫码后可进入法人人脸识别认证

```
GET https://openapi.baidu.com/rest/2.0/smartapp/auth/faceauthen?access_token=ACCESS_TOKEN
```
参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | 授权小程序的access_token

返回值说明:

字段名 | 类型  | 描述
----- |-----| -----
qrcode |string | 二维码(base64编码图片)
timeout | string| 过期时间
legal\_face\_status|string|认证任务状态(1：初始化；2：通过；4：拒绝；6：进行中)

错误情况下:

字段名 | 类型  | 描述
----- |-----| -----
errno |int | 错误码
msg |string  | 第三方id
返回值示例:
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

## 认证收费豁免
在完成法人人脸识别完成之后,可调用豁免接口,调用接口后60天内小程序发布成功,则认证免费,若60天内无小程序发布成功,则需要重新收取相应费用

后面接口只可调用一次 多次调用会返回不可重复开通提示


```
GET https://openapi.baidu.com/rest/2.0/smartapp/auth/setexempt?access_token=ACCESS_TOKEN
```
参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | 授权小程序的access_token

返回值说明:

字段名 | 类型  | 描述
----- |-----| -----
add_time |string | 开通优惠豁免的时间
push_time | string| 最近状态修改的时间
overdue_time|string|过期时间

错误情况下:

字段名 | 类型  | 描述
----- |-----| -----
errno |int | 错误码
msg |string  | 第三方id

返回值示例:
```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "addTime": "2019-5-30",
        "pushTime": "2019-5-30",
        "overdueTime": "2019-7-30"
    }
}
```

