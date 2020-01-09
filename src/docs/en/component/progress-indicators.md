---
path: "/component/progress-indicators"
subnav: "4/Forms/Formulaires/5"
lang: "en"
title: "Progress indicators"
---

<helmet>
    <title> Progress Indicators - Aurora Design System </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Progress Indicators

Progress indicators are key for visibility of system status. They visually represent a path to completion of a particular task or process. Step indicators help the user identify how much of the process the user has completed, and how much is still left.

## Step Indicators

Step indicators are used for tasks that require multiple steps. To visually represent a page or element that is loading, use a spinner or progress bar rather than a step indicator.

## Progress Bars

Progress bars are used to visually represent a page or feature that is loading or in progress. Progress bars show a percentage as well as the visual representation shown within the bar.

Progress bars show determinate levels of progress, meaning there is a clear point of completion. When the progress bar is filled and hits 100%, the application should complete the process.

## Spinners

Spinners are used to indicate that a page or function is loading. A general rule is to use spinners for processes that take less than 4 seconds. Spinners show indeterminate levels of progress, meaning there is no clear completion and the animation loops until the process is complete.

<documentationtabs remove="react">
    <doctabpanel type="html">
          

## Step Indicators

Step indicators in Aurora are a custom component. This component is built using the `<ul>` element. 

See examples below:

### Regular step indicator
The regular steps indicator is used simply as a visual indication of progress. The `<ul>` will be contained within a `<div>` element with the class of `.step-indicator`

<div aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">login<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choose interest</li>
         <li>add friends<span class="sr-only">not completed</span></li>
         <li>View map<span class="sr-only">not completed</span></li>
      </ul>
 </div>

```html
<div aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">login<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choose interest</li>
         <li>add friends<span class="sr-only">not completed</span></li>
         <li>View map<span class="sr-only">not completed</span></li>
      </ul>
 </div>
```

### Navigation step indicator

Depending on the page content, you may wish to add navigation links as part of your steps indicator. In this case, your `<ul>` element will be encapsulated within a `<nav>` element. You can then wrap your text with a`<a>`element to make a link within the list item. 

 <nav aria-label="progress" class="step-indicator">
      <ul class="steps">
          <li class="complete">
            <a href="#">login</a><span class="sr-only">completed</span>
          </li>
          <li class="active" aria-current="true">
            <a href="#">choose interest</a>
          </li>
          <li>
            <a href="#">add friends</a><span class="sr-only">not completed</span>
          </li>
          <li>
            <a href="#">View map</a><span class="sr-only">not completed</span>
          </li>
       </ul>
  </nav>

```html
 <nav aria-label="progress" class="step-indicator">
      <ul class="steps">
          <li class="complete">
            <a href="#">login</a><span class="sr-only">completed</span>
          </li>
          <li class="active" aria-current="true">
            <a href="#">choose interest</a>
          </li>
          <li>
            <a href="#">add friends</a><span class="sr-only">not completed</span>
          </li>
          <li>
            <a href="#">View map</a><span class="sr-only">not completed</span>
          </li>
       </ul>
  </nav>
```

### Accessibility Considerations

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

You will also need to add `aria-current="true"` to the current active step to provide more context.  

Using `.aria-label="progress"` on the element with the `.step-indicator` class helps provide context to assistive technologies. 

## Progress Bars

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use the HTML5 `<progress>` element, ensuring you can stack progress bars, animate them, and place text labels over them.

We use the `.progress` as a wrapper to indicate the max value of the progress bar.
We use the inner .progress-bar to indicate the progress so far.
The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
The `.progress-bar` also requires some role and aria attributes to make it accessible.
Put that all together, and you have the following examples.

Progress bars should always include a text indicator as well as the visual to provide more context. This text should be included in the `<alt>` tag.

Add labels to your progress bars by placing text within the `.progress-bar`.

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
          
## Spinners

You can refer to [Font Awesome's documentation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) to animate the spinner to demonstrate a loading page or function.

<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Example of notch circle spinner</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Example of refresh spinner</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Example of dot spinner</span></i>

```html
<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Example of notch circle spinner</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Example of refresh spinner</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Example of dot spinner</span></i>
```

</doctabpanel>
    <doctabpanel type="design">
          

## Steps Indicator

Colours for the step indicator can vary to better match individual applications, but ensure that contrast requirements are met. Visit the [colour section](/component/colour) for more information on choosing accessible colours.

Step indicators are styled as follows: 

Each circle is 40px with a border of 4px and the colour <badge style="background-color: #CECECE;color:black;">#CECECE</badge>

The numbers within each step use heading 2 style, Rubik Regular at 21 points.

In between steps there is a centred line with a height of 4px. This line should be the same colour as the outer circle.

Completed steps use a checkmark icon instead of the number and the border is coloured <badge style="background-color: #0278A4">#0278A4</badge>. The checkmark also uses this colour. 

The line between completed and active steps is also filled with <badge style="background-color: #0278A4">#0278A4</badge>.

The active step still uses the number and both the number and the border is filled in with the colour <badge style="background-color: #0278A4">#0278A4</badge>. The active step has a drop shadow coloured with <badge style="background-color: #058ABC">#058ABD</badge> at 25% opacity and a 3px spread. 

Each step should also include text underneath for context. Limit this text to one or two words. This text has a font size of 12px, center-aligned, and is all uppercase. 
Each step should also include text underneath for context. Limit this text to one or two words. This text has a font size of 12px, center-aligned, and is all uppercase. 

<div role="group" aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">login<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choose interest</li>
         <li>add friends<span class="sr-only">not completed</span></li>
         <li>View map<span class="sr-only">not completed</span></li>
      </ul>
 </div>

## Progress Bars

Colours for the progress bar can vary, but ensure that contrast requirements are met. Visit the [colour section](/components/colour) for more information on choosing accessible colours.

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

## Spinners

<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Example of notch circle spinner</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Example of refresh spinner</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Example of dot spinner</span></i>

The spinner used in this design system is displayed using the spinner icon from Font Awesome. Font Awesome provides multiple icons that may work well as a spinner, depending on your content. You can refer to [Font Awesome's documentation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) to animate the spinner to demonstrate a loading page or function.

</doctabpanel>
    </documentationtabs>

