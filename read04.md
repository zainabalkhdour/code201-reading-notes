# links markup

**(amazing tool)**

_so we can make links by `<a>  ----- clickable text /hyper text----</a>`_

_and clickable text that text between the opening and closing `<a>`tag  **(link text)**_

1.	_`<a>` link to other sites and the href is the full wed address for that site (absolute url )_

***Url : uniform resource locator same of the web address***

2.	_`<a>` link to other pages found on the website  you just need to put the path of file.html with out the web address( relative url)_

**relative url :** _These are like a shorthand version of absolute URLs because you do not need to specify the domain name._

3.**Email link:** `< a href= “emailto: ---email--- “>`


4.	**opening links in a new window :** 
_`< a href= “url/web address “ target=”_blank”>` resones for doing this is the developer hope the consumer come back to his page. (but you should avoid that )_
5.	  **link to same page subject :**  

 * _first identify the points you want to link the buttons with them  by using id attributed (don’t start the value name with numbers or symbols )_

* _by using`<a href=”#the name of value of id attribute ”>`_ 
6.	**linking to a specific part of another page :** _same technique above but need to have  a page with id attribute that identify specific parts of pages._ 

# layout css

_how to control your all elements layout  ?_
**Positioning Elements**

*Block-level boxes starts with a new line while inline boxes don't*

**perant element : box contaning other boxes**

*position property:normal flow, relative positioning, and absolute*
*positioning*

1. **Normal flow :**_Every block element appears on a new line._
_`position: static; `_
2. **Relative Positioning:** _This moves an element from the position it would be in normalflow by shifting it to` position:relative ->> left/right/top/bottom.`_
3. **Absolute positioning :** _This positions the element in relation to its containing element,`position:absolute ->> values  (top or bottom and left or right)`_
4. **Fixed Positioning :** _This is a form of absolute positioning that_ _positions the element in relation to the browser window, as opposed to_ _the containing element. (fixed in window and absolute )_
_`position:fixed ->> top\bottom\left\right\padding\margin\border\etc`_
5. **Floating Elements(block elementt) :** _Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box._

***z-index(stacking context) property allows you to control which box appears on top.When you use relative, fixed, or absolute positioning, boxes can overlap.(just add this into other position values) ***

**floating elements**

**float :** *to change the position to far-left/far-right and affecting around elements caused them to move.*

**class=clear** 
_this related to float and it prevent other elments from  touch the left or righthand sides of a box. `(left/right/both/none)`_

**creating column with float**

_showing content in columns by using block elements and properities `(width/float/margin)`_

**secreen sizes**

**secreen resolution : dots per inch** 

*page size :create pages of around 960-1000 pixels wide it will be seen by all screen sizes*

*fixed secreen : page dose not change accourding to the diffrences in secreens vistors size*

*lequid screen : change by page size changing secreens vistors size.*

**Layout Grids**
 _to position items on a page(sliecing pages to alot of boxes)_

 **you can aslo import styles by `@import` inside the css file or by a new link style markup**

 # Functions, Methods, and Objects

 **function**

**WHAT IS A FUNCTION?** _Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements)_
```
function function name  ((){
    excute this
} ()); by tthis we can call the function IMMEDIATELY 
```
**Calling :**_ask to perform a task_
**Parameters :**_pieces of info passd to a function_
**Return value :** _expected outpot from function, return_ 

**So we can call the fuction  by putting the the function name  at the endAnd you can put values and variables in the paranthices ,values** **called argument,variables called paramenters**

`Functions can return more than one value using an array. `

*Also we can save the function result of arguments  or parameter at a new var*

**local variable :**_live inside the funtion just ,the machine remember them only when run function contain it._

**global variable:** _live out side and can be use anywhere and use more memory_

**a function expression/ anonymous function :**_when we store the funtion in variabel_

**FUNCTION DECLARATION :** _is the function that not saved into variable and  we can call it later._


**Reasons for Pair Programming**
+ more efficiency
+ get help easily 
+ Learning from fellow students
+ inhance Social skills
+ help with Job interview readiness test
+ understanding of Work environment 



