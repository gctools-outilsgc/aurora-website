---
path: "/component/nav-breadcrumbs"
subnav: "3/Navigation/Navigation/1"
lang: "en"
title: "Breadcrumbs"
---

# Breadcrumbs

Breadcrumbs are a secondary navigation element that identify to a user their location on a website or application. Breadcrumbs are a visual representation of the site's hierarchy of information.

Breadcrumbs allow users to quickly navigate among sections and categories within a website, and therefore encourages browsing throughout the site. You would only use breadcrumbs on a site with multiple levels of navigation.

The breadcrumbs in this design system are location-based, which is a representation of the site's original architecture. Location-based breadcrumbs are less confusing and more usable than path-based breadcrumbs which would represent the user's history navigating a web page.

Breadcrumbs should be complimentary to primary navigation and should never be used to replace overall navigation elements. Breadcrumbs are subtle and should not take visual prominence over the page. All items in the breadcrumb list should be links except for the last item.

Breadcrumbs in this design system are as follows:

<breadcrumb>
    <breadcrumbitem><a href="#">Main Page</a></breadcrumbitem>
    <breadcrumbitem><a href="#">Secondary Page</a></breadcrumbitem>
    <breadcrumbitem active="true">Current Page</breadcrumbitem>
</breadcrumb>

Each layer of breadcrumbs is styled using link text. The last item is never a link since it is the current page and not clickable. The last item is styled using standard text.

In between each layer there is a chevron icon coloured <badge style="background-color: #A0A0A0; color: white">#A0A0A0</badge>

Each layer has spacing of 12px on either side of the chevron.
