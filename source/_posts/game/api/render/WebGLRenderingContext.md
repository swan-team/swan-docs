---
title: WebGLRenderingContext
layout: gamedoc
topic: render
draft: true
categoryName: api
---

在 Canvas 上绘制 WebGL 的渲染上下文（rendering context）。几乎所有的 WebGL 绘制操作都需要通过该上下文进行绘制。

通过以下方式创建：

```js
var canvas = swan.createCanvas();
var gl = canvas.getContext('webgl');
```

然后就可以使用 `gl` 的属性和方法进行操作了，具体见下文。

<!-- md game/api/render/_WebGLRenderingContext/canvas.md -->
<!-- md game/api/render/_WebGLRenderingContext/drawingBufferHeight.md -->
<!-- md game/api/render/_WebGLRenderingContext/drawingBufferWidth.md -->

<!-- md game/api/render/_WebGLRenderingContext/activeTexture.md -->
<!-- md game/api/render/_WebGLRenderingContext/attachShader.md -->
<!-- md game/api/render/_WebGLRenderingContext/bindAttribLocation.md -->
<!-- md game/api/render/_WebGLRenderingContext/bindBuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/bindFramebuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/bindRenderbuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/bindTexture.md -->
<!-- md game/api/render/_WebGLRenderingContext/blendColor.md -->
<!-- md game/api/render/_WebGLRenderingContext/blendEquation.md -->
<!-- md game/api/render/_WebGLRenderingContext/blendEquationSeparate.md -->
<!-- md game/api/render/_WebGLRenderingContext/blendFunc.md -->
<!-- md game/api/render/_WebGLRenderingContext/blendFuncSeparate.md -->
<!-- md game/api/render/_WebGLRenderingContext/bufferData.md -->
<!-- md game/api/render/_WebGLRenderingContext/bufferSubData.md -->
<!-- md game/api/render/_WebGLRenderingContext/checkFramebufferStatus.md -->
<!-- md game/api/render/_WebGLRenderingContext/clear.md -->
<!-- md game/api/render/_WebGLRenderingContext/clearColor.md -->
<!-- md game/api/render/_WebGLRenderingContext/clearDepth.md -->
<!-- md game/api/render/_WebGLRenderingContext/clearStencil.md -->
<!-- md game/api/render/_WebGLRenderingContext/colorMask.md -->
<!-- md game/api/render/_WebGLRenderingContext/compileShader.md -->
<!-- md game/api/render/_WebGLRenderingContext/compressedTexImage2D.md -->
<!-- md game/api/render/_WebGLRenderingContext/compressedTexSubImage2D.md -->
<!-- md game/api/render/_WebGLRenderingContext/copyTexImage2D.md -->
<!-- md game/api/render/_WebGLRenderingContext/copyTexSubImage2D.md -->
<!-- md game/api/render/_WebGLRenderingContext/createBuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/createProgram.md -->
<!-- md game/api/render/_WebGLRenderingContext/createRenderbuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/createShader.md -->
<!-- md game/api/render/_WebGLRenderingContext/cullFace.md -->
<!-- md game/api/render/_WebGLRenderingContext/deleteBuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/deleteFramebuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/deleteProgram.md -->
<!-- md game/api/render/_WebGLRenderingContext/deleteShader.md -->
<!-- md game/api/render/_WebGLRenderingContext/deleteTexture.md -->
<!-- md game/api/render/_WebGLRenderingContext/depthFunc.md -->
<!-- md game/api/render/_WebGLRenderingContext/depthMask.md -->
<!-- md game/api/render/_WebGLRenderingContext/depthRange.md -->
<!-- md game/api/render/_WebGLRenderingContext/detachShader.md -->
<!-- md game/api/render/_WebGLRenderingContext/disable.md -->
<!-- md game/api/render/_WebGLRenderingContext/disableVertexAttribArray.md -->
<!-- md game/api/render/_WebGLRenderingContext/drawArrays.md -->
<!-- md game/api/render/_WebGLRenderingContext/drawElements.md -->
<!-- md game/api/render/_WebGLRenderingContext/enable.md -->
<!-- md game/api/render/_WebGLRenderingContext/enableVertexAttribArray.md -->
<!-- md game/api/render/_WebGLRenderingContext/finish.md -->
<!-- md game/api/render/_WebGLRenderingContext/flush.md -->
<!-- md game/api/render/_WebGLRenderingContext/framebufferRenderbuffer.md -->
<!-- md game/api/render/_WebGLRenderingContext/framebufferTexture2D.md -->
<!-- md game/api/render/_WebGLRenderingContext/frontFace.md -->
<!-- md game/api/render/_WebGLRenderingContext/generateMipmap.md -->
<!-- md game/api/render/_WebGLRenderingContext/getActiveAttrib.md -->
<!-- md game/api/render/_WebGLRenderingContext/getActiveUniform.md -->
<!-- md game/api/render/_WebGLRenderingContext/getAttachedShaders.md -->
<!-- md game/api/render/_WebGLRenderingContext/getAttribLocation.md -->
<!-- md game/api/render/_WebGLRenderingContext/getBufferParameter.md -->
<!-- md game/api/render/_WebGLRenderingContext/swanBindCanvasTexture.md -->
