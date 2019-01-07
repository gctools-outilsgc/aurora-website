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

Les images peuvent avoir des dimensions différentes selon la mise en page et le contenu. Des classes précises peuvent être utilisées pour les images en série, en ligne ou pleine largeur afin de s’intégrer facilement à la mise en page de la grille existante du site.

Les images en série sont séparées des autres éléments sur la page (c’est-à-dire le texte) et sont habituellement centrées avec un remplissage prédéterminé. Dans une mise en page comprenant du texte, le texte continuera sur la ligne suivante après l’image.

Les images en ligne sont alignées verticalement avec les autres éléments de la page (c’est-à-dire le texte) et peuvent être alignées à gauche ou à droite. Les images en ligne ont seulement du remplissage précis pour les bordures gauches et droites. Elles accompagnent le contenu du texte et le texte est placé dans l’espace restant autour de l’image.

Les images en pleine largeur s’étirent d’un bout à l’autre de la zone de contenu. Parfois, on l’appelle une image « héros ».

## Avatars

Les avatars sont de petites images carrées utilisées pour identifier les utilisateurs sur le site ou l’application. Les avatars sont souvent combinés avec le profil de l’utilisateur et d’autres éléments comme des cartes, des commentaires et des boutons.

## Vignettes

Les vignettes sont de petites versions d’une image qui sont utilisées comme aperçu du contenu. Elles sont souvent combinées à d’autres éléments comme des cartes, des commentaires, des aperçus d’images, etc.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Images

Les images d’Aurora s’effectuent en réaction avec `.img-fluid` `.max-width: 100%;` et `height: auto;` de sorte que l’image corresponde à l’élément parent.

Les images en série peuvent être harmonisées à l’aide de `.float-right` `.float-left` ou `.mx-auto` (centré).


<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Exemple de taille d’image" class="img-fluid mx-auto">
</div>

```html
<div class="mx-auto" style="max-width: 500px"> 
    <img src="https://bit.ly/2LFHA5a" alt="Exemple de taille d’image" class="img-fluid">
</div>
```
        
## Avatars

Les avatars utilisent la classe `.avatar` pour appliquer un style à une image.
Les avatars ont deux classes de tailles de rechange: petit `.avatar-sm` et grand `.avatar-lg`.


<img alt="avatar petit" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">

<img alt="avatar moyen" class="avatar" src="https://bit.ly/2GLjkzx">

<img alt="avatar grand" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">

```html 
<img alt="avatar petit" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">
    
<img alt="avatar moyen" class="avatar" src="https://bit.ly/2GLjkzx">

<img alt="avatar grand" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">
```

## Vignettes

Les vignettes utilisent la classe `.img-thumbnail` pour ajouter une bordure de 1 px et un rayon de 1 px à l’image.

<img src="https://bit.ly/2LFHA5a" alt="Exemple d'une vignette" class="img-thumbnail" style="width: 115px; height: 115px;">

```html
<img class="img-thumbnail" src="https://bit.ly/2LFHA5a" alt="Exemple d'une vignette"  style="width: 115px; height: 115px;">
```

</doctabpanel>
    <doctabpanel type="design">
          

## Avatars

Les avatars sont utilisés en trois tailles et sont stylisés comme suit :

<img alt="small avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx">

**Petit** : image carrée avec les coins arrondis par 4px. Taille à 26 x 26 pixels.

Utilisés sur les petits éléments où l’utilisateur a besoin d’être identifié comme sur des mots-clés ou le clavardage.

<img alt="Avatar moyen" class="avatar" src="https://bit.ly/2GLjkzx">

**Moyen** : image carrée avec les coins arrondis par 4px. Taille à 50 x 50 pixels.

Utilisée en combinaison avec d’autres éléments tels que des commentaires, le clavardage, des cartes et tout autre endroit où vous auriez besoin d’identifier l’utilisateur.

<img alt="large avatar" class="avatar avatar-lg" src="https://bit.ly/2GLjkzx">

**Grand** : image carrée avec les coins arrondis par 4px. Taille à 115 x 115 pixels.

Utilisé directement sur le profil de l’utilisateur.


## Vignettes

<img src="https://bit.ly/2LFHA5a" alt="Exemple d'une vignette" class="img-thumbnail" style="width: 115px; height: 115px;">

Les vignettes sont toujours carrées avec une bordure d’un rayon de 1px. Elles ont un trait noir d’une largeur de 0,25 px. Elles ont une taille de 115 x 115 pixels.

Les vignettes ne rognent pas l’image, mais la redimensionnent. Les vignettes sont généralement alignées à gauche lorsqu’elles sont combinées à d’autres éléments.

</doctabpanel>
    </documentationtabs>

