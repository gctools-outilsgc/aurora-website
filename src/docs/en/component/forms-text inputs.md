---
path: "/component/text-inputs"
subnav: "4/Forms/Formulaires/6"
lang: "en"
title: "Text inputs"
---

# Text Inputs

**Input fields** allow users to provide information by inputting text into a page. Information can be entered through a variety of different input fields such as text fields (text area), checkboxes, radio buttons, and date inputs. Input fields typically appear in forms and should clearly indicate that users can input information through labels, tooltips, placeholder text, and appropriate styling.

## Text Area

The text field a user has selected should indicated visually. Outlining the selected text box in blue shows the user which field they are inputting without too much visual weight.

When there is an error within a text field, outlining the field in red shows a greater level of significance than blue. See errors and validation for more information about input errors.

Text input fields may also include interactive elements to the right of the field. Interactive elements will always be displayed using an icon, such as an eye to demonstrate a visible or hidden password.

<formgroup> <!--Need hidden/visible indicator! -->
    <input type="password" name="password" id="examplePassword" placeholder="Enter password" style="height: 42px" aria-label="example password input"/>
</formGroup>

Text fields are styled as follows:

<formgroup>
    <input placeholder="Text field" style="height: 42px" aria-label="example text input" />
</formgroup>

Normal: Rectangle with a height of 42px, and a border radius of 4px. Stroke width of 1px with the colour <badge style="background-color: #CCCCCC">#CCCCCC</badge>. There is 10px of padding between the field and the label. The input field a padding of 15px by 12px.

<formgroup>
    <input placeholder="Text field" style="height: 42px" aria-label="example text input" />
</formgroup>

Focus: Rectangle with a height of 42px, and a border radius of 4px. Stroke width of 1px <badge style="background-color: #269ABC">#269ABC</badge>. There is 10px of padding between the field and the label. The input field a padding of 15px by 12px.

## Select Field

Select fields are a drop down menu of specific options. They are intended to provide users with easy completion when there are only a few options.

Select fields are styled as follows:

*Select field component*

Normal: Rectangle with a height of 42px and a border radius of 4px. Stroke width of 1px coloured <badge style="background-color: #CCCCCC">#CCCCCC</badge>. The drop down control is right-aligned 27px from the edge of the input. The line on the edge is 1px coloured <badge style="background-color: #CCCCCC">#CCCCCC</badge> and extends until 5px from the top and bottom of the input. 15 by 27 by 15 by 12. The chevron icon is aligned with the text and is 9px from the left edge, and 18px from the top and bottom.

*Focus select field component*

Focus: Rectangle with a height of 42px and a border radius of 4px. Stroke width of 1px coloured #269ABC. The drop down control is right-aligned 27px from the edge of the input. The line on the edge is 1px coloured <badge style="background-color: #CCCCCC">#CCCCCC</badge> and extends until 5px from the top and bottom of the input. 15 by 27 by 15 by 12. The chevron icon is aligned with the text and is 9px from the left edge, and 18px from the top and bottom.
