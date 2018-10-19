---
path: "/devcomponent/css-tables"
subnav: "2/CSS/CSS/23"
lang: "en"
title: "CSS Tables"
---

#Tables
Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.

## Examples

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

Using the most basic table markup, here's how `.table`-based tables look in Bootstrap. **All table styles are inherited in Bootstrap 4**, meaning any nested tables will be styled in the same manner as the parent.
<htmltableexample1 />

You can also invert the colors—with light text on dark backgrounds—with `.table-dark`.
<htmltableexample2 />

## Table head options

Similar to tables and dark tables, use the modifier classes `.thead-light` or `.thead-dark` to make `<thead>`s appear light or dark gray.
<htmltableexample3 />

## Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.
<htmltableexample4 />

.
<htmltableexample5 />

## Bordered table

Add `.table-bordered` for borders on all sides of the table and cells.
<htmltableexample6 />

.
<htmltableexample7 />

## Borderless table

Add `.table-borderless` for a table without borders.
<htmltableexample8 />

`.table-borderless` can also be used on dark tables.
<htmltableexample9 />

## Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.
<htmltableexample10 />

.
<htmltableexample11 />

## Small table

Add `.table-sm` to make tables more compact by cutting cell padding in half.
<htmltableexample12 />

.
<htmltableexample13 />

## Contextual classes

Use contextual classes to color table rows or individual cells.
<htmltableexample14 />

Regular table background variants are not available with the dark table, however, you may use [text or background utilities] to achieve similar styles.
<htmltableexample15 />

##### Conveying meaning to assistive technologies
Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.

Create responsive tables by wrapping any `.table` with `.table-responsive{-sm|-md|-lg|-xl}`, making the table scroll horizontally at each `max-width` breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.

Note that since browsers do not currently support range context queries, we work around the limitations of min- and max- prefixes and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.
<htmltableexample16 />

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl}`.

##### Vertical clipping/truncation
Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.
<htmltableexample17 />

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**
<htmltableexample18 />

.
<htmltableexample19 />

.
<htmltableexample20 />
