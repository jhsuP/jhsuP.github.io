@@@
image: images/internbit-logo.png
title: InternBit
permalink: projects/InternBit
date: 2020-07-28
summary: InternBit is a web application that seeks to make internship searching easier.
labels: Summer Research Project, React, Semantic UI, Puppeteer 
@@@

[InternBit](https://radgrad.github.io/docs/internbit/goals/) is an ongoing project that began its development in the summer of 2020. It is funded by the National Science Foundation under Grant No. 1829542 and built using React and [Semantic-UI](https://react.semantic-ui.com/). Searching for internships as a student is a time-consuming process that requires a lot of effort. InternBit aims to lower the ”activation energy” for a student to get started and be successful in their internship search. By reading in student data that is already provided through [RadGrad](https://www.radgrad.org/), InternBit can streamline the process and recommend internships based on their interest and skills.

At its current point, InternBit’s database is supplied from 11 internship websites that were scraped using [SuperAgent](https://www.npmjs.com/package/superagent), [Puppeteer](https://github.com/puppeteer/puppeteer), and [X-Ray](https://github.com/matthewmueller/x-ray). It has a functional filter system that allows students to filter by skills, location, and company. Students can also sort the listing alphabetically by positions and company, and most recent (date). A functional search feature also allows students to input a search query. To see the latest deployment, [click here](https://radgrad.github.io/internbit-ui-jh/). 

<img class="ui huge image centered" src="https://jhsup.github.io/images/layout.gif"> 
<img class="ui huge image centered" src="https://jhsup.github.io/images/description.png"> 

Future plans include: 
* Email system
* Ability to add internships manually
* Integrate student data from RadGrad
* Implement a recommendation system
* Implement student UI to see internship profile generated from RadGrad data

As a Software Developer summer intern, I was part of the InternBit team that had 4 members. I contributed to both the front-end and back-end implementation. Each intern was given the opportunity to create their own static website to display the data or team-up. I chose to create my own so the user interface and codebase was done by me, with the occasional feedback & help from my team. 

The website I scraped using Puppeteer were:
* LinkedIn
* SimplyHired
* ZipRecruiter
* Stackoverflow
* Monster
* Internships (Chegg)

After the sites were scraped, [Natural.js](https://github.com/NaturalNode/natural) and Regex was used to parse the listing for missing data fields such as compensation, qualifications, and due date. The statistics are shown below.

<img class="ui huge image centered" src="https://jhsup.github.io/images/statistics.png"> 

Through this internship, I learned how to research and work with various scraping libraries (eg. Puppeteer & X-Ray). This was also the first time I worked with Regex. I deepened my understanding of React.js and how to work with components & states. At the end of the internship, my team and I presented InternBit to the [2020 SURE Symposium](https://manoa.hawaii.edu/undergrad/urop/summer-undergraduate-research-experience-sure/sure-symposium-3/) so I was able to gain experience in creating and presenting a research poster. Below is a screenshot of our poster, with the actual poster having a .gif that showcased the site.

<img class="ui huge image centered" src="https://jhsup.github.io/images/SURE%20Conference%20Poster.jpg"> 

As InternBit is a research project, I learned how in research, a “failure” can actually be a “success”. For example, I ran into problems scraping Internships (Chegg) as the site is able to catch when we are using automated tools such as Puppeteer. This resulted in me looking for ways to bypass reCAPTCHA, such as changing the userAgent. In the end, I was unable to scrape it as I intended. However, through this experience, I learned how user agents worked. Scraping Internships may be put on a hold for now, but in the future, once InternBit is fully deployed with working capabilities such as recommendation systems, we can evaluate its efficiency. If found that InternBit helps in internship searching, we can present that data to Chegg themselves and ask for access to their API. Additionally, I first coded the site to have pagination but I ran into errors when it came to displaying the page numbers correctly. Unforunately I was unable to figure it out so I tried to implement infinite scroll instead. Rather than using existing libaries such as [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component), I decided to write the codebase myself and through the experience, learned more about HTML Dom events such as onscroll.

Source: 
* <i class="large github icon"></i>[GitHub/InternBit](https://radgrad.github.io/internbit-ui-jh/)
* <i class="large github icon"></i>[GitHub/InternBit Repo](https://github.com/radgrad/internbit-ui-jh)

Running Deployment: 
* [InternBit](https://radgrad.github.io/internbit-ui-jh/)

