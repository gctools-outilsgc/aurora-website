---
path: "/component/colour"
subnav: "1/Visuals/Visuels/1"
lang: "en"
title: "Colour"
---

<helmet>
<title> Colour - Aurora Design System </title>
</helmet>

# Colour

## Primary Colour Palettes

Primary colour palettes are the main colours used on your application. These colours are used on all major components that make up your application including buttons, badges, progress indicators etc. You want the use of these colours to be consistent across your application. For example, all primary buttons in an application should use the same hue. 

A primary colour palette typically includes 2-3 main colour swatches, with varying shades of these swatches (lighter and darker) to allow for flexibility when building your application. These additional shades can be created by changing the saturation level or brightness of the main colour swatch. See the Aurora Borealis section below for an example of a full colour palette. 

For Government of Canada applications it is required that all colours meet the WCAG AA accessibility level for contrast, though AAA is ideal. You can use [online contrast checkers](https://webaim.org/resources/contrastchecker/) to ensure that the colours you choose meet accessibility standards when combined with text.

Once chosen, you can apply your own colours simply by modifying the hex codes in your CSS for various elements.

## Swatch Families

Swatch families consist of an array of colours that are used consistently within your particular application. Swatch families include a set of hues that work well together and that can be combined to create a full colour palette.These colours are used to add variety and visual appeal to the main components of your application. 

To build a full colour palette, choose 2-3 colour swatches as your base. From there, these hues can be modified to provide lighter or darker shades, gradients, and other variants. Combined with standard alert colours, light and dark themes, and text colours, all of these hues create a full colour palette to be used in an application. 

Below are some sample swatch families:

### Aurora Borealis

The main colour swatches used for the Government of Canada's Open and Accessible Digital Workspace (GCTools). 

Hex codes :

 <badge style="background-color: #000A3D;">#000A3D</badge>, <badge style="background-color: #137991;">#137991</badge>, <badge style="background-color: #5DC1BE;color: black; ">#5DC1BE</badge>, <badge style="background-color: #55C0A3; color:black;">#55C0A3</badge>, <badge style="background-color: #ADE18D; color:black;">#ADE18D</badge>

### Canada.ca Theme

The official hues for Canada.ca web pages and other external-facing applications. Provides lots of neutrals, and a signature blue and red used for accents , headers and footers.  

Hex codes:

<badge style="background-color: #333000;">#333000</badge>,<badge style="background-color: #26374a;">#26374a</badge>,<badge style="background-color: #AF3C43">#AF3C43</badge>,<badge style="background-color: #F5F5F5; color:black;">#F5F5F5</badge>, <badge style="background-color: #FFFFFF;color: black; ">#FFFFFF </badge>

### Thunder and Lightning

Optional swatch family. Neutrals with a signature yellow for a small pop of colour. 

Hex codes :

<badge style="background-color: #002D42;">#002D42</badge>, <badge style="background-color: #4D5D6C;">#4D5D6C</badge>, <badge style="background-color: #96A8B2; color:black;">#96A8B2</badge>, <badge style="background-color: #CECECE ; color:black;">#CECECE </badge>, <badge style="background-color: #FEC04F;color:black;">#FEC04F</badge>

### Blue Complimentary

Optional swatch family that uses a complimentary colour scheme. Blue is used to convey trust, while orange and yellow provides a small splash of colour to applications. 

Hex codes :

<badge style="background-color: #0D467D;">#0D467D</badge>, <badge style="background-color: #137991;">#137991</badge>, <badge style="background-color: #6DD2DA; color:black;">#6DD2DA</badge>, <badge style="background-color: #FF9F40; color:black;">#FF9F40</badge>, <badge style="background-color: #FEC04F; color:black;">#FEC04F</badge>

### Triad

Optional swatch family. A versatile set of colours that provides lots of options for a colourful but sophisticated application. 

Hex codes :

<badge style="background-color: #7E0C33;">#7E0C33</badge>, <badge style="background-color: #024571;">#024571</badge>, <badge style="background-color: #5DC1BE; color:black;">#5DC1BE</badge>, <badge style="background-color: #F6CF22; color:black;">#F6CF22</badge>, <badge style="background-color: #EDDB7C; color:black;">#EDDB7C</badge>

### Green and Blue

Optional swatch family. A bright cool-toned colour palette that provides a fresh look for web applications. 

Hex codes :

<badge style="background-color: #0278A4;">#0278A4</badge>, <badge style="background-color: #4E474">#4E474</badge>, <badge style="background-color: #83C3F2;color:black;">#83C3F2</badge>, <badge style="background-color: #C9DF61;color:black;">#C9DF61</badge>, <badge style="background-color: #C1D699;color:black;">#C1D699</badge>

## Secondary or Complementary swatches

Secondary colour swatches are completely optional and may provide designers with additional colours to play with on an application. These secondary swatches are often used in small quantities to draw attention to key pieces on web pages and for visual diversity and aesthetic purposes. 

These colours should only be applied to visual elements that enhance the appearance of the page. They should never be used on elements which communicate information visually, either for task completion or the structure of the page.

If you choose to include secondary colour swatches to your application, here are some places where you can use these additional colours:
- Logos or Icons
- Images
- Graphics
- Other elements used for visual enhancements 

## Basic Interface Colours

### Black Text

Text in this design system is displayed in an off-black colour. Black text can be used on any light background \(see: Light Theme\) or any button or element that uses a light colour. When adding text to any background that is not black it is essential to check the contrast for accessibility. Significant contrast between the background/element colour and the text ensures readability, even for those with visual impairments such as colour blindness.

Please see [Typography](/component/typography) for more information about using text colour.

Hex code: <badge style="background-color: #252525;">#252525</badge>

### White Text

Light text in this design system is displayed in an off-white colour. White text can be used on any dark background \(see: Dark Theme\) or any button or element that uses a dark or light colour. 

When adding white text it is essential to check the contrast for accessibility. Significant contrast between the background/element colour and the text ensures readability, even for those with visual impairments such as colour blindness.

Please see [Typography](/component/typography) for more information about using text colour.

Hex code: <badge style="background-color: #FFFFFF; color:black;">#FFFFFF</badge>

### Muted Text

Muted text is used for secondary text elements such as captions, placeholder text and timestamps. This muted text colour only works on light backgrounds \(see: Light Theme\) or light-coloured elements. For dark backgrounds or bright/dark elements, use white text.

Please see [Typography](/component/typography) for more information about using text colour.

Hex code: <badge style="background-color: #666666;">#666666</badge>

### Light Theme

By default, most applications will follow the light theme. This theme includes various shades of white for different background/foreground levels. For the majority of applications #FAFAFA is a good shade to use as a background colour, with white (<badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>) as the container or card colour.

Hex codes: <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>, <badge style="background-color: #F5F5F5;color:black;">#F5F5F5</badge>, <badge style="background-color: #FAFAFA;color:black;">#FAFAFA</badge>, <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>        

### Dark Theme

Some applications may wish to also incorporate a dark theme. This theme includes various shades of black and grey for different background/foreground levels.

Hex codes: <badge style="background-color: #000000;">#000000</badge>, <badge style="background-color: #212121;">#212121</badge>, <badge style="background-color: #303030;">#303030</badge>, <badge style="background-color: #424242;">#424242</badge>

### Error Colours

Error colours are used to indicate system failures and malfunctions.

Error hex codes:
<badge style="background-color: #923534;">#923534</badge>, <badge style="background-color: #D3080C;">#D3080C</badge>, <badge style="background-color: #F3E9E8;color:black;">#F3E9E8</badge>

### Warning Colours

Warning colours are used for notices that require the user’s acknowledgement.

Warning hex codes:
<badge style="background-color: #66512C;">#66512C</badge>, <badge style="background-color: #FF9900; color:black">#FF9900</badge>, <badge style="background-color: #F9F4D4;color:black;">#F9F4D4</badge>

### Success Colours

Success colours are used when confirming that the user’s input was successful.

Success hex codes:
<badge style="background-color: #2B542C;">#2B542C</badge>, <badge style="background-color: #278400;">#278400</badge>, <badge style="background-color: #D8EECA;color:black;">#D8EECA</badge>

### Info Colours

Info colours are used when providing additional information and notes to the user.

Info hex codes:
<badge style="background-color: #245269;">#245269</badge>, <badge style="background-color: #269ABC; color:black">#269ABC</badge>, <badge style="background-color: #D7FAFF;color:black;">#D7FAFF</badge>

## Colours Used in Aurora

Elements in this system use a clean and colourful swatch family that communicates the brand and the values of the Open and Accessible Digital Workspace. 

Our colour swatches include a mix of blue and green hues that communicate trust but adds a colourful pop to our collaboration and productivity applications. 

The primary swatch family used in this system is titled **Aurora Borealis** and uses the following hex codes:

<badge style="background-color: #000A3D;">#000A3D</badge>, <badge style="background-color: #137991;">#137991</badge>, <badge style="background-color: #5DC1BE;color:black;">#5DC1BE</badge>, <badge style="background-color: #55C0A3;color:black;">#55C0A3</badge>, <badge style="background-color: #ADE18D;color:black;">#ADE18D</badge>

### Full Palette

Using the above swatches, Aurora Borealis was developed into a full colour palette to use in applications. This palette includes a lighter variants of the base hue, darker variants, and gradient samples. Below are also some examples of palette variations being used on an application header. 

### Creative Accent Colours

Since the Open and Accessible Digital Workspace is a full suite of tools, multiple secondary swatches may be used across the workspace to add visual diversity to particular applications. Within our team, we have an unwritten rule that the lead designer on each application is responsible for choosing one accent hue that can be used for fun visual elements within that application. 

This accent colour is used for aesthetic elements only, and major UI elements still follow the Aurora Borealis swatch family. 
