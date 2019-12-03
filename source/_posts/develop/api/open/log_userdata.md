---
title:  用户数据的签名验证和加解密
header: develop
nav: api
sidebar: log_userdata
---

 

 

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
