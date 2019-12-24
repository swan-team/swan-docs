---
title: smt-md5
header: develop
nav: extensions
sidebar: smt-md5
---

**解释：** 在小程序开发中，没有window的概念，导致市面上很多绑定DOM或者BOM的三方库无法使用，smt-md5是官方提供的md5和base64算法库。



小程序种使用三方npm包方法，见<a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>

```
    npm install @smt-lib/md5
```


> encodeHex(string)

** `encodeHex方法`说明 **
**`string`参数说明**： 要转换的字符串。



#### 代码示例


```
import {encodeHex} from '@smt-lib/md5';

const string = 'abcdefghigklmn';
const md5edString = encodeHex(string);

```


> encodeBase64(string)

** `encodeBase64方法`说明 **
**`string`参数说明**： 要转换的字符串。


#### 代码示例


```
import {encodeBase64} from '@smt-lib/md5';

const string = 'abcdefghigklmn';
const base64edString = encodeBase64(string);

```