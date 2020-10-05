@@@
title: Two Heads Are Better Than One
permalink: blog/pair-programming
date: 2020-06-05
summary: My first pair programming experience was with Kelli and we used Discord. We ended up coming together for about an hour. I shared my entire screen which was able to show Google Chrome, Command Prompt, and Intellij. When it came to reviewing my code, Discord was useful because unlike CodeTogether and Floobits, I was able to share more than just Intellij. I was able to show Kelli the problems I ran into on my command prompt as well as going to the websites and showing her how I got the right CSS selectors to use. And when it came to her showing her code, I was able to go into her repository and have her explain it to me. I can see where CodeTogether or Floobits would be useful here as sometimes when I was sharing my screen, trying
labels: Software Development, Pair Programming
@@@


“Two heads are better than one, not because either is infallible, but because they are unlikely to go wrong in the same direction.”
_― C.S. Lewis_

## Kelli (Discord):

<img class="ui huge centered rounded image" src="/images/pair_programming_discord.png">

My first pair programming experience was with Kelli and we used Discord. We ended up coming together for about an hour. I shared my entire screen which was able to show Google Chrome, Command Prompt, and Intellij. When it came to reviewing my code, Discord was useful because unlike CodeTogether and Floobits, I was able to share more than just Intellij. I was able to show Kelli the problems I ran into on my command prompt as well as going to the websites and showing her how I got the right CSS selectors to use. And when it came to her showing her code, I was able to go into her repository and have her explain it to me. I can see where CodeTogether or Floobits would be useful here as sometimes when I was sharing my screen, trying to find a specific line/file Kelli was talking about was a little difficult. Though this problem could have been mitigated by Kelli sharing her screen, which, unfortunately, was not possible as her internet kept cutting in and out so she had to call using her phone. After the code review, we just coded in each other’s presence! While Kelli was working on trying to get her files to write correctly, I was working on trying to get x-ray phantom to work. Sometimes we would ask each other questions, and I even sent her code at one point. Discord supports mark-up which makes the format a lot nicer:

## Aubrie (Discord / CodeTogether):

My second pair programming experience was with Aubrie. We called using Discord and used CodeTogether. This was my first time using CodeTogether so it took me a while to figure it out, but once I did it was fairly smooth. What I liked about CodeTogether was that I could turn the toggle on/off “Follow Host”. This allowed me to explore Aubrie’s files without being limited to the file she was currently looking at. Since we both used x-ray, I mainly showed her my problem with the phantom.js driver then we spent the rest of the hour trying to get Tatooine to work. Unlike Discord, I was actually able to take control of the host, which made it a lot easier than having to send it on Discord and say which line/block to change. I would say this session was productive because we were able to figure out what ``Cannot use import statement outside a module`` meant! After about 20 minutes of playing around, we figured out we had to change ``import Tatooine from ‘Tatooine’`` to ``const Tatooine = require(‘Tatooine’)``. One of the struggles I personally faced was not being able to show other windows outside of Intellij. When I explain my code, I like going to the website and showing how I got the CSS selectors and overall, showing the entire process. With CodeTogether, I am unable to do that, which is where Discord is useful as it allows multiple people to screen-share. 
 
## Mirabella (Discord / CodeTogether / Floobits):

<img class="ui huge centered rounded image" src="/images/pair_programming_floobits.png">

My third session was with Mirabella and we used Slack to call. Mirabella used Floobits to share, and I used CodeTogether cause I ran into some problems getting Floobits to work (which I eventually figured out after we ended our session). We mainly did a code review, where I explained to her how X-Ray worked and she in turn explained how Cheerio worked. I learned a lot about Cheerio and we came to the conclusion that both were really similar. The only exception is that Cheerio does all the hard work, whereas X-Ray uses Cheerio as a dependent and simplifies it for us. More information about the comparison can be seen [here](https://jhsup.github.io/essays/x-ray.html). After the code review, we just discussed which scrapers we thought thus far would be good to use. The entire session was roughly 20-30 minutes.


## Evaluation 
Overall, I really like pair programming cause it gives me a sense of motivation. When I am coding by myself, I sometimes get distracted by the things around me. However, when I am in a call with someone (even if it’s quiet majority of the time), it forces me to concentrate on my work. When I was working on my ICS 314 project which was online due to COVID, my teammates and I often called on Discord, shared our screens, and just coded. When we ran into problems, it was really easy to show what the problem was (eg. command-line error, things not generating correctly on the site). However, trying to fix the problem was difficult and CodeTogether/Floobits would have definitely helped in that aspect. For a test run, I think it went pretty smoothly. Any problems I ran into were on my side only and my own personal preference, but I am sure it will be alright after I figure out which toolsets work best for me. I would definitely like having more pair programming sessions because I feel like I not only learn from my peers, but I am also more productive! 