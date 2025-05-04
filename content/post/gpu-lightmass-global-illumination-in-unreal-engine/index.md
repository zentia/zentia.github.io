---
title: GPU Lightmass全局光照
description: 了解如何采用基于GPU的系统来生成预计算光照数据。
weight: 3
image: ue5-hero.png
categories:
    - 全局光照
tags:
    - 构建虚拟世界
---
GPU Lightmass（GPULM）是一种光照烘培解决方案，它可以预计算移动性设置为静止（Stationary）或静态（Static）的光源的复杂光线交互，并将这些数据保存在生成的光照贴图纹理中，这些纹理又转而应用到场景几何体。这个将光照烘培到纹理中的系统类似于基于CPU的Lightmass全局光照系统。