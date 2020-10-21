@@@
title: X-Ray Evaluation 
permalink: blog/x-ray-evaluation
date: 2020-06-04
summary: X-Ray is a powerful Javascript web scraping library that makes data collection easy. One of the prime features is its flexible schema that makes nested object structures easy. The easy to read and well-documented API provides plenty of examples of how to get started. X-Ray uses Cheerio and Request dependencies and removes all the hard work for us. As an example, Mirabela and I both tried to scape simplyHired: labels: X-Ray Library, Web Scraping
labels: X-Ray Library, Web Scraping
@@@

[X-Ray](https://github.com/matthewmueller/x-ray) is a powerful Javascript web scraping library that makes data collection easy. One of the prime features is its flexible schema that makes nested object structures easy. The easy to read and well-documented API provides plently examples of how to get started. X-Ray uses [Cheerio](https://cheerio.js.org/) and [Request](https://github.com/request/request) as dependencies and removes all the hard work for us. As an example, Mirabela and I both tried to scape simplyHired:


X-Ray: 
```javascript
 const Xray = require('x-ray');
 const x = Xray();

 x('https://www.simplyhired.com/search/Software-Development-and-Architecture-Occupations/category/47887de2-45aa-4327-9499-7fdba46c5e0f?sb=dd&jt=internship&job=Zs7Qu-vSCX-UxpXNs6tCVGSsrCms1zmSHtpZ_ujWFskCxymqi53oaA', '.SerpJob-jobCard.card', [{
   position: 'h2',
   link: 'a@href',
   company: '.jobposting-company',
   location: 'span.jobposting-location',
   description: 'p',
   posted: 'time',
   education: x('a@href', '.viewjob-content ul:first-of-type '),
 }]).paginate('.next-pagination a@href')
     .write('simplyHiredResults.json');
}
```

Cheerio (Snippet provided by Mirabela): 
```javascript
const getWebsiteContent = (url) => {
request(url, 
(error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
    
        $('.SerpJob-jobCard').each((index, element) => {
            const resultTitle = $(element).find('.card-link');
            const title = resultTitle.text();
            let url = resultTitle.attr("href");
            url = 'http://www.simplyhired.com' + url;
            const result = {title, url}
            results.push(result)
        })
        let nextPageLinkAdd = $('a.next-pagination').attr('href');
        let nextPageLink = 'http://www.simplyhired.com' + nextPageLinkAdd;
        pageCounter++;

        if (pageCounter == pageLimit || nextPageLinkAdd == null || nextPageLinkAdd == undefined) {
            exportResults(results)
            return false;
        }
        getWebsiteContent(nextPageLink)
    }
})
}
```

As seen above, instead of having to hard code how to paginate, X-Ray does it for use with a simple ``.paginate()`` function. We don’t have to fetch the attributes either, X-Ray does it for us! Crawling to another site is also easy as we can just simply call ``x`` again.

## Issues
One of the issues I ran into with X-Ray is the fact that as a stand-alone, X-Ray is not able to submit forms or scrape dynamic websites. One of the drivers they listed, [x-ray-phantom](https://github.com/lapwinglabs/x-ray-phantom) did not have many examples and no longer seems maintained. X-Ray-phantom calls Nightmare constructor that has default options, and weak is one of them. Unfortunately, weak has been reported to have some problems with [Windows](https://spin.atomicobject.com/2019/03/27/node-gyp-windows/). Thankfully setting weak to false was able to fix the issue:

```javascript
const phantom_opts = {
 webSecurity: false,
 images: false,
 weak: false,
};
```  

Some of the problems I also ran into while trying to work with the driver was how to do specific actions such as “click()” and “wait()”. After spending 10+ hours, I decided to invest my time in a different web scraper as I unfortunately could not figure it out. However, in those 10 hours, I did also find out that X-Ray cannot [scrape json response from an API](https://gitter.im/lapwinglabs/x-ray?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge). Thus for sites that provide an API such as USAjobs or Indeed, another library could be used.

Nevertheless, as a standalone X-Ray is a powerful library that makes scraping static websites easy. Integrating it with other drivers such as superagent or phantom is difficult and utilizing other libraries such as Puppeteer for dynamic pages may be easier.
