---
path: "/component/divider-rule"
subnav: "2/Standard/Standard/6"
lang: "fr"
title: "Séparateur ou règle"
---

<helmet>
<title> Séparateurou règle - Système de conception Aurora </title>
</helmet>

# Séparateur ou règle

Les séparateurs servent à séparer le contenu sur une page et sont principalement utilisés pour diviser les longues pages de textes ou pour séparer des titres d’autres contenus.

Pour les cartes et d’autres contenus, le séparateur est de la longueur de la carte, et toute la largeur du conteneur est remplie. Les séparateurs sont d’une largeur de 1px et portent la couleur <badge style="background-color: #666666">#666666</badge>.

Lorsque des cartes sont utilisées, les séparateurs sont placés sous l’en-tête de carte.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Titre de la carte</h5>
    <hr />
    <div class="card-subtitle text-muted">Méta-information</div>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">>Titre de la carte</h5>
        <hr />
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
    </div>
</div>
```
<div class="card">
    <div class="card-body">
        <p>Bonjour, je suis texte pour une paragraphe. </p>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere.</p>
    </div>
</div>

```html
<p>Bonjour, je suis texte pour une paragraphe.</p>
<hr />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere.</p>
```
