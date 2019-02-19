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

Breadcrumbs allow users to quickly navigate among sections and categories within a website, and therefore encourage browsing throughout the site. Only use breadcrumbs on a site with multiple levels of navigation.

The breadcrumbs in this design system are location-based, which is a representation of the site's information architecture. Location-based breadcrumbs are less confusing and more usable than path-based breadcrumbs which would represent the user's history navigating a web site.

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

## Accessibility Considerations
To assist in wayfinding, add the attribute `aria-label="breadcrumb"` to the `<nav>` element, and add the attribute `aria-current="page"` to the last item of the set.

</doctabpanel>
    <doctabpanel type="design">
          
Breadcrumbs in this design system are as follows:

Each item in the breadcrumb trail is a link, except the last item which is standard text.

Between each pair of items there is a chevron icon coloured <badge style="background-color: #A0A0A0;color:black">#A0A0A0</badge>, with spacing of 12px on either side.

<breadcrumb>
    <breadcrumbitem><a href="#">First Page</a></breadcrumbitem>
    <breadcrumbitem><a href="#">Second Page</a></breadcrumbitem>
    <breadcrumbitem active="true">Current Page</breadcrumbitem>
</breadcrumb>

</doctabpanel>
    </documentationtabs>


