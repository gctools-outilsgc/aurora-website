---
path: "/component/tooltips"
subnav: "2/Standard/Standard/10"
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

## Overview

*texte ici*

## Exemples

*texte ici*

<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

*Codeblock here*

*texte ici*

</doctabpanel>
    <doctabpanel type="design">
          
## Style
Dans leur état normal, les infobulles sont stylisées comme suit :

Les infobulles sont placées à 12px de distance de l’élément qu’elle décrit. Les infobulles sont contenues dans un rectangle avec un remplissage de 5px par 7px, avec une bordure d’un rayon de 4px et la couleur de remplissage <badge style="background-color: #666666">#666666</badge> à 90 % d’opacité. Le texte est affiché utilisant Nunito Sans Regular à 14px de la couleur <badge style="background-color: #FFFFFF; color: black">#FFFFFF</badge>.

![Elément infobulle](../../../img\components\tooltip.png)

</doctabpanel>
    </documentationtabs>




