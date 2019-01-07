---
path: "/component/progress-indicators"
subnav: "4/Forms/Formulaires/5"
lang: "fr"
title: "Indicateurs de progrès"
---

<helmet>
    <title> Indicateurs de progrès - Aurora Design System </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Indicateurs de progrès

Les indicateurs de progrès sont la clé pour la visibilité de l’état du système. Ils représentent une voie vers l’achèvement d’une tâche ou d’un processus particulier. Les indicateurs d’étapes aident l’utilisateur à déterminer ce qu’il a terminé dans le processus, et ce qu’il lui reste à faire.

## Indicateur des étapes

Les indicateurs d’étapes sont utilisés pour les tâches qui nécessitent de multiples étapes. Afin de représenter visuellement une page ou un élément qui est en chargement, utilisez une boucle de progression ou une barre de progression plutôt qu’un indicateur d’étapes.

## Barres de progression

Les barres de progression sont utilisées afin de représenter visuellement une page ou des fonctions en chargement ou en cours. Les barres de progression indiquent un pourcentage, en plus de la représentation visuelle indiquée dans la barre.

Les barres de progression déterminent les niveaux de progrès, ce qui signifie qu’il y a un point d’achèvement clair. Lorsque la barre de pression est remplie et qu’elle atteint 100 %, l’application devrait terminer le processus.

## Boucles de progression

Les boucles de progression sont utilisées pour indiquer le chargement d’une page ou d’une fonction. Une règle générale est d’utiliser des boucles de progression pour les processus qui durent moins de 4 secondes. Les boucles de progression indiquent des niveaux de progrès indéterminés, ce qui signifie qu’il n’y a pas d’achèvement clair et que la boucle d’animation se poursuit jusqu’à ce que le processus soit terminé.

<documentationtabs remove="react">
    <doctabpanel type="html">

## Indicateur des étapes 

Les indicateurs d’étape dans Aurora sont une composante personnalisée. Cette composante est construite à l’aide de l’élément `<ul>`.

Voir les exemples ci-dessous :

### Indicateur d’étape régulier

L’indicateur d’étapes régulier est utilisé simplement comme une indication visuelle de la progression. L’élément `<ul>` sera contenu dans l’élément `<div>` avec la classe `.step-indicator`.

<div role="group" aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">Ouvrir une séance<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choisir un intérêt</li>
         <li>ajouter des amis<span class="sr-only">not completed</span></li>
         <li>visualiser la carte<span class="sr-only">not completed</span></li>
      </ul>
 </div>

```html
<div role="group" aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">Ouvrir une séance<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choisir un intérêt</li>
         <li>ajouter des amis<span class="sr-only">not completed</span></li>
         <li>visualiser la carte<span class="sr-only">not completed</span></li>
      </ul>
 </div>
```

### Indicateur d’étape de navigation

Selon le contenu de la page, vous pouvez ajouter des liens de navigation dans l’indicateur d’étapes. Dans ce cas, votre élément `<ul>` sera inclus dans un élément `<nav>`. Vous pouvez ensuite effectuer un renvoi de votre texte à l’aide d’un élément `<a>` pour faire un lien dans l’élément de liste.

 <nav aria-label="progress" class="step-indicator">
      <ul class="steps">
          <li class="complete">
            <a href="#">Ouvrir une séance</a><span class="sr-only">completed</span>
          </li>
          <li class="active" aria-current="true">
            <a href="#">choisir un intérêt</a>
          </li>
          <li>
            <a href="#">ajouter des amis</a><span class="sr-only">not completed</span>
          </li>
          <li>
            <a href="#">visualiser la carte</a><span class="sr-only">not completed</span>
          </li>
       </ul>
  </nav>

```html
 <nav aria-label="progress" class="step-indicator">
      <ul class="steps">
          <li class="complete">
            <a href="#">Ouvrir une séance</a><span class="sr-only">completed</span>
          </li>
          <li class="active" aria-current="true">
            <a href="#">choisir un intérêt</a>
          </li>
          <li>
            <a href="#">ajouter des amis</a><span class="sr-only">not completed</span>
          </li>
          <li>
            <a href="#">visualiser la carte</a><span class="sr-only">not completed</span>
          </li>
       </ul>
  </nav>
```

### Donner un sens aux technologies d’assistance

L’utilisation de couleurs pour ajouter du sens fournit seulement une indication visuelle qui n’est pas transmise aux utilisateurs de technologies d’assistance, comme les lecteurs d’écran. Veillez à ce que les renseignements indiqués par la couleur se différencient de manière évidente du contenu (p. ex., le texte visible) ou qu’ils soient inclus de différentes manières, par l’ajout de texte caché avec la classe `.sr-only`, par exemple.

Vous devrez également ajouter `aria-current="true"` à l’étape active actuelle pour fournir plus de contexte.

## Barres de progression

Les composantes de progrès sont conçues à l’aide de deux éléments de HTML, certains éléments de CSS pour l’établissement de la largeur et quelques attributs. On n’utilise pas l’élément `<progress>` d’HTML5 afin de veiller à ce que vous puissiez superposer des barres de progrès, les animer et y poser des étiquettes de texte.

On utilise `.progress` comme enveloppeur pour indiquer la valeur maximale de la barre de progrès. On se sert d’inner `.progress-ba`r pour indiquer le progrès réalisé. La barre .progress-bar nécessite un style en ligne, une classe utilitaire ou une feuille de style en cascade CSS personnalisée pour l’établissement de la largeur. La barre .progress-bar nécessite également certains attributs de rôle et d’aria pour être accessible. Si vous regroupez tous ces éléments, vous obtenez les exemples suivants.


Les barres de progression devraient toujours inclure un indicateur de texte, en plus de la représentation visuelle pour donner plus de contexte. Ce texte devrait être inclus dans l’étiquette `<alt>`.

Ajoutez des étiquettes à vos barres de progrès en plaçant du texte sur la barre `.progress-bar.`
          
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>

```html
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
```

## Boucles de progression

Vous pouvez consulter la [documentation sur la police Awesome](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) afin d’animer la boucle de pression pour démontrer le chargement d’une page ou d’une fonction.

<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette circulaire</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette pour rafraîchir</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette avec des points</span></i>

```html
<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette circulaire</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette pour rafraîchir</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette avec des points</span></i>
```

</doctabpanel>
    <doctabpanel type="design">
          

## Indicateur des étapes

Si une étiquette est requise pour votre indicateur d’étape, l’étiquette doit être placée au haut de l’élément et alignée à la gauche.

Les couleurs de l’indicateur d’étapes peuvent varier, mais assurez-vous que les exigences de contraste sont respectées. Visitez la section sur les couleurs [section sur les couleurs](/component/colour) pour plus de renseignements sur le choix de couleurs accessibles.

Les indicateurs d’étapes sont stylisés comme suit : 

Chaque cercle est de 40px avec une bordure de 4px et la couleur <badge style="background-color: #CECECE; color:black;"> #CECECE</badge>.

Les numéros de chaque étape utilisent le style de titre 2, « Rubik Regular » à 21 points.

Entre les étapes, il y a une ligne centrale d’une hauteur de 4px. Cette ligne devrait être de la même couleur que le cercle extérieur.

Pour les étapes terminées, on utilise une icône de crochet au lieu du numéro et la bordure est de couleur <badge style="background-color: #0278A4"> #0278A4</badge>. On utilise également cette couleur pour la case à cocher.

La ligne entre les étapes terminées et les étapes actives est également remplie à l’aide du no <badge style="background-color: #0278A4"> #0278A4</badge>.

Pour l’étape active, on utilise toujours le numéro. De plus, le numéro et la bordure sont remplis à l’aide de la couleur <badge style="background-color: #0278A4"> #0278A4</badge>. Pour l’étape active, l’ombrage est de (x).

Chaque étape devrait également comprendre du texte en dessous pour le contexte. Limitez ce texte à un ou deux mots. La police de caractères de ce texte est de 12px, alignée au centre, et le texte est entièrement en majuscule.


<div role="group" aria-label="progress" class="step-indicator">
     <ul class="steps">
         <li class="complete">Ouvrir une séance<span class="sr-only">completed</span></li>
         <li class="active" aria-current="true">choisir un intérêt</li>
         <li>ajouter des amis<span class="sr-only">not completed</span></li>
         <li>visualiser la carte<span class="sr-only">not completed</span></li>
      </ul>
 </div>

## Barres de progression

Les couleurs de la barre de progression peuvent varier, mais veillez à ce que les exigences de contraste soient respectées. Visitez la section sur les couleurs pour obtenir de plus amples renseignements sur le choix de couleurs accessibles.

Les barres de progression peuvent être remplies de n’importe laquelle des couleurs de votre choix, mais veillez à ce que le texte respecte les exigences minimales de contraste. Pour obtenir de plus amples renseignements sur les couleurs accessibles, visitez la [section des couleurs](/components/colour).

Les barres de progression sont stylisées au moyen d’un rectangle d’environ 16px de hauteur et d’une largeur variable. Le rectangle possède une bordure de 1px de couleur <badge style="background-color: #ADACAC;color:black;">#ADACAC</badge>, avec un rayon de contour de 4px.

Le pourcentage peut être soit aligné à la droite de la barre, soit centré dans la portion colorée de la barre.

<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>

<br>

<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
<br>

## Boucles de progression

<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Example of notch circle spinner</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Example of refresh spinner</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Example of dot spinner</span></i>

La boucle de progression utilisée dans ce système de conception est affichée au moyen de l’icône de boucle de progression de la police Awesome. La police Awesome possède de multiples icônes qui pourraient bien fonctionner comme boucle de progression, selon votre contenu. Vous pouvez consulter la [documentation sur Font Awesome](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) afin d’animer la boucle de pression pour démontrer le chargement d’une page ou d’une fonction.

</doctabpanel>
    </documentationtabs>


