---
path: "/component/text-inputs"
subnav: "4/Forms/Formulaires/4"
lang: "fr"
title: "Saisies textuelles"
---

# Saisies textuelles

Les champs de saisie permettent aux utilisateurs de fournir de l’information en entrant du texte dans une page. L’information peut être entrée au moyen d’une variété de champs de saisie différents comme les champs de texte (zone de texte), les cases à cocher, les boutons radio et la saisie de données. Les champs de saisie apparaissent typiquement dans les formulaires et devraient clairement indiquer que l’utilisateur peut saisir de l’information à l’aide d’étiquettes, d’infobulles, d’espace réservé de texte et d’un style approprié.

## Zone de texte

Le champ de texte sélectionné par l’utilisateur devrait être indiqué visuellement. Mettre en surbrillance la boîte de texte sélectionnée montre à l’utilisateur le champ qu'ils remplissent sans ajouter trop de poids visuel.

Lorsqu’il y a une erreur dans un champ textuel, mettre le champ en surbrillance en rouge démontre un niveau significatif plus élevé qu’en bleu. Voir les erreurs et les confirmations pour de plus amples renseignements sur les erreurs de saisie.

Les champs de saisie textuelle peuvent également comprendre des éléments interactifs à la droite du champ. Les éléments interactifs seront toujours affichés à l’aide d’une icône, comme un œil pour montrer un mot de passe visible ou caché.

<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" aria-describedby="Password1Error" id="exampleInputPassword1" placeholder="Password">
<small id="Password1Error" class="form-text text-muted">8-character minimum, case sensitive</small>
  

<codeblock html='
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" aria-describedby="Password1Error" id="exampleInputPassword1" placeholder="Password">
    <small id="Password1Error" class="form-text text-muted">8-character minimum, case sensitive</small>
' react='
' />

Les champs de texte sont conçus comme suit :

<label for="exampleInputEmail1">Form label</label>
<input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email">
<small id="emailHelp" class="form-text text-muted">Form Text - To give hints and things</small>

<codeblock html='
    <label for="exampleInputEmail1">Form label</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">Form Text - To give hints and things</small>
' react='
' />

Normal : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur no CCCCCC. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

<label for="exampleInputEmail1">Form label</label>
<input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email">
<small id="emailHelp" class="form-text text-muted">Form Text - To give hints and things</small>

<codeblock html='
    <label for="exampleInputEmail1">Form label</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">Form Text - To give hints and things</small>
' react='
' />

Accent : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px no 269ABC. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

## Champ sélectionné

Les champs sélectionnés sont un menu déroulant d’options précises. Ils ont pour but de fournir aux utilisateurs un achèvement facile quand il n’y a que quelques options.

Les champs sélectionnés sont conçus comme suit :

<div class="mt-2">
    <label for="carSelect">Cars:</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>

<codeblock html='
    <div class="mt-2">
        <label for="carSelect">Cars:</label>
        <select id="carSelect" class="form-control">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    </div>
' react='' />

Normal : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur no CCCCCC. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur no CCCCCC et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15 par 27 par 15 par 12. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.

*Élément de champ sélectionné d’accent*

Accent : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur no 269ABC. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur no CCCCCC et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15 par 27 par 15 par 12. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.
