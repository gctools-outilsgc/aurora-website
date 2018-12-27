---
path: "/component/file-upload"
subnav: "4/Forms/Formulaires/4"
lang: "en"
title: "File upload"
---

<helmet>
<title> File Upload - Aurora Design System </title>
</helmet>

# File Upload

File upload inputs are a combination of button and input field. They are included in forms where the user has the option to include files.

The user does not input text into the input field; it automatically gets filled with file information once a file has been chosen.

_Choose file_ is the action button to be selected by the user. Once clicked, the button opens a new window where the user can choose a file. File types are determined by the system parameters.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## File browser

We have a custom file uploader that requires additional JavaScript for full functionality. 

If you want more information about customizing this component, visit [Bootstrap's documentation](https://getbootstrap.com/docs/4.1/components/forms/#file-browser) about file browsers. 

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" aria-label="upload a file">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choose file</label>
</div>

```html
<div class="custom-file">
    <input type="file" id="file" class="custom-file-input">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choose file</label>
</div>
```

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          
          
File upload inputs have four states:

<br>
<br>

**Regular state:** The button uses the colour <badge style="background-color: #002D42">#002D42</badge>
shadow at 100% opacity, white text, with a border radius of 4px. Corners on the top and bottom right of the file upload button has a border radius of 0px. The button is aligned to the left of the field and includes the folder icon.

The input field is aligned to the right of the button. It is a 42px high rectangle with a border radius of 4px. The background colour is <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour is <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> with a drop shadow of 1px blur 20% opacity black. Text is aligned to the left of the input field and follows the standards for [placeholder text](typography.md). The field has a padding of 11px.


<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" aria-label="upload a file">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choose file</label>
</div>
<br>
<br>

**Hover state:** The button uses the colour <badge style="background-color: #002D42;">#002D42</badge> at 80% opacity, white text, with a border radius of 4px and padding of 15px.

The input field is aligned to the right of the button. It is a 42px high rectangle with a border radius of 4px. The background colour is <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour is <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Text is aligned to the left of the input field and follows the standards for [placeholder text](typography.md). The field has a padding of 11px.

**Focus state:** The button uses the colour <badge style="background-color: #002D42;">#002D42</badge> at 80% opacity, white text, with a border radius of 4px and padding of 15px. Includes a 3px stroke in the primary colour.

The input field is aligned to the right of the button. It is a 42px high rectangle with a border radius of 4px. The background colour is <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour is <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Text is aligned to the left of the input field and follows the standards for [placeholder text](typography.md). The field has a padding of 11px.

**Disabled state:** The button uses the colour <badge style="background-color: #002D42;">#002D42</badge> at 50% opacity, white text, with a border radius of 4px and padding of 15px.

The input field is aligned to the right of the button. It is a 42px high rectangle with a border radius of 4px. The background colour is <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, border colour is <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Text is aligned to the left of the input field and follows the standards for [placeholder text](typography.md). The field has a padding of 11px.

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" disabled aria-label="upload a file">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choose file</label>
</div>

</doctabpanel>
    </documentationtabs>


