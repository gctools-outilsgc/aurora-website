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

<div>
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Example Card</cardtitle>
        <img src="https://yt3.ggpht.com/a-/ACSszfEbdtkOd9P1y-uljH_k64qzPPSdMvymt3mkmQ=s900-mo-c-c0xffffffff-rj-k-no" style="width: 150px; margin-bottom: 15px;" />
        <button outline className="col text-center" style="maxWidth: 300px;" block>Button in a card</button>
        </cardbody>
    </card>
</div>

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

<div>
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Example Title</cardtitle>
        <cardtext>Contents of the card</cardtext>
        </cardbody>
    </card>
</div>

Basic cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.


#### Image Cards

Image cards use the basic card template but include an image above the header.

<div>
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Example Image</cardtitle>
        <img src="https://yt3.ggpht.com/a-/ACSszfEbdtkOd9P1y-uljH_k64qzPPSdMvymt3mkmQ=s900-mo-c-c0xffffffff-rj-k-no" style="width: 150px; margin-bottom: 15px;" />
        <cardtext>This card contains an image</cardtext>
        </cardbody>
    </card>
</div>

Image cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

The image is placed 20px above the header. The image spans the entire width of the card.

## Actionable Cards

Actionable cards use the basic card template, but include additional components below the main content. Example of additional components may include primary or secondary buttons, icon buttons, or avatars. Actionable cards can also be combined with the image card style.

<div>
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Example Actionable Card</cardtitle>
        <cardtext>This card contains a button</cardtext>
        <button outline className="col text-center" style="maxWidth: 300px;" block>Button in a card</button>
        </cardbody>
    </card>
</div>

Actionable cards are styled as follows:

White (#FFFFFF) rectangle with border radius of 4px and a drop shadow of 15% opacity and a 5px blur. The card has a padding of 20px by 16px. Every card has a title using heading 3 (Rubik Medium at 24px) with a divider placed 12px below the header. The content of the card is placed 12px below the divider.

A second divider is placed 12px below the content. Actionable items (i.e. buttons) are placed 12px below this divider.

## Complex Cards

Cards can technically include any number of component combinations. Using the base styles above, components such as placeholder text (metadate), avatars, icon buttons, buttons can be added below the header, or within the actionable section below the main content.

![Example of a complex card 1]
<div className="row" style="width: 100%; justify-content: space-between;">
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Complex Card 1</cardtitle>
        <cardtext>This card contains multiple types of buttons</cardtext>
        <button color="secondary" className="col text-center" style="maxWidth: 300px;" block>Do something</button>
        <button outline="true" color="primary" className="col text-center" style="maxWidth: 300px; margin-top: 10px" block>Do something else</button>
        <button outline color="warning" className="col text-center" style="maxWidth: 300px; margin-top: 10px" block>Do <i>nothing</i></button>
        </cardbody>
    </card>
    <card className="col text-center" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Complex Card 2</cardtitle>
        <img src="https://yt3.ggpht.com/a-/ACSszfEbdtkOd9P1y-uljH_k64qzPPSdMvymt3mkmQ=s900-mo-c-c0xffffffff-rj-k-no" style="width: 150px; margin-bottom: 15px;" />
        <button outline className="col text-center" style="maxWidth: 300px;" block>Log in</button>
        </cardbody>
    </card>
    <card className="col text-left" style="maxWidth: 300px; margin: 0 auto;">
        <cardbody>
        <cardtitle>Complex Card 3</cardtitle>
        <cardtext>This card's text is on the left rather than centered</cardtext>
        <cardtext>
            <small className="text-muted">August 29th, 2018</small>
        </cardtext>
        <button outline className="col text-center" style="maxWidth: 300px;" block>Button in a card</button>
        </cardbody>
    </card>
</div>
