---
id: '4a1f2837-c0e2-465a-9510-6a2c02c6da76'
title: 'The Subtle Complexity of a Kanban'
publishedAt: '2025-07-04'
imgUrl: '/posts/how-to-setup-windows/poster.webp'
summary: 'In the post, I want to discuss a subtle but important complexity of a kanban. We would talk about how re-arranging a simple task or card in board, can cause chaos.'
readTime: 5
production: false
---

<script>
  import SimpleKanban from './Componenets/the-suble-complexity/simple-kanban.svelte'
</script>

# Introduction

We all have used a kanban application in our life time. Some of us may have hated it, and some of us have loved it, but few of us tried to create our own.
**Unfortunatly**, I was one of those. I find a kanban app pretty useful if done correctly. It really gives you the concept of progress for your project.
But, A kanban app, looks really simple, hides some weird complexity under. In this blog post, we'll discuss
about one of those complexities, `The Arrangement of a Task or Card`.

To understand the problem statement, we'll first define few `terms` so that we are in the same page from now.
Let's call a kanban board a `Board`. A task in the board will be called `A Card`. **A card** can be in different phases, let's say it is being discussed first, then
it's assigned to someone, and then someone will review it, and eventually that card will be marked as _completed_. Let's call these phares `a section`.

From now, We'll talk about a `Board` with 3 `Sections` and many `Cards`. Let's begin.

# The Arrangement of a Card in Board

When a card is moved inter section or intra section in frontend, we also have to update it in database.
But, the question comes, where to actually store the order, and how do we track it?? We'll discuss about different design patterns and techniques.

## It's simple bro, as a number in card

In the below kanban `Board`, you can see the `ids` and order of each `card`. Try to move the arround please.

<SimpleKanban />
