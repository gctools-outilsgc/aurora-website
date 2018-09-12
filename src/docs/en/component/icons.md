---
path: "/component/icons"
subnav: "1/Visuals/Visuels/2"
lang: "en"
title: "Icons"
---
# Icons
<helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>
<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
<i style="font-size:24px" class="fa">&#xf013;</i>
<i style="font-size:24px" class="fa fa-trash" aria-hidden="true"></i>

![Icons](../../../img\icons_example.PNG)

Icons in this system use SVG icons from [Font Awesome](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit).

SVG icons are recommended over icon fonts for a variety of reasons:

* .svg is a vector image format with optional support for CSS, JavaScript, reusability and accessibility
* SVGs are are resizable up and down without losing quality, extra sharp on retina displays, and have a small file size
* Font failures are relatively common. Browser support for SVGs is higher than for icon fonts.
* Various blocking systems or customized font settings often breaks icon fonts. These blockers will not affect SVG icons

Refer to [CCS Tricks' article](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit) to learn more about font icons versus SVG icons.

Icons are used for certain buttons and are usually associated with some sort of action. They also add visual diversity to your page. When using icons, it is best to stick with well-known conventions, such as a garbage can to represent _Delete_, or a gear to represent _Settings_.

## Choosing Your Icons

To reduce performance impacts of your application, it is recommended that your application only load the icons that are required, rather than the full set. When choosing an icon to use in your application, be sure to consistently use that same icon when representing a similar action or requirement.

## Loading/Spinner

The loading icon is displayed using the [spinner icon](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit) from Font Awesome. Font Awesome provides [multiple icons](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit) that may work well as a spinner, depending on your content. You can refer to [Font Awesome's documentation](https://www.gitbook.com/book/gctools-outilsgc/-gcdigital-design-system/edit) to animate the spinner to demonstrate a loading page.

You can also use these same principles to animate any other icon you choose.
