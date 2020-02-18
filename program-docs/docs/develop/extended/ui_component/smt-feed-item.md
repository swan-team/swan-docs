---
title: feed-item 信息流子项
header: develop
nav: extended
sidebar: smt-feed-item
webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-feed-item/smt-feed-item
---

**解释：** 信息流子项，包括左文右图、纯文本、上文下图、多图及视频模式。


##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|theme |string |否|default|信息流子项的主题：default是左文右图模式，如不配置content中的images则是纯文本子项；large-image是大图模式；multiple-images是多图模式|
|content |Object |否|{title: &#39;这个是子项的标题&#39;,infoSource: &#39;百度新闻&#39;,commentsNum: 2,images: []}|信息流子项目的内容，包含标题（title），消息来源（infoSource），评论数（commentsNum），图片路径（images）|
|video |Object |否|{isVideo: true, time: &#39;05:00&#39;}|是否为视频和视频信息，配置isVideo为true，则显示视频形式（注：在多图模式不生效）|
|status |String |否|0|阅读状态：0未读，1已读|

## 示例

<a href="swanide://fragment/afebdafc13cda2201207a3d6721577481577175550244" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-feed-item.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-feed-item.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<smt-feed-item 
    theme="{{theme}}"
    content="{{content}}" 
    video="{{video}}"
    status="{{status}}"
>
</smt-feed-item>
```


* 在 js 文件中

```javascript
Page({ 

    data: {
        theme: 'default',
        content: {
            title: '这个是子项的标题',
            infoSource: '百度新闻',
            commentsNum: 2,
            images: []
        },
        video: {
            isVideo: true,
            time: '02:00'
        },
        status: '0'
    }
});

```




