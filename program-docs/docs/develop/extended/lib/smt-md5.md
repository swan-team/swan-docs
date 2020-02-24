---
title: md5
header: develop
nav: extended
sidebar: smt-md5
---

**解释：** 在小程序开发中，没有window的概念，导致市面上很多绑定DOM或者BOM的三方库无法使用，smt-md5是官方提供的md5和base64算法库。小程序种使用三方npm包方法，见<a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>。





## 方法参数

 

### encodeHex 方法参数说明：

| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| string | string | 是 | | 要转换的字符串 |


### encodeBase64 方法参数说明：

| 参数 | 类型  | 必填 | 默认值 |说明|
| ---- | ---- | ---- | ----|----|
| string | string | 是 | | 要转换的字符串 |


## 示例



### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/subPackages_extensionsPackage_component_pages_smt-md5.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/ezgif.com-video-to-gif.gif">
    </div>   
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div> 
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div> 
</div>


### 代码示例

<a href="swanide://fragment/a2fd41013108ef8395691d310f4a97181578391168519" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


 
```
    npm install @smt-lib/md5
```



```
import {encodeHex} from '@smt-lib/md5';

const string = 'abcdefghigklmn';
const md5edString = encodeHex(string);

```



### 代码示例
<a href="swanide://fragment/0f13c971c1c7e89b3b9b0550e76523ca1578391302547" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```
import {encodeBase64} from '@smt-lib/md5';

const string = 'abcdefghigklmn';
const base64edString = encodeBase64(string);

```