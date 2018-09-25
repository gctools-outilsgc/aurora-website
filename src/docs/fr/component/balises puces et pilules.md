---
path: "/component/tags-chips-and-pills"
subnav: "2/Standard/Standard/9"
lang: "fr"
title: "Balises, puces et pilules"
---

<helmet>
<title> Balises, puces et pilules - Système de conception Aurora </title>
</helmet>

# Balises, puces et pilules

## Balises

Les balises représentent un ensemble de mots-clés générés par l’utilisateur qui aident à étiqueter, à organiser et à catégoriser le contenu. Elles sont utiles parce qu’elles fournissent les métadonnées permettant de faire une recherche sur le contenu. Les balises peuvent être ajoutées ou retirées du contenu par l’auteur.

Les balises sont habituellement affichées près du titre du contenu, à proximité d’autres renseignements comme la date d’affichage, le nombre de « J’aime » et le nom de l’auteur.

Les balises sont de forme rectangulaire et ont un rayon de bordure de 4 px. Le côté gauche de la balise est stylisé à l’aide d’un triangle et d’un cercle blanc. Les balises utilisent les couleurs secondaires dans la palette choisie, et la couleur du texte sera soit noire soit blanche selon la couleur de la balise. Reportez-vous à la section de couleur pour obtenir de plus amples renseignements sur les couleurs de textes à utiliser.  

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

<codeblock html='
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
' react='' />

## Puces


Les puces représentent les coordonnées, dont habituellement l’avatar et le nom de l’utilisateur, accompagnées d’un lien à son profil.

Les puces sont de forme rectangulaire et ont un rayon de bordure de 4px. Une image d’avatar est affichée à gauche de la puce. Les puces sont d’une dimension qui correspond à la longueur du nom du profil de l’utilisateur. Les puces ont un remplissage de 7px sur tous les côtés.

Les puces ont trois différentes variations et sont affichées comme suit :

**Normal** : Case rectangulaire remplie avec <badge style="background-color: #CECECE; color: black">#CECECE</badge>. Texte noir. Petit avatar (26px sur 26px) aligné à gauche.

<span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> Utilisateur 1</span>
<span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> Utilisateur 2</span>

<codeblock html='
    <span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> Utilisateur 1</span>
    <span class="badge badge-primary"><img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow"> Utilisateur 2</span>
' react='' />

**Contrôle de l’utilisateur** : Même chose que normal, mais il y a un icône de suppression supplémentaire à droite. Cette icône a la couleur <badge style="background-color: #4D5D6C">#4D5D6C</badge> ainsi qu’un « x » transparent et elle est alignée à droite. Petit avatar (26px sur 26px) aligné à gauche.

**Pointage** : Même chose que la puce contrôlée par l’utilisateur, mais a une couleur d’arrière-plan <badge style="background-color: #4D5D6C">#4D5D6C</badge>, et l’icône de suppression est blanc et un « x » transparent y figure. Petit avatar (26px sur 26px) aligné à gauche.

## Pilules

Les pilules sont semblables aux puces, mais ne sont pas nécessairement associées à un utilisateur en particulier. Ils ont le même style, mais sans

Les pilules ont trois variations qui sont stylisées comme suit:

**Normal** : Case rectangulaire remplie en <badge style="background-color: #CECECE; color: black">#CECECE</badge>. Texte noir.

<div class="mt-2">
    <span class="badge badge-primary">Primaire</span>
    <span class="badge badge-secondary">Secondaire</span>
</div>

<codeblock html='
    <div class="mt-2">
        <span class="badge badge-primary">Primaire</span>
        <span class="badge badge-secondary">Secondaire</span>
    </div>
' react='' />

**Contrôle de l’utilisateur** : Même chose que le style « normal », mais il y a une icône de suppressions supplémentaire à droite. Cette icône a la couleur <badge style="background-color: #4D5D6C">#4D5D6C</badge>, un « x » transparent y figure, et elle est alignée à droite.

**Pointage** : Même chose que le style « contrôle de l’utilisateur », mais a une couleur d’arrière-plan <badge style="background-color: #4D5D6C">#4D5D6C</badge>, et l’icône de suppression est blanche, et un « x » transparent y figure.
