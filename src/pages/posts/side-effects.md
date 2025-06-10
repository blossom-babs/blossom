---
title: "Cleaning Up Side Effects in React: Why It Matters"
description: "A practical guide to cleaning up side effects in React using useEffect. Learn how to prevent memory leaks and bugs in real-world apps."
pubDate: 2025-06-09
tags: ["React", "useEffect", "frontend", "performance", "clean code"]
featured: true
---

# Cleaning Up Side Effects in React: Why It Matters

Side effects are inevitable in any React app - data fetching, subscriptions, timers, DOM mutations - they all sneak into our components. But what happens when we don't clean them up?

Short answer: memory leaks, stale data, UI glitches, and bugs that only show up after you ship.

Let’s talk about how to clean up side effects *properly*, why React cares so much, and what I’ve learned building and debugging real-world apps at scale.


## 👣 What counts as a “side effect”?

In React, anything that affects the outside world, or depends on it, is a side effect. Think:

- Fetching from an API  
- Listening to events (`addEventListener`)  
- Setting up a WebSocket  
- Running a timeout or interval  
- Manually manipulating the DOM (charting libraries love this)

These go inside `useEffect`, `useLayoutEffect`, or sometimes `useInsertionEffect`.


## Why clean up?

React unmounts and remounts components often. Especially during re-renders, fast toggles, and route changes. If you don’t clean up, your side effect *lingers*, possibly:

- Still trying to update state after unmount (`Can't perform a React state update on an unmounted component`)  
- Triggering the same event listener multiple times  
- Holding on to memory (like an open WebSocket)

That’s how memory leaks happen in SPAs.


## The right way to clean up

React gives us a way to clean up by returning a function from your `useEffect`. It looks like this:

```tsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log('Running...');
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('Cleaned up!');
  };
}, []);
```

That return function runs:

- When the component unmounts
- Or right before the effect re-runs (if dependencies change)

This is our golden hook for teardown logic.

## Rule of thumb I use:

If you set it up, clean it up.

- addEventListener → removeEventListener
- setTimeout / setInterval → clearTimeout / clearInterval
- WebSocket → .close()
- Third-party library instance → .destroy() or .dispose()

## A cool trick I learnt recently about async side effects?

If you’re doing async work (like fetching data), we can’t directly cancel fetch, but we can track if the component is still mounted:

```tsx
useEffect(() => {
  let isMounted = true;

  async function loadData() {
    const res = await fetch('/api/data');
    const data = await res.json();

    if (isMounted) {
      setData(data);
    }
  }

  loadData();

  return () => {
    isMounted = false;
  };
}, []);
```

_Pfft: Or use AbortController for a more complete solution._

## Simple but critical! 

When we clean up our side effects, we:
- Respect React’s lifecycle
- Avoid memory leaks
- Build more stable apps
- Building a resilient code - think about performance, scalability, and what happens after we ship.

If you’re ever debugging a weird UI bug and nothing makes sense, pause and check: “Did I clean up that side effect?”

It might just save you an afternoon.