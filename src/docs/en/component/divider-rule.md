---
path: "/component/divider-rule"
subnav: "2/Standard/Standard/6"
lang: "en"
title: "Divider/rule"
---

<helmet>
<title> Divider/Rule - Aurora Design System </title>
</helmet>

# Divider/Rule

Dividers are used to separate content on a page, and are used primarily to break up long pages of text, or to separate titles from other content.

For cards and other content, the divider is the length of the card with padding set to 100% of the container width. Dividers are 1px wide and coloured at <badge style="background-color: #666666;">#666666</badge>

When used on cards, dividers are placed underneath the card heading.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <hr />
    <div class="card-subtitle text-muted">Meta Information</div>
    <p class="card-text">Some quick example text to build on the card title</p>
    <a href="#" class="card-link">Another link</a>
    </div>
</div>

<codeblock html='
    <div class="card mb-2 d-inline-block" style="max-width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <hr />
            <div class="card-subtitle text-muted">Meta Information</div>
            <p class="card-text">Some quick example text to build on the card title</p>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
' react='' />

<p>Hello. I'm a little bit of body text. Plain and simple.</p>
<hr />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere.</p>

<codeblock html='
    <p>Hello. Im a little bit of body text. Plain and simple.</p>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere.</p>
' react='' />
