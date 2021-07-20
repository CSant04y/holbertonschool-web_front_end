# 0x01. Developer tools


<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/0872ca9b19e11650e355.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210720%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210720T140757Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e08e03e1d9185a36ffe517a118c4c6aeadf35b90341cd5cae9b45ae675848a72" alt="" style="">
In this project, you will analyze this website [https://dev-tools.hbtn.info/](https://intranet.hbtn.io/rltoken/Lwnv01iLnS6OuT1vlDCcIg).
## Resources
**Read or watch**:
+ [Chrome DevTools | Tools for Web Developers | Google Developers](https://intranet.hbtn.io/rltoken/82GJvQ5DlwfcYRNuHWOGFA)
+ [Introduction | Down and Dirty with Chrome Developer Tools](https://intranet.hbtn.io/rltoken/vNCYSZZ_A7JZ6F3Nv91KxA)
+ [Firefox Developer Tools | MDN](https://intranet.hbtn.io/rltoken/zZQbDVkJ3zeeaM-3zTf8Dw)
+ [Dev Tips - Developer Tips by Umar Hansa](https://intranet.hbtn.io/rltoken/soaR8Gq7OL4w48rZe2bakQ)
+ [Get Started With Viewing And Changing CSS | Tools for Web Developers](https://intranet.hbtn.io/rltoken/RA0zyadwvl6OmoVYMDp-3Q)
+ [Keeping it simple with the JavaScript console - LogRocket Blog](https://intranet.hbtn.io/rltoken/ePHot6ZwOgXG6Cynq3E_-g)
+ [Inspect Network Activity - Chrome DevTools 101](https://intranet.hbtn.io/rltoken/hv47k9yKKsyoG2AEL73Ajw)
## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/PUFTV0Q9cIIHWBw5WqcRCw), **without the help of Google**:
### General
+ What Developer Tools in your browser are
+ How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
+ How to use the elements tab to edit HTML and CSS
+ How to audit a page according to the tips suggested by Lighthouse
+ How to create and run snippets on a page
+ How to get information about files and server configurations
+ How to block requests
+ How to know how much JavaScript or CSS is used on a page
+ How to detect 404 issues
+ How to move elements on a webpage
## Requirements
### General
+ A <code data-beeline-skip="true">README.md` file, at the root of the folder of the project, is mandatory
+ Use the newest version of Google Chrome browser (<code data-beeline-skip="true">78.0.3904.70` or later).
+ Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.


## 0. Responsive device
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Take a screenshot of the website using the device toolbar
Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)


## 1. Change the background color
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Change the background-color of the body to use <code data-beeline-skip="true">#4233bd`
Take a screenshot of the <code data-beeline-skip="true">PORTFOLIO` section


## 2. Force element state
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Force the hover state of the “cake” block in the section Portfolio
Take a screenshot of it


## 3. Copy all the styles of the button
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Select the <code data-beeline-skip="true">Download me!` and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:

```
$ head -2 3-button_styles
border-radius: 1px;
color: #FF00FF;
$
```


## 4. Change button styles
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`
+ All primary buttons (<code data-beeline-skip="true">btn-primary`) should have the <code data-beeline-skip="true">#0080ee` color as a background color
+ All outlined buttons light (<code data-beeline-skip="true">btn-outline-light`) should have <code data-beeline-skip="true">#0020aa` for the text color
+ Screenshot all buttons that changed and merge it to one image


## 5. Remove part of the website
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Remove the <code data-beeline-skip="true">div` of the “cake” box in the section Portfolio

Take a screenshot of it


## 6. Where is it coming from?
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`
+ On the right panel, click on the <code data-beeline-skip="true">Computed tab`
+ Then, select the <code data-beeline-skip="true">h2` with the text <code data-beeline-skip="true">ABOUT`
+ Search for <code data-beeline-skip="true">margin-bottom`

Which file is coming from that declaration?


## 7. How many listeners
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

How many times click events are referenced in JavaScript files?


## 8. What is the HSL code
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Select the primary button “Send”

What is the equivalent value of the hexadecimal background-color, in HSL?

(format of your answer should be: <code data-beeline-skip="true">hsl(&lt;VALUES&gt;);`, example: <code data-beeline-skip="true">hsl(241, 23%, 24%);` following by a new line)


## 9. The max-width of the container
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the <code data-beeline-skip="true">max-width` for the first <code data-beeline-skip="true">.container` in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)

(format of your answer should be <code data-beeline-skip="true">max-width: &lt;VALUE&gt;;`, example: <code data-beeline-skip="true">max-width: 670px`)


## 10. Moving around
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Switch the section “About” and “Portfolio”

Take a screenshot of it


## 11. Coverage
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

How many bytes that <code data-beeline-skip="true">freelancer.css` covers?

Answer file must contain the value in Byte (example: <code data-beeline-skip="true">6144` for 6KB)


## 12. Emulate the print version of the webpage
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Take a screenshot of the homepage, only emulation the CSS print version of the website.


## 13. Using the console
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Select the Avatar image in the header and type <code data-beeline-skip="true">$0` in the console. Enter.

What does it return?


## 14. Write code in the console
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Write in the console <code data-beeline-skip="true">console.log(document.title)`, what is returned?


## 15. Holberton web framework
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Which front-end framework could we guess this page is using?

In your answer file only put the letter of the multiple choice answer from below:
+ A. React JS
+ B. Material Design
+ C. Bootstrap
+ D. Angular JS


## 16. Homepage weight
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the total weight of the page (with all the elements)?

Take a screenshot of it


## 17. Number of requests
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the number of requests done when accessing this page?

Take a screenshot of it


## 18. Number of CSS files
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

How many CSS resources are loaded on this page?


## 19. Number of images
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

How many image resources are loaded on this page?


## 20. Favicon image type
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the <code data-beeline-skip="true">type` value of the favicon image?


## 21. Font library
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Holberton School website uses a font library for their icons, which one is it?


## 22. XHR calls
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the name of the resource that generates 1 XHR calls?


## 23. Audits panel
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

What is the notation for <code data-beeline-skip="true">Performance` (for desktop mode and no throttling - also called Lighthouse)?

Take a screenshot of it


## 24. Static assets
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

How many static assets need a better cache policy?

Take a screenshot of it


## 25. Accessibility
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

When you run an accessibility audit, what is the contrast issue?

In your answer file only put the letter of the multiple choice answer from below:
+ A. Image elements do not have [alt] attributes
+ B. Links do not have a discernible name
+ C. Background and foreground colors do not have a sufficient contrast ratio.


## 26. No alt
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Which classes are on the images that have no <code data-beeline-skip="true">alt` attribute?

Your answer file must contains all classes, example: <code data-beeline-skip="true">.my_class.my_second` if 2 classes


## 27. Best practices
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Which attribute is missing on all the links with the target <code data-beeline-skip="true">_blank`?

In your answer file only put the letter of the multiple choice answer from below:
+ A. <code data-beeline-skip="true">rel="noopener"`
+ B. <code data-beeline-skip="true">rel="noreferrer"`
+ C. A and B
+ D. <code data-beeline-skip="true">rel = "nofollow"`


## 28. SEO
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Which <code data-beeline-skip="true">&lt;a&gt;` links don’t have enough text description?

Take a screenshot of it


## 29. Sources
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

The <code data-beeline-skip="true">sources` panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.
+ Create a new snippet called <code data-beeline-skip="true">allcolors.js`
+ Copy-paste the code on [that page](https://intranet.hbtn.io/rltoken/ccMzjlTVdz6w6lxBfJdElQ)
+ Run the code
+ Take a screenshot of the result in your console


## 30. Block CSS files
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Block all CSS requests

Take a screenshot of it


## 31. Application panel
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

The <code data-beeline-skip="true">application` panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.

What is the only key present in the session storage for this page?


## 32. Service workers
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Does this page have any service workers? <code data-beeline-skip="true">Yes` or <code data-beeline-skip="true">No`


## 33. Security
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

The <code data-beeline-skip="true">security` panel allows you to make sure HTTS is properly implement on a webpage.

Which organization issued the SSL certificate for this page?


## 34. Expiration date
Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

Go to <code data-beeline-skip="true">https://dev-tools.hbtn.info/`

When does the SSL certificate expire?

Take a screenshot of it
