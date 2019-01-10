---
path: "/component/pagination-scrolling"
subnav: "3/Navigation/Navigation/7"
lang: "fr"
title: "Pagination et défilement"
---

<helmet>
<title> Pagination et défilement - Système de conception Aurora </title>
</helmet>

# Pagination et défilement

Il y a deux façons de présenter le contenu sur une page : le défilement et la pagination. Chacune a des avantages et des inconvénients, et vous devriez choisir celle qui correspond au type et au contexte du contenu que vous présentez.

## Défilement

Le défilement présente le contenu sur une seule page, que l’utilisateur parcourt par un déplacement de haut en bas sur la page. Il est préférable d’utiliser le défilement lorsque le contenu est continu et en une seule pièce, un article ou un tutoriel par exemple. Le défilement fonctionne également bien pour les flux de contenu. Vous devriez choisir d’utiliser le défilement lorsque les renseignements sont étroitement liés et ont le même niveau de détail. Il est plus facile pour l’utilisateur de balayer l’ensemble du contenu par le défilement plutôt que de le faire cliquer pour continuer à visionner le contenu.

Vous devriez organiser la structure de la page afin que l’information la plus importante soit au sommet; une brève description du contenu au début de la page donne à l’utilisateur une idée de ce qui va apparaître plus loin et lui donne une raison de défiler.

## Pagination

La pagination divise le contenu en plusieurs pages distinctes. Il est préférable d’utiliser la pagination lorsque l’utilisateur tente d’accomplir un objectif, par exemple pour essayer de trouver un article à partir d’une liste. Diviser le contenu de la liste en plusieurs pages empêche l’utilisateur de se sentir dépassé. Un utilisateur peut voir la taille de l’ensemble de données, de sorte qu’il sait à quel point il y a plus de contenu à examiner. La pagination permet également à l’utilisateur de se sentir plus en contrôle du contenu qu’il observe vu qu’il peut décider si, oui ou non, il cliquera vers la page suivante. Chaque clic devrait mener l’utilisateur plus près de la réalisation de son objectif.

 <documentationtabs remove="react">
    <doctabpanel type="html">
          

## Aperçu

On se sert d’un bloc important de liens connectés pour la pagination, ce qui permet de veiller à ce que les liens soient difficiles à manquer et faciles à appliquer sur une échelle supérieure. De plus, cela assure une zone cible plus importante. La pagination est conçue à l’aide d’une liste d’éléments HTML afin que les lecteurs d’écran puissent indiquer le nombre de liens accessibles. Utilisez un élément enveloppeur `<nav>` pour l’identifier comme section de navigation aux lecteurs d’écran et aux autres technologies d’assistance. 

De plus, vu que les pages ont probablement plus d’une telle section de navigation, il est recommandé de fournir une étiquette descriptive aria pour illustrer l’objectif de la composante `<nav>`. À titre d’exemple, si un élément de pagination est utilisé pour naviguer entre un ensemble de résultats de recherche, une étiquette adéquate pourrait être `aria-label="Search results pages "`.


<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
        </a>
        </li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation pages"> 
    <ul class="pagination">
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
        </a>
        </li>
    </ul>
</nav>
```

Vous souhaitez utiliser une icône ou un symbole plutôt que du texte pour certains liens de pagination? Assurez vous de fournir le soutien de lecteur d’écran adéquat avec des attributs `aria` et l'utilité `.sr-only`.

## États activé et désactivé

Les liens de pagination sont personnalisables, afin de répondre à différentes circonstances. Utilisez `.disabled` pour des liens qui semblent impossibles à cliquer et `.active` pour indiquer la page actuelle.

Bien que la classe .disabled utilise `pointer-events: none` pour essayer de désactiver la fonctionnalité de lien des `<a>`, cette propriété CSS n’est pas encore normalisée et ne tient pas compte de la navigation au clavier. Ainsi, vous devriez toujours ajouter `tabindex="-1"` aux liens désactivés et utiliser le langage JavaScript personnalisé pour complètement désactiver leur fonctionnalité. 

Vous avez la possibilité d’échanger des points d’ancrage actifs et inactifs par `<span>`, ignorer le point d’ancrage dans le cas des flèches « précédent » ou « suivant » ou supprimer la fonctionnalité du clic et empêcher la cible du clavier tout en conservant les styles souhaités.


<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
            <span>Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span>Next</span>
        </a>
        </li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation pages">
    <ul class="pagination">
        <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
        <span>Previous</span>
        </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
        <span>Next</span>
        </a>
        </li>
    </ul>
</nav>
```

</doctabpanel>
    <doctabpanel type="design">
          
La pagination est conçue comme suit :

Le bouton secondaire sur la gauche disant « précédent ». Des nombres au milieu et un autre bouton secondaire sur la droite disant « suivant ».

Les nombres sont affichés avec Nunito sans gras à 14px. Chaque nombre a un remplissage de 10px.

Le numéro de la page active est indiqué dans un rectangle avec un remplissage de 10px, avec une bordure de 4px. La boîte est affichée à l’aide de la même couleur que les boutons primaires, soit <badge style="background-color: #002D42">#002D42</badge>, et le nombre est indiqué en texte blanc.

<pagination aria-label="Page navigation example">
    <paginationitem>
        <paginationlink href="#example">
        « <!-- previous="true" doesn't work, this needs a solution  -->
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        1
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        2
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        3
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        4
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        5
        </paginationlink>
    </paginationitem>
    <paginationitem>
        <paginationlink href="#example">
        »
        </paginationlink>
    </paginationitem>
</pagination>

## Pratiques exemplaires

Par l’intermédiaire de la pagination, un utilisateur devrait être en mesure de comprendre la quantité de contenu présent; vous devriez inclure un lien vers la dernière page du contenu dans la barre de pagination, à moins que l’ensemble de données varie en taille. Incluez également un lien menant à la première page sur chaque page.

Chaque page doit contenir la même quantité d’objets, vous voudrez peut-être inclure une option pour l’utilisateur de changer la façon dont de nombreux objets sont présentés sur chaque page. Selon le type de contenu, vous pouvez vouloir permettre aux utilisateurs de filtrer et d’organiser sur quelle page les objets apparaissent.

L’utilisateur doit être en mesure de dire clairement sur quelle page il se trouve. Placez ce nombre au milieu de la barre de pagination et donnez-lui le plus lourd poids visuel. L’utilisateur doit également être en mesure de voir quelles pages de contenu il a déjà vues de sorte qu’il n’a pas besoin de revoir le contenu qu’il a déjà vu. Vous pouvez montrer cela en changeant la couleur, habituellement une couleur secondaire, des pages déjà visitées et des pages que l’utilisateur n’a pas encore visitées.

</doctabpanel>
    </documentationtabs>
