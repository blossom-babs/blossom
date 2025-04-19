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

Absolutely — here’s a rewritten and more personalized version of your article, tailored for clarity and your intended audience (intermediate/senior devs and startup builders), with a stronger narrative flow and punchier tone:

### Title: **What If We Maxed Out HTML & CSS First?**

**Description**: A frontend experiment: how far can we push the browser before reaching for JavaScript?**Tags**: react, frontend, performance**Image**:

At some point, every React dev writes this snippet:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const [active, setActive] = useState(false);   setActive(!active)}>    {active ? 'Hide' : 'Display'}   `

It works. It's clean. But it also introduces state, re-renders, and just a bit more JavaScript than we might actually need.

### The Checkbox Trick

Recently, I came across a slick alternative — using a native HTML  to toggle visibility. No state, no re-renders, just plain old HTML doing its thing.

Combine that with :checked in CSS and you've got:

*   A toggle mechanism
    
*   Full accessibility
    
*   Zero JavaScript overhead
    

Pretty elegant, right?

### When JSX Becomes a Crutch

One of React’s superpowers is JSX — blending HTML with JS feels natural. But that same flexibility can turn into a trap. It’s easy (and tempting) to reach for state and hooks for everything. Even when HTML/CSS could handle it just fine.

I’ve been guilty of it: using useEffect for simple animations, state for toggles, JS for hover effects...

Turns out, the browser’s built-in capabilities are often good enough — and a lot cheaper.

### The CSS I Was Sleeping On

Another trick I picked up: using :has() (yes, it's finally supported in modern browsers!) to handle things like hover-based child styling — no JS required.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .card:has(:hover) {    transform: scale(1.02);  }   `

It feels like having React-style props or conditional logic... just written directly in CSS.

### My Current Rule of Thumb

Before reaching for JS, I now ask:

> Can HTML or CSS do this already?

If the answer is yes, that’s one less re-render, one less hook, and one less dependency.

### Got Tips?

This is an ongoing hunt. If you’ve got a favorite trick that uses raw HTML or CSS to replace a common JS pattern, I’d love to hear it.

Let’s max out the browser first — and only reach for JS when we really need to.

Let me know if you'd like to:

*   Add codepens or live demos
    
*   Turn this into a series (e.g., "You Might Not Need That Hook")
    
*   Repost a tailored version for LinkedIn with a strong CTA
    

Want me to prep a LinkedIn post version next?



<details> and  <summary> so accordion is not needed</summary>

use css attributes instead of classnames: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors