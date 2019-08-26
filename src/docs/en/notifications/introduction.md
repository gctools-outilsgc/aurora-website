---
path: "/notifications/introduction"
subnav: "1/Notifications/Notifications/1"
lang: "en"
title: "Introduction"
---

<helmet>
<title> Notifications - Introduction </title>
</helmet>

## Introduction

As part of a decentrailzed microservice system, the Notification-as-a-service (NAAS) allows for real-time notifications on both a per-application and consolidated view basis.  For example, a common navigation component distributed across many applications on a platform can display user notifications for not only the current application, but any applications linked to Notification as a Service.

NAAS can store various metadata elements commonly found in notifications, such as action levels, both email and online notification types, who or what generated the notification, etc.

## Tech stack

The Notification-as-a-Service is architected on Apollo server and leverages Prisma and PostgreSQL for data storage.

* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Communication with other services

Notification-as-a-Service listens for specific events on the Message Queue that then triggers the creation of a notification object for applications on the Message Queue.  The GraphQL API interface can also create notifications for applications not on the Message Queue. For example, when a user identifies another user as their supervisor through Profile-as-a-Service, a message is created and sent through the Message Queue specifying that user action is required by the supervisor to approve or deny the user's request.  Notification-as-a-Service listens for this event, as well as other possible applications, and triggers the creation of a notification object with the information provided through the Message Queue.

## Authentication and authorization

The Notification-as-a-Service relies on the GCaccount access token to ensure information can only be accessed and modified by authorized individuals and applications. The access token is the key to all Open Accessible Digital Workspace applications and contains information specific to the user and the application trying to access the data. This data determines if the user and/or application can gain access to read or modify the information.
