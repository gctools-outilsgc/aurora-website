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

<documentationtabs>
    <doctabpanel type="html">
        

## Example

Badges scale to match the size of the immediate parent element by using relative font-sizing and `em` units.
<htmlbadge1 />

Badges can be used as part of links or buttons to provide a counter.
<htmlbadge2 />

## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.
<htmlbadge3 />

## Accessbility considerations
        
When coding badges, the alternative text that will be read by screen readers should also include context. For example, the badge should read "40 unread emails" instead of just "40".

<codeblock html='<a href="#">
  Profile <span class="badge badge-secondary">9</span>
  <span class="sr-only">unread messages</span>
</a>
' react='<a href="#">
  Profile <Badge color="secondary">9</Badge>
  <span class="sr-only">unread messages</span>
</a>'></codeblock>

<codeblock html='<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
' react='<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="light">Light</Badge>
<Badge color="dark">Dark</Badge>'></codeblock>
        
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
