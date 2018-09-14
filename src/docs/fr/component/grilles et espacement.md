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
        <mdcol><button color="secondary" style="width: 100%">Colonne 1</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 2</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 3</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 4</button></mdcol>
    </row>
</container>

<codeblock react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="secondary" style="width: 100%">Colonne 1</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 2</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 3</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 4</Button></Col>
    </Row>
</Container> ' html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
        </div>
    </div>
'></codeblock>

### De largeur inégale
Lorsque vous établissez la taille d’une colonne, les colonnes sœurs seront automatiquement redimensionnées.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol><button color="secondary" style="width: 100%">Colonne 1</button></mdcol>
        <mdcol xs="6"><button outline="true" color="secondary" style="width: 100%">Colonne 2</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 3</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 4</button></mdcol>
    </row>
</container>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 1</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-outline-secondary btn-block">Colonne 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
        </div>
    </div>' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="secondary" style="width: 100%">Colonne 1</Button></Col>
        <Col xs="6"><Button outline="true" color="secondary" style="width: 100%">Colonne 2</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 3</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 4</Button></Col>
    </Row>
</Container> '></codeblock>

### Contenu de largeur variable
Vous pouvez établir des colonnes pour correspondre automatiquement au contenu qu’elles contiennent. Les colonnes sœurs seront automatiquement redimensionnées.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol><button outline="true" color="secondary" style="width: 100%">Colonne 1</button></mdcol>
        <mdcol><button outline="true" color="secondary"  style="width: 100%">Colonne 2</button></mdcol>
        <mdcol xs="auto"><button color="secondary" style="width: 100%">C’est la troisième et la plus large colonne en raison de la grandeur automatique</button></mdcol>
        <mdcol><button outline="true" color="secondary" style="width: 100%">Colonne 4</button></mdcol>
    </row>
</container>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-outline-secondary btn-block">Colonne 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-outline-secondary btn-block">Colonne 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">C’est la troisième et la plus large colonne en raison de la grandeur automatique</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-outline-secondary btn-block">Colonne 4</button>
            </div>
        </div>
    </div>' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="secondary" style="width: 100%">Colonne 1</Button></Col>
        <Col xs="6"><Button outline="true" color="secondary" style="width: 100%">Colonne 2</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 3</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 4</Button></Col>
    </Row>
</Container> '></codeblock>

### Multiples rangés de largeur égale
De multiples colonnes et rangées peuvent être fixées à l’aide d’un saut de ligne.

<container style="width: 100%; margin-bottom: 20px">
    <row>
        <mdcol><button color="secondary" style="width: 100%">Colonne 1</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 2</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 3</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 4</button></mdcol>
    </row>
    <row style="margin-top: 10px">
        <mdcol><button color="secondary" style="width: 100%">Colonne 1</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 2</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 3</button></mdcol>
        <mdcol><button color="secondary" style="width: 100%">Colonne 4</button></mdcol>
    </row>
</container>

<codeblock html='
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 4</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 1</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 2</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 3</button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-secondary btn-block">Colonne 4</button>
            </div>
        </div>
    </div>
' react='
<Container style="width: 100%">
    <Row>
        <Col><Button color="secondary" style="width: 100%">Colonne 1</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 2</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 3</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 4</Button></Col>
    </Row>
    <Row style="margin-top: 10px">
        <Col><Button color="secondary" style="width: 100%">Colonne 1</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 2</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 3</Button></Col>
        <Col><Button color="secondary" style="width: 100%">Colonne 4</Button></Col>
    </Row>
</Container> '></codeblock>
