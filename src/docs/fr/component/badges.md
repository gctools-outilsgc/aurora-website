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

Les badges sont utilisés pour montrer des notifications et d’autres alertes liées à un élément donné. Les badges ne sont pas autonomes, mais sont combinés à du texte, à des icônes ou à des boutons pour montrer un changement ou une action liée à cette fonctionnalité. Par exemple, un badge à côté du lien de votre boîte de réception indique le nombre de courriels non lus.

<documentationtabs>
      <doctabpanel type="html">
          
Au moment de coder les badges, le texte alternatif qui sera lu par les lecteurs d’écran doit également inclure le contexte. Par exemple, le badge devrait indiquer « 40 courriels non lus » au lieu de « 40 ».

<codeblock html='<a href="#">
  Profil <span class="badge badge-secondary">9</span>
  <span class="sr-only">message(s) non lus</span>
</a>
' react='<a href="#">
  Profil <Badge color="secondary">9</Badge>
  <span class="sr-only">message(s) non lus</span>
</a>'></codeblock>

<codeblock html='
<span class="badge badge-primary">Primaire</span>
<span class="badge badge-secondary">Secondaire</span>
<span class="badge badge-success">Succès</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Avertissement</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Jour</span>
<span class="badge badge-dark">Nuit</span>
' react='<Badge color="primary">Primaire</Badge>
<Badge color="secondary">Secondaire</Badge>
<Badge color="success">Succès</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="warning">Avertissement</Badge>
<Badge color="info">Info</Badge>
<Badge color="light">Jour</Badge>
<Badge color="dark">Nuit</Badge>'>
</codeblock>

</doctabpanel>

<doctabpanel type="react">
      </doctabpanel>

<doctabpanel type="design">
Les badges dans ce système de conception s’affichent comme suit :

Rectangle d’une largeur de 28px et d’une hauteur de 19px. Rayon de la bordure de 8px. Couleur de l’arrière-plan no <badge style="background-color: #4D5D6C">#4D5D6C</badge>. Couleur de texte <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge>. Texte centré dans le rectangle.

<div class="mt-3 mb-3">
  <a href="#">
    Profil <span class="badge badge-secondary">9</span>
    <span class="sr-only">message(s) non lus</span>
  </a>
</div>

<h2>Variations</h2>

<div class="mt-3 mb-3">
  <span class="badge badge-primary">Primaire</span>
  <span class="badge badge-secondary">Secondaire</span>
  <span class="badge badge-success">Succès</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Avertissement</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Jour</span>
  <span class="badge badge-dark">Nuit</span>
</div>

</doctabpanel>
    </documentationtabs>



