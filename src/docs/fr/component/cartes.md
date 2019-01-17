---
path: "/component/cards"
subnav: "2/Standard/Standard/4"
lang: "fr"
title: "Cartes"
---

<helmet>
    <title> Cartes - Système de conception Aurora </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</helmet>

# Cartes

Les cartes sont des espaces utilisés pour organiser du contenu important. L’utilisation de cartes peut rendre votre produit Web plus attrayant et navigable. 

## Pratiques exemplaires
Une carte devrait contenir une seule idée qui peut présenter un appel à l’action ou la possibilité de naviguer vers un contenu plus détaillé. L'information d’une carte doit être concis et offrir seulement un aperçu détaillé du contenu.

Les cartes peuvent rendre votre produit Web plus attrayant. Toutefois, vous devriez envisager le type de renseignements que vous communiquez, ainsi que la façon dont l’utilisateur consultera cette information avant de décider d’utiliser une carte.

Si plusieurs cartes sont placées sur une page, elles devraient être placées à une distance de 16px de chaque côté.

## Composantes d’une carte

Les éléments qui peuvent être utilisés dans une carte sont les suivants :

* Titre principal – une étiquette brève et claire qui indique le message principal de la carte.
* Méta-information – utilisée pour organiser les cartes. Ça peut être un indicateur de temps, une catégorie, etc.
* Description – une explication plus approfondie de l’idée ou de l’appel à l’action. Ce texte doitt être bref.
* Image ou média enrichi – associés à la carte et au texte, une image ou un média enrichi doit contribuer au message.
* Boutons – lorsqu’une carte exige une action sélectionnable, ou si vous voulez insister sur le fait que la carte est un objet cliquable, vous pouvez utiliser les boutons.
* Renseignements supplémentaires – tout renseignement additionnel qui renforce le message de la carte.

Tous ces éléments ne sont pas nécessaires dans chaque carte. Vous pouvez choisir les éléments qui vous conviennent le mieux. Cependant, chaque carte doit avoir un titre principal.

<documentationtabs remove="react">
    <doctabpanel type="html">
        

## Exemple

Une carte comprend du contenu souple et extensible. Elle est composée d’options pour les en-têtes et les pieds de pages, d’une grande variété de contenu, de couleurs de fond contextuelles et d’options d’affichage puissantes.

Les cartes sont conçues avec le moins de balises et de styles possibles, mais parviennent tout de même à offrir beaucoup de contrôle et d’options de personnalisation. Conçues à l’aide de Flexbox, les cartes offrent une harmonisation facile et se combinent bien à d’autres composantes de Bootstrap. Par défaut, les cartes n’ont pas de marge, alors utilisez l’utilitaire d’espacement au besoin.

Vous trouverez ci-dessous un exemple de carte doté d’un contenu mixte et d’une largeur fixe. Les cartes n’ont initialement pas de largeur fixe. Elles couvrent normalement la pleine largeur de leur élément parent. Cet aspect peut facilement être personnalisé grâce à différentes options de taille. Pour personnaliser ou pour établir une largeur, utiliser des feuilles de style en cascade (CSS) ou du style en ligne. 

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte basé sur le titre de la carte.</p>
        <a href="#" class="card-link">Un autre lien</a>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
        <a href="#" class="card-link">Un autre lien</a>
    </div>
</div>
```

### Contenu

La composante de base d’une carte est `.card-body`. Servez-vous-en lorsque vous avez besoin d’une section de remplissage dans une carte.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <p class="card-text">Un exemple de texte.</p>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <p class="card-text">Un exemple de texte.</p>
    </div>
</div>
```         

### Titres, texte et des liens

On peut utiliser des titres de carte en ajoutant `.card-title` à une balise `<h*>`. De la même manière, on peut ajouter des liens et les placer un à côté de l’autre en incluant `.card-link` à une balise `<a>`.

Des sous-titres sont utilisés par l’ajout de `.card-subtitle` à une balise `<h*>`. Si les classes `.card-title`  et `.card-subtitle` sont placés dans un élément ayant la classes `.card-body`, le titre et le sous-titre de la carte vont bien s’harmoniser.


<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
        <a href="#" class="card-link">Un autre lien</a>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
        <a href="#" class="card-link">Un autre lien</a>
    </div>
</div>
```

### Images

L’élément `.card-img-top` permet de placer une image dans une carte.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
    </div>
</div>
```

### Boutons

Les boutons n’exigent pas de classe supplémentaire et peuvent être inclus dans une carte par le simple ajout de la balise `<button>`.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte. </p>
    </div>
    <div class="card-footer">
    <button type="button" color="primary" class="btn btn-primary">Primaire</button>
    <button type="button" class="btn btn-outline-primary">Secondaire</button>
    </div>
</div>

```html
<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
         <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte. </p>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-primary">Primaire</button>
        <button type="button" class="btn btn-outline-primary">Secondaire</button>
    </div>
</div>
```
      
</doctabpanel>
    <doctabpanel type="design">  
    
Les cartes ont habituellement une couleur de fond <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, qui les sépares de la couleur d'arrière plan de la page.

## Modèle de carte de base

Les cartes peuvent être utilisées comme contenants pour n’importe quel type d’information et varient de grosseur selon le contenu. Les modèles de cartes de base constituent le fondement pour des cartes plus complexes, ce qui peut contenir toute combinaison des éléments.

Les cartes de base sont conçues comme suit :

Un rectangle blanc (<badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>) avec les coins arrondis de 4px, une ombre portée de 15 % d’opacité et un flou de 5px. La carte a un remplissage de 20px par 16px. Chaque carte a un titre qui utilise l’en-tête 3 (Rubik moyen à 24px) avec un diviseur placé 12px sous l’en-tête. Le contenu de la carte est placé à 12px sous du diviseur.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
        <h3 class="card-title h5">Titre de la carte</h3>
        <div class="card-subtitle text-muted">Méta-information</div>
        <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
        <a href="#" class="card-link">Un autre lien</a>
    </div>
</div>

## Les cartes d'image

Les cartes d’image utilisent le modèle de carte de base, mais comprennent une image au-dessus de l’en-tête.

Les cartes d’image sont conçues comme suit :

Un rectangle blanc (<badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>) avec un rayon de bordure de 4px et une ombre portée de 15 % d’opacité et un flou de 5px. La carte a un remplissage de 20px par 16px. Chaque carte a un titre en utilisant l’en-tête 3 (moyen Rubik à 24px) avec un diviseur placé 12px sous l’en-tête. Le contenu de la carte est placé 12px en dessous du diviseur.

L’image est placée 20px au-dessus de l’en-tête. L’image s’étend sur toute la largeur de la carte.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
          <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Limite de l’image">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <div class="card-subtitle text-muted">Méta-information</div>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte. </p>
    </div>
</div>

## Cartes actionnables

Les cartes actionnables utilisent le modèle de carte de base, mais comprennent des éléments supplémentaires en dessous du contenu principal. Des exemples d’éléments supplémentaires peuvent comprendre des boutons primaires ou secondaires, des boutons icône ou des avatars. Les cartes actionnables peuvent également être combinées avec le concept de carte d’image.

Les cartes actionnables sont conçues comme suit :

Un rectangle blanc (<badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>) avec un rayon de bordure de 4px et une ombre portée de 15 % d’opacité et un flou de 5px. La carte a un remplissage de 20px par 16px. Chaque carte a un titre en utilisant l’en-tête 3 (moyen Rubik à 24px) avec un diviseur placé 12px sous l’en-tête. Le contenu de la carte est placé 12px en dessous du diviseur.

Un deuxième diviseur de 12px est placé sous le contenu. Des points actionnables (comme des boutons) sont placés 12px sous ce diviseur.

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1638953b4a7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1638953b4a7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Limite de l’image">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <div class="card-subtitle text-muted">Méta-information</div>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte.</p>
    </div>
    <div class="card-footer">
    <button type="button" color="primary" class="btn btn-primary">Primaire</button>
    <button type="button" class="btn btn-outline-primary">Secondaire</button>
    </div>
</div>

## Cartes complexes

Les cartes peuvent techniquement comprendre un certain nombre de combinaisons d’éléments. En utilisant les concepts de base qui précèdent, les éléments comme les espaces de texte réservés (métadates), les avatars, les boutons icônes et les boutons peuvent être ajoutés sous l’en-tête ou dans la section actionnable en dessous du contenu principal.

<div class="card card-profile mb-2 d-inline-block" style="max-width: 18rem;">  
    <img class="card-img-top" alt="placeholder image" style="height: 100px;" src="http://coverpixs.com/images/items/itm_2013-01-27_11-36-29_1.jpg">
    <div class="card-body">
        <img alt="..." class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
        <div>
        <h3 class="card-title h5">Nom ou Groupe</h3>
        <p class="text-muted">Titre du poste ou méta-information</p>
        <button type="button" class="btn btn-primary">Appel à l’action</button>
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <div class="card-subtitle text-muted">Méta-information</div>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte. Voici quelques renseignements supplémentaires, cela pourrait être quelque chose de merveilleux!.</p>
    <button type="button" class="btn btn-light"><span class="fa fa-heart"></span><span class="sr-only">Aimer</span></button>
    <button type="button" class="btn btn-light"><span class="fa fa-comment"></span><span class="sr-only">Comment</span></button>
    </div>
</div>

<div class="card mb-2 d-inline-block" style="max-width: 18rem;">
    <div class="card-body">
    <h3 class="card-title h5">Titre de la carte</h3>
    <div class="card-subtitle text-muted">Méta-information</div>
    <p class="card-text">Quelques exemples de texte pour tirer parti du titre de la carte. </p>
    <button type="button" color="primary" class="btn btn-primary">Primaire</button>
    <button type="button" class="btn btn-outline-primary">Secondaire</button>
    </div>
    <div class="card-footer">Renseignements supplémentaires</div>
</div>

</doctabpanel>
    </documentationtabs>


