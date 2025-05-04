---
title: 间接光照缓存
description: 缓存的间接光照采样，用于模拟动态对象和未构建场景预览的全局光照效果。
weight: 4
image: ue5-hero.png
categories:
    - 全局光照
tags:
    - 构建虚拟世界
---
CPU Lightmass可以在静态对象上生成间接光照的光照贴图，但角色之类的动态对象同样需要一种接受间接光照的方法。这能通过间接光照缓存（Indirect Lighting Cache）来解决，其在光照构建时使用Lightmass生成的采样来计算动态对象在运行时的间接光照。

下图显示了带与不带间接光照缓存渲染的效果差异：

![Elemental关卡中的漫反射光照，不带间接光照缓存](01-indirect-cache-diffuse-no-indirect.png)