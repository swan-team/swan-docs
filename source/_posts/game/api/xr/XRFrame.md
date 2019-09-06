---
title: XRFrame
layout: gamedoc
topic: xr
categoryName: api
priority: 10-04
---

> 从 基础库 1.12.0 开始支持

平面模式的帧对象。调用 [XRSession#getFrame](/game/api/xr/XRSession/#getFrame) 返回。

通过该对象你可以获取到当前帧的视图变换矩阵，点云，环境光强度等信息。


**代码示例：**
```js
function update() {
    // 每次更新的时候获取当前帧的对象
    const frame = xrSession.getFrame();
    // 获取当前帧的视图变换和投影变换矩阵
    const viewMatrix = frame.getViewMatrix();
    const projectionMatrix = frame.getProjectionMatrix();
    // 获取点云数据
    const pointCloud = frame.getPointCloud();
    // 获取当前帧的环境光强度
    const lightEstimate = frame.getLightEstimate();
}
```

### getViewMatrix()

获取当前帧三维相机（三维渲染中的相机概念，非手机上的物理相机）的**视图变换**矩阵，在需要绘制人脸画面上绘制三维模型的时候会有用。一般和 [getProjectionMatrix](/game/api/xr/XRFrame/#getProjectionMatrix) 一起使用

返回一个 4x4 长度的 Float32Array。你可以将该矩阵数据应用到像 THREE.js 这样的 3D 库的相机对象中。

**THREE.js 的代码示例：**

```js
// 获得视图变换矩阵
const viewMatrixArr = frame.getViewMatrix();
// 防止相机的矩阵被自动更新了，只使用 frame 提供的数据
camera.matrixAutoUpdate = false;
// 应用返回的 Float32Array，camera 是一个 THREE.PerspectiveCamera 对象
camera.matrix.fromArray(viewMatrixArr);
// 因为 THREE.js 中对象的 matrix 是该物体的变换矩阵，如果数据源是相机的视图变换还需要求逆矩阵
camera.matrix.getInverse(camera.matrix);

// 获得投影变换矩阵
const projectionMatrixArr = frame.getProjectionMatrix();
camera.projectionMatrix.fromArray(projectionMatrixArr);
// 同时需要更新 camera 的 projectionMatrixInverse 属性
camera.projectionMatrixInverse.getInverse(camera.projectionMatrix);
```

### getProjectionMatrix()

获取当前帧三维相机（三维渲染中的相机概念，非手机上的物理相机）的**投影变换**矩阵。

返回一个 4x4 长度的 Float32Array。你可以将该矩阵数据应用到像 THREE.js 这样的 3D 库的相机对象中。

### getLightEstimate()

获取当前帧检测到的环境光色调和环境光强度。可以将这个值应用到游戏引擎的环境光实例中，使得三维渲染的虚拟场景的整体光照跟现实场景更加符合。

**返回对象的参数：**

|参数|类型|描述|
|-|-|-|
|ambientColor|Float32Array|环境光色调的 RGB 值，每一个通道取值范围是 0 - 1|
|ambientIntensity|number|环境光的强度，取值 0 - 1|

**使用示例：**

```js
// 创建 THREE.js 环境光实例
let ambientLight = new THREE.AmbientLight();

function update() {
    // 每一帧更新将检测到的环境光参数设置到 THREE.js 的环境光实例中
    const lightEstimate = frame.getLightEstimate();
    ambientLight.color.fromArray(lightEstimate.ambientColor);
    ambientLight.intensity = lightEstimate.ambientIntensity;
}
```

### getPointCloud()

获取从当前帧检测到的画面中特征点的点云数据。可以将这些特征点在画面中表现出来，可视化的给用户实时的检测反馈。

**返回对象的参数：**

|参数|类型|描述|
|-|-|-|
|points|Float32Array|包含点云中所有点(x, y, z)坐标的数组|

**使用示例：**

```js
// 使用 THREE.js 的点云
var points = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0x888888 }));
points.geometry.addAttribute('position', new THREE.Float32BufferAttribute([], 3));

function update() {
    let pointCloud = frame.getPointCloud();
    // 给 THREE.js 使用
    points.geometry.attributes.position.setArray(new Float32Array(pointCloud.points));
    points.geometry.attributes.position.needsUpdate = true;
}
```

### hitTest()

传入屏幕坐标，求交得到屏幕坐标对应的空间中的三维坐标。

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|x|number| |是|屏幕的 x 坐标，取值范围 0 - 1，0 为最左侧，1 为最右侧|
|y|number| |是|屏幕的 y 坐标，取值范围 0 - 1，0 为最上侧，1 为最下侧|


**返回值:**

返回所有交点的数组列表，数组中每一项包含了表示交点位置的`poseMatrix`属性和距离的`distance`属性，根据`distance`从近到远排序。

其中每一项的属性：

|参数|类型|描述|
|-|-|-|
|poseMatrix|Float32Array|交点的4x4变换矩阵|
|distance|number|交点距离相机的距离|

**使用示例：**

```js
let frame = xrSession.getFrame();
// 0.5, 0.5 是屏幕中间的位置，使用 hitTest 方法得到该位置所对应的空间位置。
let hitRes = frame.hitTest(0.5, 0.5);
if (hitRes[0]) {    // 取最近的交点
    // 始终在屏幕中间的位置显示模型
    sceneNode.matrix.fromArray(hitRes[0].poseMatrix);
}
```