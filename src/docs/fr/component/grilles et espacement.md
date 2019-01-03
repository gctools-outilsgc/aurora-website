---
path: "/component/grids-and-spacing"
subnav: "2/Standard/Standard/7"
lang: "fr"
title: "Grilles et espacement"
---

<helmet>
<title> Grilles et espacement - Système de conception Aurora </title>
</helmet>

# Grilles et espacement
Ce système de conception utilise le même cadre de grilles que [la Boîte à outils de l’expérience Web](http://wet-boew.github.io/wet-boew-styleguide/v4/design/grids-fr.html), qui est basée sur le [cadre de Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options) pour créer des mises en page. Ces systèmes comprennent des grilles interactives, y compris des formats pour téléphone cellulaire, tablette et ordinateur de bureau, et sont conçus en utilisant des boîtes flexibles et des conteneurs.

Le système de grilles est fondé sur une série de conteneurs, de colonnes et de rangées afin de construire une mise en page et d’aligner le contenu. Les conteneurs sont centrés et organisent le contenu horizontalement. Les colonnes sont le cadre sur lequel l’emplacement du contenu est bâti. Les rangées servent d’emballage pour les colonnes.

Le cadre de grilles contient 12 colonnes dimensionnées en fonction de la fenêtre d’affichage du périphérique de l’utilisateur. Une personnalisation plus poussée des grilles et de la disposition des colonnes, comme le décalage et l’imbrication, est possible à l’aide du cadre de la boîte à outils de l’expérience Web. La largeur de la fenêtre d’affichage est en pixels et ne change pas la taille de la police.
          

## Exemples de mise en page automatique de grille

### De largeur égale
Si la taille des colonnes n’est pas définie, elles vont automatiquement être fixées de la même largeur.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2 gr-example"> Colonne 1 </mdcol>
        <mdcol className="mb-2 gr-example"> Colonne 2</mdcol>
        <mdcol className="mb-2 gr-example"> Colonne 3</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Colonne 1
    </div>
    <div class="col">
      Colonne 2
    </div>
    <div class="col">
      Colonne 3
    </div>
    <div class="col">
      Colonne 4
    </div>
  </div>
</div>
```

### De largeur inégale

Lorsque vous établissez la taille d’une colonne, les colonnes sœurs seront automatiquement redimensionnées.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol xs="6" className="mb-2 gr-example"> Colonne 1 </mdcol>
        <mdcol className="mb-2 gr-example"> Colonne 2</mdcol>
        <mdcol className="mb-2 gr-example"> Colonne 3</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col-6">
     Colonne 1
    </div>
    <div class="col">
      Colonne 2
    </div>
    <div class="col">
      Colonne 3
    </div>
    <div class="col">
      Colonne 4
    </div>
  </div>
</div>
```
### Contenu de largeur variable
Vous pouvez établir des colonnes pour correspondre automatiquement au contenu qu’elles contiennent. Les colonnes sœurs seront automatiquement redimensionnées.

<div class="container">
    <div class="row">
        <mdcol className="mb-2 gr-example">Colonne 1</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 2</mdcol>
        <mdcol xs="auto" className="mb-2 gr-example">Il s’agit de la troisième colonne, en raison de l’ajustement automatique de la taille.</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 4</mdcol>
    </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Colonne 1
    </div>
    <div class="col">
      Colonne 2
    </div>
    <div class="col">
      Il s’agit de la troisième colonne, en raison de l’ajustement automatique de la taille.
    </div>
    <div class="col">
      Colonne 4
    </div>
  </div>
</div>
```


### Multiples rangés de largeur égale
De multiples colonnes et rangées peuvent être fixées à l’aide d’un saut de ligne.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol className="mb-2 gr-example">Colonne 1</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 2</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 3</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 4</mdcol>
    </row>
    <row style="margin-top: 10px">
        <mdcol className="mb-2 gr-example">Colonne 1</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 2</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 3</mdcol>
        <mdcol className="mb-2 gr-example">Colonne 4</mdcol>
    </row>
</container>

```html
<div class="container">
  <div class="row">
    <div class="col">
     Colonne 1
    </div>
    <div class="col">
      Colonne 2
    </div>
    <div class="col">
      Colonne 3
    </div>
    <div class="col">
      Colonne 4
    </div>
  </div>
  <div class="row">
    <div class="col">
     Colonne 1
    </div>
    <div class="col">
      Colonne 2
    </div>
    <div class="col">
      Colonne 3
    </div>
    <div class="col">
      Colonne 4
    </div>
  </div>
</div>
```


