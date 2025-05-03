---
title: 图形编程介绍
description: 介绍图形程序员如何使用渲染系统和编写着色器。
weight: 12
image: ue5-hero.png
categories:
    - 图形编程
---
# 入门
虚幻引擎中有许多渲染代码，因此要通过粗略的观察来迅速了解渲染状况较为困难。阅读代码时，比较好的入手之处是`FDefferedShadingSceneRenderer::Render`，这是渲染线程中渲染新帧之处。此外，执行profilegpu命令并查看绘制事件也很有帮助。然后，您可以在Visual Studio中对绘制事件名称进行Find in Files操作，找出对应的C++实现。