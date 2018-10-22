---
path: "/devcomponent/react-button"
subnav: "3/React/React/6"
lang: "en"
title: "React Buttons"
---

#Buttons
Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

##Examples
.
<reactbuttonexample1 />

### Properties
.
<buttonexample1properties />

##Outline buttons
.
<reactbuttonexample2 />

##Sizes
.
<reactbuttonexample3 />

.
<reactbuttonexample4 />

.
<reactbuttonexample5 />

##Active state
.
<reactbuttonexample6 />

##Disabled state
.
<reactbuttonexample7 />

##Checkbox and Radio Buttons (Stateful Buttons)
In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are active/select. It is not in the opinion of this library to manage state within it's components so it is left up to you. Below is a simple example showcasing how this could be done using the components which already exist in this library.
<reactbuttonexample8 />

## Close icon
Use a generic close icon to dismiss content. Use `<Button close />` for the default icon. Otherwise, custom content for the button may be defined. (e.g. JSX: `<Button close><span aria-hidden="true">–</span></Button>`) The default aria-label is "Close".
<reactbuttonexample9 />