---
path: "/data/tables"
subnav: "1/Data/Données/8"
lang: "fr"
title: "Tableaux"
---

<helmet>
<title> Tableaux - Système de conception Aurora </title>
</helmet>

# Tableaux

Les tableaux de données sont utilisés pour montrer une grande quantité de données distinctes avec de multiples catégories. Les données peuvent être filtrées et ordonnées à l’aide d’un tableau de données. Pour une visualisation des données, le tableau avec les données brutes devrait l’accompagner. Les tableaux sont la méthode la plus simple et la plus accessible pour afficher les données et pour fournir des renseignements précis sur chaque ensemble de données. Les tableaux permettent à l’utilisateur de référencer des valeurs individuelles, tandis que les visualisations sont plus facilement en mesure de représenter les tendances dérivées de ces valeurs.

Les tableaux doivent toujours inclure un titre bref, mais informatif.

Les tableaux peuvent être utilisés pour afficher des données quantitatives et qualitatives.

## Tableau simple

Les tableaux simples sont le moyen le plus facile pour afficher les données et pour fournir un style propre à votre page. Les tableaux simples sont excellents pour un petit nombre de catégories ou de valeurs, mais ils devraient comprendre des éléments supplémentaires si une lisibilité ou une interactivité accrue est nécessaire.

Les tableaux simples sont conçus comme suit :

Titre : chaque tableau a un titre qui utilise l’en-tête 3 (Rubik moyen à 24px avec un modificateur de suivi de 10px). Le tableau est placé 13px en dessous du titre. Le tableau est de la largeur de son contenant et sa hauteur dépend des données et de la façon dont la pagination est gérée sur le tableau.

Rangée d’en-têtes : les en-têtes du tableau sont affichés en en-tête 6 (Nunito sans gras à 16px) et sont alignés à gauche. L’en-tête a un remplissage de 21px (supérieur et inférieur) et de 27px (gauche). La rangée d’en-têtes a une bordure inférieure de 2px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>

Cellule du tableau : l’information de la cellule du tableau est affichée en utilisant un style de texte normal (Nunito sans régulier à 16px) et est alignée à gauche. Le texte a un remplissage de 21px par 27px. La rangée d’en-têtes a une bordure inférieure de 2px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>. Chaque rangée a une bordure inférieure de 1px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>.

<h3>Exemple de tableau simple</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Prénom</th>
      <th scope="col">Nom de famille</th>
      <th scope="col">Compte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

```html
<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom de famille</th>
            <th scope="col">Compte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```

## Tableau rayé

Les tableaux rayés sont souvent utilisés pour améliorer la lisibilité. Si vos données sont plus complexes, ou les valeurs sont semblables, un tableau rayé peut accroître la lisibilité et la compréhension des données.

Les tableaux rayés sont conçus comme suit :

Titre : chaque tableau a un titre qui utilise l’en-tête 3 (Rubik moyen à 24px avec un modificateur de suivi de 10px). Le tableau est placé 13px en dessous du titre. Le tableau est de la largeur de son contenant et sa hauteur dépend des données et de la façon dont la pagination est gérée sur le tableau.

Rangée d’en-têtes : les en-têtes du tableau sont affichés en en-tête 6 (Nunito sans gras à 16px) et sont alignés à gauche. L’en-tête a un remplissage de 21px (supérieur et inférieur) et de 27px (gauche). La rangée d’en-têtes a une bordure supérieure et à gauche de 1px et une bordure inférieure de 2px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>. Le dernier en-tête dans le tableau comprend également une bordure à droite de 1px.

Cellule du tableau : l’information de la cellule du tableau est affichée en utilisant un style de texte normal (Nunito sans régulier à 16px) et est alignée à gauche. Le texte a un remplissage de 21px par 27px. La rangée d’en-têtes a une bordure inférieure de 2px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>. Chaque cellule a une bordure inférieure et à gauche de 1px utilisant la couleur <badge style="background-color: #96a8b2; color:black">#96A8B2</badge>. La dernière cellule dans chaque rangée a également une bordure à droite de 1px.

Chaque seconde rangée a un remplissage de <badge style="background-color: #F2F5F6; color:black">#F2F5F6</badge>.

<h3>Exemple d'un tableau rayé</h3>
<table class="table table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Prénom</th>
        <th scope="col">Nom de famille</th>
        <th scope="col">Compte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
</table>

```html
<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom de famille</th>
            <th scope="col">Compte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```

## Tableau de données

Les tableaux de données comprennent des éléments interactifs pour que les utilisateurs puissent manipuler et filtrer les données. Les tableaux de données utilisent le modèle du tableau simple avec l’ajout d’éléments interactifs. Les interactions les plus communes incluses dans un tableau de données sont les icônes de tri ou une colonne de case à cocher. Incluez une colonne de case à cocher seulement s’il y a des actions à effectuer sur une rangée précise de données.

Si les cases à cocher sont incluses dans le tableau, les rangées actives devraient être en surbrillance avec un remplissage de <badge style="background-color: #F2F5F6; color:black">#F2F5F6</badge>.

D’autres exemples d’éléments interactifs à ajouter à un tableau de données sont : la pagination, des filtres, des barres de recherche, des boutons icône, des icônes de tri, etc.

![Interactive data table 1](../../../img\examples\interactive_table_1.png)
<br>
![Interactive data table 2](../../../img\examples\interactive_table_2.png)
<br>
![Interactive data table 3](../../../img\examples\interactive_table_3.png)
