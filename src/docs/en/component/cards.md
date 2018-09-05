---
path: "/component/cards"
subnav: "2/Standard/Standard/4"
lang: "en"
title: "Cards"
---

# Cards

Cards are containers used to organize high-level content. Using cards can make your web product more appealing and navigable. Cards will typically have a background colour of #FFFFF, which separates them from the overall background colour of the page (#FAFAFA).

## Best Practices

A card should only contain a single idea which may feature a call-to-action, or the option to navigate to more detailed content. The content of a card should be concise, and offer only a preview of detailed content.

Cards can make your web product more engaging. However, you should consider the type of information you are sharing, as well as how the user will be viewing this information before you decide to use a card.

If multiple cards are placed on a page, they should be placed 16px apart on all sides.

*Example image of cards used on a page*

### Components of a card

Elements that can be used in a card are:

* Main Title - A short and clear label that states the card's main message.
* Meta information - Used to organize the cards. This can be a time stamp, category etc.
* Description - A more thorough explanation of the idea and call-to-action. This text should be brief.
* Image or Rich Media - Associated with the card and text, an image or rich media should contribute to the message.
* Buttons - When a card requires a selectable action, or you want to emphasize that the card is a clickable object, you can use buttons.
* Extra information - Any additional information that enhances the message of the card.

Not all of these elements are necessary in every card. You can choose the elements which you think best fit the purpose of the card. However, every card should have a main title.

#### Basic card template

Basic cards can be used as containers for any type of information are are sized depending on the content. Basic cards form the foundation for more complex cards which may include any combination of elements.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div class="card-subtitle text-muted">Meta Information</div>
        <p class="card-text">Some quick example text to build on the card title</p>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>

<codeblock html='
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title</p>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
' react='' />

Basic cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.


#### Image Cards

Image cards use the basic card template but include an image above the header.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <a href="#" class="card-link">Another link</a>
    </div>
</div>

<codeblock html='
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
            <img class="card-img-top" src="image.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title</p>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
' react='' />

Image cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

The image is placed 20px above the header. The image spans the entire width of the card.

## Actionable Cards

Actionable cards use the basic card template, but include additional components below the main content. Example of additional components may include primary or secondary buttons, icon buttons, or avatars. Actionable cards can also be combined with the image card style.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Secondary</button>
    </div>
</div>

<codeblock html='
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
        <img class="card-img-top" src="image.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title</p>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-outline-primary">Secondary</button>
        </div>
    </div>
' react='' />

Actionable cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

A second divider is placed 12px below the content. Actionable items (i.e. buttons) are placed 12px below this divider.

## Complex Cards

Cards can technically include any number of component combinations. Using the base styles above, components such as placeholder text (metadate), avatrs, icon buttons, buttons can be added below the header, or within the actionable section below the main content.

<div class="card card-profile mb-2 d-inline-block" style="max-width: 18rem;">  
    <img class="card-img-top" style="height: 100px;" src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg">
    <div class="card-body">
        <img alt="..." class="avatar avatar-lg" src="https://api.adorable.io/avatars/170/abott@adorable.png">
        <div>
        <h5 class="card-title">Name or Group</h5>
        <p class="text-muted">Job title or meta information</p>
        <button type="button" class="btn btn-primary">Call to Action</button>
        </div>
        
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title. Here is some extra information, this could be something wonderful!</p>
    <button type="button" class="btn btn-light"><span class="fa fa-heart"></span><span class="sr-only">Like</span></button>
    <button type="button" class="btn btn-light"><span class="fa fa-comment"></span><span class="sr-only">Comment</span></button>
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    </div>
    <div class="card-footer">Extra information</div>
</div>

<codeblock html='
    <div class="card card-profile mb-2 d-inline-block" style="max-width: 18rem;">  
        <img class="card-img-top" style="height: 100px;" src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg">
        <div class="card-body">
            <img alt="..." class="avatar avatar-lg" src="https://api.adorable.io/avatars/170/abott@adorable.png">
            <div>
            <h5 class="card-title">Name or Group</h5>
            <p class="text-muted">Job title or meta information</p>
            <button type="button" class="btn btn-primary">Call to Action</button>
            </div>
            
        </div>
    </div>
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title. Here is some extra information, this could be something wonderful!</p>
            <button type="button" class="btn btn-light"><span class="fa fa-heart"></span><span class="sr-only">Like</span></button>
            <button type="button" class="btn btn-light"><span class="fa fa-comment"></span><span class="sr-only">Comment</span></button>
        </div>
    </div>
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-outline-primary">Primary</button>
        </div>
        <div class="card-footer">Extra information</div>
    </div>
' react='' />

![Example of a complex card 1](https://github.com/gctools-outilsgc/design-system/blob/master/documentation/examples/card%20example_2.png)
![Example of a complex card 2](https://github.com/gctools-outilsgc/design-system/blob/master/documentation/examples/card%20example_3.png)
![Example of a complex card 3](https://github.com/gctools-outilsgc/design-system/blob/master/documentation/examples/card%20example_6.png)
