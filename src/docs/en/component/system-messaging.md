---
path: "/component/system-messaging"
subnav: "2/Standard/Standard/8"
lang: "en"
title: "System messaging"
---

<helmet>
<title> System Messaging - Aurora Design System </title>
</helmet>

# System Messaging

System notifications are short messages that appear to communicate information to the user. Notifications appear as pop-up banners which need to be dismissed or timed-out. There are four levels of severity which can be applied to the notifications: error, warning, information and success.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Examples
Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., `.alert-success`). 

<Alert color="danger">
    This is a danger alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<Alert color="warning">
    This is a warning alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<Alert color="info">
    This is an info alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<Alert color="success">
    This is a success alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

```html
<div class="alert alert-danger" role="alert">
    This is a danger alert with <a href="#" class="alert-link">an example link</a>.
</div>

<div class="alert alert-warning" role="alert">
    This is a warning alert with <a href="#" class="alert-link">an example link</a>.
</div>

<div class="alert alert-info" role="alert">
    This is an info alert with <a href="#" class="alert-link">an example link</a>.
</div>

<div class="alert alert-success" role="alert">
    This is a success alert with <a href="#" class="alert-link">an example link</a>.
</div>
```
          
## Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

<Alert color="success">
    This is a success alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

```html
<div class="alert alert-danger" role="alert">
    This is a danger alert with <a href="#" class="alert-link">an example link</a>.
</div>
```

## Dismissing

Aurora automatically imports the bootstrap javascript required for interactive functionality. Here is how you make use of the alert JavaScript plugin:

* On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
* To animate alerts when dismissing them, be sure to add the .fade and .show classes.
          

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">

## Error

Error notifications are used for system failures and user errors.

Error example: “Your password must contain at least 8 characters.”

<Alert color="danger">
    This is a danger alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

## Warning

Warning notifications are used for notices of potential future errors.

Warning example: “Caps lock is on which may cause you to enter your password incorrectly.”

<Alert color="warning">
    This is a warning alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>


## Information

Information notifications are used to provide additional information and notes to the user which they may find helpful in context.

Information example: “You can change your password in settings.”

<Alert color="info">
    This is an info alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>


## Success

Success notifications are used to confirm that a task was completed successfully.

Success example: “Your password was updated successfully.”

<Alert color="success">
    This is a success alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>


## Style of Notifications

### Design

The notifications are designed with the same concept of simplicity found in the mood boards. There is enough colour in the banners to provide visual impact which catches the user’s attention, but not so much as to overpower the user’s field of vision.

The font icons are from Font Awesome, and were chosen due to their simple design and universality.

A drop shadow is used to show the user that the notification can be closed by clicking the “X” button. The drop shadow has a 1px X-axis, a 1px Y-axis and an opacity of 23%.

### Colours

The colours used for notifications are from the design system’s palette.

Hex colour for error notifications: <badge style="background-color: #D3080C;">#D3080C</badge>

Hex colour for warning notifications: <badge style="background-color: #FF9900;color:black;">#FF9900</badge>

Hex colour for information notifications: <badge style="background-color: #269ABC;color:black;">#269ABC</badge>

Hex colour for success notifications: <badge style="background-color: #278400;">#278400</badge>

### Position

Notifications should be located at the top of the page, or wherever is most convenient and visible for the user.

### Font

The font used for notifications is the design system standard font Nunito Sans Regular. The notification title is in black and 16pt in size. The notification message is in black and 14pt in size. The font sizes were chosen for high visibility and easy readability. However, the size of the font may vary based on the display size, device used or how long the notification message is.

### Size and padding

Notifications are 62px by 425px. The text has a 15px padding on the top and on the bottom, and a 30px padding from the left. The corners are rounded to 2px. Padding sizes can vary based on how long the message will be. Padding is used to make text more pronounced in order to separate the message content from the background content.

### Notification Messages

The notification messages should straightforward and as short as possible, and use key words. Long messages can be unclear and may affect the sizing and readability of the message.

Example of a clear notification: Your profile picture has been changed successfully.

</doctabpanel>
    </documentationtabs>

