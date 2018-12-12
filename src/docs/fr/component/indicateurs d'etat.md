---
path: "/component/progress-indicators"
subnav: "4/Forms/Formulaires/5"
lang: "fr"
title: "Indicateurs d'état"
---

<helmet>
<title> Indicateurs d'état - Aurora Design System </title>
</helmet>

# Indicateurs d'états

## Indicateur des étapes

Les indicateurs de progrès sont la clé pour la visibilité de l’état du système. Ils représentent une voie vers l’achèvement d’une tâche ou d’un processus particulier. Les indicateurs d’étapes aident l’utilisateur à déterminer ce qu’il a terminé dans le processus, et ce qu’il lui reste à faire.

Les indicateurs d’étapes sont utilisés pour les tâches qui nécessitent de multiples étapes. Afin de représenter visuellement une page ou un élément qui est en chargement, utilisez une boucle de progression ou une barre de progression plutôt qu’un indicateur d’étapes.

## Barres de progression

Les barres de progression sont utilisées afin de représenter visuellement une page ou des fonctions en chargement ou en cours. Les barres de progression indiquent un pourcentage, en plus de la représentation visuelle indiquée dans la barre.

Les barres de progression déterminent les niveaux de progrès, ce qui signifie qu’il y a un point d’achèvement clair. Lorsque la barre de pression est remplie et qu’elle atteint 100 %, l’application devrait terminer le processus.

    
## Boucles de progression
    
<helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>
<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette circulaire</span></i>
<i class="fa fa-refresh fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette pour rafraîchir</span></i>
<i class="fa fa-spinner fa-spin" style="font-size:24px"><span class="sr-only">Exemple d'une girouette avec des points</span></i>

Les boucles de progression sont utilisées pour indiquer le chargement d’une page ou d’une fonction. Une règle générale est d’utiliser des boucles de progression pour les processus qui durent moins de 4 secondes. Les boucles de progression indiquent des niveaux de progrès indéterminés, ce qui signifie qu’il n’y a pas d’achèvement clair et que la boucle d’animation se poursuit jusqu’à ce que le processus soit terminé.

<documentationtabs>
      <doctabpanel type="html">

## Indicateur des étapes 

## Barres de progression

Les barres de progression devraient toujours inclure un indicateur de texte, en plus de la représentation visuelle pour donner plus de contexte. Ce texte devrait être inclus dans l’étiquette <alt>.
          
<codeblock html='
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
    </div>
' react='' /></codeblock>

<codeblock html='
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
    </div>
' react='' /></codeblock>

<codeblock html='
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
    </div>
' react='' /></codeblock>

## Boucles de progression

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Indicateur des étapes

Si une étiquette est requise pour votre indicateur d’étape, l’étiquette doit être placée au haut de l’élément et alignée à la gauche.
Les couleurs de l’indicateur d’étapes peuvent varier, mais assurez-vous que les exigences de contraste sont respectées. Visitez la section sur les couleurs pour plus de renseignements sur le choix de couleurs accessibles.

Les indicateurs d’étapes sont stylisés comme suit : 44px en utilisant la couleur <badge style="background-color: #CECECE; color:black">#CECECE</badge>.

Le cercle intérieur est blanc (<badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>) et de 34px. Il est centré dans le cercle extérieur. L’en-tête du texte est le style 2, Rubik Regular, à 21 points. Le cercle intérieur a une ombre portée noire (<badge style="background-color: #000000">#000000</badge>) d’opacité à 20 %, compensée de 0 pour x et y, et floue de 4px.

Entre les étapes, il y a une ligne centrée dont l’épaisseur est de 3px.
Cette ligne devrait être de la même couleur que le cercle extérieur.

![Composante des étapes en commencant](../../../img\components\steps_indicator_1.png)

Les étapes en cours et achevées sont indiquées au moyen d’un cercle de couleur et d’une ligne. Le cercle extérieur est de couleur (#FEC04F) ou de la couleur secondaire de votre choix. La ligne est également remplie de cette couleur.

![Composante des étapes à étape 2](../../../img\components\steps_indicator_2.png)

![Composante des étapes à étape 3](../../../img\components\steps_indicator_3.png)

## Barres de progression

Les couleurs de la barre de progression peuvent varier, mais veillez à ce que les exigences de contraste soient respectées. Visitez la section sur les couleurs pour obtenir de plus amples renseignements sur le choix de couleurs accessibles.

Les barres de progression peuvent être remplies de n’importe laquelle des couleurs de votre choix, mais veillez à ce que le texte respecte les exigences minimales de contraste. Pour obtenir de plus amples renseignements sur les couleurs accessibles, visitez la section des couleurs.

Les barres de progression sont stylisées au moyen d’un rectangle d’environ 16px de hauteur et d’une largeur variable. Le rectangle possède une bordure de 1px de couleur #ADACAC, avec un rayon de contour de 4px.

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

### Animation

Les barres de progression sont vides au début et se remplissent graduellement de couleur au moyen d’une animation. Le pourcentage indiqué devrait correspondre au niveau de couleur qui remplit la barre.

## Boucles de progression

La boucle de progression utilisée dans ce système de conception est affichée au moyen de l’icône de boucle de progression de la police Awesome. La police Awesome possède de multiples icônes qui pourraient bien fonctionner comme boucle de progression, selon votre contenu. Vous pouvez consulter la [documentation sur la police Awesome](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) afin d’animer la boucle de pression pour démontrer le chargement d’une page ou d’une fonction.

</doctabpanel>
    </documentationtabs>


