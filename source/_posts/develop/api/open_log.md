---
title: 登录
header: develop
nav: api
sidebar: open_log
---


智能小程序可以通过百度官方提供的登录能力方便地获取百度提供的用户身份标识，快速建立智能小程序内的用户体系。

## 授权流程说明
1、 调用 swan.login() 获取 **临时登录凭证code** ，并回传到开发者服务器；
2、 开发者服务器以 code 换取 **session_key**；
3、 调用 swan.getUserInfo() 获取用户信息。

**使用百度授权前准备**：
您需要创建一个智能小程序以获取client\_id（AppKey）和client\_secret（AppSecret），以上两者均从智能小程序开发者后台查看。

### 流程示意图
**概念介绍**：
* OAuth 2.0（开放授权）：一个开放登录授权标准。用户授权后，第三方智能小程序无需获取用户的用户名和密码就可以访问该用户。
* Session Key：用户对智能小程序的授权会话的密钥。用户授权后，开发者可以通过百度开放平台获取授权会话的Session Key，此后便可在智能小程序中获取用户信息。
* Code：用户授权的标识。在用户完成对应用的授权后，会生成一个很短时间（十分钟）内有效的授权标识，开发者通过服务端请求，将code以及智能小程序的client\_id和secret\_key传到开放平台接口，可以获取到SessionKey。

以下是智能小程序使用OAuth 2.0进行授权及获取用户信息的示意图：

![图片](../../../img/oauth.png)

1、 智能小程序在App内部运行时使用<a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#login/">`swan.login()`</a>接口获取Authorization Code;
2、 通过 Authorization Code 获取 <a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#Session-Key/">Session Key</a>;
3、 调用<a href="http://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getUserInfo/">getUserInfo</a>获取用户信息;
4、 当用户完成了授权，且授权会话仍处于有效期时，智能小程序不需要每次都进行前两步，而是可以直接进行第三步获取用户信息。
要判断当前用户的授权会话是否仍处于有效期，可调用<a href="http://smartprogram.baidu.com/docs/develop/api/open_log/#checkSession/">`checkSession()`</a>方法进行判断，详见[下载小程序支付demo](https://github.com/baidu-smart-app)。

## swan.login

**解释**： 调用接口 swan.login 获取 **Authorization Code**，智能小程序可以使用`swan.login()`接口获取Authorization Code。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/login.png"  class="demo-qrcode-image" />



**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|timeout|	number|		否| -|	超时时间，单位ms|
|success |Function  |  否 |  -| 接口调用成功的回调函数|
|fail  |  Function |   否 | -|  接口调用失败的回调函数|
|complete |   Function |   否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|code|String|用户登录凭证（有效期十分钟）,开发者需要在开发者服务器后台调用 api，使用 code 换取 session_key 等信息。|

**示例**：
<a href="swanide://fragment/f8ba538b4fd2ca1ab1f3ecb326d3981c1560169713308" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
> 详细示例请在开发者工具中查看。

* 在 js 文件中

```js
swan.login({
    success: function (res) {
        swan.request({
            url: 'https://xxx/xxx', // 开发者服务器地址
            data: {
                code: res.code
            }
        });
    },
    fail: function (err) {
        console.log('login fail', err);
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误   |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|
|10007|请求超时|
## getunionid

### unionid说明
1. 一个开发者可以创建多个小程序， 开发者可以通过unionid实现跨小程序的用户区分。从用户角度看，每个用户在一个开发者所有的小程序下的unionid是唯一的。

2. unionid获取依赖用户登录授权，登录授权过程[授权流程说明](https://smartprogram.baidu.com/docs/develop/api/open_log/)，请妥善处理用户未授权场景。

### 接口调用请求说明
```
POST https://openapi.baidu.com/rest/2.0/smartapp/getunionid?access_token=ACCESS_TOKEN
```
### 参数说明

**query参数**

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
access_token| string | 是 | [接口调用凭证](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)


**post参数**

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
openid| string | 是 | 用户openid, 需要经过用户[登录授权过程](https://smartprogram.baidu.com/docs/develop/api/open_log/)获取


**返回值说明**

参数名 | 类型 |描述 
--| --| --|--
errno| int | 错误码 0：正确返回，1：异常返回
errmsg| string | 错误信息
request_id| string | 请求ID，标识一次请求
data| object | 详细数据，errno为0的情况下才有意义


**data字段描述**

参数名 | 类型 | 描述 
--| --| --|--
unionid| string | 小程序用户 + 开发者主体维度 唯一的id


**返回值示例**
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


## Session Key

**解释**： 智能小程序在其服务端中发送POST请求到百度 OAuth2.0 授权服务地址，并带上对应的参数，便可获取到Session Key。

**获取Session Key的URL地址**：

https://spapi.baidu.com/oauth/jscode2sessionkey

> 为了让您的智能小程序运行在联盟 App 上,我们对获取 SessionKey 的接口做了升级。新接口可以兼容获取百度内部 App 和百度外部 App 的 SessionKey。
您只需要将原接口地址 `"https://openapi.baidu.com/nalogin/getSessionKeyByCode"` 更改为 `"https://spapi.baidu.com/oauth/jscode2sessionkey"` ,即可让您的智能小程序在其它App上自动实现账号关联。

**获取Session Key需要的参数**：

| 参数名 | 是否必须 | 说明 |
| ----- | ------ | --- |
| code | 是 | 通过上面第一步所获得的Authorization Code |
| client_id | 是 | 智能小程序的App Key |
| sk | 是 | 智能小程序的App Secret |

若参数无误，服务器将返回一段JSON文本，包含以下数据：

| 字段名 | 说明 |
| ------| --- |
| openid | 用户身份标识，由 appid 和 uid 生成。<br>**不同用户登录同一个小程序获取到的 openid 不同，同一个用户使用登录不同一个小程序获取到的 openid 也不同**。 |
| session_key | 用户的Session Key |

若请求错误，服务器将返回一段JSON文本，包含以下参数：

| 字段名 | 说明 |
| -| - |
| error | 错误码；关于错误码的详细信息请参考<a href=" http://developer.baidu.com/wiki/index.php?title=docs/oauth/error ">`"错误码列表"`</a>一节。|
| error_description |错误描述信息，用来帮助理解和解决发生的错误。|

**请求示例**：

```
# curl -d "code=xxx&client_id=xxx&sk=xxx" 
https://spapi.baidu.com/oauth/jscode2sessionkey
{
    "openid": "ABCDEFG123",
    "session_key": "xxxxxx"
}
```


## swan.checkSession

**解释**：通过上述接口获得的用户登录态拥有一定的时效性，用户越久未使用智能小程序，用户登录态越有可能失效；反之如果用户一直在使用智能小程序，则用户登录态一直保持有效。具体时效逻辑由宿主维护，对开发者透明。开发者可以调用 swan.checkSession 接口 **检测当前用户登录态是否有效**，登录态过期后开发者可以再调用 swan.login 获取新的用户登录态。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | -|  接口调用成功的回调函数|
|fail  |  Function |   否 | -|  接口调用失败的回调函数|
|complete |   Function |   否  |  -|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/fb9d919d0ecca8fc3cc6c89a597210ff1558336225956" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="checkSession">checkSession</button>
</view>
```

* 在 js 文件中

```js
Page({
    checkSession() {
        swan.checkSession({
            success: function (res) {
                console.log('登录态有效');
                swan.getUserInfo({
                    success: function (res) {
                        console.log('用户名', res.userInfo.nickName);
                        swan.request({
                            url: "https://xxx/decrypt_user_data", // 开发者服务器地址，对 data 进行解密
                            data: {
                                data: res.data,
                                iv: res.iv
                            }
                        });
                    }
                })
            },
            fail: function (err) {
                console.log('登录态无效');
                swan.login({
                    success: function (res) {
                        swan.request({
                            url: 'https://xxx/xxx', // 开发者服务器地址，用 code 换取 session_key
                            data: {
                                code: res.code
                            }
                        });
                    },
                    fail: function (err) {
                        console.log('登录失败', err);
                    }
                });
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|
|10001|内部错误  |
|10002|网络请求失败|
|10004|用户拒绝(user not login)|

## swan.isLoginSync

> 基础库 1.13.4 版本开始支持。

**解释**：获取宿主 App登录状态。

**方法参数**：无

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|isLogin  |  Boolean | 宿主 App登录状态 true: 已登录，false: 未登录  |

**示例**：

<a href="swanide://fragment/f036e8e9edbe82f352f824c83e6b81911558336338111" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="isLoginSync">isLoginSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    isLoginSync() {
        try {
            var result = swan.isLoginSync();
            console.log('isLoginSync', result);
        } catch (e) {
            console.log('error', e);
        }
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败|

## 用户数据的签名验证和加解密

智能小程序可以通过各种前端接口获取百度提供的开放数据。考虑到开发者服务器也需要获取这些开放数据，百度会对这些数据做签名和加密处理。开发者后台拿到开放数据后可以对数据进行校验签名和解密，来保证数据不被篡改。

**加密数据解密算法**

接口如果涉及敏感数据，接口的明文内容将不包含这些敏感数据。开发者如需要获取敏感数据，需要对接口返回的加密数据（data）进行对称解密。

解密过程：开发者智能小程序（通过 swan.request）将加密数据发送至自身 Server 进行解密后返回智能小程序。

**解密算法如下**：

1. 对称解密使用的算法为 AES-192-CBC，数据采用PKCS#7填充；
2. 对称解密的目标密文为 Base64_Decode(data)；
3. 对称解密秘钥 AESKey = Base64_Decode(session_key), AESKey 是24字节；
4. 对称解密算法初始向量 为Base64_Decode(iv)，其中iv由数据接口返回。

**解密后内容如下**：

| 内容 | 长度 |
| - | :- |
| 随机填充内容 | 16字节 |
| 用户数据长度 | 4字节，大端序无符号32位整型 |
| 用户数据 | 由用户数据长度描述 |
| app_key | 与app_key长度相同 |


**解密示例代码**：

PHP版本：

```php
<?php
/**
 * @Author: smartprogram_rd@baidu.com
 * Copyright 2018 The BAIDU. All rights reserved.
 *
 * 百度小程序用户信息加解密示例代码（面向过程版）
 * 示例代码未做异常判断，请勿用于生产环境
 */

function test() {
    $app_key = 'y2dTfnWfkx2OXttMEMWlGHoB1KzMogm7';
    $session_key = '1df09d0a1677dd72b8325aec59576e0c';
    $iv = "1df09d0a1677dd72b8325Q==";
    $ciphertext = "OpCoJgs7RrVgaMNDixIvaCIyV2SFDBNLivgkVqtzq2GC10egsn+PKmQ/+5q+chT8xzldLUog2haTItyIkKyvzvmXonBQLIMeq54axAu9c3KG8IhpFD6+ymHocmx07ZKi7eED3t0KyIxJgRNSDkFk5RV1ZP2mSWa7ZgCXXcAbP0RsiUcvhcJfrSwlpsm0E1YJzKpYy429xrEEGvK+gfL+Cw==";

    $plaintext = decrypt($ciphertext, $iv, $app_key, $session_key);

    // 解密结果应该是 '{"openid":"open_id","nickname":"baidu_user","headimgurl":"url of image","sex":1}'
    echo $plaintext, PHP_EOL;
}

test();

/**
 * 数据解密：低版本使用mcrypt库（PHP < 5.3.0），高版本使用openssl库（PHP >= 5.3.0）。
 *
 * @param string $ciphertext    待解密数据，返回的内容中的data字段
 * @param string $iv            加密向量，返回的内容中的iv字段
 * @param string $app_key       创建小程序时生成的app_key
 * @param string $session_key   登录的code换得的
 * @return string | false
 */
function decrypt($ciphertext, $iv, $app_key, $session_key) {
    $session_key = base64_decode($session_key);
    $iv = base64_decode($iv);
    $ciphertext = base64_decode($ciphertext);

    $plaintext = false;
    if (function_exists("openssl_decrypt")) {
        $plaintext = openssl_decrypt($ciphertext, "AES-192-CBC", $session_key, OPENSSL_RAW_DATA | OPENSSL_ZERO_PADDING, $iv);
    } else {
        $td = mcrypt_module_open(MCRYPT_RIJNDAEL_128, null, MCRYPT_MODE_CBC, null);
        mcrypt_generic_init($td, $session_key, $iv);
        $plaintext = mdecrypt_generic($td, $ciphertext);
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);
    }
    if ($plaintext == false) {
        return false;
    }

    // trim pkcs#7 padding
    $pad = ord(substr($plaintext, -1));
    $pad = ($pad < 1 || $pad > 32) ? 0 : $pad;
    $plaintext = substr($plaintext, 0, strlen($plaintext) - $pad);

    // trim header
    $plaintext = substr($plaintext, 16);
    // get content length
    $unpack = unpack("Nlen/", substr($plaintext, 0, 4));
    // get content
    $content = substr($plaintext, 4, $unpack['len']);
    // get app_key
    $app_key_decode = substr($plaintext, $unpack['len'] + 4);

    return $app_key == $app_key_decode ? $content : false;
}
```

Java版本：

**特别说明**：
 受美国软件出口限制，JDK默认使用的AES算法最高只能支持128位。如需要更高位的支持需要从oracle官网下载Java密码技术扩展(JCE)更换JAVA_HOME/jre/lib/security目录下的： local_policy.jar和US_export_policy.jar。
> 下载地址：https://www.oracle.com/technetwork/java/javase/downloads/jce-all-download-5170447.html

```java
/*
 * Copyright (C) 2018 Baidu, Inc. All Rights Reserved.
 */
package com.baidu.utils.secruity;
import java.nio.charset.Charset;
import java.util.Arrays;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base64;
import com.baidu.exception.TpException;
public class Demo {
    private static Charset CHARSET = Charset.forName("utf-8");
    /**
     * 对密文进行解密
     *
     * @param text 需要解密的密文
     *
     * @return 解密得到的明文
     *
     * @throws TpException 异常错误信息
     */
    public String decrypt(String text, String sessionKey)
            throws TpException {
        byte [] aesKey = Base64.decodeBase64(sessionKey + "=");
        byte[] original;
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
            SecretKeySpec keySpec = new SecretKeySpec(aesKey, "AES");
            IvParameterSpec iv = new IvParameterSpec(Arrays.copyOfRange(aesKey, 0, 16));
            cipher.init(Cipher.DECRYPT_MODE, keySpec, iv);
            byte[] encrypted = Base64.decodeBase64(text);
            original = cipher.doFinal(encrypted);
        } catch (Exception e) {
            throw new TpException(e);
        }
        String xmlContent;
        String fromClientId;
        try {
            // 去除补位字符
            byte[] bytes = PKCS7Encoder.decode(original);
            // 分离16位随机字符串,网络字节序和ClientId
            byte[] networkOrder = Arrays.copyOfRange(bytes, 16, 20);
            int xmlLength = recoverNetworkBytesOrder(networkOrder);
            xmlContent = new String(Arrays.copyOfRange(bytes, 20, 20 + xmlLength), CHARSET);
            fromClientId = new String(Arrays.copyOfRange(bytes, 20 + xmlLength, bytes.length), CHARSET);
        } catch (Exception e) {
            throw new TpException(e);
        }
        return xmlContent;
    }
    /**
     * 还原4个字节的网络字节序
     *
     * @param orderBytes 字节码
     *
     * @return sourceNumber
     */
    private int recoverNetworkBytesOrder(byte[] orderBytes) {
        int sourceNumber = 0;
        int length = 4;
        int number = 8;
        for (int i = 0; i < length; i++) {
            sourceNumber <<= number;
            sourceNumber |= orderBytes[i] & 0xff;
        }
        return sourceNumber;
    }
    /**
     * 加密机密demo
     * @param args
     */
    public static void main(String[] args) {
        String dy = "OpCoJgs7RrVgaMNDixIvaCIyV2SFDBNLivgkVqtzq2GC10egsn+PKmQ/+5q+chT8xzldLUog2haTItyIkKyvzvmXonBQLIMeq54axAu9c3KG8IhpFD6+ymHocmx07ZKi7eED3t0KyIxJgRNSDkFk5RV1ZP2mSWa7ZgCXXcAbP0RsiUcvhcJfrSwlpsm0E1YJzKpYy429xrEEGvK+gfL+Cw==";

        String sessionKey = "1df09d0a1677dd72b8325aec59576e0c";

        Demo demo = new Demo();
        String dd = demo.decrypt(dy, sessionKey);
        System.out.println(dd);
    }
}
```
