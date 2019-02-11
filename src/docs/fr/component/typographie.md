---
path: "/component/typography"
subnav: "1/Visuals/Visuels/3"
lang: "fr"
title: "Typographie"
---

<helmet>
<title> Typographie - Système de conception Aurora </title>
</helmet>

# Typographie

## Polices

Aurora utilise deux familles de polices pour tous les produits numériques : « Rubik » et « Nunito Sans ». « Rubik » et « Nunito Sans » sont des polices de source ouverte et peuvent être téléchargés gratuitement à partir de [Google Fonts](https://fonts.google.com/).

[Rubik](https://fonts.google.com/specimen/Rubik) est utilisé pour les titres et les en-têtes, tandis que [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) est utilisé pour le texte des sous-en-têtes, des boutons et des paragraphes.

Si seules les polices du système sont disponibles, veuillez vous servir de Calibri ou d’un autre caractère typographique sans-serif (lettres linéales) en guise de rechange. Servez-vous de la même taille et du même poids que ce qui figure ci-dessous, avec quelques petits ajustements, au besoin.

**Rubik**
![Rubik Font](../../../img/examples/Rubik_image.PNG)
**Nunito Sans**
![Nunito Sans Font](../../../img/examples/Nunito_Sans_font.PNG)

### Choix des polices

Les deux polices choisies pour ce système de conception améliorent l’accessibilité et la lisibilité. Les polices sans serif ont une structure plus simple que les polices serif et script, de sorte que les utilisateurs ayant des difficultés de lecture ou des déficiences visuelles sont en mesure de déchiffrer plus facilement les caractères.

Si vous choisissez d’utiliser des polices autres que celles énumérées ici, il est recommandé que votre produit numérique utilise des polices sans serif plutôt que des polices serif ou script.

Certains systèmes peuvent ne pas être en mesure de télécharger ou d’afficher les polices dans ce système de conception. Cela peut être attribuable à diverses raisons, y compris les restrictions relatives aux pare-feu, les paramètres d’accessibilité, etc. Dans ce cas, votre application devrait être configurée pour utiliser la police par défaut du navigateur.

### À propos des styles de caractère

**Rubik** est une police sans serif conçue par Philipp Hubert et Sebastian Fischer pour le projet de laboratoire Chrome Cube. Avec cinq poids différents, Rubik fonctionne bien comme une police de paragraphe ou d’affichage. Rubik est populaire à l’échelle internationale et est utilisé dans plus de 180 000 sites Web.

**Nunito Sans** fait partie des styles de caractères de la super famille de Google. Il a été créé par Vernon Adams et a été amélioré par Jacques Le Bailly pour inclure un ensemble complet de poids. Cette police est populaire partout dans le monde et est utilisée dans 50 000 sites Web.

## Titres \(H1)

Les titres apparaissent seulement dans le haut des pages et indiquent les points de navigation de haut niveau.

Les titres sont affichés à l’aide de « Rubik Light » à 36 points de couleur <badge style="background-color: #252525">#252525</badge> sur un arrière-plan pâle ou <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge> sur un arrière-plan foncé.

## En-tête \(H2-H6)

Il y a cinq différents sous-en-têtes. Tous les sous-titres sont de couleur <badge style="background-color: #252525">#252525</badge> sur un arrière-plan pâle ou <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge> sur un arrière-plan foncé.

Les en-têtes ont les styles typographiques suivants :

**En-tête 2 :** « Rubik Regular » à 28 points (1,75 em).

**En-tête 3 :** « Rubik Medium » à 24 points (1,5 em) ayant un modificateur de suivi établi à 10.

**En-tête 4 :** « Rubik Regular » à 21 points (1,312 5 em).

**En-tête 5 :** « Nunito Sans Regular » à 18 points (1 125 em).

**En-tête 6 :** « Nunito Sans Bold » à 16 points (1 em).

<div>
    <h2>En-tête 2</h2>
    <h3>En-tête 3</h3>
    <h4>En-tête 4</h4>
    <h5>En-tête 5</h5>
    <h6>En-tête 6</h6>
</div>

## Texte de paragraphe

Le texte du paragraphe est utilisé pour la plupart du contenu de texte se trouvant dans l’application. Le texte du paragraphe est établi à la police « Nunito Sans Regular » à 16 points (1 em) avec un interlignage de 24 points. À moins d’indiquer un hyperlien ou un point de navigation, le texte du paragraphe ne devrait pas être mis en évidence davantage.

Le texte de paragraphe est de couleur <badge style="background-color: #252525">#252525</badge> sur un arrière-plan pâle ou de couleur <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge> sur un arrière-plan foncé.

### Rupture de ligne

Le système de conception d'Aurora est conforme aux pratiques exemplaires suivantes pour les ruptures de lignes :
* évitez les coupures de mots à la fin d’une ligne;
* évitez de laisser des blancs ou des orphelins sur une ligne;
* évitez des mises en retrait trop grandes.

### Longueur de ligne

La longueur idéale pour le corps du texte est d’environ de 40 à 60 caractères. Si la longueur de la ligne est trop courte ou trop longue, cela a un effet négatif sur la lisibilité. Notre système de conception suit ces lignes directrices et vise environ 60 caractères par ligne.

### Citations mises en vedette

Les citations mises en vedettes sont utilisées pour indiquer les phrases-clés du contenu affiché sur la page (dans des articles ou des blogues, par exemple). Elles sont intégrées aux paragraphes.

Elles sont mises en retrait par 50 px avec une ligne verticale dans la couleur secondaire de l’application. La ligne est de 4 px de largeur. Le remplissage entre la ligne et le texte est de 8 px. Le texte est affiché à l’aide de la police « Nunito Sans Regular » à 1,25 em et d’une hauteur de ligne de 200 %.

Voir la section sur la [couleur](couleur.md) pour obtenir des renseignements sur le choix des couleurs accessibles pour vos lignes de citation mise en vedette.

<div style="margin: 0 auto">
<p style="border-left-width: 4px; border-left-style: solid; border-left-color: #0ba7b4; padding-left: 8px; font-size: 1.25em; line-height: 200%;"> « Quelle belle accroche! »</p>
</div>

```html
<p style="border-left-width: 4px; border-left-style: solid; border-left-color: #0ba7b4; padding-left: 8px; font-size: 1.25em; line-height: 200%;"> « Quelle belle accroche! »</p>
```

## Listes

Il existe trois différents types de listes :

**Listes à puces :** Ces listes comportent des puces pour indiquer les groupes de contenu. La puce par défaut est un cercle ouvert avec un contour de couleur primaire. Une puce en retrait comprend un cercle ouvert ayant un contour gris.

<ul>
    <li>Point 1</li>
    <li>Point 2</li>
    <li>Point 3</li>
</ul>

**Listes numérotées :** Les listes numérotées comportent des numéros pour indiquer le contenu qui nécessite une hiérarchie.

<ol>
    <li>Point 1</li>
    <li>Point 2</li>
    <li>Point 3</li>
</ol>

**Listes interactives :** Les listes interactives comprennent du contenu cliquable. Ces listes comprennent un pointage et un état de clic et agissent comme des points de navigation mineurs.

<ul>
    <li><a href="#">Point 1</a></li>
    <li><a href="#">Point 2</a></li>
    <li><a href="#">Point 3</a></li>
</ul>

## Hyperliens

Le texte de lien est utilisé dans les paragraphes afin d’indiquer les hyperliens et les points de navigation. Les hyperliens et les points de navigation sont de police « Nunito Sans Regular » à 16 points (1 em) et ont un interlignage de 24 points.

Il est recommandé que le texte de lien soit souligné et affiché dans une couleur secondaire utilisée dans l’application. Il est également recommandé que la longueur des hyperliens ne dépasse pas une ligne et que les hyperliens soient appliqués à un ensemble de deux à quatre mots-clés plutôt qu’à une phrase ou à une ligne complète.

Les liens visités doivent être indiqués par une couleur différente. Habituellement, une pratique exemplaire pour les liens visités consiste à utiliser une version voilée de la couleur de votre hyperlien, une couleur secondaire ou le violet standard : <badge style="background-color: #551A8B">#551A8B</badge>.

## Accentuation

À des fins d’accessibilité, la couleur ne peut être la seule source de l’accentuation. Assurez-vous d’accentuer le texte en mettant la police de caractères en caractères gras et en augmentant le contraste.

Le formatage typographique, tel que l’italique ou le soulignement, doit être utilisé avec parcimonie et seulement lorsqu’il améliore véritablement la communication avec tous les lecteurs.

## Horodateurs et texte d’espace réservé

Les horodateurs et le texte d’espace réservé ont les mêmes styles typographiques. Les deux ont une police « Nunito Sans Regular » à 14 points et un interlignage de 21 points. Les horodateurs et le texte d’espace réservé sont de couleur <badge style="background-color: #666666">#666666</badge> sur un arrière plan pâle ou de couleur<badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge> sur un arrière-plan foncé.

<p style="font-size: 14px; color: #666666">Le 6 septembre 2018, 13 h 40</p>
<p style="font-size: 14px; color: #666666">Le 20 décembre 2015, 6 h 45</p>


## Texte de bouton

Le texte de bouton est affiché avec la police « Nunito Sans Bold » à 16 points et est de couleur <badge style="background-color: #252525">#252525</badge> sur un arrière-plan pâle ou de couleur <badge style="background-color: #FFFFFF; color:black">#FFFFFF</badge> sur un arrière-plan foncé. La couleur de ce texte dépend du bouton choisi et doit présenter un contraste suffisant avec la couleur de chaque type de bouton. Pour obtenir de plus amples renseignements sur le choix des couleurs, veuillez consulter la section sur les boutons.

<button color="secondary" outline="true">Secondaire</button>
<button color="secondary">Secondaire</button>
<button color="secondary" disabled="true">Secondaire</button>
