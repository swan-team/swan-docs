---
title: 常见问题
header: develop
nav: serverapi
sidebar: faq
---
 
1. access_token不合法

常见异常原因: 小程序密钥(client_secret)在开发者平台有改动，但未同步到获取access_token的接口。(获取access_token : [接口文档](/develop/serverapi/power_exp/) )

2. API接口调用失败，提示“Invalid parameter”。

注意access_token字段使用GET方法，其他字段使用POST方法form-data提交。

3.  如何修改已提交的素材 

path字段是素材的唯一标识，将需要修改的素材更新任一字段（除path字段外）重新进行提交，则会触发资源修改。

4. 如何删除已提交的素材

> path字段是素材的唯一标识，已删除的资源不可再次提交，所以建议若非严重性问题，无需将素材进行删除操作，可以直接在提交接口中重新提交修改或更新后的素材。

* API实时接口进行删除，[deleteresource](/develop/serverapi/deleteresource/)

* 链接文件删除，链接文件类型（type字段）为0，[submitsitemap](/develop/serverapi/submitsitemap/)


5. 素材发布时间（publish_time）格式不正确

扩展字段中，publish_time的格式为2019年1月2日，若传2019-01-02、时间戳格式或其他格式，则属于错误格式。

6. 素材审核拒绝后，是否可以重新提交

可以重新提交，但建议提交的资源为优化后的资源（以path为素材的唯一标识），否则依旧会被审核拒绝。

注意：需要重新提交的素材，需更素材的任一字段（除path字段外）重新进行提交才会触发资源入库，否则会默认为重复资源入库失败。

7. 为什么使用sitemap提交的素材，没有提交成功

1）确定是否素材的sitemap链接无效，导致解析失败；

2）确定是否sitamp内容格式错误，正确内容格式请见接口文档中”链接文件提交“，sitamap链接打开后应为多个loc，loc链接打开后应为多条素材；

3）确定素材是否无任何字段更新重新而进行了提交，若素材无任何字段更新重新进行提交则判定为重复资源，重复资源无法入库成功；

4）每个小程序，最多提交3条sitemap链接，建议一条type为1的sitemap链接，一条type为0的sitemap链接的（即增量/更新的sitemap一个，线下/删除的sitemap一个），若已满3条sitemap，若想添加新的sitemap链接，建议先删除一条sitemap，再进行添加新的sitemap

5）确定sitemap链接设置的更新频率，若为每天，则次日凌晨执行素材入库任务，若为每周，则七天后的凌晨执行素材入库任务；建议开发者更新频率设置为每天。

8. 为什么单条素材管理中展示的素材数量与提交量不一致，例如提交了10条，单条素材管理中仅展示5条

１）确认是否素材的path字段是否相同，若素材path字段相同，标题或其他字段有不同，则视为素材更新入库，（素材内容会以最新提交的素材为准）

素材A的内容标题为“百度AI开发者大会：百度大脑开放200项AI能力”，对应的path为“/pages/detail/post/post?qid=3b9732”

素材Ｂ的内容标题为“百度AI开发者大会回顾，９大AI利剑被亮出”，对应的path为“/pages/detail/post/post?qid=3b9732”

则素材A和素材Ｂ视为同一条素材

２）确认是否其中提交的素材在提交前进行过删除操作，若素材进行过删除操作，则再次提交无法入库，（删除素材视为线下操作）。

9. API接口调用失败，提示“Invalid parameter”

注意access_token字段使用GET方法，其他字段使用POST方法form-data提交