# List markup 

***There are 3 types of lists :***
+ *__ordered lists:__are lists where each item in the list is numbered. For example, the list might be a set of steps for a recipe that must be performed in order(Sometimes you may see a type attribute used with the `<ol>` element to specify the type of numbering (numbers, letters, roman numerals and so on). `<ol>`*


+ *__un ordered-lists__ are lists that begin with a bullet point (rather than characters that indicate order).`<ul>`*

+ *__Definition lists :__ are made up of a set of terms along with the definitions for each of those terms.* 

`<dl>`
     `<dt> for terms</dt>`
      `<dd> for definition of terms</dd>`
`</dl>`


 **nested Lists:** *to but list inside list* 


# css for boxes


**All boxes have dimensions : height and width**

1.	`<height>` *any parameter could take `(px/ems/%)`*
2.	`<width>` *any parameter could take `(px/ems/%)`*

*See the % it’s ab percent of the box contain the box we work on it.*

3.	**Property min height & max height :** *it limit the photo size when the screen is narrow or wide to prevent it form over growing or shrinking.*
4.	**Property overflow:** *help the browser when the text inside the box is larger than the box , the parameters are : scroll/hidden (hide the extra content)*
* .Hiding the overflow on such boxes helps prevent items overlapping on the page.
5.	*Every box has padding, border, and margins*  
6.	**Property border :** *values are width style color ;*
7.	**Property border width :** *top right bottom left /there is default choices like thin medium thick*
8.	**Property border style :** *values dotted/dashed/double/solid/groove/ridge/inset/outset/none*
* _and you can style each part of border alone_
9.	**Property border color :** *you can style each part of border alone,.*
*border color : top right bottom left*
10.	**Paddind:** *is the space between content and anther element when we edit it (betwwnt the content and border). Padding percentage of window size. You can* 
`padding :top right bottom left/if the width changed put a padding`
11.	`margins:top right bottom left/helps to locate boxes` 
12.	*grouping boxes by property display inline/block*
        *inline-block/none*
13.	**visibility property :** *values hidden/ visible , important if* 
        *you have section still in developing process.*
14.	**Property border image :** *url then where to cut the image*      
        *in order to make the box corner and what to do with* 
        *straight you may round/repeat/stretch*
15.	**Property box shadow :** *Horizontal offset Vertical offset*
        *Blur distance Spread of shadow;*
16.	**Round the box corner :** `border radius : 
        topright/bottomright/bottomleft/topleft`

# switch and loops

**Switch statement**

*A conditional statement that contain a switch value to run and also it has a default value to run if there’s no match from the cases which are the probabilities plus the break to stop running if the match found*

```Var name=xxx;
Var msg ;
Switch (name) {
Case 1: msg=’hello’;
Break;
Case 2: msg=’hi’;
Break;
Default:
Msg= ‘halla’;
Break;}
```

**type coercion:** _converting data type in javacripts and because the changing they say it’s weak typing language SO THE CHANGINING MAY LEAD TO A BUG IN YOUR CODES ._

***due to type coercion every type of data in js. Could be false/true.***

**unary operator returns a result from one operand so you get true or false from the operand of expression.**

**And `=== /!==` has less unexpected values comparing with` ==/!=`**

_logical operators are short circuit values may return with anther value rather than true/false because it may give us the result stop the revolve or it may be not a Boolean value(truthy/falsy /values._



# Loops

***Check if the condition returns true ,a code block will run and repeate running util we have fales ,to make loops there are three main condition:***

+ **For** :*if you need to run something for certain numbers of times `{ for( var i=0;i<10;i++){ document.write(i); }` so it’s contain inlization and condition and update*

+ **While** : *use it if the irritation time unknown and the condition located at the top of loop*.
+ **while do** : *like the while loop but the condition located at the bottom of loop and this is the structure of it.*
```
 do {
   statement(s);
} while( condition );
```
# reivsion of arrays

**ARRAYS** _An array is a special type of variable. It doesn't just store one value; it stores a list of values.Any name that have more than on value_ 

*to create an arrary  create a var XXX= give it alot of values spreated by coma this is what array literal is.*

1. **array literal technique**
```
colors= ['white',
'black',
'custom']; 
```
2. **array constructor technique  uses a new word  Array();**

```
var colors
new Array('white ' ,
'black',
'custom'); 
```
_so to get to the value i want in this sequance, number it from `0-x (number of last value)` and to call that value you :_

`var relatedNameOfValue= xxx[numnerOfArrayValue] `

**the value of array's can change semilerly to vars changing valus**


**OPERATORS**
_they allow programmers to create a single value from one or more values._
_Expressions rely on operators to calculate a value._

1. ASSIGNMENT OPERATORS Assign a value to a variable   ` color = 'beige';`
2. ARITHMETIC OPERATORS Perform basic math (related to mathamtical equations)   `area = 3 * 2;`
3. COMPARISON OPERATORS Compare two values and return true or false     ` buy = 3 > 5;`
4. OGICAL OPERATORS Combine expressions and return true or false     `buy= (5 > 3) && (2 < 4);`
5. STRING OPERATORS Combine two strings        ` greeting= 'Hi 1 + 'Mol ly';`

***STRING OPERATOR: There is just one string operator: `the + symbol`. It is used to join the strings on either side of it***
***Programmers call the process of joining together two or more strings to create one new string `concatenation`.***

# Evaluating conditions

+ `==`*it’s mean is the values equal to each other as it’s appear without looking to the data type*
+ `===` *is the comparison equal each other and has the same class of data type.*
+ `!==` check if the values are not the same in values and data type
+ `!=` this variable dosent equal to the other value or variable  

# Comparsion operator

+ `<` *variable smaller than*
+ `>`*variable greater than*
+ `<=` *variable smaller than or equal*
+ `>=` *variable greater than or equal*

# Logical condition
***compare the value of true and fulse abd there are three types:***
+ `&&` *(and) give true if the two parts of comparision give true only*
+ `||` *(or) give true if the on part of comparision give true at least*
+ `! ` *(not ) it change true to fulse and vice versa is true*







