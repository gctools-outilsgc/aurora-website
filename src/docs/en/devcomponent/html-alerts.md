---
path: "/devcomponent/css-alerts"
subnav: "2/CSS/CSS/1"
lang: "en"
title: "CSS Alerts"
---

# Alerts

Alerts provide contextual feedback messages for user actions with the handful of available and flexible alert messages.
<htmlalert1 />
### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class. ([Source](https://getbootstrap.com/docs/4.1/components/alerts/))

## Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.
<htmlalert2 />

## Dismissing

Aurora automatically imports the bootstrap javascript required for interactive functionality. Here is how you make use of the alert JavaScript plugin:

* On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
* To animate alerts when dismissing them, be sure to add the .fade and .show classes.
<htmlalert3 />