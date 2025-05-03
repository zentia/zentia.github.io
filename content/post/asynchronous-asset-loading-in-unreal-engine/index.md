---
title: 资产异步加载
description: 介绍在运行时加载和卸载资产的方法。
weight: 12
image: ue5-hero.png
categories:
    - 虚幻架构
---
虚幻引擎（UE）中有很多方法可以简化资产数据的异步加载流程。这些新方法在开发中以及对设备上的烘培数据的作用相同，因此无需维护两条按需加载数据的代码路径。按需引用和加载数据通常有两种方法：

# FSoftObjectPaths和TSoftObjectPtr
# 资源注册表和对象库
# StreamableManager和异步加载