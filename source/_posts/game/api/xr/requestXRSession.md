---
title: requestXRSession
layout: gamedoc
topic: xr
categoryName: api
priority: 10-01
---

  > 从 [基础库 1.10.3](/game/tutorials/version/releaseLog) 开始支持。

百度小游戏提供了 XR 系列接口用于开发 AR 游戏，目前该接口只支持人脸模式 `'du_face'` 的 AR 效果。之后百度小游戏会加入更多的 AR 模式用于开发效果更丰富的 AR 游戏。

`swan.requestXRSession` 用于申请创建一个指定模式的 XR 会话，一个小游戏中同时只能存在一个 Session，如果要创建新的，必须要把已有的通过 `end` 方法关闭。

```js
swan.requestXRSession(opts)
```

 **参数值：**

 |属性|类型|是否必填|描述|
|-|-|-|-|
|opts|Object|是|传入的对象参数|
|opts.mode|string|是| XR 的模式，目前只支持传入 `'du_face'`，如果传入其它模式或者不传入则会创建失败 |
|opts.drawCameraBackground|boolean|否| 每一帧是否自动绘制相机的画面作为背景，默认为 `true`，即绘制，可以选择 `false` 不绘制通过 `getCameraVideo` 获取相机对象自己管理绘制。 |
|opts.success|function|是| 创建会话成功的回调，传入 [DuXRSessionFaceMode](/game/api/xr/DuXRSessionFaceMode) 对象 |
|opts.fail|function|否| 创建会话失败的回调 |
|opts.complete|function|否| 无论成功失败，接口调用完成的回调 |

 **返回值：**

`success` 回调函数：

形如 `function (xrSession) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|xrSession|DuXRSessionFaceMode|Session 对象|


`fail` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|报错信息|

在碰到错误时，推荐通过弹窗的形式引导开发者是否重新进入 AR 模式，如果用户确定才去再次调用 reuqestXRSession.

`errMsg` 错误信息包括：

+ `fail system permission denied`
    无系统相机权限
+ `fail app permission denied`
    无小游戏相机权限
+ `fail session already exists`
    已经存在一个运行中的 XRSession
+ `fail network error`
    网络错误，网络错误在`'du_face'`等需要网络下发模型的模式中可能会出现
+ `fail unknown mode`
    不支持的 XR 模式
+ `fail unknown error`
    未知错误


`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**几种模式介绍：**

1. `'du_face'`

当 `swan.requestXRSession` 中的 `mode` 参数设置成 `'du_face'` 时，小游戏会使用人脸模式的 XR 会话。该模式会调起前置摄像头，并且负责每一帧前置摄像头画面中的人脸的实时检测，追踪和数据的计算。该模式下拥有的特性包括：

+ 单人脸的实时追踪，人脸姿态的计算
+ 人脸特征点识别
+ 面部骨骼矩阵的计算
+ 面部五官表情系数的计算
+ 相机画面的输出

基于这些基础的特性你可以在游戏中使用诸如美颜、美妆、贴纸等效果并且拥有跟 Native 匹配的性能。也可以利用表情系数设计一些基于表情相似度，表情触发的游戏机制。


**使用示例:**

1. 创建人脸 AR 的会话并且每一帧绘制检测到的人脸特征点。

```js
const ctx = swan.createCanvas().getContext('2d');
swan.requestXRSession({
    mode: 'du_face', // 必须指定模式为 'du_face'
    success(xrSession) {
        // 会话创建成功，开始每帧的渲染
        function update() {
            const frame = xrSession.getFrame();
            // 清除画布
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            ctx.clearRect(0, 0, width, height);
            // 获取当前帧检测到的人脸
            const face = frame.getUpdatedTrackableFaces()[0];
            if (face) { // 如果检测到有人脸
                // 获取人脸特征点数据，特征点线性存放在一个 Float32Array 中
                // 每个特征点都有 x, y, score 三个值，在使用的时候需要留意不要忘记处理 score
                const landmarks = face.landmarks;
                // 绘制成绿色
                ctx.fillStyle = '#00ff00';
                for (let i = 0; i < landmarks.length; i += 3) {
                    // 给到的 x 和 y 是归一到 0 - 1 的，所以如果要绘制在 canvas 上
                    // 需要缩放到画布的尺寸。
                    const x = landmarks[i] * width;
                    const y = landmarks[i + 1] * height;
                    // 用小方点表示特征点
                    ctx.fillRect(x, y, 4, 4);
                }
            }

            requestAnimationFrame(update);
        }
        update();
    }
});
```

2. 在创建会话的时候，需要小心处理相机的权限（包括系统的和小游戏的），下面代码演示了该怎么完备得去处理这些权限问题。


```js
swan.requestXRSession({
    mode: 'du_face',
    success(xrSession) {
        // session 创建成功，监听相机权限的变化
        xrSession.onAuthorizationChange((res) => {
            //如果session创建成功了，运行过程中授权状态变化，会触发这个通知
            if (!res.appAuthorized) {
                //小程序无权限，可以显示错误页，调用openSetting引导用户开启授权
                displayAppAuthorizeError();
            }
            else if (!res.systemAuthorized) {
                //百度App无权限，无法引导，直接显示错误页
                displaySystemAuthorizeError();
            }
            else {
                //授权状态恢复了，之前的session会被内部激活，不需要再创建xrsession。什么都不做即可
            }
        });
    },
    fail(error) {
        // 创建 session 失败
        if (error.errMsg.match('app permission denied')) {
            //小程序无权限，可以显示错误页，调用openSetting引导用户开启授权
            displayAppAuthorizeError();
        }
        else if (error.errMsg.match('system permission denied')) {
            //百度App无权限,无法引导，直接显示错误页
            displaySystemAuthorizeError();
        }
        else {
            //其他内部错误，如首次的AI模型下载失败等
            displayOtherAuthorizeError();
        }
    }
});
```