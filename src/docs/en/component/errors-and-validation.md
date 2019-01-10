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

## Error Boxes

The error box provides a summary of validation errors. After a user has submitted a form, this box will show applicable errors in particular fields. The error box appears at the top of the form. 

Each error listed in the box is a link to that respective input field. Error messaages should be concise but descriptive of the error. More information is provided inline. 

## Inline Errors

Inline errors should be displayed in such a way that it is clear to the user that they have made an error, and what and where that error is. To display errors in a form submission, use both error boxes and inline errors. For each error, copy used for both the error box and the inline error should be identical.

Input errors are displayed underneath the input field, and tell the user how to fix the error. Inline errors should be as succinct as possible and are limited to one line that fits under the input field.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Error Boxes

The error box uses the `.alert`,`.alert-danger` and `.alert-danger-banner` classes to create the component. Use the `.alert-link` to apply the correct styling to error links. 

<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p>Please verify the following fields:</p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Username already exists</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>

```html
<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p>Please verify the following fields:</p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Username already exists</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>
```

## Inline Errors

Inline errors use the `.is-invalid` class to add error styling to the specified form element. 

Microcopy text that provides information to the user is styled using the `.invalid-feedback` class. Use `.aria-describedby` to associate the microcopy with the invalid input. Reference the [Text Inputs](component/text-inputs) page for more information on Microcopy. 

<div class="form-group">
    <label for="exampleInputText1-html">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Username already exists</small>
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Agree to Terms and Conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Custom radio 1</label>
</div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Custom radio 2</label>
    <small id="RadioError-html" class="invalid-feedback">You must select one option</small>
</div>


```html
<div class="form-group">
    <label for="exampleInputText1-html">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Username already exists</small>
</div>                

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Agree to Terms and Conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Custom radio 1</label>
</div> 

<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Custom radio 2</label>
    <small id="RadioError-html" class="invalid-feedback">You must select one option</small>
</div>
```

## Validated Inputs

Vaalidated inputs use the `.is-valid` class to show that the information provided in the input is valid. 

Microcopy text that provides information to the user is styled using the `.valid-feedback` class. Use `.aria-describedby` to associate the microcopy with the valid input. 

<div class="form-group">
    <label for="exampleInputText2-html">Username</label>
    <input type="text" class="form-control is-valid" aria-describedby="Text1Error-html" id="exampleInputText2-html" placeholder="aurora.design">
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2-html">
    <label class="custom-control-label" for="customCheck2-html">Custom check</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3-html" name="customRadio2-html" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3-html">Custom radio 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4-html" name="customRadio2-html" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4-html">Custom radio 2</label>
</div>

```html
<div class="form-group">
    <label for="exampleInputText2-html">Username</label>
    <input type="text" class="form-control is-valid" aria-describedby="Text1Error-html" id="exampleInputText2-html" placeholder="aurora.design">
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2-html">
    <label class="custom-control-label" for="customCheck2-html">Custom check</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3-html" name="customRadio2-html" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3-html">Custom radio 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4-html" name="customRadio2-html" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4-html">Custom radio 2</label>
</div>
```

</doctabpanel>
    <doctabpanel type="design">
    

## Error Boxes
          
Error boxes are styled as follows:

<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p>Please verify the following fields:</p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Username already exists</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>

Rectangle with the same width as the form container. 4px border radius and a stroke of width 1px using the colour <badge style="background-color: #923534;">#923534</badge>. The box has 15px padding. In the top left corner there is a red circle with a white "x" icon that is 25px.

The box heading uses Heading 2 style, and the text uses the paragraph style. Error copy is displayed in a numbered list using <badge style="background-color: #923534;">#923534</badge>. Each error is a link which leads the user to the inline error on the page.  

## Inline Errors

The input field border will be shown using the colour <badge style="background-color: #923534;">#923534</badge>. If there is an error on a button input, the label is displayed using this same colour.

Inline errors are styled as follows:

"x" icon to the left of the error text. The error is placed 10px below the input field. Text is shown using Nunito Sans Regular at 14px font in <badge style="background-color: #923534;">#923534</badge>.

<label for="exampleInputText1-design">Username</label>
<input type="text" class="form-control is-invalid" aria-describedby="Text1Error-design" id="exampleInputText1-design" placeholder="aurora.design">
<small id="Text1Error-design" class="invalid-feedback">Username already exists</small>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-design" aria-describedby="CheckboxError-design">
    <label class="custom-control-label" for="customCheck1-design">Agree to Terms and Conditions</label>
    <small id="CheckboxError-design" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>


<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-design" name="customRadio-design" class="custom-control-input is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio1-design">Custom radio 1</label>
    </div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-design" name="customRadio-design" class="custom-control-input  is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio2-design">Custom radio 2</label>
    <small id="RadioError-design" class="invalid-feedback">You must select one option</small>
</div>


## Validated Inputs

When a user has corrected input errors, the error box disappears and individual inputs show the user that the error was corrected. 

Validated Inputs are styled as follows:

The input field border will be shown using the colour <badge style="background-color: #2B542C;">#2B542C</badge>. If there is an error on a button input, the label is displayed using this same colour.

The text with information about the error disappears from below the input field. 

<label for="exampleInputText2">Username</label>
<input type="text" class="form-control is-valid" aria-describedby="Text1Error" id="exampleInputText2" placeholder="aurora.design">

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Custom check</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio2" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3">Custom radio 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio2" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4">Custom radio 2</label>
</div>

</doctabpanel>
    </documentationtabs>

