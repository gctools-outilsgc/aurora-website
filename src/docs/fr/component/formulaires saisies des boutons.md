---
path: "/component/button-inputs"
subnav: "4/Forms/Formulaires/2"
lang: "fr"
title: "Saisies des boutons"
---

<helmet>
<title> Saisis des boutons - Système de conception Aurora </title>
</helmet>

# Saisies des boutons

## Cases à cocher

Les cases à cocher sont utilisées lorsque l’utilisateur peut choisir plusieurs options à partir d’une liste donnée. Elles sont également utilisées pour confirmer certains énoncés : « J’accepte les modalités » ou « Envoyez-moi des courriels de mise à jour ».
S’il y a une option Autre, ce devrait comprendre un champ ouvert pour que les utilisateurs puissent inscrire des renseignements supplémentaires.

Les étiquettes pour les cases à cocher sont alignées à droite de la case.

Les cases à cocher ont quatre états différents :

**Normal :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #F9F9F9; color: black" >#F9F9F9</badge>, couleur de bordure <badge style="background-color: #96A8B2;color:black">#96A8B2</badge> de 1px.

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Vérification personnalisée</label>
</div>

<codeblock html='
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Vérification personnalisée</label>
    </div>
' react='' />

**Normal :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #F9F9F9; color: black" >#F9F9F9</badge>, couleur de bordure <badge style="background-color: #96A8B2;color:black">#96A8B2</badge> de 1px.

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Vérification personnalisée</label>
</div>

**Pointage :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C" >#4D5D6C</badge> de 1px.

**Focus :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C" >#4D5D6C</badge> de 3px.

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck4">
    <label class="custom-control-label" for="customCheck4">Vérification personnalisée</label>
</div>

**Active :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #4D5D6C" >#4D5D6C</badge>, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge> . Comprend une icône de contrôle blanc centré dans la case.

## Boutons « radio »

Les boutons « radio » sont utilisés lorsque l’utilisateur peut choisir uniquement l’une des options figurant sur la liste donnée.

Les boutons « radio » doivent suivre le format vertical du formulaire. Ils devraient être placés en dessous des uns des autres au lieu d’être à côté des uns des autres.

S’il y a une option Autre, ce devrait comprendre un champ ouvert pour que les utilisateurs puissent inscrire des renseignements supplémentaires.

Les étiquettes des boutons « radio » sont alignées à droite du bouton.

**Normal :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan #F9F9F9, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge> de 1px.

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Radio personnalisée</label>
</div>

<codeblock html='
    <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">Radio personnalisée</label>
    </div>
' react='' />

**Normal :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan #F9F9F9, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge> de 1px.

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Radio personnalisée</label>
</div>

**Pointage :** cercle de 18px sur 18px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure #4D5D6C de 1px.

**Focus :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C">#4D5D6C</badge> de 3px.

**Actif :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #4D5D6C">#4D5D6C</badge>, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge>. Comprend un remplissage dans un plus petit cercle dans le bouton complet.

## Commutateurs

Les commutateurs sont utilisés seulement lorsque l’une des deux options peut être sélectionnée. Ils représentent des questions simples comme des options de style oui non ou activé-désactivé. Habituellement, l’option oui-non est plus colorée et plus en évidence que l’option activé-désactivée.

Les commutateurs peuvent être utilisés dans toutes sortes de formulaires ou d’autres types de fonctions tels que Paramètres, Options de profil, etc.

Les commutateurs ont quatre états différents :

**Désactivé  :** 32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, bordure de 1px avec une couleur <badge style="background-color: #66666">#66666</badge>. Le bouton est à gauche du curseur.

<label class="switch">
    <input type="checkbox" tabindex="-1">
    <span class="slider round"></span>
</label>

<codeblock html='
    <label class="switch">
        <input type="checkbox" tabindex="-1">
        <span class="slider round"></span>
    </label>
' react='' />

**Désactivé, pointage et focus**
32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, avec une bordure de 3px et une couleur de bordure #4D5D6C, une bordure de 1px avec une couleur <badge style="background-color: #66666">#66666</badge>. Le bouton est à gauche du curseur.


**Activé**  : 32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #FEC04F; color:black">#FEC04F</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, bordure de 1px ayant la couleur <badge style="background-color: #66666">#66666</badge>. Le bouton est à droite du curseur.

<label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
</label>

**Activé, Pointage et focus :**
32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #FEC04F; color:black">#FEC04F</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, ayant une bordure de 3px et une couleur de bordure <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, une bordure de 1px dont la couleur est le <badge style="background-color: #66666">#66666</badge>. Le bouton est à droite du curseur.
