---
path: "/component/button-inputs"
subnav: "4/Forms/Formulaires/2"
lang: "en"
title: "Button inputs"
---

<helmet>
<title> Button Inputs - Aurora Design System </title>
</helmet>

# Button Inputs

<documentationtabs>
      <doctabpanel type="html">
          

## Overview
Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.

## Form controls
Textual form controls—like <input>s, <select>s, and <textarea>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our custom forms to further style <select>s.
    
## Checkboxes and radios
Default checkboxes and radios are improved upon with the help of .form-check, a single class for both input types that improves the layout and behavior of their HTML elements. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported, but to provide a not-allowed cursor on hover of the parent <label>, you’ll need to add the disabled attribute to the .form-check-input. The disabled attribute will apply a lighter color to help indicate the input’s state.

Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our <input>s and <label>s are sibling elements as opposed to an <input> within a <label>. This is slightly more verbose as you must specify id and for attributes to relate the <input> and <label>.

### Default (stacked)
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with .form-check.

## Layout
Since Bootstrap applies display: block and width: 100% to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups
The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in .form-inline as needed. Use it with <fieldset>s, <div>s, or nearly any other element.
    
## Alternatives to hidden labels
Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the .sr-only class. There are further alternative methods of providing a label for assistive technologies, such as the aria-label, aria-labelledby or title attribute. If none of these are present, assistive technologies may resort to using the placeholder attribute, if present, but note that use of placeholder as a replacement for other labelling methods is not advised.

## Help text
Block-level help text in forms can be created using .form-text (previously known as .help-block in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like .text-muted.

### Associating help text with form controls
Help text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.

Help text below inputs can be styled with .form-text. This class includes display: block and adds some top margin for easy spacing from the inputs above.

## Disabled forms
Add the disabled boolean attribute on an input to prevent user interactions and make it appear lighter.

## Validation
Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers. Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).

### How it works
Here’s how form validation works with Bootstrap:

HTML form validation is applied via CSS’s two pseudo-classes, :invalid and :valid. It applies to <input>, <select>, and <textarea> elements.
Bootstrap scopes the :invalid and :valid styles to parent .was-validated class, usually applied to the <form>. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the .was-validated class from the <form> again after submission.
As a fallback, .is-invalid and .is-valid classes may be used instead of the pseudo-classes for server side validation. They do not require a .was-validated parent class.
Due to constraints in how CSS works, we cannot (at present) apply styles to a <label> that comes before a form control in the DOM without the help of custom JavaScript.
All modern browsers support the constraint validation API, a series of JavaScript methods for validating form controls.
Feedback messages may utilize the browser defaults (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
You may provide custom validity messages with setCustomValidity in JavaScript.
With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.
    
## Checkboxes and radios
Each checkbox and radio is wrapped in a <div> with a sibling <span> to create our custom control and a <label> for the accompanying text. Structurally, this is the same approach as our default .form-check.

We use the sibling selector (~) for all our <input> states—like :checked—to properly style our custom form indicator. When combined with the .custom-control-label class, we can also style the text for each item based on the <input>’s state.

We hide the default <input> with opacity and use the .custom-control-label to build a new custom form indicator in its place with ::before and ::after. Unfortunately we can’t build a custom one from just the <input> because CSS’s content doesn’t work on that element.

In the checked states, we use base64 embedded SVG icons from Open Iconic. This provides us the best control for styling and positioning across browsers and devices.

### Disabled
Custom checkboxes and radios can also be disabled. Add the disabled boolean attribute to the <input> and the custom indicator and label description will be automatically styled.

### Select menu
Custom <select> menus need only a custom class, .custom-select to trigger the custom styles. Custom styles are limited to the <select>’s initial appearance and cannot modify the <option>s due to browser limitations.
          
<codeblock html='
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Custom check</label>
    </div>
' react='' /></codeblock>
          
<codeblock html='<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Toggle switch
</label>
' react='' /></codeblock>

<codeblock html='
    <div class="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
      <label class="custom-control-label" for="customRadio1">Custom radio 1</label>
    </div>
    <div class="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
      <label class="custom-control-label" for="customRadio2">Custom radio 2</label>
    </div>
' react='' /></codeblock>

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Checkboxes

Checkboxes are used when the user can select multiple options from the given list. They are also used to confirm certain statements such as: _I accept the Terms and Conditions,_ or _Send me email updates._

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for checkboxes are aligned to the right of the box.

Checkboxes have four different states:

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Custom check</label>
</div>

<br>

**Normal:** 18px by 18px box, border radius of 4px, background colour of <badge style="background-color: #F9F9F9;color:black;">#F9F9F9</badge> , border colour of <badge style="background-color: #96A8B2;color:black">#96A8B2</badge>  at 1px

**Hover:** 18px by 18px box, border radius of 4px, background color <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> at 1px

**Focus:** 18px by 18px box, border radius of 4px, background color <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> at 3px

**Active:** 18px by 18px box, border radius of 4px, background colour <badge style="background-color: #4D5D6C;">#4D5D6C</badge>, border colour of <badge style="background-color: #96A8B2;color:black">#96A8B2</badge>. Includes a white check icon centered within the box.

## Radio Buttons

Radio buttons are used when the user can only select one of the options from the given list.

Radio buttons should follow the vertical format of the form. They should be placed beneath each other rather than beside each other.

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for radio buttons are aligned to the right of the button.

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Custom radio 1</label>
</div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Custom radio 2</label>
</div>
<br>

**Normal:** 18px by 18px circle, background colour of <badge style="background-color: #F9F9F9;color:black;">#F9F9F9</badge>, border colour of <badge style="background-color: #96A8B2;color:black">#96A8B2</badge> at 1px

**Hover:** 18px by 18px circle, background color <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> at 1px

**Focus:** 18px by 18px circle, border radius of 4px, background color <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> at 3px

**Active:** 18px by 18pxcircle, border radius of 4px, background colour <badge style="background-color: #4D5D6C;">#4D5D6C</badge>, border colour of <badge style="background-color: #96A8B2;color:black">#96A8B2</badge>. Includes filled in smaller circle within the full button.

## Switches

Switches are used when only one of two options can be selected. They represent simple questions such as yes/no or on/off style options. Typically, the yes/on option is more colourful and prominent than the no/off option.

Switches can be used in all kinds of forms, or other types of functions such as Settings, Profile Options etc.

<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Toggle switch
</label>

<br> 
<br>

Switches have four different states:

**Off:** 32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #E3E4E5;color:black;">#E3E4E5</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border 1px with a colour of <badge style="background-color: #666666">#666666</badge>. The knob is on the left of the slider.

**Off, Hover/Focus:**

32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #E3E4E5;color:black;">#E3E4E5</badge>, knob colour of <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge> with a border of 3px and border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> , border 1px with a colour of <badge style="background-color: #66666">#66666</badge>. The knob is on the left of the slider.

**On:**

32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border 1px with a colour of <badge style="background-color: #666666">#666666</badge>. The knob is on the right of the slider.

**On, Hover/Focus:**

32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge> with a border of 3px and colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge>, border 1px with a colour of <badge style="background-color: #666666;">#666666</badge>. The knob is on the right of the slider.

</doctabpanel>
    </documentationtabs>



