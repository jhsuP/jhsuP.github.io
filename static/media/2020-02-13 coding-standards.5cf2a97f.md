@@@
title: Javascript or J4v45cr1p7
permalink: blog/coding-standards
date: 2020-02-13
summary: Checkstyle. I hated Checkstyle. Don’t get me wrong, it taught me some useful things that admittedly made my code easier to read but I was_so glad to be done with it after ICS211. Then came ESLint. My first impression of ESLint was that there was a long installation process. It took me a while to figure out the configuration, and I found having to download the .eslintrc file every time to be redundant. As a short cut, I put the ``.eslintrc`` file in a folder so I could simply copy it to a new folder when I needed to. But in doing so, I ran into ``"Error: Failed to load config "airbnb-base"`` and it took me ages to figure out what was wrong. It was only after I checked Slack did I find the solution.
labels: JavaScript, Software Engineering, Learning, ESLint
@@@

Checkstyle. I hated Checkstyle. Don’t get me wrong, it taught me some useful things that admittedly made my code easier to read but I was _so_ glad to be done with it after ICS211. Then came ESLint.

My first impression of ESLint was that there was a long installation process. It took me a while
 to figure out the configuration, and I found having to download the ``.eslintrc`` file every time to be redundant. As a short cut, I put the ``.eslintrc`` file in a folder so I could simply copy it to a new folder when I needed to. But in doing so, I ran into ``"Error: Failed to load config "airbnb-base"`` and it took me ages to figure out what was wrong. It was only after I checked Slack did I find the solution. 

After getting ESLint properly configured, I found out it wasn’t as bad as I imagined it. Maybe it was due to the fact that I generally knew of some common coding standards after taking ICS211 and ICS212, but I found it to be kind of nice. The majority of the errors I made in the first couple of assignments were careless mistakes such as having spaces between my functions or typing too fast and misspelling a variable. I found the almost instant feedback to be helpful because it forces to me take my time and potentially save me hours of debugging by telling me what was wrong. It even taught me some conventions I was unaware of, such as putting ``()`` around arrow function argument. For example: 
```javascript
const even = _.filter(fib(), num => num % 2 === 0);
``` 
vs. 
```javascript
const even = _.filter(fib(), (num) => num % 2 === 0);
```


<img class="ui medium right floated rounded image" src="/images/leetspeak.png">

Regardless of my love-hate relationship with ESLint, I can understand why having a common coding standard is important. As I think of the final project for this class, I can only imagine the chaos that would ensue if everyone wrote differently. Like every other linguistic language, programming also has a proper structure. The only difference between a linguistic language such as English and a programming language like Javascript is that Javascript has more freedom. Though, one could argue that a Javascript code that does not follow coding standards is equivalent to Leetspeak (13375PEEk) and one that does follow it is like an English essay. Both _technically_ function correctly, just one takes more time to decipher. Coding itself is already hard. Why make it more complicated by using unconventional standards? 

_c0D1N' 17s3lF 1S 4lr34dy h4RD. whY M4K3 17 M0R3 C0MpL1c473D BY us1N' uNC0nv3n710N4l S74Nd4rds?_
