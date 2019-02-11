---
path: "/component/badges"
subnav: "2/Standard/Standard/2"
lang: "fr"
title: "Badges"
---

<helmet>
<title> Badges - Système de conception Aurora </title>
</helmet>

# Badges

Les badges sont très polyvalents. À titre d’exemple, ils peuvent être utilisés pour montrer les avis, le contenu des étiquettes ou afficher les auteurs de contenu.

Les badges peuvent être stylisés comme des balises ou des images peuvent y être inclues pour créer des jetons.


<documentationtabs remove="react">
      <doctabpanel type="html">
          

Les badges utilisent la classe `.badge`. Vous pouvez ajouter des classes de modification pour changer les couleurs d’une badge.

<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primaire</span>
  <span class="badge badge-secondary">Secondaire</span>
  <span class="badge badge-success">Succès</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Avertissement</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Clair</span>
  <span class="badge badge-dark">Foncé</span>
</div>

```html
<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primaire</span>
  <span class="badge badge-secondary">Secondaire</span>
  <span class="badge badge-success">Succès</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Avertissement</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Clair</span>
  <span class="badge badge-dark">Foncé</span>
</div>
```

### Donner un sens aux technologies d’assistance 

Lors du codage des badges, le texte alternatif qui sera lu par les lecteurs d’écran doit également inclure le contexte. Par exemple, le badge devrait indiquer « 40 courriels non lus » plutôt qu'uniquement « 40 ».

La couleur aide à la compréhension de façon visuelle, ce qui n'est pas transmis aux utilisateurs de technologies d'assitance tels que les lecteurs d'écran.  Veillez à ce que les renseignements indiqués par la couleur se différencient de manière évidente du contenu (p. ex., le texte visible) ou qu’ils soient inclus de différentes manières, par exemple, par l’ajout de texte caché avec la classe `.sr-only`. 


## Badges de notification

Les badges de notification s’adaptent à la taille de l’élément parent immédiat en utilisant la taille relative des polices et les unités `em`.

Les badges de notification peuvent être utilisés dans des liens ou des boutons pour fournir un compteur.

<div class="mt-3 mb-3">
  <a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">messages non lus</span>
  </a>
</div>

```html 
<a href="#">
    Profile <span class="badge badge-secondary">9</span>
    <span class="sr-only">message non lus</span>
</a>
```

## Balises

Les balises sont une version stylisée des badges. Les balises ont tendance à être utilisées pour des éléments plus interactifs. Ajoutez la classe `.badge-tag` à un badge ordinaire pour en faire une balise.

Vous pouvez ajouter certains éléments interactifs à vos balises, comme des liens ou des boutons de suppression.

<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>

```html
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>
```

## Jetons

Les jetons sont des laissez-passer avec une image. Ajoutez votre image au laissez-passer en utilisant l’élément `<img>`.

Ils sont utilisés pour afficher des renseignements complexes (p. ex., un utilisateur) dans un espace restreint.

<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 1</span>
<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 2</span>

```html
<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 1</span>
<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 2</span>
```

</doctabpanel>
    <doctabpanel type="design">
    

Les badges peuvent utiliser différentes couleurs pour transmettre différents renseignements aux utilisateurs.

Les badges ont un remplissage de 4px par 6,4px. Les laissez-passer auront une taille adaptée selon le texte. Ils ont un rayon de contour de 4px.

Les laissez-passer ont différentes couleurs, comme on peut le voir ci-dessous. Consultez la section [Couleur](/component/colour) pour de plus amples renseignements sur la façon d’utiliser certaines couleurs.

<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primaire</span>
  <span class="badge badge-secondary">Secondaire</span>
  <span class="badge badge-success">Succès</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Avertissement</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Clair</span>
  <span class="badge badge-dark">Foncé</span>
</div>

## Notification badges
    
Les badges dans ce système de conception s’affichent comme suit :

Rectangle d’une largeur de 28px et d’une hauteur de 19px. Rayon de la bordure de 8px. Code couleur de l’arrière-plan no <badge style="background-color: #4D5D6C">#4D5D6C</badge>. Couleur de texte <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>. Texte centré dans le rectangle.

<div class="mt-3 mb-3">
  <a href="#">
    Profil <span class="badge badge-secondary">9</span>
    <span class="sr-only">message(s) non lus</span>
  </a>
</div>

## Balises

Les balises sont une forme stylisée des badges.

Les balises sont de forme rectangulaire et ont un rayon de bordure de 4 px. Le côté gauche de la balise est stylisé à l’aide d’un triangle et d’un cercle blanc. Les balises utilisent les couleurs secondaires dans la palette choisie, et la couleur du texte sera soit noire soit blanche selon la couleur de la balise. Reportez-vous à la [section de couleur](component/colour) pour obtenir de plus amples renseignements sur les couleurs de textes à utiliser.  

Les balises peuvent également comprendre un bouton de suppression aligné à droite à côté du texte. Ce bouton est représenté par un cercle noir et blanc accompagné d’un « x » transparent.

Les étiquettes sont dimensionnées de façon à correspondre à la longueur des mots-clés et ont un remplissage de 7px dans la partie supérieure, à droite et dans la partie inférieure et de 10px à gauche.

<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">HTML</a>
    <a href="#!" class="badge badge-primary badge-tag">CSS</a>
    <a href="#!" class="badge badge-primary badge-tag">JavaScript</a>
</div>
<div class="mt-2">
    <a href="#!" class="badge badge-primary badge-tag">
    HTML
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    CSS
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
    <a href="#!" class="badge badge-primary badge-tag">
    JavaScript
    <button type="button" class="close" aria-describedby="Close / Delete"><span aria-hidden="true">×</span></button>
    </a>
</div>
<br>

## Jetons

Les jetons sont semblables à une badge ordinaire, mais avec une image. Ils sont utilisés pour afficher des renseignements complexes (p. ex., un utilisateur) dans un espace restreint.

Les jetons sont de forme rectangulaire et ont des coins arrondis de 4px. Une image d’avatar est affichée à gauche du jeton. Les jetons sont d’une dimension qui correspond à la longueur du nom de l’utilisateur. Les jetons ont un remplissage de 7px sur tous les côtés.

Les jetons ont trois variations différentes et sont affichées comme suit :

<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 1</span>
<span class="badge badge-primary badge-chip"><img alt="petit avatar" class="avatar avatar-sm" src="https://bit.ly/2GLjkzx"> Utilisateur 2</span>

**Normal** : Case rectangulaire remplie avec la couleur <badge style="background-color: ##002D42">##002D42</badge>. Texte noir. Petit avatar (26px par 26px) aligné à gauche.

**Contrôle de l’utilisateur** : Même chose que normal, mais il y a un icône de suppression supplémentaire à droite. Cette icône est de couleur <badge style="background-color: #4D5D6C">#4D5D6C</badge> avec un « x » transparent et elle est alignée à droite. Petit avatar (26px par 26px) aligné à gauche.

**Pointage** : Même chose que la puce contrôlée par l’utilisateur, mais a la couleur d’arrière-plan <badge style="background-color: #4D5D6C">#4D5D6C</badge>, l’icône de suppression est blanc et un « x » transparent y figure. Petit avatar (26px par 26px) aligné à gauche.

</doctabpanel>
    </documentationtabs>



