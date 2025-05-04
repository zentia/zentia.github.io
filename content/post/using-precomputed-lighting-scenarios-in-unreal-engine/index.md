---
title: 预计算光照情景
description: 介绍如何在单个场景中使用多种光照设置。
weight: 1
image: ue5-hero.png
categories:
    - 全局光照
tags:
    - 构建虚拟世界
---
虚幻引擎支持在关卡中使用不同的预计算光照情景（Precomputed Lighting Scenarios）。这使得单个关卡可以保存并显示多种光照设置，使玩家即获得灵活的动态光照，又能以固定开销预计算光照。对用高性能方式进行高精度渲染的虚拟显示（VR）或建筑可视化而言，在不同预计算光照情景之间切换更显重要。通读此文后，你便能了解如何在项目中使用预计算光照。

# 功能限制
虽然预计算光照情景拥有诸多优点，但使用时也需要注意其缺陷和限制。在下文中，我们将介绍其中的一些限制，并告诉你如何回避（或解决）它们。

- 在游戏中只限制一个可见光照情景关卡。
- 光照情景关卡出现后，来自所有子关卡的光照图数据均会放置在其中，因此白天时只加载Day Scenario光照图。因此光照图将不再由子关卡进行流送。
- 子关卡光照贴图数据保存在光照情景的BuildData包中。注册来自其他子关卡的反射捕获会修改当前光照情景的BuiltData。假如加载子关卡两次，并且只加载光照情景BulidData一次，就会产生如下错误：

```
错误： 反射捕获 /Game/Environments/Levels/Your_Level_Name.level_name:PersistentLevel.SphereReflectionCapture_1.NewReflectionComponent 上传了两次，且未重新加载其光照情景关卡。
```