# 0x0D. jQuery advanced
# Resources
**Read or watch:**
*  [jQuery CDN](https://intranet.hbtn.io/rltoken/6xUdG6WLcA4BVPp-0V2tHg) 
*  [jQuery API Documentation](https://intranet.hbtn.io/rltoken/EjK8s2oJzo6lMlK99wITJw) 
*  [Json server](https://intranet.hbtn.io/rltoken/lcjmc3fPYeTm47QmbnRs-Q) 

# Learning Objectives
### Learn how to load jQuery from a CDN in a page
* What is a CDN?
	* A CDN is a way for you to not have to keep a download of **jQuery** I or a folder within your website.
* To Use you simply place it  between **<head></head>** tags with a script. 
****
```
<!--Head script in html document -->
<head>
    <script src="files/jquery-3.2.1.min.js"></script>
</head>
```
****
### Learn the different ways to create DOM elements with jQuery
* What is the ([DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction))? Also, how does one add to it with **jQuery**?
	* The **DOM** is a data representation of objects that compromise the structure and content of a webpage.
* To add to jQuery you can use one of several [Methods](https://www.w3schools.com/jquery/jquery_dom_add.asp)
* **append()** - Inserts content at the end of the selected elements
* **prepend()** - Inserts content at the beginning of the selected elements
* **after()** - Inserts content after the selected elements
* **before()** - Inserts content before the selected elements
********
```
/*Prepending and appending to elements*/

$("p").append("Some appended text.");
$("p").prepend("Some prepended text.");

/*After and Before*/

$("img").after("Some text after");
$("img").before("Some text before");

```
****
### Learn how to modify elements?
* you can modify elements **.replaceWith()** method to replace elements on screen.

