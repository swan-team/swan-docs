---
title: swan.getSystemInfo
header: develop
nav: api
sidebar: swan-getSystemInfo
---


 

>  基础库 1.10.8 版本开始支持。

**解释**：获取系统信息

 

## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|success |Function  |  否|| 接口调用成功的回调|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete  |  Function |   否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

###   success返回参数说明 

|参数  |说明 |最低版本|
|---- | ---- |
|brand  | 手机品牌 | |
|model |  手机型号   | |
|pixelRatio | 设备像素比  | |
|screenWidth |屏幕宽度   | |
|screenHeight |   屏幕高度 | |
|windowWidth |可使用窗口宽度 | |
|windowHeight  |  可使用窗口高度 | |
|statusBarHeight| 状态栏的高度 | |
|navigationBarHeight| 导航栏的高度|3.0.17|
|language |宿主 App 设置的语言 | |
|version |宿主 App 版本号| |
|system  |操作系统版本  | |
|platform |客户端平台，如：ios。| |
|fontSizeSetting |用户字体大小设置 | |
|SDKVersion |客户端基础库版本 | |
|host|宿主平台，详见[宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/) 。|3.30.2|
|cacheLocation |上一次缓存的位置信息|安卓端最低基础库版本3.40.4；ios最低支持版本3.70.2|
|swanNativeVersion|宿主平台版本号|最低支持版本1.13.18|
|devicePixelRatio|屏幕密度|安卓最低支持基础库版本3.0.39； ios最低支持版本3.0.39 |
|albumAuthorized|允许宿主使用相册的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAuthorized|允许宿主通知的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAlertAuthorized|允许宿主通知带有提醒的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationBadgeAuthorized|允许宿主通知带有标记的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationSoundAuthorized|允许宿主通知带有声音的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|cameraAuthorized|允许宿主使用摄像头的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationAuthorized|允许宿主使用定位的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|microphoneAuthorized|允许宿主使用麦克风的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationEnabled|地理位置的系统开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|wifiEnabled|Wi-Fi 的系统开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|safeArea|在竖屏正方向下的安全区域|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getSystemInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSystemInfo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 - 属性全集 ：

<a href="swanide://fragment/4de8b62e859105b558003e89dc6254791575397907738" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果 </a>

* 在 swan 文件中
```html
<view class="container">
    <view class="card-area">
        <view class="list-area border-bottom" s-for="item in infoList">
            <text class="list-item-key-4">{{item.label}}：</text>
            <text class="list-item-value">{{item.value}}</text>
        </view>
        <view class="button-group">
            <button bind:tap="getSystemInfo" type="primary" hover-stop-propagation="true">点击获取系统信息</button>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        infoList: [{
            label: '手机品牌',
            key: 'brand',
            value: ''
        }, {
            label: '手机型号',
            key: 'model',
            value: ''
        }, {
            label: '使用窗口宽',
            key: 'windowWidth',
            value: ''
        }, {
            label: '使用窗口高',
            key: 'windowHeight',
            value: ''
        },{
            label: '状态栏高',
            key: 'statusBarHeight',
            value: ''
        },{
            label: '导航栏高',
            key: 'navigationBarHeight',
            value: ''
        }, {
            label: '宿主版本',
            key: 'version',
            value: ''
        }, {
            label: '操作系统',
            key: 'system',
            value: ''
        }, {
            label: '客户端平台',
            key: 'platform',
            value: ''
        }, {
            label: '屏幕宽度',
            key: 'screenWidth',
            value: ''
        }, {
            label: '屏幕高度',
            key: 'screenHeight',
            value: ''
        }, {
            label: '用户字体',
            key: 'fontSizeSetting',
            value: ''
        }, {
            label: '基础库版本',
            key: 'SDKVersion',
            value: ''
        }, {
            label: '宿主平台',
            key: 'host',
            value: ''
        }, {
            label: '宿主平台版本',
            key: 'swanNativeVersion',
            value: ''
        }, {
            label: '屏幕密度',
            key: 'devicePixelRatio',
            value: ''
        }, {
            label: 'DPI',
            key: 'pixelRatio',
            value: ''
        }, {
            label: '宿主语言',
            key: 'language',
            value: ''
        }]
    },
    onLoad(e) {
    },
    getSystemInfo(e) {
        swan.getSystemInfo({
            success: res => {
                console.log('res', res);
                // 更新数据
                this.updateInfoList(res);
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    },
    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            if (res[infoList[i].key] === '') {
                infoList[i].value = '暂无';
            } else {
                infoList[i].value = res[infoList[i].key];
            }
        }
        this.setData('infoList', infoList);
    }
});
```
###  代码示例2: 开发者一般在模拟顶部导航栏时用到statusBarHeight属性 ：

<a href="swanide://fragment/bb980f42a3ee6fdb9edefdf9e528f0091575115252606" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中（代码链接中为自定义组件写法，可进行多页面复用）

```html
<view class="nav-box">
    <view class="top-title" style="margin-top:{{statusBarHeight /100}}rem">
        <view class="back-icon-wrap" bindtap="back">
            <image class="back-icon" src="/images/back.png"></image>
        </view>
        <view class="title">
            <view class="page-title-china">{{chinaName}}</view>
            <view class="page-title-english">{{engName}}</view>
        </view>
    </view>
</view>
<!-- 占位元素，防止接下来的页面内容被导航栏遮挡 -->
<view style="padding-top:{{statusBarHeight /100 + 0.53}}rem"></view>
```

* 在 js 文件中

```js
// 也可用同步写法
swan.getSystemInfo({
    success: res => {
        console.log('getSystemInfo success', res);
        this.setData({
            'statusBarHeight': res.statusBarHeight
        });
    },
    fail: err => {
        console.log('getSystemInfo fail', err);
    }
});
```

###  代码示例3: safeArea属性 ：

<a href="swanide://fragment/6f572c0011b79291f0f7f9b1ac47ed201575399890385" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```html
<!-- tabbar页面 -->
<view class="wrap">
    <view class="card-area">屏幕高度:{{screenHeight}} </view>
    <view class="card-area">可使用窗口高度:{{windowHeight}} </view>
    <view class="card-area">安全区域高度{{safeArea}} </view>
    <button bind:tap="getSystemInfo" type="primary">获取数据</button>
    <button bind:tap="navigateTo">点击跳转到无tabbar页面查看安全区差异</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    getSystemInfo(e) {
        swan.getSystemInfo({
            success: res => {
                console.log('res', res);
                this.setData('screenHeight', res.screenHeight)
                this.setData('windowHeight', res.windowHeight)
                this.setData('safeArea', 
                res.safeArea.height)
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    }
});
```

###  代码示例4: 适配iphoneX等机型 ：

或参见百度通用[iphoneX适配](https://smartprogram.baidu.com/docs/develop/framework/view_css/)

<a href="swanide://fragment/e0559da0cb11da9bd7d39e127052ce8c1575400633196" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getSystemInfo(e) {
        swan.getSystemInfo({
            success: systemInfo => {
                console.log('systemInfo', systemInfo);
                // 针对适配某一机型和模拟器
                if (systemInfo.model 
                && (systemInfo.model.indexOf('iPhone X') > -1)
                || (systemInfo.model === 'iPhone Simulator <x86-64>' 
                && systemInfo.screenWidth === 375)) {
                    this.setData({
                        isIPhoneX: true
                    })
                }
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    }
});
```



##  错误码
### Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|402|安全性检查：访问控制校验失败|
                                
