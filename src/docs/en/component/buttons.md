---
path: "/component/buttons"
subnav: "2/Standard/Standard/3"
lang: "en"
title: "Buttons"
---
<helmet>
<title> Buttons - Aurora Design System </title>
</helmet>

# Buttons

## Best Practices

Buttons tend to have visual prominence on any given page or window. Primary buttons, buttons that indicate a call to action, are the most prominent. Secondary buttons, which indicate less commonly used actions, should be less prominent than primary buttons. Buttons always indicate an action and are not to be used for navigation. Buttons are placed where a user should expect them, i.e. in close proximity to the other elements that the action affects.

## Labels

Button labels should be clear and specific. Avoid generic terms like Save, Submit or Cancel. Buttons should indicate the exact action that is taken and should provide a clear idea of what will happen next.

Examples of good button labels: Add a blog post, Send message, Save draft.

Label text has high contrast with the button colour. See [Colour](/component/colour) for more information about acceptable contrast.

<documentationtabs remove="react">
    <doctabpanel type="html">
          

## Examples
Aurora includes various button styles, each serving its own semantic purpose.
<br>
        
<button type="button" color="primary" >Primary</button>
<button type="button" color="secondary">Secondary</button>
<button type="button" color="success">Success</button>
<button type="button" color="danger">Danger</button>
<button type="button" color="warning">Warning</button>
<button type="button" color="info">Info</button>
<button type="button" color="light">Light</button>
<button type="button" color="dark">Dark</button>


```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
```

### Accessibility Considerations

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Sizes
Buttons can easily be customized to be larger or smaller. Add `.btn-lg` or `.btn-sm` for additional sizes.

<button type="button" color="primary" size="sm">Small Button</button>
<button type="button" color="primary" size="lg">Large Button</button>

```html
<button type="button" class="btn btn-primary btn-sm">Small Button</button>
<button type="button" class="btn btn-primary btn-lg">Large Button</button>
```

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

<button type="button" color="primary" block="true">Block Button</button>

```html
<button type="button" class="btn btn-primary btn-block">Block Button</button>
```

## Dropdowns
Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering. 

Wrap the dropdown’s toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs.

Button dropdowns work with buttons of all sizes and variants. 

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either `<button>` elements:

<mdbuttondropdown color="primary" title="Regular">
</mdbuttondropdown>

```html
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action 1</a>
        <a class="dropdown-item" href="#">Action 2</a>
        <a class="dropdown-item" href="#">Action 3</a>
    </div>
</div>
```

### Accessibility Considerations

The WAI ARIA standard defines an actual `role="menu"` widget, but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

Aurora’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Aurora does not expect (nor automatically add) any of the `role` and `aria`- attributes required for true ARIA menus. Authors willhave to include these more specific attributes themselves.

However, Aurora does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the ESC key.

## Button group

Group a series of buttons together on a single line with the button group. 
Wrap a series of buttons with `.btn` in `.btn-group`.

<div class="mt-2">
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" color="primary">Left</button>
        <button type="button" color="primary">Middle</button>
        <button type="button" color="primary">Right</button>
    </div>
</div>

```html
<div class="btn-group" role="group" aria-label="Basic example of button group">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
</div>
```

### Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

</doctabpanel>
    <doctabpanel type="design">


## Varying States

Buttons are not one-state objects. Most users will recognize a button because of its hover and active states. Varying states also provide feedback to the user at each stage of performing the action.

Buttons should include normal, hover, focus, active and disabled states:

**Normal:** Even in its normal state, a button should look like a button! Before hovering, a user should be able to tell that an element is clickable.

**Hover:** Usually indicated by a change in colour or animation, hover states indicate to the user that the element is clickable.

**Focus:** Similar to hover states, focus states indicate that the user has tabbed to the specific button.

**Active/Pressed:** Usually indicated by a change in colour or animation, this indicates that the user has clicked or pressed a button

**Disabled:** Usually a ghosted version of the normal state, this indicates to the user that the action is unavailable.


## Size and Padding

Buttons used in this design system have a minimum size of 30px by 30px. This is the typical size of a user's finger pad when using the application on mobile. For web this minimum size is also consistent.

The more white-space, padding, around a button, the more prominent the button appears on the page. Most buttons in this system use 15px of padding, unless are otherwise indicated.


## Primary Buttons

Primary buttons identify a call to action. Use these buttons for actions that a user is encouraged to take, such as: Add a blog post, Send message, or Login. Try to keep button labels limited to one or two words.

Primary buttons are designed to have high contrast against the background and the heaviest visual weight. They typically use brighter colours than other elements on the form or layout, and are located in a visible and accessible area of the page.

Primary buttons use the primary colour, with white text. Sizing of the button depends on the length of the action words.

Each of the states for primary buttons are as follows:

**Regular state:** primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px.

<button aria-label="Example of primary button in regular state" color="primary">Regular</button>

**Hover state:** primary colour at 80% opacity, white text, with a border radius of 4px and padding of 15px.

<button aria-label="Example of primary button in hover state" color="primary" style="color: #fff; background-color: #245e83; border-color: #215679">Hover</button>

**Focus state:** primary colour at 80% opacity, white text, with a border radius of 4px and padding of 15px. Includes a 3px stroke in the primary colour.

<button aria-label="Example of primary button in focus state" color="primary" style="background-color: #002D42; box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);">Focus</button>

**Disabled state:** primary colour at 60% opacity, white text, with a border radius of 4px and padding of 15px.

<button aria-label="Example of primary button in disabled state" color="primary" disabled="true">Disabled</button>

### Position

Primary buttons should be located in the most prominent and convenient location possible. These buttons should also be located in close proximity to the form or the elements that are affected by the action. Generally, in a set of two, primary buttons are placed on the left and the secondary button is placed on the right.

## Secondary Buttons

Secondary buttons are used for actions that are necessary to provide, but that users may click less often. Examples include actions such as Cancel submission, Delete or Save draft. These buttons have a visual weight that is equal to or less than the majority of elements on the page. The secondary button is usually placed in close proximity to the primary button. Try to keep button labels limited to one or two words.

Secondary buttons, particularly ones used for destructive actions, should be designed in a way that deters users from clicking on it. This helps minimize mistakes.

For permanent destructive secondary actions, such as Delete, clicking the button will prompt a dialog to confirm the action. Always give the user to confirm actions that cannot be reverted.

Secondary buttons in this system are transparent with a stroke colour. Text changes colour depending on the button state. Sizing of the button depends on the length of the action words.

Each of the states for secondary buttons are as follows:

**Regular state:** transparent with a 1px stroke using the  colour <badge style="background-color: #002D42;">#002D42</badge>, the text is written in the same colour. Border radius of 4px and padding of 15px.

<button aria-label="Example of secondary button in regular state" color="secondary">Regular</button>

**Hover state:** rectangle coloured with <badge style="background-color:#002D42;">#002D42</badge> at 80% opacity, the text is displayed in white. Border radius of 4px and padding of 15px.

<button aria-label="Example of secondary button in hover state" color="secondary" style="background-color:#002D42; color:white;">Hover</button>

**Focus state:** transparent with a 3px stroke using <badge style="background-color: #002d42;">#002d42</badge>, the text is displayed in <badge style="background-color: #fff; color: black;">#FFFFFF</badge>. Border radius of 4px and padding of 15px.

<button aria-label="Example of secondary button in focus state" color="secondary" style="color: #002D42; background-color: transparent; box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);">Focus</button>

**Disabled state:** Fill colour of <badge style="background-color: #CECECE;color:black;">#CECECE</badge>, with white text. Border radius of 4px and padding of 15px.

<button aria-label="Example of secondary button in disabled state" color="secondary" disabled="true">Disabled</button>

### Position

Secondary buttons are usually in close proximity to the primary button, but not in a location where the user might mistake the two. Secondary buttons are usually placed to the right of the primary button. They should have a consistent placement relative to the primary button to avoid confusion.

## Drop-Down Buttons

Drop down buttons display a list of items when clicked. They are used for two-step processes that may require more specific options for a singular action.

**Regular State:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height.

<mdbuttondropdown color="primary" title="Regular">
</mdbuttondropdown>

**Hover States:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height. Whichever piece of the button \(primary or drop-down section\) is being hovered over is shown at 80% opacity.

<mdbuttondropdown color="primary" style="color: #fff; background-color: #245e83; border-color: #215679" title="Hover">
</mdbuttondropdown>

**Focus State:** Similar to the primary button, drop-down buttons use the primary colour at 100% opacity, white text, with a border radius of 4px and padding of 15px. The drop-down arrow represents a space of 30px by 40px, which is separated from the primary button using a white line. The arrow uses a space of 15px width and 8px in height. Whichever piece of the button \(primary or drop-down section\) is being focused on is shown at 80% opacity and includes a stroke of 3px in the primary colour.

<mdbuttondropdown color="primary" style=" box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);" title="Focus">
</mdbuttondropdown>

**Pressed State:** When the drop-down arrow is pressed, this arrow section of the button is displayed at 80% opacity and a drop-down menu is displayed below. The action box uses a 1px border using <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. The box has a border radius of 4px. The width of the box is 166px, and the height depends on the number of actions, using 40px per action. On hover, the 40px around the action is displayed using <badge style="background-color: #CECECE;color:black;">#CECECE</badge>.

<buttondropdownopen style="color: #fff; background-color: #215679; border-color: #1e4f6f;box-shadow: 0 0 0 0.2rem rgba(44, 115, 161, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125);" title="Pressed">
</buttondropdownopen>

<br>
<br>
<br>
<br>
<br>
<br>

## Button Groups

Button groups, are a stylized way of putting multiple buttons together.

Primary actions are aligned to the left, while secondary actions are placed in the middle, and warning or destructive actions are aligned to the right.

<div class="mt-2">
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" color="primary">Left</button>
        <button type="button" color="primary">Middle</button>
        <button type="button" color="primary">Right</button>
    </div>
</div>

</doctabpanel>
</documentationtabs>


