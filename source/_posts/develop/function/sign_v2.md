---
title: 签名与验签
header: develop
nav: function
sidebar: sign_v2
---

本文介绍如何在半个小时之内生成调用开放平台接口的签名，及签名加密规则，实现轻松调用百度电商开放平台的相关接口。

>在签名和验签过程中，如开发者在任何一个环节没有严格按照文档要求操作均会导致此“签名错误”，请认真阅读文档。

## 特别推荐

1. 推荐使用 百度电商开放平台的SDK来生成签名。

    [开放平台SDK使用说明](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_3_business/moneycourt/settle.md)

2. 如果由于种种原因不愿意使用SDK，也可以参考里面的生成签名的代码，事半功倍，不用再次开发生成签名代码。

3. SDK的demo中有完成调用开放平台接口的完整示例。

## 签名计算基本设定

1. 百度电商开放平台的所有接口中的所有参数的编码都是UTF-8，所以跟平台交互或者计算签名的时候字符编码都是UTF-8，
暂时没有支持其他编码的打算，请开发者自行对于自己的代码编码进行转换

2. 您如果不清楚的自己请求参数的编码，PHP可以使用mb_detect_encoding函数进行检测编码,
因Java没有直接的函数可以考虑使用以下代码进行检测

```
String encode = "UTF-8"; 

System.out.println( str.equals( new String(str.getBytes(encode),encode) );

```

3. 请求接口的参数列表均为键值对，键名为字符串，键值也必须为字符串。

4. 键值中如果为复杂数据类型，比如结构体. 数组. 对象都必须先转化成为字符串。

5. 建议键名中有复杂数据类型，PHP先转换成为数组array，Java先转换成为HashMap，因为平台现在对于参数的形式，
复杂只支持Json类型，PHP的array类型和Java的HashMap类型都可以很方便转换成Json

6. PHP中对于键名为数组情况，需要对数组中汉字进行urlencode函数进行编码，之后再json_encode。


##  筛选进行签名的参数

1. 参数名为sign. sign_type参数不需要参与签名。

2. 建议业务方也不需要在参数列表中进行签名参数之前，也不要有这样容易造成签名错误的参数

3. **支付回调验签中全部参数签名是对平台的所有POST参数进行签名，空值参数同样要参与签名，如不参与签名，会导致验签不通过，如果商户URL里包含GET类型参数，不会参与签名。**


##  对参数进行排序

将筛选的参数按照第一个字符的键值ASCII码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值ASCII码递增排序，以此类推。

1. PHP采用ksort函数进行排序。

2. Java先初始化ArrayList，然后使用sort方法进行排序。

## 对参数进行拼接组成待签名字符串

1. 使用 = 和 & 将参数连接起来，将排序后的参数与其对应值，组合成“参数=参数值”的格式，并且把这些参数用&字符连接起来，此时生成的字符串为待签名字符串。

```
orderId=800020199&tpOrderId=33330020199&status=2&unitPrice=800&count=2&payMoney=1200&promoMoney=100&hbMoney=100&hbBalanceMoney=100&giftCardMoney=100&dealId=7423328&payTime=1463037529&payType=9101&partnerId=1000000003&promoDetail={}
```

2. 将待签名字符串和业务方私钥带入SHA1算法中得出sign

组成的待签名字符串为：

```
count=2&dealId=7423328&giftCardMoney=100&hbBalanceMoney=100&hbMoney=100&orderId=800020199&partnerId=1000000003&payMoney=1200&payTime=1463037529&payType=9101&promoDetail={}&promoMoney=100&status=2&tpOrderId=33330020199&unitPrice=800
```

3. 使用各自语言对应的SHA1WithRSA签名生成函数（如php: openssl_sign），传入待签名字符串. 业务方私钥，由SHA1算法中得出sign，然后base64encode。

示例生成的签名为：

```
rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

完整的请求URL为：

```
http://xxx.tpbusiness.xxx/SyncPayInfo?orderId=800020199&tpOrderId=33330020199&status=2&unitPrice=800&count=2&payMoney=1200&promoMoney=100&hbMoney=100&hbBalanceMoney=100&giftCardMoney=100&dealId=7423328&payTime=1463037529&payType=9101&partnerId=1000000003&promoDetail={}&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```
##  PHP相关的签名生成的参考代码

1. PHP生成签名的工具类

```
<?php
/**
 * API入参静态检查类
 * 可以对API的参数类型. 长度. 最大值等进行校验
 *
 **/
class NuomiRsaSign
{

    /**
     * @desc 私钥生成签名字符串
     * @param array $assocArr
     * @param $rsaPriKeyStr
     * @return bool|string
     * @throws Exception
     */
    public static function genSignWithRsa(array $assocArr, $rsaPriKeyStr)
    {
        $sign = '';
        if (empty($rsaPriKeyStr) || empty($assocArr)) {
            return $sign;
        }

        if (!function_exists('openssl_pkey_get_private') || !function_exists('openssl_sign')) {
            throw new Exception("openssl扩展不存在");
        }

        $priKey = openssl_pkey_get_private($rsaPriKeyStr);

        if (isset($assocArr['sign'])) {
            unset($assocArr['sign']);
        }

        ksort($assocArr); //按字母升序排序

        $parts = array();
        foreach ($assocArr as $k => $v) {
            $parts[] = $k . '=' . $v;
        }
        $str = implode('&', $parts);
        openssl_sign($str, $sign, $priKey);
        openssl_free_key($priKey);

        return base64_encode($sign);
    }

    /**
     * @desc 公钥校验签名
     * @param array $assocArr
     * @param $rsaPubKeyStr
     * @return bool
     * @throws Exception
     */
    public static function checkSignWithRsa(array $assocArr, $rsaPubKeyStr)
    {
        if (!isset($assocArr['sign']) || empty($assocArr) || empty($rsaPubKeyStr)) {
            return false;
        }

        if (!function_exists('openssl_pkey_get_public') || !function_exists('openssl_verify')) {
            throw new Exception("openssl扩展不存在");
        }

        $sign = $assocArr['sign'];
        unset($assocArr['sign']);

        if (empty($assocArr)) {
            return false;
        }
        ksort($assocArr); //按字母升序排序
        $parts = array();
        foreach ($assocArr as $k => $v) {
            $parts[] = $k . '=' . $v;
        }
        $str = implode('&', $parts);

        $sign = base64_decode($sign);
        $pubKey = openssl_pkey_get_public($rsaPubKeyStr);
        $result = (bool)openssl_verify($str, $sign, $pubKey);
        openssl_free_key($pubKey);

        return $result;
    }

}

```

2. 调用PHP签名生成类生成签名的参考代码

```

/**
 * 第一部分：从申请的私钥文件路径中读取出私钥的内容
 * @notice1: 私钥文件可以从任意存储介质中读取 
 */

$rsaPriviateKeyFilePath = 'rsa/rsa_private_key.pem';

$rsaPrivateKey = file_get_contents($rsaPriviateKeyFilePath);


/**
 * 第二部分：使用参数计算签名
 */

$requestApiParamsArr = array('key1'=>'value1','key2'=>'value2');

$rsaSign = NuomiRsaSign::genSignWithRsa( $requestApiParamsArr ,$rsaPrivateKey);


```


## JAVA相关的签名生成的参考代码

1. JAVA生成签名的工具类

com.nuomi.common.* 相关文件可以在开放平台的下载中找到

```
/**
 * nuomi.com Inc.
 * Copyright (c) 2004-2018 All Rights Reserved.
 */

package com.nuomi.util;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;


import com.nuomi.common.NuomiApiException;
import com.nuomi.common.NuomiConstants;
import com.nuomi.util.codec.Base64;

/**
 * 签名工具类
 * 目前只支持rsa方式  不支持rsa2
 */
public class NuomiSignature {


    /**
     * 获取签名
     *
     * @param sortedParams 排序后的参数
     * @param privateKey   私钥
     * @return 返回签名后的字符串
     * @throws NuomiApiException
     */
    public static String genSignWithRsa(Map<String, String> sortedParams, String privateKey) throws NuomiApiException {
        String sortedParamsContent = getSignContent(sortedParams);
        return rsaSign(sortedParamsContent, privateKey, NuomiConstants.CHARSET_UTF8);
    }

    /**
     * 签名验证
     *
     * @param sortedParams
     * @param pubKey
     * @param sign
     * @return
     * @throws NuomiApiException
     */
    public static boolean checkSignWithRsa(Map<String, String> sortedParams, String pubKey, String sign)
            throws NuomiApiException {
        String sortedParamsContent = getSignContent(sortedParams);
        return doCheck(sortedParamsContent, sign, pubKey, NuomiConstants.CHARSET_UTF8);
    }

    /**
     * @param sortedParams 已经排序的字符串
     * @return 返回签名后的字符串
     */
    public static String getSignContent(Map<String, String> sortedParams) {
        StringBuffer content = new StringBuffer();
        List<String> keys = new ArrayList<String>(sortedParams.keySet());
        Collections.sort(keys);
        int index = 0;
        for (int i = 0; i < keys.size(); i++) {
            String key = keys.get(i);
            String value = sortedParams.get(key);
            content.append((index == 0 ? "" : "&") + key + "=" + value);
            index++;
            
        }
        return content.toString();
    }


    /**
     * sha1WithRsa 加签
     *
     * @param content    需要加密的字符串
     * @param privateKey 私钥
     * @param charset    字符编码类型  如：utf8
     * @return
     * @throws NuomiApiException
     */
    public static String rsaSign(String content, String privateKey,
                                 String charset) throws NuomiApiException {
        try {
            PrivateKey priKey = getPrivateKeyFromPKCS8(NuomiConstants.SIGN_TYPE_RSA,
                    new ByteArrayInputStream(privateKey.getBytes()));

            java.security.Signature signature = java.security.Signature
                    .getInstance(NuomiConstants.SIGN_ALGORITHMS);

            signature.initSign(priKey);

            if (StringUtils.isEmpty(charset)) {
                signature.update(content.getBytes());
            } else {
                signature.update(content.getBytes(charset));
            }

            byte[] signed = signature.sign();

            return new String(Base64.encodeBase64(signed));
        } catch (InvalidKeySpecException ie) {
            throw new NuomiApiException("RSA私钥格式不正确，请检查是否正确配置了PKCS8格式的私钥", ie);
        } catch (Exception e) {
            throw new NuomiApiException("RSAcontent = " + content + "; charset = " + charset, e);
        }
    }


    public static PrivateKey getPrivateKeyFromPKCS8(String algorithm,
                                                    InputStream ins) throws Exception {
        if (ins == null || StringUtils.isEmpty(algorithm)) {
            return null;
        }

        KeyFactory keyFactory = KeyFactory.getInstance(algorithm);

        byte[] encodedKey = StreamUtil.readText(ins).getBytes();

        encodedKey = Base64.decodeBase64(encodedKey);

        return keyFactory.generatePrivate(new PKCS8EncodedKeySpec(encodedKey));
    }

    /**
     * RSA验签名检查
     *
     * @param content   待签名数据
     * @param sign      签名值
     * @param publicKey 分配给开发商公钥
     * @param encode    字符集编码
     * @return 布尔值
     * @throws NuomiApiException
     */
    private static boolean doCheck(String content, String sign, String publicKey, String encode)
            throws NuomiApiException {
        try {
            KeyFactory keyFactory = KeyFactory.getInstance(NuomiConstants.SIGN_TYPE_RSA);
            byte[] bytes = publicKey.getBytes();
            byte[] encodedKey = Base64.decodeBase64(bytes);
            PublicKey pubKey = keyFactory.generatePublic(new X509EncodedKeySpec(encodedKey));
            java.security.Signature signature = java.security.Signature.getInstance(NuomiConstants.SIGN_ALGORITHMS);

            signature.initVerify(pubKey);
            signature.update(content.getBytes(encode));

            boolean bverify = signature.verify(Base64.decodeBase64(sign.getBytes()));
            return bverify;

        } catch (Exception e) {
            throw new NuomiApiException("RSA私钥格式不正确，请检查是否正确配置了PKCS8格式的私钥", e);
        }
    }

}

```



2. 调用JAVA签名生成类生成签名的参考代码

com.nuomi.common.* 相关文件可以在开放平台的下载中找到

```
/**
 * 第一部分：赋值私钥
 * @notice1:因为JAVA中的字节流. 字符流. 双字符流等概念非常复杂，建议使用常量存储私钥文件
 * @notice2:私钥文件为不换行且不带私钥开头和结尾的字符串
 */

String PRIVATE_KEY = "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAM8vojS3eWYEnB0Xl73+8+D/xdzeWTvbZc0SPO6nKmm3WxBYX/fFI6S7DhhK0QAUKjbSD4hDyqLkgy8azi8ETvYSYIoTjdR55nNklCNQ9RAtPVeuAAFzN0h2DmfY3/F7FsUFg9Qd/9YaGpU+CEnZDThjvWxBg22HvlN09xKfAYltAgMBAAECgYAr8wDHifv4hhXPngeUSBbXran9NjVbmyi3HZ1LSq6WikyI5RZGas0qznso8AXxrFVgF6Mv1qGPeEXToi4GjzVoX5ocfUoSlqE5xmhdfmc4aqKz/BlncCVlgNnlQEp5oHpGiIzVEpabC4OiBMRAhi/Brvu14GOUkP1VEZmfuCQCCQJBAPKytmmzznsDaiO15AeorPi/nUNDMLoOoiFwZgUxXWW7PI+uZq1ja5NpMjuRu3eVt3dFexB7x+ZnBb9tWTGQtDMCQQDaiqc4vR1eiSpVMf+rB6+Xbj+dDrtoTaH66YrBKXE5tbWPlsm1MWWpmDREFntU+f3yAQqjgVAtCULmp8odkCvfAkEAge9aJ+dDIarnVW0ZQ1x0Fs0Hli5P1Rzmgn6ZsCgIt+Fxf/9AK44x1v8YDLpuIoz+Z5XEWEPc9yaq9hzGBvpQ7wJAErDLDnI2IdCvWyv0hscYgGYAcMlCw+/ny5LPuCd4NIxS493skF+SJ0gKKEyX7bOXwWvPYh58Ie3p19o/0flzlwJBAJ8Ut/aPdzIFIlvR8BdQ7O/6BCf2490vWjNrzu+TOWCEeEM4IMfgXSg3chhExJg8TXwU0IbiB5fnDeIreWbPPWY=";
        
   
/**
 * 第二部分：计算签名
 */
/**
 * 1.通过方法获取到所有需要需要参与签名的参数HashMap
 */
HashMap apiParams = new HashMap();

		
/**
 * 2.从常量中读取privateKey,然后计算RSA签名
 */
String rsaSign = NuomiSignature.genSignWithRsa(apiParams,NuomiConstants.PRIVATE_KEY);

```

## 将平台公钥转换成正确格式的公钥
>将应用详情页的平台公钥和应用公钥（这2个公钥是没有开始. 结尾标示和换行符的）转换成正确的公钥格式

1.PHP代码
```
    /**
     * @desc 密钥由字符串（不换行）转为PEM格式
     * @param $rsaKeyStr
     * @param int $keyType 0:公钥，1:私钥
     * @return string
     * @throws SF_Exception_InternalException
     */
    public static function convertRSAKeyStr2Pem($rsaKeyStr, $keyType = 0)
    {
        $rsaKeyPem = '';

        $beginPublicKey   = '-----BEGIN PUBLIC KEY-----';
        $endPublicKey     = '-----END PUBLIC KEY-----';
        $beginPrivateKey  = '-----BEGIN PRIVATE KEY-----';
        $endPrivateKey    = '-----END PRIVATE KEY-----';

        $keyPrefix = $keyType ? $beginPrivateKey : $beginPublicKey;
        $keySuffix = $keyType ? $endPrivateKey : $endPublicKey;

        $rsaKeyPem .= $keyPrefix. "\n";
        $rsaKeyPem .= wordwrap($rsaKeyStr, 64, "\n", true) . "\n";
        $rsaKeyPem .= $keySuffix;

        if(!function_exists('openssl_pkey_get_public') || !function_exists('openssl_pkey_get_private')){
            return false;
        }

        if($keyType == 0 && false == openssl_pkey_get_public($rsaKeyPem)){
            return false;
        }

        if($keyType == 1 && false == openssl_pkey_get_private($rsaKeyPem)){
            return false;
        }

        return $rsaKeyPem;
    }
```