---
title: 'How I set up windows for Development'
publishedAt: '2024-04-05'
imgUrl: '/posts/how-to-setup-windows/poster.webp'
summary: 'This guide walks you through a streamlined setup process for a productive development environment on Windows. Learn essential installations and tips to enhance your workflow.'
readTime: 5
production: true
---

<script>
	import scoop from '$lib/assets/posts/how-to-setup-windows/img1.webp';
</script>

<details open>
  <summary>Table of Content</summary>

<!--toc:start-->

- [Introduction](#introduction)
- [Installations](#installations)
  - [1. Directory Structure](#1-directory-structure)
  - [2. Microsoft PowerToys](#2-microsoft-powertoys)
  - [3. Git](#3-git)
  - [4. Scoop](#4-scoop)
  - [3. Optional tools and IDEs](#3-optional-tools-and-ides)
- [Conclusion](#conclusion)
<!--toc:end-->

</details>

# Introduction

A well-configured development environment is crucial for maximizing efficiency and minimizing frustrations
when working on Windows. In this blog post, I'll outline my preferred setup focusing on key tools and
optimizations to streamline your development experience.

# Installations

In this topic, I'll walk you through the installation of different software.
But before that, what I like is to make a separate folder for all my development
software, this gives me a quantified idea of how much each software is eating in my drive.

I personally make a `folder` in `C:` drive itself i.e. `C:\Development`. One more advise,
do install `microsoft powertoys` from `Microsoft Store` itself. It'll make your life amazing.

Now let's get started without further ado.

## 1. Directory Structure

Before diving in, I recommend creating a dedicated folder for development-related software like
`C:\Development`. This centralizes installations and provides a clear picture of space utilization.

## 2. Microsoft PowerToys

Microsoft PowerToys is a true gem and can significantly boost your productivity.
You can find it in the Microsoft Store.

## 3. Git

The foundation of any development workflow is version control.
Install [Git](https://git-scm.com/) directly within your
`C:\Development` folder to ensure streamlined access.

## 4. Scoop

[Scoop](https://scoop.sh) is a robust open-source package manager that
surpasses the built-in Windows option, winget.
Install Scoop in a location like `C:\Development\Scoop`,
and remember to add the `SCOOP` environment variable for seamless usage.
([Refer to](https://phoenixnap.com/kb/windows-set-environment-variable) for guidance if needed.)

![scoop environment]({scoop})
_powertoys screenshot of environment variable scoop_

Open the powershell that already comes with windows, and run
following commands

```sh
iwr -useb get.scoop.sh | iex
```

Once the scoop is installed. Let's install some useful software.
It may depend on personal preferences but I'll share my tools which
I use in daily coding.

```sh
# add the extras and java to install more packages
scoop bucket add extras java

# Installing Languages
scoop install python java/openjdk nodejs rustup go gcc
```

Along with the languages that I need, I also install different software with scoop.
Below is the detailed list if you are interested then click it.

<details>
  <summary>Click here to see full list</summary>

- [Wezterm](https://github.com/wez/wezterm)
- [Starship](https://starship.rs/)
- [Lazygit](https://github.com/jesseduffield/lazygit)
- [Notion](https://www.notion.so/)
- [Postman](https://www.postman.com/)
- [ripgrep](https://github.com/BurntSushi/ripgrep)
- [Localsend](https://localsend.org/#/download)
- [NeoVim](https://neovim.io/)
- [gsude](https://github.com/gerardog/gsudo)

</details>

To install all the software, you can just do,

```sh
scoop install wezterm starship lazygit notion postman ripgrep localsend neovim gsudo
```

## 3. Optional tools and IDEs

Personally, I also do some mobile application development using [`Flutter`](https://flutter.dev/).
For that I install Flutter in `C:\Development\flutter`. Along with Flutter, I also prefer to
install [`Android Studio`](https://developer.android.com/) and [`IntelliJ Idea`](https://www.jetbrains.com/idea).

# Conclusion

This setup provides a solid foundation for a pleasant development experience on Windows.
Here are some additional points to keep in mind:

- **Customization**: Personalize these configurations and tool selections to suit your workflow and preferences.

- **Exploration**: The world of Windows development enhancements is vast; continue exploring tools and techniques to further refine your environment.

- **Windows Subsystem for Linux (WSL)**: If your development heavily involves Linux-based tools, WSL offers a powerful integration for a more seamless experience.
