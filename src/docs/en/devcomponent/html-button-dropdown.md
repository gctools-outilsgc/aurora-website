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

##Sizing
Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
<!-- <buttonhere > -->
Copy

    <!-- Large button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button
      </button>
      <div class="dropdown-menu">
        ...
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button
      </button>
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        ...
      </div>
    </div>
    
    <!-- Small button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <div class="dropdown-menu">
        ...
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        ...
      </div>
    </div>

##Dropup variation
Trigger dropdown menus above elements by adding `.dropup` to the parent element.
<!-- <buttonhere > -->
Copy

    <!-- Default dropup button -->
    <div class="btn-group dropup">
      <button type="button" class="btn btn-secondary">Dropup</button>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <!-- Dropdown menu links -->
      </div>
    </div>
    
    <!-- Split dropup button -->
    <div class="btn-group dropup">
      <button type="button" class="btn btn-secondary">
        Split dropup
      </button>
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <!-- Dropdown menu links -->
      </div>
    </div>

##Menu items
Historically dropdown menu contents _had_ to be links, but that’s no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.
<!-- <buttonhere > -->

Copy

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>

##Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu.

**Heads up!** Dropdowns are positioned only with CSS and may need some additional styles for exact alignment.

This dropdown's menu is right-aligned
<!-- <buttonhere > -->

Copy

    <div class="btn-group">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        This dropdown's menu is right-aligned
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>

##Menu headers
Add a header to label sections of actions in any dropdown menu.
<!-- <buttonhere > -->

Copy

    <div class="dropdown-menu">
      <h6 class="dropdown-header">Dropdown header</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
    </div>

##Menu dividers
Separate groups of related menu items with a divider.
<!-- <buttonhere > -->

Copy

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>

##Disabled menu items
Add `.disabled` to items in the dropdown to **style them as disabled**.
<!-- <buttonhere > -->

Copy

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Regular link</a>
      <a class="dropdown-item disabled" href="#">Disabled link</a>
      <a class="dropdown-item" href="#">Another link</a>
    </div>

##Usage
Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item.

On mobile devices, opening a dropdown adds a `.dropdown-backdrop` as a tap area for closing dropdown menus when tapping outside the menu, a requirement for proper iOS support. **This means that switching from an open dropdown menu to a different dropdown menu requires an extra tap on mobile.**

Note: The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it.

###Via data attributes
Add `data-toggle="dropdown"` to a link or button to toggle a dropdown.
<!-- <buttonhere > -->

Copy

    <div class="dropdown">
      <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown trigger
      </button>
      <div class="dropdown-menu" aria-labelledby="dLabel">
        ...
      </div>
    </div>

###Via JavaScript
Call the dropdowns via JavaScript:
<!-- <buttonhere > -->

Copy

    $('.dropdown-toggle').dropdown()

##### `data-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown’s trigger element.

###Options

_None._

###Methods

Method

Description

`$().dropdown('toggle')`

Toggles the dropdown menu of a given navbar or tabbed navigation.

###Events

All dropdown events are fired at the `.dropdown-menu`’s parent element and have a `relatedTarget` property, whose value is the toggling anchor element.

Event

Description

`show.bs.dropdown`

This event fires immediately when the show instance method is called.

`shown.bs.dropdown`

This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).

`hide.bs.dropdown`

This event is fired immediately when the hide instance method has been called.

`hidden.bs.dropdown`

This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).
<!-- <buttonhere > -->

Copy

    $('#myDropdown').on('show.bs.dropdown', function () {
      // do something…
    })