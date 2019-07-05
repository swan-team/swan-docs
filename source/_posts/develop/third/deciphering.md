---
title: 错误码对照表
header: develop
nav: third
sidebar: deciphering
---


### 1. php代码demo：
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
### 2. Java版本代码demo：
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
    
