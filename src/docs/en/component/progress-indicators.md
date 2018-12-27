---
path: "/component/progress-indicators"
subnav: "4/Forms/Formulaires/5"
lang: "en"
title: "Progress indicators"
---

<helmet>
<title> Progress Indicators - Aurora Design System </title>
</helmet>

# Progress Indicators

## Steps Indicator

Progress indicators are key for visibility of system status. They visually represent a path to completion of a particular task or process. Step indicators help the user identify how much of the process the user has completed, and how much is still left.

Step indicators are used for tasks that require multiple steps. To visually represent a page or element that is loading, use a spinner or progress bar rather than a steps indicator.

## Progress Bars

Progress bars are used to visually represent a page or feature that is loading or in progress. Progress bars show a percentage as well as the visual representation shown within the bar.

Progress bars show determinate levels of progress, meaning there is a clear point of completion. When the progress bar is filled and hits 100%, the application should complete the process.

## Spinners

<helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>
<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Example of notch circle spinner</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Example of refresh spinner</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Example of dot spinner</span></i>

Spinners are used to indicate that a page or function is loading. A general rule is to use spinners for processes that take less than 4 seconds. Spinners show indeterminate levels of progress, meaning there is no clear completion and the animation loops until the process is complete.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## How it works
Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use the HTML5 `<progress>` element, ensuring you can stack progress bars, animate them, and place text labels over them.

We use the .progress as a wrapper to indicate the max value of the progress bar.
We use the inner .progress-bar to indicate the progress so far.
The .progress-bar requires an inline style, utility class, or custom CSS to set their width.
The .progress-bar also requires some role and aria attributes to make it accessible.
Put that all together, and you have the following examples.

### Labels
Add labels to your progress bars by placing text within the .progress-bar.
          

## Progress Bars

Progress bars should always include a text indicator as well as the visual to provide more context. This text should be included in the `<alt>` tag.

<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

```html
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
```

## Step Indicators

## Spinners

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Steps Indicator
          
If a label is required for your step indicator, the label should be placed at the top of the element and left-aligned.

Colours for the step indicator can vary, but ensure that contrast requirements are met. Visit the [colour section](colour.md) for more information on choosing accessible colours.

Step indicators are styled as follows: 44px using the colour <badge style="background-color: #CECECE;color:black;">#CECECE</badge>.

The inner circle is white \(<badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>\) and 34px. it is centred within the outer circle. The text is heading 2 style, Rubik Regular at 21 points.  The inner circle has a black \(<badge style="background-color: #000000;">#000000</badge>\) drop shadow of 20% opacity, offset of 0 for x and y, and 4px blur.

In between steps there is a centred line with a thickness of 3px. This line should be the same colour as the outer circle.

![Steps indicator component on step 1](../../../img\components\steps_indicator_1.png)

In progress, completed steps use a coloured circle and line. The outer circle is filled with the colour \(<badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>\)\ or the secondary colour of your choice. The line is also filled with this colour.

![Steps indicator component on step 2](../../../img\components\steps_indicator_2.png)

![Steps indicator component on step 3](../../../img\components\steps_indicator_3.png)

## Progress Bars

Colours for the progress bar can vary, but ensure that contrast requirements are met. Visit the [colour section](colour.md) for more information on choosing accessible colours.

Progress bars can be filled with any colour you choose, but be sure to use text that meets minimum contrast requirements. For more information about accessible colours, visit the colour section.

Progress bars are styled using a rectangle with 16px height and variable width. The rectangle has a 1px border coloured <badge style="background-color: #ADACAC;color:black;">#ADACAC</badge>, with a 4px border radius.

Percentage can be either aligned to the right of the bar, or the percentage can be centred within the coloured portion of the bar.

<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

<br>

### Animation

Progress bars start empty and gradually fill with colour using an animation. The percentage shown should match the level of colour that fills the bar.

## Spinners

The spinner used in this design system is displayed using the spinner icon from Font Awesome. Font Awesome provides multiple icons that may work well as a spinner, depending on your content. You can refer to [Font Awesome's documentation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) to animate the spinner to demonstrate a loading page or function.

</doctabpanel>
    </documentationtabs>

