---
path: "/component/search"
subnav: "3/Navigation/Navigation/8"
lang: "en"
title: "Search"
---

<helmet>
<title> Search - Aurora Design System </title>
</helmet>

# Search

Search bars help the user find relevant content within your site or application. Search bars are a universal feature that is expected on most sites, particularly ones with large amounts of content.

Search bars are located in the top-right of the webpage, and function similarly to a form field, where the user can input keywords to create an output from the system.

Search bars in this system use placeholder text using the term _Search_

<documentationtabs remove="react">
    <doctabpanel type="html">
          
We have two custom variations of Search fields. 
    
<div class="form-inline search-form mb-3 mt-3">
    <label for="search" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search" placeholder="Search">
    <span class="search-form-addon">
    </span>
</div>

<div class="form-inline search-form search-form-round">
    <label for="search2" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search2" placeholder="Search">
    <span class="search-form-addon"></span>
</div>

```html
<div class="form-inline search-form">
    <label for="search" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search" placeholder="Search">
    <span class="search-form-addon"></span>
</div>

<div class="form-inline search-form search-form-round">
    <label for="search2" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search2" placeholder="Search">
    <span class="search-form-addon"></span>
</div>
```

</doctabpanel>
    <doctabpanel type="design">
          
There are two style options for search:

**Option 1**

Text field with a padding of 12px. On the right of the field there is a search icon that serves as an action button.

<div class="form-inline search-form mb-3">
    <label for="search" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search" placeholder="Search">
    <span class="search-form-addon">
    </span>
</div>


**Option 2**

The same as option 1 with a border radius of 17px.

<div class="form-inline search-form search-form-round">
    <label for="search2" class="sr-only">Search</label>
    <input type="text" class="form-control" id="search2" placeholder="Search">
    <span class="search-form-addon">
    </span>
</div>

</doctabpanel>
    </documentationtabs>



