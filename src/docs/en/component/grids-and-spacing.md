---
path: "/component/grids-and-spacing"
subnav: "2/Standard/Standard/7"
lang: "en"
title: "Grids and Spacing"
---
<helmet>
<title> Grids and Spacing - Aurora Design System </title>
</helmet>

# Grids and Spacing

This design system uses the same grid framework as the [Web Experience Toolkit](http://wet-boew.github.io/wet-boew-styleguide/v4/design/grids-en.html), which was based on the [Bootstrap framework](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options) to create page layouts. These systems include responsive grids, including sizes for mobile, tablets and desktops, and is built using flexboxes and containers.

The grid system relies on a series of containers, columns and rows to build layout and align content. Containers center and horizontally pad content. Columns are the framework the content placement is built on. Rows act as wrappers for the columns.  

The grid framework contains 12 columns that scale according to the viewport of the user's device. Further customization of grids and column layouts, such as offsetting and nesting, is possible through the Web Experience Toolkit's framework. Viewport width is in pixels, and  does not change the font size.

<documentationtabs>
      <doctabpanel type="html">
          
<codeblock react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="primary" style="width: 100%">Col 1</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 2</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 3</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 4</Button></Col>
    </Row>
</Container> ' html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
        </div>
    </div>
'></codeblock>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 1</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-outline-primary btn-block">Col 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
        </div>
    </div>' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="primary" style="width: 100%">Col 1</Button></Col>
        <Col xs="6"><Button outline="true" color="primary" style="width: 100%">Col 2</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 3</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 4</Button></Col>
    </Row>
</Container> '></codeblock>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">This is the third and largest column due to auto-sizing</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 4</button>
            </div>
        </div>
    </div>' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="primary" style="width: 100%">Col 1</Button></Col>
        <Col xs="6"><Button outline="true" color="primary" style="width: 100%">Col 2</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 3</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 4</Button></Col>
    </Row>
</Container> '></codeblock>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 4</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary btn-block">Col 4</button>
            </div>
        </div>
    </div>
' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="primary" style="width: 100%">Col 1</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 2</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 3</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 4</Button></Col>
    </Row>
    <Row style="margin-top: 10px">
        <Col><Button color="primary" style="width: 100%">Col 1</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 2</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 3</Button></Col>
        <Col><Button color="primary" style="width: 100%">Col 4</Button></Col>
    </Row>
</Container> '></codeblock>


 </doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Auto-layout Grid Examples

### Equal-width

If the size of columns are not defined, they will automatically be set to equal widths.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 1</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 2</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 3</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 4</button></mdcol>
    </row>
</container>

### Unequal-width

When you set the size for one column, sibling columns will automatically resize.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 1</button></mdcol>
        <mdcol xs="6" className="mb-2"><button outline="true" color="primary" style="width: 100%">Col 2</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 3</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 4</button></mdcol>
    </row>
</container>


### Variable Width Content

You can set columns to automatically fit the content they contain. Sibling columns will automatically resize.

<div class="container">
    <div class="row">
        <mdcol className="mb-2"><button color="primary" class="btn-block">Col 1</button></mdcol>
        <mdcol className="mb-2"><button color="primary" class="btn-block">Col 2</button></mdcol>
        <mdcol xs="auto" className="mb-2"><button color="primary" class="btn-block">This is the third and largest column due to auto-sizing</button></mdcol>
        <mdcol className="mb-2"><button color="primary" class="btn-block">Col 4</button></mdcol>
    </div>
</div>

### Equal-width Multi-row

Multiple equal columns and rows can be set with a line break.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 1</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 2</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 3</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 4</button></mdcol>
    </row>
    <row style="margin-top: 10px">
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 1</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 2</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 3</button></mdcol>
        <mdcol className="mb-2"><button color="primary" style="width: 100%">Col 4</button></mdcol>
    </row>
</container>

</doctabpanel>
    </documentationtabs>


