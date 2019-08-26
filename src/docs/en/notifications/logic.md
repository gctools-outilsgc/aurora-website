---
path: "/notifications/logic"
subnav: "1/Notifications/Notifications/5"
lang: "en"
title: "Business Logic"
---

<helmet>
<title> Profile - Business Logic</title>
</helmet>

## Business logic

The user is the source of truth for their information, except for fields that require additional validation, such as the user's organization, team, or supervisor.  The user that owns the team must approve their request to join the team.  Until the approval is processed, the user will continue to remain a part of the team / organization that they are currently a part of.

### Supervisor

There is no external validation of "supervisory" status.  Instead, it is assumed that a user is a supervisor once a single user identifies them as their supervisor. This creates a reporting relationship between the two users.

#### Teams

Teams are how users are grouped in reporting relationships and allow for the dynamic creation and display of reporting relationship graphs.

It is important to note that the reporting relationship with teams will follow the user from team to team or organization to organization unless explicitly transferred to another user.

**You can:**
* Create teams
* Modify your teams
* Delete your teams
* Transfer your teams

**You can not:**
* Create someone else's teams
* Modify someone else's teams
* Delete someone else's teams
* Delete your default team

### Approvals

**You can:**
* Approve or deny membership requests to join a team you own
* Approve or deny informational requests of reporting user's information fields requiring validation

**You can not:**
* Approve any other requests except for users who have a direct reporting relationship with you

## User

Everyone is a user, even if they have supervisory status, and is responsible for ensuring their own information is up to date.

### Supervisor

**You can:**
* Select another user as your supervisor.  The reporting relationship will only be created once the other user has approved your request.

**You can not:**
* List another user as your supervisor without their approval.

### Organization

By default, everyone is a part of the "Global Organization" when a profile is created.  This default organizaiton contains everyone who is not directly a member of a specific organization.

**You can:**
* Join an organization directly without identifying a supervisor.  This will list you as in the organization's Default Team.
* Join an organization by identifying another user as your supervisor who is a part of the organization you want to join

**You can not:**
* Create an organization
* Identify a user as your supervisor and not join their organization
* Modify an organization
* Delete an organization




