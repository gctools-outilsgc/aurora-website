---
path: "/architecture/system_design"
subnav: "0/Architecture/Architecture/3"
lang: "en"
title: "System Architecture"
---
<helmet>
<title> Architecture - System Architecture </title>
</helmet>

# System Architecture

The overall system relies on foundational microservices, an event driven message queue, and a jwt based authentication provider.

Foundational Micro Services:
* [Profile as a service](/profile/introduction)
* [Notification as a Service]()
* [Search as a Service]()

Collaboration Services identified in the image below represent any of the additional services that are not foundational but are fully integrated in the Quantum architecture (Career Marketplace, Discussions, ect.)

The message queue provides publication/subscription event handling for all connected services.  There is no need for an application to connect to a seperate API service by service but instead post a global message to an event.  All listening services subscribed to that event will then recieve a copy of the information to be handled internally.

React Apps identified below are the Single Page Applications (SPA) that provide the visual window into the possibilities of Quantum.  From simple applications like Directory that focus on one key informational component to Career Marketplace that can have a wider focus the possibilities of what can be created are limitless.  With a user always in complete control of the data an application can access the security of information is truly in the users hands.  

![OADW Solution Architecture](../../../img/architecture/OADW_Architecture-Walkthrough.png)
