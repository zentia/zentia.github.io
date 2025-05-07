---
title: FShaderCache
description: FShaderCache 提供的机制可减少游戏中着色器的卡顿。
weight: 1
image: ue5-hero.png
categories:
    - 设计视觉、渲染和图形效果
    - 图形编程
---
# 总览
FShaderCache提供的机制可减少游戏中着色器的卡顿。它支持OpenGLDrv和MetalRHI RHIs，可在Mac、Linux和windows平台上使用。

可通过多个控制台命令启用或禁用FShaderCache功能。

|控制台命令|描述|
|--|--|
|r.UseShaderCaching [0/1]|着色器反序列化中早提交，不为请求式。追踪束缚着色器态，使它们在早提交中被预束缚。|

# 使用
应在开发机上启用`r.UseShaderCaching`和`r.UseShaderDrawLog`填充缓存。用户/玩家启用`r.UseShaderCaching`和`r.UseShaderPredraw`消耗缓存。