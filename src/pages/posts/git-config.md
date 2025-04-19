---
title: 'The git config rule'
featured: false
main: false
pubDate: 2025-04-14,
description: "Merge, Rebase, Fast-Forward? - Everytime Git throws the pull.rebase hint, you promise to look it up. This time, you will actually remember what it means."
image:
    url: 'https://imgur.com/a/TqyaT9E'
    alt: 'The git config rule'
tags: ["git"]
---

Has this ever happened to you?

You’re wrapping up a feature and commit your changes. You hit push, and boom , an error pops up. “Something went wrong. Check your terminal.”

So you do. You run `bash git pull`, hoping to resolve it quickly, but Git hits you with this familiar wall of hints:


```bash

hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only

....

```

You pause. You've seen this before. You Google it (again), click a Stack Overflow post you've probably bookmarked subconsciously, pick the same command you've always used, and keep it moving, promising yourself you'll understand it next time.

This is that next time.

## What Git Is Telling You

Let’s break down what these options mean with a quick mental picture.

You’ve made local changes. Someone else has pushed changes to the same branch on the remote. When you try to pull, Git says:
“Hey, we need to combine two histories - yours and theirs. How do you want to do that?”

You have three options.

### Option 1: git config pull.rebase false (Merge)

Here, git takes your changes, the other changes and combines them to create a new merge commit 

```css

A -- B -- C ---------- M  ← merged main
        \            /
         D -- E ----


```

- A, B, C = commits on remote
- D, E = your local commits
- M = the merge commit

You get a full picture of who committed what, but your history becomes branched and a bit noisy.

### Option 2: git config pull.rebase true (Rebase)

This command adds all your commit on top of the latest remote commits. 

``` A -- B -- C -- D' -- E'  ← linear history ```

So instead of the M on the history that shows a merge, there is a linear commit history. This is ideal if you want that straight history with no merge history. 

### Option 3: git config pull.ff only (Fast-Forward Only)

This says

> "Only pull if nothing diverged. If your local history is already behind and there’s no new work, just move the pointer forward.”

This option only works if you haven’t made any local commits yet — so Git can fast-forward without combining anything.

If histories have diverged even slightly, Git won’t do anything and will throw an error.

#### Bonus
You can update your preferred option for this blog globally or per project.

```bash

# Global (applies everywhere)
git config --global pull.rebase false
# Or project-level
git config pull.rebase true


```

