# Table markup 

***A table represents information in a grid format raw columns .***

_Each block in the grid is referred to as a table cell_

1.	_Creating table by :`<table>`_


2.	_Creating rows by : `<tr>` table raw_
3.	_Creating headings by :`<th>` table headings either for  rows/columns You can use the scope attribute on the `<th>` element to indicate whether it is a heading for a column or a row(Browsers usually display the content of a `<th>` element in bold and in the middle of the cell)_


4.	_Creating cells/blocks by :`<td>` table data_ 
5.	_How to merge cells together or stretch entries across more than one cell or columns(horizontally) : by the attribute colspan= “ value of merged cells `“ and for merging (vertically) by the attribute rowspan=” value of merged cells “`_


6.	_When we have a long table we should distinguish the table head /body/foot  by `<thead>/<tbody>/<tfoot>_
`

7.	_We can add the width attribute inside the tables markups , and manipulate background color & border by the attribute bgcolor  & border attribute= the value of border._

**The structure of an object(notation literally):**
```
Var nameOfObject={
Property key1 name : value 1,
Property key2name : value 2,
Property key3 name : value3,

Function name : function(){
      Excute something;
}
};
```
**The structure of an object(dot notation/member operator/dot):**

```
Var x= objectName.properity name;
Var x= objectName.properity function name;
Just for property you can access them by :
Var x= objectName.[‘properity name’];
```

# DOM TREE IS A MODEL OF A WEB PAGE

**browser loads a web page, it creates a model of that page composed of :**
1.	_**THE DOCUMENT NODE** (whole page and found at the top pf dom tree)_
_`>>>>` piece of text in the HTML is represented by its own DOM node._
2.	**ELEMENT NODES :** _HTML elements `< Each node is an object with methods and properties.>`_
3.	**ATTRIBUTE NODES:** _HTML attribute_
4.	**TEXT NODES:** _HTML that allow us to write a text (child inside the text is not a child for it but to the one the text represent achild for)_

**WORKING WITH THE DOM TREE**

_Accessing and updating the DOM tree involves two steps:_ 

1. _Locate the node that represents the element you want to work with._ 
2. _Use its text content, child elements, and attributes._

**How to select node (dom queries):**
1.	_get ElementByld ()_
2.	_querySelector ()_
3.	_parentNode/( previoussibling / nextsibling)/ (firstchild / lastchild)_
4.	_**select multiple nodes:** getElementsByClassName()/getElementsByTagName()/querySelectorAll()_

**how to access a text-node:**

1.	_select text-node (one of the ways above)_
2.	_Use the firstchild property to get the text node_
3.	_Use nodeValue :This property lets you access or update contents of a text node._
4.	_innerHTML: One property allows access to child elements and text content_
5.	_textContent: related to text_
6.	_add /remove nodes by : create Element() /createTextNode() /appendchild () / removechild ()_

**how to access  attribute-node:**

1.	_className /id : Lets you get or update the value of the cl ass and id attributes._
2.	_hasAttribute():checks if an attribute exists_
3.	_getAttribute():gets attribute value_
4.	_setAttri bute():updates the value._
5.	_removeAttribute():removes an attribute_

**When a DOM method can return more than one element, it returns a Nodelist**

**Nodelist:  is a collection of element nodes and type of object called a collection. Each node is given an index number (a number that starts at zero, just like an array)**

_When a DOM query returns a Nodelist, you may want to:_

1.	_Select one element from the NodeList._ 
2.	_Loop through each item in the Nodelist and perform the same statements on each of the element nodes._

_a Nodelist has properties and methods, notably:_

1.	*The length property tells you how many items are in the Nodelist.*
2.	*The item() method returns a specific node from the Nodelist when you tell it the index number*

**static Nodelist : not updated to reflect the changes made by the script.**

_DOM queries that all return a Nodelist:_
1.	_getElementsByTagName_
2.	_getElementsByClassNam_
3.	_querySelectorAll_

_loop of nodelist: repating an action for inter node list_

_WHITESPACE NODES: some browsers add a text node whenever they come across whitespace between elements_















