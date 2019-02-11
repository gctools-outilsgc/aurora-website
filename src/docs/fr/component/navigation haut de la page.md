---
path: "/component/back-to-top"
subnav: "3/Navigation/Navigation/2"
lang: "fr"
title: "Haut de la page"
---

<helmet>
    <title> Haut de la page - Système de conception Aurora </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Haut de la page

Le bouton « Haut de page » permet aux utilisateurs de retourner en haut de la page Web. Cet élément est montré dans le coin inférieur droit de la page ou de l'écran d’un appareil mobile. L’élément n’apparaît que lorsque l’utilisateur s’est rendu à un certain point sur la page Web.

Les boutons « Haut de la page » sont nécessaires pour les pages Web ayant un défilement continu ou une page qui comprend beaucoup de contenu. Une bonne façon de procéder consiste à inclure un bouton « Haut de page » pour toute page Web plus longue que quatre écrans.

<documentationtabs remove="react">
    <doctabpanel type="html">
        

Les boutons de retour en haut de la page sont un composant personnalisé conçu pour Aurora. Les boutons de retour en haut de la page comprennent une version Web et une version mobile. Utilisez la classe `.btn-backtotop` pour créer le bouton. La classe `.mobile` peut être ajoutée pour créer la version mobile. Veuillez noter que la version mobile nécessitera une icône.

Dans la version mobile, assurez-vous d’utiliser la classe `.sr-only` pour fournir le contexte du bouton. 

<a href="#main-content" class="btn btn-backtotop mb-3 mt-3"><i class="fa fa-arrow-up icon"></i>Haut de la page</a>

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Haut de la page</span></a>

```html
<a href="#main-content" class="btn btn-backtotop"><i class="fa fa-arrow-up icon"></i>Haut de la page</a>

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Haut de la page</span></a>
```

</doctabpanel>
    
<doctabpanel type="design">
          

Ce bouton devrait toujours porter la mention « Haut de page » puisqu’il s’agit de l’étiquette la plus descriptive et la plus attendue pour la fonction.

Le bouton Haut de la page dans le système de conception a le style suivant :

**Web:** Le texte Retour en haut de la page est stylisé à l’aide du texte de bouton (police « Nunito Sans Bold », 14 px) et de la couleur <badge style="background-color: #666666;">#666666</badge>.

Le texte comporte un remplissage de 9 px sur 15 px, ayant une bordure de 1px de couleur <badge style="background-color: #CECECE;color:black;">#CECECE</badge> et un rayon de bordure de 16 px. L’icône de la flèche est alignée à gauche du texte.

<a href="#main-content" class="btn btn-backtotop mb-3"><i class="fa fa-arrow-up icon"></i>Haut de la page</a>

**Mobile:** Cercle blanc ayant un rayon de 43 px. La bordure est de 1 px de couleur <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. Une ombre portée de couleur <badge style="background-color: #000000;">#000000</badge>, 20 % d’opacité, 0 décalage pour x, décalage 2 px pour y et 2 px flou.

Il y a une icône de flèche centrée dans le cercle (flèche vers le haut à partir de Font Awesome). La flèche est de couleur <badge style="background-color: #666666;">#666666</badge>.

<a href="#main-content" class="btn btn-backtotop mobile"><i class="fa fa-arrow-up icon" aria-hidden="true"></i><span class="sr-only">Haut de la page</span></a>

</doctabpanel>
</documentationtabs>


