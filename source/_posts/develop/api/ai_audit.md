---
title: 图像审核
header: develop
nav: api
sidebar: ai_audit
---
## swan.ai.imageAudit

**解释**：自定义图像审核。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|image|	String|是| - |图像资源地址|
|imgUrl|	String|	否|- |网图URL地址，以网图形式请求，图片Url需要做UrlEncode，不能与image并存。|
|success |Function    |否 |  -|      接口调用成功的回调函数|
|fail |   Function|    否  |   -|     接口调用失败的回调函数|
|complete  |  Function  |  否| -|    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 | 类型 | 	说明  |
|---- | ---- | ---- |
|log_id|	Long|		请求唯一id|
|conclusion|	String|	审核结果描述，成功才返回，失败不返回。|
|conclusionType|	Number|	审核结果标识，成功才返回，失败不返回。|
|data|	Array|		审核项详细信息，响应成功并且conclusion为疑似或不合规时才返回，响应失败或conclusion为合规是不返回。|
|+type|	Number|		审核类型，1：色情、2：性感、3：暴恐、4：恶心、5：水印码、6：二维码、7：条形码、8：政治人物、9：敏感词、10：自定义敏感词、11: 存在公众人物。|
|+msg|	String|	不合规项描述信息|
|+probability|	Number|	不合规项置信度|
|+stars|	Array|	政治人物列表数组，仅在政治人物审核不通过时存在。|
|+words|	String|		审核不通过敏感词，仅在敏感词审核不通过时存在。|

**conclusion、conclusionType参数说明**：

|参数 |说明  |
|---- | ---- |
|1 | 合规 |
|2 | 不合规 |
|3 | 疑似 |
|4 | 审核失败 |

**示例**：

<a href="swanide://fragment/f7e9e4806e3926c69b89814e8d2cd15a1558354829667" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
swan.chooseImage({
  success(res) {
    let image = res.tempFilePaths[0];
    swan.ai.imageAudit({
      image,
      success(res) {
        console.log(res.conclusionType); // 1 为合规
      }
    });
  }
});
```

**返回值示例**：
```json
{
    "log_id": $log_id,
    "conclusion": "不合规",
    "conclusionType": 2,
    "data": [
        {
            "msg": "存在色情内容",
            "probability": 0.94308,
            "type": 1
        },
        {
            "msg": "存在性感内容",
            "probability": 0.94308,
            "type": 2
        },
        {
            "msg": "存在暴恐内容",
            "probability": 0.94308,
            "type": 3
        },
        {
            "msg": "存在恶心内容",
            "probability": 0.9688154,
            "type": 4
        },
        {
            "msg": "存在政治敏感内容",
            "stars": [
                {
                    "probability": 0.94308,
                    "name": "习近平"
                },
                {
                    "probability": 0.44308,
                    "name": "彭丽媛"
                }
            ],
            "type": 8
        },
        {
            "msg": "存在二维码内容",
            "probability": 0.94308,
            "type": 6
        },
        {
            "msg": "存在水印码内容",
            "probability": 0.94308,
            "type": 5
        },
        {
            "msg": "存在条形码内容",
            "probability": 0.94308,
            "type": 7
        },
        {
            "msg": "包含联系方式",
            "probability": 0.94308,
            "words": "包含联系方式",
            "type": 8
        }
    ]
}
```

