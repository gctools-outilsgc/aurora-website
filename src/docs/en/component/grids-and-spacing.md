---
path: "/component/grids-and-spacing"
subnav: "2/Standard/Standard/7"
lang: "en"
title: "Grids and spacing"
---
<helmet>
<title> Grids and Spacing - Aurora Design System </title>
</helmet>

# Grids and Spacing

This design system uses the same grid framework as the [Web Experience Toolkit](http://wet-boew.github.io/wet-boew-styleguide/v4/design/grids-en.html), which was based on the [Bootstrap framework](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options) to create page layouts. These systems include responsive grids, including sizes for mobile, tablets and desktops, and they're built using flexboxes and containers.

The grid system relies on a series of containers, columns and rows to build layout and align content. Containers center and horizontally pad content. Columns are the framework the content placement is built on. Rows act as wrappers for the columns.  

The grid framework contains 12 columns that scale according to the viewport of the user's device. Further customization of grids and column layouts, such as offsetting and nesting, is possible through the Web Experience Toolkit's framework. Viewport width is in pixels, and  does not change the font size.

## Auto-layout Grid Examples

### Equal-width

If the size of columns are not defined, they will automatically be set to equal widths.
 
<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2 gr-example"> Column 1 </mdcol>
        <mdcol className="mb-2 gr-example"> Column 2</mdcol>
        <mdcol className="mb-2 gr-example"> Column 3</mdcol>
        <mdcol className="mb-2 gr-example">Column 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
</div>
```

### Unequal-width

When you set the size for one column, sibling columns will automatically resize.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol xs="6" className="mb-2 gr-example"> Column 1 </mdcol>
        <mdcol className="mb-2 gr-example"> Column 2</mdcol>
        <mdcol className="mb-2 gr-example"> Column 3</mdcol>
        <mdcol className="mb-2 gr-example">Column 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col-6">
     Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
</div>
```

### Variable Width Content

You can set columns to automatically fit the content they contain. Sibling columns will automatically resize.

<div class="container">
    <div class="row">
        <mdcol className="mb-2 gr-example">Column 1</mdcol>
        <mdcol className="mb-2 gr-example">Column 2</mdcol>
        <mdcol xs="auto" className="mb-2 gr-example">This is the third and largest column due to auto-sizing</mdcol>
        <mdcol className="mb-2 gr-example">Column 4</mdcol>
    </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      This is the third and largest column due to auto-sizing
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
</div>
```

### Equal-width Multi-row

Multiple equal columns and rows can be set with a line break.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2 gr-example">Column 1</mdcol>
        <mdcol className="mb-2 gr-example">Column 2</mdcol>
        <mdcol className="mb-2 gr-example">Column 3</mdcol>
        <mdcol className="mb-2 gr-example">Column 4</mdcol>
    </row>
    <row style="margin-top: 10px">
        <mdcol className="mb-2 gr-example">Column 1</mdcol>
        <mdcol className="mb-2 gr-example">Column 2</mdcol>
        <mdcol className="mb-2 gr-example">Column 3</mdcol>
        <mdcol className="mb-2 gr-example">Column 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
  <div class="row">
    <div class="col">
     Column 1
    </div>
    <div class="col">
      Column 2
    </div>
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 4
    </div>
  </div>
</div>
```


          





