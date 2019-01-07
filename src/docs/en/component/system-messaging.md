---
path: "/component/system-messaging"
subnav: "2/Standard/Standard/8"
lang: "en"
title: "System messaging"
---

<helmet>
    <title> System Messaging - Aurora Design System </title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/solid.css" integrity="sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/regular.css" integrity="sha384-aubIA90W7NxJ+Ly4QHAqo1JBSwQ0jejV75iHhj59KRwVjLVHjuhS3LkDAoa/ltO4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0" crossorigin="anonymous">
</helmet>

# System Messaging

System notifications are short messages that appear to communicate information to the user. Notifications appear as pop-up banners or toast messages which need to be dismissed or timed-out. There are four levels which can be applied to system messages: error, warning, information and success.

## Best Practices

System messages should straightforward and as short as possible, and use key words. Long messages can be unclear and may affect the sizing and readability of the message. Messages should indicate to the user what exactly has happened within the application. 

Example of a clear message: "Your profile picture has been changed successfully."

System messages should be located at the top of the page, or wherever is most convenient and visible for the user.

### When to Use

**Error alerts** are used for system failures and user errors. For example: “Unable to upload file”

**Warning alerts** are used for notices of potential future errors. For example: “Caps lock is on which may cause you to enter your password incorrectly.”

**Information alerts** are used to provide additional information and notes to the user which they may find helpful in context. For example: “You can change your password in settings.”

**Success alerts** are used to confirm that a task was completed successfully. For example: “Your password was updated successfully.”

<documentationtabs remove="react">
    <doctabpanel type="html">


## Default Alerts
Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four contextual classes: `.alert-danger`, `.alert-warning`, `.alert-info` or `.alert-success`.

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

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

## Custom Icon Alerts

In addition to Bootstrap default alerts, Aurora uses custom icon alerts for different types of message contexts.

Use the `.alert-icon` class to create the custom icon alert. The custom icon alert includes both a `.icon` section and a `.message` section. Your icon can be added to the `<div>.icon`.

 <div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-check-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

```html
 <div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-check-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>
```


## Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

Add `role="alert"` to your system alert to provide more context for assistive technologies.  

## Dismissing

Aurora automatically imports the Bootstrap Javascript required for interactive functionality. Here is how you make use of the alert JavaScript plugin:

* On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
* To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

<div class="alert alert-info alert-dismissible fade show" role="alert">
    This is an info alert with <a href="#" class="alert-link">an example link</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

 <div class="alert-icon alert-info alert-dismissible fade show" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fa fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

```html
<div class="alert alert-info alert-dismissible fade show" role="alert">
    This is an info alert with <a href="#" class="alert-link">an example link</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

 <div class="alert-icon alert-info alert-dismissible fade show" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fa fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

</doctabpanel>
    <doctabpanel type="design">


## Default Alerts

Default alert messages are provided in Bootstrap. Aurora uses these alerts as well as custom ones (see below).

Default alerts are styled as follows:

Rectangle the width of the container, with a border radius of 4px. The height is dependent on the size of the message text with a padding of 12px by 20px.

The message box includes a drop shadow with no offset and a blur of 5px. The drop shadow is black (<badge style="background-color: #000000"> #000000</badge>) with 15% opacity.  

The message text uses the Aurora paragraph style: Nunito Sans at 16 points.

The colour of the message depends on the type of alert. Refer to [Colour](component/colour) for more information. Default messages use a muted colour as a fill for the message box.

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


## Custom Icon Alerts

Custom icon alerts are styled as follows:

The box is the same width as the container. The height of the message is dependent on the text. The padding around the text is 12px by 20px. The message box has a border radius of 4px.

The coloured box on the side of the message is 60px wide with a border radius on the top left and bottom left corners are 4px. The colour depends on the type of alert. Refer to [Colour](component/colour) for more information.

The message box includes a drop shadow with no offset and a blur of 5px. The drop shadow is black (<badge style="background-color: #000000"> #000000</badge>) with 15% opacity.  

The notification title uses H5 styling: Nunito Sans, at 18 points. Message text uses regular paragraph styling: Nunito Sans at 16 points.

Aurora uses Font Awesome for the icons in the message box, but these icons are customizable and simply for design purposes. Refer to [Icons](component/icons) for more information. For custom alerts, the brightest version of the colour is used for the icon box, the rest of the message box is white (<badge style="background-color: #FFFFFF; color: black;"> #FFFFFF</badge>)

 <div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Notification title</h3>
    <p>Message</p>
  </div>
</div>

</doctabpanel>
    </documentationtabs>
