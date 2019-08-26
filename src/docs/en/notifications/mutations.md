---
path: "/notifications/mutations"
subnav: "1/Notifications/Notifications/4"
lang: "en"
title: "Modifying Data"
---

<helmet>
<title> Notifications - Modifying Data</title>
</helmet>

## Mutations

Mutations require authentication in the form of the user's valid GCaccount access token.  The access token must be passed in the request header in the form `Authorization: Bearer {access token}`.

### Notification mutations

Available arguments to send in a mutation:

* `gcId` *a user's identifier* (string)
* `data` *an object with values to modify* (dict)
  * `name` *user's name* (string)
  * `email` *user's email* (string)
  * `titleEn` *user's English position title* (string)
  * `titleFr` *user's French position title* (string)
  * `mobilePhone` *mobile phone number* (string)
  * `officePhone` *office phone number* (string)
  * `address` *user's work address* (address object)
    * `streetAddress` (string)
    * `city` (string)
    * `province` (string)
    * `postalCode` (string)
    * `country` (string)
  * `team` *team object of associated team* (team object)
    * `id` *a team's unique identifier* (string)

Example mutation using all available arguments:

```javascript
    mutation{
        modifyProfile(
            gcId:2,
            profileInfo:{
            name:"string",
            email:"string",
            titleEn:"string",
            titleFr:"string",
            mobilePhone:"string",
            officePhone:"string",
            address:{
                streetAddress:"string",
                city:"string",
                province:"string",
                postalCode:"string",
                country:"string",
            },
            team:{
                id:1243
            }
        }
        )
    }
```

### Team mutations

#### Create a team

Available arguments to send in a mutation:

* `nameEn` *English name of team* (string)
* `nameFr` *French name of team* (string)
* `descriptionEn` *English description of team* (string)
* `descrtiptionFr` *French description of team* (string)
* `organization` *organization object unique identifier* (organization object)
* `owner` *unique user who owns the team. Can be identified by email or by gcID* (profile object)

Example mutation to create an OrgTier:

```javascript
    mutation{
        createOrgTier(
            nameEn:"string",
            nameFr:"string",
            descriptionEn:"English Description",
            descriptionFR:"French Description",
            organization:{
                id:1243
            },
            owner:{
                gcID:"5433245",
                email:"joe.smith@canada.ca"
            }
         )
    }
```

#### Modify a team

Available arguments to send in a mutation:

* `id` *unique identifier of the team to modify* (int)
* `data` *object of information to modify* (dict)
  * `nameEn` *English name of team* (string)
  * `nameFr` *French name of team* (string)
  * `descriptionEn` *English description of team* (string)
  * `descrtiptionFr` *French description of team* (string)
  * `organization` *organization object unique identifier* (organization object)
  * `owner` *unique user who owns the team. Can be identified by email or by gcID* (profile object)

Example mutation to modify an OrgTier:

```javascript
    mutation{
        modifyOrgTier(
            id:2,
            nameEn:"string",
            nameFr:"string",
            descriptionEn:"English Description",
            descriptionFR:"French Description",
            organization:{
                id:1243
            },
            owner:{
                gcID:"5433245",
                email:"joe.smith@canada.ca"
            }
        )
    }
```

#### Delete a team

Available arguments to send in a mutation:

* `id` *unique identifier of the team* (int)

Example mutation to delete an OrgTier:

```javascript
    mutation{
        deleteOrgTier(
            id:6
            )
    }
```

### Approvals

Available arguments to send in a mutation:

* `id` *unique identifier of the approval to modify* (int)
* `data` *object that contains changes to apply*
  * `status` *enum of either `Pending`, `Approved`, or `Denied` (enum)
  * `deniedComment` *reason for setting status to `Denied` (string)

Example mutation to modify Approval:

```javascript
    mutation{
        modifyApproval(
            id:23,
            data:{
                status: Denied
                deniedComment: "blah"
            }
        )
    }
```
