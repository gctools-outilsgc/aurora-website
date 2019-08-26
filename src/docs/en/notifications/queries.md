---
path: "/notifications/queries"
subnav: "1/Notifications/Notifications/3"
lang: "en"
title: "Retrieving Data"
---

<helmet>
<title> Notifications - Retreiving Data</title>
</helmet>

## Queries

Queries require authentication of the client through an access token.  If the token is validated by GCaccount as being current, and consent authorized for the applicaiton, Notificaiton-as-a-Service will return the data requested for the user the token was generated for.

For more information on how to utilize the graphQL query function graphl.org provides excellent [tutorials](https://graphql.org/learn/queries/).

### Query that would return all available information of notifications for a specific user as identified in an access token

```json
    notifications{
        id,
        generatedOn,
        modifiedOn,
        gcID,
        appID,
        actionLink,
        actionLevel,
        email {
            from,
            to,
            subject,
            body,
            status,
            sendError,
            html
        },
        online {
            titleEn,
            titleFr,
            descriptionEn,
            descriptionFr,
            viewed
        },
        whoDunIt {
            gcID,
            teamID,
            organizationID
        }
    }
```

### Query search criteria

Search criteria fields can be used separately or chained together to easily filter through data.

Available Arguments:

* `appID` *exact match* (string)
* `actionLevel` *exact match of either `NoUserAction`, `Featured`, or `UserActionRequired`* (enum)


Example with all available arguments:

```javascript
    query{
        notifications(
            appID: "string",
            actionLevel: "Featured"
        ){
            id,
            generatedOn,
            modifiedOn,
            gcID,
            appID,
            actionLink,
            actionLevel,
            email {
                from,
                to,
                subject,
                body,
                status,
                sendError,
                html
            },
            whoDunIt {
                gcID,
                teamID,
                organizationID
            }
        }
    }
```

### Pagination

Retrieving too much data on a single request is not practical and may break your application. Pagination solves this problem, allowing the client to specify how many items it wants.

The simple way defined in the GraphQL pagination documentation is to slice the results using two parameters: `first`, which returns the first n items and `skip`, which skips the first n items.

These two pagination parameters have been implemented on all of the search query functions.

The example query below will search for all notifications for application with ID `ddasfoij0923` but instead of returning the complete array the query below is requesting items 2 and 3 in the array.  Skip the first item in the array and send the next 2 in the array.

```javascript
    query{
        notifications(appID:"ddasfoij0923", first:2, skip:1){
            id,
            generatedOn,
            modifiedOn,
            gcID,
            appID,
            actionLink,
            actionLevel,
            online {
                titleEn,
                titleFr,
                descriptionEn,
                descriptionFr,
                viewed
            },
            whoDunIt {
                gcID,
                teamID,
                organizationID
            } 
        }
    }
```
