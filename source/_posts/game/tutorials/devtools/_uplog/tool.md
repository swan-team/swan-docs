### 开发者工具历史更新日志

#### 1.14 版本更新日志

|版本号|更新内容|
|----|----|
|v1.14.8|** New ** <p> **·** 新增组件：live-player；<p> **·** 新增 api：createLivePlayerContext。<p> ** BugFix ** <p> 修复previewImage无法切换图片的问题。
|v1.14.7|** BugFix ** <p> 修复新建项目时清空文件夹的问题。
|v1.14.6|** BugFix ** <p> 修复 cover-image 组件不支持本地图片地址问题；|
|v1.14.5|** BugFix ** <p> 修复部分 ios 机型无法预览的的问题；|
|v1.14.4|** BugFix ** <p>**·** 修复 getExtConfig 返回值异常问题；<p>**·** 修复 input 组件存在自定义 id 时无法输入的问题；<p>**·** 修复 canvas 组件 drawImage 异常的问题。|
|v1.14.3|** New ** <p> showToast 支持自定义图片;<p>** BugFix ** <p> **·** 修复 swan.authorize 失败时返回错误码与真机不一致的问题；<p> **·** 修复 button的open-type 为 opensetting、getuserinfo、getphonenumber 时，不执行回调的问题；<p> **·** 修复 swan.request 的响应头信息中 set-cookie 丢失问题；<p> **·** 修复 canvasToTempFilePath 不执行回调的问题；<p> **·** 修复 swan.openSetting 关闭后不回调 onShow 的问题。|
|v1.14.2|** BugFix ** <p> **·** 修复 input 组件 value 无法动态修改的问题；<p> **·** 修复 chooseVideo 偶尔直接失败的问题；<p> **·** 修复 onShareAppMessage 接口 complete 会执行 2 次的问题；<p> **·** 修复 stopAccelerometer、stopCompass 不执行回调的问题。|
|v1.14.0|** New **<p> 支持 2.0.0 以上版本的基础库。<p>**BugFix**<p> 修复发布体验版本偶现无法正常打开的问题。|

#### 1.13 版本更新日志

|版本号|更新内容|
|----|----|
|v1.13.5|** New ** <p>**·**新增场景值模拟;<p>**·**新增代码片段;<p>**·**新增 api：isLoginSync。<p>** BugFix ** <p> **·** 修复 cover-view 绑定事件不响应的问题；<p>**·**修复 cover-view 绑定事件不影响的问题；<p>**·** 修复 storage 存储带特殊符号「.%」时表现异常的问题。|
|v1.13.4|** BugFix ** <p> **·** 修复 getStorage 返回值编码错误的问题；<p> **·** 修复 uploadFile、downloadFile 缺少 header 导致出错的问题；<p> **·** 修复 request 在 content-type 有多个值的情况下可能会失败的问题；<p> **·** 修复 input placeholder 不显示的问题。|
|v1.13.3|** Change **<p> 优化预览、发布过程中的提示信息。|
|v1.13.2|** Change** <p> **·** 优化 map 组件可进行放大缩小；<p> **·** 优化 web-view 组件 bindmessage 事件兼容到基础库 1.13.x 版本。<p> ** BugFix ** <p> **·** 修复 getStorageSync 返回值类型错误的问题；<p> **·** 修复 input 组件 bindfocus、bindconfirm 事件不回调的问题；<p> **·** 修复 map 组件 bindcontroltap、bindmarkertap 事件对象中 id 错误的问题；<p> **·** 修复 textarea 组件 placeholder 不显示的问题。|
|v1.13.1|** New **<p> 支持 1.13.0 以上版本的基础库。|


#### 1.12 版本更新日志

|版本号|更新内容|
|----|----|
|v1.12.4|** BugFix **<p> 修复 getStorage 和 storage 面板中值被错误编码的问题。|
|v1.12.3 | ** Change** <p> **·** 优化 form 表单组件：report-submit 为 true 时，bindsumbit 方法可获取 formId;   <p> **·** 优化 api 接口参数校验; <p> **·** 优化编辑器 tab 操作。|
|v1.12.2 | ** New**<p> **·** 支持组件：map； <p> **·** 支持API：createMapContext/chooseLocation/openLocation/chooseAddress/chooseInvoiceTitle； <p> **BugFix**<p> 修复 textarea 无法通过 class 修改高度的问题。|
|v1.12.1 | ** New**<p>   增加编辑器功能。|
|v1.12.0|**New**<p>**·** 工具可同时打开多个项目窗口；<p>**·** 增加 AI 能力 api （包括 ocrIdCard, ocrBankCard, ocrDrivingLicense, ocrVehicleLicense, textReview, textToAudio, imageAudit, advancedGeneralIdentify, objectDetectIdentify, carClassify, dishClassify, logoClassify, animalClassify, plantClassify）。<p>**BugFix**<p>修复 webview 组件无法销毁和隐藏的问题。|

#### 1.11 版本更新日志

|版本号|更新内容|
|----|----|
|v1.11.4|**New**<p>增加网络 api 返回值（包括 request, uploadFile, downloadFile ）。<p>**BugFix**<p>修改 getSetting 返回数据格式。|
|v1.11.3|**BugFix**<p>修复部分工程 Launch 事件中无法获取 path 和 query 字段的问题。|
|v1.11.2|**BugFix**<p>**·**  修复 textarea 无法输入的问题；<p>**·** 修复 removeStorage 无法正确删除的问题;<p>**·** 修复应用配置中有单引号无法正确解析的问题;<p>**·** 修复 hideToast 不生效的问题;<p>**·** 修复 Launch 事件中无法获取 path 和 query 字段的问题。|
|v1.11.1|**New**<p> 支持手机联系人 API：addPhoneContact。<p>**BugFix**<p>**·** 修复 canvas 绘制完不显示的问题;<p>**·** 修复登录后未授权却不走错误回调问题;<p>**·** 修复切换基础库时客户端版本不更新的问题;<p>**·** 修复 innerWebview 在基础库 1.10 以上 api 无法调用的问题；<p>**·** 修复分享没有触发生 share 命周期事件的问题。|
| v1.11.0 更新日志|**New**<p>**·** 升级编译工具 2.0.4：新增依赖分析编译模式，支持增量编译，详情参见<a href="https://smartprogram.baidu.com/docs/develop/devtools/uplog_compile/">编译工具更新日志</a>;<p>**·** 新增 API：requestPolymerPayment。<p>**Changes**<p> 优化showModal显示样式。<p>**BugFix**<p>**·** 修复自定义组件引用其它 js 编译出错的问题;<p>**·** 修复模板命名导致编译出错的问题;<p>**·** 修复 webview 组件内无法调用跳转页面能力的问题;<p>**·** 修复分包配置文件中设置模拟器样式不生效的问题。|

#### 1.10 版本更新日志

|版本号|更新内容|
|----|----|
|v1.10.3 |**Change**<p> 分包支持多级目录作为包名。<p>**BugFix**<p> 修复模拟器渲染新增组件出错的问题。|
|v1.10.2|**New**<p>**·** 支持组件：textarea;<p>**·** 自定义编译支持预览；<p>**·** 支持微信小程序转换成智能小程序；<p>**Change**<p>**·** 优化 showToast 显示样式和文字长度限制；<p>**·**  优化录音、录像功能，将音频、视频文件保存到tmp目录；<p>**·** 优化 socket，增加 socket task 个数限制。<p>**BugFix**<p>**·** 修复模拟器切换手机型号 useragent 不变的问题；<p>**·** 修复模拟器在使用setData api 来增加组件时渲染失败的问题。|

#### 1.9 版本更新日志

|版本号|更新内容|
|----|----|
|v1.9.0 |**New**<p>**·** 调试工具支持 android 下真机调试；<p>**·** 编译支持自定义入口页面和参数;<p>**·** 增加清除网络缓存功能。<p>**BugFix**<p>**·** 修复执行 hideTabBa r方法后高度不对的问题；<p>**·** 修复设置缩放后模拟器显示异常的问题；<p>**·** 修复模拟器模拟 android 设置时 swan api 无法调用的问题。|

#### 1.8 版本更新日志

|版本号|更新内容|
|----|----|
|v1.8.0 |**New**<p>**·** 支持组件: video/audio/backgroundAudio；<p>**·** 发布支持自定义版本号；<p>**·** 调试工具 Network 面板支持页面内图片的展示；<p>**·** 增加版本更新提示。<p>**Change**<p> **·** 优化创建、选择工程的错误提示；<p>**·** 新建工程界面增加新建文件夹的选项。<p>**BugFix**<p>**·** 修复模拟器中无法使用鼠标拖动来滚动页面的问题；<p>**·** 修复部分系统下开发者工具图标显示异常的问题；<p>**·** 修复授权缓存无法清除的问题；<p>**·** 修复配置中 backgroundColor 没有生效的问题；<p>**·** 修复打开项目后项目列表未排序的问题；<p>**·** 修复模拟器中切换设备不会刷新的问题。|

#### 1.7 版本更新日志

|版本号|更新内容|
|----|----|
|v1.7.3|**New**<p>**·** 支持 API：chooseVideo/saveVideoToPhotosAlbum/getLocation/onAccelerometerChange/startAccelerometer/stopAccelerometer/onCompassChange/startCompass/stopCompass；<p>**·** 支持组件: web-view；<p>**·** 调试工具增加 Sensors 面板，用于模拟地址、加速度计和罗盘信息；<p>**·** 增加清除授权缓存功能。<p>**Change**<p>预览增加上传人及时间信息，增加错误信息提示。<p>**BugFix**<p>**·**  修复无 AppID 时无法登录成功的问题；<p>**·** 修复切后台时没有 onHide 事件的问题；<p>**·** 修复 picker 组件在重新编译后无法隐藏的 bug；<p>**·**  修复 choseImage 返回文件路径错误的问题；<p>**·** 修复 getSwanId 的返回数据不正确问题。|
|v1.7.2 |**New**<p>**·** 更新工具栏图标；<p>**·**  支持API：recommendSimilarProducts/recommendProducts/setScreenBrightness/getScreenBrightness/setKeepScreenOn/vibrateLong/vibrateShort；<p>**·** 支持组件： open-data；<p>**·** 调试工具增加 Storages 和 App data 面板；<p>**·** 模拟器内 useragent 增加 swan 标识；<p>**·** 增加清除缓存功能。<p>**Change**<p> request 请求增加 referer，格式 `https://smartapp.baidu.com/{appkey}/devtools/page-frame.html`。<p>**BugFix**<p>**·** 优化调试工具通信时序，修复 Swan 面板偶现的白屏问题；<p>**·** 修改模拟器背景色为白色，保持和百度 App 一致；<p>**·** 修复历史工程排序不正确问题；<p>**·** 修复 video 无法播放问题；<p>**·** 修复切换 tab 后，进入任意页面后退无法点击问题。|

#### 1.6 版本更新日志

|版本号|更新内容|
|----|----|
|v1.6.2 |**New**<p>video 组件增加 bind 事件支持。|
|v1.6.1 |**BugFix**<p>**·**  修复 swan.navigateTo 回调执行两次的错误；<p>**·** 修复请求参数被字段增加&字段的错误;<p>**·** 修复退回选择工程页面后选择其他工程卡死的错误;<p>**·** 修复调试器 Network、Swan 面板不稳定的问题。|

#### 1.4 版本更新日志

|版本号|更新内容|
|----|----|
|v1.4.2 |**BugFix**<p>**·** 修复 input 组件的背景颜色和 placeholder 颜色问题；<p>**·** 修复 swan.request 回调函数的语法问题。|
