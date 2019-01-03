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

## Checkboxes

Checkboxes are used when the user can select multiple options from the given list. They are also used to confirm certain statements such as: _I accept the Terms and Conditions,_ or _Send me email updates._

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for checkboxes are aligned to the right of the box.

## Radio Buttons

Radio buttons are used when the user can only select one of the options from the given list.

Radio buttons should follow the vertical format of the form. They should be placed beneath each other rather than beside each other.

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for radio buttons are aligned to the right of the button.

## Switches

Switches are used when only one of two options can be selected. They represent simple questions such as yes/no or on/off style options. Typically, the yes/on option is more colourful and prominent than the no/off option.

Switches can be used in all kinds of forms, or other types of functions such as Settings, Profile Options etc.


<documentationtabs remove="react">
    <doctabpanel type="html">
          

## Checkboxes

Aurora uses a custom style for checkboxes. See the example below:

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Custom check</label>
</div>

```html
<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Custom check</label>
</div>
```

## Radio Buttons

Aurora uses a custom style for radio buttons. See the example below:

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Custom radio 1</label>
</div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Custom radio 2</label>
</div>

```html
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Custom radio 1</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Custom radio 2</label>
</div>
```

### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

### Default (stacked)
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

To make button inputs inline instead of stacked, add the `.custom-control-inline` class to the `.custom-control` `<div>`.

### Using Bootstrap Defaults

If you wanted to use the Bootstrap default styles for checkboxes and radio buttons, see the example below: 

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
```

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
```

## Switches

Switches are a custom component used when there is only a yes/no or on/off option for a field. 

<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Toggle switch
</label>

```html
<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Toggle switch
</label>
```
          
</doctabpanel>

<doctabpanel type="react">
      </doctabpanel>
      
<doctabpanel type="design">
          

## Checkboxes

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

<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Toggle switch
</label>

<br> 
<br>

Switches have four different states:

**Off:** 32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #E3E4E5;color:black;">#E3E4E5</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border 1px with a colour of <badge style="background-color: #666666">#666666</badge>. The knob is on the left of the slider.

**Off, Hover/Focus:** 32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #E3E4E5;color:black;">#E3E4E5</badge>, knob colour of <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge> with a border of 3px and border colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> , border 1px with a colour of <badge style="background-color: #66666">#66666</badge>. The knob is on the left of the slider.

**On:** 32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border 1px with a colour of <badge style="background-color: #666666">#666666</badge>. The knob is on the right of the slider.

**On, Hover/Focus:** 32px by 18px, border radius of 9px, slider background colour of <badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>, knob colour <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge> with a border of 3px and colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge>, border 1px with a colour of <badge style="background-color: #666666;">#666666</badge>. The knob is on the right of the slider.

</doctabpanel>
    </documentationtabs>



