---
path: "/component/file-upload"
subnav: "4/Forms/Formulaires/5"
lang: "fr"
title: "Téléversement des fichiers"
---

<helmet>
<title> Téléversement des fichiers - Système de conception Aurora </title>
</helmet>

# Téléversement des fichiers

Les saisies de téléversement de fichiers sont une combinaison d’un bouton et d’un champ de saisie. Elles sont incluses dans les formulaires sur lesquels l’utilisateur a la possibilité d’inclure des fichiers.

L’utilisateur ne saisit pas de texte dans le champ de saisie; celui-ci est rempli avec les renseignements de fichier une fois qu’un fichier a été choisi.

*Choisir le fichier* est le bouton d’action que l’utilisateur doit sélectionner. Une fois que l’utilisateur clique sur le bouton, une nouvelle fenêtre apparaît et l’utilisateur peut choisir un fichier. Les types de fichiers sont déterminés par les paramètres du système.

Les saisies de téléversement de fichiers ont quatre états :

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" aria-label="Choisir le fichier">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choisir le fichier</label>
</div>

<codeblock html='
    <div class="custom-file">
        <input type="file" id="file" class="custom-file-input" aria-label="Choisir le fichier">
        <span class="custom-file-control"></span>
        <label class="custom-file-label" for="customFile">Choisir le fichier</label>
    </div>
' react='' />

**État « normal » :** Le bouton est de couleur #002D42 à une opacité de 100 %, le texte est blanc et le rayon de bordure est de 4 px. Les coins supérieurs et inférieurs droits du bouton de téléversement de fichier a un rayon de bordure de 0 px. Le bouton est aligné à gauche du champ et comprend une icône de dossier.

Le champ de saisie est aligné à droite du bouton. Il s’agit d’un rectangle élevé de 42 px ayant un rayon de bordure de 4 px. La couleur de l’arrière-plan est le #FFFFFF, la couleur de bordure est le <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>, et l’ombrage de 1 px a une opacité noire floue à 20 %. Le texte est aligné à gauche du champ de saisie et suit les normes sur le [texte d’espace réservé.](typographie.md) Le champ est un remplissage de 11 px.

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" aria-label="file upload">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choisir le fichier</label>
</div>

<codeblock html='
    <div class="custom-file">
        <input type="file" id="file" class="custom-file-input" aria-label="file upload">
        <span class="custom-file-control"></span>
        <label class="custom-file-label" for="customFile">Choisir le fichier</label>
    </div>
' react='' />

**État « pointage » :** Le bouton est de couleur <badge style="background-color: #002D42;">#002D42</badge> à une opacité de 80 %, le texte est blanc et le rayon de bordure est de 4 px, et l’ombrage est de 15 px.
Le champ de saisie est aligné à droite du bouton. Il s’agit d’un rectangle élevé de 42 px ayant un rayon de bordure de 4 px. La couleur de l’arrière-plan est le #FFFFFF, la couleur de bordure est le <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Le texte est aligné à gauche du champ de saisie et suit les normes sur le [texte d’espace réservé.](typographie.md) Le champ est un ombrage de 11 px.

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" aria-label="file upload">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choisir le fichier</label>
</div>

<codeblock html='
    <div class="custom-file">
        <input type="file" id="file" class="custom-file-input" aria-label="file upload">
        <span class="custom-file-control"></span>
        <label class="custom-file-label" for="customFile">Choisir le fichier</label>
    </div>
' react='' />

**État « focus » :** Le bouton est de couleur <badge style="background-color: #002D42;">#002D42</badge> à une opacité de 80 %, le texte est blanc et le rayon de bordure est de 4 px, et l’ombrage est de 15 px. Il comprend un trait droit de 3 px dans la couleur primaire.
Le champ de saisie est aligné à droite du bouton. Il s’agit d’un rectangle élevé de 42 px ayant un rayon de bordure de 4 px. La couleur de l’arrière-plan est le #FFFFFF, la couleur de bordure est le <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Le texte est aligné à gauche du champ de saisie et suit les normes sur le [texte d’espace réservé.](typographie.md) Le champ a un ombrage de 11 px.

<div class="custom-file">
    <input type="file" id="file" class="custom-file-input" disabled aria-label="file upload">
    <span class="custom-file-control"></span>
    <label class="custom-file-label" for="customFile">Choisir le fichier</label>
</div>

<codeblock html='
    <div class="custom-file">
        <input type="file" id="file" class="custom-file-input" disabled aria-label="file upload">
        <span class="custom-file-control"></span>
        <label class="custom-file-label" for="customFile">Choisir le fichier</label>
    </div>
' react='' />

**État « désactivé » :** Le bouton est de couleur <badge style="background-color: #002D42;">#002D42</badge> à une opacité de 50 %, le texte est blanc et le rayon de bordure est de 4 px, et l’ombrage est de 15 px.
Le champ de saisie est aligné à droite du bouton. Il s’agit d’un rectangle élevé de 42 px ayant un rayon de bordure de 4 px. La couleur de l’arrière-plan est le #FFFFFF, la couleur de bordure est le <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Le texte est aligné à gauche du champ de saisie et suit les normes sur le [texte d’espace réservé.](typographie.md) Le champ a un remplissage de 11 px.
