---
path: "/component/button-inputs"
subnav: "4/Forms/Formulaires/2"
lang: "en"
title: "Button inputs"
---

# Button Inputs

## Checkboxes

Checkboxes are used when the user can select multiple options from the given list. They are also used to confirm certain statements such as: _I accept the Terms and Conditions,_ or _Send me email updates._

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for checkboxes are aligned to the right of the box.

Checkboxes have four different states:

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Custom check</label>
</div>

<codeblock html='
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Custom check</label>
    </div>
' react='' />

**Normal:**

18px by 18px box, border radius of 4px, background colour of \#F9F9F9, border colour of \#96A8B2 at 1px

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Custom check</label>
</div>

**Hover:**

18px by 18px box, border radius of 4px, background color \#FFFFFF, border colour of \#4D5D6C at 1px

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3">
    <label class="custom-control-label" for="customCheck3">Custom check</label>
</div>

**Focus:**

18px by 18px box, border radius of 4px, background color \#FFFFFF, border colour of \#4D5D6C at 3px

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck4">
    <label class="custom-control-label" for="customCheck4">Custom check</label>
</div>

**Active:**

18px by 18px box, border radius of 4px, background colour \#4D5D6C, border colour of \#96A8B2 . Includes a white check icon centered within the box.

## Radio Buttons

Radio buttons are used when the user can only select one of the options from the given list.

Radio buttons should follow the vertical format of the form. They should be placed beneath each other rather than beside each other.

If there is an _Other_ option, this should include an open field for users to provide additional information.

Labels for radio buttons are aligned to the right of the button.

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Custom radio</label>
</div>

<codeblock html='
    <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">Custom radio</label>
    </div>
' react='' />

**Normal:**

18px by 18px circle, background colour of \#F9F9F9, border colour of \#96A8B2 at 1px

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Custom radio</label>
</div>

**Hover:**

18px by 18px circle, background color \#FFFFFF, border colour of \#4D5D6C at 1px

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio3">Custom radio</label>
</div>

**Focus:**

18px by 18px circle, border radius of 4px, background color \#FFFFFF, border colour of \#4D5D6C at 3px

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio4">Custom radio</label>
</div>

**Active:**
18px by 18pxcircle, border radius of 4px, background colour \#4D5D6C, border colour of \#96A8B2. Includes filled in smaller circle within the full button.

## Switches

Switches are used when only one of two options can be selected. They represent simple questions such as yes/no or on/off style options. Typically, the yes/on option is more colourful and prominent than the no/off option.

Switches can be used in all kinds of forms, or other types of functions such as Settings, Profile Options etc.

Switches have four different states:

<label class="switch">
    <input type="checkbox" tabindex="-1">
    <span class="slider round"></span>
</label>

<codeblock html='
    <label class="switch">
        <input type="checkbox" tabindex="-1">
        <span class="slider round"></span>
    </label>
' react='' />

**Off:**

32px by 18px, border radius of 9px, slider background colour of \#E3E4E5, knob colour \#FFFFFF, border 1px with a colour of \#66666. The knob is on the left of the slider.

<label class="switch">
    <input type="checkbox" tabindex="-1">
    <span class="slider round"></span>
</label>

**Off, Hover/Focus:**

32px by 18px, border radius of 9px, slider background colour of \#E3E4E5, knob colour of \#FFFFFF with a border of 3px and border colour of \#4D5D6C , border 1px with a colour of \#66666. The knob is on the left of the slider.

<label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
</label>

**On:**

32px by 18px, border radius of 9px, slider background colour of \#FEC04F, knob colour \#FFFFFF, border 1px with a colour of \#66666. The knob is on the right of the slider.

<label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
</label>

**On, Hover/Focus:**

32px by 18px, border radius of 9px, slider background colour of \#FEC04F, knob colour \#FFFFFF with a border of 3px and colour of \#4D5D6C, border 1px with a colour of \#66666. The knob is on the right of the slider.

## Action Buttons

Buttons in forms should clearly state the result of pressing the button. Especially in forms, the button should include some form of animation or validation to let the user know their action has been recieved \(i.e. a confirmation that the form has been submitted, saved, or cancelled\).

For more information see the [Buttons](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit#/edit/master/buttons.md?_k=1dnju1) section
