---
title: 启动流程与能力
header: develop
nav: third
sidebar: apppage
---
使用的access_token为授权小程序的接口调用凭据，获取方式请参考：<a href="http://smartprogram.baidu.com/docs/develop/third/pro/"> 授权流程</a>中“6、使用授权码换小程序的接口调用凭据和授权信息”。
## 为授权的小程序帐号上传小程序代码

接口调用请求说明：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/upload?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|template_id	|long	|是	|代码库中的代码模版ID|
|ext_json	|long|	是|	第三方自定义的配置|
|user_version	|string	|是|	代码版本号，开发者可自定义。|
|user_desc	|string|	是|	代码描述，开发者可自定义。|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data":null
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int	|错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误。|
ext_json需为string类型，格式示例如下 ：
```json
{
    "extEnable":true,
    "extAppid":"100000282",
    "directCommit":false,
    "ext":{
        "name":"helloword",
        "attr":{
            "host":"open.baidu.com",
            "users":[
                "user_1",
                "user_2"
            ]
        }
    },
    "extPages":{
        "pages/api/api":{
            "navigationBarTitleText":"小程序接口能力展示open"
        }
    },
    "window":{
        "backgroundTextStyle":"light",
        "navigationBarBackgroundColor":"#fff",
        "navigationBarTitleText":"Demo",
        "navigationBarTextStyle":"black"
    },
    "tabBar":{
        "list":[
            {
                "iconPath":"images/component_normal.png",
                "pagePath":"pages/index",
                "text":"首页open"
            },
            {
                "pagePath":"pages/component/component",
                "iconPath":"images/component_normal.png",
                "selectedIconPath":"images/component_selected.png",
                "text":"组件open"
            }
        ]
    },
    "networkTimeout":{
        "request":20000,
        "downloadFile":20000
    }
}
```
**说明**
* 为了便于第三方平台使用同一个小程序模版为不同的小程序提供服务，第三方可以将自定义信息放置在ext_json中。

* 关于ext_json中的参数详情见：https://smartprogram.baidu.com/docs/develop/tutorial/process/

* 这个接口调用成功后会有一段延迟生效时间。<>

## 为授权的小程序提交审核

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/submitaudit?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型	|是否必须	|描述|
|---|---|---|---|
|access_token	|string	|是	|授权小程序的接口调用凭据|
|content	|string|	是	|送审描述|
|package_id	|string|	是|	代码包id|
|remark	|string|	是|	备注|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data":null
}
```
错误情况如下:

|字段名|	类型	|描述|
|---|---|---|
|errno|	int	|错误码|
|msg	|string	|错误描述信息，用来帮助理解和解决发生的错误。|

## 发布已通过审核的小程序

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/release?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型	|是否必须	|描述|
|---|---|---|---|
|access_token	|string	|是	|授权小程序的接口调用凭据|
|package_id	|string	|是	|代码包id|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data":null
}
```
错误情况下:

|字段名	|类型	|描述|
|---|---|---|
|errno|	int	|错误码|
|msg	|string|	错误描述信息，用来帮助理解和解决发生的错误。|

## 小程序版本回退

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/rollback?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|package_id	|string|	是	|当前线上代码包id|
返回值示例

```
{
  "errno": 0,
  "msg": "success",
  "data":null
}
```
错误情况下:

|字段名	|类型	|描述|
|---|---|---|
|errno	|int	|错误码|
|msg|	string	|错误描述信息，用来帮助理解和解决发生的错误。|
**说明**：
这个接口调用成功后会有一段延迟生效时间。

## 小程序审核撤回

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/withdraw?access_token=ACCESS_TOKEN
```
参数说明

|参数名|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是	|授权小程序的接口调用凭据|
|package_id|	string|	是	|待撤回审核的代码包id|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data":null
}
```
错误情况下:

|字段名	|类型|	描述|
|---|---|---|
|errno	|int	|错误码|
|msg|	string	|错误描述信息，用来帮助理解和解决发生的错误。|

## 获取授权小程序预览包详情

```
GET https://openapi.baidu.com/rest/2.0/smartapp/package/gettrial?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|version|	string|	版本号|
|remark	|int|	备注|
|msg|	string|	审核信息|
|committer|	string|	提交人|
|status|	int	|状态|
|commit_time|	string|	提交时间|
|version_desc|	string|	版本描述|
|package_id|	string|	代码包Id|
status字段码表

|status	|含义|
|---|---|
|1	|线上版本|
|3	|开发中|
|4	|审核中|
|5	|审核失败|
|6	|审核通过|
|8	|回滚中|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": {
    "version": "d0.0.0.7",
    "remark": "",
    "msg": "",
    "committer": "--",
    "status": 3,  // 1:线上版本  3:开发中  4:审核中  5:审核失败  6:审核通过  8:回滚中
    "commit_time": "1970/01/19 02:19:29",
    "version_desc": "",
    "package_id": 216
  }
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int	|错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误。|

## 获取小程序包列表
```
GET https://openapi.baidu.com/rest/2.0/smartapp/package/get?access_token=ACCESS_TOKEN
```
参数说明

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|version|	string|	版本号|
|remark	|int	|备注|
|msg|	string|	审核信息|
|committer|	string|	提交人|
|status|	int|	状态|
|commit_time|	string|	提交时间|
|version_desc|	string|	版本描述|
|package_id	|string	|代码包id|
|rollback_version|	string|	上一个线上版本的版本号|
|upload_status|	int	|上传状态|
|upload_status_desc|	string|	上传状态描述|
status字段码表

|status	|含义|
|---|---|
|1	|线上版本|
|3	|开发中|
|4|	审核中|
|5	|审核失败|
|6|	审核通过|
|8	|回滚中|
**说明**：
包上传需要一定的处理时间，处理期间upload_status，upload_status_desc字段会体现上传的状态。

|upload_status	|upload_status_desc|
|---|---|
|1	|上传中|
|3|	上传失败|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": [
    {
      "version": "1.2.6",
      "remark": "",
      "msg": "审核通过",
      "committer": "--",
      "status": 1,   // 1:线上版本  3:开发中  4:审核中  5:审核失败  6:审核通过  8:回滚中
      "commit_time": "2018/09/04 17:13:59",
      "version_desc": "desc",
      "package_id": 1,
      "rollback_version": "v1.2.5"
    },
    {
       "version": "1.2.7",
       "commit_time": "2018/09/06 15:32:38",
       "version_desc": "desc",
      "upload_status": 1,  //  1:上传中 3:上传失败
      "upload_status_desc": "上传中"
    }
  ]
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno	|int	|错误码|
|msg	|string|	错误描述信息，用来帮助理解和解决发生的错误|

## 获取授权小程序包详情

```
GET https://openapi.baidu.com/rest/2.0/smartapp/package/getdetail?access_token=ACCESS_TOKEN&type=TYPE&package_id=PACKAGE_ID
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|type|	int|	否|	小程序状态，不指定package_id的情况下默认是线上版本|
|package_id	|long|	否|	代码包id|
代码包状态码表

|type|	含义|
|---|---|
|1|	线上版本|
|3	|开发中|
|4	|审核中|
|5	|审核失败|
|6|	审核通过|
|8|	回滚中|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|version|	string|	版本号|
|remark|	int	|备注|
|msg	|string	|审核信息|
|committer|	string|	提交人|
|status|	int	|状态|
|commit_time|	string|	提交时间|
|version_desc	|string	|版本描述|
|package_id	|string	|代码包Id|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data":  {
        "version": "d0.0.0.2",
        "remark": "",
        "msg": "",
        "committer": "--",
        "status": 4, // 1:线上版本  3:开发中  4:审核中  5:审核失败  6:审核通过  8:回滚中
        "commit_time": "1970/01/19 02:19:13",
        "version_desc": "dddd123",
        "package_id": 201
      }
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int	|错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|
## 附录

Ticket解密算法

1. php代码demo：
```php
<?php
/**
 * PHP AES 加减密
 * @author xzh
 * @date 2018/3/22 下午10:08
 */
class AesEncryptUtil
{
    public static $blockSize = 32;
    //your cliend_id
    private $clientId;
    //your aesKey
    private $aesKey;
    /**
     * AesEncryptNewUtilUtil constructor.
     * @param $clientId
     * @param $encodingAesKey
     */
    public function __construct($clientId, $encodingAesKey)
    {
        $this->clientId = $clientId;
        $this->aesKey = base64_decode($encodingAesKey . "=");
    }
    /**
     * 对明文进行加密
     * @param $text
     * @return string
     * @throws Exception
     */
    public function encrypt($text)
    {
        try {
            // 获得16位随机字符串，填充到明文之前
            $random = $this->getRandomStr();;
            $text = $random . pack("N", strlen($text)) . $text . $this->clientId;
            $iv = substr($this->aesKey, 0, 16);
            // 对明文进行补位填充
            $text = $this->encode($text);
            // 加密
            $encrypted = openssl_encrypt($text, 'aes-256-cbc', $this->aesKey, OPENSSL_RAW_DATA | OPENSSL_NO_PADDING, $iv);
            // 使用BASE64对加密后的字符串进行编码
            return base64_encode($encrypted);
        } catch (Exception $e) {
            throw new Exception("加密失败");
        }
    }
    /**
     * 对密文进行解密
     * @param $encrypted
     * @return bool|string
     * @throws Exception
     */
    public function decrypt($encrypted, $isCheckClientId = true)
    {
        try {
            // 使用BASE64对需要解密的字符串进行解码
            $ciphertextDec = base64_decode($encrypted);
            $iv = substr($this->aesKey, 0, 16);
            // 解密
            $decrypted = openssl_decrypt($ciphertextDec, 'aes-256-cbc', $this->aesKey, OPENSSL_RAW_DATA | OPENSSL_NO_PADDING, $iv);
        } catch (Exception $e) {
            throw new Exception('AesEncryptUtil AES解密串非法，小于16位;');
        }
        try {
            // 去除补位字符
            $result = $this->decode($decrypted);
            // 去除16位随机字符串,网络字节序和clientId
            if (strlen($result) < 16) {
                throw new Exception('AesEncryptUtil AES解密串非法，小于16位;');
            }
            $content = substr($result, 16, strlen($result));
            $lenList = unpack("N", substr($content, 0, 4));
            $xmlLen = $lenList[1];
            $xmlContent = substr($content, 4, $xmlLen);
            $fromClientId = substr($content, $xmlLen + 4);
        } catch (Exception $e) {
            throw new Exception('AesEncryptUtil AES解密串非法，小于16位;');
        }
        if ($isCheckClientId && ($fromClientId != $this->clientId)) {
            throw new Exception('AesEncryptUtil AES解密串非法，小于16位;');
        }
        return $xmlContent;
    }
    /**
     * 对需要加密的明文进行填充补位
     * @param $text
     * @return string
     */
    private function encode($text)
    {
        $textLength = strlen($text);
        //计算需要填充的位数
        $amountToPad = self::$blockSize - ($textLength % self::$blockSize);
        if ($amountToPad == 0) {
            $amountToPad = self::$blockSize;
        }
        //获得补位所用的字符
        $padChr = chr($amountToPad);
        $tmp = "";
        for ($index = 0; $index < $amountToPad; $index++) {
            $tmp .= $padChr;
        }
        return $text . $tmp;
    }
    /**
     * 对解密后的明文进行补位删除
     * @param $text
     * @return bool|string
     */
    private function decode($text)
    {
        $pad = ord(substr($text, -1));
        if ($pad < 1 || $pad > self::$blockSize) {
            $pad = 0;
        }
        return substr($text, 0, (strlen($text) - $pad));
    }
    /**
     * 随机生成16位字符串
     * @return string
     */
    private function getRandomStr()
    {
        $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        $max = strlen($strPol) - 1;
        $str = "";
        for ($i = 0; $i < 16; $i++) {
            $str .= $strPol[mt_rand(0, $max)];
        }
        return $str;
    }
}
$client_id = '12123';
$aes_key = '1234567890123456789012345678901234567890123';
$dataCoder = new AesEncryptUtil($client_id, $aes_key);
$enData = $dataCoder->encrypt("testdata");
$dataCoder->decrypt($enData);
```
2. Java版本代码demo：
``` java
/**
 * JAVA AES 加减密
 *
 * @date 2018/2/25 下午4:13
 */
public class AesEncryptUtil {
    private static Charset CHARSET = Charset.forName("utf-8");
    private Base64 base64 = new Base64();
    private byte[] aesKey;
    private String token;
    private String clientId;
    /**
     * 构造函数
     *
     * @param encodingAesKey 开发者encodingAESKey
     * @param clientId       开发者clientId
     *
     * @throws TpException 异常错误信息
     */
    public AesEncryptUtil(String encodingAesKey, String clientId) throws TpException {
        int encodingAesKeyLength = 43;
        if (encodingAesKey.length() != encodingAesKeyLength) {
            throw new TpException(TpErrorEnum.ILLEGAL_AES_KEY_ERROR);
        }
        this.clientId = clientId;
        aesKey = Base64.decodeBase64(encodingAesKey + "=");
    }
    /**
     * 构造函数
     *
     * @param token          开发者token
     * @param encodingAesKey 开发者encodingAESKey
     * @param clientId       开发者clientId
     *
     * @throws TpException 异常错误信息
     */
    public AesEncryptUtil(String token, String encodingAesKey, String clientId) throws TpException {
        int encodingAesKeyLength = 43;
        if (encodingAesKey.length() != encodingAesKeyLength) {
            throw new TpException(TpErrorEnum.ILLEGAL_AES_KEY_ERROR);
        }
        this.token = token;
        this.clientId = clientId;
        aesKey = Base64.decodeBase64(encodingAesKey + "=");
    }
    /**
     * 生成4个字节的网络字节序
     *
     * @param sourceNumber 文本长度
     *
     * @return orderBytes
     */
    private byte[] getNetworkBytesOrder(int sourceNumber) {
        byte[] orderBytes = new byte[4];
        orderBytes[3] = (byte) (sourceNumber & 0xFF);
        orderBytes[2] = (byte) (sourceNumber >> 8 & 0xFF);
        orderBytes[1] = (byte) (sourceNumber >> 16 & 0xFF);
        orderBytes[0] = (byte) (sourceNumber >> 24 & 0xFF);
        return orderBytes;
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
     * 随机生成16位字符串
     *
     * @return 随机串
     */
    public String getRandomStr() {
        String base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        StringBuilder stringBuild = new StringBuilder();
        int randStrLength = 16;
        for (int i = 0; i < randStrLength; i++) {
            int number = random.nextInt(base.length());
            stringBuild.append(base.charAt(number));
        }
        return stringBuild.toString();
    }
    /**
     * 对明文进行加密
     *
     * @param text 待加密明文
     *
     * @return 加密后base64编码的字符串
     *
     * @throws TpException 异常错误信息
     */
    public String encrypt(String randomStr, String text) throws TpException {
        ByteGroup byteCollector = new ByteGroup();
        byte[] randomStrBytes = randomStr.getBytes(CHARSET);
        byte[] textBytes = text.getBytes(CHARSET);
        byte[] networkBytesOrder = getNetworkBytesOrder(textBytes.length);
        byte[] clientIdBytes = clientId.getBytes(CHARSET);
        byteCollector.addBytes(randomStrBytes);
        byteCollector.addBytes(networkBytesOrder);
        byteCollector.addBytes(textBytes);
        byteCollector.addBytes(clientIdBytes);
        byte[] padBytes = PKCS7Encoder.encode(byteCollector.size());
        byteCollector.addBytes(padBytes);
        byte[] unencrypted = byteCollector.toBytes();
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
            SecretKeySpec keySpec = new SecretKeySpec(aesKey, "AES");
            IvParameterSpec iv = new IvParameterSpec(aesKey, 0, 16);
            cipher.init(Cipher.ENCRYPT_MODE, keySpec, iv);
            byte[] encrypted = cipher.doFinal(unencrypted);
            return base64.encodeToString(encrypted);
        } catch (Exception e) {
            throw new TpException(TpErrorEnum.ENCRYPT_AES_ERROR);
        }
    }
    /**
     * 对密文进行解密
     *
     * @param text 需要解密的密文
     *
     * @return 解密得到的明文
     *
     * @throws TpException 异常错误信息
     */
    public String decrypt(String text)
            throws TpException {
        byte[] original;
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
            SecretKeySpec keySpec = new SecretKeySpec(aesKey, "AES");
            IvParameterSpec iv = new IvParameterSpec(Arrays.copyOfRange(aesKey, 0, 16));
            cipher.init(Cipher.DECRYPT_MODE, keySpec, iv);
            byte[] encrypted = Base64.decodeBase64(text);
            original = cipher.doFinal(encrypted);
        } catch (Exception e) {
            throw new TpException(TpErrorEnum.DECRYPT_AES_ERROR);
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
            throw new TpException(TpErrorEnum.ILLEGAL_BUFFER_ERROR);
        }
        return xmlContent;
    }
    /**
     * 加密机密demo
     * @param args
     */
    public static void main(String[] args) {
        String clientId = "1172";
        String key = "ql1234fnhsjndyskemdlsowerfvmjhxswedfrtgbqwe";
        AesEncryptUtil aesEncryptUtil = new AesEncryptUtil(key, clientId);
        String enData = aesEncryptUtil.encrypt(aesEncryptUtil.getRandomStr(), "test");
        String deData = aesEncryptUtil.decrypt(data);
    }
    ```
