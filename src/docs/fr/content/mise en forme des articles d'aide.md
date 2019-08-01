---
path: "/content/help article formatting"
subnav: "1/Content/Contenu/6"
lang: "fr"
title: "Mise en forme des articles d'aide"
---

<helmet>
<title> Mise en forme des articles d'aide - Système de conception Aurora </title>
</helmet>

# Mise en forme des articles d'aide

L’uniformité des articles d’aide permettra aux utilisateurs d’apprendre efficacement les caractéristiques de l’outil et de répondre aux questions courantes. Ces lignes directrices fournissent un style et un format uniformes lors de la rédaction d’articles d’aide. 

Tous les articles d’aide devraient être rédigés en langage aussi simple que possible et du point de vue de l’utilisateur. Les termes doivent avoir un sens pour l’utilisateur, même s’ils ne sont pas techniquement corrects pour ceux de l’industrie du logiciel. 

Les articles devraient viser à atteindre un niveau de lecture de 8e année ou moins. Ils doivent également être aussi concis et clairs que possible.  

*(Remarque : L’article publié ne ressemblera pas à ce que vous voyez dans l’éditeur Freshdesk. Cliquez sur le bouton Aperçu du brouillon dans le coin supérieur droit de l’éditeur pour voir comment les images et le texte apparaîtront dans un article fini.)*

## Titres
Tous les noms et titres des articles doivent être écrits sous forme de question. 

Par exemple :

- Comment puis-je créer un compte?
- Comment dois-je utiliser la fonction de recherche?

*(Remarque : Si l’article peut répondre à plus d’une question complète, vous devriez le diviser en plusieurs articles.)*

## En-têtes et texte
- La police est Helvetica Neue par défaut
- Utilisez toujours les options de format Freshdesk préétablies. N’utilisez pas les tailles de la police de caractères (c.‑à‑d. pas « 12 points »).
- Les en-têtes principaux (premier niveau) correspondent à En-tête 2. Les sections principales doivent comporter des en-têtes.
Les sous-titres correspondent à En-tête 3. Les sous-sections doivent avoir des sous-titres.
- Tout le reste du texte est Normal.
- Les guillemets sont utilisés pour indiquer quelque chose à taper (p. ex. « @ »)
- Le **texte en caractères gras** est utilisé pour faire référence aux boutons sur lesquels l’utilisateur doit cliquer (p. ex., **Afficher**).
- Le texte est en noir sur fond blanc, à moins que d’autres couleurs ne soient nécessaires pour faciliter la compréhension.
- Les tableaux sont en niveaux de gris (voir la section Tableaux).
- Les hyperliens sont en bleu (voir la section Hyperliens).


## Remarques, conseils et avertissements

### Remarques
- Les remarques sont en italique et doivent être mises entre parenthèses (p. ex. *(Remarque : Ce format))*.
- Les remarques sont des renseignements qui complètent le texte principal. Elles ne doivent pas décrire des mesures à prendre par l’utilisateur, mais plutôt donner des renseignements qui répondent aux questions que l’utilisateur pourrait avoir.
- Exemple : *(Remarque : L’opérateur d’un groupe doit être un membre du groupe)*.
- Les remarques doivent être alignées avec le texte auquel elles font directement référence.
- Les remarques doivent apparaître après le bloc de texte auquel elles font référence si elles répondent à une question plus générale au sujet des instructions.
- Les remarques doivent apparaître avant les images auxquelles elles font référence.

### Conseils
Pour ajouter un boite de conseil, copiez le code ci-dessous au code de source de votre l'article d'aide.
	 
<div class="alert alert-info" role="alert">
 Nous vous recommandons de mettre à jour votre courriel le plus tôt possible.
 </div>

```html
<div style="position: relative; padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid #c2e3ec; border-radius: 0.35rem; background-color: #f6fbfc; color: #000; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);" role="alert">
Nous vous recommandons de mettre à jour votre courriel le plus tôt possible.
</div>
```

- Les conseils sont des suggestions pour l’utilisateur. Ils ne constituent pas des étapes nécessaires, mais décrivent plutôt des actions qui peuvent aider le lecteur de mieux utiliser le système.

### Avertissements
Pour ajouter un boite d'avertissement, copiez le code ci-dessous au code de source de votre l'article d'aide.

<div class="alert alert-warning" role="alert">
Si vous supprimez votre compte, toute contribution que vous avez apportée à l’espace de travail numérique ouvert et accessible sera également perdue avec votre compte. 
</div>

```html
<div style="position: relative; padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid #ffe2b8; border-radius: 0.35rem; background-color: #fffbf5; color: #000; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);" role="alert">
Si vous supprimez votre compte, toute contribution que vous avez apportée à l’espace de travail numérique ouvert et accessible sera également perdue avec votre compte. 
</div>
```

- Les avertissements sont des problèmes qui peuvent survenir. Il peut s’agir d’erreurs, de données perdues, d’actions ayant des répercussions permanentes ou d’autres problèmes. Le texte doit également expliquer comment éviter ces problèmes.
- Les avertissements doivent être placés avant le texte auquel ils sont associés.

## Format des paragraphes
- Tout le texte doit être aligné à gauche.
- Il ne doit pas y avoir de sauts de ligne entre les titres, les sous-titres et le texte du paragraphe.
- Utilisez toujours un interligne simple. L’espacement est excessif lorsque l’article est consulté sur GCcollab, GCconnex et GCpédia.
- Utilisez un interligne simple entre les paragraphes ou les sections.
- N’utilisez pas d’espacement entre les sous-titres et le texte du paragraphe à leur suite.
- N’utilisez pas de renfoncement pour les titres, les sous-titres ou les paragraphes.

## Listes
- Les listes non triées doivent comporter des puces. Chaque élément de la liste doit apparaître avec un renfoncement simple et un point noir.
- Pour les points qui précisent une puce précédente, utilisez la puce vide et le renfoncement double.
Les listes non triées doivent être précédées d’une phrase d’introduction suivie d’un deux-points.
- Dans la mesure du possible, les phrases dans ces listes doivent avoir la même structure et les mêmes temps de verbe et se terminer par un signe de ponctuation.
- Les listes/étapes séquentielles doivent être numérotées dans l’ordre. Elles doivent apparaître avec un renfoncement simple.
- Chaque étape ne doit contenir qu’une seule action, à moins que les actions ne soient très étroitement liées.
- Dans la mesure du possible, commencez chaque étape par un verbe. Terminez chaque étape par un signe de ponctuation.
- Les listes peuvent être entrecoupées d’images.

Exemple :
1. Appuyez sur la touche de liste numérotée.
2. Tapez la première étape.
3. Appuyez sur la barre d’espace.
4. Tapez la deuxième étape.
5. Continuez au besoin.

## Images
Les images doivent être :

- Dimensionnées pour être lisibles. Généralement d’une largeur de 700px (puisque cette taille est la plus compatible avec GCcollab et GCconnex), à moins que l’agrandissement jusqu’à cette taille rende l’image difficile à lire.
- Centrées et non alignées sur le texte.
- Sous l’étape ou le texte auquel elles sont associées.
- Sans légende.
- Dans la même langue que l’article (c.-à-d., les articles en français doivent avoir des images en français et vice versa).


### Comment insérer et formater une image (avec des exemples de la façon de la placer):
- Déplacez votre curseur à la fin de la ligne de texte où vous souhaitez que votre image apparaisse. L’image sera placée sous la ligne de texte. (Remarque : Vous ne pouvez pas faire glisser les images).
- Cliquez sur l’icône d’insertion de l’image.
- Repérez et sélectionnez l’image que vous voulez insérer.
- Cliquez sur l’image pour afficher un menu d’options.
- Cliquez sur l’icône de changement de taille.
- Redimensionnez à une largeur de « 700px », s’il y a lieu.
- Cliquez sur **Afficher** (l’étoile) pour vous assurer que le texte ne s’enroule pas autour de l’image.
- Cliquez sur **Aligner** (les lignes) et choisissez au centre.

### Captures d’écran et éléments d’image
- Les captures d’écran doivent être suffisamment grandes pour que l’utilisateur comprenne le contexte et l’environnement de l’image.
- Utilisez un logiciel éditeur de photos (p. ex., Microsoft Paint) pour créer l’un des trois symboles suivants afin de signaler différents éléments :
- **Cercle** : pour afficher un bouton sur lequel l’utilisateur doit cliquer.
- **Rectangle** : pour attirer l’attention sur une grande surface, ou sur un ensemble de boutons ou d’onglets.             
- **Flèche** :  pour attirer l’attention sur une section générale d’une page, ou sur un cercle ou un encadré sur lequel vous désirez insister davantage.

## Tableaux
- Utilisez les tableaux avec parcimonie, seulement lorsque l’information nécessite un traitement plus complexe qu’une simple liste. 
- Utilisez le format normal
- Assurez-vous que la taille des cellules ne crée pas de coupures au sein des mots.
- Placez une espace avant et après le texte pour que la cellule n’ait pas l’air encombrée.
- Centrez le texte verticalement dans la cellule. Alignez le texte horizontalement à gauche.
- Les en-têtes doivent être en caractères gras.
- Les tableaux peuvent rester en blanc. 
 
Exemple de tableau :

| Button | Résultat |
| ----------- | ----------- |
|Page principale | Vous amène à la page d’accueil de GCpédia |
| Communautés | Affichage d’un index des communautés utilisant GCpédia dans tous les ministères |
|Parcourir les catégories | Affichage de toutes les catégories créées par les utilisateurs|
| Page au hasard | Affichage d’une page GCpédia au hasard |


## Hyperliens
- Les hyperliens sont en bleu.
- Lorsqu’un utilisateur clique sur un lien menant à un site ou à un autre article, nous voulons que ce soit dans un nouvel onglet. 

Pour ce faire :
1. Pour ajouter d’abord le lien, cliquez sur l’icône du lien (ou appuyez sur Ctrl K).
2. Entrez l’adresse URL appropriée.
3. Assurez-vous que la case Ouvrir dans le nouvel onglet est cochée.
4. Cliquez sur Enregistrer.  


## Tags
- N’oubliez pas d’ajouter l’application connexe (p. ex., GCcollab, GCaccount)
- Allez du général au spécifique.
- Utiliser des mots-clés du titre, des en-têtes et des instructions de l’article
- Assurez-vous d’avoir des étiquettes équivalentes en français.
- Remplissez la section des métadonnées en indiquant le titre de l’article, une description et les mêmes étiquettes que précédemment.
- Les étiquettes servent non seulement à rechercher des articles, mais aussi à remplir la barre latérale des articles connexes. Gardez cela à l’esprit lorsque vous effectuez l’étiquetage des articles; songez aux articles qu’il est utile de montrer ensemble.


## Style pour les termes et la grammaire
Les termes suivants sont libellés ainsi :
- Menu déroulant
- P. ex.
- Courriel
- Roue dentée (et non icône des réglages)
- Mots-clés
- Membres (et non utilisateurs)
- Sur la page (et non dans)
- Profil (et non page de profil)
- Carte de profil
- Avatar (et non icône du profil)
- Corbeille
- URL
- Nom d’utilisateur


## Langue et grammaire
- Évitez les abréviations à moins qu’elles ne soient largement connues.
- Utilisez la voix active.
- Évitez d’attribuer des qualités humaines au logiciel ou au matériel.
https://developers.google.com/style/anthropomorphism
- Ne mettez tout en majuscules pour mettre du texte en évidence; soulignez au besoin.
- Mentionnez les circonstances avant l’action lorsque pertinent.
- Utilisez l’indicatif présent autant que possible.
- **Virgules** : Utilisez-les avec parcimonie et seulement lorsque nécessaire pour améliorer la compréhension. Pas de virgule d’Oxford.
- **Tirets/points-virgules** : Utilisez-les avec parcimonie; un point suffira habituellement.
- **Points/ponctuation** : Terminez chaque phrase par une ponctuation quelconque.
- Les interactions avec les utilisateurs doivent utiliser une terminologie précise et uniforme. Assurez-vous que les noms des boutons ou des liens correspondent au texte réel dans l’application. 
- Visitez la [page Vocabulaire du système Aurora](https://design.gccollab.ca/content/system-vocabulary) pour connaître les mots couramment utilisés dans les applications.
