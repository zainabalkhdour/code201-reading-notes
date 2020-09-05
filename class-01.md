# introduction

+ Understanding HTML and CSS
+ can help anyone who works with the web
+ designers can create more attractive and usable sites
+ website editors can create better content
+ marketers can communicate with their audience more effectively
+ managers can commission better sites and get the best out of their teams.


**web servers:** *Web servers are special computers that are constantly connected to the Internet, and are optimized to send web pages out to people who request them(work as host for websites) it maybe owned by pesone or company and just work as web hosting
devices ? it’s the laptop/personal computer /tablet/mobile*

**Screen readers:** *are programs that read out the contents of a computer screen to a user (They are commonly used by people with visual impairments)*

**Html (hypertext markup language):** *concerned with building content and webpage structure.*

# how websites are created

**All websites use HTML and CSS& often a few more technologies into the mix.**

`Sooooooo >>> how we reach to website located anywhere in the world ??`

+	websites hosted by serves and these servers can be located anywhere in the world so to reach them 
+	your web browser is connected with domain name system server (DNS) that transport you to DNS located in the other country .
+	the other DNS send you to the hosted server of the webserver.

#In order to write a  webpage you must previously know how to structure the document

*How pages use structure  ? the webpsges try to scan the physical forms of anything we se to an digital form can be showed on screens
How to describes the structure of pages? (__By html__)*  



# Html structure 

**composed from elements which is a character that live in angle bracket and The characters in the brackets indicate the tag's purpose..
each element contain :**

`<Opening tag attribute name=” attribute value” > ------ text--------- </closing tap>`

*The HyperText part refers to the fact that HTML allows you to create links that allow visitors to move from one* 
*page to another quickly and easily. A markup language allows you to annotate text, and these annotations provide additional meaning to the contents of a document.(design and clearify)* 



***attributes tell us more about elements and s provide additional information about the contents of an element . They appear on the opening tag of the element and are made up of two parts: a name and a value, separated by an equals sign.***
***The attribute name indicates what kind of extra information you are supplying about the element's content. It should be written in lowercase.***
***The value is the information or setting for the attribute. It should be placed in double quotes. Different attributes can have different values.***
***The majority of attributes can only be used on certain elements, although a few attributes can appear on any element.***
***Most attribute values are either pre-defined or follow a stipulated format.***


# extra markup 

**Doctypes :** *Because there have been several versions of HTML, each web page should begin with a DOCTYPE declaration to tell a browser which version of HTML the page is using*

**Comments**
`<!—comment -->`
 
**Global attribute :**  *attribute can be used in all tags.*

**Id attribute:**  *to unique the tag and the value of it should begin _/letter not number or symbols  (just once)*

**Class attribute :**  *can used same class for more than one tag*

**Block elements :**  *elements start a newline when use them `<p><h><ol><ul><li>`*

**Inline elments :**  *those element that countinue in line and don’t start new one when using their tags.* `<a><em><b><img>`

# grouping text & elements in a block

**we can do that by div :** 
*The <div> element allows you to group a set of elements together in one block-level box.*

**Span :** *its for made a block through <p> to specific line or word and then style it .*

**Iframes :**
*An iframe is like a little window that has been cut into your page — and in that window you can see another page. The term iframe is an abbreviation of inline frame.*

**Scrolling:** *The scrolling attribute will not be supported in HTML5, It can take one of three values: yes (to show scrollbars), no (to hide scrollbars) and auto (to show them only if needed).*
```
<iframe
 src="https://en.wikipedia.org/wiki/Google" 
 frameborder="0"
width="600px"
 height="600px"
scrolling="no " 
seamless >

</iframe> 
```

**seamless attribute In HTML5, a new attribute called seamless can be applied to an iframe where scrollbars are not desired. And have no value ,some of people may put value .**

# information about your page

*by `<meta>` markup : The `<meta>` element lives inside the <head> element and contains information about that web page. It’s invisible to users of the page*
*fulfills a number of purposes such as telling search engines about your page, who created it, and whether or not it is time sensitive*
*The `<meta>` element is an empty element, It uses attributes to carry the information.*
```
<head>
    <title>web</title>
    <meta name="discription"
    content="archieve">
    <meta name="keywords"
    content="archieve,machine">
    <meta robots="nofollow">
    <meta http-equiv="author"
    content="zainabalkdour">
    <meta http-equiv="pragma"
    content="no-cach">
    <meta http-equiv="expires"
    content="Fri, 04 Apr 2021 23:59:59 GMT">
</head>
```
 
# Escape character or entity references

*are some characters that are used in and reserved by HTML code*

# Html5 layout

**traditional html layouts**

*For a long time, web page authors used elements to group together related elements on the page.*

**New Html5 Layout Elements**

*a new set of elements that allow you to divide up the parts of a page. The names of these elements indicate the kind of content you will find in them.*

**For example :**
+ Header
+ Footer
+ Navigation
+ Articles
+ Asides
+ Sections
+ Headings groups
+ Figures and figure caption
+ Division

**Linking Around Block-Level Elements**

*place an <a> element around a block level element his allows you to turn an entire block into a link.*

***Helping Older Browsers Understand that the new block elements by  css  and select all them as selector and choose to display them as block. Or by JavaScript to identify the html5 in the older browser versions***

# What is the project plan we follow to develop your own site

**When you decide to create a new web site you should look at these concerns:**

1. what will attract consumer to the web site and put expectation of what they want to read.
2. How to organize information so that visitors can find what they are looking for.
3. decide the way you will coordinate content .
4. you should draw web site wireframes (header\main\footer\margins).
5. ask someone who work in internal design to give your ideas about the .presentation especially visual hierarchy /prioritizing content/ grouping similarities.

# How you are going to satisfy you consumer need and wants?
***`By present the previous concerns in the proper manner which consumer prefer lets repeat them:`***
* target audience and there needs beside wants.
*site map 
* Visual hierarchy
* show your content with different size & color & style in order to facilitate skimming process
* simplify searching for information through grouping similarities

# Deciding the colorful shape of the front end that client use and interact with, so your visitor get the idea of your page fast and easily  


# javascript 

**Java script** 
*Is a software help us to make webpages more interactive and access content and modify it and for sure to work with java.s you must know the role of programming using it so it hep us to make reaction on website with our clinet.
Any thing needs to deals with clicks and taking actions of certain events we do it by java.s like games /elctronic surves/ etc*


**A script**  *is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a statement. Statements should end with a semicolon.*



**Basics :**

+ **OBJECTS (THINGS):** *each physical thing in the world can be represented as an object*

**Each object can have its own:** 
+ **Properties or characteristic:** *each property has a name and value like (color :red or size: big)*
+ **Events:** *interaction with object can change the values of property ( book teckit)*
+ **Methods:** *how people interact with an object (what the method that followed in interactions) process with a lot of procedures in order to do one task ( in order to book a teckit we should follow the procedure of booking)*

`Ex: we make an model of house which is object`

***After we prepare the 3 part of object  put it togather  to give us the model of object***

`We can call our website a object`


***THE DOCUMENT OBJECT REPRESENTS AN HTML PAGE*** 

**LINKING TO A JAVASCRIPT FILE FROM AN HTML PAGE**

1.	*use the HTML <script> element to tell the browser it is coming across a script. Its sre attribute tells people where the JavaScript file is stored.*
2.	*Use the HTML <script> element inside the body and and we write th following commad* 	
3.	*Comment : use this to write a comment // (we use  comments to explain what your code does. They help make your code easier to read and understand. This can help you and others who read your code)*
4.	*MULTI-LINE COMMENTS : To write a comment that stretches over more than one line, you use a multi-line comment, starting with the `/* characters and ending with the */` characters.*
5.	*Variables :a place that we store data in it for temporary time in order to use it, and it can easily changed when the script run ; that the reason of name variable*


***JAVASCRIPT RUNS WHERE IT IS FOUND IN THE HTML***

**DATA TYPES:** *numbers, strings, and true or false values known as Booleans, arrays, objects, undefined, and null.*

