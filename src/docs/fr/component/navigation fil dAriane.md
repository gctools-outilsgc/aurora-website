---
path: "/component/breadcrumbs"
subnav: "3/Navigation/Navigation/1"
lang: "fr"
title: "Fil d'Ariane"
---

<helmet>
<title> Fil d'Ariane - Système de conception Aurora </title>
</helmet>

# Fil d’Ariane

Le fil d’Ariane est un élément de navigation secondaire qui indique à l’utilisateur son emplacement sur un site Web ou une application. Il s’agit d’une représentation de la hiérarchie de l’information du site.

Le fil d’Ariane permet aux utilisateurs de naviguer rapidement entre les sections et les catégories d’un site Web et les encourage donc à explorer l’ensemble du site. Vous utiliseriez seulement le fil d’Ariane sur un site comportant plusieurs niveaux de navigation.

Le fil d’Ariane de ce système de conception est fondé sur l’emplacement, ce qui représente l’architecture originale du site. Le fil d’Ariane fondé sur l’emplacement est moins déroutant et plus utilisable que le fil d’Ariane fondé sur le chemin d’accès qui représente l’historique de navigation de l’utilisateur sur une page Web.

Le fil d’Ariane devrait être complémentaire à la navigation principale et ne devrait jamais être utilisé pour remplacer l’ensemble des éléments de navigation. Il est subtil et ne devrait pas dominer visuellement sur la page. Tous les éléments de la liste du fil d’Ariane doivent être des liens, sauf le dernier élément.

Le fil d’Ariane dans le système de conception est comme suit :

<breadcrumb>
    <breadcrumbitem><a href="#">Page principale</a></breadcrumbitem>
    <breadcrumbitem><a href="#">Page secondaire</a></breadcrumbitem>
    <breadcrumbitem active="true">Page actuelle</breadcrumbitem>
</breadcrumb>

<codeblock html='
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Page principale</a></li>
            <li class="breadcrumb-item"><a href="#">Page secondaire</a></li>
            <li class="breadcrumb-item active" aria-current="page">Page actuelle</li>
        </ol>
    </nav>
' react='
<Breadcrumb>
    <BreadCrumbItem><a href="#">Page principale</a></BreadCrumbItem>
    <BreadCrumbItem><a href="#">Page secondaire</a></BreadCrumbItem>
    <BreadCrumbItem active="true">Page actuelle</BreadCrumbItem>
</Breadcrumb>
'></codeblock>

Chaque couche du fil d’Ariane est stylisée à l’aide du texte de lien. Le dernier élément n’est jamais un lien puisqu’il s’agit de la page actuelle et qu’il n’est pas cliquable. Le dernier élément est stylisé à l’aide du texte normal.

Entre chaque couche, il y a une icône de chevron dont la couleur est le <badge style="background-color: #A0A0A0; color:black">#A0A0A0</badge>

Chaque couche a un espacement de 12 px de chaque côté du chevron.
