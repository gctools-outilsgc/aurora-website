---
path: "/data/data-overview"
subnav: "1/Data/Données/1"
lang: "en"
title: "Overview"
---

# Data Overview

Data visualizations come in many forms, and are a visual means to represent a data set. The type of data visualization chosen should always be appropriate for the type of data used.

Data visualizations should aim to represent and answer one question. The goal is to provide a brief overview of the data, and tell a visual story that makes sense to the user. Graphs should be used to visually represent datasets in ways that tables cannot. If the data is easy to understand without a visualization, usually the simplest option \(a table\) is best.

*webpage image*

## Simplicity

A general rule for data visualizations is to keep the visual elements as simple as possible. Only necessary information such as labels, values, and bars or lines should be present. A key or legend should be provided for more complex data that may have multiple colours or types of information. Colours and other visual elements should always be kept to a minimum when possible.

Visuals should only enhance the data, and should never distract. Best practices include eliminating backgrounds, lightening grids, and reducing the number of colours used in a graph.

If one graph is too complex to represent a certain dataset, the data should be represented in multiple, simple graphs.

![Do image representing data simplicity](../../../img\do_dont\simplicity_do.png)

![Don't image representing data simplicity](../../../img\do_dont\simplicity_dont.png)

### Multiple Formats

When you use data visualizations, it is recommended to represent the data in multiple formats where possible. Regardless of the type of visualization you use, a simple data table, or other ways of viewing the raw data, should be available somewhere on the page. This allows users to view and analyze the data in a way that makes the most sense to them, as well as easily identify individual data points.

![Do image representing multiple formats](../../../img\do_dont\multiple formats_do.png)

![Don't image representing multiple formats](../../../img\do_dont\multiple formats_dont.png)

## Labels

### Graph Titles

Graph and table titles in this design system use the typography style for [heading 2. ](typography.md)Titles should be as short as possible, and accurately reflect the question the dataset is trying to represent. Titles always use title-case capitalization.

### Axis Labelling

Both the x and y-axes should always be labeled. Labels should be placed outside of the data area. Labels should use simple and clear language, and accurately represent the data being shown. Axis labels use the typographic style for[ heading 4](typography.md).

For quantitative labels, the unit of measurement should be included in the label.

### Data Increments

Qualitative data values should be labelled in a logical way, such as consecutive months. For quantitative values, they should be labelled using round numbers or decimals that fit the data range. Always include an additional increment greater than the dataset. For quantitative values, axes should always start at 0.When using decimals, round to a maximum of two decimal points whenever possible.

In some visualizations with many axis points, skipping labels is an effective way to reduce visual clutter. Axis ticks should be separated with sufficient space to clearly read each label. Intervals between labels should always be consistent.

On the x-axis, value labels should be centered to their corresponding tick mark. For y-axis labels, they should be left-aligned and kept above the y-axis lines. Long text labels should be rotated 45 degrees around an origin directly below their corresponding axis tick.

![Do image representing data increments](../../../img\do_dont\data increments_do.png)

![Don't image representing data increments](../../../img\do_dont\data increments_dont.png)


### Data Formats and Abbreviations

When possible, labels and values should avoid abbreviations unless it is a conventional data format. If spacing is a concern, it is recommended to skip labels in a way that makes sense for the data.

Some data formats should always use abbreviations:

| Days of the week | Mon, Tues, Wed, Thurs, Fri, Sat, Sun |
| :--- | :--- |
| Months | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec |
| 12-hour time | 1am, 2pm, 12pm etc. |
| Standard money abbreviations | $1.2k, $3.4m, $6.2b, etc. |

## Colours and Textures

Graphs and visualizations should always aim to use as little colour as possible. If multiple colours are required, they should be a complimentary palette that are both distinguishable when placed in close proximity. Colour choice should avoid bias \(i.e. red or green\) unless specifically related to the data \(i.e. a decrease or increase\). Any colour is acceptable for a visualization so long as it meets contrast requirements.

For increased accessibility, it is also recommended to use textures in addition to colour differences, so that variables are easier to distinguish.

See specific types of visualizations for use of colour. In general, each variable should have one designated colour, and only graphs showing multiple variables should have multiple colours.

Axis lines should use light grey \(<badge style="background-color: #E0E0E0;color:black">#E0E0E0</badge>\), to not distract from other colours used in the visualization

For more information about colour choice, visit the [colour section](colour.md).
