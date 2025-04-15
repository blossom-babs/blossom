---
title: 'what if we maximized HTML/CSS'
featured: true
main: false
pubDate: 2025-04-13,
pubMonth: April
description: 'Looking for the cheapest way to get the most work done with less JS'
image:
    url: 'https://imgur.com/a/TqyaT9E'
    alt: 'You might not need a useEffect hook'
tags: ["react", "featured"]
---

One of the most common uses of state in react.js is toggling - on and off, yes and no.

```
const [active, setActive] = useState(false)

...

<button onClick={() => setActive(!active)}>{active ? 'Display' : 'Hide'} </button>
```

However I was recently introduced to taking advantage of this behaviour by using checkbox on and off property.

One of the best things about react is that we are able to easily merge javascript and html code via jsx, but it is also one of the worst things as we are easily able to use javascript for everything significantly increasing the overhead of performance.

There is another CSS property that I discovered recently and eliminates the need for onHover effect etc...check it out here.

I'm currently on the hunt for all of the possible ways to take advantage of HTML/CSS properties before looking at javascript, if you have any other tips, I would be glad to have you share them with me.