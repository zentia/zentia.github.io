---
title: 生成和销毁Actor
description: 在本文中，你将学会如何生成Actor，并创建一个Actor生成器，允许你点击按钮来生成Actor。
weight: 12
image: ue5-hero.png
categories:
    - Gameplay框架
---

```C++
AActor* UWorld::SpawnActor
(
    UClass*			Class,
    FName			InName,
    FVector const*	Location,
    FRotator const*	Rotation,
    AActor*			Template,
    bool			bNoCollisionFail,
    bool			bRemoteOwned,
    AActor*			Owner,
    APawn*			Instigator,
    bool			bNoFail,
    ULevel*			OverrideLevel,
    bool			bDeferConstruction
)
```