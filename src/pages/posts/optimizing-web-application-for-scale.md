---
title: 'Optimizing Web Applications for scale'
featured: true
main: true 
pubDate: 2025-04-30,
pubMonth: April
description: "Scalability has become a frontend buzzword, but what does it really take to scale a web app used by thousands of users? Spoiler: it often comes down to the basics you already know. From modular components to testing, performance, and documentation—if you're building at a startup or scaling fast, these are the habits that keep your frontend stable. And these are habites we often ignore…."
image:
    url: 'https://imgur.com/a/TqyaT9E'
    alt: 'You might not need a useEffect hook'
tags: ["react", "featured", "optimization"]
---

I joined Cleva two months before our public launch with 0 customers and remained an engineer on the frontend team for two years.  

In that time, we grew to over 100k users, with around 5k monthly active web app users, and over 120k monthly impressions.

Along the way, I learned what it really means to build a web application that scales, not just in traffic, but in maintainability, stability, and speed of execution.

Here are some lessons that separated clean from chaos:



### 1. Build with accessibility in mind  
It's tempting to skip this when you're shipping fast. But if you start with accessibility baked in, you're already 10 steps ahead in performance, usability, and inclusivity.  
- Use correct semantic elements
- Test with keyboard navigations and voice-overs
- Double down on aria labels- when, how and why. 


### 2. Design for composability  
It isn’t overengineering to have 4 components for 1 featured — it’s literally how React was designed to be used.  

Component composability allows you to move faster, stay consistent, and minimize bugs.  
[Patterns](https://www.patterns.dev/) like `single responsibility`, `custom hook`, and `controlled/uncontrolled` logic are your friends.



### 3. Prioritize testing — especially unit testing  
I previously wrote [an article](https://blossom.hashnode.dev/unit-vs-component-test) on unit vs component testing in React, but in hindsight, it is not as comprehensive as it excludes end-to-end which is just as common and important.

Here's the quick rundown of tests you might encounter on the frontend app:  

- Unit Tests: Tests written on backend Integrations and business logic, e.g API calls
- Component Tests: Remember those modular components we mentioned 1 second-read ago, they would come handy when you need to test that _BlogPost_ component and it is seperate from _Blogs_.
- End-to-end Tests: I've used cypress but I'm sure there are others that simulate the user journey and help you catch any unexpected behaviour. So for instance, we could write a test for when the user navigates to `/blogs` page and clicks on a blogPost.

Now this is my personal opinion, not writing end-to-end tests might get forgiven. It’s tests the visual interaction, and someone - your designer, QA, PM - will probably catch the issue.  

But flawed business logic? Broken data flows? 
For absolute peace of mind, I recommend you **Write the unit test.** Isolate the logic.

Also: the earlier you test, the easier it is. Don’t wait until the feature or the codebase grows too big to test comfortably.



### 4. Bake tests into your timeline  
Startups are pressure cookers. You’re always trying to ship yesterday.  
But testing is **part of shipping**.  

Factor tests into your deliverables. If you can ship in 1 day, estimate 2 days to include tests.  

No matter the rush, stand your IDE ground and write that test.  
Your future self (- and eventually manager) will come to see the value.



### 5. Document *everything*  
- Setup instructions  
- Style guides  
- Reusable components  
- Shared logic  
- Library decisions  
- Design Pattern

**Stability is the foundation of scalability.**  
You’re already juggling writing code, shipping features and fixes, coming up with business logic design, slack updates, syncs, designs - the last thing you want is to fix a weird merge conflict caused by someone importing a random date library.

A shared documentation to keep everyone up-to-date and on the same page will save you the team that extra meeting.

**Also:** keep your component library *visual and accessible*, not just for devs, but for designers.  

When a design team doesn’t know a component exists (or can be reused from an existing feature), they’ll create a new one. That compounds over time. Design system must be a collaborative effort across the product designers and you, the UI engineer.



### 6. Constantly measure performance  
What bloats your app:  
- Images  
- Fonts  
- Heavy external libraries etc... 

During my time at Cleva, the second iteration of the multi-website which I worked on consistently hit 95+ on pagespeed insight for performance, drawing 120K+ organic visitors monthly through a combination of optimizations techniques I can talk about in a different article.  

Then, we wanted to revamp and the new design was great! It had lots of animations, assets, interactions which I knew was going to impact our performance. 

I did what I could to optimize, but ultimately, we had to weigh performance vs user experience.  

And sometimes, **a small hit is okay**, as long as it's intentional, measured _(known and communicated)_.



### 7. Write it down or it didn’t happen  
(Yes, this is documentation again - it matters that much.)

\#
<br/>
\#
<br/>
\#
<br/>
\#
<br/>
\#
<br/>


### Final thought  
Scaling isn't about just "handling more users."  
It’s about creating a system that’s predictable under stress, technically and organizationally.  

If you’re working at a startup or shipping your own product, the best time to optimize for scale is *before* you need to.


## TL;DR – What I’ve Learned About Scaling Web Applications

- **Start with accessibility** — it is about inclusion and building robust UIs (in some countries, an inaccessible website can be potentially illegal).
- **Design with composability** — treat components like building blocks, not silos.
- **Write unit tests** — they’re cheaper than fixing broken logic later.
- **Test early** — testing should be part of the shipping timeline, not an afterthought.
- **Document ruthlessly** — shared understanding scales better than code alone.
- **Evaluate performance constantly** — assets and libraries can be expensive passengers.
- **Accept tradeoffs, but track them** — performance vs experience is a real balancing act.

Scaling isn’t just technical — it’s cultural. Get the habits right early.

 ✌🏼☕️