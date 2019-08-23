---
path: "/notifications/data-models"
subnav: "1/Notifications/Notifications/2"
lang: "en"
title: "Data Models"
---

<helmet>
<title> Notifications - Data Models </title>
</helmet>

## Object Data Models

### Notification

* `id` *a unique notification identifier* (string)
* `generatedOn` *Unix DateTime string that is system generated* (string)
* `modifiedOn` *Unix DateTime string that is system generated* (string)
* `gcID` *unique identifier of user notificaiton is for* (string)
* `appID` *application id as identified in GCaccount* (string)
* `actionLink` *url to page where notification can be actioned* (string)
* `actionLevel` *enum list of either `NoUserAction`, `Featured`, or `UserActionRequired`* (enum)
* `email` *email notification object* (email notification object)
* `online` *online notification object* (online notification object)
* `whoDunIt` *object that defines who or what generated the event* (whoDunIt object)

### Online object

* `titleEn` *english title of online notification* (string)
* `titleFr` *french title of online notification*(string)
* `descriptionEn`*english description/body of online notification* (string)
* `descriptionFr` *french description/body of online notification*(string)
* `viewed` *boolean describing if online notification has been viewed*(boolean)

### Email Object

* `from` *email address of from user/system* (string)
* `to` *email address of receiver* (string)
* `subject` *subject line of email* (string)
* `body` *body of email that can be either pure text or html* (string)
* `status` *enum that can be either `Sent` or `Queued`* (enum)
* `sendError` *error message if email could not be sent* (string)
* `html` *boolean that identifies if the body has html* (boolean)

### WhoDunIt object

* `gcID` *user identifier based on gcID* (string)
* `teamID` *team identifier based on team id* (string)
* `organizaitonID` *organization identifier based on organization id* (string)
