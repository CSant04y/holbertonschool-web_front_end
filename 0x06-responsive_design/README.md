# 0x06. Responsive design


<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/4fe027a0c298339cb4cb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140607Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=de5899f8c27b13aaee3ffc2e69b74e3e6b213d2b1d04f29f351cc25aa00b46af" alt="" style="">

## Resources
**Read or watch**:
+ [The building blocks of responsive design - Progressive web apps | MDN](https://intranet.hbtn.io/rltoken/xunPO8dNZy0mJpq8vbUMRA)
+ [A pragmatic guide to designing and building responsive web applications | developerlife.com](https://intranet.hbtn.io/rltoken/rs5zCrDpRaU6LD13-rG2yg)
+ [Understanding the difference between mobile-first, adaptive and responsive design](https://intranet.hbtn.io/rltoken/7W08yfp6vBGFlgoqZZc7eQ)
+ [LukeW | Mobile First](https://intranet.hbtn.io/rltoken/AMTqHMY4OeGET3nOdRH2uQ)
+ [Media Queries | A collection of inspirational websites using media queries and responsive web design](https://intranet.hbtn.io/rltoken/bk52ihWug_pe0QUghl99aQ)
+ [Responsive Design Newsletter](https://intranet.hbtn.io/rltoken/1k39DhswkQfzN7L4N7pO7w)
## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/RplDYdCj67vyRRy4JFInDQ), **without the help of Google**:
+ Mobile-first design
+ Media-queries
+ Sizes to use for responsive web design
+ How to make a website responsive
+ The differences between responsive and adaptive design
+ CSS units that are used to make elements flexible
## Requirements
+ Allowed editors: `vi`, `vim`, `emacs`
+ A `README.md` at the root of the project directory is mandatory
+ HTML and CSS have been rendered on Chrome 78 or more.
## Wireframe of the Techium project - mobile version
<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140607Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=29ed599c5b011de11eb635cc8d82932ffa05002cdab0f8b8711680931135cae5" alt="" style="">

## Starter files
### 00-index.html
<textarea readonly="" rows="21" cols="81">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
&lt;title&gt;Homepage - Techium&lt;/title&gt;
&lt;meta name="description" content="Description of the page less than 150 characters"&gt;
&lt;link rel="icon" type="image/png" href="images/favicon.jpg"&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&amp;display=swap" rel="stylesheet"&gt;
&lt;link rel='stylesheet' href='00-styles.css'&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!– Header –&gt;
&lt;header class="header" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;div class="header-container"&gt;
&lt;div class="header-logo"&gt;
&lt;a href="#"&gt;
&lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;nav class="navbar-menu"&gt;
&lt;ul class="nav"&gt;
&lt;li class="nav-item"&gt;
&lt;a href="#" class="nav-link"&gt;Home&lt;/a&gt;
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
&lt;li class="nav-item"&gt;
&lt;form action="#" method="post" class="form-search"&gt;
&lt;input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content"&gt;
&lt;button class="search-button"&gt;
&lt;svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon"&gt;
&lt;title&gt;
Search icon
&lt;/title&gt;
&lt;path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"&gt;&lt;/path&gt;
&lt;/svg&gt;
&lt;/button&gt;
&lt;/form&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;!– Main –&gt;
&lt;main&gt;
&lt;!– Hero section –&gt;
&lt;section class="section-hero hero-homepage" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;div class="section-body"&gt;
&lt;section class="section-inner"&gt;
&lt;h2 class="section-title"&gt;We help you building your brand&lt;/h2&gt;
&lt;a href="#" class="button"&gt;Get Started&lt;/a&gt;
&lt;/section&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– Services section –&gt;
&lt;section id="services" class="section section-services"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;Services&lt;/h2&gt;
&lt;p class="section-tagline"&gt;We work with you&lt;/p&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;ul class="row"&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Design &amp; Concept&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Digital Strategy&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Content Strategy&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="row"&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;UX Design&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;div class="card-services"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Social Media&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– Works section –&gt;
&lt;section id="works" class="section section-works" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;Works&lt;/h2&gt;
&lt;p class="section-tagline"&gt;Take a look at our portfolio&lt;/p&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;ul class="row"&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-work"&gt;
&lt;div class="card-outer"&gt;
&lt;div class="card-image"&gt;
&lt;img src="images/pic-work-01.jpg" alt=""&gt;
&lt;/div&gt;
&lt;div class="card-inner"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Interior Design&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-work"&gt;
&lt;div class="card-outer"&gt;
&lt;div class="card-image"&gt;
&lt;img src="images/pic-work-02.jpg" alt=""&gt;
&lt;/div&gt;
&lt;div class="card-inner"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Web Development&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-work"&gt;
&lt;div class="card-outer"&gt;
&lt;div class="card-image"&gt;
&lt;img src="images/pic-work-03.jpg" alt=""&gt;
&lt;/div&gt;
&lt;div class="card-inner"&gt;
&lt;h3 class="card-title"&gt;&lt;a href="#"&gt;Personal Development&lt;/a&gt;&lt;/h3&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– About Us section –&gt;
&lt;section id="about" class="section section-about-us"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;About Us&lt;/h2&gt;
&lt;p class="section-tagline"&gt;Everything about us&lt;/p&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;div class="row"&gt;
&lt;div class="col-1-2"&gt;
&lt;img src="images/pic-about-01.jpg" alt="" width="460" height="460"&gt;
&lt;/div&gt;
&lt;div class="col-1-2"&gt;
&lt;h3&gt;Who are we&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
&lt;h3&gt;Our culture&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
&lt;h3&gt;How we work&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="section-footer"&gt;
&lt;a href="#" class="button"&gt;Learn more about us&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– Latest news section –&gt;
&lt;section id="latest_news" class="section section-latest-news"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;Latest News&lt;/h2&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;ul class="row"&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-blog"&gt;
&lt;div&gt;
&lt;img src="images/pic-article-01.jpg" alt="" width="305" height="305"&gt;
&lt;/div&gt;
&lt;p class="card-category"&gt;Career&lt;/p&gt;
&lt;h3&gt;&lt;a href="#"&gt;Hoc loco tenere se Triarius non potuit.&lt;/a&gt;&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
&lt;small&gt;By Kelly D.&lt;/small&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-blog"&gt;
&lt;div&gt;
&lt;img src="images/pic-article-02.jpg" alt="" width="305" height="305"&gt;
&lt;/div&gt;
&lt;p class="card-category"&gt;Digital Life&lt;/p&gt;
&lt;h3&gt;&lt;a href="#"&gt;Ut alios omittam, hunc appello, quem ille unum secutus est.&lt;/a&gt;&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?&lt;/p&gt;
&lt;small&gt;By William A.&lt;/small&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-blog"&gt;
&lt;div&gt;
&lt;img src="images/pic-article-03.jpg" alt="" width="305" height="305"&gt;
&lt;/div&gt;
&lt;p class="card-category"&gt;Social&lt;/p&gt;
&lt;h3&gt;&lt;a href="#"&gt;Bestiarum vero nullum iudicium puto.&lt;/a&gt;&lt;/h3&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.&lt;/p&gt;
&lt;small&gt;By Frances J.&lt;/small&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– Testimonials section –&gt;
&lt;section id="testimonial" class="section section-testimonial"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;Testimonials&lt;/h2&gt;
&lt;p class="section-tagline"&gt;We are more than a digital company&lt;/p&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;ul class="row"&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-testimonial"&gt;
&lt;img src="images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100" class="card-avatar"&gt;
&lt;blockquote class="card-quote"&gt;
&lt;p&gt;I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!
&lt;cite&gt;Yuri Y.&lt;/cite&gt;
&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-testimonial"&gt;
&lt;img src="images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100" class="card-avatar"&gt;
&lt;blockquote class="card-quote"&gt;
&lt;p&gt;Thank you so much for your help. Techium company is awesome!
&lt;cite&gt;Dorrie S.&lt;/cite&gt;
&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;li class="col-1-3"&gt;
&lt;article class="card-testimonial"&gt;
&lt;img src="images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100" class="card-avatar"&gt;
&lt;blockquote class="card-quote"&gt;
&lt;p&gt;I love your system. Definitely worth the investment. I’d be lost without Techium company.
&lt;cite&gt;Sven H.&lt;/cite&gt;
&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/article&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;!– Contact section –&gt;
&lt;section id="contact" class="section section-contact"&gt;
&lt;div class="container"&gt;
&lt;header class="section-header"&gt;
&lt;h2 class="section-title"&gt;Contact&lt;/h2&gt;
&lt;p class="section-tagline"&gt;We’d love to hear from you!&lt;/p&gt;
&lt;/header&gt;
&lt;div class="section-body"&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?&lt;/p&gt;
&lt;/div&gt;
&lt;div class="section-footer"&gt;
&lt;a href="#" class="button"&gt;Get in touch&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;/main&gt;
&lt;!– Footer –&gt;
&lt;footer class="footer" data-section-theme="dark"&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-1-2"&gt;
&lt;img src="images/logo-white.png" alt="Techium logo" width="160" height="40"&gt;
&lt;address class="footer-address"&gt;
972 Mission St&lt;br&gt;
San Francisco, CA&lt;br&gt;
94103
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
### 00-styles.css
### Images
Use the images that you downloaded in the [CSS Advanced](https://intranet.hbtn.io/rltoken/AYfVYkk0DQzhG_Lkrj013g) project and place them into an `images` directory at the root of the project.
Or some basics assets from this [archive.zip](https://holbertonintranet.s3.amazonaws.com/uploads/misc/2020/2/2621c6fd51a58e1d1d5c.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140607Z&amp;X-Amz-Expires=345600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=4f7d6f169c9b4b82cb7c22d4597cef0555c2453939b49b3fdde6c86e4865e6de)


## 0. Fix the hero banner
Because we did some changes with the `article.html` page in the previous project, our hero banner background is no more visible. Let’s fix it!

Because we did some changes with the `article.html` page in the previous project, our hero banner background is no more visible. Let’s fix it!

But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.

In your `01-styles.css` file
+ Inside the `hero-homepage` class selector, update some values:
+ Property: `background-position`, Value: `65% 8rem`
+ Property: `background-size`, Value: `90rem auto`
+ Inside the selector that targets `section-inner` class inside `section-hero` class
+ Update the `min-height` to `35vh`

**Final rendering of the Hero section should look something like this**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140607Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=77d236e99adec89cfb1ae0dbc143cc734630666d6100af54767f01435a1d6ee7" alt="" style="">


## 1. Make the container flexible
Using the previous file as the base, in your `02-styles.css` file update the `.container` selector by changing `width` to `max-width`

Using the previous file as the base, in your `02-styles.css` file update the `.container` selector by changing `width` to `max-width`

If you resize your browser, you should see that the content is resizing.

**Wide screen:**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5356d9d9b1de3ef692a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e0e5901ee751c61babc6c09924d1d939cdde5712905ea020db638f27a3fb6f33" alt="" style="">

**Narrow screen:**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aeb51d5b4c9586ea05a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ad21082b9989d7e54e105bafeb2dd5eca6a54438d24fc9197689f8a939260b0c" alt="" style="">


## 2. Fix layout issues
Whatever the browser you use, it’s a good idea from now on, to <a href="/rltoken/5lz32vRWqILHFjF32lyuxA" title="toggle the device view" target="_blank">toggle the device view</a>.

Whatever the browser you use, it’s a good idea from now on, to [toggle the device view](https://intranet.hbtn.io/rltoken/5lz32vRWqILHFjF32lyuxA).

In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.
+ For extra large devices (no media queries)
+ For desktop / large devices (`max-width: 992px`)
+ For tablet / medium styles (`max-width: 767px`)
+ For mobile styles (`max-width: 480px`)

**We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.**

**In your `02-1-styles.css` file:**
+ <p>inside the `/* Helpers` section target all images inside the main section</p>
+ Property: `width`, Value: `100%`
+ Property: `height`, Value: `auto`
+ <p>inside the `/* Section Latest news` section, add a new media query (`max-width: 767px`)</p>
+ Target the `row` inside `section-latest-news`
+ Property: `flex-direction`, Value: `column`
+ Property: `flex-direction`, Value: `column`
+ <p>inside the `/* Grid` section, at the end, add a new media query (`max-width: 767px`)</p>
+ First, redefine the variable `section-padding` and give that value: `5rem 1.5rem`. And redefine the variable `section-body-padding` with `2rem 0 0`
+ Target the `ul.row` and the `row` class
+ Property: `flex-direction`, Value: `column`
+ Property: `margin`, Value: `0`
+ Target all the classes that started with `col-`
+ Property: `margin`, Value: `0 0 3rem 0`
+ Target the `col-1-3` and `col-1-2` classes
+ Property: `width`, Value: `100%`
+ Property: `flex-direction`, Value: `column`
+ Property: `margin`, Value: `0`
+ Property: `margin`, Value: `0 0 3rem 0`
+ Property: `width`, Value: `100%`

The `navbar` is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.
+ inside the `/* Navbar` section, at the end, add a new media query (`max-width: 767px`)
+ Target the `navbar-menu` class
+ Property: `display`, Value: `none`
+ Property: `display`, Value: `none`

You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!

**Rendering on wide screen**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/ec686cf75a8788a04bd5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6ef75264bbc50974529670800240603a2a430fbb58c894e75b9f3ad5473c0df8" alt="" style="">

**Rendering on screen with max-width: 767px**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/741a7a68af4e92b5c286.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=b31d39adc61ce14ab172d6f99b8d065871b1a368f1e503ac2baf23cece173b9b" alt="" style="">

**Rendering on screen with max-width: 767px, you can see the navbar is hidden**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/3ee548024a868f4ce695.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1c540bff40f76d6502cc653657d933aeacdb96a951e3e28ccf6146e650eea1e8" alt="" style="">


## 3. Generate images with responsive breakpoints
Go to <a href="/rltoken/W5EW7u35nwzX2qH3CIvf7Q" title="Responsive Breakpoints" target="_blank">Responsive Breakpoints</a>

Go to [Responsive Breakpoints](https://intranet.hbtn.io/rltoken/W5EW7u35nwzX2qH3CIvf7Q)

In Breakpoints generation settings:
+ Resolution: From `380` to `1200`
+ Size step: `25`
+ Maximum images: `3`
+ Art-direction: `Desktops`
+ Upload your images one at a time:
+ `pic-about-01.jpg`
+ `pic-article-01.jpg`
+ `pic-article-02.jpg`
+ `pic-article-03.jpg`
+ Copy the markup for the `&lt;img&gt;` tags and replace your current `&lt;img&gt;` tags with it.
+ Download the images and place them into the `images` directory

Here’s an example on how to add different resolutions of the same image

```
<img
sizes="(max-width: 3000px) 40vw, 1200px"
srcset="
about-us_icoxoo_c_scale,w_380.jpg 380w,
about-us_icoxoo_c_scale,w_853.jpg 853w,
about-us_icoxoo_c_scale,w_1200.jpg 1200w"
src="about-us_icoxoo_c_scale,w_1200.jpg"
alt="">
```


## 4. Create the mobile icon and hide the menu
We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.

We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.

Using the previous files as the base for this project

**Changes to the HTML**

Just before the `&lt;nav class="navbar-menu"&gt;`
+ <p>Create an input (which will be not visible)</p>
+ Class: `menu-btn`
+ Type: `checkbox`
+ Id: `menu-btn`
+ <p>Create a label</p>
+ Class: `menu-icon`
+ For: `menu-btn`
+ In the label create an empty `span` with the `navicon` class.

**Changes to the CSS**

Inside the `/* Navbar` section, and inside the `767px` media query
+ <p>Create the `root` global selector. We want to override a CSS variable:</p>
+ Variable name: `nav-item-margin`, Value: `0`
+ <p>In the selector for the `navbar-menu` class</p>
+ Property: `flex`, Value: `1`
+ <p>Target the `nav` class in `header` class</p>
+ Property: `flex-direction`, Value: `column` (for the element of the menu be below each other)
+ Property: `overflow`, Value: `hidden`
+ Property: `max-height`, Value: `0` (the display property can’t be animated, so we use the height that can be animated)
+ Property: `transition`, Value: `max-height .2s ease-out`

**Rendering on screen with max-width: 767px, the check box is the input**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/17e4ace4fe8c91201e0a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=38a81d0401dd5fb0850746810380ab753666dd21d169db147cd7355ab33717c9" alt="" style="">


## 5. Hamburger!
Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.

Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.

Using the previous files as the base for this task:
+ <p>Target the `menu-icon` class inside the `header` class</p>
+ Property: `cursor`, Value: `pointer`
+ Property: `padding`, Value: `2.5rem`
+ Property: `position`, Value: `relative`
+ Property: `user-select`, Value: `none`
+ <p>Target the `navicon` class inside the`menu-icon` class which is inside the `header` class</p>
+ Property: `background`, Value: point to the `color-white` variable
+ Property: `display`, Value: `block`
+ Property: `width`, Value: `2rem`
+ Property: `height`, Value: `.2rem`
+ Property: `position`, Value: `relative`
+ Property: `transition`, Value: `background .2s ease-out`
+ <p>Target the `before` and `after` pseudo elements of the `navicon` class inside the `menu-icon` class which is inside the `header` class</p>
+ Property: `content`, Value: empty string
+ Property: `display`, Value: `block`
+ Property: `width`, Value: `100%`
+ Property: `height`, Value: `100%`
+ Property: `position`, Value: `absolute`
+ Property: `background`, Value: point to the `color-white` variable
+ Property: `transition`, Value: `all .2s ease-out`
+ <p>Target only the `before` pseudo element of the `navicon` class inside the `menu-icon` class which is inside the `header` class</p>
+ Property: `top`, Value: `.7rem`
+ <p>Target only the `after` pseudo element of the `navicon` class inside the `menu-icon` class which is inside the `header` class</p>
+ Property: `top`, Value: `-.7rem`

**Rendering of the hamburger on max-width: 767px**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/87f845e172312626e0fc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=b8eba997a125dba7f2c0347d15668455e0d44daa33069959029e890a2a62d5c8" alt="" style="">


## 6. Add the behavior based on menu-btn state
<strong>in your CSS file:</strong>

**in your CSS file:**
+ Create a new comment section `/* menu btn */`
+ Target `menu-btn` class inside `header` class
+ Property: `display`, Value: `none`
+ Target `navbar-menu` class when the `menu-btn` class element is checked
+ Property: `display`, Value: `block`
+ <p>Target `nav` class inside `navbar-menu` class when the `menu-btn` class element is checked</p>
+ Property: `max-height`, Value: `100%`
+ Property: `overflow`, Value: `inherit`
+ <p>At the end of the `/* Section HERO` section, create a new media query for `max-width: 767px`</p>
+ Target the `section-hero` class
+ Property: `margin`, Value: `-0.1rem 0`
+ Target the `hero-homepage` class
+ Property: `background-position`, Value: `85% 0`
+ Target the `section-body` class inside `section-hero` class
+ Property: `padding`, Value: `2rem`
+ Property: `margin`, Value: `-0.1rem 0`
+ Property: `background-position`, Value: `85% 0`
+ Property: `padding`, Value: `2rem`

Going back to the `/* menu btn */` section
+ Target the `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class
+ Property: `background`, Value: `transparent`
+ Target the before state of `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class element
+ Property: `transform`, Value: `rotate(-45deg)`
+ Target the after state of `navicon` class inside `menu-icon` class sibling to the `menu-btn` when it is checked and inside `header` class element
+ Property: `transform`, Value: `rotate(45deg)`
+ <p>Target the before and after states of `navicon` class when inside `menu-icon` class sibling to the `menu-btn` class when it is checked and inside `header` class</p>
+ Property: `top`, Value: `0`
+ <p>Create a new media query for `max-width: 767px`</p>
+ Target the root and redefine the `header-padding` variable with `2rem 0 0`
+ Target `header` class
+ Property: `background`, Value: point to the `color-black` variable
+ Target the `header-container` class
+ Property: `flex-wrap`, Value: `wrap`
+ Property: `padding`, Value: `0 1.5rem`
+ Target the `menu-icon` class inside the `header` class
+ Property: `display`, Value: `block`
+ Property: `background`, Value: point to the `color-black` variable
+ Property: `flex-wrap`, Value: `wrap`
+ Property: `padding`, Value: `0 1.5rem`
+ Property: `display`, Value: `block`
+ <p>Create a new media query for `max-width: 480px`</p>
+ Target the `header-logo` class
+ Property: `flex-basis`, Value: `70%`
+ Property: `flex-basis`, Value: `70%`
+ <p>Create a new media query with `min-width: 481px` and `max-width: 767px`</p>
+ Target the `header-logo` class
+ Property: `flex-basis`, Value: `79%`
+ Property: `flex-basis`, Value: `79%`
+ <p>Find the `.header .menu-icon` selector and add `display: none;` to hide the menu icon when we are on desktop mode.</p>

**Rendering on screen with max-width: 767px, when the input is unchecked the menu is not displayed**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/b9f67a5f3bdfdbd4cd88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=dbbda07047eefd061cb7845c8973c3f723ca0b6c9d40abb7a365224657c590f9" alt="" style="">

**Rendering on screen with max-width: 767 px, when input is checked the menu block is displayed**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/fe0ae0bfb739a19ae933.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d69ef02a262ab7416c2980e9909db6c91d45af0446b7d8c2d4dc57880e2eeed7" alt="" style="">

**Rendering on desktop screen, menu icon is not visible**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/aa52c972d075f360f8bc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6cd3450658ded249d568ee9a040fce412db80aa188f108248f36d9ab0fbf3b88" alt="" style="">


## 7. Make the font size responsive
We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.

We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.

In your CSS file at the end of the `/* Base` section
+ Create a new media query for `max-width: 480px`
+ Target the `html` element
+ Property: `font-size`, Value: `57%`
+ Property: `font-size`, Value: `57%`
+ Create a new media query for `min-width: 481px` and `max-width: 767px`
+ Target the `html` element
+ Property: `font-size`, Value `60%`
+ Property: `font-size`, Value `60%`

This is a simple way to achieve responsive typography. More complex options can also be used to have a more granular control over the font sizes.


## 8. Improve the "Works" section
in `08-styles.css`, at the end of the `/* Card WORK`

in `08-styles.css`, at the end of the `/* Card WORK`
+ Create a new media query of `max-width: 767px`
+ Target the `card-inner` class inside the `card-work` class
+ Property: variable called `text-color`, Value: point to `color-white` variable
+ Property: `position`, Value: `relative`
+ Target the `card-title` class inside the `card-work` class
+ Property: `opacity`, Value: `1`
+ Target all `a` tags inside `.card-work .card-title` class:
+ Property: `padding`, Value: `2rem 1rem 0 1rem`
+ Property: variable called `text-color`, Value: point to `color-white` variable
+ Property: `position`, Value: `relative`
+ Property: `opacity`, Value: `1`
+ Property: `padding`, Value: `2rem 1rem 0 1rem`

**Rendering on screen of max-width: 767px**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/bd8d10a18201a8796172.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=50c8b3a195e6d9aaac640aef07e5742555799d823d391f93516eea37f173f0a6" alt="" style="">


## 9. Improve the "Footer" section
in `09-styles.css`, in the `/* Footer` section

in `09-styles.css`, in the `/* Footer` section
+ Create a new media query of `max-width: 767px`.
+ Create the `root` global selector. We want to override a CSS variable:
+ Variable name: `footer-padding`, Value: `5rem 2rem 1rem`
+ Target `.social.nav` inside the `footer` class and the `footer-nav` class inside the `footer` class
+ Property: `text-align`, Value: `center`
+ Target the adjacent `li`to the `li` inside the `.social.nav` and the adjacent `li` to the `li` inside `.footer-nav` (to easily add a left padding starting on the second `li`)
+ Property: `padding-left`, Value:`2rem`
+ Variable name: `footer-padding`, Value: `5rem 2rem 1rem`
+ Property: `text-align`, Value: `center`
+ Property: `padding-left`, Value:`2rem`

**Rendering on screen of max-width: 767px**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/a12e272db34a9c4e47e9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6321a1a65825dc514174617e62ce0a1fab976b21100d7fe851d569331b2d2961" alt="" style="">


## 10. Fix the top header background
In `10-index.html`, in the `body` tag, add the class `article-page`

In `10-index.html`, in the `body` tag, add the class `article-page`

In `10-styles.css`, in the `/* Section HERO` section, just before the media query:
+ Target `section-hero` class inside `article-page` class
+ Property: `margin-top`, Value: `-8.5rem`
+ Property: `padding-top`, Value: `5rem`

**Rendering of `header` and `section-hero` class elements**

<img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/7a38d40512c0c6edb211.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20210813%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210813T140608Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=a89b586cb0c6e9c173a82b19beea066ec244e1be22b0c1c7d6316f1e2c8801eb" alt="" style="">