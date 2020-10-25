@@@
title: Recommendation Systems
permalink: blog/recommendation-systems
date: 2020-10-24
summary: What do all the major sites like Amazon, Netflix, Facebook, Instagram, Twitter, and YouTube have in common? How does an online shopping system relate to a video streaming service? Algorithms -- specifically the recommendation system. How many times have we gone to the site with one thing in mind and before we know it, we spiral down into a rabbit hole and are 20, 30, 40 links in? For me? Countless times.
labels: Software Development, InternBit, Recommendation Systems
@@@


What do all the major sites like Amazon, Netflix, Facebook, Instagram, Twitter, and YouTube have in common? How does an online shopping system relate to a video streaming service? Algorithms -- specifically the recommendation system. How many times have we gone to the site with one thing in mind and before we know it, we spiral down into a rabbit hole and are 20, 30, 40 links in? For me? __Countless times.__

That is what the major sites key in on -- by suggesting things that could be relevant it pulls individuals to keep using it. And this is what InternBit must utilize as well. Otherwise, why would people use InternBit when there are numerous internship sites out there like LinkedIn, Glassdoor, Indeed? What makes InternBit standout? 

What separates InternBit from other internship sites is that by using information supplied by RadGrad, InternBit will provide relevant recommendations based on a student’s skills, courses, and career interests. The site can also act as an internship tracker where a student can save internships and report their statuses such as applied, interviewing, offered, accepted, or rejected. By using these user interactions, we can extract important information such as success rates to gauge if the site is helpful, and if our department is effective in producing students that are ready for the workforce. 

But let’s not get too far ahead. While that is the end goal for InternBit, we first must focus on one of the site’s attraction and discuss how to build an effective recommendation system. There are two main types of recommendation systems: collaborative, content, and the third being a hybrid of both. While they both have their advantages, with Netflix using a content-based filter and Twitter using a collaborative filtering system, we first must analyze the pros and cons of each method and see which aligns best with InternBit’s vision.

<img class="ui huge centered rounded image" src="https://miro.medium.com/max/875/1
*KBriLd3AYrLuULCqdffxCQ.png"/>

# Content-Based Recommendation 

Content-Based filtering is tailored to the individual and recommends items based on what the user likes. It can be based on previous action or explicit feedback such as one’s career interest or skills. Based on the data collected, it then makes suggestions to the user. If the user provides more information, either explicitly (eg. adding the internship to their favorites) or implicitly (eg. clicking on the link), the recommendations become more and more accurate. 

One of the most common ways to implement it would be using Cosine Similarity. A great article written by [James G. Best](https://dev.to/jimatjibba/build-a-content-based-recommendation-engine-in-js-2lpi) explains more in-depth about the process but to simplify it:
It looks at the similarities of two items such as common skill or job titles
It generates a dot product with ranges between 0 and 1, with 1 being exactly similar. 
One of the caveats of this system is that a new user has no information, so the recommendations will be useless. However, a way to bypass that is upon account creation, users are prompted to enter basic information about themselves such as skills, tools, and career interests. It can then use the information as a starting basis then build upon it by integrating implicit and explicit feedback. 

## Possible Implementation
When a user first logs in, they are required to fill out their profile that lists some skills and career interest. The system can then use that as a basis and provide recommendations based on the internship’s job title and listed skills. We can either have a weighted system where a job title has more value than a listed skill, or we can combine the two. These provide the very base of the system and as a user uses the site more, the values can change based on search queries and internships favorited. 

# Collaborative Filtering

<img class="ui medium left floated rounded image" src="https://files.realpython.com/media/rating-matrix.04153775e4c1.jpg"/>

If anyone uses Twitter, they would have the first-hand experience in how collaborative filtering works. It provides recommendations based on a popularity system. As the name suggests, it collaboratively looks for recommendations. If a similar user likes said item, there is a chance that the particular user will also like it. There are 2 subtypes: user-based or item-based filtering. In user-based filtering, it is used to find similar users based on the ratings they give. Item-based filtering is used to find similar items based on the ratings given to them by users. In terms of InternBit, Item-based filtering would be the one to focus on.

## Possible Implementation

To implement it, most data will be in the form of a matrix. Each row typically represents a user, while the columns correspond to the different categories items. Like content-based filtering, a cosine similarity can be used to find the similarity between the matrix. This can be used as the basis for new users. After a user fills out their profile, we can use user-based filtering to find others with similar interests, then provide recommendations based on what those users liked. An article written by [Abhinav Ajitsaria](https://realpython.com/build-recommendation-engine-collaborative-filtering/) explains it further by providing use cases and code. 

# InternBit’s Recommendation System
While both of the systems are effective, Content-based filtering would be best suited for InternBit at this level. It allows users to view internships that are specific to their interest level without the risk of affecting other listings (eg. collaborative filtering could overshadow less “popular” ones). In the future, once there is a good user base, a rating/review section could be included that lists the most popular internships chosen by students in ICS. With said functionality, switching to a hybrid of content-based and collaborative filtering could be effective. 
