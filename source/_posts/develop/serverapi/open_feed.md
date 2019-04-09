---
title: Feed 资源
header: develop
nav: serverapi
sidebar: open_feed
---

##  submitresource

**解释**：投放服务提交素材接口。提交素材接口适用于少量的素材，每天有500次调用限制，如果素材量大建议使用sitemap的方式。
**方法**: GET、POST
**参数说明**:

|参数名|类型|说明|示例|
|---|---|---|---|
|access_token|string|权限校验Token，获取方式见：<p>`https://smartprogram.baidu.`<p>`com/docs/develop/server/`<p>`power_exp/`	|-|
|app_id|string|	智能小程序ID|	100001|
|title|	string|	在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能出现emoji表情等特殊符号，不能全为英文，至少6个字符。|例：百度智能小程序，给你全新的智能体验|
|body|	string|	消息体，最多2000字|	**以小程序粒度推送时，请填写小程序的详细介绍。**<p>示例：爱说唱是一款基于百度语音技术的智能小程序。即便你对嘻哈音乐一窍不通，只需对它说上几句话，便可智能合成最酷的嘻哈音乐。同时还支持歌词查看和等功能，在线即可完成rap单曲的创作和分享。来吧，让我们在嘻哈的世界肆意妄为，一起Freestyle吧！<p>**以图文粒度推送时，请填写内容的正文。**<p>示例：智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验。<p>**以视频粒度推送时，请填写视频的详细介绍。**<p>示例：此片是当年为张国荣的参演而度身订造的电影，这也是他的歌唱和演艺事业的高峰时期。由包括人气歌手露云娜、偶像锺保罗等多位明星合演，片中以张国荣为首的角色最为丰富。|
|path|	string|	智能小程序内页链接|	/pages/index/index|
|mapp_type|	string|	类型（参考附录一）|	1000|
|mapp_sub_type	|string	|子类型（参考附录一）|	1001|
|feed_type|	string|	feed一级分类（参考附录二）|	娱乐（可选有限集合）|
|feed_sub_type|	string|	feed二级分类（参考附录二）|	明星八卦（可选有限集合）|
|tags	|string	|资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字）|示例：组件,接口,API|
|ext|	string|	扩展信息（Json格式，参考附录三）|{"desc": "智能小程序官方示例","version": "10.7.1"}|
|images|	string|	封面图片链接（JSON格式）（最多3张，单图片最大2M）<p>建议尺寸：高>=210，宽>=375<p>最小尺寸：高>=146, 宽>=218|`["https://b.bdstatic.com/miniapp/resource/image/demo1.png",`<p>`"https://b.bdstatic.com/miniapp/resource/image/demo2.png"]`|

**返回示例**：
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```
## deleteresource

**解释**：投放服务删除素材接口，若有资源在小程序内下线或资源推送错误需要删除的情况，请调用该接口进行资源的删除。
**方法**: GET、POST
**参数说明**:

|参数名|类型|是否必填|方法|说明|示例|
|---|---|---|---|---|
|access_token|	string|	true|	GET	|权限校验TOKEN	|
|app_id	|string|	true|	POST|	智能小程序ID	|100001|
|path|	string	|true|	POST	|智能小程序内页链接	|/pages/index/index|

**返回值说明**：

|参数名|类型|说明|
|---|---|---|
|errno	|int|	0|
|msg|	string|	错误信息|
|data|	string|	返回数据|

**返回示例**：
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

##  submitsitemap

**解释**：投放服务提交sitemap接口
**方法**：GET、POST
**参数说明**:

|参数名|类型|是否必填|方法|说明|示例|
|---|---|---|---|---|
|access_token|	string|	true|	GET|	权限校验TOKEN	|-|
|app_id	|string	|true	|POST|	智能小程序ID	|100001|
|url|	string	|true	|POST|	sitemap链接	|—|
|desc	|string	|true	|POST|	描述信息	|智能小程序示例|
|type|	int|	true|	POST|	类型 1-增量 0-下线|	1|
|frequency|	int	|true|	POST|	更新频率 3-每天 4-每周 5-每月 6-每年|	3|

**sitemap内容格式**
```
{
 "sitemapindex": [
 {
 "sitemap": {
 "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_01.json",
 "lastmod": "2018-07-17"
 }
 },
 {
 "sitemap": {
 "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_02.json",
 "lastmod": "2018-07-17"
 }
 },
 {
 "sitemap": {
 "loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_03.json",
 "lastmod": "2018-07-17"
 }
 }
 ]
}
```
**loc为小于5M的分片数据，格式如下**：
```
[
 {
 "app_id": "1000001",
 "title": "百度智能小程序，给你全新的智能体验",
 "body": "智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验",
 "path": "/pages/index/index",
 "images": [
 "https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png",
 "https://www.baidu.com/img/bd_logo1.png?qua=high%26where=super"
 ],
 "mapp_type": "1000",
 "mapp_sub_type": "1001",
 “feed_type”: “娱乐”
 “feed_sub_type”: “明星八卦”
 "tags": "组件,接口",
 "ext": {
 "desc": "智能小程序官方示例",
 "version": "10.7.1"
 }
 },
 {
 "app_id": "1000001",
 "title": "小程序接口",
 "body": "百度智能小程序提供丰富的接口，为开发者赋能。",
 "path": "/pages/api/api",
 "images": [
 "https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png"
 ],
 "mapp_type": "1000",
 "mapp_sub_type": "1001",
 “feed_type”: “娱乐”
 “feed_sub_type”: “明星八卦”
 "tags": "接口",
 "ext": {}
 }
]
```

**返回值说明**：

|参数名|类型|说明|
|---|---|---|
|errno|	int|	0|
|msg|	string|	错误信息|
|data|	string|	返回数据|

**返回示例**：
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

##  deletesitemap

**解释**：投放服务删除sitemap接口，若有资源在小程序内下线或资源推送错误需要删除的情况，请调用该接口进行资源的删除。
**方法**: GET、POST
**参数说明**：

|参数名|类型|是否必填|方法|说明|示例|
|---|---|---|---|---|---|
|access_token|	string|	true|	GET|	权限校验TOKEN	|-|
|app_id	|string	|true	|POST|	智能小程序ID	|100001|
|url|	string|	true|	POST|	sitemap链接	|-|

**返回值参数说明**：

|参数名|类型|说明|
|---|---|---|
|errno|	int|	0|
|msg	|string|	错误信息|
|data	|string	|返回数据|

**返回示例**：
```
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```

## 附录一 :mapp_type和mapp_sub_type列表
**mapp_type列表**

|类型|ID|
|---|---|
|内容|	1000|
|服务|	2000|
|工具|	3000|
|游戏|	4000|

**mapp_sub_type列表**

|类型|ID|PID|
|--|--|--|
|图文|1001|	1000|
|视频	|1002|	1000|
|直播|1003|1000|
|音频|	1004|	1000|
|横滑卡主卡	|1005	|1000|
|横滑卡子卡	|1006	|1000|
|酒店	|2001	|2000|
|景点|	2002|	2000|
|商品|	2003|	2000|
|汽车|	2004|	2000|
|医疗|	2005|	2000|
|金融|	3001|	3000|
|天气|	3002|	3000|
|车辆|	3003|	3000|
|娱乐|	3004|	3000|
|交通|	3005|	3000|
|生活|3006|	3000|
|社交|	3007|	3000|
|对战|	4001|	4000|
|单机|	4007|	4000|
|益智|	4008|	4000|

## 附录二：Feed一二级分类可选集
> * 准确填写将带来更好的分发效果。
* 能且只能选择一个二级分类。
* 若无合适的一级或二级分类选项，可填为综合。

|新一级分类|新二级分类|
|---|---|
|财经|畜牧业、国内宏观、白银、煤炭、保险、基金、投资、能源、股票、渔业、三农、美股、种植业、贵金属、银行、金融、林业、宏观经济、银行业、债券、风投、外汇、期货、IPO、数字货币、个人理财、农资、国外宏观、石油、理财、农业、私募、新三板、汇率、P2P理财、沪指、黄金、蓝筹股、盘面分析、非银金融行业、矿产、财会、A股、港股、国际经济、化工业、购房、租房、二手房、房地产、信托、汽车制造、物流、传媒|
|宠物|狗、动物、宠物、动物界、宠物健康、猫|
|动漫|动漫、热血动漫、日本动漫、漫画、国产动漫、cosplay、动画、漫威漫画、欧美动漫、新番动漫、动漫展、声优、特摄|
|搞笑|奇葩、段子、冷笑话、奇葩人事、神回复|
|国际|国际社会、时政外交、中东局势、移民、中俄关系、中美关系、中日关系、中欧关系、国际时事、国际局势、国际政务、国际组织、中非关系、中韩关系|
|家居|家居、装修、植物、家具、厨卫电器、家用电器、小户型装修、家居装饰、小家电、家装设计、室内设计、花、DIY、厨具、家居风水、生活常识、设计师、卫浴、厨房|
|健康养生|健康、养生、癌症、中医、减肥、精神病、健身、传染病、药品、睡眠、口腔护理、高血压、推拿、保健品、中药、心血管病、呼吸道疾病、糖尿病、饮食健康、肠胃病、肿瘤、穴位、护理、营养学、食疗、瘦身、心理健康、儿科、皮肤病、神经科学、养肾、瑜伽、胃癌、乳腺癌、临床医学、医学研究、医疗行业|
|教育|大学、高考、幼儿园、英语、数学、语文、公务员、中考、资格考试、创业、求职、成人教育、留学、考研、家庭教育、心理学、职业规划、学前教育、在线教育、外语学习、小学教育、商学院、研究生、中学教育、高中教育|
|军事|航空航天、陆军、海军、武器装备、中国军情、军事历史、空军、导弹、战斗机、航母、军舰、核武器、环球军事、军工业、军事演习、恐怖主义、战争|
|科技|电子商务、移动互联网、移动支付、社交网络、众筹、互联网金融、O2O、产品运营、信息安全、网络安全、软件、运营商、人工智能、通信、市场营销、大数据、云计算、电信、3D打印、生物技术、物联网、智能出行、酷玩、虚拟现实、编程语言、材料科学、创客、科技创投、智能硬件、医药科学、苹果公司、小米科技、ios、消费电子、网络营销|
|数码|手机、数码、电脑、机器人、无人机、Android、笔记本电脑、平板、操作系统、耳机、相机、电视机、智能家居、穿戴设备、家电、数码评测、华为手机、可穿戴设备、影音设备|
|科学|科学、外星生命、天文、科普、生物研究、科学家、太空探索、科幻|
|历史|历史、清朝、中国历史、中国近代史、三国、唐朝、中国古代史、明朝、汉朝、宋朝、春秋战国、世界历史、历史人物、中国现代史|
|旅游|航空、摄影、民用航空、旅游产业、签证、徒步、自驾游、民俗、旅游休闲、亲子出游、背包客、国内旅游、酒店住宿、旅游攻略、欧洲游|
|美食|水果、菜谱、蔬菜、海鲜、调味品、小吃、甜品、烹饪技巧、咖啡、葡萄酒、麻辣美食、糕点、中餐、日本料理、烘焙、美食节目、西餐、饮品、川菜、鲁菜、粤菜、苏菜、浙菜、闽菜、湘菜、徽菜|
|母婴育儿|育儿、怀孕、孕产、产后护理、妇科、婴幼儿护理、母乳喂养、分娩、亲子成长、备孕、玩具、不孕不育、早期教育、婴儿辅食、童书绘本、新生儿、胎教|
|汽车|豪华车、国产车、跑车、德国汽车、商用车、新车、汽车用品、汽车导购、电动汽车、驾照考试、日本汽车、摩托车、二手车、汽车展览、SUV、越野车、汽车产业、韩国汽车、汽车保养、新能源汽车、驾驶技巧、新能源、无人驾驶、汽车保险、汽车租赁、汽车维修、MPV、汽车配件、节能减排、赛车、房车、汽车改装、轿车、卡车、汽车公司|
|情感|婚姻、两性、婚外情、恋爱、正能量、鸡汤、婆媳关系、情感故事、励志、择偶、家庭关系、人际关系|
|社会|交通、婚礼、天气、农村、农民、食品安全、奇闻轶事、彩票、餐饮、水污染、黑社会、医患关系、慈善、社会万象、交通事故、民事纠纷、校园生活、诈骗|
|时尚|时装搭配、美女、美发、模特、化妆、整形、美容、护肤、流行文化、珠宝、奢侈品、男装、时装、化妆品、美体、腕表、男性时尚、时尚潮流、设计、服装设计、街拍、香氛|
|时事|法制、时政、台海时事、民生、社会保险、刑法、反腐倡廉、环境污染、气象灾害、环境保护、地质、计划生育、农村改革、医疗改革、空气污染、养老保险、城市规划、医疗保险、政务监督、国内时政、自然灾害、领土问题、人事任免、事故灾难|
|体育|综合格斗、中国足球、NBA、自行车、中国男足、篮球、钓鱼、国际足球、足球、中超、网球、乒乓球、拳击、台球、排球、CBA、奥运会、欧冠、西甲、英超、户外运动、田径、中国篮球、搏击、游泳、羽毛球、体育八卦、冰雪运动、中甲、跳水、意甲、体操、德甲、棋牌、马拉松、跑步、极限运动、射击、骑行、跆拳道、高尔夫、法甲、F1赛车、棒球、国际象棋、滑冰、滑雪、举重、麻将、马术、扑克、射箭、摔跤、水上运动、跳高、跳远、围棋、武术、中国象棋|
|文化|文化、文学、建筑、艺术、小说、文物、读书、考古、文玩、舞蹈、收藏、美术、诗歌、玉、佛教、书法、雕塑、国学、艺术品、古诗、陶瓷、手工艺、日本文化、话剧、戏剧、哲学、儒家、戏曲、科幻小说、广告设计、网络文学、陶艺、工业设计、中国文学、宗教、穿越小说、创意设计、恐怖小说、玄幻小说、悬疑小说、言情小说、基督教、伊斯兰教、美文、故事、行为艺术、道教、印度教、犹太教、西方哲学、民间故事、拍卖|
|星座运势|生肖、星座、风水、命理、占卜、解梦智商测试、相术、周易、黄历、自然、鬼神|
|音乐|音乐、演唱会、乐器、华语音乐、摇滚乐、民族乐器、民俗音乐、纯音乐、电子音乐、翻唱、歌剧、歌曲、古典音乐、爵士乐、乐评、流行音乐、民谣、欧美音乐、说唱、音乐会、音乐节|
|游戏|网游、电竞、手游、游戏机、RPG游戏、沙盒游戏、塔防游戏、电玩、射击游戏、卡片游戏、冒险游戏、动作游戏、桌游、小游戏、游戏产业、休闲游戏、战略游戏、moba游戏、VR游戏、单机游戏、页游、端游、游戏主播、游戏主机、掌机游戏、主机游戏、XBOX、STEAM|
|娱乐|明星八卦、影视、港台娱乐、电视剧、内地电视剧、电影、内地综艺、电影节、真人秀、综艺、华语片、韩娱、日韩娱乐、欧美娱乐、小品、相声、韩剧、动作片、港台综艺、美剧、欧美电影、韩国综艺、恐怖片、喜剧片、欧美综艺、好莱坞、爱情片、动画电影、港台剧、古装剧、纪录片、科幻片、魔术、偶像剧、青春片、日韩电影、日剧、泰国电影、泰剧、网红、文艺片、舞台剧、战争片、马戏、杂技|
|体育|铅球、铁饼、标枪、跨栏、竞走、冰球、冰壶、手球、帆船、皮划艇、赛艇、水球、柔道、攀岩、冲浪、保龄球、飞镖、击剑、跑酷、橄榄球|


## 附录三：扩展字段参考

### 内容类
#### 图文

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|author_name|	string|	作者名|否|	张三|
|author_portrait_url|	string|作者头像url|否|`	http://www.xxx.baidu.com/author/portrail.jpg`|
|author_path|	string|	作者落地页链接|	否|/pages/author/author|
|author_fans_num|	int	|作者粉丝量|否|10000|
|author_auth|	string|	是否认证作者	|否|1-是 0-否 |
|author_publish_num	|string	|作者发文量	|否|100|
|publish_time|	string|	内容原始发布时间|是|	2018年9月8日|
|img_urls|	string	|文章所有图片url|否|`https://b.bdstatic.com/miniapp/resource/image/headImg.png`|
|channel_id|	int|	频道ID|	否|1000|
|channel|	string|	频道名称	|否|在小程序内所属频道名 示例：萌宠|
|like_num|	int|	点赞量|	否|1000|
|comment_num|	int|	评论量|	否|1000|
|dislike_num|	int	|踩数|否|	1000|
|collect_num	|int	|收藏量|否|	1000|
|share_num|	int	|转发量|否|	1000|
|topic|	string|	话题名|	否|减肥日记|
|comment|	string|	优质评论内容|	否|智能连接人与信息、人与服务、人与万物的开放生态|
|topic_path|	string|	话题落地页链接|	否|/pages/topic/topic|

#### 视频

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|author_name|	string|	作者名|	否|张三|
|author_portrait_url	|string	|	作者头像url|否|	`http://www.xxx.baidu.com/author/portrail.jpg`|
|author_path|	string|	作者落地页链接|		否|/pages/author/author|
|author_fans_num|	int	|作者粉丝量|	否|	1000|
|author_publish_num|	int	|作者发文量|	否|1000|
|author_auth|	int|是否认证作者|	否|	1-是 0-否|
|video_title|	string|	片名|	否|	我不是药神|
|director|	string|	导演|	否|	徐峥|
|lead_role|	string	|主演|	否|徐峥 周一围 王传君 谭卓 杨新鸣|
|presenter|	string|	主持人|		否|何炅|
|guest	|string	|嘉宾	|	否|谢娜|
|publish_time	|string	|内容原始发布时间|是	|2018年9月8日|
|video_duration	|string|	视频时长|	是|按照00:00:00格式填写|
|pc_url	|string	|视频PC播放链接	|是（和h5_url需填一种）|-|
|h5_url	|string	|视频H5播放链接|是（和pc_url需填一种）|-|
|update_time|	string|	更新时间|否|	2018年9月10日 15:36:20|
|channel_id|	int|	频道ID|		否|1002|
|channel|	string|	频道名称|	否|	视频|
|is_pay	|string|	是否付费|	否|	付费|
|play_num	|int	|播放次数|	否|	10000|
|publish_year|	string|	发行年份|	否|	2018年|
|area|	string|	地区	|	否|北京|
|video_status|	string|	视频状态|	否|	正在热映|
|score	|string|	评分|	否|	9.3|
|like_num|	int	|点赞量	|	否|1000|
|comment_num	|int	|评论量|	否|1000|
|collect_num|	int	|收藏量	|	否|1000|
|dislike_num	|int	|踩数|	否|	1000|
|share_num|	int|	转发量|	否|	1000|
|comment	|string	|优质评论内容	|	否|“你敢保证你一辈子不得病？”纯粹、直接、有力！常常感叹：电影只能是电影。但每看到这样的佳作，又感慨：电影不只是电影！由衷的希望这部电影大卖！成为话题！成为榜样！成为国产电影最该有的可能。|
|is_exclusive	|string|	是否独播	|	否|是1，否0 |
|img_urls|	string	|视频内多张图片url（至少3张）JSON格式|	否|`https://b.bdstatic.com/miniapp/resource/image/headImg.png`<p>`https://b.bdstatic.com/miniapp/resource/image/headImg.png`<p>`https://b.bdstatic.com/miniapp/resource/image/headImg.png`|

#### 直播

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|source_name|	string|	主播昵称|是|	张三|
|living_type|	string|	直播状态|是|	online/offline|
|publish_time|	int	|开播时间|是|	10位时间戳|
|end_time| 	int	|关播时间|是|	10位时间戳|
|session_id 	|string	|场次	|是|场次 id|

### 服务类
#### 商品

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	商品名称	|Apple Iphone X|
|price|	string|	价格|	7099|
|favorable_rate	|string|	好评率|	99%|
|category_1|	string|	商品类别（一级）|	电子产品|
|category_2	|string	|商品类别（二级）|	通讯|
|category_3	|string	|商品类别（三级）	|手机|
|brand|	string	|品牌|Apple|
|model	|string	|型号	|(A1865) 64GB|
|inventory	|int	|库存（动态时时数据）|	10000|
|is_failure|	string|	是否失效（已下架/售罄）	|已下架|
|high_comment|	string|	优质评价内容|	手机款式漂亮，颜色我很喜欢，系统流畅，功能齐全，物超所值|

#### 酒店

|参数名|类型|说明|示例|
|---|---|---|---|
|name	|string|	酒店名称|	如家前门店|
|location	|string	|酒店地理位置信息（具体到城市）|	北京西城区|
|score|	string|	酒店评分|	9.6|
|price	|int|	价格	|468|
|star_level|	string|	酒店星级|经济型酒店|
|is_full	|string	|是否满房（动态实时数据）|	是：1，否0|
|high_comment	|string	|优质评价内容|	住的大床房，一楼，胡同里很有接地气的感觉。刚装修的挺干净|

#### 景点

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	景点名称|	故宫|
|location|	string|	景点地理位置信息（具体到城市）|	北京市东城区|
|score|	string|	景点评分|	9.6|
|price|	string|	价格|	60元|
|artificial_tag|	string|	人工tag	|卖点或吸引点，或其他话题性tag。示例：城市观光，亲水避暑|
|is_bookable|	string|	是否可预订（动态实时数据）	|是1，否0|
|high_comment|	string|	优质评价内容|	中国古代宫廷建筑之精华|

#### 美食

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	餐厅名称|	香山饭店|
|location|	string|	餐厅地理位置信息（具体到城市）|	北京海淀|
|favorable_rate	|string|	餐厅好评率|	99%|
|price_per_person	|string	|人均价格|	600元|
|star_level	|string|	星级|	五星级|
|artificial_tag	|string|	人工tag	|餐饮类目或者属性 示例：日料、韩餐、西餐，宴请|
|high_comment|	string|	优质评价内容|	饭店建于1984年，位于香山公园内,饭店由美籍华人。贝聿铭设计，白墙灰瓦，建筑与周围的环境相映成趣。|

#### 医疗

|参数名|类型|说明|示例|
|---|---|---|---|
|disease	|string|	疾病	|心脏病|
|doctor_num|	int|	医生数量|	1000|
|high_comment|	string|	优质评价内容|	妙手回春|

### 工具类

|参数名|类型|说明|示例|
|---|---|---|---|
|scene|	string|	使用场景|	车主违章|
|function|	string|	功能点|	违章查询，在线缴费|
|right_age|	string|	适用年龄/评级|	17岁以上|

### 游戏类

|参数名|类型|说明|示例|
|---|---|---|---|
|is_multi	|string	|单人/多人	|多人1，单人0 |
|is_online|	string|	是否联机|	是1，否0|
|right_age|	string	|适用年龄/评级|	17岁以上|
|language|	string|	语言|	英语|
|game_type|	string|	游戏类型|	动作|
