/***针对失效链接的处理逻辑***/
!function(pathname){
    var urlMap = {
        '/docs/design/principle/':'/docs/design/overview/introduction/',
        '/docs/design/component/nav/':'/docs/design/component/topnav/',
        '/docs/develop/server/power_exp/':'/docs/develop/server/power/#4-投放服务提交素材接口',
        '/docs/develop/flow/rank/':'/docs/introduction/rank/',
        '/docs/develop/devtools/uplog/':'/docs/develop/devtools/page_start/',
        '/docs/develop/api/seo/':'/docs/develop/api/open/swan-setPageInfo/',
        '/docs/develop/tutorial/shine/':'/docs/develop/swan/version/',
        '/docs/game/introduction/prerare/enter/':'/docsgame/introduction/prerare/enter_application/',
        '/docs/game/operations/service/service/':'/docs/game/operations/service/provision/',
        '/docs/game/operations/game/game/':'/docs/game/operations/game/special/',
        '/docs/game/tutorials/tutorials/tutorials/':'/docs/game/tutorials/howto/dev/',
        '/docs/game/tutorials/ad/index/': '/docs/game/tutorials/adTutorial/index/',
        '/docs/game/tutorials/ad/banner/': '/docs/game/tutorials/adTutorial/bannerDoc/',
        '/docs/game/tutorials/ad/rewardedVideo/': '/docs/game/tutorials/adTutorial/rewardedVideo/',
        '/docs/game/api/ad/swan.createBannerAd/': '/docs/game/api/adApi/swan.createBannerAd/',
        '/docs/game/api/ad/bannerAd/': '/docs/game/api/adApi/bannerDoc/',
        '/docs/game/api/ad/swan.createRewardedVideoAd/': '/docs/game/api/adApi/swan.createRewardedVideoAd/',
        '/docs/game/api/ad/rewardedVideoAd/': '/docs/game/api/adApi/rewardedVideoAd/',
        '/docs/game/api/ad/ad/': '/docs/game/api/adApi/swan.createBannerAd/',
        '/docs/develop/cloud-develop/introduction/':'/docs/develop/cloud/cloud_info/',
        '/docs/develop/tutorial/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/codedir/':'/docs/develop/fuctionlist/list/',
        '/docs/develop/api/pageinfo/': '/docs/develop/api/open/swan-setPageInfo/',
        '/docs/develop/devtools/show_sur/': '/docs/develop/devtools/page_start/',
        '/docs/develop/devtools/uplog_tool/': '/docs/develop/devtools/uplog_tool_normal/',
        '/docs/introduction/single/': '/docs/introduction/rank_single/',
        '/docs/develop/function/single/': '/docs/introduction/rank_single/',
        '/docs/develop/api/nacomponent/': '/docs/develop/api/show/nacomponent/',
        '/docs/develop/api/open_authorize/': '/docs/develop/api/open/authorize_list/',
        '/docs/develop/web/start/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/web/detail/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/index_first/': '/docs/develop/tutorial/install/',
        '/docs/operations/thirdparty/': '/docs/operations/thirdparty_agreement/',
        '/docs/introduction/tiebaintroduction/': '/docs/introduction/tieba/',
        '/docs/introduction/preparation/': '/docs/introduction/register_prepare/',
        '/docs/develop/function/apply_refund/': '/docs/develop/function/tune_up_applyorderrefund/',
        '/docs/develop/devtools/show_short/': '/docs/develop/devtools/set_shortcutkey/',
        '/docs/develop/devtools/show/': '/docs/develop/devtools/page_start/',
        '/docs/data/guideline/': '/docs/data/target_user/',
        '/docs/design/component/choose/': '/docs/design/component/selection/',
        '/docs/design/component/feedback/': '/docs/design/component/toast/',
        '/docs/design/component/nav/': '/docs/design/component/topnav/',  
        '/docs/design/component/toptab/': '/docs/design/component/topnav/',  
        '/docs/design/download/': '/docs/design/resource/uikit/',  
        '/docs/design/download/load/': '/docs/design/resource/uikit/', 
        '/docs/design/index/': '/docs/design/principle/easytouse/',  
        '/docs/design/principle/clear/': '/docs/design/principle/hierarchical/',  
        '/docs/design/principle/ease/': '/docs/design/principle/innovation/',  
        '/docs/design/principle/keynote/': '/docs/develop/fuctionlist/list/',
        '/docs/design/specification/component/': '/docs/design/component/topnav/',
        '/docs/design/specification/': '/docs/design/component/topnav/',
        '/docs/design/specification/layout/': '/docs/design/foundation/layout/',
        '/docs/design/specification/pic/': '/docs/design/foundation/pic/',
        '/docs/design/specification/write/': '/docs/design/foundation/writing/',
        '/docs/develop/api/ai/': '/docs/develop/api/ai/ai/',
        '/docs/develop/api/ai_audio/': '/docs/develop/api/ai/audio/',
        '/docs/develop/api/ai_audit/': '/docs/develop/api/ai/audit/',
        '/docs/develop/api/ai_card/': '/docs/develop/api/ai/ocr_swan-ai-ocrIdCard/',
        '/docs/develop/api/ai_classify/': '/docs/develop/api/ai/classify_swan-ai-carClassify/',
        '/docs/develop/api/ai_face/': '/docs/develop/api/ai/face_swan-ai-faceDetect/',
        '/docs/develop/api/ai_image/': '/docs/develop/api/ai/audit/',
        '/docs/develop/api/ai_ocr/': '/docs/develop/api/ai/ocr_swan-ai-ocrIdCard/',
        '/docs/develop/api/ai_text/': '/docs/develop/api/ai/text_swan-ai-textReview/',
        '/docs/develop/api/ai_voice/': '/docs/develop/api/ai/voice_swan-ai-getVoiceRecognizer/',
        '/docs/develop/api/ai_word/': '/docs/develop/api/ai/word/',
        '/docs/develop/api/base_app_event/': '/docs/develop/api/base_app_event/swan-onPageNotFound/',
        '/docs/develop/api/canvas/': '/docs/develop/api/show/canvas/',
        '/docs/develop/api/custom_component/': '/docs/develop/api/show/custom_component/',
        '/docs/develop/api/data/': '/docs/develop/api/open/swan-reportAnalytics/',
        '/docs/develop/api/debug/': '/docs/develop/api/open/swan-setEnableDebug/',
        '/docs/develop/api/device/': '/docs/develop/api/apilist/',
        '/docs/develop/api/device_accelerometer/': '/docs/develop/api/device_sys/swan-onAccelerometerChange/',
        '/docs/develop/api/device_battery/': '/docs/develop/api/device_sys/swan-getBatteryInfo/',
        '/docs/develop/api/device_call/': '/docs/develop/api/device_sys/swan-makePhoneCall/',
        '/docs/develop/api/device_capture/': '/docs/develop/api/device_sys/swan-onUserCaptureScreen/',
        '/docs/develop/api/device_clipboard/': '/docs/develop/api/device_sys/swan-setClipboardData/',
        '/docs/develop/api/device_compass/': '/docs/develop/api/device_sys/swan-onCompassChange/',
        '/docs/develop/api/device_direction/': 'docs/develop/api/device_sys/swan-onDeviceMotionChange/',
        '/docs/develop/api/device_network/': '/docs/develop/api/device_sys/swan-getNetworkType/',
        '/docs/develop/api/device_onmemory/': '/docs/develop/api/device_sys/onmemory/',
        '/docs/develop/api/device_phonecontact/': '/docs/develop/api/device_sys/swan-addPhoneContact/',
        '/docs/develop/api/device_scan/': '/docs/develop/api/device_sys/swan-scanCode/',
        '/docs/develop/api/device_screen/': '/docs/develop/api/device_sys/swan-setScreenBrightness/',
        '/docs/develop/api/device_sys/': '/docs/develop/api/device_sys/swan-getSystemInfo/',
        '/docs/develop/api/device_vibrate/': '/docs/develop/api/device_sys/swan-vibrateLong/',
        '/docs/develop/api/ext/': '/docs/develop/api/apilist/',
        '/docs/develop/api/ext0/': '/docs/develop/api/getextconfig/swan-getExtConfig/',
        '/docs/develop/api/file/': '/docs/develop/api/apilist/',
        '/docs/develop/api/file_open/': '/docs/develop/api/file/open/',
        '/docs/develop/api/file_remove/': '/docs/develop/api/file/remove/',
        '/docs/develop/api/file_save/': '/docs/develop/api/file/save_swan-saveFile/',
        '/docs/develop/api/get/': '/docs/develop/api/open/swan-getUpdateManager/',
        '/docs/develop/api/getExtConfig/': '/docs/develop/api/getextconfig/swan-getExtConfig/',
        '/docs/develop/api/getExtConfig/swan-getExtConfig/': '/docs/develop/api/getextconfig/swan-getExtConfig/',
        '/docs/develop/api/getExtConfig/swan-getExtConfigSync/': '/docs/develop/api/getextconfig/swan-getExtConfigSync/',
        '/docs/develop/api/getUpdateManager/': '/docs/develop/api/open/swan-getUpdateManager/',
        '/docs/develop/api/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/list/': '/docs/develop/api/apilist/',
        '/docs/develop/api/location/': '/docs/develop/api/apilist/',
        '/docs/develop/api/location_get/': '/docs/develop/api/location/swan-getLocation/',
        '/docs/develop/api/location_map/': '/docs/develop/api/location/swan-createMapContext/',
        '/docs/develop/api/location_open/': '/docs/develop/api/location/swan-openLocation/',
        '/docs/develop/api/media/': '/docs/develop/api/apilist/',
        '/docs/develop/api/media_LivePlayerContext/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_arcameracontext/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_backgroundaudiomanager/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_cameraContext/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_createinneraudiocontext/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_image/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_recorder/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_video/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/media_videoContext/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/menu_info/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/net/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/net_request/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/net_rule/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/net_uploadfile/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/net_webSocket/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/nexttick/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_chooseAddress/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_chooseInvoiceTitle0/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_chooseInvoiceTitle1/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_chooseinvoicetitle/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_community/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_feed/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_infomation/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_log/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_login/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_payment/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_preloadsubpackage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_replyeditor/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_riskInfo/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_setting/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_share/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_smartgameprogram/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_smartprogram/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/open_userInfo/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/protocol/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_background/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_canvas/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_createAnimation/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_navigationbar/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_pageScrollTo/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_pull/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_query/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_tab/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_tabBar/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/show_toast/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/storage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/storage_remove/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/storage_save/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/timer/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/url_query/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/api/webview/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_essentials/database/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_essentials/function/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_essentials/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_essentials/storage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_essentials/user/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/cloud_storage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/console_bos/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/console_database/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/console_functions/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/console_overview/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/call_function/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/database_guide/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/function_call_function/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/function_guide/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/quota/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/storage_guide/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/user_auth_guide/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/guide/workspace/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/cloud/server_sdk/function/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/base/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/base_animation-view/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/componet/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/componetlist/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/cover-view/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_button/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_checkbox/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_form/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_input/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_label/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_picker/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_radio/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_slider/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_switch/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/form_textarea/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/formlist/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/list/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/map_circles/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/map_controls/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/map_polyline/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/map_position/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/media/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/movable-area/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/open_open-data/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/scroll-view/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/swiper/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/view/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/component/view_movable-are/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/debug/ideremotetarget/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/debug/remotedebugging/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/debug/remoterelease/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/debug/remotetargettool/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/beta/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/download/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/editor/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/move/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/page/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/plain/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/projectconfig/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/setting/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/show_dev/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/smartappdebug/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/smartappdebug_function/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/smartappdebug_tool/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/devtools/toolversion/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/apifaq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/confaq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/framworkfaq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/frequently/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/toolfaq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/faq/webfaq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/flow/alading/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/flow/intro/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app-service/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app-service_getCurrentPages/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app-service_life/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app-service_page/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app-service_register/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app_service_getcurrentpages/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/app_service_life/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/canvas/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/client-lib/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/compatibility/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/conf/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/dir/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/logic/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/performance-point/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/router/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/storage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/view/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/framework/view_Filter/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/function/aliyun_v2/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/function/storage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/plugins/limit_api/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/plugins/limit_components/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/plugins/plugins_develop/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/plugins/survey/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/plugins/use/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/oauth/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/oauth_intr/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/oauth_pro/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/power/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/power_api/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/upstream/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/server/web_canonical/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/simple/codedir/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/simple/index/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/swan/shine/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/address/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/api/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/apppage/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/checkname/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/create/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/customer/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/customerability/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/datastatistics/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/deciphering/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/develop/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/domain/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/error/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/info/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/log/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/login/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/module/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/paymentservice/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/pro/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/publication/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/register/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/sitemap/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/third/upload/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/appchangelog/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/compatibility/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_api/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_con/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_css/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_page/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_route/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_start/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/dev_swan/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/faq/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/frame/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/page_conf/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/process_data/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/process_life/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/process_page/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/swanchangelog/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/tutorial/version/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/web/proposal/': '/docs/develop/fuctionlist/list/',
        '/docs/develop/web/webintroduction/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/access/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/adaccess/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/auditing_info/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/authenticity_charge/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/demo/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/feedput/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/instead/': '/docs/develop/fuctionlist/list/',
        '/docs/introduction/register/': '/docs/develop/fuctionlist/list/',
        '/docs/operations/example/': '/docs/develop/fuctionlist/list/',
        '/docs/operations/list/': '/docs/develop/fuctionlist/list/',
        '/docs/operations/standard/': '/docs/develop/fuctionlist/list/',
        '/docs/operations/thirdparty_law/': '/docs/develop/fuctionlist/list/'
    };
    urlMap[pathname] && location.replace(urlMap[pathname]);
}(location.pathname);

!function(url) {
    var urlMap = {
        '/docs/develop/devtools/smartappdebug_function/#自定义预处理/': '/docs/develop/devtools/smartappdebug_function_pre/',
        '/docs/develop/swan/compatibility/#基础库最低版本设置': '/docs/develop/swan/compatibility_version/',
        '/docs/develop/devtools/uplog_tool/#正式版更新日志/': '/docs/develop/devtools/uplog_tool_normal/',
        '/docs/develop/api/open_authorize/#authorize/': '/docs/develop/api/open/authorize_swan-authorize/',
        '/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E/': '/docs/develop/api/open/log/',
        '/docs/develop/api/open_log/#login/': '/develop/api/open/log_swan-login/',
        '/docs/develop/api/open_log/#isLoginSync/': '/docs/develop/api/open/log_swan-isLoginSync/',
        '/docs/develop/api/open_log/#checkSession/': '/docs/develop/api/open/log_swan-checkSession/',
        '/docs/develop/api/pageinfo/#swan-setPageInfo/': '/docs/develop/api/open/swan-setPageInfo/'
    };
    urlMap[url] && location.replace(urlMap[url]);
}(decodeURIComponent(location.pathname + location.hash));

(function(win, doc, $) {
    var localSidebar = function () {
        var noop = function () {};
        try {
            localStorage.setItem('_t', 1);
            localStorage.removeItem('_t');
            var _init = function () {
                if (localStorage.getItem('sidebar') === null) {
                    localStorage.setItem('sidebar', JSON.stringify({}));
                }
            };
            return {
                setLocal: function (key, value) {
                    _init();
                    var sidebar = JSON.parse(localStorage.getItem('sidebar'));
                    sidebar[key] = value;
                    localStorage.setItem('sidebar', JSON.stringify(sidebar));
                },
                getLocal: function (key) {
                    _init();
                    var sidebar = JSON.parse(localStorage.getItem('sidebar'));
                    if (!sidebar[key]) {
                        this.setLocal(key, window.localData.localData);
                        return window.localData.localData;
                    }
                    return sidebar[key];
                }
            };
        } catch (e) {
            return {
               setLocal: noop,
               getLocal: noop
            };
        }
    }();
    var docs = {
        schema: 'baiduboxapp://swan/4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c/?_baiduboxapp=%7B%22from%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&callback=_bdbox_js_275&upgrade=0',
        screenHeight: win.innerHeight,
        screenWidth: win.innerWidth,
        frame: 1000 / 60,
        start: function () {
            // this.initHighlight();
            this.addEvent();
            this.initCrumbs();
            this.initToc();
            this.initHiddenbar();
            this.initSidebar();
            this.initH2();
            this.initList();
            this.initBottomPage();
            this.initInvokeDemo();
            // this.initCustom();
        },
        // initHighlight() {
        //     let keywords = window.localStorage.getItem('keywords');
        //     window.localStorage.removeItem('keywords');
        //     if (!keywords || !keywords.length) {
        //         return;
        //     }
        //     keywords = Array.isArray(keywords) ? keywords : [keywords];
        //     let content = $('.m-doc-content-layout').html();
        //     keywords.forEach(function (keyword, index) {
        //         var regExp = new RegExp(keyword, 'g');
        //         content = content.replace(regExp, "<mark class='marked_" + index + "'>" + keyword + "</mark>");
        //     });
        //     $('.m-doc-content-layout').html(content);
        // },
        initSidebar: function () {
            var ctx = this;
            var sidebarData = localSidebar.getLocal(window.localData.headerName);
            var sidebar = $('.m-doc-sidebar-nav-wrapper');
            if (sidebarData) {
                for (var name in sidebarData) {
                    if (sidebarData.hasOwnProperty(name)) {
                        (sidebarData[name] === false) &&  sidebar.find('[data-name="'+ name +'"]').removeClass('m-doc-nav-on');
                    }
                }
            }
            sidebar.show();
            // sidebar定位到当前页面，二级导航下的第一个页面sidebar不滚动
            var wrapperT = sidebar.find('ul').position().top;
            var sidebarSelected = $('.m-doc-sidebar-selected');
            var sidebarFirst = $('.m-doc-nav-on .m-doc-nav-children .m-doc-sidebar-on:first-child .m-doc-h1-children li:first-child a');
            var isFirst = false;
            sidebarFirst.each(function(index) {
                if ($('.m-doc-sidebar-selected a')[0] && sidebarFirst[index].href == $('.m-doc-sidebar-selected a')[0].href) {
                    isFirst = true;
                }
            });
            if (sidebarSelected.length !== 0
                && !isFirst) {
                var selectedT = sidebarSelected.position().top;
                var scrollT = selectedT - wrapperT;
                scrollT > 44 && sidebar.scrollTop(selectedT - wrapperT);
            }
            // 页面滚动到当前h3位置
            ctx.scrollToHash();
        },
        caseInvoke: function(scheme) {
            if (isPc()) {
                return;
            }
            if (isBox()) {
                // 百度 App
                isIOS() ? smartAppIosInvoke(scheme) : smartAppAndroidInvoke(scheme);
            } else {
                // 非百度 App
                /*eslint-disable fecs-camelcase*/
                var openbox = window.OpenBox({
                    url: location.href
                });
                /*eslint-disable fecs-camelcase*/
                openbox.open();
            }
        },
        initInvokeDemo: function() {
            if (isPc()) {
                $('.ispc').show();
                return;
            } else if (isBox()) {
                $('.isbox').show();
            } else {
                $('.ismobile').show();
            }
            var _this = this;
            var $demo = $('img[src= "../../img/demo/demo.png"]');
            var $closest = $demo.closest('div');
            var html1 = '<span style = "text-align: justify; word-break: normal;">请下载百度APP最新版本，扫描下图二维码体验智能小程序。</span>'
            + '<a href="http://searchbox.bj.bcebos.com/miniapp/miniappdemo/demo.zip" target="_blank" rel="noopener">'
            + '<br>下载小程序示例源码'
            + '</a>'
            + '<br>'
            + '<img src="../../img/demo/mob.png" alt="图片">'
            + '<img src="../../img/demo/comp.png" alt="图片">';
            var html2 = '<span style = "text-align: justify; word-break: normal;">请<a href = "javascript:;" class = "demo-invoker">点击这里</a>，或扫描下图二维码体验智能小程序。'
            + '<a href="http://searchbox.bj.bcebos.com/miniapp/miniappdemo/demo.zip" target="_blank" rel="noopener"></span>'
            + '<br>下载小程序示例源码'
            + '</a>'
            + '<br>'
            + '<img src="../../img/demo/box.png" alt="图片">'
            + '<img src="../../img/demo/comp.png" alt="图片">';
            var html = isBox() ? html2 : html1;
            $closest.html(html);
            $('.demo-invoker').click(function() {
                _this.caseInvoke(_this.schema);
                return false;
            });
        },
        initHiddenbar: function () {
            var sidebarIgnore = window.localData.sidebarIgnore;
            sidebarIgnore = sidebarIgnore.split(',');
            for (var i = 0; i < sidebarIgnore.length; i ++) {
                var href = '/docs' + sidebarIgnore[i] + '/';
                $('.m-doc-sidebar-nav-wrapper a[href="' + href + '"]')
                    .hide()
                    .parent('li')
                    .hide();
                $('#article-main-content a[href= "' + href + '"]').hide();
            }
        },
        initCustom: function () {
            var wrap = $('.m-doc-custom-examples');
            wrap.html(wrap.html().replace(/<br>/g, ''));
        },
        debounce: function (fn, delay) {
            var timer;
            return function () {
                var ctx = this;
                var args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply(ctx, args);
                }, (delay ? delay : 300));
            };
        },
        throttle: function (func, wait, options) {
            var context, args, result;
            var wait = wait || 1000;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function() {
                previous = options.leading === false ? 0 : +new Date();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };
            return function() {
                var now = +new Date();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        initCrumbs: function () {
            var crumb = $('.m-doc-sidebar-selected').parents('.m-doc-sidebar-on').children('.m-doc-h1-list').children('div').html();
            if (!crumb) {
                crumb = $('.m-doc-sidebar-selected').parents('.m-doc-nav-on').children('.m-doc-nav-list').children('span').html();
            }
            $('.m-doc-crumbs-wrapper').find('span').eq(0).text(crumb);
            $('.m-doc-crumbs-wrapper').find('span').eq(1).text(doc.title.substr(0, doc.title.length - 4));
            if ($('.toc-level-2 .toc-text').length > 0) {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).show();
                $('.m-doc-crumbs-wrapper').find('span').eq(2).text($('.toc-level-2 .toc-text').eq(0).text());
            } else {
                $('.m-doc-crumbs-wrapper').find('span').eq(2).hide();
            }
        },
        _scrollToAnchor: function (element) {
            setTimeout(function () {
                var href = element && element.href ? element.href : $(this)[0].href;
                href = decodeURIComponent(href);
                var tar = href.indexOf('#');
                href = tar > -1 ? href.substr(tar).replace('/', '') : '';
                var offsetTop = $(href).offset() ? $(href).offset().top : 0;
                var scrollTop = $('.m-doc-content-layout').scrollTop();
                var tarTop = offsetTop + scrollTop - 30;
                var diffTop = Math.abs(tarTop - scrollTop);
                var time = diffTop > 1800 ? 200 : 100;
                
                // 修复 当切换的两个元素offsetTop距离一致时 不会触发滚动事件，导航栏高亮不生效
                if(diffTop === 0) {
                    $('.m-doc-content-layout').scrollTo({toT: 0, durTime: time })
                }
                $('.m-doc-content-layout').scrollTo({toT: href ? tarTop : 0, durTime: time });
            }, 0);
        },
        addEvent: function () {
            var ctx = this;
            var before = $('.m-doc-content-layout').scrollTop();
            // 点击 二级导航折叠/展开/跳转
            $('.m-doc-nav-list').on('click', function (e) {
                var e = e || event;
                // 导航栏打点统计
                _hmt.push(['_trackEvent', '一级导航' , '点击', e.currentTarget.innerText]);

                var parent = $(this).parent('li');
                if (parent.hasClass('m-doc-nav-on')) {
                    parent.removeClass('m-doc-nav-on')
                } else {
                    if ($('.m-doc-header-nav-selected a').html() == '开发') {
                        $(this).parents('ul').children().removeClass('m-doc-nav-on');
                        $('.m-doc-sidebar-nav-wrapper').scrollTop(0);
                    }
                    parent.addClass('m-doc-nav-on');
                }
                var sidebarData = localSidebar.getLocal(window.localData.headerName);
                if (sidebarData) {
                    sidebarData[parent.data('name')] = parent.hasClass('m-doc-sidebar-nav-selected');
                    localSidebar.setLocal(window.localData.headerName, sidebarData);
                }
            });
            // 点击h1 折叠/展开
            $('.m-doc-h1-list').on('click', function (e) {
                var e = e || event;
                // 导航栏打点统计
                _hmt.push(['_trackEvent', '二级导航' , '点击', e.currentTarget.innerText]);

                var parent = $(this).parent('li');
                parent.hasClass('m-doc-sidebar-on')
                    ? parent.removeClass('m-doc-sidebar-on')
                    : parent.addClass('m-doc-sidebar-on');
                var sidebarData = localSidebar.getLocal(window.localData.headerName);
                if (sidebarData) {
                    sidebarData[parent.data('name')] = parent.hasClass('m-doc-sidebar-nav-selected');
                    localSidebar.setLocal(window.localData.headerName, sidebarData);
                }
            });

            function updateArticle($this, href) {
                if( href != '/docs/') {
                    $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                    $this.parent('li').addClass('m-doc-sidebar-selected');
                    win.history.pushState(href, '', href);
                    ctx.getArticle(href, function() {
                        ctx._scrollToAnchor($this[0]);
                    });
                } else {
                    var href = $this.next('ul').children('li:first-child').children('a').attr('href');
                    var $this = $this.next('ul').children('li:first-child').children('a');
                    updateArticle($this, href);
                }
            }
            // 点击左侧标题，导航栏高亮显示 && 右侧文章更新
            $('.list-item').on('click', function(e) {
                var e = e || event;
                // 导航栏打点统计
                _hmt.push(['_trackEvent', '三级导航' , '点击', e.currentTarget.innerText]);
                e.preventDefault();
                var href = $(this).attr('href');
                // 更新右侧文章
                updateArticle($(this), href);
            });

            // 回到顶部
            $('.m-doc-content-layout').on('scroll', debounce(function () {
                var backTop = $('.m-doc-menu-top');
                if (ctx.screenHeight > $(this).scrollTop()) {
                    backTop.removeClass('m-doc-menu-top-show');
                } else {
                    backTop.addClass('m-doc-menu-top-show');
                }
            }));
            
            // 点击右侧sidebar，禁止默认跳转，改为滑动到指定的元素位置
            $('.toc-wrap li a').on('click', ctx._scrollToAnchor);
            if (this.screenWidth > 768) {
                $('.m-doc-content-layout').on('scroll', throttle(function () {
                    var after = $('.m-doc-content-layout').scrollTop();
                    if (after > ctx.screenHeight) {
                        if (before < after) {
                            $('header').addClass('m-doc-header-show-crumbs');
                        } else {
                            $('header').removeClass('m-doc-header-show-crumbs');
                        }
                    } else {
                        $('header').removeClass('m-doc-header-show-crumbs');
                    }
                    before = after;
                }, 350));
            }
            $('.m-doc-menu-top').on('click', function () {
                var TIME = 500;
                var scrollWrap = $('.m-doc-content-layout');
                var scrollTop = scrollWrap.scrollTop();
                var everyLength = scrollTop / TIME * ctx.frame;
                function animat () {
                    scrollWrap.scrollTop(scrollWrap.scrollTop() - everyLength);
                    if (scrollWrap.scrollTop() !== 0) {
                        ctx.animation(animat);
                    }
                }
                ctx.animation(animat);
            });
            $('.m-doc-menu-toc').on('click', function () {
                if ($(this).hasClass('m-doc-menu-toc-close')) {
                    $(this).removeClass('m-doc-menu-toc-close');
                    $('.toc-wrap').animate({
                        height: 0,
                        width: 0
                    }, 100);
                } else {
                    $(this).addClass('m-doc-menu-toc-close');
                    $('.toc-wrap').height(0).animate({
                        height: ctx.tocHeight,
                        width: '230px'
                    }, 100);
                }
            });
            $(win).on('resize', function () {
                ctx.initToc();
            });
            $(win).on('popstate', function (e) {
                if (e.state) {
                    var href = e.state ? e.state : win.location.href;
                    $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                    $('.m-doc-h2-list').filter(function() {
                        return href.indexOf($(this).attr('href')) > -1;
                    }).parent('li').addClass('m-doc-sidebar-selected');
                    ctx.getArticle(href, function() {
                        ctx.scrollToHash();
                    });
                }
            });
        },
        scrollToHash: function () {
            var _this = this;
            if (win.location.hash) {
                Array.prototype.some.call($('.m-doc-h2-children a'), function (element) {
                    if (element.href && element.href.indexOf(window.location.hash) > 0) {
                        $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                        $(element).parent('li').addClass('m-doc-sidebar-selected');
                        _this._scrollToAnchor($(element)[0]);
                        return true;
                    }
                });
            }
        },
        getArticle: function (href, callback) {
            $('.reset-search-btn').click();
            var ctx = this;
            $.ajax({
                url: href,
                dataType: 'html',
                success: res => {
                    var $html = $($.parseHTML(res));
                    var article = $html.find('#article-main-content').html();
                    var docMenu = $html.find('#m-doc-menu-wrapper').html();
                    $('#article-main-content').html(article);
                    $('#m-doc-menu-wrapper').html(docMenu);
                    // $('.m-doc-content-layout').scrollTo({ toT: 0, durTime: 0 });
                    if ($('header').hasClass('m-doc-header-hide')) {
                        $('header').removeClass('m-doc-header-hide');
                    }
                    doc.title = $html.filter('title').html();
                    // 更新页面 meta 的 title、keywords、description
                    var keywords = $html.filter('meta[name="keywords"]').attr('content');
                    var description = $html.filter('meta[name="description"]').attr('content');
                    $('meta[name="keywords"]').attr('content', keywords);
                    $('meta[name="description"]').attr('content', description);

                    ctx.initCrumbs();
                    ctx.initH2();
                    ctx.initList();
                    ctx.initBottomPage();
                    ctx.initInvokeDemo();
                    if (callback) {
                        win.setTimeout(callback, 100);
                    }
                },
                error: function () {
                    win.location.href = href;
                }
            });
        },
        initToc: function () {
            if ($('.toc-wrap .toc-level-2 ').length === 0 && $('.toc-wrap .toc-level-3').length === 0) {
                $('.m-doc-menu-toc').hide();
            }
            var maxHeight = this.screenHeight
                - (+$('.m-doc-menu-wrapper').css('height').replace('px', ''))
                - (+$('.m-doc-menu-wrapper').css('bottom').replace('px', ''))
                - (+$('header').css('height').replace('px', ''))
                - 50;
            var tocWrap = $('.toc-wrap');
            tocWrap.css('maxHeight', (maxHeight + 'px'));
            this.tocHeight = $('.toc-wrap').height();
            tocWrap.find('.toc-level-1').children('.toc-link').remove();
            tocWrap.find('.toc-level-4').remove();
            tocWrap.find('.toc-level-5').remove();
            tocWrap.find('.toc-level-6').remove();
            // 第一条高亮
            if(tocWrap.find('.toc-level-2').eq(0).find('.toc-level-3').length > 0) {
                tocWrap.find('.toc-level-2').eq(0).find('.toc-level-3').eq(0).addClass('toc-level-3-on');
            } else {
                tocWrap.find('.toc-level-2').eq(0).addClass('toc-level-2-on');
            }
            if (win.innerWidth > 1590) {
                tocWrap
                .css('right', $('.m-doc-content-wrap')
                .css('margin-right'))
                .addClass('top-wrap-fixed');
            } else {
                tocWrap.css('right', '23px').removeClass('top-wrap-fixed');
                if ($('.m-doc-menu-toc').hasClass('m-doc-menu-toc-close')) {
                    $('.toc-wrap').addClass('toc-wrap-show');
                } else {
                    $('.toc-wrap').removeClass('toc-wrap-show');
                }
            }
        },
        rAF: function() {
            return (
                win.requestAnimationFrame            ||
                win.webkitRequestAnimationFrame      ||
                win.mozRequestAnimationFrame         ||
                win.oRequestAnimationFrame           ||
                function (callback) {
                    win.setTimeout(callback, ctx.frame);
                }
            );
        }(),
        animation: function (callback) {
            this.rAF.call(win, callback);
        },
        /**
         * @function 改造markdown生成的所有h2
         * @description 要求如下：
         * 1. 增加收起增加收起折叠按钮
         * 2. 效果为类似slideUp 和 slideDown
         * 故需要改造原本的h2及其对应内容相关的dom结构
         */
        initH2: function () {
            var articleEntey = $('.article-entry');
            var H2 = articleEntey.find('h2');
            H2.length || $('.m-doc-content-layout').css('visibility', 'visible');
            var articleElems = articleEntey.contents();
            // 1.为h2增加收起折叠内容的按钮，以及包裹的容器
            H2.append('<span class="m-doc-content-h2-toggle"><img src = "/docs/img/h2_arrow.png"/></span>')
              .wrap('<div class= "m-doc-content-item"></div>');
            var H2andSiblings = [];
            for (var i = 0; i < articleElems.length; i++) {
                if (articleElems[i].tagName === 'H2') {
                    H2andSiblings[H2andSiblings.length] = [];
                    H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                } else {
                    H2andSiblings[H2andSiblings.length - 1]
                    && H2andSiblings[H2andSiblings.length - 1].push(articleElems[i]);
                }
            }
            window.H2andSiblings = H2andSiblings;
            var h2Toggle = $('.m-doc-content-h2-toggle');
            h2Toggle.each(function (index) {
                var Siblings = H2andSiblings[index].slice(1);
                var h2InnerH = 0;
                // 2.把h2对应的内容用content-inner包裹起来
                var $h2Item = $(this).closest('.m-doc-content-item');
                $h2Item.append('<div class = "m-doc-content-inner"></div>');
                var $h2Inner = $h2Item.find('.m-doc-content-inner');
                $(Siblings).appendTo($h2Inner);
                // 解决抖动
                $('.m-doc-content-layout').css('visibility', 'visible');
                // 3.点击按钮收起折叠content-inner
                h2Toggle.eq(index).on('click', function () {
                    if ($(this).hasClass('m-doc-content-h2-toggle-close')) {
                        $(this).removeClass('m-doc-content-h2-toggle-close');
                        $h2Inner.animate({
                            height: h2InnerH
                        }, 'swing');
                    } else {
                        h2InnerH = $h2Inner.height();
                        $h2Inner.height(h2InnerH);
                        $(this).addClass('m-doc-content-h2-toggle-close');
                        $h2Inner.css('display', 'block').animate({
                            height: 0
                        }, 'swing');
                    }
                });
            });
        },
        /**
         * @function 如果嵌套的列表在三层或三层以上，第一层字号18px
         */
        initList: function () {
            $('.article .m-doc-content-inner>ol').each(function (element) {
                if ($(element).find('ol ol ol').length > 0) {
                    $(element).addClass('multilayer');
                }
            });
            // 场景值查看控制图片显示隐藏
            $('.show-scene-btn').on('click', function (e) {
                // console.log($(e.currentTarget).next(), $(this).attr('data-id'));
                $(e.currentTarget).next().css({
                    display: 'flex'
                });
            });
            $('.img-container').on('click', function (e) {
                e.stopPropagation();
                $(e.currentTarget).hide();
            });
        },
        /**
         * @function 监听点击上一页/下一页事件
         */
        initBottomPage: function () {
            var ctx = this;
            // 点击上一页/下一页
            $('.m-doc-bottomPage-wrapper a').on('click', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $('.m-doc-sidebar-selected').removeClass('m-doc-sidebar-selected');
                // 点击上/下一页，左侧导航高亮显示
                $('.list-item').filter(function () {
                    return $(this).attr('href') === href;
                }).parent('li').addClass('m-doc-sidebar-selected');
                win.history.pushState(href, '', href);
                ctx.getArticle(href);
                ctx._scrollToAnchor($(this)[0]);
            });
        }
    };
    $(doc).ready(function () {
        docs.start();
        try {
            $('.m-doc-sidebar-selected')[0].scrollIntoView();
        }
        catch (err) {}
    });
})(window, document, window.$);
