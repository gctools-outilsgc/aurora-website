---
path: "/component/overall-design-and-labels"
subnav: "4/Forms/Formulaires/1"
lang: "en"
title: "Form design and labels"
---

<helmet>
<title> Form Design and Labels - Aurora Design System </title>
</helmet>

# Form design and labels

## Design

Forms should be designed vertically as this improves their scanability. When possible, a form should be one column.

Information can be presented in multiple columns if they are grouped together \(i.e. first name and last name fields\).

Inputs should be grouped and sequenced in the most logical way possible. If multiple inputs are required for one grouping of information \(i.e. street address, postal code, and province\), these inputs should be placed in close proximity to each other.

Typically forms start with the most important or common information such as username, password, first or last name, email address, etc.

For complicated forms, information should be displayed using multiple steps or pages. If this is the case, it is important to include a progress bar throughout the form, as well as a way to navigate both forwards and backwards between steps.

<div class="card mb-3">
  <div class="card-body">
      <h3 class="card-title h5">Example form</h3>
<form>
  <div class="form-group">
    <label for="inputEmail3">Email</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
    <small id="emailHelp1" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="inputPassword3">Password</label>
    <input type="password" class="form-control" id="inputPassword3" >
  </div>

  <div class="form-group">
    <label for="inputSelect">Select</label>
    <select class="form-control" id="inputSelect">
      <option selected></option>
      <option>...</option>
    </select>
  </div>

  <div class="form-group">
    <label for="inputSelect2">Select</label>
    <select class="custom-select" id="inputSelect2" multiple>
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Text Area</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <div class="custom-file">
        <label class="custom-file-label" for="customFile">File upload</label>
        <input type="file" id="file" class="custom-file-input" aria-label="upload a file">
        <span class="custom-file-control"></span>
    </div>
  </div>

  <div class="form-group">
    <fieldset>
      <legend>Radio Buttons</legend>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
    </fieldset>
  </div>

  <div class="form-group">
    <fieldset>
      <legend>Checkbox</legend>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1">
          <label class="form-check-label" for="gridCheck1">
            Example checkbox
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck2" disabled>
          <label class="form-check-label" for="gridCheck2">
            Example disabled checkbox
          </label>
        </div>
    </fieldset>
  </div>
  <div class="form-group">
    <button color="primary" href="#example">Submit</button>
  </div>
</form>
  </div>
</div>



## Labels

Users need to be able to easily read labels and intuitively understand how the label is related to its field. Labels should use clear but concise language, and provide enough information for the user to accurately complete the required information.

If additional information is necessary beyond a label, this information should be displayed in a separate tooltip or microcopy.

### Placement of Labels

Labels should follow the vertical format of the form. Place labels above their respective field. Group a label with its field so that there is a clear distinction between fields. Do not use placeholder text for labels as this prevents the user from properly reviewing the form. Labels have a bottom margin of 10px from the input field.

### Text in Labels

How labels are written affects their legibility. Do not write labels in all caps as this diminishes their readability. Labels should not be the same as placeholder text, they should both be separate. Don’t use symbols to represent required content.


## Grouping / Field Sets

To help users better understand a form, it may be useful to group inputs into categories or field sets. Field sets should be grouped visually on the page and labelled using Header 3 with a divider underneath.

## Step Indicators
If possible, it is recommended to limit forms to one page. If a form has more than one page, use a [step indicator](..\..\docs\en\component\progress-indicators.md).

If a form has more than one page, it is recommended to provide the user with a visual representation of progression so that they are aware of their level of completion. Styling for step indicators is written in its own section of this documentation.

![Step indicator component at step 1](../../../img\components\steps_indicator_1.png)

![Step indicator component at step 2](../../../img\components\steps_indicator_2.png)

![Step indicator component at step 3](../../../img\components\steps_indicator_3.png)

## Navigation

Navigation to different pages may be necessary to include in a form. If they are related to a specific field, for example "Forgot password?", include the link inline and underneath the related field. If the link is related to the entire form, for example "Register here", include the link at the bottom of the form in a way that is visually separate.
