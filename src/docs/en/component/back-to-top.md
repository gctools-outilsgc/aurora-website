---
path: "/component/back-to-top"
subnav: "3/Navigation/Navigation/2"
lang: "en"
title: "Back to top"
---

<helmet>
<title> Back to Top - Aurora Design System </title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Back to top

Back to top is a navigation button that allows users to quickly revert back to the top of a particular web page. This element is shown in the bottom right corner of the page or mobile screen. The element only appears when the user scrolls a certain distance down the web page.

Back to top buttons are necessary for web pages with continuous scrolling, or a page that includes a long amount of content. A good guideline is to include a Back to top button for any web page that is longer than 4 screens.

This button should always be labelled _Back to top_ since this is the most descriptive and expected label for the function.

Back to top buttons in this design system are styled as follows:


**Mobile:** White circle with a radius of 43px. Border is 1px <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. Drop shadow of <badge style="background-color: #000000;">#000000</badge> 20% opacity, 0 offset for x, 2px offset for y, 2px blur.

There is an arrow icon centred in the circle \(_Arrow up_ from Font Awesome\). The arrow is coloured <badge style="background-color: #666666;">#666666</badge>.

![Back to top mobile component](../../../img\components\back_to_top_mobile.png)

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Back to top</span></a>

**Web:** The text Back to top is styled using button text \(Nunito Sans Bold, 14px\), with the colour <badge style="background-color: #666666;">#666666</badge>.

The text has a 9px by 15px padding with a 1px border colours <badge style="background-color: #CECECE;color:black;">#CECECE</badge>  and a border radius of 16px. The arrow icon is aligned to the left of the text.

![Back to top web component](../../../img\components\back_to_top.png)

<a href="#main-content" class="btn btn-backtotop"><i class="fa fa-arrow-up icon"></i>Back to top</a>
