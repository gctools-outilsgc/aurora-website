---
path: "/devcomponent/css-button-group"
subnav: "2/CSS/CSS/6"
lang: "en"
title: "CSS Button Group"
---

#Button group

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin](/components/buttons/#button-plugin).

##Basic example

Wrap a series of buttons with `.btn` in `.btn-group`.
<buttongroupexample1 />

##Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.
<buttongroupexample2 />

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.
<buttongroupexample3 />

##Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.
<buttongroupexample4 />

##Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.
<buttongroupexample5 />

##Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**
<buttongroupexample6 />

##Tooltips and popovers

Due to the specific implementation (and some other components), a bit of special casing is required for tooltips and popovers within button groups. **You’ll have to specify the option `container: 'body'`** to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).