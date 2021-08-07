# 0x05. Forms


<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/abbff2217b3cc83e050d.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=33835a3311c36a1b873e5ddce18c25794d4d69cc27d8252e9e09c1b3ad4f5cdd" alt="" style="">

## Resources
**Read or watch**:
+ [An Extensive Guide To Web Form Usability — Smashing Magazine](https://intranet.hbtn.io/rltoken/L7JpxWt0F5VsUtwsDGaJYg)
+ [Forms - UX Movement](https://intranet.hbtn.io/rltoken/FaOz7GkGRSnrlYKL91sWYQ)
+ [Placeholders in Form Fields are Harmful (Video)](https://intranet.hbtn.io/rltoken/kkI4hp8L2xriaBiZ4aay5g)
+ [The Anatomy of Accessible Forms: Best Practices | Deque](https://intranet.hbtn.io/rltoken/Suk4Imd1PwQWQfMARmUyOg)
+ [Pure CSS Custom Error Messaging for Default Form Elements – Sarah Holley Design](https://intranet.hbtn.io/rltoken/mt7GbkQzlwq86rGgLXuKug)
**MDN resources:**
+ [HTML forms - Learn web development | MDN](https://intranet.hbtn.io/rltoken/FqmevqAf9FQJTCLzWHkR1g)
+ [form - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/SSy7rj0I3adIOAdQYHZlTg)
+ [fieldset: The Field Set element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/Dei_L42fLRZU_AJ6ZrEHYQ)
+ [legend - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/ZkZo0GMrr0swRR5qOAbZpA)
+ [label - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/riHRpJYmDTPKnhEnmim8Og)
+ [input: The Input (Form Input) element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/I-tvtRp2hlUSVkdNVuOkzQ)
+ [tabindex - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/IVNFtpOTz5HH2hhPVirm1w)
+ [accesskey - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/hpkb0GWg6d58CT3VbJBYUA)
+ [button: The Button element - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/lWIyMaHK4ZXYyIftpFkydQ)
+ [select - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/yW_Ov-o5Z5-WHRqOH1yrWQ)
+ [optgroup - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/fd435kOSi_vDQuxS9C_hzQ)
+ [datalist - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/9zHNcNs_TijZGoXlSPE6UQ)
+ [textarea - HTML: Hypertext Markup Language | MDN](https://intranet.hbtn.io/rltoken/ZI43Ei3OIRGmi0fdEm-Wfg)
+ [Form Validation UX in HTML and CSS | CSS-Tricks](https://intranet.hbtn.io/rltoken/Wbg54wi7RUJX2_y7hrw6dQ)
+ [Constraint validation - Developer guides | MDN](https://intranet.hbtn.io/rltoken/4jC9dQkx3ZT3yKR3hB8-vw)
+ [:invalid - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/7h8uLLpM8WxMQS7t6aAk7Q)
+ [:valid - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/UKXa7S-Q_saLWXgrJeFRNg)
+ [:optional - CSS: Cascading Style Sheets | MDN](https://intranet.hbtn.io/rltoken/Yw2FK8PGHmv5jgF8BOKJ9w)
## Learning objectives
At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/pmQMK-ly1dQivGtPWHV6Zw), **without the help of Google**:
+ How to create an HTML5 form
+ How to choose the right input type
+ How to constrain a form field with regular expressions
+ How to style inputs for invalid, valid, and required fields
+ How to build a a comment form
+ How to build a simple search form
+ How to create usable and accessible forms
## Requirements
+ Allowed editors: `vi`, `vim`, `emacs`
+ A `README.md` at the root of the project directory is mandatory
+ HTML and CSS have been rendered on Chrome 78 or more.


## 0. basic comment structure
To ensure we start on the same foot, use these files:

To ensure we start on the same foot, use these files:

`00-article.html`

<textarea readonly="" rows="21" cols="81">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
&lt;title&gt;Article - Techium&lt;/title&gt;
&lt;meta name="description" content="Description of the page less than 150 characters"&gt;
&lt;link rel="icon" type="image/x-icon" href="/favicon.ico"&gt;
&lt;link rel="icon" type="image/png" href="/favicon.png"&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap" rel="stylesheet"&gt;
&lt;link rel="stylesheet" href="00-styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!– Header –&gt;
&lt;header class="header" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;div class="header-container"&gt;
&lt;div class="header-logo"&gt;
&lt;a href="/"&gt;
&lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;nav class="navbar-menu"&gt;
&lt;ul class="nav"&gt;
&lt;li class="nav-item"&gt;
&lt;a href="/" class="nav-link"&gt;Home&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#services" class="nav-link"&gt;Services&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#works" class="nav-link"&gt;Works&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#about" class="nav-link"&gt;About&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#latest_news" class="nav-link"&gt;Latest news&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#testimonials" class="nav-link"&gt;Testimonials&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#contact" class="nav-link"&gt;Contact&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;!– Main –&gt;
&lt;main&gt;
&lt;!– Hero section –&gt;
&lt;header class="section-hero hero-article" data-section-theme="dark" style="background-image: url('images/pic-article-02.jpg')"&gt;
&lt;div class="container"&gt;
&lt;div class="section-body"&gt;
&lt;section class="section-inner"&gt;
&lt;span class="section-category"&gt;Digital Life&lt;/span&gt;
&lt;h1 class="section-title"&gt;Ut alios omittam, hunc appello, quem ille unum secutus est.&lt;/h1&gt;
&lt;/section&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;div class="main-article"&gt;
&lt;div class="container"&gt;
&lt;div class="post"&gt;
&lt;article class="post-content"&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed haec omittamus; &lt;b&gt;Hoc Hieronymus summum bonum esse dixit.&lt;/b&gt; Duo Reges: constructio interrete.&lt;/p&gt;
&lt;h2&gt;Prioris generis est docilitas, memoria&lt;/h2&gt;
&lt;ol&gt;
&lt;li&gt;Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;&lt;/li&gt;
&lt;li&gt;Quid enim de amicitia statueris utilitatis causa expetenda vides.&lt;/li&gt;
&lt;/ol&gt;
&lt;p&gt;Morbi pharetra congue ante ac tincidunt. Donec euismod eu mauris nec laoreet. Praesent id sodales ipsum. Aliquam erat volutpat. Ut porta sem eget libero faucibus, eget convallis nisi finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan euismod nunc quis viverra.&lt;/p&gt;
&lt;figure&gt;
&lt;img src="images/the-honest-company-j69c0Q650Hw-unsplash.jpg" alt="Glasses, baby converse shoes, black bag, wipper on a dresser with a open drawer" width="620" height="350"&gt;
&lt;figcaption class="img-caption"&gt;Pugnant Stoici cum Peripateticis. Prioris generis est docilitas&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;p&gt;Quare conare, quaeso. Dici enim nihil potest verius. Primum divisit ineleganter; Suam denique cuique naturam esse ad vivendum ducem.&lt;/p&gt;
&lt;blockquote cite="https://www.holbertonschool.com/"&gt;
&lt;p&gt;Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus.&lt;/p&gt;
&lt;/blockquote&gt;
&lt;p&gt;Omnia contraria, quos etiam insanos esse vultis. Tibi hoc incredibile, quod beatissimum.&lt;/p&gt;
&lt;h2&gt;Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus.&lt;/h2&gt;
&lt;p&gt;&lt;a href="http://loripsum.net/" target="_blank" rel="noopener"&gt;Apparet statim, quae sint officia, quae actiones.&lt;/a&gt; Quae in controversiam veniunt, de iis, si placet, disseramus.&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P.&lt;/li&gt;
&lt;li&gt;Quis est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis?&lt;/li&gt;
&lt;li&gt;Sed in rebus apertissimis nimium longi sumus.&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Atqui, inquam, Cato, si istud optinueris, traducas me ad te totum licebit. Nemo nostrum istius generis asotos iucunde putat vivere. Res enim se praeclare habebat, et quidem in utraque parte. Qui autem esse poteris, nisi te amor ipse ceperit? Ita fit cum gravior, tum etiam splendidior oratio. De vacuitate doloris eadem sententia erit. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.&lt;/p&gt;
&lt;/article&gt;
&lt;!– Aside section –&gt;
&lt;aside class="post-aside"&gt;
&lt;div class="post-meta"&gt;
&lt;ul class="post-meta-list row"&gt;
&lt;li class="post-meta-author"&gt;
&lt;strong&gt;Written by:&lt;/strong&gt;
&lt;a href="#" rel="author"&gt;William Attaway&lt;/a&gt;
&lt;/li&gt;
&lt;li class="post-meta-date"&gt;
&lt;strong&gt;Posted on:&lt;/strong&gt;
&lt;time datetime="2019-10"&gt;October 2019&lt;/time&gt;
&lt;/li&gt;
&lt;li class="post-meta-tag"&gt;
&lt;strong&gt;Tags:&lt;/strong&gt;
&lt;ul class="tag-list"&gt;
&lt;li&gt;
&lt;a href="#" rel="tag"&gt;Web Design&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="#" rel="tag"&gt;UX&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="post-share"&gt;
&lt;ul class="social nav"&gt;
&lt;li class="social-item nav-item"&gt;
&lt;a href="#" class="social-link"&gt;
&lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
&lt;title&gt;
Facebook icon
&lt;/title&gt;
&lt;path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/&gt;
&lt;/svg&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="social-item nav-item"&gt;
&lt;a href="#" class="social-link"&gt;
&lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
&lt;title&gt;
Twitter icon
&lt;/title&gt;
&lt;path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/&gt;
&lt;/svg&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/aside&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/main&gt;
&lt;!– Footer –&gt;
&lt;footer class="footer" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-1-2"&gt;
&lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
&lt;address class="footer-address"&gt;
234 Washington Street&lt;br&gt;
Urbana, Illinois
&lt;/address&gt;
&lt;/div&gt;
&lt;div class="col-1-2"&gt;
&lt;ul class="social nav"&gt;
&lt;li class="social-item nav-item"&gt;
&lt;a href="https://www.facebook.com/HolbertonSchool/" class="social-link"&gt;
&lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
&lt;title&gt;
Facebook icon
&lt;/title&gt;
&lt;path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/&gt;
&lt;/svg&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="social-item nav-item"&gt;
&lt;a href="https://twitter.com/holbertonschool" class="social-link"&gt;
&lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
&lt;title&gt;
Twitter icon
&lt;/title&gt;
&lt;path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/&gt;
&lt;/svg&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class="social-item nav-item"&gt;
&lt;a href="https://www.instagram.com/holbertonschool/" class="social-link"&gt;
&lt;svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"&gt;
&lt;title&gt;
Instagram icon
&lt;/title&gt;
&lt;path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/&gt;
&lt;/svg&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;hr&gt;
&lt;div class="row"&gt;
&lt;div class="col-1-2"&gt;
&lt;p class="footer-copyright"&gt;© 2020 Techium, made with ♥ by students at Holberton School.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="col-1-2"&gt;
&lt;ul class="footer-nav nav"&gt;
&lt;li class="footer-nav-item nav-item"&gt;
&lt;a href="#" class="footer-nav-link"&gt;Terms of use&lt;/a&gt;
&lt;/li&gt;
&lt;li class="footer-nav-item nav-item"&gt;
&lt;a href="#" class="footer-nav-link"&gt;Privacy Policy&lt;/a&gt;
&lt;/li&gt;
&lt;li class="footer-nav-item nav-item"&gt;
&lt;a href="#" class="footer-nav-link"&gt;Cookie Policy&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</textarea>

`00-styles.css`

**In your `01-article.html` file**
+ Sibling to the `&lt;div class="post"&gt;`, create a new `&lt;section&gt;` with the class `post-comments`
+ Inside the section create an `header`
+ In the `&lt;header&gt;` create a heading level 2 with class `section-title` and text: `Leave a comment`
+ under the level 2 heading create a paragraph with text: `All fields are required.`
+ Create a `form` siblings to the header
+ Action: `#`
+ Method: `post`

**In your `01-styles.css` file**

After the `Tag list` styles, create a new comment

```
/*** FORM ***/
/* Comment section
============================= */
```
+ Target `post-comments` class
+ Property: `width`, Value: `80%`
+ Property: `margin`, Value: `10rem 0 0 auto`
+ Property: `padding-left`, Value: `7rem`
+ Target the `section-title` class inside the `post-comments` class
+ Property: `font-variant`, Value: `small-caps`
+ Add a new comment section

```
/* Basic form
============================= */
```
+ Target all `form`
+ Property: `display`, Value: `flex`
+ Property: `flex-direction`, Value: `column`
+ Property: `padding`, Value: `1rem 0`
+ Property: `margin`, Value: `0`

**Final rendering**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/52dd25582638087db16c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=b49249a40c2c0524c60a0670264094ff2460ea92acb7033ad3fcac645439310e" alt="" style="">


## 1. more comment basic structure
<strong>From `01-article.html`, create `02-article.html`</strong>

**From `01-article.html`, create `02-article.html`**
+ In the `form` in the comment section
+ Create a first `fieldset` with a `legend` that has the text `Your personal information` and the class `visually-hidden`
+ In the fieldset create a first `div` with the classes `form-group` and `col-1-2`
+ Sibling to the first div, create a second `div` with the classes `form-group` and `col-1-2`
+ Sibling to the 2 divs create a third `div` with the classes `form-group` and `col-2-3`
+ Sibling to the first fieldset, create a second `fieldset` with a `legend` that has the text `Your comment` and the class `visually-hidden`
+ In the second fieldset create a first `div` with the classes `form-group` and `col-2-3`
+ Sibling to the first div create a second `div` with the classes `form-group` and `col-2-3`
+ Sibling to the 2 divs create a third `div` with the class `form-group`
+ In the fieldset create a first `div` with the classes `form-group` and `col-1-2`
+ Sibling to the first div, create a second `div` with the classes `form-group` and `col-1-2`
+ Sibling to the 2 divs create a third `div` with the classes `form-group` and `col-2-3`
+ In the second fieldset create a first `div` with the classes `form-group` and `col-2-3`
+ Sibling to the first div create a second `div` with the classes `form-group` and `col-2-3`
+ Sibling to the 2 divs create a third `div` with the class `form-group`

**From `01-styles.css`, create `02-styles.css`**
+ Target all `fieldset` and set the following rules
+ flex display
+ direction of flex is column
+ justify the content at `flex-start`
+ no border
+ `0 0 2rem` padding

**Final rendering** (same as previously because `&lt;legend&gt;` tags are hidden by default)

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5ebdce8002b7f85c33ea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=719503d31423fb6f355815b492476e097776b61773e491657d614cd3f52743f5" alt="" style="">


## 2. create labels and input container
<strong>From `02-article.html`, create `03-article.html` and in the form which is in the comment section:</strong>

**From `02-article.html`, create `03-article.html` and in the form which is in the comment section:**
+ In the first `fieldset`
+ In the first div (which has classes `form-group` and `col-1-2`)
+ Create a `label`
+ For: `your-first-name`
+ Text: `First Name`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-first-name`
+ Text: `First Name`
+ Create a `span` inside the div with the class `form-field-container`
+ In the second div (which has classes `form-group` and `col-1-2`)
+ Create a `label`
+ For: `your-last-name`
+ Text: `Last Name`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-last-name`
+ Text: `Last Name`
+ Create a `span` inside the div with the class `form-field-container`
+ In the third div (which has classes `form-group` and `col-2-3`)
+ Create a `label`
+ For: `your-email`
+ Text: `Email`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-email`
+ Text: `Email`
+ Create a `span` inside the div with the class `form-field-container`
+ Create a `label`
+ For: `your-first-name`
+ Text: `First Name`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-first-name`
+ Text: `First Name`
+ Create a `span` inside the div with the class `form-field-container`
+ Create a `label`
+ For: `your-last-name`
+ Text: `Last Name`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-last-name`
+ Text: `Last Name`
+ Create a `span` inside the div with the class `form-field-container`
+ Create a `label`
+ For: `your-email`
+ Text: `Email`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-email`
+ Text: `Email`
+ Create a `span` inside the div with the class `form-field-container`
+ In the second `fieldset`
+ In the first div (which has classes `form-group` and `col-2-3`)
+ Create a `label`
+ For: `your-title`
+ Text: `Title`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-title`
+ Text: `Title`
+ Create a `span` inside the div with the class `form-field-container`
+ In the second div (which has classes `form-group` and `col-2-3`)
+ Create a `label`
+ For: `your-comment`
+ Text: `Comment`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-comment`
+ Text: `Comment`
+ Create a `span` inside the div with the class `form-field-container`
+ In the third div (which has class `form-group`)
+ Create a `&lt;button&gt;` with the classes `button` and `button-primary`
+ Text: `Post my comment`
+ Text: `Post my comment`
+ Create a `label`
+ For: `your-title`
+ Text: `Title`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-title`
+ Text: `Title`
+ Create a `span` inside the div with the class `form-field-container`
+ Create a `label`
+ For: `your-comment`
+ Text: `Comment`
+ Sibling to the `label`, create a `&lt;div&gt;` with the class `form-field`
+ Create a `span` inside the div with the class `form-field-container`
+ For: `your-comment`
+ Text: `Comment`
+ Create a `span` inside the div with the class `form-field-container`
+ Create a `&lt;button&gt;` with the classes `button` and `button-primary`
+ Text: `Post my comment`
+ Text: `Post my comment`

**From `02-styles.css`, create `03-styles.css`:**
+ Target all `label`
+ cursor should be pointer
+ display as block element
+ don’t wrap white space
+ size of font should be `1.4rem`
+ set padding to `0 0 .5rem`

**Final rendering**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/810944bb8fd8f5482ca0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=8fff98880e008f0432ab01e69f5d53fbc4be6dd6542a7a97d7c2c987944e4d4c" alt="" style="">

**Final rendering with button in hover**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/04ceb82754349ba3c7b3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e14525cc6074a0e240c7db09be0b76d535933697d9160ac87d7b98af89d3ca0c" alt="" style="">


## 3. create the inputs
<strong>From `03-article.html`, create `04-article.html`:</strong>

**From `03-article.html`, create `04-article.html`:**
+ In the first `fieldset`
+ In the first span of `form-field-container` class, create an `input`
+ Type: `text`
+ Name: `your-first-name`
+ Id: `your-first-name`
+ Placeholder: `e.g. Mike`
+ Pattern: `[A-Za-zÀ-ž\s]{3,}` (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the `input` valid)
+ Max length: `35`
+ Autocomplete is on
+ Access Key: `f`
+ Required: true
+ In the second span of `form-field-container` class, create an `input`
+ Type: `text`
+ Name: `your-last-name`
+ Id: `your-last-name`
+ Placeholder: `e.g. Smith`
+ Pattern: `[A-Za-zÀ-ž\s]{3,}` (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the `input` valid)
+ Max length: `40`
+ Autocomplete is on
+ Access Key: `l`
+ Required: true
+ In the third span of `form-field-container` class, create an `input`
+ Type: `email`
+ Name: `your-email`
+ Id: `your-email`
+ Placeholder: `e.g. youremail@gmail.com`
+ Pattern: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$` (we want to ensure the correct format of the email)
+ Max length: `55`
+ Autocomplete is on
+ Access Key: `e`
+ Required: true
+ Type: `text`
+ Name: `your-first-name`
+ Id: `your-first-name`
+ Placeholder: `e.g. Mike`
+ Pattern: `[A-Za-zÀ-ž\s]{3,}` (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the `input` valid)
+ Max length: `35`
+ Autocomplete is on
+ Access Key: `f`
+ Required: true
+ Type: `text`
+ Name: `your-last-name`
+ Id: `your-last-name`
+ Placeholder: `e.g. Smith`
+ Pattern: `[A-Za-zÀ-ž\s]{3,}` (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the `input` valid)
+ Max length: `40`
+ Autocomplete is on
+ Access Key: `l`
+ Required: true
+ Type: `email`
+ Name: `your-email`
+ Id: `your-email`
+ Placeholder: `e.g. youremail@gmail.com`
+ Pattern: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$` (we want to ensure the correct format of the email)
+ Max length: `55`
+ Autocomplete is on
+ Access Key: `e`
+ Required: true
+ In the second `fieldset`
+ In the first `span` of `form-field-container` class, create an `input`
+ Type: `text`
+ Name: `your-title`
+ Id: `your-title`
+ Placeholder: `e.g. I loved that article`
+ Pattern: `[A-Za-zÀ-ž\s]{4,}` (we want to allow all characters with and without accents and spaces. We want to have at least 4 characters to make the `input` valid)
+ Max length: `75`
+ Autocomplete is on
+ Access Key: `t`
+ Required: true
+ In the second `span` of `form-field-container` class, create a `textarea`
+ Name: `your-comment`
+ Id: `your-comment`
+ Placeholder: `Write your comment here`
+ Minimum length: 10
+ Access Key: `c`
+ Required: true
+ Columns: 30
+ Rows: 6
+ Type: `text`
+ Name: `your-title`
+ Id: `your-title`
+ Placeholder: `e.g. I loved that article`
+ Pattern: `[A-Za-zÀ-ž\s]{4,}` (we want to allow all characters with and without accents and spaces. We want to have at least 4 characters to make the `input` valid)
+ Max length: `75`
+ Autocomplete is on
+ Access Key: `t`
+ Required: true
+ Name: `your-comment`
+ Id: `your-comment`
+ Placeholder: `Write your comment here`
+ Minimum length: 10
+ Access Key: `c`
+ Required: true
+ Columns: 30
+ Rows: 6

**From `03-styles.css`, create `04-styles.css`, after the `label` selector:**
+ Target in one selector all `input` type `text`, all `input` type `email`, all `textarea`
+ Property: `position`, Value: `relative`
+ Property: `width`, Value: `100%`
+ Property: `padding`, Value: `1.2rem`
+ Property: `line-height`, Value: `1`
+ Property: `border`, Value: `.1rem solid` point to the variable `color-black`
+ Property: `background-color`, Value: point to the variable `color-white`
+ Property: `box-shadow`, Value: `none`
+ Property: `outline`, Value: `0`
+ Target in one selector all `input` type `text`, all `input` type `email`
+ Property: `padding-right`, Value: `3rem`
+ Target in one selector the focus state of all `input` type `text`, the focus state of all `input` type `email`, the focus state of all `textarea`
+ Property: `border`, Value: `.1rem solid` point to the variable `color-grey`
+ Property: `background-color`, Value: point to the `color-light-grey`
+ Now target the `placeholder`, it can be tricky so I’m gone give you the code to add to your stylesheet:

```
::placeholder {
font-style: italic;
font-size: var(--font-size-small);
}
```

**Final rendering**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/147954ddba159a99d0b2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=34e3e8feb1065ee5f6f01ca9f63b615ba66421345fa01a0f681344c289c19654" alt="" style="">

**Final rendering when “Last name” field is focus**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/d8fbcb53ffafe396c0ed.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=fa7059a6abeb54e747cb5cb173544df3f57a0de6a0f9bd8dc2eef451ba100e86" alt="" style="">


## 4. add help messages
<strong>From `04-article.html`, create `05-article.html`:</strong>

**From `04-article.html`, create `05-article.html`:**
+ In each span with `form-field-container` class that contains an `input`
+ After the input add an empty `&lt;i&gt;` with the class `form-field-icon`
+ In the first `fieldset`
+ Inside the first div with `form-field` class, right after the closing `span` tag, add a paragraph
+ Class: `form-help`
+ Text: `First name should be at least 3 characters and only contains letters`
+ Inside the second div with `form-field` class, right after the closing `span`tag, add a paragraph
+ Class: `form-help`
+ Text: `Last name should be at least 3 characters and only contains letters`
+ Nothing is added in the third `form-field`
+ Class: `form-help`
+ Text: `First name should be at least 3 characters and only contains letters`
+ Class: `form-help`
+ Text: `Last name should be at least 3 characters and only contains letters`
+ In the second `fieldset`
+ Inside the first div with `form-field` class, right after the closing `span` tag, add a paragraph
+ Class: `form-help`
+ Text: `Title should be at least 4 characters and only contains letters`
+ Inside the second div with `form-field` class, right after the closing `span` tag, add a paragraph
+ Class: `form-help`
+ Text: `Comment should be at least 10 characters`
+ Class: `form-help`
+ Text: `Title should be at least 4 characters and only contains letters`
+ Class: `form-help`
+ Text: `Comment should be at least 10 characters`

**From `04-styles.css`, create `05-styles.css`:**
+ <p>Add a new separation</p><pre>`/* Form group============================= */`</pre>
+ <p>Target `form-group` class</p>
+ Property: `padding`, Value: `1rem`
+ Property: `margin`, Value: `0`
+ Property: `background-color`, Value: point to the variable `color-white`
+ <p>Target the `focus-within` state of `form-group` class</p>
+ Property: `background-color`, Value: point to the `color-light-grey` (if it was not done in the previous task)
+ Property: `transition`, Value: `.3s`
+ <p>Add a new separation</p><pre>`/* Form field============================= */`</pre>
+ <p>Target `form-field-container` class</p>
+ Property: `position`, Value: `relative`
+ <p>Target `form-field-icon` class</p>
+ Property: `font-style`, Value: `normal`
+ <p>Add a new separation</p><pre>`/* Form help============================= */`</pre>
+ <p>Target `form-help` class inside `form-group` class</p>
+ Property: `margin`, Value: `0`
+ Property: `line-height`, Value: `1.3`
+ Property: `letter-spacing`, Value: `.019rem`
+ Property: `color`, Value: point to the variable `color-dark-grey`
+ Property: `font-size`, Value: point to the variable `font-size-small`
+ Property: `max-height`, Value: `0`
+ Property: `transition`, Value: `.3s`
+ Property: `overflow`, Value: `hidden`
+ <p>Target `form-help` class when `form-group` class has a `focus-within` state</p>
+ Property: `max-height`, Value: `20rem`
+ Property: `margin`, Value: `.4rem 0 0`

**Final rendering when “Last name” is focused**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/7d03c7365d5974440255.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=0fc090980a4ad9198b913f98c7f0c541052105a52d7131a47bc59a07923f8709" alt="" style="">


## 5. add pure HTML / CSS error handling
<strong>From `05-styles.css`, create `06-styles.css`:</strong>

**From `05-styles.css`, create `06-styles.css`:**
+ In the variable section, after the `color-dark-grey` variable
+ Create a custom property
+ Name: `color-red`, Value: `#cd3e65`
+ Create a custom property
+ Name: `color-green`, Value: `#08805b`
+ Name: `color-red`, Value: `#cd3e65`
+ Name: `color-green`, Value: `#08805b`
+ After the `text-color` variable
+ Create a custom property
+ Name: `valid-color`, Value: point to the`color-green` variable
+ Create a custom property
+ Name: `error-color`, Value: point to the `color-red` variable
+ Name: `valid-color`, Value: point to the`color-green` variable
+ Name: `error-color`, Value: point to the `color-red` variable
+ At the end of the CSS file
+ Add a new separation

```
/* Form error handling
============================= */
```
+ Add this code to your file. The code is given to you with comments to help you to understand, because it’s a little bit advanced but really powerful when correctly understood.

```
/* The following code is used to place the icon in the after pseudo element. Because after and before are not possible in an input, we need to use a span that will be positioned on the right of our input. */

input:not(:placeholder-shown) ~ .form-field-icon::after {
height: 100%;
right: 0;
pointer-events: none;
position: absolute;
top: 0;
width: 1.3em;
}

/* Because inputs are invalid by default, we need to be careful and show the icon when we are not in focus and when when the input is not empty (placeholder-shown). Careful with this one because it is not supported everywhere. */

input:required:invalid:not(:focus):not(:placeholder-shown) ~ .form-field-icon::after {
content: '✘';
color: var(--error-color);
}

input:required:valid ~ .form-field-icon::after {
content: '✔';
color: var(--valid-color);
}

/* We want to hide the helper text when we are not in focus. The tilte allows us to select a sibling element in CSS */

input:required:valid ~ .form-help {
max-height: 0;
}

/* Showing a border in a different color is good but not enough. For accessibility purposes, we added an icon when the input is valid or invalid to have a visual distinction that is not only color based.*/

input:required:invalid:not(:focus):not(:placeholder-shown),
textarea:invalid:not(:focus):not(:placeholder-shown) {
border: 0.1rem solid var(--error-color);
}

input:required:valid:not(:placeholder-shown),
textarea:valid:not(:placeholder-shown) {
border: 0.1rem solid var(--valid-color);
}
```
+ In the `/* Base` section, after the hover state of the `button`
+ Target the `button-primary` class
+ Property: `color`, Value: point to the variable `color-white`
+ Property: `background`, Value: point to the variable `color-primary`
+ Target the hover state of the `button-primary` class
+ Property: `color`, Value: point to the variable `color-primary`
+ Property: `background`, Value: point to the variable `color-white`
+ Property: `color`, Value: point to the variable `color-white`
+ Property: `background`, Value: point to the variable `color-primary`
+ Property: `color`, Value: point to the variable `color-primary`
+ Property: `background`, Value: point to the variable `color-white`

**Final rendering of validation layout**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aa6033da67ab8d3e787.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=bd4f074adcf0c62c5d6c25db4fcd0a04b4ebb20a00021f2c16be7d9350daa554" alt="" style="">


## 6. add the search form
<strong>From `06-article.html`, create `07-article.html`:</strong>

**From `06-article.html`, create `07-article.html`:**
+ In the navigation, add a new `&lt;li&gt;` at the end. Also add the `nav-item` class on the `li`.
+ Create a new `&lt;form&gt;` inside the `li`.
+ Action attr: `#`
+ Method attr: `post`
+ Class: `form-search`
+ Create a new `input`, type `search`
+ Name attr: `q` (it’s common to name the search q (=query))
+ Id attr: `search-input`
+ Placeholder: `Search...`
+ `aria-label="Search through site content"` (we will see in the accessibility module what is that attribute)
+ Create a `button` with the class `search-button`
+ Copy and paste the following code inside your button
+ Name attr: `q` (it’s common to name the search q (=query))
+ Id attr: `search-input`
+ Placeholder: `Search...`
+ `aria-label="Search through site content"` (we will see in the accessibility module what is that attribute)
+ Copy and paste the following code inside your button
+ Action attr: `#`
+ Method attr: `post`
+ Class: `form-search`
+ Create a new `input`, type `search`
+ Name attr: `q` (it’s common to name the search q (=query))
+ Id attr: `search-input`
+ Placeholder: `Search...`
+ `aria-label="Search through site content"` (we will see in the accessibility module what is that attribute)
+ Create a `button` with the class `search-button`
+ Copy and paste the following code inside your button
+ Name attr: `q` (it’s common to name the search q (=query))
+ Id attr: `search-input`
+ Placeholder: `Search...`
+ `aria-label="Search through site content"` (we will see in the accessibility module what is that attribute)
+ Copy and paste the following code inside your button

```
<svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
<title>
Search icon
</title>
<path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
</svg>
```

**From `06-styles.css`, create `07-styles.css`:**
+ <p>At the end of the file, create a new comment separation</p><pre>`/*** SEARCH FORM ***/`</pre>
+ <p>Target the `form-search` class</p>
+ Property: `display`, Value: `block`
+ Property: `padding`, Value: `.5rem 0`
+ Property: `position`, Value: `relative`
+ <p>Target the `search-button` class inside the `form-search` class</p>
+ Property: `display`, Value: `inline-block`
+ Property: `background`, Value: `transparent`
+ Property: `border`, Value: `0`
+ Property: `margin` Value: `0`
+ Property: `padding`, Value: `0`
+ <p>Target the `search-icon` class inside the `search-button` class</p>
+ Property: `fill`, Value: point to the variable `color-white`
+ Property: `width`, Value: `1.5rem`
+ Property: `height`, Value: `1.5rem`
+ <p>Target the `input` type `search` inside the `form-search` class</p>
+ Property: `display`, Value: `inline-block`
+ Property: `color`, Value: point to the variable `color-white`
+ Property: `padding-right`, Value: `2rem`
+ Property: `height`, Value: `3rem`
+ Property: `border`, Value: `0`
+ Property: `outline`, Value: `none`
+ Property: `position`, Value: `absolute`
+ Property: `width`, Value: `0`
+ Property: `right`, Value: `0`
+ Property: `background`, Value: `none`
+ Property: `cursor`, Value: `pointer`
+ Property: `z-index`, Value: `3`
+ Property: `transition`, Value: `width .4s cubic-bezier(0, 0.795, 0, 1)`
+ <p>Target the `focus` state of `input` type `search` inside the `form-search` class</p>
+ Property: `position`, Value: `relative`
+ Property: `width`, Value: `15rem`
+ Property: `z-index`, Value: `1`
+ Property: `border-bottom`, Value: `.1rem solid var(--color-grey)`
+ Property: `padding`, Value: `0`
+ Property: `cursor`, Value: `text`
+ Property: `margin`, Value: `0 1rem`

**Final rendering of the search button**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/18dbfc6da16fb3c9992b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=c69bbe7d2558c0bf550edb3682aab9593a2ba71576c6b85fa12af24f1d270698" alt="" style="">

**Final rendering of the search focus**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/4e17e62ca13e7e635d36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=5e829f1c54ddce108707bf8404c54702901171f3672a2029749547ae18c11b8a" alt="" style="">

**Final rendering of the search focus with text**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/ae899c60b1e4b1f97bcc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210807%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210807T150709Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=2740136e42781caf4ee17d949b1833a621b8f79380a25e76b1dbe94b042598da" alt="" style="">
