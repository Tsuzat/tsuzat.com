---
id: '892f991b-2478-4bf5-a958-f0ac16f51667'
title: 'Render Lottie animated icons in web'
publishedAt: '2024-04-10'
imgUrl: '/posts/how-to-make-animated-icons/poster.gif'
summary: 'This blog post explores how to incorporate captivating Lottie animations into your web projects. Learn techniques using both basic HTML, CSS, and JavaScript, and streamlined integration with a reusable Svelte component.'
readTime: 5
production: true
---

<script>
	import LottieIcon from '$lib/components/custom/LottieRender.svelte';
	import animationData from '$lib/assets/static/logo.json';
</script>

<details open>
  <summary>Table of Content</summary>

<!--toc:start-->

- [Introduction](#introduction)
- [The Coding Part](#the-coding-part)
  - [HTML, CSS and JavaScript Approach](#html-css-and-javascript-approach)
  - [Using Svelte](#using-svelte)
- [Conclusion](#conclusion)
<!--toc:end-->

</details>

# Introduction

An icon plays a crucial role within any application.
It represents a lot in very less. That being said,
an animated icon can elevate the UI. As the website logo of
this website itself is an animated icon. (see below)

<center>
    <LottieIcon {animationData}/>
    <em style="font-size: 0.9rem">Hover or Click me</em>
</center>

This animated icon is a lottie file, which is being rendered as
a svg in real time. All the animations are realtime and smooth.
Making a lottie file is not easy, but prefered tools are [`figma`](https://www.figma.com)
and [`lottielab`](https://www.lottielab.com/). **Figma** lets you create a SVG icon
and **LottieLab** lets you animate that.

Since, we're not here to discuss about the process of creating Lottie Files
but to render them in our website. Hence, you can download the lottie file from <a href="/blob/lottie.json" download="lottie.json">here</a>.

# The Coding Part

The philosophy is that if you can make it work for simple web, using HTML, CSS and JavaScript
then you can make it work everywhere. So, without further ado, let's begin.

## HTML, CSS and JavaScript Approach

To render the `lottie` file, we need the `lottie player`. For that we can use
the official guide by `Airbnb` (creator of lottie files). We'll create one simple
`index.html` and put out `lottie.json` (i.e. Lottie File) in the same folder.

Let's first install `live-server` so that we can render our web application.

```sh
npm i -g live-server
```

The `html` code looks like this,

```html{f[index.html]}
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Lottie Page</title>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
			type="text/javascript"
		></script>
	</head>

	<style>
		#lottie {
			width: 48px;
		}
	</style>

	<body>
		<div id="lottie"></div>
	</body>

	<script>
		let lottieContainer = document.getElementById('lottie');

		const animation = bodymovin.loadAnimation({
			container: lottieContainer,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			path: 'lottie.json'
		});

		animation.setDirection(1);
		animation.play();

		lottieContainer.addEventListener('mouseenter', (_) => {
			// if it is already playing then stopanimation.setDirection(1);
			animation.stop();
			animation.setDirection();
			animation.play();
		});
	</script>
</html>
```

Let's now run the run `live-server` in current folder/directory with quite mode.

```sh
live-server . -q
```

<center>
    <LottieIcon {animationData}/>
    <em style="font-size: 0.9rem">You should be able to see this(Click or Hover Me)</em>
</center>

Although, the process of creating animated icons with `lottie` is not that hard,
but the process of creating multiple icons can be challenging. One solution
could be to assign same class for all the `div`s which hold `lottie` and then
loop over them and attaching the `animation` for each on of them. However, even that process
could be tedious and the problem of attaching different `lottie.json` for different
`icons` will be challenging.

An alternative could be to use a front-end library like [React](https://react.dev/) or [Svelte](https://svelte.dev/).

I'm considering the fact that you've basic understanding of `svelte`.

## Using Svelte

Let's create a `svelte` component `LottieIcon.svelte` which can be reused.

```svelte{%h[34-41]%f[LottieIcon.svelte]}
<script lang = "ts">

// Import the onMount
import { onMount } from 'svelte';

// Options to render lottie icon

// JSON Data
export let animationData: {};
// If the animation should run in loop
export let loop: Boolean = false;
// If the animation should play automatically
export let autoplay: Boolean = true;
// If you need on hover properties
export let hover: Boolean = true;
// Pass on some optional CSS
export let style: string = 'width: 3rem';

let lottieContainer: HTMLElement;

onMount(async () => {
    const lottie = await import('lottie-web');
    const animation = lottie.loadAnimation({
        container: lottieContainer,
        animationData,
        render: 'svg',
        loop,
        autoplay
    });

    animation.setDirection(1);
    animation.play();

    if (hover) {
        lottieContainer.addEventListener('mouseenter', (_) => {
            // if it is already playing then stopanimation.setDirection(1);
            animation.stop();
            animation.setDirection();
            animation.play();
        });
    }
});
</script>
<div class="lottie" bind:this={lottieContainer} {style}></div>

```

This `LottieIcon.svelte` can be used anywhere. Let's try to render it in
`+page.svelte`. Considering that you have `LottieIcon.svelte` in the same
directory as `+page.svelte`, and, the `lottie.json` is in `/src/lib/assets/`
directory.

```svelte
<script lang = "ts">

import LottieIcon from './LottieIcon.svelte'
import animationData from '$lib/assets/lottie.json';

</script>

<LottieIcon {animationData} />

```

<center>
    <LottieIcon {animationData}/>
    <em style="font-size: 0.9rem">You should be able to see this(Click or Hover Me)</em>
</center>

# Conclusion

Lottie animations provide a powerful way to enhance the visual appeal and interactivity of your web applications. Here's a quick recap of the approaches we explored:

- **HTML, CSS, and JavaScript**: This offers a foundational understanding of integrating Lottie animations directly into web pages.

- **Svelte**: Streamlines the process by creating a reusable LottieIcon component, promoting efficient animation management within Svelte projects.
  Whether you work with a simple website or a complex web application, Lottie animations can add a touch of flair and dynamism. Experiment and find what works best for your unique projects!
