---
path: "/component/system-messaging"
subnav: "2/Standard/Standard/8"
lang: "en"
title: "System messaging"
---

<helmet>
<title> System Messaging - Aurora Design System </title>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/regular.css" integrity="sha384-aubIA90W7NxJ+Ly4QHAqo1JBSwQ0jejV75iHhj59KRwVjLVHjuhS3LkDAoa/ltO4" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0" crossorigin="anonymous">
</helmet>

# System Messaging

System notifications are short messages that appear to communicate information to the user. Notifications appear as pop-up banners which need to be dismissed or timed-out. There are four levels of severity which can be applied to the notifications: error, warning, information and success.

Design systems notifications in descending level of severity:

## Error

Error notifications are used for system failures and user errors.

Error example: “Your password must contain at least 8 characters.”

<div class="alert alert-danger alert-dismissible" role="alert'">
  This is a danger alert with <a href="#example" class="alert-link">an example link</a>.
  <button color="link" type="button" class="close" data-dismiss="alert" aria-label="Close">
     <span aria-hidden="true">&times;</span>
   </button>
</div>

<div class="alert-icon alert-info alert-dismissible fade show" role="alert">
 <div class="icon" aria-hidden="true">
   <i class="far fa-times-circle" style="font-size:40px"></i>
 </div>
 <div class="message">
   <h3>Notification title</h3>
   <p>This is a danger icon alert with <a href="#example" class="alert-link">an example link</a>.</p>
 </div>
 <button color="link" type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>
</div>

<codeblock html='
    <div class="alert alert-danger" role="alert">
        This is a danger alert with <a href="#" class="alert-link">an example link</a>.
    </div>
' react='
<Alert color="danger">
    This is a danger alert with <a href="#" class="alert-link">an example link</a>.
</Alert>
'></codeblock>

## Warning

Warning notifications are used for notices of potential future errors.

Warning example: “Caps lock is on which may cause you to enter your password incorrectly.”

<Alert color="warning">
    This is a warning alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<codeblock html='
    <div class="alert alert-warning" role="alert">
        This is a warning alert with <a href="#" class="alert-link">an example link</a>.
    </div>
' react='
<Alert color="warning">
    This is a warning alert with <a href="#" class="alert-link">an example link</a>.
</Alert>
'></codeblock>

## Information

Information notifications are used to provide additional information and notes to the user which they may find helpful in context.

Information example: “You can change your password in settings.”

<Alert color="info">
    This is an info alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<codeblock html='
    <div class="alert alert-info" role="alert">
        This is an info alert with <a href="#" class="alert-link">an example link</a>.
    </div>
' react='
<Alert color="info">
    This is an info alert with <a href="#" class="alert-link">an example link</a>.
</Alert>
'></codeblock>

## Success

Success notifications are used to confirm that a task was completed successfully.

Success example: “Your password was updated successfully.”

<Alert color="success">
    This is a success alert with <a href="#example" class="alert-link">an example link</a>.
</Alert>

<codeblock html='
    <div class="alert alert-success" role="alert">
        This is a success alert with <a href="#" class="alert-link">an example link</a>.
    </div>
' react='
<Alert color="success">
    This is a success alert with <a href="#" class="alert-link">an example link</a>.
</Alert>
'></codeblock>

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
