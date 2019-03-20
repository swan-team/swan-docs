---
title: 配置页面基础信息
header: develop
nav: api
sidebar: pageinfo
---
配置页面基础信息接口，目前仅支持 Web 化使用，推荐使用 setPageInfo 。
> setMetaDescription/setMetaKeywords/setDocumentTitle 已停止维护。

## setPageInfo
智能小程序可接入百度搜索和百度 App 信息流，swan.setPageInfo 负责为小程序设置各类页面基础信息，包括标题、关键字、页面描述以及图片信息、视频信息等。

开发者为智能小程序设置完备的页面基础信息，有助于智能小程序在搜索引擎和信息流中得到更加有效的展示和分发。
> 建议在 onShow 生命周期中使用。
### Object参数说明

|参数名 | 类型 | 必填 | 说明 |
|---|---|---|---|
|title | String | 是 | 页面标题 |
|keywords|String|是|页面关键字|
|description|String|是| 页面描述信息|
|releaseData|String|是|原始发布时间(年-月-日 时:分:秒 带有前导零）|
|articleTitle | String | 否 | 文章(内容)标题(适用于当前页面是图文、视频类的展示形式，文章标题需要准确标识当前文章的主要信息点；至少6个字，不可以全英文。) |
|image|String/Array|否（页面有焦点图，或者正文有图片时需要设置）|图片线上地址，用于信息流投放后的封面显示，最多3张，单图片最大2M；封面图建议尺寸：高>=210px & 宽>=375px；最小尺寸：高>=146px & 宽>=218px。多张图时，用数组表示|
|video|Object/Array|否（页面存在视频情况下必填）|视频信息，多个视频时，用数组表示|
|success | Function | 否 | 接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行） |

video参数说明

|参数名 | 类型 | 必填 | 说明 |
|---|---|---|---|
|url | String | 是 |视频地址|
|duration|String|是| 视频时长(单位为秒)	|
|image|String|是|视频封面图	|

### 说明
1、releaseData、articleTitle、image、video 内容用于百度 APP 信息流抓取收录分发，并有助于搜索准确理解页面内容。
2、title字段搜索抓取用于当前页面，articleTitle 字段用于当前页面在百度APP信息流中的标题展示。
3、当前页面包含视频信息时 video 为必填字段，url、duration、image为 video 的必填参数；如当前页面不包含视频信息，可不填写。
4、当前页面包含焦点图或者正文图片 image 为必填字段。

### 示例

``` js
    swan.setPageInfo && swan.setPageInfo({
        title: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！-百度贴吧',
        keywords: '百度,百度贴吧,好运中国年,60,晒元,宵节',
        description: '晒元宵节活动红包，爱..昨天的百度APP元宵节活动中，共发出2亿现金红包、含151万个手气现金大奖和240辆红旗轿车，谁是好运锦鲤，快来分享！马上惊喜升级~摇中红包的锦鲤们即刻晒出红包金额截图，我们将会抽取660位好运锦鲤',
        articleTitle: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！',
        releaseDate: '2019-01-02 12:01:30',
        // 单张图时值可以是字符串
        image: [
            'http://c.hiphotos.baidu.com/forum/w%3D480/sign=73c62dda83b1cb133e693d1bed5456da/f33725109313b07e8dee163d02d7912396dd8cfe.jpg',
            'https://hiphotos.baidu.com/fex/%70%69%63/item/43a7d933c895d143e7b745607ef082025baf07ab.jpg'
        ],
        video: [{
            url: 'https://www.baidu.com/mx/v12.mp4',
            duration: '100',
            image: 'https://smartprogram.baidu.com/docs/img/image-scaleToFill.png'
        }],
        success: function () {
            console.log('页面基础信息设置完成');
        }
	})
```
## setMetaDescription

> 不推荐使用。
**解释：** 设置 web 版小程序 description meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
| content |  String  |是  | 需要设置的 description 内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setMetaDescription && swan.setMetaDescription({
    content: '当前小程序页面描述信息',
    success: function (res) {
        console.log('设置成功');
    },
    fail: function (res) {
        console.log('设置失败');
    },
    complete: function (res) {
	    console.log('设置失败');
    }
});
```

## setMetaKeywords

> 不推荐使用。
**解释：** 设置 web 版小程序 keywords meta 信息。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
| content |  String  |是 | 需要设置的 keywords 内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setMetaKeywords && swan.setMetaKeywords({
    content: '小程序, 关键字',
    success: function (res) {
        console.log('设置成功');
    },
    fail: function (res) {
        console.log('设置失败');
    },
    complete: function (res) {
	    console.log('设置失败');
    }
});
```


## setDocumentTitle

> 不推荐使用。
**解释：**动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title   |String|  是 | 页面中 title 标签中的内容 |
|success |Function |   否 |  接口调用成功的回调函数|
|fail   | Function|    否 |  接口调用失败的回调函数|
|complete   | Function   | 否|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setDocumentTitle && swan.setDocumentTitle({
    title: '我是页面标题'
});
```
