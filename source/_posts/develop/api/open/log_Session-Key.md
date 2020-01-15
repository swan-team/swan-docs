---
title: Session Key
header: develop
nav: api
sidebar:  log_Session-Key
---
 
 

**解释**： 智能小程序在其服务端中发送POST请求到百度 OAuth2.0 授权服务地址，并带上对应的参数，便可获取到Session Key。

 获取Session Key的URL地址 ：

https://spapi.baidu.com/oauth/jscode2sessionkey

> 为了让您的智能小程序运行在联盟 App 上,我们对获取 SessionKey 的接口做了升级。新接口可以兼容获取百度内部 App 和百度外部 App 的 SessionKey。
您只需要将原接口地址 `"https://openapi.baidu.com/nalogin/getSessionKeyByCode"` 更改为 `"https://spapi.baidu.com/oauth/jscode2sessionkey"` ,即可让您的智能小程序在其它App上自动实现账号关联。

## 方法参数 
### 获取Session Key需要的参数 ：

| 参数名 | 是否必须 | 说明 |
| ----- | ------ | --- |
| code | 是 | 通过上面第一步所获得的Authorization Code，。<br>特殊说明：code中有@符号时，会请求对应的开源宿主，用户身份校验及SessionKey生成过程由开源宿主实现  |
| client_id | 是 | 智能小程序的AppKey |
| sk | 是 | 智能小程序的AppSecret |

### 若参数无误，服务器将返回一段JSON文本，包含以下数据：

| 字段名 | 说明 |
| ------| --- |
| openid | 用户身份标识，由 appid 和 uid 生成。<br> 不同用户登录同一个小程序获取到的 openid 不同，同一个用户使用登录不同一个小程序获取到的 openid 也不同 。 |
| session_key | 用户的Session Key |

### 若请求错误，服务器将返回一段JSON文本，包含以下参数：

| 字段名 | 说明 |
|--| -- |
| error | 错误码；关于错误码的详细信息请参考<a href=" https://developer.baidu.com/wiki/index.php?title=docs/oauth/error ">`"错误码列表"`</a>一节。|
| error_description |错误描述信息，用来帮助理解和解决发生的错误。|

## 示例

<a href="swanide://fragment/f1096993ea3d3a1546a191ff592078621574403620854" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/SessionKey.gif">
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
Page({
    data: {
        sessionKey: ''
    },
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
                        // swan.login()返回的 code
                        code: res.code,
                        client_id: 'WPGsbTTGEQ2VRnNcEIjyo5nT1wGxc3PZ',
                        sk: 'zkDSFBfXvHtmtMAsNrQ8sFN9DNLFNZE4'
                    },
                    success: res => {
                        if (res.statusCode === 200) {
                            this.setData({
                                sessionKey: res.data.session_key || ''
                            });
                        }
                        
                    }
                });
            }
        });
    }
});
```

* 在 swan 文件中

```html
<view class="intro">
    <button type="primary" bind:tap="getSessionKey">获取 session key</button>
</view>
<view class="container" s-if="{{sessionKey}}">
    <view>session key 值为：</view>
    {{sessionKey}}
</view>
```

* res.data 的值为
```
# curl -d "code=xxx&client_id=xxx&sk=xxx" 
https://spapi.baidu.com/oauth/jscode2sessionkey
{
    "openid": "ABCDEFG123",
    "session_key": "xxxxxx"
}
```


