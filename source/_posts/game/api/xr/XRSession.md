---
title: XRSession
layout: gamedoc
topic: xr
categoryName: api
priority: 10-03
draft: true
---

基于 ARCore 和 ARKit 的平面检测的 XR 会话实例。在 [swan.requestXRSession](/game/api/xr/requestXRSession/) 的 `mode` 传入 `'ar'` 的时候创建。

在该模式下你可以使用一下基于 ARCore 和 ARKit 提供的特性。

+ 相机追踪，得到相机的视图变换（View Trasnform）矩阵和投影变换（Projection）矩阵
+ 获取实时检测的特征点点云
+ 相机画面中的平面检测和追踪
+ 锚点创建
+ 环境光强度估计

### getCameraVideo()

使用方法参考 [DuXRSessionFaceMode#getCameraVideo](/game/api/xr/DuXRSessionFaceMode/#getCameraVideo)

**返回的 Video 对象属性**

|属性|类型|描述|
|-|-|-|
|width|number|相机宽度，一般为 720|
|height|number|相机高度，一般为 1280|
|videoWidth|number|同 width|
|videoHeight|number|同 height|

### getFrame()

返回当前帧的 [XRFrame](/game/api/xr/XRFrame/) 对象。通过该对象你可以获取到当前帧的视图变换矩阵，点云，环境光强度等信息。

### createAnchor()

根据传入的变换矩阵`poseMatrix`创建一个锚点，并且在整个 XR 会话期间维护这个锚点的变换矩阵。

锚点对应了现实世界中一个固定的位置和朝向。如果要在现实世界中“固定放置”一个虚拟的物体，可以在要放置的位置创建一个锚点，并且在每一帧将锚点的变换矩阵数据应用到虚拟物体的场景节点上。就可以实现让虚拟物体在 AR 场景中看起来待在原地不动。下面是使用的代码示例：

```js
let frame = xrSession.getFrame();
// 0.5, 0.5 是屏幕中间的位置，使用 hitTest 方法得到该位置所对应的空间位置。
let hitRes = frame.hitTest(0.5, 0.5);
if (hitRes[0]) {
    // 根据 hitTest 返回的三维空间位置创建锚点，相当于将虚拟物体放置在了当前屏幕中间对应的现实世界中的位置
    anchor = xrSession.createAnchor(hitRes[0].poseMatrix);
}
...
function update() {
    // 在每一帧更新的时候将锚点的矩阵应用到被放置三维模型的场景节点上
    sceneNode.matrix.fromArray(anchor.poseMatrix);
    ...
}
```

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|poseMatrix|Float32Array| |是|创建时锚点所在的空间位置和朝向的 4x4 矩阵，这个矩阵一般通过 [XRFrame#hitTest](/game/api/xr/XRFrame/#hitTest) 方法得到|

**返回值:**

|类型|描述|
|-|-|
|XRAnchor|返回创建的锚点对象，每一帧可以访问该对象的`poseMatrix`属性得到最新的锚点变换矩阵|

### destroyAnchor()

销毁锚点。在会话中维护多个由 [createAnchor](/game/api/xr/XRSession/#createAnchor) 创建的锚点可能会带来额外的开销，所以对于一些已经不需要了的锚点可以使用该方法销毁。

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|anchor|XRAnchor| |是|由 [createAnchor](/game/api/xr/XRSession/#createAnchor) 方法创建的对象|

### getTrackablePlanes()

获取当前会话中检测到的所有平面。该方法会返回一个包含了检测到的所有平面的数组，其中每一项有下面这些表示平面位置和大小的属性。

**平面属性：**

|参数|类型|描述|
|-|-|-|
|centerPoseMatrix|Float32Array|平面中心点的4x4变换矩阵|
|extentX|number|平面在 X 轴方向上的尺寸|
|extentZ|number|平面在 Z 轴方向上的尺寸|

**示例代码**

```js
let planes = xrSession.getTrackablePlanes();

for (let plane of planes) {
    // 遍历返回的数组，访问每个平面对象的属性
    console.log(
        plane.centerPoseMatrix,
        plane.extentX,
        plane.extentZ
    );
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