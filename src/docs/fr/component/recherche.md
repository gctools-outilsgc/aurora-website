---
path: "/component/search"
subnav: "3/Navigation/Navigation/8"
lang: "fr"
title: "Barre de recherche"
---

<helmet>
<title> Barre de recherche - Système de conception Aurora </title>
</helmet>

# Barre de recherche

Les barres de recherche aident l’utilisateur à trouver un contenu pertinent dans votre site ou application. Les barres de recherche sont une fonctionnalité universelle attendue sur la plupart des sites, en particulier ceux qui ont une grande quantité de contenu.

Les barres de recherche se trouvent dans le coin supérieur droit de la page Web et fonctionnent de la même façon qu’un champ de formulaire, dans lequel l’utilisateur peut entrer des mots-clés pour créer un extrant du système.

Les barres de recherche dans ce système comportent un texte d’espace réservé qui indique le terme *Recherche*.

Il y a deux options de style pour la recherche :

**Option 1**

<form>
    <div class="form-inline search-form">
        <label for="search" class="sr-only">Recherche</label>
        <input type="text" class="form-control" id="search" placeholder="Recherche">
        <span class="search-form-addon">
        <button type="submit"><span class="sr-only">Recherche</span><span class="fa fa-search"></span></button>
        </span>
    </div>
</form>

<codeblock html='
    <form>
        <div class="form-inline search-form">
            <label for="search" class="sr-only">Recherche</label>
            <input type="text" class="form-control" id="search" placeholder="Recherche">
            <span class="search-form-addon">
            <button type="submit"><span class="sr-only">Recherche</span><span class="fa fa-search"></span></button>
            </span>
        </div>
    </form>
' react=''></codeblock>
 
Le champ de texte ayant un remplissage de **12 px.** À droite du champ, il y a une icône de recherche qui sert de bouton d’action. L’icône a la taille de **1,2 em** et a la couleur <badge style="background-color: #666666">#666666</badge>.

Le champ de texte ayant un remplissage de 12 px. À droite du champ, il y a une icône de recherche qui sert de bouton d’action. L’icône a la taille de 1,2 em et a la couleur <badge style="background-color: #666666">#666666</badge>.

**Option 2**

<form>
    <div class="form-inline search-form search-form-round">
        <label for="search2" class="sr-only">Recherche</label>
        <input type="text" class="form-control" id="search2" placeholder="Recherche">
        <span class="search-form-addon">
        <button type="submit"><span class="sr-only">Recherche</span><span class="fa fa-search"></span></button>
        </span>
    </div>
</form>

<codeblock html='
    <form>
        <div class="form-inline search-form search-form-round">
            <label for="search" class="sr-only">Recherche</label>
            <input type="text" class="form-control" id="search" placeholder="Recherche">
            <span class="search-form-addon">
            <button type="submit"><span class="sr-only">Recherche</span><span class="fa fa-search"></span></button>
            </span>
        </div>
    </form>
' react=''></codeblock>
 
La même chose que l’option, mais avec un rayon de bordure de **17 px**.
