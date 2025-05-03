---
title: FShaderCache
description: FShaderCache 提供的机制可减少游戏中着色器的卡顿。
weight: 12
image: ue5-hero.png
categories:
    - 图形编程
---
# 总览
FShaderCache提供的机制可减少游戏中着色器的卡顿。它支持OpenGLDrv和MetalRHI RHIs，可在Mac、Linux和windows平台上使用。

可通过多个控制台命令启用或禁用FShaderCache功能。

# 使用
应在开发机上启用`r.UseShaderCaching`和`r.UseShaderDrawLog`填充缓存。用户/玩家启用`r.UseShaderCaching`和`r.UseShaderPredraw`消耗缓存。