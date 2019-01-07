---
path: "/component/badges"
subnav: "2/Standard/Standard/2"
lang: "en"
title: "Badges"
---

<helmet>
<title> Badges - Aurora Design System </title>
</helmet>

# Badges

Badges are a very versatile component. For example, they can be used to show notifications, tag content, or display authors of content. 

Badges can be stylized as Tags or include images to create Chips. 

<documentationtabs remove="react">
    <doctabpanel type="html">

Badges use the `.badge` class. You can add modifier classes to change the colours of a badge. 

<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Light</span>
  <span class="badge badge-dark">Dark</span>
</div>

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
```

### Accessbility considerations
        
When coding badges, the alternative text that will be read by screen readers should also include context. For example, the badge should read "40 unread emails" instead of just "40".

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.
        
## Notification Badges

Badges scale to match the size of the immediate parent element by using relative font-sizing and `em` units.

Badges can be used as part of links or buttons to provide a counter.
        
<div class="mt-3 mb-3">
  <a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">unread messages</span>
  </a>
</div>

```html 
<a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">unread messages</span>
</a>
```

## Tags

Tags are a stylized version of badges. Tags tend to be used for more interactive elements. Add the `.badge-tag` class to a regular badge to turn it into a Tag. 

Some interactive elements you can add to your tags include links or remove buttons. 

<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>

```html
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>
```

## Chips

Chips are badges with an image. Add your image to the badge using the `<img>` element. 

They are used to show complex information (e.g. a user) in a compact space.

<span class="badge badge-primary badge-chip"><img alt="small user avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 1</span>
<span class="badge badge-primary badge-chip"><img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 2</span>

```html
<span class="badge badge-primary badge-chip"><img alt="small user avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 1</span>
<span class="badge badge-primary badge-chip"><img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 2</span>
```
    
</doctabpanel>
    <doctabpanel type="design">


Badges can use varying colours to convey different information to users. 

Badges have padding of 4px x 6.4px. Badges will have responsive sizing depending on the text. They have a border radius of 4px. 

Badges have varying colours, as seen below. Refer to [Colour](/component/colour) for more information on when to use certain colours. 

<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Light</span>
  <span class="badge badge-dark">Dark</span>
</div>
    

## Notification Badges

Notification badges in this design system appear as follows:

Rectangle with a width of 28px and height of 19px. Border radius of 8px. Background colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge>. Text colour of <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>. Text is centred within the rectangle.

<div class="mt-3 mb-3">
  <a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">unread messages</span>
  </a>
</div>


## Tags

Tags are a stylized form of badges. 

Tags are rectangular with a border radius of 4px. The left side of the tag is stylized using a triangle and white circle. Tags use the secondary colours in the chosen palette, and the text colour will be either black or white depending on the tag colour. Refer to [Colour](component/colour) for more information on which text colours to use.

Tags may also include a right-aligned remove button beside the text. This button is represented as a black/white circle with a transparent x.

Tags are sized to match the length of the keywords with padding of 7px on the top, right and bottom, and 10px on the left.

<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>
<br>

## Chips

Chips are similar to a regular badge but with an image. They are used to show complex information (e.g. a user) in a compact space. 

Chips are rectangular with a border radius of 4px. An avatar image is displayed on the left side of the chip. Chips are sized to match the length of the user's profile name. Chips have padding of 7px on all sides.

Chips have 3 different variations and are displayed as follows:

<span class="badge badge-primary badge-chip"><img alt="small user avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 1</span>
<span class="badge badge-primary badge-chip"><img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> User 2</span>

**Normal:** Rectangular box filled in with <badge style="background-color: ##002D42">##002D42</badge>. Black text. Small avatar \(26 x 26px\) aligned to the left.

**User-control:** Same as normal, but there is an additional remove icon on the right. This icon is <badge style="background-color: #4D5D6C;">#4D5D6C</badge> with a transparent x, and is right-aligned. Small avatar \(26 x 26px\) aligned to the left.

**Hover:** Same as the user-controlled chip but has a background colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge> and the remove icon is white with a transparent x. Small avatar \(26 x 26px\) aligned to the left.

</doctabpanel>
    </documentationtabs>
