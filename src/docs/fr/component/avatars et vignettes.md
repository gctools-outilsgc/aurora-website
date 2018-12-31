---
path: "/component/avatars-and-thumbnails"
subnav: "2/Standard/Standard/1"
lang: "fr"
title: "Images, avatars et vignettes"
---

<helmet>
<title> Images, avatars et vignettes - Système de conception Aurora </title>
</helmet>

# Images, avatars et vignettes


## Images

*Texte ici*

## Avatars

Les avatars sont de petites images carrées utilisées pour identifier les utilisateurs sur le site ou l’application. Les avatars sont souvent combinés avec le profil de l’utilisateur et d’autres éléments comme des cartes, des commentaires et des boutons.

## Vignettes

Les vignettes sont de petites versions d’une image qui sont utilisées comme aperçu du contenu. Elles sont souvent combinées à d’autres éléments comme des cartes, des commentaires, des aperçus d’images, etc.

<documentationtabs remove="react">
      <doctabpanel type="html">
          
## Images

*texte ici*

<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Image sizing example" class="img-fluid mx-auto">
</div>

```html
<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Image sizing example" class="img-fluid">
</div>
```
        
## Avatars

*texte ici*

<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">

<img alt="medium avatar" class="avatar" src="https://bit.ly/2GLjkzx">

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">

```html 
<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">
    
<img alt="medium avatar" class="avatar" src="https://bit.ly/2GLjkzx">

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">
```

## Vignettes

*texte ici*

<img src="https://bit.ly/2LFHA5a" alt="thumbnail class example" class="img-thumbnail" style="width: 115px; height: 115px;">

```html
<img class="img-thumbnail" src="https://bit.ly/2LFHA5a" alt="thumbnail class example"  style="width: 115px; height: 115px;">
```

</doctabpanel>
    <doctabpanel type="design">
          

## Avatars

Les avatars sont utilisés en trois tailles et sont stylisés comme suit :

<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">

**Petit** : image carrée avec les coins arrondis par 4px. Taille à 26 x 26 pixels.
Utilisés sur les petits éléments où l’utilisateur a besoin d’être identifié comme sur des mots-clés ou le clavardage.

<img alt="medium avatar" class="avatar" src="https://bit.ly/2GLjkzx">

**Moyen** : image carrée avec les coins arrondis par 4px. Taille à 50 x 50 pixels.
Utilisée en combinaison avec d’autres éléments tels que des commentaires, le clavardage, des cartes et tout autre endroit où vous auriez besoin d’identifier l’utilisateur.

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">

**Grand** : image carrée avec les coins arrondis par 4px. Taille à 115 x 115 pixels.

Utilisé directement sur le profil de l’utilisateur.


## Vignettes

<img src="https://bit.ly/2LFHA5a" alt="thumbnail class example" class="img-thumbnail" style="width: 115px; height: 115px;">

Les vignettes sont toujours carrées avec une bordure d’un rayon de 1px. Elles ont un trait noir d’une largeur de 0,25 px. Elles ont une taille de 115 x 115 pixels.

Les vignettes ne rognent pas l’image, mais la redimensionnent. Les vignettes sont généralement alignées à gauche lorsqu’elles sont combinées à d’autres éléments.

</doctabpanel>
    </documentationtabs>

