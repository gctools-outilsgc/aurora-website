---
path: "/profile/introduction"
subnav: "1/Profile/Profil/1"
lang: "fr"
title: "Profil comme Service"
---
<helmet>
<title> Profile - Introduction </title>
</helmet>

# Profile as a Service

## What is Profile as a Service

Similar to other services like Google, Facebook, and Github the Profile as a Service allows a tell me once approach for setting common profile information across all Open Accessible Digital Workspace applications that leverage the GCaccount sign on platform.

It can currently store a users name, email, avatar, title, contact information, as well as organizational information.  We built this service around the premise that the User is the authoratative source on what their information is.  That is not to say that the Profile as a Serivce cannot receive information from other sources.  Any external information sources will require the User to validate any changes proposed by those sources (GCHR, PeopleSoft, ect) before they take effect.

## What is it built on

The Profile as a Service is architected on Apollo server and leverages Prisma and PostgreSQL for data storage.  These technologies were chosen after performance testing other frameworks such as Python Django.

* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## How does it communicate with other services

Profile as a service listens for specific events on the Service Mesh that then trigger specific functions.  For example when a new user validates their account on GCaccount a message is sent to the Service Mesh specifying that there is a new user and it provides the information that was used during registration.  Profile as a Serivce listens for this event, as well as other applications, and triggers the automatic creation of this users profile with the information that was used during GCaccount registration.

## How does it handle Authentication and Authorization

The Profile service relies on the GCaccount access token to ensure that information can only be accessed and modified by authorized individuals.  The access token is the key to all Open Accessible Digital Workspace applications and contains information specific to the user and application trying to access the data.  This data is then used to determine if the user and/or application can gain access to read or modify the information.
