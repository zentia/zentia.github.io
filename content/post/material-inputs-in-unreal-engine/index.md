---
title: 材质输入
description: 关于虚幻引擎中材质的介绍文档。
weight: 11
image: ue5-hero.png
categories:
    - 材质
tags:
    - 设计视觉、渲染和图形效果
---
# 输入和材质设置
当你在细节面板中更改特定材质属性时，你会发现主材质节点中的一些输入会变成白色（表示它们已启用），而其他则是不可用状态。

以下三个属性控制材质中哪些输入可以启用：
- 混合模式（Blend Mode）：控制材质如何与其背后（底下）的像素进行混合。
- 着色模型（Shading Modle）：控制如何计算材质表面的光照效果。
- 材质域（Material Domain）：控制材质的用途，例如，是作为表面一部分，是用作光照函数，还是用作后期处理材质。

# Base Color
Base Color定义了材质的整体颜色。原则上，Base Color表示的是表面反射的漫反射光，不包含任何镜面反射/高光效果。