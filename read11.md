# Imges

1. _img resize with class in img tag :_
```
img.large { width: 500px; height: 500px;}
 img.medium { width: 250px; height: 250px;} 
img.small { width: 100px; height: 100px;}
```
2. *img align through tags and classes by using float:*
```
img.align-left { float: left; margin-right: 10px;} 
img.align-right { float: right; margin-left: 10px;}
 img.medium { width: 250px; height: 250px;}
```
3. *img center using text align center and margin left and right  also transform to display block >>>through classes:*
```
img.align-center { display: block; margin: 0px auto;}
 img.medium { width: 250px; height: 250px;}
```
4. *background-image :*
```
 background-image: url("images/pattern.gif");}
```
5. *background-repeat: repeat-x/repeat-y/no-repeate*

6. *The background-attachment property specifies whether a background image should stay in one position or move as the user scrolls up and down the page.(fixd/scroll)*

7. _background-position: no-repeat to work with : left top /left center/ left bottom/ center top /_
_center center/ center bottom /right top /right center /right bottom._
```
body { background-image: url("images/tulip.gif");
 background-repeat: no-repeat;
 background-position: 50% 50%;}
```
**note: If you only specify one value, the second value will default to center**

8. *shorthand*

**Background**

1. *background-color*
2. *background-image*
3. *background-repeat*
4. *background-attachment* 
5. *background-position*
```
body { background: #ffffff url("images/tulip.gif") no-repeat top right, anther one;}
```
9. *rollover: a link or button that changes to a second style when a user moves their mouse over it (known as a rollover) and a third style when they click on it*.
```
a.button
 { height: 36px; background-image: url("images/button-sprite.jpg"); 
text-indent: -9999px;
 display: inline-block;} 
a#add-to-basket
 { width: 174px; background-position: 0px 0px;}
a#add-to-basket:hover 
{ background-position: 0px -40px;}
a#add-to-basket:active 
{ background-position: 0px -80px;}
```
**Note: When a single image is used for several different parts of an interface, it is known as a sprite.**
**To reduce the number of images your browser has to load, you can create image sprites**

10. *background-image:gradiants*
```
#gradient
 { /* fallback color */ 
background-color: #66cccc;
 /* fallback image */ 
background-image: url(images/fallback-image.png);
 /* Firefox 3.6+ */ 
background-image: -moz-linear-gradient(#336666, #66cccc);
```
11. *Contrast of background images*

# Page information

1. *Search engine optimization (or SEO) is the practice of trying to help your site appear nearer the top of search engine results *

+	*which terms people are likely to enter into a search: There are seven essential places where you want your keywords to appear. Ensuring that any images have appropriate text in the value of their alt attribute also helps search engines understand the content of images.*

+	*consider how many sites link to you: They are particularly interested in sites whose content is related to yours. Search engines also look at the words between the opening tag and closing tag in the link.*

+	*SEO is often split into two areas: on-page techniques and off-page techniques.*

2. **places for eso on-page**
+ *Page Title*
+ *URL / Web Address*
+ *Headings*
+ *Text*
+ *Link Text*
+ *Image Alt Text*
+ *Page Descriptions*

3.**How to Identify Keywords and Phrases:**
 + *Brainstorm*
 + *Organize*
 + *Research*
 + *Compare*
 + *Refine*
 + *Map*
