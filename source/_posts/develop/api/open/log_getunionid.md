---
title: getunionid
header: develop
nav: api
sidebar: log_getunionid
---

 
**解释**：获取unionid

### unionid说明
1. 同一主体下的不同小程序，开发者可以通过unionid实现跨小程序的用户区分。从用户角度看，每个用户在同一主体下的小程序内unionid是唯一的。

2. unionid获取依赖用户登录授权，登录授权过程[授权流程说明](https://smartprogram.baidu.com/docs/develop/api/open/log/)，请妥善处理用户未授权场景。

### 接口调用请求说明
```
POST https://openapi.baidu.com/rest/2.0/smartapp/getunionid?access_token=ACCESS_TOKEN
```
## 方法参数 

### Header 参数 

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
Content-Type| application/x-www-form-urlencoded | 是 | Http的实体首部字段，浏览器原生form表单。|

### query参数 

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
access_token| string | 是 | [接口调用凭证](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)


### post参数 

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
openid| string | 是 | 用户openid, 需要经过用户[登录授权过程](https://smartprogram.baidu.com/docs/develop/api/open/log/)获取


### 返回值说明 

参数名 | 类型 |描述 
--| --| --|--
errno| int | 错误码 0：正确返回，1：异常返回
errmsg| string | 错误信息
request_id| string | 请求ID，标识一次请求
data| object | 详细数据，errno为0的情况下才有意义


### data字段描述 

参数名 | 类型 | 描述 
--| --| --|--
unionid| string | 小程序用户 + 开发者主体维度 唯一的id

## 示例

<a href="swanide://fragment/17bbb40b4856d0a6c59955a3567fe5a51574405159785" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getunionid.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


* 在 js 文件中 
```js
Page(
    getSessionKey() {
        swan.login({
            success: res => {
                swan.request({
                    url: 'https://spapi.baidu.com/oauth/jscode2sessionkey',
                    method: 'POST',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                        code: res.code,
                        // appKey及appSecret需要替换一下
                        client_id: 'WPGsbTTGEQ2VRnNcEIjyo5nT1wGxc3PZ',
                        sk: 'zkDSFBfXvHtmtMAsNrQ8sFN9DNLFNZE4'
                    },
                    success: res => {
                        console.log(res);
                        if (+res.statusCode === 200) {
                            this.getUnionid(res.data.openid);
                        }
                        
                    }
                });
            }
        });
    },
    getUnionid(openid) {
        swan.request({
            url: 'https://openapi.baidu.com/rest/2.0/smartapp/getunionid?access_token=24.54f893d4a6f0873c7cba04f371f4be92.2592000.1576984227.282335-11136662',
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                openid: openid
            },
            success: res => {
                console.log(res);
                swan.showModal({
                    title: 'unionid',
                    content: JSON.stringify(res.data)
                });
            }
        });
    }
});
```

### 返回值示例 
```
{ 
    "data": {
        "unionid": "St6PVMkgMDeh92Uq2EWfx6H"
    },
    "errmsg": "succ",
    "errno": 0,
    "request_id": "2321772211",
    "timestamp": 1563886782
}
```


