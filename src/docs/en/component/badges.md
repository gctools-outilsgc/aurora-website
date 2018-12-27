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

Badges are used to show notifications and other alerts related to a particular element. Badges do not stand alone, but are combined with text, icons or buttons to show a change or action related to that feature. For example, a badge beside your Inbox link to show the number of unread emails.

<documentationtabs remove="react">
    <doctabpanel type="html">
        

## Example

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

## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.
<htmlbadge3 />

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


## Accessbility considerations
        
When coding badges, the alternative text that will be read by screen readers should also include context. For example, the badge should read "40 unread emails" instead of just "40".

### Conveying meaning to assistive technologies
Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

        
</doctabpanel>

<doctabpanel type="react">
      </doctabpanel>

<doctabpanel type="design">

Badges in this design system appear as follows:

Rectangle with a width of 28px and height of 19px. Border radius of 8px. Background colour of <badge style="background-color: #4D5D6C;">#4D5D6C</badge>. Text colour of <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>. Text is centred within the rectangle.

<div class="mt-3 mb-3">
  <a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">unread messages</span>
  </a>
</div>

<h2>Variations</h2>

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

</doctabpanel>
    </documentationtabs>
