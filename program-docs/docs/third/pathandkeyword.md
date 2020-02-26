---
title: 核心页面与关键词
header: third
nav: third
---
### 添加核心页面与关键词

核心页面用于在搜索结果页展示核心页面的关键内容信息。配置的标题和描述需与页面内容相匹配，否则影响审核通过率。

核心页面搜索关键词用于搜索场景分发核心页面的小程序卡片，关键词仅支持中文、英文，不支持“,”“@”等特殊字符和空格。每个关键词长度为4-20个字符。每个小程序可添加10个核心页面，每个核心页面至少添加一个关键词，最多可添加10个关键词。

>注意：<br>
>1、核心页面：该页面需要在小程序首页有稳定可见的固定入口，暂时不支持短期时效性活动页面。<br>
>2、关键词：类型可为“小程序名称+对应页面描述词”、“对应页面描述词”，不含小程序名称的词必须要精准描述功能/内容，否则不予通过。<br>
>3、同一个小程序的同一关键词只能描述一个功能页/频道页，不同频道页之间的关键词不得重复提交。

<br>

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/path/addPathAndKeywords
```

**公共请求参数**:

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | access_token，授权小程序的接口调用凭据 |

**请求参数**:

| 参数名   | 类型   | 是否必须 | 描述                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| path     | string | 是       | 页面path。以"/"开头的页面path地址                            |
| title    | string | 否       | 单卡标题。字符限制在4-12之间；当path为核心页面会复用小程序名称 |
| desc     | string | 否       | 单卡描述。字符限制在1-56之间；当path为核心页面会复用小程序描述 |
| keywords | string | 是       | 核心页面搜索关键词。每个关键词限制为4-20个字符，多个关键词使用","拼接 |

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

  

**请求实例**

```
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/path/addPathAndKeywords?access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&path=/path&title=title&desc=desc&keywords=wordOne,wordTwo' 
```

**响应示例**:

```
{
    "errno": 0,
    "msg": "success"
}
```

### 更新核心页面与关键字

更新核心页面与核心页面搜索关键字

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/path/updatePathAndKeywords
```

**公共请求参数**:

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | access_token，授权小程序的接口调用凭据 |

**请求参数**:

| 参数名   | 类型   | 是否必须 | 描述                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| old_path | string | 是       | 更新之前的旧的页面path。以"/"开头的页面path地址              |
| new_path | string | 是       | 更新之后的新的页面path。以"/"开头的页面path地址              |
| title    | string | 否       | 单卡标题。字符限制在4-12之间；当path为核心页面会复用小程序名称 |
| desc     | string | 否       | 单卡描述。字符限制在1-56之间；当path为核心页面会复用小程序描述 |
| keywords | string | 是       | 核心页面搜索关键词。每个关键词限制为4-20个字符，多个关键词使用","拼接 |

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

  

**请求实例**

```
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/path/updatePathAndKeywords?access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&old_path=/oldpath&new_path=/newpath&title=title&desc=desc&keywords=wordOne,workTwo'
```

**响应示例**:

```
{
    "errno": 0,
    "msg": "success"
}
```

### 删除核心页面与关键字

删除核心页面及其底下的核心页面搜索关键字

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/path/deletePath
```

**公共请求参数**:

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | access_token，授权小程序的接口调用凭据 |

**请求参数**:

| 参数名 | 类型   | 是否必须 | 描述                              |
| ------ | ------ | -------- | --------------------------------- |
| path   | string | 是       | 页面path。以"/"开头的页面path地址 |

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

  

**请求实例**

```
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/path/deletePath?access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&path=/path' 
```

**响应示例**:

```
{
    "errno": 0,
    "msg": "success"
}
```


### 获取核心页面与关键字信息

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/path/getPathInfo
```

**公共请求参数**:

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | access_token，授权小程序的接口调用凭据 |

**请求参数**:

| 参数名 | 类型   | 是否必须 | 描述                                                    |
| ------ | ------ | -------- | ------------------------------------------------------- |
| path   | string | 否       | 页面path。以"/"开头的页面path地址；参数为空代表获取所有 |

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**响应参数**

| 字段名      | 类型 | 描述           |
| ----------- | ---- | -------------- |
| app_id | long | 小程序id。 |
| path | string | 页面path。 |
| title | string | 单卡标题。 |
| desc | string | 单卡描述。 |
| audit_status | int | 审核状态。0:机审拒绝 <br>1:机审通过<br>2:人审通过<br>3:人审拒绝<br>4:待审核<br>5:待机审审核 |
| audit_msg | string | 审核信息。 |
| keywords | List | 核心页面搜索关键词列表。 |

| 字段名      | 类型 | 描述           |
| ----------- | ---- | -------------- |
| keyword | string | 核心页面搜索关键词名称。 |
| auditStatus | int | 审核状态。0:机审拒绝<br>1:机审通过<br>2:人审通过<br>3:人审拒绝<br>4:待审核<br>5:待机审审核 |
| auditMsg | string | 审核信息。 |

**请求实例**

```
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/path/getPathInfo？access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&path=/path' 
```

**响应示例**:

```
{
    "errno":0,
    "msg":"success",
    "data":[
        {
            "app_id":1482638025,
            "path":"/path1",
            "title":"title1",
            "desc":"desc1",
            "audit_status":4,
            "audit_msg":"",
            "keywords":[
                {
                    "keyword":"关键词one",
                    "auditStatus":4,
                    "auditMsg":""
                },
                {
                    "keyword":"关键词two",
                    "auditStatus":4,
                    "auditMsg":""
                }
            ]
        },
        {
            "app_id":1482638025,
            "path":"/path2",
            "title":"title2",
            "desc":"desc2",
            "audit_status":4,
            "audit_msg":"",
            "keywords":[
                {
                    "keyword":"关键词one",
                    "auditStatus":4,
                    "auditMsg":""
                },
                {
                    "keyword":"关键词two",
                    "auditStatus":4,
                    "auditMsg":""
                }
            ]
        }
    ]
}
```

### 推送审核结果相关通知

POST数据示例（审核成功通知）

```
{
    "path":"/path",
    "reason":"人审通过",
    "appId":17070187,
    "eventTime":"2020-02-11 15:46:47",
    "examineId":0,
    "tpAppId":1482627173,
    "event":"APP_SEARCH_PATH_AUDIT_PASS",
    "keywordsList":[
        {
            "keywords":"关键词one",
            "auditResult":"success"
        },
        {
            "keywords":"关键词two",
            "auditResult":"success"
        }
    ]
}
```

POST数据示例（授权失败通知）

```
{
    "path":"/path",
    "reason":"该文案不符合规范-标题或描述文案词义不通",
    "appId":17070187,
    "eventTime":"2020-02-11 15:53:12",
    "examineId":0,
    "tpAppId":1482627173,
    "event":"APP_SEARCH_PATH_AUDIT_FAIL",
    "keywordsList":[
        {
            "keywords":"关键词one",
            "auditResult":"fail",
            "reason":"该关键词对应的小程序页面功能用户体验较差或不可用，请优化后提交，多谢！"
        },
        {
            "keywords":"关键词two",
            "auditResult":"fail",
            "reason":"该关键词对应的小程序页面功能用户体验较差或不可用，请优化后提交，多谢！"
        }
    ]
}
```

#### 参数说明

| 参数名       | 类型   | 描述                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| path         | string | 页面path。                                                   |
| reason       | string | 审核信息。                                                   |
| appId        | long   | 小程序AppId。                                                |
| tpAppId      | long   | 第三方平台id。                                               |
| event        | string | APP_SEARCH_PATH_AUDIT_SUCCESS:审核成功<br>APP_SEARCH_PATH_AUDIT_FAIL:审核失败 |
| eventTime    | string | 事件发生时间。                                               |
| examineId    | long   | 审核Id。                                                     |
| keywordsList | array  | 关键词列表。                                                 |

`keywordsList`参数说明：

| 参数名      | 类型   | 描述                    |
| ----------- | ------ | ----------------------- |
| keywords    | string | 核心页面关键词。        |
| auditResult | string | 审核结果。success、fail |
| reason      | string | 审核信息原因。          |


