---
path: "/component/breadcrumbs"
subnav: "3/Navigation/Navigation/1"
lang: "en"
title: "Breadcrumbs"
---

<helmet>
<title> Breadcrumbs - Aurora Design System </title>
</helmet>

# Breadcrumbs

Breadcrumbs are a secondary navigation element that identify to a user their location on a website or application. Breadcrumbs are a visual representation of the site's hierarchy of information.

Breadcrumbs allow users to quickly navigate among sections and categories within a website, and therefore encourages browsing throughout the site. You would only use breadcrumbs on a site with multiple levels of navigation.

The breadcrumbs in this design system are location-based, which is a representation of the site's original architecture. Location-based breadcrumbs are less confusing and more usable than path-based breadcrumbs which would represent the user's history navigating a web page.

Breadcrumbs should be complimentary to primary navigation and should never be used to replace overall navigation elements. Breadcrumbs are subtle and should not take visual prominence over the page. All items in the breadcrumb list should be links except for the last item.

<documentationtabs remove="react">
      <doctabpanel type="html">
          
Breadcrumbs indicate the current page's location within a navigational hierarchy. 

<breadcrumb>
    <breadcrumbitem><a href="#">First Page</a></breadcrumbitem>
    <breadcrumbitem><a href="#">Second Page</a></breadcrumbitem>
    <breadcrumbitem active="true">Current Page</breadcrumbitem>
</breadcrumb>

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">First Page</a></li>
        <li class="breadcrumb-item"><a href="#">Second Page</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
</nav>
```

## Accessibility
Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

</doctabpanel>
    <doctabpanel type="design">
          
Breadcrumbs in this design system are as follows:

Each layer of breadcrumbs is styled using link text. The last item is never a link since it is the current page and not clickable. The last item is styled using standard text.

In between each layer there is a chevron icon coloured <badge style="background-color: #A0A0A0;color:black">#A0A0A0</badge>

Each layer has spacing of 12px on either side of the chevron.

<breadcrumb>
    <breadcrumbitem><a href="#">First Page</a></breadcrumbitem>
    <breadcrumbitem><a href="#">Second Page</a></breadcrumbitem>
    <breadcrumbitem active="true">Current Page</breadcrumbitem>
</breadcrumb>

</doctabpanel>
    </documentationtabs>


