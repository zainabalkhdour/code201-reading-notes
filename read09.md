# Forms markup 

 **we use it to collect consumer data**

_form : printed document that contains spaces for you to fill in information._

1. _adding text : passwords/text input(oneline only )/text area (multi line)_
2. _making choice : radio buttons(must select)/ checkboxes(can selector unselect)/dropdown boxes_

3. _submitting forms: Image buttons/ Submit buttons_
4. _uploading files_

** How to add forms?**
```
<forms   action=” url for where the info will go after submitting  “ method=”get /post if don’t used method by defult it will use get  (decide the way how the info will sent to the previous url)“

<p> get for search boxes and post for other forms types </p>
```

**How to add input text form ?**
```
 by < form action=”url” method =”post”>
<p> username <input type=”text” name= “username” size=”num” maxlength=”num” </p>

</form>
```
**For password forms ? **
**to get the required secure  the server needs to be set up to communicate with users' browsers using Secure Sockets Layer (SSL)**

   ` <p>password <input type="password" name="password" size="12" maxlength="20"></p>`

*For text area?*

`<p>What did you think of this gig?</p>  <textarea name="comments" cols="20" rows="4">Enter   your comments...</textarea> the text will be sent with the text  so find way to omit `

**Checkbox : by**

`<p> <input type=”checkbox” name=”--service-“ value=”itunes” checked=”checked” />itunes </p>`

**Droplist box /select box**
 
_It contains two or more `<option>` elements._
_Name indicate the name of options/you can select a specified item to be shown when the page load._
```
<select name="devices">   
   <option value="ipod">iPod</option>
   <option value="radio" selected=”radio” >Radio</option>   
   <option value="computer">Computer</option>
</select>
```
**For multiple choices you can do this :**
```
    <select name="falvour" size="4" multiple="multiple" >
        <option value="stawberry">stawberry</option>
        <option value="blueberry"selected="blueberry" >blueberry</option>
        <option value="lemon">lemon</option>
        <option value="lime">lime</option>
        <option value="orange" selected="orange" >orange</option>
    </select>

```


**Size shows how many choices the list enclose** 
*Hint that on a PC they should hold down the control key while selecting multiple options*

**How to upload files ?**
```
<input type=”file” name=” type of file you want to upload” /> <br />
<input type=”submit” value=” upload” />
```
**How to create submit buttons ?**	

_The value attribute is used to control the text that appears on a button._
```
<p> email<input type=”text” name=”email”/> </p>
< input type=”submit” name=”subscribe” value=”subscribe” />
```




**How to use an image as a submit button ?**
 

`<button src=”url” alt=”add” width=”” height=””> text inside button </button>`



**How to add hidden forms beside the buttons to give you more info about consumer like the date of submission ?**

`By < input type=”hidden” name=”related name of what you do” value=”the appearing name”/>`

**How to label the forms don’t belong to a paragraph  and don’t have text appear related to it ?**

_You should first give the form you want to lable an id And then use_ 
`<label for=” id”> the label you want </label>`

_The id attribute help to expand the area of clicking  so it’s helpful with radio box and checkbox so it’s easier to use. And help with other forms._


**Grouping forms elements**

*Fieldset /legend : The `<legend>` element can come directly after the opening  which helps identify the purpose of that group of form controls.*
```
<fieldset>
    <legend> contact information</legend>
    <label for="">email:<br />
    <input type="text" name="email"> </label><br />
    <label for="">mobile:<br />
    <input type="text" name="mobile"></label><br />
    <label for="">telephone:<br />
    <input type="text" name="telephone" ></label><br />
</fieldset>
```

**For date input : use the attribute type = date**

**For email input : use the attribute type = email**

**For url input : use the attribute type = url**

**For search input: use the attribute type = search** 

**For defulte text you may use attribute placeholder**

#styling forms

1.	_list-style-type for ul (none disc circle square) &ol(decimal/ decimal-leading-zero/ lower-alpha/ upper-alpha/lower and upper roman)_
2.	_list-style-image :_ `ul { list-style-image: url("images/star.png");} li { margin: 10px 0px 0px 0px;}`
3.	_list-style-position: properity is inside and outside._
4. _list-style: it allows you to express the markers' style, image and position properties in any order._
```
ul { list-style: inside circle; width: 300px;} 
li { margin: 10px 0px 0px 0px;}
```
5.	_table properities:width/padding/text-transform/letter-spacing/font-size/border/backgouroung color/:hover/ empty-cells/border-spacing/border-collapse_
**empty-cells: If you have empty cells in your table, then you can use the empty-cells property to specify whether or not their borders should be shown. And inherit for nested parts**
6.	_styling forms: font-size/color/:hover/:focus/border/border-radious/background-image/background-color/text-shadow_
7.	_Styling Fieldsets & Legends:width/color/background-clolor/border/ border-radious/padding/_
8.	_Text-align :to align the for form/buttons/input_
9.	_Cursor: auto/ crosshair /default /pointer /move /text /wait /help/ `url("cursor.gif");`_
10.	_Web Developer Toolbar: contain Outlines/ Structure/ CSS styles_


# events

we use them inside the dom called events, use them inside js called scripts

traditional format 
element .onevent= functionName ; 

**USING DOM EVENT HANDLERS** 

1. If you use a named function when the event fires on your chosen DOM node, write that function first.
2. the DOM element node is stored in a variable.
3. but the action ypu want the handler do.

**EVENT LISTENERS**

a more recent approach to handling events.
They can deal with more than one function at a time
but they are not supported in older browsers. 

element .addEventlistener('event', functionName [, Boolean]) ;

same using of events but you will choose the method addEventlistene


**USING PARAMETERS WITH EVENT HANDLERS & LISTENERS** 

Because you cannot have parentheses after the
function names in event handlers or listeners,
passing arguments requires a workaround. 

**SUPPORTING OLDER VERSIONS OF IE**

IES-8 had a different event model and did not support
addEventL i stener() but you can provide fallback code
to make event listeners work with older versions of IE. 

`events may flow bublling(outside) like <a>  or capturing(inside) like <li>/<ul>/<body>/<html>`


**THE EVENT OBJECT**
_When an event occurs, the event object tells_
_you information about the event, and the_
_element it happened upon._ 

**EVENT DELEGATION**
_Creating event listeners for a lot of elements_
_can slow down a page, but event flow allows_
_you to listen for an event on a parent element._

**CHANGING DEFAULT BEHAVIOR**

_The event object has methods that change:_
_the default behavior of an element and how the element's ancestors respond to _the event._ 

1. preventDefault ()
Some events, such as clicking on links and submitting forms, take the user to another page. 

2. stopPropagation()
Once you have handled an event using one element, you may want to stop that event from bubbling up to its ancestor elements 

3. USING BOTH METHODS
You will sometimes see the
 situations that are in a function: return false; It prevents the default behavior of the element, and prevents the event from bubbling up or capturing further.

 

