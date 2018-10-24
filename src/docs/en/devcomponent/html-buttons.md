---
path: "/devcomponent/css-buttons"
subnav: "2/CSS/CSS/1"
lang: "en"
title: "CSS Buttons"
---

#Buttons
Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##Examples
Bootstrap includes six predefined button styles, each serving its own semantic purpose.
<htmlbuttonexample1 />

#### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

##Button tags
The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.
<htmlbuttonexample2 />

##Outline buttons
In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.
<htmlbuttonexample3 />

##Sizes
Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.
<htmlbuttonexample4 />

&nbsp;
<htmlbuttonexample5 />

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.
<htmlbuttonexample6 />

##Active state
Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There’s no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.
<htmlbuttonexample7 />

##Disabled state
Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.
<htmlbuttonexample8 />

Disabled buttons using the `<a>` element behave a bit different:

*   `<a>`s don’t support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
*   Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
*   Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
<htmlbuttonexample9 />

#### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

#Button plugin
Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

##Toggle states

Add `data-toggle="button"` to toggle a button’s `active` state. If you’re pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.

Single toggle
<htmlbuttonexample10 />

###Checkbox and radio buttons

Bootstrap’s `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable toggling in their respective styles.

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input’s `checked` property—you’ll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input’s `<label>`.
<htmlbuttonexample11 />

&nbsp;
<htmlbuttonexample12 />

### Methods

| Method | Description |
| --- | --- |
| `$().button('toggle')` | Toggles push state. Gives the button the appearance that it has been activated. |
| `$().button('dispose')` | Destroys an element's button. |