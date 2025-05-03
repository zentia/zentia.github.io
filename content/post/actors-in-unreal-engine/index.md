---
title: Actors
description: 介绍基本的Gameplay元素、Actor和Object
weight: 12
image: ue5-hero.png
categories:
    - Gameplay框架
---
所有可以放入关卡的对象都是Actor，比如摄像机、静态网格体、玩家起时位置。

在C++中，AActor是所有Actor的基类。

注意：Actor不直接保存变换（位置、旋转和缩放）数据；如Actor的跟组件存在，则使用它的变换数据。

# 创建Actor

创建AActor类的新实例被称为生成。可使用泛型`SpawnActor()`函数或它的一个特殊模板化进行操作。