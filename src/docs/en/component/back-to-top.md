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

<documentationtabs remove="react">
    <doctabpanel type="html">

Back to top buttons are a custom component built for Aurora. Back to top buttons include a web and a mobile version. Use the class `.btn-backtotop` to create the button, the `.mobile` class can be added to create the mobile version. Note that the mobile version will require an icon. 

In the mobile version, be sure to use the `.sr-only` class to provide context for the button. 
        
<a href="#main-content" class="btn btn-backtotop mb-3 mt-3"><i class="fa fa-arrow-up icon"></i>Back to top</a>

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Back to top</span></a>

```html
<a href="#main-content" class="btn btn-backtotop"><i class="fa fa-arrow-up icon"></i>Back to top</a>

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Back to top</span></a>
```

</doctabpanel>
    <doctabpanel type="design">

This button should always be labelled _Back to top_ since this is the most descriptive and expected label for the function.

Back to top buttons in this design system are styled as follows:

**Web:** The text Back to top is styled using button text \(Nunito Sans Bold, 14px\), with the colour <badge style="background-color: #666666;">#666666</badge>.

The text has a 9px by 15px padding with a 1px border colours <badge style="background-color: #CECECE;color:black;">#CECECE</badge>  and a border radius of 16px. The arrow icon is aligned to the left of the text.

<a href="#main-content" class="btn btn-backtotop mb-3"><i class="fa fa-arrow-up icon"></i>Back to top</a>

**Mobile:** White circle with a radius of 43px. Border is 1px <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. Drop shadow of <badge style="background-color: #000000;">#000000</badge> 20% opacity, 0 offset for x, 2px offset for y, 2px blur.

There is an arrow icon centred in the circle \(_Arrow up_ from Font Awesome\). The arrow is coloured <badge style="background-color: #666666;">#666666</badge>.

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Back to top</span></a>

</doctabpanel>
</documentationtabs>
