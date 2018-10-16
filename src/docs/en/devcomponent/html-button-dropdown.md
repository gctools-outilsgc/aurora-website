---
path: "/devcomponent/css-button-dropdown"
subnav: "2/CSS/CSS/5"
lang: "en"
title: "CSS Button Dropdown"
---

#Dropdowns
Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is [an intentional design decision.](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)

##Examples
Wrap the dropdown’s toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs.

###Single button dropdowns
Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either `<button>` elements:
<htmlbuttondropdownexample1 />

And with `<a>` elements:
<htmlbuttondropdownexample2 />

The best part is you can do this with any button variant, too:
<htmlbuttondropdownexample3 />

###Split button dropdowns
Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
<htmlbuttondropdownexample4 />