---
title: DuXRSessionFaceMode
layout: gamedoc
topic: xr
categoryName: api
priority: 10-02
draft: true
---

人脸模式的 XR 会话实例。在 [swan.requestXRSession](/game/api/xr/requestXRSession) 的 `mode` 传入 `'du_face'` 的时候创建。

该模式下你可以使用以下由度底层百人脸算法库提供提供的人脸特性。

+ 单人脸的实时追踪，人脸姿态的计算
+ 人脸特征点识别
+ 面部骨骼矩阵的计算
+ 面部五官表情系数的计算
+ 相机画面的使用

基于这些特性你可以在游戏中使用诸如美颜、美妆、贴纸等效果，并且利用表情系数设计一些基于表情相似度、表情触发的游戏机制。

下面是 `DuXRSessionFaceMode` 提供的属性和方法

### getCameraVideo()

返回相机的 `Video` 对象，`Video` 对象类似 `Image`，可以作为 WebGL 的 `texImage2D`/ `texSubImage2D` 的纹理数据源，或者用 Context 2D 的 `drawImage` 方法直接绘制到画布上。需要注意，跟 Image 不太一样的是，因为 Video 里的图像数据每一帧都是不同的，所以在用一些框架的时候需要每一帧都去更新这个纹理的数据。

下面大概介绍下在 THREE.js / Laya / Cocos 中使用这个 `Video` 对象。

1. THREE.js
```js
const video = xrSession.getCameraVideo();
const cameraTexture = new THREE.Texture(video);
// 这里建议将 filter 设置成线性过滤，不要使用 mipmap。
// 不然 THREE.js 会通过 canvas 将这个 video 转成 2 的 n 次方的尺寸，比较影响性能
cameraTexture.filter = THREE.LinearFilter;
function update() {
    // 每一帧都标记一下这个纹理需要更新数据了
    cameraTexture.needsUpdate = true;
}
```

2. Laya
```js
const video = xrSession.getCameraVideo();
const cameraTexture = new Laya.Texture(new Laya.Texture2D(
    0, 0, Laya.BaseTexture.FORMAT_R8G8B8A8, false, false
));
function update() {
    // 每一帧使用 loadImageSource 方法更新纹理数据
    cameraTexture.bitmap.loadImageSource(video);
}
```

3. Cocos
```js
const video = xrSession.getCameraVideo();

function update() {
    // cameraTexture 是一个 cc.Texture2D 对象
    cameraTexture.initWithElement(video);
}
```


**返回的 Video 对象属性**

|属性|类型|描述|
|-|-|-|
|width|number|相机宽度，一般为 720|
|height|number|相机高度，一般为 1280|
|videoWidth|number|同 width|
|videoHeight|number|同 height|



### getFrame()

返回当前帧的 [DuXRFrameFaceMode](/game/api/xr/DuXRFrameFaceMode) 对象。通过该对象你可以获取到当前帧检测到的人脸以及特征点，骨骼的变换矩阵等所有人脸相关的数据。

**代码示例：**
```js
function update() {
    // 每次更新的时候获取当前帧的对象
    const frame = xrSession.getFrame();
    // 获取当前帧检测到的人脸
    const face = frame.getUpdatedTrackableFaces()[0];
    if (face) { // 判断是否检测到人脸
        // 获取人脸中的特征点等数据
        console.log(face.landmarks);
    }
}
```

**注：** 每次用 `getFrame` 返回的都是不同的对象，上一帧的对象在下一帧也是不能复用的（除非就是为了保留上一帧的数据），所以需要每一帧都调用 `getFrame` 方法保证拿到的是最新的数据。

### getSkeletonDefinition()

小游戏底层的人脸算法在特征点的基础上会计算出面部骨骼的变换，这个骨骼是三维渲染中的蒙皮动画的概念，这些骨骼的变换会驱动三维模型中顶点的变换，从而实现模型的动画效果。

这个方法可以获取骨骼父子关系和节点名字的描述信息。配合 [DuXRFace#skeleton.jointPoseMatrices](game/api/xr/DuXRFace.skeleton) 更新在骨骼的矩阵数据的时候使用。


**注：**

> 这个 definition 数据在整个 session 期间都不会变，只需要在初始化的时候获取一次，可以参考下面示例代码。
> 矩阵数据和骨骼结构定义的分离也可以保证每一帧更新的矩阵数据在存储上堆内存更加友好，复制，遍历等操作上也更加高效。

**骨骼驱动模型的示意动画**

<img src="/img/game/xr/skeleton.gif" alt="骨骼动画示意图" title="骨骼动画示意图" width="300" />

其中绿色的点就是骨骼了，看起来位置跟特征点很像，因为骨骼实际上也是从特征点推算出来的，这些骨骼的运动驱动了绑定了这些骨骼的面部三维模型的变形。可以实现模型的闭眼，挑眉，张嘴等动画效果。三维模型的脸型也会变形到跟画面中人脸一样的脸型。

你可以在骨骼驱动的三维模型上加上各种纹理实现面部的贴纸效果，或者在骨骼节点上挂上其它的三维模型去加上一些头饰。比如下面的示例图中就实现了烟熏妆的贴纸效果以及巫师帽的头饰。


<img src="/img/game/xr/beauty.jpg" alt="特征点标注图" title="特征点标注图" width="300" />

这张示例图中除了贴纸和头饰，还对相机视频简单做了基于双边滤波的磨皮，颜色美白，以及基于特征点的瘦脸效果。


为了保证模型资源能够正常使用，模型中绑定的骨骼需要按照`getSkeletonDefinition`中的格式来制作（比如命名，层级等）。因此我们给了两个已经绑定骨骼的模型素材的 FBX 格式文件作为参考。你可以在这两个素材文件的基础上制作自己的模型或者贴纸素材。


+ [面具三维模型素材](https://amis.cdn.bcebos.com/amis/2019-6/1560579429847/mask.fbx)

<img src="/img/game/xr/maskshot.png" alt="特征点标注图" title="特征点标注图" width="200" />

+ [人头三维模型素材](https://amis.cdn.bcebos.com/amis/2019-6/1560504592157/head.fbx)

<img src="/img/game/xr/headshot.png" alt="特征点标注图" title="特征点标注图" width="200" />

以及这两个模型对应的贴纸纹理模板，可以直接右键另存为保存


+ 面具模型的 uv 纹理
<img src="/img/game/xr/maskuv.png" alt="面具模型的 uv 纹理" title="面具模型的 uv 纹理" width="400" />

+ 人头模型的 uv 纹理
<img src="/img/game/xr/headuv.png" alt="人头模型的 uv 纹理" title="人头模型的 uv 纹理" width="400" />


**数据格式**
```js
{
    // skeleton 的根节点
    "joints": [{
        // 根节点名字
        "name": "IM_HEAD_ROOT",
        // 父节点的在 joints 中的索引，-1 则是根节点
        "parentIndex": -1,
        // 在 jointPoseMatrices 中的偏移下标
        "offset": 0
    }, {
        "name": "MOUTH_LIP_OUTER_VEE_RIGHT",
        "parentIndex": 0,
        "offset": 16
    }, {
        "name": "MOUTH_LIP_OUTER_VEE_RIGHT_MOUTH_LIP_OUTER_CORNER_RIGHT_0_33333",
        "parentIndex": 0,
        "offset": 32
    }]
}
```


**THREE.js 代码示例**

```js
// 保存每个节点在 jointPoseMatrices 数组中的偏移下表
// 这个只需要在初始化的时候存储一次
const bonesOffsetMap = {};
const skeletonDef = xrSession.getSkeletonDefinition();
skeletonDef.joints.forEach(joint => {
    bonesOffsetMap[joint.name] = joint.offset;
});

function update() {
    // 每帧更新的时候根据初始化存储的偏移下标读取矩阵
    skeleton.bones.forEach(bone => {    // 遍历 THREE.js 中的骨骼节点
        const offset = this._bonesOffsetMap[bone.name];
        if (offset != null) {    // 以防模型中的骨骼节点返回数据中没有
            bone.matrix.fromArray(jointPoseMatrices, offset);
            bone.matrixWorldNeedsUpdate = true;
        }
    });
}
```



### end()

结束 XR 会话，关闭相机并且销毁所有会话中的资源。一个小游戏中只能同时存在一个 XR 会话，因此在申请一个新的会话前必须把当前 XR 的会话销毁。


### onAuthorizationChange()

注册监听相机权限变化的回调函数，用户在玩游戏的过程中可能会切出应用关闭本来已经打开的权限，尽管这种场景可能非常少，但是我们也尽量能够处理这种情况，保证给用户最好的游戏体验。

传入回调函数，回调函数的参数格式：


|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.appAuthorized|boolean|是否有小游戏相机权限|

### offAuthorizationChange()

取消注册监听相机权限变化的回调函数。