---
title: "Debounce vs Throttle: Peas in a Perfomance Pod"
description: "Understand the core differences between debounce and throttle, with real-world examples and when to use each in your frontend applications."
featured: true
pubDate: 2025-05-07
tags: ["frontend", "javascript", "performance", "debounce", "throttle"]
---

If you've ever tried to improve performance in a frontend app — especially when dealing with scrolls, inputs, or window resize events, you've likely heard of **debounce** and **throttle**.

But what exactly do they do? And when should you use one over the other?

Let’s break it down.


## Core Differences

| Feature     | **Debounce**                                | **Throttle**                                 |
|-------------|----------------------------------------------|-----------------------------------------------|
| **Behavior**| Waits until a period of **inactivity**       | Ensures function runs at most every `X` ms    |
| **Fires**   | Once, *after* the final trigger              | Many times, *every X ms at most*              |
| **Cancels** | Previous scheduled calls on new triggers     | Skips extra calls during the throttle window  |
| **Use Case**| "Run only after typing stops"                | "Run repeatedly, but not more than once per X"|



## Visual Comparison

###  Debounce (wait = 1000ms)

```js

        debounced();
        debounced();
        debounced();  // ← wait 1000ms → runs once

````

* It resets the timer every time you call it.
* The function only fires once after the user has stopped triggering it.



### Throttle (wait = 1000ms)

```js

        throttled(); // ✅ runs
        throttled(); // ⛔ ignored
        throttled(); // ⛔ ignored
        // ← 1000ms passes →
        throttled(); // ✅ runs again

```

* It ensures the function runs at most once per interval.


## Real-World Examples

| Situation                          | Use        | Why?                                         |
| ---------------------------------- | ---------- | -------------------------------------------- |
| Search input or autocomplete       | `debounce` | Wait until user stops typing before API call |
| Scroll event (parallax, lazy load) | `throttle` | Prevent performance issues on rapid events   |
| Window resize                      | `throttle` | Avoid layout recalculations on every pixel   |
| Drag-based animation               | `throttle` | Allow smooth, timed updates                  |



### Metaphor To help for quick recall

* **Debounce**: “Wait until they stop talking before replying.”
* **Throttle**: “Reply every 1 second, no matter how many times they talk.”





<br/>
<br/>


## Summary

* Use **debounce** when you want to **delay** execution until the noise stops.
* Use **throttle** when you want to **limit** how often something runs.


To practice both, you can check out GreatFrontend's excercise on implementing your own [debounce](https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/debounce) and [throttle](https://www.greatfrontend.com/questions/javascript/throttle).


 ✌🏼☕️
