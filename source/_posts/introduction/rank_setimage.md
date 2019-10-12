---
title: 搜索结果出图配置
header: introduction
nav: book
sidebar: rank_setimage
---


1. 搜索结果出图介绍
搜索结果中展现图片，一方面可以让搜索用户有更好的浏览体验，同时也可以为搜索结果带来更多点击。现在面对智能小程序推出搜索结果出图权益，允许开发者推荐智能小程序在搜索结果中展示的图片。搜索结果出图的图片样式共分两种，一图样式和三图样式，现阶段一图样式已全量开放，三图样式内测逐渐开放中。


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../img/introduction/rank/rank0916.png"> 
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="../../img/introduction/rank/rank09161.png"> 
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="../../img/introduction/rank/rank0919.png">
    </div>     
</div>

2. 如何配置搜索结果出图？
（1）代码改造
在智能小程序页面开发工具中，在【API】>【开放接口】>【页面基础信息】部分，调用[swan.setPageInfo](https://smartprogram.baidu.com/docs/develop/api/pageinfo/#swan-setPageInfo/)方法，通过修改image参数来配置希望在搜索结果页展现的图片。可以配置1图或者3图，3图时用数组表示。

>不建议配置1或3以外数量的图片，否则将无法正常展现。

举例：配置3图时，代码应按如下格式编写：

```
    swan.setPageInfo({
                      title: '页面标题',
                      keywords: '关键词1,关键词2',
                      description: '页面简介',
                      articleTitle: '文章标题',
                      releaseDate: '2019-01-02 12:01:30',
                      image: [
                             'https://www.example.com/***/pic1.png',
                             'https://www.example.com/***/pic2.png',
                             'https://www.example.com/***/pic3.png'
                      ],
           ...})
```
（2）资源提交
页面信息配置完毕后，将小程序资源通过进自然搜索的一般通路提交。如天级通路、周级通路等均可。搜索经过约五个工作日的处理即可生效。
3. 搜索建议提交什么图片？
（1）宽高比为（或近似为）3：2；
（2）大小不低于375px * 250px；
（3）提交的图片要和小程序落地页中的图片完全一致，即图片出自主体内容，且与文本信息强相关。
4. 搜索拒绝接收什么图片？
（1）涉及低俗、色情、反动等内容的图片；
（2）动态图片；
（3）纯文字图、纯色图、内容令人不适等影响用户浏览体验的图片；
（4）含有二维码、联系电话、微信号等推广营销内容或方式的图片；
（5）水印过于明显，以至于大面积覆盖主要内容的图片。