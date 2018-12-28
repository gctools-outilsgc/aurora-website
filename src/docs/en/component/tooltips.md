---
path: "/component/tooltips"
subnav: "2/Standard/Standard/10"
lang: "en"
title: "Tooltips"
---
<helmet>
<title> Tooltips - Aurora Design System </title>
</helmet>

# Tooltips

## Usage

Tooltips are text labels containing informative text that appear when users hover over, long-press, or focus an element. Tooltips provide short descriptive text about their associated element.  

## Best Practices

Tooltips should be as short as possible and provide additional information for buttons or form inputs.

Tooltips are always used for supplemental information. Essential information that clarifies an action or demonstrates requirements for a form input, should always be immediately visible on the page.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Overview

Things to know when using the tooltip plugin:

- Tooltips rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include [popper.min.js]({{ site.cdn.popper }}) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js in order for tooltips to work!
- If you're building our JavaScript from source, it [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util).
- Tooltips are opt-in for performance reasons, so **you must initialize them yourself**.
- Tooltips with zero-length titles are never displayed.
- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering tooltips on hidden elements will not work.
- Tooltips for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.
- Tooltips must be hidden before their corresponding elements have been removed from the DOM.


## Examples
Hover over the links below to see tooltips:

<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

*Codeblock here* 

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.

And with custom HTML added. 

For more information about using tooltips, reference [Bootstrap's documentation](https://getbootstrap.com/docs/4.1/components/tooltips/).


</doctabpanel>
    <doctabpanel type="design">
          

## Styling

In their regular state, tooltips are styled as follows:

Tooltips are placed 12px away from the element it is describing. Tooltips are contained within a rectangle with a padding of 5px by 7px, with a border radius of 4px, and a fill colour of <badge style="background-color: #666666">#666666</badge> with a 90%. The text is displayed using Nunito Sans Regular at 14px in <badge style="background-color: #FFFFFF; color: black">#FFFFFF</badge>.

![Tooltip component](../../../img\components\tooltip.png)

</doctabpanel>
    </documentationtabs>


