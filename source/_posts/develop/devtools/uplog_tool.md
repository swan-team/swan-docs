---
title: 开发者工具历史更新日志
header: develop
nav: devtools
sidebar: uplog_tool
---

## 正式版更新日志

### 2.4 版本 

|版本号|更新时间|更新内容|
|--|--|
|2.4.3|2019.7.11|**New**<p>新增发布失败时，弹窗中添加去反馈入口提问题的引导。<p>**Change**<p>删除web化白屏检测功能。<p>**BugFix**<p>修复某些情况下编辑器卡死问题。|
|2.4.2|2019.7.4|**BugFix**<p>修复修改 appId 后点击预览 appId 重置问题。|
|2.4.1|2019.6.27|**New**<p>**·**编辑器新增es6代码提示，开发者在开发时可以获得es6原生api代码提示，提升开发效率；<p>**·**编辑器新增组件自动补全标签功能；<p>**·**编辑器新增组件自动重命名标签功能。<p>**Change**<p>点击导航栏“+”号即可在选定目录新建文件。|
|2.4.0|2019.6.20|**New**<p>**·**编辑器新增px转rpx功能，开发者可以在设置px时获得对应的rpx智能提示；<p>**·**编辑器增加文件路径提示，开发者可以在开发时获得可用文件路径提示；<p>**·**编辑器支持 json 文件触发代码片段提示；<p>**·**增加云控开关，支持 web 化打包、小刷新最低 swan-core 版本等配置。<p>**Change**<p>**·**优化编辑器代码片段提示，开发者可以在直接在App、Page代码片段中使用this调用自定义函数；<p>**·**编辑器新增快速打开文件配度排序，开发者可以在快速打开文件中快速搜索到匹配的文件。<p>**BugFix**<p>**·**修复云端下载后的宿主配置无法保存的的问题。

### 2.2 版本 

|版本号|更新时间|更新内容|
|--|--|
|2.2.9|2019.6.13|**New**<p>**·**编译模式添加提示信息，增强用户理解；<p>**·**添加外观设置，可设置编辑器字体，字号和行距；<p>**·**在开发者工具中就可以设置包运行时的最低版本号；<p>**·**编辑器支持小程序api 返回值与 callback参数属性值代码提示；<p>**·**新增独立分包。<p>**Change**<p>**·**编辑器组件属性支持可选项提示；<p>**·**菜单栏数据可以实时更新，优化使用体验；<p>**·**模拟器增加模拟更新说明。|
|2.2.8|2019.6.6|**New**<p>**·**Swan Element 中新增盒模型，开发者可以高亮、修改元素的盒模型。<p>**Change**<p>点击调试器可以关闭工具中的浮层。<p>**BugFix**<p>**·**修复Appid不合法文案优化的问题；<p>**·**修复切换项目信息tab时，基础库版本展示错误的问题；<p>**·**修复swan.request的返回头不合法的parseError问题。|
|2.2.7|2019.5.30|**New**<p>**·**云测试开放全量入口；<p>**·**项目信息面板增加编译配置选项；<p>**·**模拟器底部页面参数可复制；<p>**·**预览窗口中的BundleID可复制。<p>**Change**<p>**·**登录二维码文案优化；<p>**·**request增加队列请求机制；<p>**·**模拟器webview设置为移动设备模式；<p>**·**模拟器中webview如果域名无校验，给出错误提示页面。<p>**BugFix**<p>**·**模拟器返回按钮增大点击区域。|
|2.2.6|2019.5.23|**New**<p>**·**编辑器新增格式化选定代码功能；<p>**·**编辑器支持css文件格式化；<p>**·**编辑菜单新增跳转到指定文件、最近文件、上一个编辑器、下一个编辑器功能。<p>**Change**<p>**·**优化 Storage 存储性能；<p>**·**开发者工具调试器可以弹出独立窗口；<p>**·**[项目配置文件](https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/)支持小程序源码子路径设置。<p>**BugFix**<p>**·**修复video不支持本地文件问题；<p>**·**修复全屏时偶现关闭、最大化等按钮消失的问题。|
|2.2.4|2019.5.16|**New**<p>**·**设置面板新增编辑 tab 及相关功能；<p>**·**编辑器新增代码片段提示；<p>**·**模拟器增加弹出独立窗口功能；<p>**·**模拟器增加扫码、震动、截屏等模拟功能。<p>**Change**<p>工具2.2.4及以上版本，项目信息页面删除web化开关功能，默认开启web化。|
|2.2.3|2019.5.9|**New**<p>**·**编辑器支持新建filter文件；<p>**·**增加设置代理功能；<p>**·**增加设置快捷键功能。<p>**Change**<p>**·**通过点击“工具-工具栏管理”或右击工具栏区域可显示工具栏管理弹窗；<p>**·**通过“查看-工具栏”对工具栏区域进行展现、隐藏操作；<p>**·**优化菜单栏中“项目信息”功能。|
|2.2.2|2019.4.25|**New**<p>**·**新增模拟器对 swan.setMenuOpacity 和 swan.confirmAppClose 的支持；<p>**·**新增全局搜索功能；<p>**·**新增清除网络缓存功能；<p>**·**新增切换账号菜单项，可通过该菜单项对当前已登录账号进行切换；<p>**·**查看菜单栏下面增加编辑器、调试器、模拟器、目录树的隐藏和展现菜单项以及快捷键。<p>**·**新增调试面板开启 Security 面板。<p>**Change**<p>**·**点击菜单关闭按钮切后台；<p>**·**通知中心等级高的消息交互优化；<p>**·**添加提示信息，升级自然搜索工具；<p>**·**首页优化，只从 app.json 中 pages 数组第一项读取信息；<p>**·**域名校验关闭时，跳过证书校验。|
|2.2.1|2019.4.18|**New**<p>**·**编辑器api提示支持多参数、多级命名空间、宿主扩展；<p>**·**编辑器支持新建小游戏文件；<p>**·**编辑器支持新建文件保存全部功能；<p>**·**体验评分新增14个评分项；<p>**·**菜单栏调整，新增功能入口；<p>**·**新增模拟器布局位置切换。|
|2.2.0|2019.4.12|**Change**<p>优化欢迎页面交互及样式。|

### 2.0 版本 

|版本号|更新时间|更新内容|
|--|--|
|2.0.16|2019.4.8|**New**<p>编辑器新增 一键收起功能、目录在终端打开功能、Copy Path 、Copy Relative Path功能。|
|2.0.15|2019.3.28|**New**<p>支持更多尺寸的自定义模拟器尺寸（例如1920*780超宽屏）。<p>**Change**<p>**·**模拟器布局优化；<p>**·**优化模拟器加载速度。|
|2.0.14|2019.3.22|**New**<p> 支持 TP 的 web 化预览。<p>**Change** <p>**·**优化项目启动 loading 展示；<p>**·**优化编辑器标签、API 提示；<p>**·**优化 Mac 下自动升级使用体验；<p>**·**提升 Windows 安装速度，减小包体积。<p>**BugFix**<p>**·**修复 switchtab 在非 tab 页跳转的问题；<p>**·**修复 canvasToTempFilePath 不执行回调的问题。|
|2.0.13|2019.3.15|**BugFix**<p>修复在调试面板中点击链接无法在浏览器中打开网页的问题。|
|2.0.12|2019.3.11|**BugFix**<p>修复远程调试鉴权问题。|
|2.0.11|2019.3.8|**New**<p>**·**新增代码片段功能；<p>**·**新增体验评分功能。<p>**BugFix**<p>修复审查元素时偶现无法选中节点问题。|
|2.0.10|2019.2.28|**New**<p>**·**新增模拟器部分常见设备及新增自定义设备功能；<p>**·**新增模拟器静音功能；<p>**·**新增模拟器底 bar 页面路径、场景值、页面参数展现功能；<p>**·**新增业务域名及服务端域名校验；<p>**·**调试面板新增功能：在 Swan Element 面板中点击 css 链接可在编辑器中打开相应文件；<p>**·**新增 Web 化白屏检测功能。<p>**Change**<p>优化版本升级流程。<p>**BugFix**<p>修复 getSystemInfo 返回 version 错误的问题。|
|2.0.7 |2019.1.31|**New**<p>支持页面配置项 disableScroll。|
|2.0.6 |2019.1.24|**New**<p>**·**增加模拟器中 AR 相关能力暂不支持的提示；<p>**·**增加模拟器的顶部状态栏；<p>**·**增加模拟器中重启小程序按钮；<p>**·**增加模拟器中 navigationStyle 配置项；<p>**·**增加 Swan Element 面板的节点高亮功能；<p>**·**增加展示 Swan Element 面板节点的 Dataset 属性。<p>**Change**<p>全新的 Swan Element 面板代替 Swan 面板。|
|2.0.4 |2019.1.15|**New**<p>新增 button 组件 bindgetphonenumber 属性的支持。<p>**BugFix**<p>**·**调整 request API 重定向时的错误提示；<p>**·**修复切换系统语言时造成的英文加载失效问题；<p>**·**修复选择编译模式时会使用未选中的编译模式的问题。|
|2.0.0 |2019.1.07| **New**<p>**·**支持api updateManager；<p>**·**编辑器新增快捷键 cmd+w / ctrl+w ,关闭当前tab；<p>**·** 编辑器支持tab切换时回到原来位置。<p>**Change**<p>**·**保存登录状态,重启不需要重新登录；<p>**·**模拟器部分登录和工具主体登录分离,切换模拟器内账号、清除缓存不会导致开发者账号登录状态被清除了；<p>**·** 调试器中AppData、Storage、Sensor 整体重写；<p>**·**新建工程时提供空白脚手架工程；<p>**·**新建工程时不再会覆盖目录下内容；<p>**·**打开时会恢复上次界面退出时的状态；<p>**·**授权和清除授权时会同步到手机端。<p>**BugFix**<p>**·**修复刷新时websocket没有正确断开连接的问题；<p>**·**修复getSetting、openSetting返回数据格式错误的问题。|

### 1.14 版本 


|版本号|更新内容|
|----|----|
|v1.14.16|** Change** <p> **·** 优化预览，提高预览速度；<p> **·**优化web化白屏检测。|
|v1.14.14|** New ** <p>新增web化预览白屏检测功能。<p> ** BugFix ** <p> **·** 修复getUserInfo授权拒绝没有返回临时数据；<p> **·**修复getSystemInfo返回高度与端上不一致；<p> **·**修复canvas无法绘制渐变的问题。|
|v1.14.13|** BugFix ** <p> **·** 修复cover-image不显示绝对路径图片问题；<p> **·**修复getStroage读取不存在的key时不走fail方法的问题；<p> **·**修复request时referer地址不变一直包含testappid的问题；<p> **·**修复canvasGetImageData、canvasPutImageData接口回调不执行的问题。|
|v1.14.12|** New ** <p> 添加web化预览开关，在项目信息中可打开/关闭web化预览。<p> ** BugFix ** <p> **·** 修复高版本基础库 pageScrollTo 无效的问题；<p> **·** 修复上传文件http协议中body格式问题。
|v1.14.11|** Change ** <p> 支持2.5.x、2.10.x版本的基础库。 <p> ** BugFix ** <p> 修复Image组件不支持绝对路径的问题。
|v1.14.8|** New ** <p> **·** 新增组件：live-player；<p> **·** 新增api：createLivePlayerContext。<p> ** BugFix ** <p> 修复previewImage无法切换图片的问题。
|v1.14.7|** BugFix ** <p> 修复新建项目时清空文件夹的问题。
|v1.14.6|** BugFix ** <p> 修复cover-image组件不支持本地图片地址问题；|
|v1.14.5|** BugFix ** <p> 修复部分ios机型无法预览的的问题；|
|v1.14.4|** BugFix ** <p>**·** 修复getExtConfig返回值异常问题；<p>**·** 修复input组件存在自定义id时无法输入的问题；<p>**·** 修复canvas组件drawImage异常的问题。|
|v1.14.3|** New ** <p> showToast支持自定义图片;<p>** BugFix ** <p> **·** 修复swan.authorize失败时返回错误码与真机不一致的问题；<p> **·** 修复button的open-type为opensetting、getuserinfo、getphonenumber时，不执行回调的问题；<p> **·** 修复swan.request的响应头信息中set-cookie丢失问题；<p> **·** 修复canvasToTempFilePath不执行回调的问题；<p> **·** 修复swan.openSetting关闭后不回调onShow的问题。|
|v1.14.2|** BugFix ** <p> **·** 修复input组件value无法动态修改的问题；<p> **·** 修复chooseVideo偶尔直接失败的问题；<p> **·** 修复onShareAppMessage接口complete会执行2次的问题；<p> **·** 修复stopAccelerometer、stopCompass不执行回调的问题。|
|v1.14.0|** New **<p> 支持2.0.0以上版本的基础库。<p>**BugFix**<p> 修复发布体验版本偶现无法正常打开的问题。|

### 1.13 版本 

|版本号|更新内容|
|----|----|
|v1.13.5|** New ** <p>**·**新增场景值模拟;<p>**·**新增代码片段;<p>**·**新增api：isLoginSync。<p>** BugFix ** <p> **·** 修复cover-view绑定事件不响应的问题；<p>**·**修复cover-view绑定事件不影响的问题；<p>**·** 修复storage存储带特殊符号「.%」时表现异常的问题。|
|v1.13.4|** BugFix ** <p> **·** 修复getStorage返回值编码错误的问题；<p> **·** 修复uploadFile、downloadFile缺少header导致出错的问题；<p> **·** 修复request在content-type有多个值的情况下可能会失败的问题；<p> **·** 修复input placeholder不显示的问题。|
|v1.13.3|** Change **<p> 优化预览、发布过程中的提示信息。|
|v1.13.2|** Change** <p> **·** 优化map组件可进行放大缩小；<p> **·** 优化web-view组件bindmessage事件兼容到基础库1.13.x版本。<p> ** BugFix ** <p> **·** 修复getStorageSync返回值类型错误的问题；<p> **·** 修复input组件bindfocus、bindconfirm事件不回调的问题；<p> **·** 修复map组件bindcontroltap、bindmarkertap事件对象中id错误的问题；<p> **·** 修复textarea组件placeholder不显示的问题。|
|v1.13.1|** New **<p> 支持1.13.0以上版本的基础库。|



### 1.12版本 

|版本号|更新内容|
|----|----|
|v1.12.4|** BugFix **<p> 修复 getStorage 和 storage 面板中值被错误编码的问题。|
|v1.12.3 | ** Change** <p> **·** 优化form表单组件：report-submit为true时，bindsumbit方法可获取formId;   <p> **·** 优化api接口参数校验; <p> **·** 优化编辑器tab操作。|
|v1.12.2 | ** New**<p> **·** 支持组件：map； <p> **·** 支持API：createMapContext/chooseLocation/openLocation/chooseAddress/chooseInvoiceTitle； <p> **BugFix**<p> 修复textarea无法通过class修改高度的问题。|
|v1.12.1 | ** New**<p>   增加编辑器功能。|
|v1.12.0|**New**<p>**·** 工具可同时打开多个项目窗口；<p>**·** 增加AI能力api（包括 ocrIdCard, ocrBankCard, ocrDrivingLicense, ocrVehicleLicense, textReview, textToAudio, imageAudit, advancedGeneralIdentify, objectDetectIdentify, carClassify, dishClassify, logoClassify, animalClassify, plantClassify）。<p>**BugFix**<p>修复webview组件无法销毁和隐藏的问题。|

### 1.11版本 

|版本号|更新内容|
|----|----|
|v1.11.4|**New**<p>增加网络api返回值（包括 request, uploadFile, downloadFile ）。<p>**BugFix**<p>修改 getSetting 返回数据格式。|
|v1.11.3|**BugFix**<p>修复部分工程Launch事件中无法获取path和query字段的问题。|
|v1.11.2|**BugFix**<p>**·**  修复textarea无法输入的问题；<p>**·** 修复removeStorage无法正确删除的问题;<p>**·** 修复应用配置中有单引号无法正确解析的问题;<p>**·** 修复hideToast不生效的问题;<p>**·** 修复Launch事件中无法获取path和query字段的问题。|
|v1.11.1|**New**<p> 支持手机联系人API：addPhoneContact。<p>**BugFix**<p>**·** 修复canvas绘制完不显示的问题;<p>**·** 修复登录后未授权却不走错误回调问题;<p>**·** 修复切换基础库时客户端版本不更新的问题;<p>**·** 修复innerWebview在基础库1.10以上api无法调用的问题；<p>**·** 修复分享没有触发生share命周期事件的问题。|
| v1.11.0 更新日志|**New**<p>**·** 升级编译工具2.0.4：新增依赖分析编译模式，支持增量编译，详情参见<a href="https://smartprogram.baidu.com/docs/develop/devtools/uplog_compile/">编译工具更新日志</a>;<p>**·** 新增API：requestPolymerPayment。<p>**Changes**<p> 优化showModal显示样式。<p>**BugFix**<p>**·** 修复自定义组件引用其它js编译出错的问题;<p>**·** 修复模板命名导致编译出错的问题;<p>**·** 修复webview组件内无法调用跳转页面能力的问题;<p>**·** 修复分包配置文件中设置模拟器样式不生效的问题。|

### 1.10版本 

|版本号|更新内容|
|----|----|
|v1.10.3 |**Change**<p> 分包支持多级目录作为包名。<p>**BugFix**<p> 修复模拟器渲染新增组件出错的问题。|
|v1.10.2|**New**<p>**·** 支持组件：textarea;<p>**·** 自定义编译支持预览；<p>**·** 支持微信小程序转换成智能小程序；<p>**Change**<p>**·** 优化showToast显示样式和文字长度限制；<p>**·**  优化录音、录像功能，将音频、视频文件保存到tmp目录；<p>**·** 优化socket，增加socket task个数限制。<p>**BugFix**<p>**·** 修复模拟器切换手机型号useragent不变的问题；<p>**·** 修复模拟器在使用setData api来增加组件时渲染失败的问题。|

### 1.9版本 

|版本号|更新内容|
|----|----|
|v1.9.0 |**New**<p>**·** 调试工具支持 android 下真机调试；<p>**·** 编译支持自定义入口页面和参数;<p>**·** 增加清除网络缓存功能。<p>**BugFix**<p>**·** 修复执行hideTabBar方法后高度不对的问题；<p>**·** 修复设置缩放后模拟器显示异常的问题；<p>**·** 修复模拟器模拟android设置时swan api无法调用的问题。|

### 1.8版本 

|版本号|更新内容|
|----|----|
|v1.8.0 |**New**<p>**·** 支持组件: video/audio/backgroundAudio；<p>**·** 发布支持自定义版本号；<p>**·** 调试工具 Network 面板支持页面内图片的展示；<p>**·** 增加版本更新提示。<p>**Change**<p> **·** 优化创建、选择工程的错误提示；<p>**·** 新建工程界面增加新建文件夹的选项。<p>**BugFix**<p>**·** 修复模拟器中无法使用鼠标拖动来滚动页面的问题；<p>**·** 修复部分系统下开发者工具图标显示异常的问题；<p>**·** 修复授权缓存无法清除的问题；<p>**·** 修复配置中 backgroundColor 没有生效的问题；<p>**·** 修复打开项目后项目列表未排序的问题；<p>**·** 修复模拟器中切换设备不会刷新的问题。|

### 1.7版本 

|版本号|更新内容|
|----|----|
|v1.7.3|**New**<p>**·** 支持API：chooseVideo/saveVideoToPhotosAlbum/getLocation/onAccelerometerChange/startAccelerometer/stopAccelerometer/onCompassChange/startCompass/stopCompass；<p>**·** 支持组件: web-view；<p>**·** 调试工具增加 Sensors 面板，用于模拟地址、加速度计和罗盘信息；<p>**·** 增加清除授权缓存功能。<p>**Change**<p>预览增加上传人及时间信息，增加错误信息提示。<p>**BugFix**<p>**·**  修复无 AppID 时无法登录成功的问题；<p>**·** 修复切后台时没有 onHide 事件的问题；<p>**·** 修复 picker 组件在重新编译后无法隐藏的bug；<p>**·**  修复 choseImage 返回文件路径错误的问题；<p>**·** 修复 getSwanId 的返回数据不正确问题。|
|v1.7.2 |**New**<p>**·** 更新工具栏图标；<p>**·**  支持API：recommendSimilarProducts/recommendProducts/setScreenBrightness/getScreenBrightness/setKeepScreenOn/vibrateLong/vibrateShort；<p>**·** 支持组件： open-data；<p>**·** 调试工具增加 Storages 和 App data 面板；<p>**·** 模拟器内  useragent 增加 swan 标识；<p>**·** 增加清除缓存功能。<p>**Change**<p> request 请求增加 referer，格式 `https://smartapp.baidu.com/{appkey}/devtools/page-frame.html`。<p>**BugFix**<p>**·** 优化调试工具通信时序，修复 Swan 面板偶现的白屏问题；<p>**·** 修改模拟器背景色为白色，保持和百度App一致；<p>**·** 修复历史工程排序不正确问题；<p>**·** 修复 video 无法播放问题；<p>**·** 修复切换 tab 后，进入任意页面后退无法点击问题。|

### 1.6版本 

|版本号|更新内容|
|----|----|
|v1.6.2 |**New**<p>video 组件增加 bind 事件支持。|
|v1.6.1 |**BugFix**<p>**·**  修复 swan.navigateTo 回调执行两次的错误；<p>**·** 修复请求参数被字段增加&字段的错误;<p>**·** 修复退回选择工程页面后选择其他工程卡死的错误;<p>**·** 修复调试器 Network、Swan 面板不稳定的问题。|

### 1.4版本 

|版本号|更新内容|
|----|----|
|v1.4.2 |**BugFix**<p>**·** 修复 input 组件的背景颜色和 placeholder 颜色问题；<p>**·** 修复 swan.request 回调函数的语法问题。|

## Beta版更新日志

### 2.3 版本 
|版本号|更新时间|更新内容|
|--|--|
|2.3.0|2019.5.8|**New**<p>模拟器支持小程序独立分包调试功能。|