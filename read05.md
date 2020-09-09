# Images markups

`Don’t take images from online just buy a stock image so you won’t get in trouble because of the copyrights` 

**Images should...**

+	_Be relevant_ 
+	_Convey information _  
+	_Convey the right mood _ 
+	_Be instantly recognizable_
+	_Fit the color palette_

**Better to build a folder for images so you can separate them and organize work perfectly .**

1.	**Adding images :** `<img src=”web address\ image path “ alt=” related discerption of image” title=”more info” />`


2.	**Manipulate the height & width of image  :** 
`<img src=”web address\ image path “ alt=” related discerption of image” height=”” width=”” />`

3.	**Where to place you image :**

*  _before the `<p>`_
*  _inside the `<p>` (beginning/middle/end)_ 
*  _after the `<p>`_

4.	**Aligning image horizontally :** _use the attribute align =”left/right”_


5.	**Aligning image vertically :** _align = ”top/middle/bottom” jusy the first line will be on the top of photo /middle/bottom_


6.	**Saving photo:** _right format(png/jpeg/gif) ,right size not smaller cause image destroy and not bigger cause load delay ,right resolution (72 px/inch)_


7.	**Bitmap image:** _the image with various scale of colors (sky/cat/etc) when you zoom in you will see colored pxs squares ._

***vector image : the image has a few colors when you zoom in you will see a very clear pic (zoom in will not effect the dimension quality )***

```
Scalable Vector Graphics (SVG) are a relatively new format used to display vector images directly on the web (eliminating the need to create bitmap versions of them), however its use is not yet widespread.
```

8.	**Animated gifs :** _pic in sequence that showsa dynamic motion._


9.	**Transparency :** _see through _ 
* _if the images have straight edges and you want 100% transparency  you should save it at gif format_ 

* _use png format if you want to drop a shadow or have  semi.opaque transparency  if you have diagonal and rounded edges._


10.	_Check the size of image by open it in new tab  or just check properities._
11.	_In order to create an image with a text sticked to it you can use `<figure> <figcaption>`_

**`Photographs are best saved as jpeg and logo that use flat color better saved as gif.`**

# colors css

`colors blow soul in the photo, but also helps to know the mood and evokes reactions.`

**how to specify colors, as there are three common ways:**

**foreground color**: _how to identify colors, as there are three common ways_  
+ *rgb values these express colors in terms of how much red, green and blue are used to make it up*
+ *hex codes these are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign.*
+ *color names there are 147 predefined color names that are recognized by browsers*

**background color**: _sets the color of the background for that box. by  the way above background-color:one of there ways, if you do not specify a background color, then the background is transparent (white by defulte)_
   
**color terminology**: _understanding color and realize the important of it._

**contrast**: _when picking foreground and background colors, it is important to ensure that there is enough contrast for the text to be readable_

**opacity or alpha**: _the focus of color and his value is a number between 0 and 1_

**hsla colors**: _introduces an entirely new and intuitive way to specify colors using hue, saturation, and lightness values._

**hue**: _is the colloquial idea of color_

**saturation**: _saturation is the amount of gray in a color._

**lightness**: _is the amount of white  (lightness) or black (darkness) in a color, so it’s the scale of color between white and black._

# how to have live view
_by using some online coding site like repl.it and visual studio or by github link_

# Text css 


**defualt Fonts types/ typeface terms :** 
1.	_serif(long passages)_
2.	_sans-serif(clear to read)_
3.	_monospace(used with coding text editors and easy to follow, all the character have the same width)_ 
4.	_cursive : have different styles_.
5.	_fantasy :bold and thickfonts_
 

+	**font-weight :** _light/medium/bold/bolder_
+	**font-style:** _normal/italic/oblique_
+	**font-stretch:** _condensed(narrow&lighter)/regular/extended(thicker&wider)_
+	**font-family :** _has the pattern of fonts inside it. Font format values`(first font,if not applicable use the f2 ,---,)`_
+	**Font-size:** _there is a wide range for the parameter used in it(ems An em is equivalent to the width of a letter m.)_

+	**Import fonts by :@font-face** 
```
@font-face{
font-family:’name of font’;
src:url(‘-------‘);} format (‘eot/  woff/ttf/otf/svg’).  >> the format is must since the visitors use different browsers to show the font 
```

+	**Text-transform:** _uppercase/ lowercase/ capitalize_
+	**Text-decoration:** _none/underline/overline/linethrough(strock)/blink(if founded)_
+	**Line-height:** *wide range parameter (space between the ascending and descending*
+	**Litter-spacing**
+	**Word-spacing**
+	**Text-align:** *left/right/justify/center*
+	**Vertical-align :** *text-top/text-bottom/base-line*
+	**Text-indent:** *target the first line of text*
+	**Text-shadow:** *`horizontalShadow verticalShadow  blur  color ;`*

+	**Pseudo element :** *styling something not excited `(selector:first-line/first-letter)`*
+	**Pseudo class :** *styling excited tags by giving it coditions `(selector:link/:visited/:hover/:active/:focus)`*
+	**Attribute selectors :** *Existence/ Equality/ Space/ Prefix/ SubString/ Suffix*
