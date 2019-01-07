---
path: "/component/avatars-and-thumbnails"
subnav: "2/Standard/Standard/1"
lang: "en"
title: "Avatars and thumbnails"
---

<helmet>
<title> Images, Avatars and Thumbnails - Aurora Design System </title>
</helmet>


# Images, Avatars and Thumbnails

## Images

Images can have different sizing depending on page layout and content. Specific classes can be used for block, inline or full-width images to easily fit within the site's existing grid layout. 

Block images are separated from other elements on the page \(i.e. text\) and are typically centered with a set padding. In a layout including text, the text will continue on the next line after the image.

Inline images are aligned vertically with other elements on the page \(i.e. text\), and may be left or right aligned. Inline images only have specified padding for left and right borders. They flow along with text content, and the text will be wrapped around the remaining space around the image.

Full-width images extend from one end of the content area to the other. Sometimes referred to as a hero image.

## Avatars

Avatars are square, small images used to identify users on the site or application. Avatars are often combined with the user's profile and other components such as cards, comments, and buttons.

## Thumbnails

Thumbnails are small versions of an image that are used as previews to content. They are often combined with other components such as cards, comments, image previews, etc.

<documentationtabs remove="react">
    <doctabpanel type="html">
        

## Images

Images in Aurora are made responsive with `.img-fluid. max-width: 100%;` and `height: auto;` so that the image scales with the parent element.

Block images can be aligned using the `.float-right` `.float-left` or `.mx-auto` (centered).

<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Image sizing example" class="img-fluid mx-auto">
</div>

```html
<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Image sizing example" class="img-fluid">
</div>
```
     
## Avatars

Avatars use the `.avatar` class to apply styling to an image. 

Avatars have two alternate sizing classes: small `.avatar-sm` and large `.avatar-lg`.

<img alt="small avatar" class="avatar avatar-sm d-inline" src="https://bit.ly/2GLjkzx">

<img alt="medium avatar" class="avatar d-inline" src="https://bit.ly/2GLjkzx">

<img alt="large avatar" class="avatar avatar-lg d-inline" src="https://bit.ly/2GLjkzx">

```html 
<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">
    
<img alt="medium avatar" class="avatar" src="https://bit.ly/2GLjkzx">

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">
```
    

## Thumbnails

Thumbnails use the class `.img-thumbnail` to add 1px border and 1px border radius to the image. 

<img src="https://bit.ly/2LFHA5a" alt="thumbnail class example" class="img-thumbnail" style="width: 115px; height: 115px;">

```html
<img class="img-thumbnail" src="https://bit.ly/2LFHA5a" alt="thumbnail class example"  style="width: 115px; height: 115px;">
```

</doctabpanel>
      <doctabpanel type="design">

## Avatars

Avatars are used in three sizes and styled as follows:

<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">

**Small:** Square image with corners rounded by 4px. Sized at 26 x 26 pixels.

Best used on small components where the user would need to be identified, such as tags or chat.

<img alt="medium avatar" class="avatar" src="https://bit.ly/2GLjkzx">

**Medium:** Square image with corners rounded by 4px. Sized at 50 x 50 pixels.

Best used in combination with other components such as comments, chat, cards and anywhere else you would need to identify the user.

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">

**Large**: Square image with corners rounded by 4px. Sized at 115 x 115 pixels.

Best used directly on the user's profile.


## Thumbnails

Thumbnails are styled as follows:

<img src="https://bit.ly/2LFHA5a" alt="thumbnail class example" class="img-thumbnail" style="width: 115px; height: 115px;">

Thumbnails are always square with a border radius 1px. They have a border width of 1px using the colour <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. They are sized at 115 x 115 pixels

Thumbnails do not crop the image but simply re-scale it. Thumbnails are typically left-aligned when combined with other components.
    </doctabpanel>
</documentationtabs>




