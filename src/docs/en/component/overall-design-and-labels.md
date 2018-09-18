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

<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="with a placeholder">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="password placeholder">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputSelect" class="col-sm-2 col-form-label">Select</label>
    <div class="col-sm-10">
      <select class="form-control" id="inputSelect">
        <option selected></option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputSelect2" class="col-sm-2 col-form-label">Select</label>
    <div class="col-sm-10">
        <select class="custom-select" id="inputSelect2" multiple>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Text Area</label>
    <div class="col-sm-10">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlFile1" class="col-sm-2 col-form-label">File</label>
    <div class="col-sm-10">
      <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radio Buttons</legend>
      <div class="col-sm-10">
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
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button href="#example">Se connecter</button>
    </div>
  </div>
</form>



## Labels

Users need to be able to easily read labels and intuitively understand how the label is related to its field. Labels should use clear but concise language, and provide enough information for the user to accurately complete the required information.

If additional information is necessary beyond a label, this information should be displayed in a separate tooltip or microcopy.

### Placement of Labels

Labels should follow the vertical format of the form. Place labels above their respective field. Group a label with its field so that there is a clear distinction between fields. Do not use placeholder text for labels as this prevents the user from properly reviewing the form. Labels have a bottom margin of 10px from the input field.

### Text in Labels

How labels are written affects their legibility. Do not write labels in all caps as this diminishes their readability. Labels should not be the same as placeholder text, they should both be separate. Don’t use symbols to represent required content.

## Placeholder Text

Placeholder text is used only to provide supplemental information or additional guidance on how to complete a text field. Placeholder text DOES NOT replace a label or microcopy. Placeholder text should only be used if an example of a text input improves the user experience, rather than as a replacement to other important information indicators.

Placeholder text is text that appears directly in the input field. This text is not meant to be used as a label, but can provide supplemental information or an example for the user.

Placeholder text is meant to help the user more accurately complete the field rather than be the primary indicator of field content. It may also be complementary to micro-copy, with placeholder text providing an example, and micro-copy providing additional information or context.

As soon as the user starts typing in the field, the placeholder text should disappear.

Placeholder text is styled using Nunito Sans Regular at 14px, <badge style="background-color: #666666;">#666666</badge>


For more information about placeholder text styles, refer to the [_Typography_](typography.md) section.

## Micro-Copy

Microcopy is text below and input field that provides additional information about that field. Microcopy is meant to be brief sentences that instruct the user how to complete the field.

Micro-copy is styled as follows:

10px below the input field. The text is displayed the same as placeholder text; Nunito Sans Regular at 14px, <badge style="background-color: #666666;">#666666</badge>

If there is more than one line the text wraps and has a leading of 18pts.

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
<form>

<codeblock
    html='
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
    <form>'
    react='
    <Form>
       <FormGroup>
          <Label for="exampleEmail">Email address</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>We will never share your email with anyone else.</FormText>
        </FormGroup>
    </Form>
    ' />
</codeblock>

## Grouping / Field Sets

To help users better understand a form, it may be useful to group inputs into categories or field sets. Field sets should be grouped visually on the page and labelled using Header 3 with a divider underneath.

## Step Indicators
If possible, it is recommended to limit forms to one page. If a form has more than one page, use a [step indicator](..\..\docs\en\component\progress-indicators.md).

If a form has more than one page, it is recommended to provide the user with a visual representation of progression so that they are aware of their level of completion. Styling for step indicators is written in its own section of this documentation.

![Step indicator component at step 1](../../../img\components\steps indicator_1.png)

![Step indicator component at step 2](../../../img\components\steps indicator_2.png)

![Step indicator component at step 3](../../../img\components\steps indicator_3.png)

## Navigation

Navigation to different pages may be necessary to include in a form. If they are related to a specific field, for example "Forgot password?", include the link inline and underneath the related field. If the link is related to the entire form, for example "Register here", include the link at the bottom of the form in a way that is visually separate.
