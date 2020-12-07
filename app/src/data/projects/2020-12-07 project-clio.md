@@@
image: images/PROJECT-CLIO-SMALL.png
title: Project CLIO
permalink: projects/project-clio
date: 2020-12-07
summary: Project CLIO is a web application that allows Hawaii State Archives to crowd-source the indexing effort by gamifying it.
labels: Hackathon, Hawaii Annual Code Challenge, React, Bootstrap, API
@@@

The [Hawaii Annual Coding Challenge (HACC)](https://hacc.hawaii.gov/) is a hackathon that was created by Hawaii Governor
 David Ige in 2015. Unlike traditional hackathons that last 1-2 days, HACC is a multi-week competition. This allows prolonged communication between participating teams and gives us the opportunity to create proof-of-concept solutions. This year, there were 6 challenges from different departments such as the Department of Human Services and the Department of Archives. 

This was my first time participating in a hackathon and my team’s name was [ByteCryb](https://github.com/HACC2020/ByteCryb). My team consisted of Gum Aung, Ken Tung, Trey Sumida, Arlsan
 Rakhmankulov, and myself. For our challenge, we chose the Hawaii State Archive challenge that
  sought to crowdsource the indexing effort by gamifying it. Their goal is to “provide better end-user access to State Archive records”. However, there are thousands of records that need to be indexed. At the moment, state archivists assign a subset (eg. 50 out of 1000) of a job (eg. Land Rights 1800-1850) to each volunteer to index. This process currently consists of using a combination of PDF & Excel sheets and volunteers would switched constantly between the 2. This is error-prone because volunteers could get the wrong PDF or edit the wrong column on the excel sheet. Additionally, there are no validations for the values entered so problems could arise when they are uploaded to the State Archives. 

Our goal was to improve the workflow and condense the entire process to a single website. Through gamification such as a leaderboard and a bounty system, we hoped to also motivate volunteers. 

<div align="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YdfcoQ9xLtc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br/>

Admins can create a job for the public by uploading an XML file that describes what and which kind of information needs to be extracted from the uploaded historical records. The XML file is then converted into a validating dynamic form for the volunteers to fill out and points are given per record. Overtime points could lead to awards being given. Before everyone was assigned a subset of records. Now an admin can just upload everything and users can work on what they want so it’s more flexible. This also allows jobs to be finished faster because admins won’t be stuck waiting for a subset to finish. Additionally, admins can increase the number of points gained per record to increase the "bounty" if a specific job needs to be prioritized.

<img class="ui huge image centered" src="../images/adminAddJob.png"> 
<br/>
<img class="ui huge image centered" src="../images/xml_validator.png"> 
<br/>

Each record is loaded with its respective fields individually to prevent confusion and our fields can detect regular expressions to provide text validation (eg. only numbers allowed). Once submitted, the next record is loaded.

<img class="ui huge image centered" src="../images/records.gif"> 
<br/>

On the admin side, once records are reviewed and approved, it gets saved to our database so it can be exported as a .csv.

<img class="ui huge image centered" src="../images/review.png"> 
<br/>
<img class="ui huge image centered" src="../images/adminExport.png"> 
<br/>

A leaderboard system was implemented to increase the gaming aspect of it.
<br/>

<img class="ui huge image centered" src="../images/leaderboard.png"> 
<br/>

Our team was split up into two groups; Arslan and I worked on the front-end and Gum, Ken, and
 Trey worked on the backend. We had daily standup meetings at 7 pm to discuss our current
  progress and troubleshoot if needed. I was responsible for creating some of the wireframes
  , building the frontend with React and Boostrap, creating the demo video, and connecting the
   site to
   our RESTful API.

One of the biggest issues we ran into was with CORS, mainly with “No 'Access-Control-Allow-Origin' header is present on the requested resource.” In development, we are able to get by setting "proxy": "http://localhost:8080" in our package.json. However, in production, it refused to work despite backend disabling it. In the end, it was fixed by using a CORS proxy. Another issue I ran into was connecting the API. I have never worked with APIs before so it was a steep learning curve trying to figure out how to send the correct data (eg. formdata vs. appending it to body). Luckily Gum introduced me to [Postman](https://www.postman.com/) which made testing a lot smoother. The last issue I ran into was with the endpoints. Prior to actual development, as a whole team we discussed what endpoints were needed. However in actual development, I realized we needed more and more endpoints to do what we envisioned. A lot of the endpoints were later revised or added in the final week of the hackathon.

Overall, it was a fantastic experience. I got to work with an amazing team and learned things I wouldn’t have been able to learn in class. If I were to do this competition in the future, I would like to experiment with the backend. My only experience with backend so far has been with MongoDB. I would also like to use different frameworks such as Vue and work with different technologies like Angular, Express, and Docker.

Source: 
* <i class="large github icon"></i>[GitHub/ByteCryb](https://github.com/HACC2020/ByteCryb)
* <i class="large globe icon"></i>[DevPost](https://devpost.com/software/project-clio)

