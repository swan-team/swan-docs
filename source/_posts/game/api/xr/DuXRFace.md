---
title: DuXRFace
layout: gamedoc
topic: xr
categoryName: api
priority: 10-04

---

每一帧检测获取到的人脸对象。调用 [DuXRFrameFaceMode#getUpdatedTrackableFaces](/game/api/xr/DuXRFrameFaceMode#getUpdatedTrackableFaces) 返回。通过对象下你可以获取到所有可以用到的人脸部分的数据。

下面是所有 DuXRFace 的属性：

### centerPoseMatrix

`centerPoseMatrix`属性是一个用来表示人脸姿态的 4x4 的变换矩阵，存储在一个 Float32Array 中。

**THREE.js 代码示例**

```js
const face = frame.getUpdatedTrackableFaces()[0];
if (face) {
    // 将姿态矩阵应用到模型变换中
    model.matrixAutoUpdate = false;
    model.matrix.fromArray(face.headPoseMatrix);
    model.matrixWorldNeedsUpdate = true;
}
```

### landmarks

`landmarks` 属性存储了底层算法得到的人脸所有的特征点数据，目前算法能够检测到人脸的 95 个特征点，每个特征点都有 `x`、`y`、`score` 三个数据，分别是相对于相机的归一坐标（范围为 0 - 1）以及置信度。这 95 个特征点的数据都存在一个 Float32Array 中。

下面例子使用 Context 2D 的接口来绘制这些特征点

```js
const landmarks = face.landmarks;
const width = ctx.canvas.width;
const height = ctx.canvas.height;
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
```

当然除了简单的绘制，特征点还可以用来做很多其它的事情，可以说是大部分人脸应用的基础了，比如说美颜中的瘦脸、大眼、2D 贴纸等效果，都需要使用到这些特征点。

下面这张图片标注了每个特征点对应脸上的位置。

<img src="/img/game/xr/landmarks.jpg" alt="特征点标注图" title="特征点标注图" width="500" />


### skeleton

相关接口 [DuXRSessionFaceMode#getSkeletonDefinition](/game/api/xr/DuXRSessionFaceMode#getSkeletonDefinition)。

`skeleton` 对象包含了骨骼节点的变换矩阵数据。

+ jointPoseMatrices

存储有所有骨骼节点 4x4 矩阵的 Float32Array，如何遍历获取每个骨骼节点需要的矩阵数据参考下面的代码示例

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



### blendShapes

`blendShapes` 属性表示了一系列预定义的五官的表情系数。这些系数可以用于实现三维渲染中的 Morph Animation，或者用于对比两个表情的相似度。

**`blendShapes` 数据格式**
```js
// blendShapes 属性是一个数组，数组中每一项都有 name 和 weight 两个属性分别表示系数名字和系数值
[
    {
        "name": "browDownLeft",
        "weight": 0.2
    },
    {
        "name": "browDownRight",
        "weight": 0.2
    }
]
```


这些系数的命名跟 ARKit 中的 [blendShapes](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation) 是一样的。下面是所有的系数列表：

+ [browDownLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928223-browdownleft)
+ [browDownRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928254-browdownright)
+ [browInnerUp](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928264-browinnerup)
+ [browOuterUpLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928274-browouterupleft)
+ [browOuterUpRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928255-browouterupright)
+ [eyeBlinkLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928261-eyeblinkleft)
+ [eyeBlinkRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928262-eyeblinkright)
+ [eyeLookUpLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928250-eyelookupleft)
+ [eyeLookUpRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928258-eyelookupright)
+ [eyeLookDownLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928234-eyelookdownleft)
+ [eyeLookDownRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928272-eyelookdownright)
+ [eyeLookInLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928260-eyelookinleft)
+ [eyeLookInRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928243-eyelookinright)
+ [eyeLookOutLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928269-eyelookoutleft)
+ [eyeLookOutRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928265-eyelookoutright)
+ [eyeWideLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928233-eyewideleft)
+ [eyeWideRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928267-eyewideright)
+ [jawLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928273-jawleft)
+ [jawOpen](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928236-jawopen)
+ [jawRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928248-jawright)
+ [mouthClose](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928266-mouthclose)
+ [mouthFrownLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928277-mouthfrownleft)
+ [mouthFrownRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928270-mouthfrownright)
+ [mouthPucker](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928257-mouthpucker)
+ [mouthLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928228-mouthleft)
+ [mouthRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928246-mouthright)
+ [mouthLowerDownLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928242-mouthlowerdownleft)
+ [mouthLowerDownRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928275-mouthlowerdownright)
+ [mouthUpperUpLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928240-mouthupperupleft)
+ [mouthUpperUpRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928247-mouthupperupright)
+ [mouthRollLower](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928224-mouthrolllower)
+ [mouthRollUpper](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928227-mouthrollupper)
+ [mouthShrugLower](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928230-mouthshruglower)
+ [mouthShrugUpper](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928276-mouthshrugupper)
+ [mouthSmileLeft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928249-mouthsmileleft)
+ [mouthSmileRight](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/2928244-mouthsmileright)
