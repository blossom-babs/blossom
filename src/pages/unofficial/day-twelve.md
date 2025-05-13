---
title: 'Day 12 - JS Utils'
description: 'Day 12 of 31 days of Code (May)'
pubDate: 2025-05-12,
tags: ["grind"]
---

This code will not work as expected, why?

Understanding this is key to knowing the difference between arrow function and function declaration.

```
function Animal(name, sound){
    this.name = name
    this.sound = sound
}

Animal.prototype.attr = () => {
    console.log(this.name + " makes this sound: " + this.sound)
}

const cat = new Animal('cat', 'meow')
cat.attr()

```

Timestamp: 9:30PM

🟩