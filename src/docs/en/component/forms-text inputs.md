---
path: "/component/text-inputs"
subnav: "4/Forms/Formulaires/6"
lang: "en"
title: "Text inputs"
---

<helmet>
<title> Text Inputs - Aurora Design System </title>
</helmet>

# Text Inputs

Input fields allow users to provide information by inputting text into a page. Information can be entered through a variety of different input fields such as text fields, text area, checkboxes, radio buttons, and date inputs. Input fields typically appear in forms and should clearly indicate that users can input information through labels, tooltips, placeholder text, and appropriate styling.

## Microcopy

Microcopy is text below an input field that provides additional information about that field. Microcopy is meant to be brief sentences that instruct the user how to complete the field.

## Placeholder Text

Placeholder text is used only to provide supplemental information or additional guidance on how to complete a text field. Placeholder text DOES NOT replace a label or microcopy. Placeholder text should only be used if an example of a text input improves the user experience, rather than as a replacement to other important information indicators.

Placeholder text is text that appears directly in the input field. This text is not meant to be used as a label, but can provide supplemental information or an example for the user.

Placeholder text is meant to help the user more accurately complete the field rather than be the primary indicator of field content. It may also be complementary to micro-copy, with placeholder text providing an example, and micro-copy providing additional information or context.

As soon as the user starts typing in the field, the placeholder text should disappear.

<documentationtabs>
      <doctabpanel type="html">


## Form controls
Textual form controls—like `<input>`, `<select>`, and `<textarea>`—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

## Text Inputs

The `<input>` tag specifies an input field where the user can enter data.

`<input>` elements are used within a `<form>` element to declare input controls that allow users to input data.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

  <div class="form-group">
    <label for="inputEmail3">Email Address</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
  </div>

*Codeblock*

## Text Area

The `<textarea>` tag defines a multi-line text input control.

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
*Codeblock*

## Select Field

The `<select>` element is used to create a drop-down list.

The `<option>` tags inside the `<select>` element define the available options in the list.
    
<div class="mt-2">
    <label for="carSelect">Cars:</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>

<codeblock html='
    <div class="mt-2">
        <label for="carSelect">Cars:</label>
        <select id="carSelect" class="form-control">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    </div>
' react='' /></codeblock>

## Microcopy

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies, such as screen readers, will announce this microcopy when the user focuses or enters the control.

Microcopy below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above. Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted.`

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Text Inputs

Text fields are styled as follows:

<label for="exampleInputEmail1">Email</label>
<input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="sierra@example.com">

**Normal**: Rectangle with a height of 42px, and a border radius of 4px. Stroke width of 1px with the colour <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. There is 10px of padding between the field and the label. The input field a padding of 15px by 12px.

**Focus**: Rectangle with a height of 42px, and a border radius of 4px. Stroke width of 1px <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. There is 10px of padding between the field and the label. The input field a padding of 15px by 12px.

The text field a user has selected should be indicated visually. Outlining the selected text box in blue shows the user which field they are inputting without too much visual weight.

When there is an error within a text field, the field will be outlined in red. See [Errors and Validation](/component/errors-and-validation) for more information about input errors.

Text input fields may also include interactive elements to the right of the field. Interactive elements will always be displayed using an icon, such as an eye to demonstrate a visible or hidden password.


## Text Area

Text areas have the same styling as other text inputs, but with a greater height. Text areas are used typically for open ended questions, where the user is asked to provide descriptions or additional information. 

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

## Select Field

Select fields are a drop down menu of specific options. They are intended to provide users with easy completion when there are only a few options.

Select fields are styled as follows:

**Normal**: Rectangle with a height of 42px and a border radius of 4px. Stroke width of 1px coloured <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. The drop down control is right-aligned 27px from the edge of the input. The line on the edge is 1px coloured <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> and extends until 5px from the top and bottom of the input. 15 by 27 by 15 by 12. The chevron icon is aligned with the text and is 9px from the left edge, and 18px from the top and bottom.

<div class="mt-2">
    <label for="carSelect">Cars:</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>
<br>

**Focus**: Rectangle with a height of 42px and a border radius of 4px. Stroke width of 1px coloured <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. The drop down control is right-aligned 27px from the edge of the input. The line on the edge is 1px coloured <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> and extends until 5px from the top and bottom of the input. 15 by 27 by 15 by 12. The chevron icon is aligned with the text and is 9px from the left edge, and 18px from the top and bottom.

*Focus select field component*

## Placeholder Text

Placeholder text is styled using Nunito Sans Regular at 14px, <badge style="background-color: #666666;">#666666</badge>


For more information about placeholder text styles, refer to the [_Typography_](typography.md) section.

## Micro-Copy

Micro-copy is styled as follows:

10px below the input field. The text is displayed the same as placeholder text; Nunito Sans Regular at 14px, <badge style="background-color: #666666;">#666666</badge>

If there is more than one line the text wraps and has a leading of 18pts.

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sierra@example.com">
    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
  </div>
<form>

</doctabpanel>
    </documentationtabs>


