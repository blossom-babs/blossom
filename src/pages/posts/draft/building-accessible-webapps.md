1. Building an app with accessibility first starts with using the right semantic type.

```
<div aria-label="button"></div> Okayyy or you could just use an actual button
<button></button>
```

2. sit with the designers - contrast matters, you do not want to design the entire app with right semantic tags only to discover during test that the background and text have 0 contrast

3. Test test test - there are apps to do this but there are also, manual test, try to navigate your site with just keyboard / screen readers. Did you have a good experience

4. Non-focusable/ non-tabable elements: like divs, use your tabs but also take note of the order

5. aria-labels

6. label links, alt tags

