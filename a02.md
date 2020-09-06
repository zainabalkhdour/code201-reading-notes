# css introduction

css is about to make your web pages more attractive, controlling the design of them, and also it’s about telling the browser how to present web site.

**introduce you to how css works**

+	so imagine that there is a box around every html element to understand how to edit the shapes of boxes 
+	css work together with (associates)html elements 
+	css contains two parts: a selector and a declaration.
**selector:** _indicate which element the rule applies to the same rule can apply ._
**declarations :** _indicate how the elements referred to in the selector should be style_
*declarations found inside {curly brackets} and each is made up of two sections or parts:* `a property and a value, separated by a colon “:”  .`
**properties :** _express the aspects of the element you want to change such as color /size/family font/etc._ 
**values :** _identify a specific settings you want to use for the chosen properties._ 

+	`different types of css selectors allow you to select and target your  x rules at different elements in an html document.`

**learn you how to write css rules**
_`<style>` `command` you can ably it on the `head` and inline code of html and you can put them separately in `css.html` file and this is the most preferable way._

**show you how css rules apply to html page**

_so you need  to know if your version css can be implement on browser you have or other browser_
_when a css property does not display as expected, it is generally referred to as a browser quirk or css bug._ 

# Text markup

**there is two type of text markup**

1.	Structural markup: the elements that you can use to describe both headings and paragraphs
2.	Semantic markup: which provides extra information; such as where emphasis is placed in a sentence


**Bold :** _`<b>` doesn’t have more information_
**Italic:** _`<i>` technical terms, names of ships, foreign words, thoughts, or other terms that would usually be italicized_

**Superscript :** _`<sup>` it push things up in small font like this 22_

**Subscript:** _`<sub>` it push things down like this H2O_

***When the browser comes across two or more spaces next to each other, it only displays one space. Similarly if it comes across a line break, it treats that as a single space too. This is known as white space collapsing.***

**Line break:** _`<br />` to break long line or works you want to break_
**Horizontal rules:** _`<hr />` to make horizontal line  means there something change_



*There are a few elements that do not have any words between an opening and closing tag. They are known as **empty elements** and they are written differently.An empty element usually has only one tag. Before the closing angled bracket of an empty element there will often be a space and a forward slash character*

**blockquote:** _`<blockquote>` for long quote_
**quote:** _`<q>` for short quote and the quote is placed into  `“”`_

**abbreviation :** _`<abbr>` used for acronyms and abbreviation_ 

**citations:** _`<cite>` When you are referencing a piece of work such as a book, film or research paper, the  <cite> element can be used to indicate where the citation is from. It will be in italic font_

**definations:** _`<dfn>` The first time you explain some new terminology (perhaps an academic concept or some jargon) in a document, it is known as the defining instance of it. (no affect on the screen)._

**Address :** _`<address>` element has quite a specific use: to contain contact details for the author of the page.(italic)
Hcard : an attribute value for the (class attribute ) used to give information about the author_

**Inserted :** _`<ins>` something newly add to document and it will be shown as underlined text ._

**Delete :** _`<del>` show something deleted fom document ,shown as words with line in the middle

**No longer accurate but still not deleted:** _`<s>` show word with line in the ~middle~_ 

# javascript basic instructions

***A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a statement. Statements should end with a semicolon.***

**statement: one instruction.**

**Comment :** _use this to write a comment` // `(we use  comments to explain what your code does. They help make your code easier to read and understand. This can help you and others who read your code)_

**MULTI-LINE COMMENTS :** _To write a comment that stretches over more than one line, you use a multi-line comment, `starting with the /* characters and ending with the */ `characters._

**Variables :** *a place that we store data in it for temporary time in order to use it, and it can easily changed when the script run ; that the reason of name variable*

**DATA TYPES:** _numbers, strings, and true or false values known as Booleans, arrays, objects, undefined, and null._

**And the rules for naming variables are :**

1. name cant start with numbers but can start with lestters/$/_
2. formating name of letters/numbers/$/_ but you cant put . /-
3. you cant use reserved words as names ( keywords or reserved words:are special words that tell the )interpreter to do something
4. names sistive to upper/lower case
5. meaningful that discrine the information type.
6. to distinguish words you must put upper latter at the biganing of  words (FirstNames)

**ARRAYS** _is a special type of variable. It doesn't just store one value; it stores a list of values._
_so it is Any name that have more than on value_

__An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.__

1. EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE : var color = 'beige';
2. EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A SINGLE VALUe: var area = 3 * 2;

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



# Decisions and loops

***So there is something called follow chart help to highlight the decisions you want to make and when it true or false what will happen next where we will go.***

**Decision components :**
1.	Expressions that will return a value 
2.	A conditional statement tell us what to do next

_So to make a conditional statement you need to have a conditional operator which give us true or false value :_

1.	Comparison operators `( ==/===/not !=/not !==/>/</<=/>=)`
2.	Logical operators `(and &&/ not !/ or ||)`

`So the operator is these signs founded inside the expressions.`

**Hint :** _in logical operator and if you need to have two true to get true result whereas or you need one true to get true result. And in the logical not you have true the result will be false it’s the opposite of what you get._

**application of conditions thorough if /if else**

**if :** _is a statement apply the conditions and evaluate it and if it true it will execute it related to the code you wrote._

**If else:** _the same as if but  it will execute other code if we got false result_
