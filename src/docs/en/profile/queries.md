---
path: "/profile/queries"
subnav: "1/Profile/Profil/3"
lang: "en"
title: "Retrieving Data"
---

<helmet>
<title> Profile - Retreiving Data</title>
</helmet>

## Queries

Queries do not require authentication of the client through the means of an access token, however the type of data returned may be filtered.  For example if the "address" field requires a certain "user role" to view then if a querying user does not have that role `null` will be returned for that field.

For more information on how to utilize the graphQL query function graphl.org provides excellent [tutorails](https://graphql.org/learn/queries/).

### Query that would return all available information of users without search criteria

For brevity `...all object fields available` has been used to reduce repetivitiy.

```json
    profiles{
        gcID,
        name,
        email,
        avatar,
        mobilePhone,
        officePhone,
        titleEn,
        titleFr,
        address{
            id,
            streetAddress,
            city,
            province,
            postalCode,
            country
        },
        team{
            id,
            nameEn,
            nameFr,
            descriptionEn,
            descriptionFr,
            organization{
                id,
                nameEn,
                nameFr,
                acronymEn,
                acronymFr
            },
            owner{
                ..all profile object fields
                }
            },
            members{
                ...all profile object fields
                }
            }
        },
        ownerOfTeams{
            ...all team object fields
            }
        },
        outstandingApprovals{
            id,
            gcIDApprover{
                ...all profile object fields
            },
            gcIDsubmitter{
                ...all profile object fields
            },
            requestedChange{
                id,
                name,
                email,
                avatar,
                mobilePhone,
                officePhone,
                address,
                titleEn,
                titleFr,
                team{
                    ...all team object fields
                },
                createdOn,
                actionedOn,
                deniedComment,
                status,
                changeType
            }

        }
    }
```

### Query search criteria

Search criteria fields can be used separately or chained together to easily filter through data.

#### Auto-complete name profile search

Available Arguments

* `partialName` *name contains - case insensitive* (string)

Example:

```javascript
    query{
        search(
            partialName:"bry"
        )
    }
```

#### Profile

Available Arguments:

* `gcId` *exact match* (string)
* `name` *name contains - case sensitive* (string)
* `email` *exact match* (string)
* `mobilePhone`*mobile number contains* (string)
* `officePhone` *office number contains* (string)
* `titleEn` *title contains* (string)
* `titleFr` *title contains* (string)

Example with all available arguments:

```javascript
    query{
        profiles(
            gcID:"string",
            name:"string",
            email:"string",
            mobilePhone:"string",
            officePhone:"string",
            titleEn:"string",
            titleFr:"string"
        )
    }
```

#### Addresses

Available arguments:

* `id` *exact match* (int)
* `streetAddress` *street address contains* (string)
* `city` *city contains* (string)
* `province` *exact match* (string)
* `postalCode` *exact match* (string)
* `country` *exact match* (string)

Example with all available arguments

```javascript
    query{
        addresses(
            id:2,
            streetAddress:"string",
            city:"string",
            province:"string",
            postalCode:"string",
            country:"string"
        )
    }
```

#### Teams

Available arguments:

* `id` *exact match* (int)
* `nameEn` *english name contains* (string)
* `nameFr` *french name contains* (string)

Example with all available arguments:

```javascript
    query{
        teams(
            id:2,
            nameEn:"string",
            nameFr:"string",
        )
    }
```

#### Organizations

Available arguments:

* `id` *exact match* (int)
* `nameEn` *name of organization contains* (string)
* `nameFr` *name of organization contains* (string)
* `acronymEn` *exact match* (string)
* `acronymFr` *exact match* (string)

```javascript
    query{
        organizations(
            id:1,
            nameEn:"string",
            nameFr:"string",
            acronymEn:"string",
            acronymFr:"string"
        )
    }
```

#### Approvals

Available Arguments:

* `id` *exact match* (int)
* `gcIDApprover` *exact match* (gcID of profile object)
* `gcIDSubmitter` *exact match* (gcID of profile object)
* `status` *enum* (enum of `Pending`, `Approved`, `Denied`)
* `changeType` *enum* (enum of `Informational` or `Memebership`)

Example using all available Arguments

```javascript
    query{
        approvals(
            id:6,
            gcIDApprover:{
                gcID:"12243"
            },
            gcIDSubmitter:{
                gcID:"5431"
            },
            status: Pending
            changeType: Informational
        )
    }
```

### Pagination

Retrieving too much data on a single request is not practical and may break your app. Pagination exists to solve this problem, allowing the client to specify how many items it wants.

The simple way defined in the GraphQL pagination documentation is to slice the results using two parameters: `first`, which returns the first n items and `skip`, which skips the first n items.

These two pagination parameters have been implemented on all of the search query functions.

The example query below will search for all profiles that contain the name "Bryan" but instead of returning the complete array the query below is requesting items 2 and 3 in the array.  Skip the first item in the array and send the next 2 in the array.

```javascript
    query{
        profiles(name:"Bryan", first:2, skip:1){
            name,
            avatar,
            email
        }
    }
```
