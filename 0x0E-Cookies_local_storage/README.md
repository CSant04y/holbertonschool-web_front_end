# 0x0E. Cookies & local storage
### What Are Cookies?
* Cookies are data that is stored in small text file on your computer.
	* Cookies were created to account for the closed connection between the sever and the client after being served the page to the browser. This was a response to trying to remember information about the user.
### Understand how to create cookies using Javascript?
* Property: **document.cookie**
	* This can be used to **Create**, **Read**, and **Delete**.
* Creation of cookie in JavaScript:
```
/*This uses the document.cookie property*/
document.cookie = "username=John Doe";
```

### Learn how to set specific settings for the cookie
* You can create specific settings within a cookie by specifying more settings after the key=value pairs.
### Learn how to read cookies with Javascript
* To Read form a cookie you simply set a variable to **document.cookie** which returns a string with key/value pairs.
```
let x = document.cookie;
```

### How to use js-cookie for easy cookie manipulation
* To change a JS cookie all you have to do is use it the same way you created it. 
```
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

```
### How to use the browser web storage
* You can also store large amount of data locally on the Users Browser which never gets transfered.
* **window.localStorage** - stores data with no expiration date
* **window.sessionStorage** - stores data for one session (data is lost when the browser tab is closed)
```
// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```