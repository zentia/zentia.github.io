---
title: Lightmass门户
description: 缓存的间接光照采样，用于模拟动态对象和未构建场景预览的全局光照效果。
weight: 6
image: ue5-hero.png
categories:
    - 全局光照
tags:
    - 构建虚拟世界
---
在收集光线时，Lightmass可以使用来自光子映射技术的光子追溯到聚光源、点光源和定向光源。这意味着它可以找到这些类型的光源来自哪个小窗户，并以高品质解析射入的光线。但是，天空光照自发光网格体不能有效地支持光子发射，所以Lightmass只能强行查找微小地重要光照特性。