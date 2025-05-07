---
title: 剔除距离体积
description: 介绍如何使用剔除距离体积来根据Actor的大小和距离来剔除关卡中的Actor。
weight: 16
image: randg_herobanner.png
categories:
    - 设计视觉、渲染和图形效果
    - 优化和调试实时渲染项目
    - 可视性和遮挡剔除
---
剔除距离体积（Cull Distance Volume） 是非常有用的优化工具，它定义绘制（显现）该体积中的Actor的距离。这些体积可存储任意数量的"大小"和"距离"组合（称为 剔除距离对）。这些剔除距离对会被映射到Actor（沿其最长有效维度）的边界，然后指定给关卡中的该Actor实例。剔除距离体积（Cull Distance Volume）对于优化包含精细内部空间的大型室外关卡非常有用。当室内空间小到可被视为不重要时，可以剔除它们。