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
