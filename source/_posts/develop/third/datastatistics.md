---
title: 数据统计分析
header: develop
nav: third
sidebar: datastatistics
---

提供给第三方平台调用的小程序纬度相关的统计数据，需要第三方平台支持**数据权限（唯一性权限）**，同时需要小程序授予该权限给予第三方平台，使用小程序授权给第三方平台生成的token进行调用。
主要提供以下几个方面的接口：

1. 用户趋势
2. 活跃用户
3. 活跃用户留存
4. 用户画像
5. 地域分布
6. 终端分布
7. 页面分析
8. 用户习惯
9. 来源分析
10. TP平台数据汇总(TP平台纬度）

### 统一错误返回格式

| 参数  | 说明     |
| ----- | -------- |
| errno | 状态码   |
| msg   | 状态信息 |

返回示例：

```json
{
    "errno":0,
    "msg":"xxx"
}    
```

### 请求参数 gran 说明

针对参数需要参数gran的接口，需要特别注意下，说明如下：

gran支持的类型分为 hour、day、week、month四种类型。gran是为了明确数据粒度，即作为统计的数据范围。

以用户趋势数据为例，如：取 2019/04/01 - 2019/04/15 时间范围内

* 若 gran 为 hour，返回的数据范围为：**00:00 - 00:59**、**01:00 - 01:59**、…、**23:00 - 23:59**
* 若 gran 为 day， 返回的数据范围为：**2019/04/01**、**2019/04/02**、…、**2019/04/15**
* 若 gran 为 week，返回的数据范围为：**2019/04/01 - 2019/04/07**、**2019/04/08 - 2019/04/14**、**2019/04/15 - 2019/04/15**
* 若 gran 为 month，返回的数据范围为：**2019/04**（实际数据只有 2019/04/01 - 2019/04/15 时间段内的数据）


### 1. 用户趋势 

分析产品的新用户增量、新老构成比例等指标随时间的变化趋势。

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisusertrend?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
| start_index | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date  | string | true     | 开始日期：20190410               |
| end_date    | string | true     | 结束日期：20190415                |
| gran        | string | true     | 数据粒度：day/hour/week/month     |

**指标内容说明**

| 参数名称                | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| new_user_count          | 新用户数，当日首次启动小程序的用户数                         |
| new_user_ratio          | 新用户占比，新用户数占启动用户总数的比例                     |
| old_user_count          | 老用户数，当日启动用户中，以前也启动过小程序的用户           |
| old_user_ratio          | 老用户占比，当日老用户占总的启动用户的比例                   |
| user_count              | 启动用户，启动过小程序的用户数（多次启动不重复计）           |
| session_count           | 启动次数，启动小程序的总次数。"一次启动"是指用户打开小程序到主动退出（或超时退出）为止。 |
| average_session_time    | 次均使用时长，平均每一次启动小程序的时间，等于总时长/总启动次数 |
| session_time_per_person | 人均使用时长，平均每个用户使用应用程序的时间，等于总时长/总启动用户数 |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":6,
        "sum":{
            "new_user_count":5620,
            "new_user_ratio":82.19,
            "old_user_count":1218,
            "old_user_ratio":17.81,
            "user_count":6838,
            "session_count":7727,
            "average_session_time":54,
            "session_time_per_person":61
        },
        "data_list":[
            {
                "name":"2019/04/15",
                "new_user_count":1150,
                "new_user_ratio":78.02,
                "old_user_count":324,
                "old_user_ratio":21.98,
                "user_count":1474,
                "session_count":1570,
                "average_session_time":44,
                "session_time_per_person":47
            },
            {
                "name":"2019/04/14",
                "new_user_count":1243,
                "new_user_ratio":78.67,
                "old_user_count":337,
                "old_user_ratio":21.33,
                "user_count":1580,
                "session_count":1687,
                "average_session_time":56,
                "session_time_per_person":60
            },
            ...
        ]
    }
}

```

### 2. 活跃用户 

从活跃用户数、活跃度、流失用户等维度分析用户的产品使用粘性。

**请求地址**:

```
https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisactivityuser?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 类型   | 是否必须 | 说明                                |
| ----------- | ------ | -------- | --------------------------------  |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
| start_index | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date  | string | true     | 开始日期：20190410                |
| end_date    | string | true     | 结束日期：20190415                |

**指标内容说明**

| 参数名称                  | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| user_count                | 启动用户，启动过小程序的用户数（多次启动不重复计）           |
| daily_activity_degree     | 日活跃度，当日启动用户/ 累计用户                             |
| day_month_activity_degree | 日活/月活，日启动用户数/月启动用户数，反映当日用户活跃与近30日的比较水平 |
| weekly_user_count         | 周活跃用户，最近7天（含查询当日）启动过小程序的用户数（多次启动不重复计） |
| weekly_activity_degree    | 周活跃度，周活跃用户/累计用户                                |
| monthly_user_count        | 月活跃用户，最近30天（含查询当日）启动过小程序的用户数（多次启动不重复计） |
| monthly_activity_degree   | 月活跃度，月活跃用户/累计用户                                |
| lost_user_count           | 流失用户，最近60天（含查询当日）没有启动过小程序的用户（已去重） |
| lost_ratio                | 流失率，流失用户/累计用户                                    |
| accumulative_user_count   | 累计启动用户，累计启动过小程序的用户数量（多次启动不重复计） |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":6,
        "sum":{
            "user_count":1474,
            "daily_activity_degree":1.97,
            "day_month_activity_degree":6.07,
            "weekly_user_count":7876,
            "weekly_activity_degree":10.53,
            "monthly_user_count":24294,
            "monthly_activity_degree":32.48,
            "lost_user_count":20066,
            "lost_ratio":26.83,
            "accumulative_user_count":74801
        },
        "data_list":[
            {
                "name":"2019/04/15",
                "user_count":1474,
                "daily_activity_degree":1.97,
                "day_month_activity_degree":6.07,
                " ":7876,
                "weekly_activity_degree":10.53,
                "monthly_user_count":24294,
                "monthly_activity_degree":32.48,
                "lost_user_count":20066,
                "lost_ratio":26.83,
                "accumulative_user_count":74801
            },
            {
                "name":"2019/04/14",
                "user_count":1580,
                "daily_activity_degree":2.15,
                "day_month_activity_degree":6.45,
                "weekly_user_count":7967,
                "weekly_activity_degree":10.82,
                "monthly_user_count":24511,
                "monthly_activity_degree":33.28,
                "lost_user_count":18976,
                "lost_ratio":25.76,
                "accumulative_user_count":73651
            },
            ...
        ]
    }
}
```

### 3. 活跃用户留存

用户留存报告用以分析目标用户再次启动小程序的情况，是体现小程序用户粘性的核心指标。

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisretaineduser?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | :------------------------------- |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
| report_type | string | true     | 报告数据类型:可选count数量类型、ratio比率类型，决定返回的指标内容 |
| start_index | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date  | string | true     | 开始日期：20190410                |
| end_date    | string | true     | 结束日期：20190415               |
| gran        | string | true     | 数据粒度：day/week/month     |



**指标内容说明**

| 参数名称            | 说明                                                         | 适用接口                           |
| ------------------- | ------------------------------------------------------------ | ---------------------------------- |
| active_user_count   | 活跃用户数量，某日（周、月）启动过小程序的用户数（多次启动不重复计） |                                    |
| retained_user_count | 留存用户数量，某日（周、月）新用户（或启动用户）在目标时间段再次启动小程序的用户数 | report_type类型为count时存在该指标 |
| retained_ratio      | 留存用户率，留存用户数占新用户数的比例                       | report_type类型为ratio时存在该指标 |



**返回值示例**:

* active_user_count 代表活跃用户数
* "第2天"中的值 代表 retained_user_count/retained_ratio
* active_user_count 代表了name表示的时间范围内活跃用户数，“第2天"与之后的“第X天"代表了获取用户经过这些天之后的retained_user_count 或者 retained_ratio。
* gran 为 month

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/01 - 2019/04/30",
        "offset":0,
        "total":1,
        "sum":{
            "active_user_count":"--"
        },
        "data_list":[
            {
                "name":"2019/04",
                "active_user_count":25391,
                "第2月":774,
                "第3月":"--",
                "第4月":"--",
                "第5月":"--",
                "第6月":"--",
                "第7月":"--",
                "第8月":"--",
                "第9月":"--"
            }
        ]
    }
}
```

* gran 为 week

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/01 - 2019/04/21",
        "offset":0,
        "total":3,
        "sum":{
            "active_user_count":"--"
        },
        "data_list":[
            {
                "name":"2019/04/01 - 2019/04/07",
                "active_user_count":6625,
                "第2周":701,
                "第3周":464,
                "第4周":156,
                "第5周":50,
                "第6周":13,
                "第7周":19,
                "第8周":102,
                "第9周":35
            },
            {
                "name":"2019/04/08 - 2019/04/14",
                "active_user_count":7967,
                "第2周":764,
                "第3周":218,
                "第4周":72,
                "第5周":30,
                "第6周":32,
                "第7周":116,
                "第8周":45,
                "第9周":"--"
            },
            ...
        ]
    }
}
```



* gran 为 day

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":6,
        "sum":{
            "active_user_count":"--"
        },
        "data_list":[
            {
                "name":"2019/04/10",
                "active_user_count":930,
                "第2天":21,
                "第3天":14,
                "第4天":22,
                "第5天":27,
                "第6天":26,
                "第7天":20,
                "第8天":14,
                "第9天":23
            },
            {
                "name":"2019/04/11",
                "active_user_count":828,
                "第2天":11,
                "第3天":26,
                "第4天":29,
                "第5天":26,
                "第6天":25,
                "第7天":23,
                "第8天":6,
                "第9天":11
            },
            ...
        ]
    }
}
```

### 4. 用户画像 

用户画像是对小程序的全部用户进行挖掘分析，得到用户属性报表结果

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisvisitattribute?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称   | 类型   | 是否必须 | 说明               |
| ---------- | ------ | -------- | ------------------ |
| access_token  | string | true     | 授权小程序的接口调用凭据       |
| start_date | string | true     | 开始日期：20190410  |
| end_date   | string | true     | 结束日期：20190415  |

**指标内容说明**

| 参数名称 | 说明     |
| -------- | -------- |
| age      | 年龄分布 |
| sex      | 性别分布 |
| interest | 兴趣分布 |

| 参数名称         | 说明                                 |
| ---------------- | ------------------------------------ |
| user_count_ratio | 数量比率，该类数量在所有数量中的占比 |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "data_list":[
            {
                "age":[
                    {
                        "attribute_id":"13539008165231256741",
                        "name":"18岁以下",
                        "count_ratio":0.1
                    },
                    {
                        "attribute_id":"3615607858952929332",
                        "name":"18-24岁",
                        "count_ratio":6.06
                    },
                    {
                        "attribute_id":"3687662158750941236",
                        "name":"25-34岁",
                        "count_ratio":22.4
                    },
                    {
                        "attribute_id":"3759719757083836468",
                        "name":"35-44岁",
                        "count_ratio":36.12
                    },
                    {
                        "attribute_id":"3831777355416731700",
                        "name":"45-54岁",
                        "count_ratio":30.74
                    },
                    {
                        "attribute_id":"3903834953749626932",
                        "name":"55-64岁",
                        "count_ratio":4.49
                    },
                    {
                        "attribute_id":"13539004888154432677",
                        "name":"65岁以上",
                        "count_ratio":0.09
                    }
                ],
                "sex":[
                    {
                        "attribute_id":"51673640596406272",
                        "name":"男",
                        "count_ratio":13.24
                    },
                    {
                        "attribute_id":"50566423797301248",
                        "name":"女",
                        "count_ratio":86.76
                    }
                ],
                "interest":[
                    {
                        "attribute_id":"1817285150070878431",
                        "name":"软件应用",
                        "count_ratio":8.48
                    },
                    {
                        "attribute_id":"16754716521762172846",
                        "name":"资讯",
                        "count_ratio":8.25
                    },
                    {
                        "attribute_id":"2013145566775166121",
                        "name":"影视音乐",
                        "count_ratio":7.36
                    },
                    {
                        "attribute_id":"1916599189664044924",
                        "name":"医疗健康",
                        "count_ratio":6.4
                    },
                    {
                        "attribute_id":"1926856852155349220",
                        "name":"书籍阅读",
                        "count_ratio":5.5
                    },
                    {
                        "attribute_id":"1887137221346444591",
                        "name":"教育培训",
                        "count_ratio":5.42
                    },
                    {
                        "attribute_id":"1915893612878190809",
                        "name":"餐饮美食",
                        "count_ratio":5.05
                    },
                    {
                        "attribute_id":"1981319425202935271",
                        "name":"建材家居",
                        "count_ratio":4.97
                    },
                    {
                        "attribute_id":"1773684818352659311",
                        "name":"旅游酒店",
                        "count_ratio":4.52
                    },
                    {
                        "attribute_id":"1988066904813920250",
                        "name":"母婴亲子",
                        "count_ratio":3.69
                    }
                ]
            }
        ]
    }
}
```


### 5. 地域分布

分地域对用户进行统计

**请求地址**:

``` 
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisregion?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 类型   | 是否必须 | 说明                             |
| ----------- | ------ | -------- | -------------------------------- |
| access_token   | string | true | 授权小程序的接口调用凭据                    |
| start_index | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date  | string | true     | 开始日期：20190410               |
| end_date    | string | true     | 结束日期：20190415                |

**指标内容说明**

| 参数名称                      | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| session_count_district        | 启动次数，该地域用户的启动次数                               |
| session_count_district_ratio  | 启动次数比例分布，该地域用户的启动次数占全地域用户的启动次数之和的比例 |
| new_user_count_district_ratio | 新用户分布，该地域的新用户数占全地域的新用户之和的比例       |
| user_count_district_ratio     | 启动用户分布，该地域的启动用户数占全地域的启动用户（跨地域不去重）的比例 |
| average_session_time_district | 次均使用时长，该地域内的用户平均每一次使用应用程序（session）的时间 |



**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":34,
        "sum":{
            "session_count_district":7718,
            "session_count_district_ratio":100,
            "new_user_count_district_ratio":100,
            "user_count_district_ratio":100,
            "average_session_time_district":54
        },
        "data_list":[
            {
                "name":"重庆",
                "session_count_district":1180,
                "session_count_district_ratio":15.29,
                "new_user_count_district_ratio":15.28,
                "user_count_district_ratio":15.72,
                "average_session_time_district":27
            },
            {
                "name":"广东",
                "session_count_district":1145,
                "session_count_district_ratio":14.84,
                "new_user_count_district_ratio":14.67,
                "user_count_district_ratio":14.71,
                "average_session_time_district":49
            },
            ...
        ]
    }
}
```

### 6. 终端分布

终端作为用户运行应用的载体，背后蕴藏这丰富的用户信息。这里通过设备品牌，设备型号，设备系统，设备分辨率，设备联网方式等纬度进行统计。

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisterminal?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称      | 说明                                                            | 是否必须 | 类型   |
| ------------- | ------------------------------------------------------------ --- | -------- | ------ |
| access_token     | 授权小程序的接口调用凭据                                                 | true     | string |
| terminal_type | 终端数据类型。terminal_brand/terminal_device/terminal_os/terminal_screen/terminal_network | true     | string |
| start_index   | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看            | true     | int    |
| start_date    | 开始日期：20190410                                           | true     | string |
| end_date      | 结束日期：20190415                                           |  true     | string |


terminal_type 说明：

* terminal_brand：品牌。如：苹果、三星、华为、小米等
* terminal_device：设备型号。如iPhone8、小米5、华为荣耀等
* terminal_os：操作系统。IOS及android逐个子版本
* terminal_screen：分辨率。如640*960等
* terminal_network：联网方式。如wifi、3g/4g、2g等

当为 terminal_network 时，指标参数只有accumulative_session_count、accumulative_session_count_ratio、average_use_time 三项指标

**指标内容说明**

| 参数名称                          | 说明                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| accumulative_session_count        | 启动次数，该品牌(或设备型号、操作系统、分辨率、联网方式）的启动次数 |
| accumulative_session_count_ratio  | 启动次数比例分布，该品牌(或设备型号、操作系统、分辨率、联网方式）的启动次数占所有品牌(或设备型号、操作系统、分辨率、联网方式）启动次数之和的比例 |
| accumulative_new_user_count_ratio | 新用户分布，该品牌(或设备型号、操作系统、分辨率、联网方式）的新用户数占所有品牌(或设备型号、操作系统、分辨率、联网方式）新用户之和的比例 |
| accumulative_user_count_ratio     | 启动用户分布，该品牌(或设备型号、操作系统、分辨率、联网方式）的启动用户数占所有品牌(或设备型号、操作系统、分辨率、联网方式）启动用户之和（不去重）的比例 |
| average_use_time                  | 次均使用时长，平均每一次启动小程序的时间，等于总时长/总启动次数 |



**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":32,
        "sum":{
            "accumulative_session_count":7727,
            "accumulative_session_count_ratio":100,
            "accumulative_new_user_count_ratio":100,
            "accumulative_user_count_ratio":100,
            "average_use_time":54
        },
        "data_list":[
            {
                "name":"Android 8",
                "accumulative_session_count":1646,
                "accumulative_session_count_ratio":21.3,
                "accumulative_new_user_count_ratio":21.64,
                "accumulative_user_count_ratio":21.79,
                "average_use_time":48
            },
            {
                "name":"Android 8.1",
                "accumulative_session_count":1502,
                "accumulative_session_count_ratio":19.44,
                "accumulative_new_user_count_ratio":20.07,
                "accumulative_user_count_ratio":20.09,
                "average_use_time":36
            },
            ...
        ]
    }
}
```

### 7. 页面分析

展示各个页面的访次、停留时间、退出率等指标，体现页面受欢迎的程度。

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisvisitpage?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
| start_index | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date  | string | true     | 开始日期：20190410                |
| end_date    | string | true     | 结束日期：20190415                |



**指标内容说明**

| 参数名称          | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| pv_count          | 页面访问次数，页面被访问的次数，多次跳转重复访问也会被计入   |
| pv_ratio          | 访问次数占比，当前页面访问次数占全部页面访问次数的比例       |
| pv_user_count     | 访问用户数，访问当前页面的总用户数                           |
| average_stay_time | 次均访问时长，用户访问当前页面的次均访问时间                 |
| stay_time_ratio   | 访问时长占比，用户访问当前页面的访问时长的总和占用户在全部页面的访问时长总和的比例 |
| bounce_ratio      | 退出率，用户从当前页面离开小程序的比例                       |
| entry_count       | 入口页次数，该页面作为启动小程序时第一个访问的页面的启动次数 |
| exit_count        | 退出页次数，该页面作为关闭小程序时最后一个访问的页面的启动次数 |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":8,
        "sum":{
            "pv_count":14706,
            "pv_ratio":100,
            "pv_user_count":8790,
            "average_stay_time":24,
            "stay_time_ratio":100,
            "bounce_ratio":52.4,
            "entry_count":7706,
            "exit_count":7706
        },
        "data_list":[
            {
                "pageId":"10811489425798243863",
                "pageName":"pages/yuyue/yuyue",
                "pageAlias":"",
                "pv_count":7157,
                "pv_ratio":48.67,
                "pv_user_count":6175,
                "average_stay_time":18,
                "stay_time_ratio":36.96,
                "bounce_ratio":81.68,
                "entry_count":6120,
                "exit_count":5846
            },
            {
                "pageId":"14078778733382177142",
                "pageName":"pages/index/list/list",
                "pageAlias":"",
                "pv_count":3864,
                "pv_ratio":26.27,
                "pv_user_count":1496,
                "average_stay_time":17,
                "stay_time_ratio":18.86,
                "bounce_ratio":36.21,
                "entry_count":1444,
                "exit_count":1399
            },
            ...
        ]
    }
}
```

### 8. 用户习惯

从访问深度、使用频率、使用时长、使用间隔四个维度系统刻画用户使用习惯特征，熟悉并把握用户的产品使用习惯特征，对于有针对性的进行产品优化及运营策略制定具有重要意义。

**请求地址**:

``` 
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysisvisitcharacter?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称       | 类型   | 是否必须 | 说明                                    |
| -------------- | ------ | -------- | --------------------------------------- |
| access_token      | string | true     | 授权小程序的接口调用凭据                           |
| character_type | string | true     | 习惯分类：depth/time/interval/frequency |
| start_index    | int    | true     | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 |
| start_date     | string | true     | 开始日期：20190410                     |
| end_date       | string | true     | 结束日期：20190415                      |


character_type 分类：

* depth：访问深度。指一次启动过程的去重访问页面数；分布指不同访问深度的启动次数分布
* time：使用时长。不同访问时长的启动次数分布
* interval：使用间隔。启动频率指用户的日启动次数，如用户在1月1日启动了2次；在1月2日启动了4次，则该用户在日启动次数2次和4次两个分布上均会被计入1次。
* frequency：使用频率。启动间隔指用户最近一次启动距离上一次启动的时长；分布指不同启动间隔的启动用户数分布，其中新用户仅有1次启动，启动间隔为"首次启动"；用户最近一次启动与上一次启动在同一天的间隔为"当日"。

**指标内容说明**

| 参数名称            | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| session_count       | 启动用户数，启动过小程序的用户（多次启动不重复计）           |
| session_count_ratio | 启动用户数量比例，当前类型启动过小程序的用户在所有类型启动过小程序用户的比率。 |
| user_count          | 启动用户数 (character_type为frequency返回的指标)，启动过小程序的用户（多次启动不重复计） |
| user_count_ratio    | 启动用户分布(character_type为frequency返回的指标)，当前类型启动过小程序的用户在所有类型启动过小程序用户的比率。 |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":6,
        "sum":{
            "user_count":7179,
            "user_count_ratio":100
        },
        "data_list":[
            {
                "name":"1-2次",
                "user_count":7102,
                "user_count_ratio":98.93
            },
            {
                "name":"3-5次",
                "user_count":68,
                "user_count_ratio":0.95
            },
            {
                "name":"6-9次",
                "user_count":6,
                "user_count_ratio":0.08
            },
            {
                "name":"10-19次",
                "user_count":3,
                "user_count_ratio":0.04
            },
            {
                "name":"20-49次",
                "user_count":0,
                "user_count_ratio":0
            },
            {
                "name":"50次以上",
                "user_count":0,
                "user_count_ratio":0
            }
        ]
    }
}
```

### 9. 来源分析

展示进入到小程序的不同来源数据情况，来源的启动用户数体现该来源规模，新用户数、人均启动次数、时长和跳出率则体现该来源的质量。

**请求地址**:

```
POST https://openapi.baidu.com/rest/2.0/smartapp/data/getanalysissource?access_token=ACCESS_TOKEN
```

**参数说明**：

| 参数名称    | 说明                                 | 是否必须 | 类型   |
| ----------- | -------------------------------- | -------- | ------ |
| access_token   | 授权小程序的接口调用凭据                    | true     | string |
| start_index | 数据偏移位置，接口默认返回 20 条数据，可使用该偏移量进行翻页查看 | true     | int    |
| start_date  | 开始日期：20190410                | true     | string |
| end_date    | 结束日期：20190415                | true     | string |

**指标内容说明**

| 参数名称               | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| new_user_count         | 新用户数，90天内首次启动小程序的用户数                       |
| new_user_scale         | 新用户分布，某来源的新用户数占全来源的新用户总数的比例       |
| user_count             | 启动用户数，启动过小程序的用户（多次启动不重复计）           |
| user_scale             | 启动用户分布，某来源的启动用户数占全来源的启动用户总数的比例 |
| session_scale          | 启动次数分布，某来源的启动次数占同一层级来源的启动次数总和的比例 |
| session_count_per_user | 人均启动次数，小程序累计启动次数/启动用户数                  |
| average_session_time   | 次均使用时长，平均每一次启动小程序的时间，等于总时长/总启动次数 |

**返回值示例**:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "time_span":"2019/04/10 - 2019/04/15",
        "offset":0,
        "total":11,
        "data_list":[
            {
                "name":[
                    {
                        "sceneId":"11010020",
                        "source":"39",
                        "name":"原生",
                        "new_user_count":4476,
                        "new_user_scale":79.64,
                        "user_count":5576,
                        "user_scale":80.58,
                        "session_scale":78.4,
                        "session_count_per_user":1.09,
                        "average_session_time":29
                    },
                    {
                        "sceneId":"11010018",
                        "source":"39",
                        "name":"闪投",
                        "new_user_count":52,
                        "new_user_scale":0.93,
                        "user_count":55,
                        "user_scale":0.79,
                        "session_scale":0.91,
                        "session_count_per_user":1.27,
                        "average_session_time":58
                    }
                ],
                "new_user_count":4528,
                "new_user_scale":80.57,
                "user_count":5631,
                "user_scale":81.37,
                "session_scale":79.31,
                "session_count_per_user":1.09,
                "average_session_time":30
            },
            {
                "name":[
                    {
                        "sceneId":"10810012",
                        "source":"37",
                        "name":"搜索词推荐直达",
                        "new_user_count":799,
                        "new_user_scale":14.22,
                        "user_count":847,
                        "user_scale":12.24,
                        "session_scale":13.19,
                        "session_count_per_user":1.2,
                        "average_session_time":153
                    },
                    {
                        "sceneId":"10810014",
                        "source":"37",
                        "name":"小程序单卡",
                        "new_user_count":88,
                        "new_user_scale":1.57,
                        "user_count":98,
                        "user_scale":1.42,
                        "session_scale":1.63,
                        "session_count_per_user":1.29,
                        "average_session_time":202
                    },
                    {
                        "sceneId":"10810008",
                        "source":"37",
                        "name":"自然结果",
                        "new_user_count":3,
                        "new_user_scale":0.05,
                        "user_count":4,
                        "user_scale":0.06,
                        "session_scale":0.05,
                        "session_count_per_user":1,
                        "average_session_time":25
                    },
                    {
                        "sceneId":"10810083",
                        "source":"37",
                        "name":"小程序tab",
                        "new_user_count":2,
                        "new_user_scale":0.04,
                        "user_count":2,
                        "user_scale":0.03,
                        "session_scale":0.03,
                        "session_count_per_user":1,
                        "average_session_time":15
                    }
                ],
                "new_user_count":892,
                "new_user_scale":15.87,
                "user_count":951,
                "user_scale":13.74,
                "session_scale":14.9,
                "session_count_per_user":1.21,
                "average_session_time":158
            },
            {
                "name":[
                    {
                        "sceneId":"12110047",
                        "source":"46",
                        "name":"推荐",
                        "new_user_count":137,
                        "new_user_scale":2.44,
                        "user_count":140,
                        "user_scale":2.02,
                        "session_scale":1.94,
                        "session_count_per_user":1.07,
                        "average_session_time":91
                    },
                    {
                        "sceneId":"12110048",
                        "source":"46",
                        "name":"历史",
                        "new_user_count":1,
                        "new_user_scale":0.02,
                        "user_count":14,
                        "user_scale":0.2,
                        "session_scale":0.6,
                        "session_count_per_user":3.29,
                        "average_session_time":128
                    }
                ],
                "new_user_count":138,
                "new_user_scale":2.46,
                "user_count":154,
                "user_scale":2.23,
                "session_scale":2.54,
                "session_count_per_user":1.27,
                "average_session_time":100
            },
            {
                "name":[
                    {
                        "sceneId":"12010044",
                        "source":"45",
                        "name":"顶部横滑模块",
                        "new_user_count":35,
                        "new_user_scale":0.62,
                        "user_count":107,
                        "user_scale":1.55,
                        "session_scale":1.85,
                        "session_count_per_user":1.34,
                        "average_session_time":135
                    },
                    {
                        "sceneId":"12010042",
                        "source":"45",
                        "name":"智能小程序",
                        "new_user_count":15,
                        "new_user_scale":0.27,
                        "user_count":20,
                        "user_scale":0.29,
                        "session_scale":0.27,
                        "session_count_per_user":1.05,
                        "average_session_time":78
                    },
                    {
                        "sceneId":"12010045",
                        "source":"45",
                        "name":"历史",
                        "new_user_count":0,
                        "new_user_scale":0,
                        "user_count":4,
                        "user_scale":0.06,
                        "session_scale":0.05,
                        "session_count_per_user":1,
                        "average_session_time":16
                    }
                ],
                "new_user_count":50,
                "new_user_scale":0.89,
                "user_count":131,
                "user_scale":1.89,
                "session_scale":2.17,
                "session_count_per_user":1.28,
                "average_session_time":125
            },
            {
                "name":[
                    {
                        "sceneId":"0",
                        "source":"10",
                        "name":"其他",
                        "new_user_count":5,
                        "new_user_scale":0.09,
                        "user_count":10,
                        "user_scale":0.14,
                        "session_scale":0.17,
                        "session_count_per_user":1.3,
                        "average_session_time":50
                    }
                ],
                "new_user_count":5,
                "new_user_scale":0.09,
                "user_count":10,
                "user_scale":0.14,
                "session_scale":0.17,
                "session_count_per_user":1.3,
                "average_session_time":50
            },
            {
                "name":[],
                "new_user_count":3,
                "new_user_scale":0.05,
                "user_count":3,
                "user_scale":0.04,
                "session_scale":0.04,
                "session_count_per_user":1,
                "average_session_time":3
            },
            {
                "name":[
                    {
                        "sceneId":"11600000",
                        "source":"13",
                        "name":"分享",
                        "new_user_count":3,
                        "new_user_scale":0.05,
                        "user_count":10,
                        "user_scale":0.14,
                        "session_scale":0.31,
                        "session_count_per_user":2.4,
                        "average_session_time":311
                    }
                ],
                "new_user_count":3,
                "new_user_scale":0.05,
                "user_count":10,
                "user_scale":0.14,
                "session_scale":0.31,
                "session_count_per_user":2.4,
                "average_session_time":311
            },
            {
                "name":[
                    {
                        "sceneId":"11110029",
                        "source":"40",
                        "name":"百家号文章挂载",
                        "new_user_count":1,
                        "new_user_scale":0.02,
                        "user_count":1,
                        "user_scale":0.01,
                        "session_scale":0.03,
                        "session_count_per_user":2,
                        "average_session_time":394
                    }
                ],
                "new_user_count":1,
                "new_user_scale":0.02,
                "user_count":1,
                "user_scale":0.01,
                "session_scale":0.03,
                "session_count_per_user":2,
                "average_session_time":394
            },
            {
                "name":[
                    {
                        "sceneId":"12500000",
                        "source":"48",
                        "name":"多任务",
                        "new_user_count":0,
                        "new_user_scale":0,
                        "user_count":25,
                        "user_scale":0.36,
                        "session_scale":0.41,
                        "session_count_per_user":1.28,
                        "average_session_time":30
                    }
                ],
                "new_user_count":0,
                "new_user_scale":0,
                "user_count":25,
                "user_scale":0.36,
                "session_scale":0.41,
                "session_count_per_user":1.28,
                "average_session_time":30
            },
            {
                "name":[
                    {
                        "sceneId":"11700000",
                        "source":"44",
                        "name":"小程序",
                        "new_user_count":0,
                        "new_user_scale":0,
                        "user_count":1,
                        "user_scale":0.01,
                        "session_scale":0.01,
                        "session_count_per_user":1,
                        "average_session_time":1056
                    }
                ],
                "new_user_count":0,
                "new_user_scale":0,
                "user_count":1,
                "user_scale":0.01,
                "session_scale":0.01,
                "session_count_per_user":1,
                "average_session_time":1056
            },
            {
                "name":[
                    {
                        "sceneId":"12300000",
                        "source":"6",
                        "name":"桌面快捷",
                        "new_user_count":0,
                        "new_user_scale":0,
                        "user_count":3,
                        "user_scale":0.04,
                        "session_scale":0.12,
                        "session_count_per_user":3,
                        "average_session_time":131
                    }
                ],
                "new_user_count":0,
                "new_user_scale":0,
                "user_count":3,
                "user_scale":0.04,
                "session_scale":0.12,
                "session_count_per_user":3,
                "average_session_time":131
            }
        ]
    }
}
```



### 10. TP平台数据获取(TP平台纬度）

TP平台汇总数据获取

**请求地址:**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/data/getdata?access_token=ACCESS_TOKEN
```
**参数说明:**

| 参数名        | 类型   | 是否必须 | 描述                                                         |
| ------------- | ------ | -------- | ------------------------------------------------------------ |
| access\_token | string | 是       | 第三方平台的接口调用凭据                                     |
| scene         | int    | 是       | 小程序来源ID (场景值)                                        |
| metrics       | string | 是       | 指标以逗号分隔，全量指标如下：tp\_day\_app\_count,tp\_week\_app\_count,tp\_month\_app\_count,tp\_day\_user\_count,tp\_week\_user\_count,tp\_month\_user\_count,tp\_day\_session\_count,tp\_week\_session\_count,tp\_month\_session\_count,tp\_day\_page\_count,tp\_activity\_degree,tp\_session\_count\_per\_person,tp\_session\_count\_per\_day,tp\_day\_share\_count,tp\_day\_feedback\_count |
| start\_date   | string | 是       | 起始时间戳,格式如 20190321                                   |
| end\_date     | string | 是       | 结束时间戳,格式如 20190325                                   |
| start_index   | int    | 否       | 偏移量,默认为0(分页操作从第几条开始展示)                     |
| max_result    | int    | 否       | 页面大小,默认值20(分页操作查询条数)                          |

**指标说明**

| 指标                           | 说明               |
| ------------------------------ | ------------------ |
| tp\_day\_app\_count            | 当日小程序数量     |
| tp\_week\_app\_count           | 近7日小程序数量    |
| tp\_month\_app\_count          | 近30日小程序数量   |
| tp\_day\_user\_count           | 当日启动用户数     |
| tp\_week\_user\_count          | 近7日启动用户数    |
| tp\_month\_user\_count         | 近30日启动用户数   |
| tp\_day_new\_user\_count       | 当日启动新用户数   |
| tp\_week\_new\_user\_count     | 近7日启动新用户数  |
| tp\_month\_new\_user\_count    | 近30日启动新用户数 |
| tp\_day\_session\_count        | 当日启动次数       |
| tp\_week\_session\_count       | 近7日启动次数      |
| tp\_month\_session\_count      | 近30日启动次数     |
| tp\_day\_page\_count           | 当日页面访问次数   |
| tp\_activity\_degree           | 小程序活跃度       |
| tp\_session\_time\_per\_person | 当日人均使用时长   |
| tp\_session\_time\_per\_day    | 当日次均使用时长   |
| tp\_day_share\_count           | 分享次数           |
| tp\_day\_back\_flow\_count     | 回流次数           |

**返回值示例:**

```json
{
	"errno": 0,
	"msg": "success",
	"data":{
		"offset": 0,
		"total": 4,
		"result":[
			{
				"data":"20190301",
				"tp_day_user_count":"122000",
				"tp_day_session_count":"122333",
				......
			},
			{
				"data":"20190302",
				"tp_day_user_count":"23333",
				"tp_day_session_count":"36666",
				......
			},
			{
				"data":"20190303",
				"tp_day_user_count":"--",
				"tp_day_session_count":"--",
				......
			},
			{
				"data":"20190304",
				"tp_day_user_count":"--",
				"tp_day_session_count":"--",
				......
			}		
		]
	}
}

```

### 错误码表

| 错误码 | 错误描述              |
| ------ | ------------------- |
| 1000   | 内部服务错误          |
| 40001  | 参数错误,建议检查参数  |