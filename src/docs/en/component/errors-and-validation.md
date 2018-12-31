---
path: "/component/errors-and-validation"
subnav: "4/Forms/Formulaires/3"
lang: "en"
title: "Errors and validation"
---

<helmet>
<title> Errors and Validation - Aurora Design System </title>
</helmet>

# Errors and Validation

## Input Errors

Input errors should be displayed in such a way that it is clear to the user that they have made an error, and what and where that error is. To display errors in a form submission, use both error boxes and inline errors. For each error, copy used for both the error box and the inline error should be identical.

## Error Boxes

As well, have an error box appear at the beginning of the form listing the errors. In the error box specify the number of errors, and list them numerically in the order in which they appear in the form. For each error provide the reason for the error and a link that directs the user to the error. If the user attempts to submit the form with incomplete necessary fields, direct them to this error box.

Error boxes are styled as follows:

Rectangle with the same width as the form container. 4px border radius and a stroke of width 1px using the colour <badge style="background-color: #923534;">#923534</badge>. The box has 15px padding. In the top left corner there is a red circle with a white "x" icon that is 25px.

The box heading uses Heading 2 style, and the text uses the paragraph style. Error copy is displayed in a numbered list using <badge style="background-color: #923534;">#923534</badge>. Each error is a link which leads the user to the inline error on the page.  

<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p>Please verify the following fields:</p>
    <ul class="list-unstyled">
    <li><a href="#" class="alert-link">1 - Username already exists</a></li>
    <li><a href="#" class="alert-link">2 - Invalid Email</a></li>
    <li><a href="#" class="alert-link">3 - Password must match</a></li>
    </ul>
</section>

<codeblock html='
    <section class="alert alert-danger alert-icon-border">
        <h2>Field error or required</h2>
        <ul class="list-unstyled">
        <li><a href="#" class="alert-link">1 - Username already exists</a></li>
        <li><a href="#" class="alert-link">2 - Invalid Email</a></li>
        <li><a href="#" class="alert-link">3 - Password must match</a></li>
        </ul>
    </section>
' react='' />

## Inline Errors

The input field border will be shown using the colour <badge style="background-color: #923534;">#923534</badge>. If there is an error on a button input, the label is displayed using this same colour.

Inline errors are displayed underneath the input field, and tell the user how to fix the error. Inline errors should be as succinct as possible and are limited to one line that fits under the input field.

Inline errors are styled as follows:

<label for="exampleInputText1">Username</label>
<input type="text" class="form-control is-invalid" aria-describedby="Text1Error" id="exampleInputText1" placeholder="Input Example">
<small id="Text1Error" class="form-text text-danger">This is the error message</small>

<codeblock html='
    <label for="exampleInputText1">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error" id="exampleInputText1" placeholder="Input Example">
    <small id="Text1Error" class="form-text text-danger">This is the error message</small>
' react='' />

"x" icon to the left of the error text. The error is placed 10px below the input field. Text is shown using Nunito Sans Regular at 14px font in <badge style="background-color: #923534;">#923534</badge>.

## Validation

Fields should be validated when the user has completed the required field information, but prior to the user submitting or completing the entire form.

## Required Fields

Inputs should be clearly indicated as optional or required.

If most fields in the form are required, indicate only the optional fields.

If most fields in the form are optional, indicate only the required fields.

Indications should be located beside the input field. The terms \(Required\) or \(Optional\) should be present only where necessary. Indicator text uses the colour: <badge style="background-color: #252525;">#252525</badge> and follows the same typography design as labels.
