---
path: "/component/system-messaging"
subnav: "2/Standard/Standard/8"
lang: "fr"
title: "Messagerie du système"
---

<helmet>
<title> Messagerie du système - Système de conception Aurora </title>
</helmet>

# Messagerie du système

Les notifications du système sont de courts messages qui apparaissent pour communiquer de l’information à l’utilisateur. Des notifications apparaissent comme des bannières en premier plan qui ont besoin d’être fermées ou qui se ferment après une période de temps. Il y a quatre niveaux de gravité qui peuvent être appliqués à la notification : erreur, avertissement, information et succès.

Les notifications conçues du système en ordre décroissant de sévérité :

## Erreur

Les notifications d’erreur sont utilisées pour les pannes de système et les erreurs de l’utilisateur.

Exemple d’erreur : « Votre mot de passe doit contenir au moins huit (8) caractères. »

<Alert color="danger">
    C’est une alerte en cas de danger avec un <a href="#example" class="alert-link">exemple de lien.</a>.
</Alert>

<codeblock html='
    <div class="alert alert-danger" role="alert">
        C’est une alerte en cas de danger avec un <a href="" class="alert-link">exemple de lien.</a>.
    </div>
' react='
<Alert color="danger">
    C’est une alerte en cas de danger avec un <a href="" class="alert-link">exemple de lien.</a>.
</Alert>
'></codeblock>

## Avertissement

Les notifications d’avertissement sont utilisées pour les avis d’éventuelles erreurs.

Exemple d’avertissement : « Verr. Maj. est activé ce qui pourrait faire en sorte que vous entriez votre mot de passe incorrectement. »

<Alert color="warning">
    C’est une alerte d’avertissement avec un  <a href="#example" class="alert-link">exemple de lien.</a>.
</Alert>

<codeblock html='
    <div class="alert alert-warning" role="alert">
        C’est une alerte d’avertissement avec un  <a href="" class="alert-link">exemple de lien.</a>.
    </div>
' react='
<Alert color="warning">
    C’est une alerte d’avertissement avec un  <a href="" class="alert-link">exemple de lien.</a>.
</Alert>
'></codeblock>

## Information

Les notifications d’information servent à fournir des renseignements supplémentaires et des notes à l’utilisateur qu’elles peuvent trouver utiles selon le contexte.

Exemple d’information : « Vous pouvez changer votre mot de passe dans les paramètres. »

<Alert color="info">
    C’est une alerte d’information avec un <a href="#example" class="alert-link">exemple de lien.</a>.
</Alert>

<codeblock html='
    <div class="alert alert-info" role="alert">
        C’est une alerte d’information avec un <a href="" class="alert-link">exemple de lien.</a>.
    </div>
' react='
<Alert color="info">
    C’est une alerte d’information avec un <a href="" class="alert-link">exemple de lien.</a>.
</Alert>
'></codeblock>

## Succès

Les notifications de succès sont utilisées pour confirmer qu’une tâche a été achevée avec succès.

Exemple de succès : « Votre mot de passe a été mis à jour avec succès. »

<Alert color="success">
    C’est une alerte en cas de succès avec un <a href="#example" class="alert-link">exemple de lien.</a>.
</Alert>

<codeblock html='
    <div class="alert alert-success" role="alert">
        C’est une alerte en cas de succès avec un <a href="" class="alert-link">exemple de lien.</a>.
    </div>
' react='
<Alert color="success">
    C’est une alerte en cas de succès avec un <a href="" name = "success" class="alert-link">exemple de lien.</a>.
</Alert>
'></codeblock>

## Style de notifications

### Conception

Les notifications sont conçues avec le même concept de simplicité que celui des tableaux d’humeur. Il y a suffisamment de couleur dans les bannières pour fournir un effet visuel qui capte l’attention de l’utilisateur, sans submerger son champ de vision.

Les icônes de police de caractères sont extraordinaires et ont été choisies en raison de leur conception simple et de leur universalité.

Une ombre portée est utilisée pour montrer à l’utilisateur que la notification peut être fermée en cliquant sur le bouton « X ». L’ombre portée a un axe des X de 1px, un axe des Y de 1px et une opacité de 23 %.

### Couleurs

Les couleurs utilisées pour les notifications sont de la palette de conception du système.

Couleur hexadécimale pour les notifications d’erreur : <badge style="background-color: #D3080C">#D3080C</badge>

Couleur hexadécimale pour les notifications d’avertissement : <badge style="background-color: #FF9900; color:black">#FF9900</badge>

Couleur hexadécimale pour les notifications d’information : <badge style="background-color: #269ABC; color:black">#269ABC</badge>

Couleur hexadécimale pour les notifications de succès : <badge style="background-color: #278400">#278400</badge>

### Emplacement

Les notifications devraient être situées au haut de la page ou dans un endroit pratique et visible pour l’utilisateur.

### Police

La police de caractères utilisée pour les notifications est la police normalisée de conception du système Nunito sans régulier. Le titre de la notification est de couleur noire et de taille 16px. Le message de la notification est de couleur noire et de taille 14px. Les tailles de police ont été choisies pour leur grande visibilité et lisibilité facile. Toutefois, la taille de la police peut varier en fonction de la taille de l’affichage, de l’appareil utilisé ou de combien de temps dure le message de notification.

### Taille et remplissage

Les notifications sont de 62px par 425px. Le texte a un remplissage de 15px sur le dessus et en dessous, ainsi qu’un remplissage de 30px à partir de la gauche. Les coins sont arrondis à 2px. Les tailles de remplissage peuvent varier en fonction de la longueur du message. Le remplissage est utilisé pour rendre le texte plus prononcé afin de séparer le contenu du message de l’arrière-plan du contenu.

### Messages de notification

Les messages de notification devraient être simples et aussi courts que possible et devraient aussi utiliser des mots clés. Les messages longs peuvent être imprécis et peuvent avoir une incidence sur la taille et la lisibilité du message.

Exemple d’une notification claire : Votre photo de profil a été modifiée avec succès.
