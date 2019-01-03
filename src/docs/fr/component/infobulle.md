---
path: "/component/tooltips"
subnav: "2/Standard/Standard/9"
lang: "fr"
title: "Infobulles"
---

<helmet>
<title> Infobulles - Système de conception Aurora </title>
</helmet>

# Infobulle

## Utilisation

Les infobulles sont des étiquettes de texte contenant du texte informatif qui apparaît lorsque des utilisateurs placent leur curseur sur un élément, effectuent un long clic sur un élément ou l’accentuent. Les infobulles fournissent un court texte descriptif au sujet de leur élément associé.

## Pratiques exemplaires

Les infobulles doivent être aussi courtes que possible et fournissent de l’information supplémentaire pour les boutons ou les entrées de formulaire.

Les infobulles sont toujours utilisées pour de l’information supplémentaire. L’information essentielle qui clarifie une action ou démontre les exigences d’une entrée de formulaire devrait toujours être immédiatement visible sur la page.

<documentationtabs remove="react">
    <doctabpanel type="html">


## Comment utiliser

Éléments importants à savoir par rapport à l’utilisation du module d’extension d’infobulle : 
* Les infobulles se fient sur la bibliothèque de tiers [Popper.js](https://popper.js.org/) pour le positionnement. Vous devez ajouter [popper.min.js](site.cdn.popper) avant aurora.js.
* Si vous concevez JavaScript à partir de la source, il [requires util.js](https://getbootstrap.com/docs/4.2/getting-started/javascript/#util).
* Les infobulles sont à option d’adhésion, pour des raisons de performance, et **vous devez donc les initialiser vous-mêmes.** 
* Les infobulles dotées de titres à longueur zéro ne sont jamais affichées. 
* Précisez `container: ‘body'` pour éviter d’éprouver des difficultés liées au rendu d’image dans le cadre des composantes plus complexes (comme dans le cas de nos groupes d’entrées et de boutons, entre autres).
* L’activation d’infobulles pour des éléments cachés ne fonctionnera pas.
* Les infobulles pour des éléments `.disabled` ou `disabled` doivent être activés par l’entremise d’un élément enveloppeur.
* Lorsqu’elles seront activées à partir d’hyperliens longs de plusieurs lignes, les infobulles seront centrées. Utilisez `white-space: nowrap` dans vos `<a>` pour éviter ce comportement.
* Les infobulles doivent être cachées avant que leurs éléments correspondants ne soient retirés du DOM.

## Exemple

Survolez sur le bouton ci-dessous pour voir une infobulle: 

<tooltipexample id="html-tooltip"></tooltipexample>

```html
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Plus d'information ici">
  Infobulle
</button>
```

Pour obtenir de plus amples renseignements par rapport à l’utilisation des infobulles, veuillez vous référer aux [documents de Bootstrap](https://getbootstrap.com/docs/4.1/components/tooltips/).

</doctabpanel>
    <doctabpanel type="design">
          

## Style
Dans leur état normal, les infobulles sont stylisées comme suit :

Les infobulles sont placées à 5px de distance de l’élément qu’elle décrit. Les infobulles sont contenues dans un rectangle avec un remplissage de 5px par 7px, avec une bordure d’un rayon de 4px et la couleur de remplissage <badge style="background-color: #666666">#666666</badge> à 90 % d’opacité. Le texte est affiché utilisant Nunito Sans Regular à 14px de la couleur <badge style="background-color: #FFFFFF; color: black">#FFFFFF</badge>.

<tooltipexample id="design-tooltip"></tooltipexample>

</doctabpanel>
    </documentationtabs>




