---
title: 'Setup a powerful terminal'
publishedAt: '2025-04-22'
imgUrl: '/posts/how-to-setup-windows/poster.webp'
summary: 'This is a setup guide for new developers to make their terminal powerfull. This will include setting up a terminal, installing essential tools, and tips to enhance your workflow.'
readTime: 5
production: true
---

<script>
  import fastfetch from '$lib/assets/posts/setup-a-powerful-terminal/fastfetch.png'
</script>

- [Introduction](#introduction)
- [Installation](#installation)
  - [Nerd Font](#nerd-font)
  - [Fish Shell](#fish-shell)
  - [Installing `eza`](#installing-eza)
  - [Installing `starship`](#installing-starship)
  - [A Terminal](#a-terminal)
    - [Installing and Setting Up Ghostty](#installing-and-setting-up-ghostty)
  - [Bonus](#bonus)
  - [Conclusion](#conclusion)

# Introduction

In this post, we're walking through how to set up a powerful, developer-friendly terminal. We'll cover essential tools, smart tips, and productivity hacks to boost your workflow. By the end, you'll have a clean, efficient terminal setup ready to supercharge your dev game. For a quick preview, check out the video below.

<video controls> <source src="https://res.cloudinary.com/dkcwivtsa/video/upload/v1745316120/b2d190i8bo0m3syy2fwn.mp4" type="video/mp4"> </video>

> Warning: This guide is tailored for macOS and Linux users. Most tools here won't work on Windows.

---

# Installation

I’m assuming you're already familiar with installing software using a `package manager` or by downloading binaries—so fire up your terminal and browser, and let’s dive in.

## Nerd Font

Nerd Fonts add icons and ligatures to your terminal, giving it a cleaner, more modern look. Pick and install any font you like from the official site: [nerdfonts.com](https://www.nerdfonts.com/).

## Fish Shell

Fish is a smart, user-friendly shell for macOS, Linux, and more. Grab it from their [website](https://fishshell.com/).

If you’re on **macOS**, install it via Homebrew:

```sh
brew install fish
```

Fish comes packed with features like syntax highlighting, autosuggestions, and history-based completions—making your terminal way more efficient.

After installation, find the binary path with:

```sh
which fish
```

Mine is located at `/opt/homebrew/bin/fish`. You'll need this path when setting up your terminal.

Configure Fish Shell
To configure Fish, create or edit the config.fish file in `$HOME/.config/fish/`.

Paste the following snippet into your `config.fish` file:

```fish{f[~/.config/fish/config.fish]}
## Set values
# Hide welcome message
set fish_greeting
set VIRTUAL_ENV_DISABLE_PROMPT "1"
set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"

## Environment setup
# Apply .profile: use this to put fish compatible .profile stuff in
if test -f ~/.fish_profile
  source ~/.fish_profile
end

# Add ~/.local/bin to PATH
if test -d ~/.local/bin
    if not contains -- ~/.local/bin $PATH
        set -p PATH ~/.local/bin
    end
end


## Functions
# Functions needed for !! and !$ https://github.com/oh-my-fish/plugin-bang-bang
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

if [ "$fish_key_bindings" = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

# Fish command history
function history
    builtin history --show-time='%F %T '
end

function backup --argument filename
    cp $filename $filename.bak
end

# Copy DIR1 DIR2
function copy
    set count (count $argv | tr -d \n)
    if test "$count" = 2; and test -d "$argv[1]"
	set from (echo $argv[1] | trim-right /)
	set to (echo $argv[2])
        command cp -r $from $to
    else
        command cp $argv
    end
end

## Useful aliases
# Replace ls with eza
alias ls='eza -al --color=always --group-directories-first --icons' # preferred listing
alias la='eza -a --color=always --group-directories-first --icons'  # all files and dirs
alias ll='eza -l --color=always --group-directories-first --icons'  # long format
alias lt='eza -aT --color=always --group-directories-first --icons' # tree listing
alias l.='eza -ald --color=always --group-directories-first --icons .*' # show only dotfiles
alias ip='ip -color'

# Common use
alias tarnow='tar -acf '
alias untar='tar -xvf '
alias wget='wget -c '
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ......='cd ../../../../..'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='grep -F --color=auto'
alias egrep='grep -E --color=auto'

alias sde="sudo -E"
alias del="rm -rf"
alias defenstrate="sudo rm -rf"
alias lg="lazygit"
alias gi="git init"
alias g="git"
alias :q="exit"
alias cls="clear"
alias v="nvim"
alias nv="nvim"


## Starship prompt
if status --is-interactive
   source ("/opt/homebrew/bin/starship" init fish --print-full-init | psub)
end
```

## Installing `eza`

eza is a command line tool that provides a better way to list files and directories.
You can find the github repo [here](https://github.com/eza-community/eza). Please follow the installation guide.

Since, I'm using **MacOS**, I'll be installing it via `brew`

```sh
brew install eza
```

## Installing `starship`

Starship is a prompt for your terminal. It provides a better way to display your shell's information.
You can find thier official website [here](https://starship.rs/). You can follow the installation guide [here](https://starship.rs/guide/#%F0%9F%9A%80-installation).

To setup the starship prompt, you need to create a file named `starship.toml` in `$HOME/.config/`.
Add the following text in your `starship.toml` file.

```toml{f[~/.config/starship.toml]}
## FIRST LINE/ROW: Info & Status
# First param ─┌
[username]
format = " [╭─$user]($style)@"
show_always = true
style_root = "bold red"
style_user = "bold red"

# Second param
[hostname]
disabled = false
format = "[$hostname]($style) in "
ssh_only = false
style = "bold dimmed red"
trim_at = "-"

# Third param
[directory]
style = "purple"
truncate_to_repo = true
truncation_length = 0
truncation_symbol = "repo: "

# Fourth param
[sudo]
disabled = false

# Before all the version info (python, nodejs, php, etc.)
[git_status]
ahead = "⇡${count}"
behind = "⇣${count}"
deleted = "x"
diverged = "⇕⇡${ahead_count}⇣${behind_count}"
style = "white"

# Last param in the first line/row
[cmd_duration]
disabled = false
format = "took [$duration]($style)"
min_time = 1


## SECOND LINE/ROW: Prompt
# Somethere at the beginning
[battery]
charging_symbol = "󰂄"
disabled = true
discharging_symbol = "󱟞"
full_symbol = "󰁹"

[[battery.display]]  # "bold red" style when capacity is between 0% and 10%
disabled = false
style = "bold red"
threshold = 15

[[battery.display]]  # "bold yellow" style when capacity is between 10% and 30%
disabled = true
style = "bold yellow"
threshold = 50

[[battery.display]]  # "bold green" style when capacity is between 10% and 30%
disabled = true
style = "bold green"
threshold = 80

# Prompt: optional param 1
[time]
disabled = true
format = " 🕙 $time($style)\n"
style = "bright-white"
time_format = "%T"

# Prompt: param 2
[character]
error_symbol = " [×](bold red)"
success_symbol = " [╰─λ](bold red)"

# SYMBOLS
[status]
disabled = false
format = '[\[$symbol$status_common_meaning$status_signal_name$status_maybe_int\]]($style)'
map_symbol = true
pipestatus = true
symbol = "🔴"

[aws]
symbol = " "

[conda]
symbol = " "

[dart]
symbol = " "

[kotlin]
symbol = " "

[docker_context]
symbol = " "

[elixir]
symbol = " "

[elm]
symbol = " "

[git_branch]
symbol = " "

[golang]
symbol = " "

[hg_branch]
symbol = " "

[java]
symbol = " "

[julia]
symbol = " "

[nim]
symbol = " "

[nix_shell]
symbol = " "

[nodejs]
symbol = " "

[package]
symbol = " "

[perl]
symbol = " "

[php]
symbol = " "

[python]
symbol = " "

[ruby]
symbol = " "

[rust]
symbol = " "

[swift]
symbol = " "
```

## A Terminal

Your OS may not come with a powerful terminal by default. Hence, you need to have a terminal that support true color and undercurl:

- [Kitty](https://sw.kovidgoyal.net/kitty/) (Linux & Macos)
- [Wezterm](https://wezterm.org/) (Linux & Macos)
- [Alacritty](https://alacritty.org/) (Linux & Macos)
- [Iterm2](https://iterm2.com/) (Macos)
- [Ghostty](https://ghostty.org/) (Linux & Macos)

> Info: Since, I'm using **Ghostty** as my main termainal, I'll be also including the setup for it.

### Installing and Setting Up Ghostty

Please follows the [installation guide](https://ghostty.org/docs/install/binary) on ghostty website.

Since, I'm using **macos**, and I have brew install, I'll be installing it via `brew`

```sh
brew install ghostty
```

For the better understanding of the ghostty setup, please head over to the [ghostty docs](https://ghostty.org/docs/config).
But, in short, you need to create a file named `config` in `$HOME/.config/ghostty/`.
**This is a plain text file**. You need to add following text in your `config` file.

```sh{f[~/.config/ghostty/config]}
font-family = "FiraCode Nerd Font"
command = /opt/homebrew/bin/fish --login --interactive
theme = "Solarized Dark Higher Contrast"
background = 000b0f
font-size = 18
cursor-style = bar
background-opacity = 0.80
background-blur = 30
window-height = 25
window-width = 90
macos-titlebar-style = tabs
```

You can now try to open the **Ghostty** terminal and see an amazing terminal.

Try running `ls` command on the terminal.

## Bonus

Install, [fastfetch](https://github.com/fastfetch-cli/fastfetch) to see a beautiful info about you system.

Since, I'm using **MacOS**, I'll be installing it via `brew`

```sh
brew install fastfetch
```

To see the info, run the following command

```sh
fastfetch
```

![fastfetch]({fastfetch})

## Conclusion

This is a setup guide for new developers to make their terminal powerfull.
This will include setting up a terminal, installing essential tools, and tips to enhance your workflow.
