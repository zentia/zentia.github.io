---
title: Actors
description: 介绍基本的Gameplay元素、Actor和Object
weight: 1
image: ue5-hero.png
categories:
    - 创建交互体验
    - Gameplay框架
---
所有可以放入关卡的对象都是 Actor，比如摄像机、静态网格体、玩家起始位置。Actor支持三维变换，例如平移、旋转和缩放。你可以通过游戏逻辑代码（C++或蓝图）创建（生成）或销毁Actor。

在C++中，AActor是所有Actor的基类。

注意：Actor不直接保存变换（位置、旋转和缩放）数据；如Actor的根组件存在，则使用它的变换数据。

# 创建Actor
创建 AActor 类的新实例被称为 生成。可使用泛型 SpawnActor() 函数或它的一个特殊模板化版本进行操作。

在 生成和销毁Actor 中可查阅gameplay AActor 类实例诸多创建方法的详细信息。

# 组件

在某种意义上，Actor 可被视为包含特殊类型 对象（称作组件）的容器。 不同类型的组件可用于控制Actor移动的方式及其被渲染的方式，等等。Actor的其他主要功能是在游戏进程中在网络上进行属性复制 和函数调用。

组件被创建时与其包含的Actor相关联。

组件的主要类型有：

- UActorComponent：这是基础组件。其可作为Actor的一部分被包含。如果需要，其可进行Tick。ActorComponents与特定的Actor相关联，但不存在于场景中的任意特定位置。它们通常用于概念上的功能，如AI或解译玩家输入。
- USceneComponent：SceneComponents是拥有变换的ActorComponents。变换是场景中的位置，由位置、旋转和缩放定义。SceneComponents能以层级的方式相互附加。Actor的位置、旋转和缩放取自位于层级根部的SceneComponent。
- UPrimitiveComponent：PrimitiveComponent是拥有一类图像表达（如网格体或粒子系统）的SceneComponent。诸多有趣的物理和碰撞设置均在此处。

Actor支持拥有一个SceneComponent的层级。每个Actor也拥有一个 RootComponent 属性，将指定作为Actor根的组件。Actor自身不含变换，因此不带位置、旋转，或缩放。 它们依赖于其组件的变换，具体来说是其根组件的变换。如果此组件是一个 SceneComponent，其将提供Actor的变换信息。 否则Actor将不带变换。其他附加的组件拥有相对于其附加到的组件的变换。

# Ticking

Ticking代表Actor在虚幻引擎中的更新方式。所有Actor均能每帧tick，或以用户定义的最小间隔进行tick，以便执行必要的更新计算或操作。

所有Actor均可通过 Tick() 函数默认被tick。

ActorComponents 能够默认被更新，但其使用的是 TickComponent() 函数进行操作。 参见组件页面的更新部分了解详情。

# 生命周期

查看Actor生命周期文档，了解如何在游戏中创建和移除Actor的更多信息。