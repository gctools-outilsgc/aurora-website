---
path: "/component/avatars-and-thumbnails"
subnav: "2/Standard/Standard/1"
lang: "en"
title: "Avatars and thumbnails"
---

<helmet>
<title> Images, Avatars and Thumbnails - Aurora Design System </title>
</helmet>

# Images, Avatars and Thumbnails

<div class="mt-3">
    <div class="card">
    <div class="card-body">
        <ul class="list-unstyled">
        <li class="media media-comment">
            <a href="#!">
                <img alt="..." class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
            </a>
            <div class="media-body">
                <div class="media-heading">
                <a href="#!">John Doe</a>
                <small class="text-muted">1 hour ago</small>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere. Pellentesque varius massa nec turpis interdum tincidunt. Fusce volutpat rutrum nunc, non accumsan lacus consequat vel.
                </div>
                <div class="media-footer">
                <a href="#!"><small>Reply</small></a>
                <a href="#!"><small>Like</small></a>
                </div>
            </div>
        </li>
        </ul>
    </div>
    </div>
</div>

## Block Images

Block images are separated from other elements on the page \(i.e. text\) and are typically centered with a set padding. In a layout including text, the text will continue on the next line after the image.

## Inline Image

Inline images are aligned vertically with other elements on the page \(i.e. text\), and may be left or right aligned. Inline images only have specified padding for left and right borders. They flow along with text content, and the text will be wrapped around the remaining space around the image.

## Full Width Image

Full-width images extend from one end of the content area to the other. Sometimes referred to as a hero image.

## Avatars

Avatars are square, small images used to identify users on the site or application. Avatars are often combined with the user's profile and other components such as cards, comments, and buttons.

As a default avatars use the [user SVG icon](https://fontawesome.com/icons/user?style=solid) from Font Awesome.

When users upload their avatar, they are prompted to crop the image to fit into the avatar's square ratio.

Avatars are used in three sizes and styled as follows:


**Small:** Square image with corners rounded by 4px. Sized at 26 x 26 pixels.

Used on small components where the user would need to be identified, such as tags or chat.

<img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">

<codeblock html='<img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

**Medium:** Square image with corners rounded by 4px. Sized at 50 x 50 pixels.

Used in combination with other components such as comments, chat, cards and anywhere else you would need to identify the user.

<img alt="medium avatar" class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">

<codeblock html='<img alt="medium avatar" class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

**Large**: Square image with corners rounded by 4px. Sized at 115 x 115 pixels.

Used directly on the user's profile.

<img alt="large avatar" class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">

<codeblock html='<img alt="large avatar" class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

## Thumbnails

Thumbnails are small versions of an image that are used as previews to content. They are often combined with other components such as cards, comments, image previews, etc.

*Thumbnail component*

Thumbnails are always square with a border radius 1px. They have a black stroke width of 0.25px. They are sized at 115 x 115 pixels

Thumbnails do not crop the image but simply re-scale it. Thumbnails are typically left-aligned when combined with other components.
