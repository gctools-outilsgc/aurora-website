---
path: "/profile/introduction"
subnav: "1/Profile/Profil/1"
lang: "en"
title: "Introduction"
---

<helmet>
<title> Profile - Introduction </title>
</helmet>

## Introduction

Similar to other services like Google, Facebook, and Github, the Profile-as-a-service (PAAS) allows a tell-me-once approach for setting common profile information across all Open Accessible Digital Workspace applications. Profile-as-a-service also leverages the GCaccount sign-on platform.

PAAS can currently store a user's name, email, avatar, title, contact information, as well as organizational information.  We built this service around the premise that the user is the authoratative source on their own information.  Profile-as-a-serivce can still receive information from other sources.  Any external information sources requires  the user to validate any changes proposed by those sources (GCHR, PeopleSoft, etc.) before they take effect.

## Tech stack

The Profile-as-a-service is architected on Apollo server and leverages Prisma and PostgreSQL for data storage.  These technologies were chosen after performance testing other frameworks such as Python Django.

* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Communication with other services

Profile-as-a-service listens for specific events on the Message Queue that then trigger specific functions.  For example, when a new user validates their account on GCaccount, a message is sent to the Message Queue specifying that there is a new user and it provides the information that was used during registration.  Profile-as-a-serivce listens for this event, as well as other applications, and triggers the automatic creation of this user's profile with the information that was used during GCaccount registration.

## Authentication and authorization

The Profile service relies on the GCaccount access token to ensure that information can only be accessed and modified by authorized individuals. The access token is the key to all Open Accessible Digital Workspace applications and contains information specific to the user and the application trying to access the data. This data is then used to determine if the user and/or application can gain access to read or modify the information.
