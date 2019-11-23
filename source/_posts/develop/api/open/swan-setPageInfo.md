---
title: swan.setPageInfo
header: develop
nav: api
sidebar: swan-setPageInfo
---
配置页面基础信息接口，目前仅支持 Web 化使用，推荐使用 setPageInfo 。
> setMetaDescription/setMetaKeywords/setDocumentTitle 已停止维护。

 
>建议在 Page 的 onShow 生命周期中使用。由于onShow 生命周期会在用户前进后退时触发，若数据来自 onLoad 等其他生命周期，建议使用变量形式存储并在 onShow 中调用 setPageInfo 函数，详情参见下面的代码示例二。

**解释**：智能小程序可接入百度搜索和宿主 App 信息流，swan.setPageInfo 负责为小程序设置各类页面基础信息，包括标题、关键字、页面描述以及图片信息、视频信息等。开发者为智能小程序设置完备的页面基础信息，有助于智能小程序在搜索引擎和信息流中得到更加有效的展示和分发。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title | String | 是 ||页面标题 |
|keywords|String|是| |页面关键词，多个关键词之间使用英文逗号“,”隔开|
|description|String|是| | 页面描述信息|
|releaseDate|String|否（入宿主APP信息流为必填）| |原始发布时间(年-月-日 时:分:秒 带有前导零）|
|articleTitle | String | 否 | | 文章(内容)标题(适用于当前页面是图文、视频类的展示形式，文章标题需要准确标识当前文章的主要信息点；至少6个字，不可以全英文。) |
|image|String/Array|否（页面有焦点图，或者正文有图片时需要设置）| |图片线上地址，用于信息流/搜索等流量场景分发、用户收藏后的页面封面显示，展现时有图片可提升用户点击率。开发者可针对一个页面设置最多3张，图片必须为页面内图片。单图片最大2M；封面图尺寸：宽>=375px，高>=250px，图片宽高比例3：2为佳。多张图时，用数组表示。|
|video|Object/Array|否（页面存在视频情况下必填）| |视频信息，多个视频时，用数组表示|
|visit|Object|否| |浏览信息。最低支持版本3.40.6。|
|likes|String|否| |点赞量，若页面未统计可为空。最低支持版本3.40.6。|
|comments|String|否| |评论量，若页面未统计可为空。最低支持版本3.40.6。|
|collects|String|否| |收藏量，若页面未统计可为空。最低支持版本3.40.6。|
|shares|String|否| |分享量，若页面未统计可为空。最低支持版本3.40.6。|
|followers|String|否| |关注量，若页面未统计可为空。最低支持版本3.40.6。|
|success | Function | 否 | | 接口调用成功的回调函数|
|fail|Function|否| |接口调用失败的回调函数|
|complete|Function|否| |接口调用结束的回调函数（调用成功、失败都会执行） |

**video 参数说明**

|参数名 | 类型 | 必填 | 说明 |
|---|---|---|---|
|url | String | 是 |视频地址|
|duration|String|是| 视频时长(单位为秒)	|
|image|String|是|视频封面图	|

**visit 参数说明**

|参数名 | 类型 | 必填 | 说明 |
|---|---|---|---|
|pv |String|否| 页面的浏览量(不去重用户）|
|uv |String|否| 页面的点击量（去重用户）|
|sessionDuration |String|否| 页面的用户人均停留时长，以秒为单位。|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setPageInfo1.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例一**：

<a href="swanide://fragment/77076cb84baae5c32c01c014830348a01559045869146" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```js
Page({
    onShow() {
        swan.setPageInfo({
            title: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！-百度贴吧',
            keywords: '百度,百度贴吧,好运中国年,60,晒元,宵节',
            description: '晒元宵节活动红包，爱..昨天的百度APP元宵节活动中，共发出2亿现金红包、含151万个手气现金大奖和240辆红旗轿车，谁是好运锦鲤，快来分享！马上惊喜升级~摇中红包的锦鲤们即刻晒出红包金额截图，我们将会抽取660位好运锦鲤',
            articleTitle: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！',
            releaseDate: '2019-01-02 12:01:30',
            image: [
                'http://c.hiphotos.baidu.com/forum/w%3D480/sign=73c62dda83b1cb133e693d1bed5456da/f33725109313b07e8dee163d02d7912396dd8cfe.jpg',
                'https://hiphotos.baidu.com/fex/%70%69%63/item/43a7d933c895d143e7b745607ef082025baf07ab.jpg'
            ],
            video: [{
                url: 'https://www.baidu.com/mx/v12.mp4',
                duration: '100',
                image: 'https://smartprogram.baidu.com/docs/img/image-scaleToFill.png'
            }],
            visit: {
                pv: '1000',
                uv: '100',
                sessionDuration: '130'
            },
            likes: '75',
            comments: '13',
            collects: '23',
            shares: '8',
            followers: '35',
            success: res => {
                console.log('setPageInfo success');
            },
            fail: err => {
                console.log('setPageInfo fail', err);
            }
        })
    }
});
```
**代码示例二**：

<a href="swanide://fragment/bf43efd15ae91588292ba1286286db1d1574349912843" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**在 js 文件中**

```js
Page({
    data: { },
    onLoad() {
        this.requestTask = new Promise((resolve, reject) => {
            const requestHandler = swan.request({
                url: '开发者服务器地址',
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                dataType: 'json',
                responseType: 'text',
                data: {
                    key: 'value'
                },
                success: res => {
                    this.setData('data', res.data);
                    resolve();
                },
                fail: err => {
                    console.log('错误码：' + err.errCode);
                    console.log('错误信息：' + err.errMsg);
                }
            })
        });
    },
    onShow() {
        this.requestTask.then( requestData => {
            let res = this.getData('data');
            swan.setPageInfo({
                title: res.title,
                keywords: res.keywords,
                description: res.description,
                articleTitle: res.articleTitle,
                releaseDate: res.releaseDate,
                image: res.image,
                video: res.video,
                visit: res.visit,
                likes: '75',
                comments: '13',
                collects: '23',
                shares: '8',
                followers: '35',
                success: res => {
                    console.log('setPageInfo success');
                },
                fail: err => {
                    console.log('setPageInfo fail', err);
                }
            })
        })
    }
});
```

**Bug & Tip**

1. releaseData、articleTitle、image、video 、visit 内容用于宿主 APP 信息流抓取收录分发，并有助于搜索准确理解页面内容。
2. title字段搜索抓取用于当前页面，articleTitle 字段用于当前页面在宿主APP信息流中的标题展示。
3. 当前页面包含视频信息时 video 为必填字段，url、duration、image为 video 的必填参数；如当前页面不包含视频信息，可不填写。
4. 当前页面包含焦点图或者正文图片 image 为必填字段。
5. 当前页面能够统计到用户分发、互动和时长等数据时，visit字段建议填写。开发者可根据页面实际统计的情况完善pv、uv、sessionDuration、likes、comments、collects、shares、followers字段，若页面不包含以上字段时，可不填写。

