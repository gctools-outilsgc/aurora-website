---
path: "/component/pagination-scrolling"
subnav: "3/Navigation/Navigation/7"
lang: "en"
title: "Pagination and scrolling"
---

<helmet>
<title> Pagination and Scrolling - Aurora Design System </title>
</helmet>

# Pagination and Scrolling

There are two ways to present content on a page: scrolling and pagination. Each has benefits and disadvantages, and you should pick the one which matches the type and context of the content you are presenting.

## Scrolling

Scrolling presents content on a single page, which the user proceeds through by moving up and down the page. Scrolling is best used when the content is a single and continuous piece, for example an article or tutorial. Scrolling also works well for content streams. You should choose to use scrolling when the information is closely related and has the same level of detail. It is easier for the user to scan the entire piece of content by scrolling rather than making them click to continue viewing the content.

You should organize the page structure so that the most important information appears at the top; a brief description of the content at the beginning of the page gives the user an idea of what will appear further down, and gives them a reason to scroll.

## Pagination

Pagination splits content into multiple discrete pages. It is best used when the user is trying to accomplish a goal, for instance trying to find a particular article from a list. Breaking the content list into multiple pages stops the user from feeling overwhelmed. A user can see the size of the data set, so they know how much more content there is to investigate. Pagination also allows the user to feel more in control of the content they are viewing as they can decide whether or not to click to the next page. Every click should lead the user closer to achieving their goal.


<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Overview
We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive aria-label for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
        </a>
        </li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation pages"> 
    <ul class="pagination">
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
        </a>
        </li>
    </ul>
</nav>
```
    
Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes and the `.sr-only` utility.

## Disabled and active states
Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
            <span>Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span>Next</span>
        </a>
        </li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
        <span>Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
        <span>Next</span>
        </a>
        </li>
    </ul>
</nav>
```

</doctabpanel>
    <doctabpanel type="design">
    
Pagination is styled as follows:

Secondary button on the left with the copy "Prev." With numbers in the middle and another secondary button on the right with the copy "Next"

The numbers are displayed with Nunito Sans Bold at 14px. Each number has padding of 10px.

The active page number is shown in a rectangle with a padding of 10px, with a border radius of 4px. The box is displayed using the same colour as primary buttons <badge style="background-color: #002D42">#002D42</badge>, and the number uses white text.

<pagination aria-label="Page navigation example">
    <paginationitem>
        <paginationlink href="#example">
        « <!-- previous="true" doesn't work, this needs a solution  -->
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        1
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        2
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        3
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        4
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        5
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        »
        </paginationlink>
    </paginationitem>
</pagination>

## Best Practices

Through pagination, a user should be able understand the amount of content there is; you should include a link to the last page of the content in the pagination bar, unless the data set fluctuates in size. Also include a link to the first page on every page.

Each page should contain the same amount of objects. You may include an option for the user to change how many objects are shown on each page.

The user should be able to clearly tell which page they are currently on. Place this number in the middle of the pagination bar and give it the heaviest visual weight. The user should also be able to see what pages they have already viewed so they do not have to revisit content that they have already seen. You can show this by changing the colour, typically a secondary colour, of already visited pages versus pages the user has yet to visit.

</doctabpanel>
    </documentationtabs>
   
