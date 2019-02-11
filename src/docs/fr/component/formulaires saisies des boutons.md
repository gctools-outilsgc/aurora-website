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

Les cases à cocher sont utilisées lorsque l’utilisateur peut choisir plusieurs options à partir d’une liste donnée. Elles sont également utilisées pour confirmer certains énoncés : « J’accepte les modalités » ou « Envoyez-moi des courriels de mise à jour».

S’il y a une option Autre, ce devrait comprendre un champ ouvert pour que les utilisateurs puissent inscrire des renseignements supplémentaires.

Les étiquettes pour les cases à cocher sont alignées à droite de la case.

## Boutons « radio »

Les boutons « radio » sont utilisés lorsque l’utilisateur peut choisir uniquement l’une des options figurant sur la liste donnée.

Les boutons « radio » doivent suivre le format vertical du formulaire. Ils devraient être placés en dessous des uns des autres au lieu d’être à côté des uns des autres.

S’il y a une option Autre, ce devrait comprendre un champ ouvert pour que les utilisateurs puissent inscrire des renseignements supplémentaires.

Les étiquettes des boutons « radio » sont alignées à droite du bouton.

## Commutateurs

Les commutateurs sont utilisés seulement lorsque l’une des deux options peut être sélectionnée. Ils représentent des questions simples comme des options de style oui non ou activé-désactivé. Habituellement, l’option oui-non est plus colorée et plus en évidence que l’option activé-désactivée.

Les commutateurs peuvent être utilisés dans toutes sortes de formulaires ou d’autres types de fonctions tels que Paramètres, Options de profil, etc.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Cases à cocher

Aurora utilise un style personnalisé pour les cases à cocher. Consultez l’exemple ci-dessous : 

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Vérification personnalisée</label>
</div>

```html
<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Vérification personnalisée</label>
</div>
```

## Boutons « radio »

Aurora utilise un style personnalisé pour les boutons de radio. Consultez l’exemple ci-dessous :

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Radio personnalisée 1</label>
</div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Radio personnalisée 2</label>
</div>

```html
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">Radio personnalisée 1</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">Radio personnalisée 2</label>
</div>
```

### Désactivation

Les cases à cocher et les radios personnalisées peuvent être désactivées. Ajoutez l’attribut `disabled` boolean à `<input>` et l’indicateur personnalisé et la description d’étiquette seront automatiquement stylisés.

### Défaut (superposé)

Par défaut, toutes les cases à cocher et les radios qui sont de parenté immédiate seront superposées verticalement et espacées de manière approximative au moyen de `.form-check.`

Afin de veiller à ce que les saisies de bouton soient alignées plutôt que superposées, ajoutez la classe `.custom-control-inline` au `.custom-control` `<div>`.


### Utilisation des options par défaut

Si vous souhaitez utiliser les styles par défaut pour les boutons de cases à cocher et de radio, consultez l’exemple ci-dessous : 

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
```

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
```

## Commutateurs

Les commutateurs sont des composantes personnalisées utilisées lorsque l’option du champ peut seulement être « oui » ou « non », ou bien « activé » ou « désactivé ».

<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Commutateur
</label>

```html
<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Commutateur
</label>
```

</doctabpanel>
      <doctabpanel type="design">
          

## Cases à cocher

Les cases à cocher ont quatre états différents :

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Vérification personnalisée</label>
</div>

<br> 

**Normal :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #F9F9F9; color: black" >#F9F9F9</badge>, couleur de bordure <badge style="background-color: #96A8B2;color:black">#96A8B2</badge> de 1px.

**Pointage :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C" >#4D5D6C</badge> de 1px.

**Focus :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C" >#4D5D6C</badge> de 3px.

**Active :** case de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #4D5D6C" >#4D5D6C</badge>, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge> . Comprend une icône de contrôle blanc centré dans la case.

## Boutons « radio »

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio3">Radio personnalisée 1</label>
</div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio4">Radio personnalisée 2</label>
</div>
<br> 

**Normal :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan #F9F9F9, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge> de 1px.

**Pointage :** cercle de 18px sur 18px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure #4D5D6C de 1px.

**Focus :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, couleur de bordure <badge style="background-color: #4D5D6C">#4D5D6C</badge> de 3px.

**Actif :** cercle de 18px sur 18px, rayon de bordure de 4px, couleur d’arrière-plan <badge style="background-color: #4D5D6C">#4D5D6C</badge>, couleur de bordure <badge style="background-color: #96A8B2; color:black">#96A8B2</badge>. Comprend un remplissage dans un plus petit cercle dans le bouton complet.

## Commutateurs

<label class="switch">
  <input type="checkbox" />
  <span class="switch__toggle"></span>
  Commutateur
</label>

<br> 
<br>

Les commutateurs ont quatre états différents :

**Désactivé  :** 32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, bordure de 1px avec une couleur <badge style="background-color: #666666">#666666</badge>. Le bouton est à gauche du curseur.

**Désactivé, pointage et focus**
32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, avec une bordure de 3px et une couleur de bordure #4D5D6C, une bordure de 1px avec une couleur <badge style="background-color: #66666">#66666</badge>. Le bouton est à gauche du curseur.


**Activé**  : 32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #FEC04F; color:black">#FEC04F</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, bordure de 1px ayant la couleur <badge style="background-color: #666666">#666666</badge>. Le bouton est à droite du curseur.

**Activé, Pointage et focus :**
32px sur 18px, rayon de bordure de 9px, couleur d’arrière-plan de curseur <badge style="background-color: #FEC04F; color:black">#FEC04F</badge>, couleur de bouton <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>, ayant une bordure de 3px et une couleur de bordure <badge style="background-color: #E3E4E5; color: black" >#E3E4E5</badge>, une bordure de 1px dont la couleur est le <badge style="background-color: #666666">#666666</badge>. Le bouton est à droite du curseur.
    
</doctabpanel>
    </documentationtabs>


