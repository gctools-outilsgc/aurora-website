---
path: "/component/errors-and-validation"
subnav: "4/Forms/Formulaires/3"
lang: "fr"
title: "Erreurs et validation"
---

<helmet>
<title> Erreurs et validation - Système de conception Aurora </title>
</helmet>

# Erreurs et validation

## Erreurs de saisie

Les erreurs de saisie devraient être affichées de sorte qu’il est clair à l’utilisateur qu’il a fait une erreur, ce qu’est cette erreur et où elle se trouve. Pour afficher les erreurs dans un formulaire de présentation, utiliser les boîtes d’erreur et les erreurs en ligne. Pour chaque erreur, les copies utilisées à la fois pour la boîte d’erreur et l’erreur en ligne devraient être identiques.

<documentationtabs>
      <doctabpanel type="html">
          
<codeblock html='
    <section class="alert alert-danger alert-icon-border">
        <h2>Erreur dans le champ ou champ obligatoire</h2>
        <ul class="list-unstyled">
        <li><a href="#" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
        <li><a href="#" class="alert-link">2 - Courriel invalide</a></li>
        <li><a href="#" class="alert-link">3 - Les mots de passe doivent correspondre</a></li>
        </ul>
    </section>
' react='' /></codeblock>

<codeblock html='
    <label for="exampleInputText1">Nom d’utilisateur</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error" id="exampleInputText1" placeholder="Exemple d’entrée">
    <small id="Text1Error" class="form-text text-danger">Ceci est le message d’erreur</small>
' react='' /></codeblock> 

</doctabpanel>
      <doctabpanel type="react">
      </doctabpanel>
      <doctabpanel type="design">
          

## Boîtes d’erreur
Une boîte d’erreur devrait apparaître au début du formulaire répertoriant les erreurs. Dans la boîte d’erreur, spécifiez le nombre d’erreurs, et faites-en la liste numérique dans l’ordre auxquelles elles apparaissent dans le formulaire. Pour chaque erreur, donnez la raison de l’erreur et un lien qui dirige l’utilisateur à l’erreur. Si l’utilisateur essaie de soumettre le formulaire avec des champs obligatoires vides, dirigez-les vers cette boîte d’erreur.

Les boîtes d’erreur sont conçues comme suit :

Un rectangle de la même largeur que le contenant du formulaire. Une bordure de 4px et un trait d’une largeur de 1px utilisant la couleur <badge style="background-color: #923534;">#923534</badge>. La boîte a un remplissage de 15px. Dans le coin supérieur gauche, il y a un cercle rouge avec une icône « X » blanche de 25px.

L’en-tête de la boîte utilise le style d’en-tête 2 et le texte utilise le style paragraphe. Une copie d’erreur est affichée dans une liste numérotée en utilisant <badge style="background-color: #923534;">#923534</badge>. Chaque erreur est un lien qui mène l’utilisateur à l’erreur en ligne sur la page.

<section class="alert alert-danger alert-icon-border">
    <h2>Erreur dans le champ ou champ obligatoire</h2>
    <ul class="list-unstyled">
    <li><a href="#" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#" class="alert-link">2 - Courriel invalide</a></li>
    <li><a href="#" class="alert-link">3 - Les mots de passe doivent correspondre</a></li>
    </ul>
</section>

## Erreurs en ligne

La bordure du champ de saisie sera visible à l’aide de la couleur <badge style="background-color: #923534;">#923534</badge>. S’il y a une erreur sur un bouton de saisie, l’étiquette est affichée à l’aide de la même couleur.

Les erreurs en ligne sont affichées sous le champ de saisie et indiquent à l’utilisateur la façon de corriger l’erreur. Les erreurs en ligne devraient être aussi concises que possible et limitées à une ligne qui tient en dessous du champ de saisie.

Les erreurs en ligne sont conçues comme suit :

<label for="exampleInputText1">Nom d’utilisateur</label>
<input type="text" class="form-control is-invalid" aria-describedby="Text1Error" id="exampleInputText1" placeholder="Exemple d’entrée">
<small id="Text1Error" class="form-text text-danger">Ceci est le message d’erreur</small>

L’icône « x » à la gauche du texte d’erreur. L’erreur est placée 10px en dessous du champ de saisie. Le texte est dans la police Nunito sans régulier à 14px de la couleur <badge style="background-color: #923534">#923534</badge>.

## Confirmation

Les champs devraient être confirmés lorsque l’utilisateur a terminé de remplir l’information des champs obligatoires, mais avant que l’utilisateur soumette ou termine le formulaire en entier.

## Champs obligatoires

Les saisies devraient être clairement indiquées comme facultatives ou obligatoires.

Si la plupart des champs dans le formulaire sont obligatoires, veuillez indiquer seulement les champs facultatifs.

Si la plupart des champs dans le formulaire sont facultatifs, veuillez indiquer seulement les champs obligatoires.

Des indications devraient être situées à côté du champ de saisie. Les termes (obligatoire) ou (facultatif) devraient être présents seulement lorsque cela est nécessaire. Le texte indicateur utilise la couleur <badge style="background-color: #252525">#252525</badge> et suit la même conception typographique que les étiquettes.
      
</doctabpanel>
    </documentationtabs>


