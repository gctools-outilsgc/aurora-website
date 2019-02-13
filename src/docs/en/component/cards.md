---
path: "/component/cards"
subnav: "2/Standard/Standard/4"
lang: "en"
title: "Cards"
---
<helmet>
    <title> Cards - Aurora Design System </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Cards

Cards are containers used to organize high-level content. Using cards can make your web product more appealing and navigable. 

## Best Practices

A card should only contain a single idea which may feature a call-to-action, or the option to navigate to more detailed content. The content of a card should be concise, and offer only a preview of detailed content.

Cards can make your web product more engaging. However, you should consider the type of information you are sharing, as well as how the user will be viewing this information before you decide to use a card.

If multiple cards are placed on a page, they should be placed 16px apart on all sides.

## Components of a card

Elements that can be used in a card are:

* Main Title - A short and clear label that states the card's main message.
* Meta information - Used to organize the cards. This can be a time stamp, category etc.
* Description - A more thorough explanation of the idea and call-to-action. This text should be brief.
* Image or Rich Media - Associated with the card and text, an image or rich media should contribute to the message.
* Buttons - When a card requires a selectable action, or you want to emphasize that the card is a clickable object, you can use buttons.
* Extra information - Any additional information that enhances the message of the card.

Not all of these elements are necessary in every card. You can choose the elements which you think best fit the purpose of the card. However, every card should have a main title.

<documentationtabs remove="react">
      <doctabpanel type="html">


## Example
          
A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colours, and powerful display options. 

Cards are built with as little markup and as few styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with various sizing options. Use custom CSS in your stylesheets or as inline styles to set a width.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
```

### Body
The building block of a card is the .card-body. Use it whenever you need a padded section within a card.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title</p>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title</p>
    </div>
</div>
```

### Titles, text, and links
Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
```

### Images

`.card-img-top` places an image to the top of the card. 

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <p class="card-text">Some quick example text to build on the card title</p>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <p class="card-text">Some quick example text to build on the card title</p>
    </div>
</div>
```

### Buttons

Buttons require no additional classes, and can be added to a card by simply adding the `<button>` element. 

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <p class="card-text">Some quick example text to build on the card title</p>
    </div>
    <div class="card-footer">
    <button type="button" color="primary" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Secondary</button>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
         <p class="card-text">Some quick example text to build on the card title</p>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-outline-primary">Secondary</button>
    </div>
</div>
```
          
</doctabpanel>
    <doctabpanel type="design">

Cards should have a different colour than the main background colour of the site. If your site's background colour is <badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>, you will need to modify the card colour to have more contrast. 
          

## Basic card template

Basic cards can be used as containers for any type of information are sized depending on the content. Basic cards form the foundation for more complex cards which may include any combination of elements.

Basic cards are styled as follows:

White (<badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Card title</h3>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>


## Image Cards

Image cards use the basic card template but include an image above the header.

Image cards are styled as follows:

White (<badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

The image is placed 20px above the header. The image spans the entire width of the card.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    </div>
</div>

## Actionable Cards

Actionable cards use the basic card template, but include additional components below the main content. Example of additional components may include primary or secondary buttons, icon buttons, or avatars. Actionable cards can also be combined with the image card style.

Actionable cards are styled as follows:

White (<badge style="background-color: #FFFFFF;color:black;">#FFFFFF</badge>) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

A second divider is placed 12px below the content. Actionable items (i.e. buttons) are placed 12px below this divider.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    </div>
    <div class="card-footer">
    <button type="button"  color="primary" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Secondary</button>
    </div>
</div>

## Complex Cards

Cards can technically include any number of component combinations. Using the base styles above, components such as placeholder text (metadata), avatars, icon buttons, buttons can be added below the header, or within the actionable section below the main content.

<div class="card card-profile mb-2 d-inline-block" style="max-width: 18rem;">  
    <img class="card-img-top" style="height: 100px;" src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg" alt="placeholder image">
    <div class="card-body">
        <img alt="..." class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
        <div>
        <h3 class="card-title h5">Name or Group</h3>
        <p class="text-muted">Job title or meta information</p>
        <button type="button" color="primary" class="btn btn-primary">Call to Action</button>
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title. Here is some extra information, this could be something wonderful!</p>
    <button type="button" class="btn btn-light"><span class="fa fa-heart"></span><span class="sr-only">Like</span></button>
    <button type="button" class="btn btn-light"><span class="fa fa-comment"></span><span class="sr-only">Comment</span></button>
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Card title</h3>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <button type="button" color="primary" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Secondary</button>
    </div>
    <div class="card-footer">Extra information</div>
</div>


</doctabpanel>
    </documentationtabs>


