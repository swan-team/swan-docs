---
title: submitresource
header: develop
nav: serverapi
sidebar: submitresource
---

 

## 提交物料资源 

**解释**：提交/修改素材接口，API实时接口提交方式。
> 若有资源在小程序内需要提交或资源推送错误需要修改（或更新）的情况，请调用该接口进行资源的提交，该提交方式适用于少量的素材提交，每天有500次调用限制，如果素材量大建议使用sitemap的方式。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/submitresource 
```
**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|小程序权限校验Token|--|
**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|int|否|app_id|--|
|body|string|是|消息体，物料的介绍|以小程序粒度推送时，请填写小程序的详细介绍<br>示例：爱说唱是一款基于百度语音技术的智能小程序。即便你对嘻哈音乐一窍不通，只需对它说上几句话，便可智能合成最酷的嘻哈音乐。同时还支持歌词查看和等功能，在线即可完成rap单曲的创作和分享。来吧，让我们在嘻哈的世界肆意妄为，一起Freestyle吧！<br>以图文粒度推送时，请填写内容的正文<br>示例：智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验<br>以视频粒度推送时，请填写视频的详细介绍<br>示例：此片是当年为张国荣的参演而度身订造的电影，这也是他的歌唱和演艺事业的高峰时期。由包括人气歌手露云娜、偶像锺保罗等多位明星合演，片中以张国荣为首的角色最为丰富。|
|ext|string|否|扩展信息（JSON格式，参考附录三）|{"publish_time": "2018年11月1日"}|
|feed_sub_type|string|否|feed二级分类（参考附录二）|明星八卦（可选有限集合）|
|feed_type|string|是|feed一级分类（参考附录二）|娱乐（可选有限集合）|
|images|string|是|封面图片链接，要求必须是JSON格式，最多3张，单图片最大不能超2M，只支持JPG或PNG格式（jpeg不支持），尺寸要求：宽不能低于372px，且高不能低于248px。**重要提示：图片尺寸越大、清晰度越高、宽高比越接近3:2，越有助于降低不可用风险，促进分发。**|["https://b.bdstatic.com/miniapp/resource/image/demo1.png", "https://b.bdstatic.com/miniapp/resource/image/demo2.png"]|
|mapp_sub_type|string|是|资源子类型（参考附录一）|1001|
|mapp_type|string|是|资源类型（参考附录一）|1000|
|path|string|是|智能小程序落地页链接|/pages/detail/detail?id=100001|
|tags|string|否|资源标签，英文逗号分割，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字）|示例：电影,吴亦凡|
|title|string|是|标题|百度智能小程序，给你全新的智能体验|
**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|
  


**响应示例** 

```json
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```








