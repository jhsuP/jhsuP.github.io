@@@
image: images/Logo.png
title: Discord To-Do Bot
permalink: projects/discord-to-do
date: 2020-01-05
summary: A Discord "Todo" bot I developed used by Moderators of a Discord server with 700+ members. 
labels: Python, Discord.py 
@@@

<img class="ui medium right floated rounded image" src="../images/Add.png">

Moderating a server can be difficult, especially when there are over 700+ members and 7 moderators who are not only responsible for ensuring that rules are followed, but also responsible for hosting monthly events to keep the server engaged.

Initially we had a different channel called "todo" where each moderator could write out a task that needs to be finished. However, it quickly became disorganized. We contemplated using Google Docs but having to login elsewhere would decrease the motivation to use it. We decided that keeping it in the server centralizes everything to make it more accessible.

This Discord bot is implemented using [discord.py](https://discordpy.readthedocs.io/en/latest/api.html), an API wrapper for Discord. At the moment, the bot allows any moderator to add & remove a task from the embed. The bot currently shows which moderator added the task, the date it was added, and the task itself. Eventually, my goal is to implement the ability to edit a task. The bot is hosted through [Amazon Web Services](https://aws.amazon.com/).

<img class="ui huge image" src="/images/Todo.png"> 

In this project I gained experience in navigating API documentations. Python is not a language I am familiar with so coding this bot was difficult at first as it required me to spend a lot of time navigating through discord.py. 
 
Source: Not available. This bot is not intended for public use.
