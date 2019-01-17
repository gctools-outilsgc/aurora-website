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

## Boîtes d’erreur

La boîte d’erreur fournit un résumé des erreurs de validation. Après qu’un utilisateur a soumis un formulaire, cette boîte affichera les erreurs applicables dans les champs particuliers. La boîte d’erreur apparaît en haut du formulaire.

Chaque erreur répertoriée dans la boîte constitue un lien vers le champ de saisie correspondant. Les messages d’erreur doivent être précis, mais descriptifs de l’erreur. Plus de renseignements sont fournis en ligne.

## Erreurs de saisie

Les erreurs de saisie devraient être affichées de sorte qu’il est clair à l’utilisateur qu’il a fait une erreur. Le message doit décrire qu'elle est l'erreur et où elle se trouve. Pour afficher les erreurs dans un formulaire de présentation, utiliser les boîtes d’erreur et les erreurs en ligne. Pour chaque erreur, celle qui se trouve dans la boîte d’erreur et dans l'erreur en ligne doivent être identiques.

Les erreurs en ligne sont affichées sous le champ de saisie et indiquent à l’utilisateur la façon de corriger l’erreur. Les erreurs en ligne devraient être aussi précises que possible et limitées à une ligne qui tient en dessous du champ de saisie.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Boîtes d’erreur

La boîte d’erreur utilise les classes `.alert`, `.alert-danger` et `.alert-danger-banner` pour créer la composante. Utilisez `.alert-link` pour appliquer le bon style aux liens d’erreur.

<section class="alert alert-danger alert-danger-banner">
    <h2>Erreur relative à un champ ou champ obligatoire</h2>
    <p> Veuillez vérifier les champs suivants: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 – Vous devez accepter les conditions.
</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 – Vous devez choisir une option.</a></li>
    </ul>
</section>

```html
<section class="alert alert-danger alert-danger-banner">
    <h2>Erreur relative à un champ ou champ obligatoire</h2>
    <p> Veuillez vérifier les champs suivants: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 – Vous devez accepter les conditions.
</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 – Vous devez choisir une option.</a></li>
    </ul>
</section>
```
## Erreurs en ligne

Pour les erreurs en ligne, utilisez la classe `.is-invalid` pour ajouter un style d’erreur à l’élément du formulaire.

Le texte de la microcopie qui fournit des renseignements à l’utilisateur est stylisé à l’aide de la classe `.invalid-feedback`. Utilisez `.aria-describedby` pour associer la microcopie à l’entrée invalide. Voir la page [Saisies textuelles](component/text-inputs) pour plus d'information sur la microcopie. 


<div class="form-group">
    <label for="exampleInputText1-html">Nom d'utilisateur</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Le nom d’utilisateur existe déjà.</small>
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Accepter les conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">Vous devez accepter les conditions.</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Radio personnalisée 1</label>
</div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Radio personnalisée 2
</label>
    <small id="RadioError-html" class="invalid-feedback">Vous devez choisir une option.</small>
</div>


```html
<div class="form-group">
    <label for="exampleInputText1-html">Nom d'utilisateur</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Le nom d’utilisateur existe déjà.</small>
</div>                

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Accepter les conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">Vous devez accepter les conditions.</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Radio personnalisée 1</label>
</div> 

<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Radio personnalisée 2</label>
    <small id="RadioError-html" class="invalid-feedback">Vous devez choisir une option.</small>
</div>
```

## Saisies validées

Pour les saisies validées, utilisez la classe `.is-valid` pour montrer que les renseignements fournis dans la saisie sont valides.

Le texte de la microcopie qui fournit des renseignements à l’utilisateur est stylisé à l’aide de la classe `.valid-feedback`. Utilisez `.aria-describedby` pour associer la microcopie à l’entrée valide.


<div class="form-group">
    <label for="exampleInputText2-html">Nom d'utilisateur</label>
    <input type="text" class="form-control is-valid" aria-describedby="Text1Error-html" id="exampleInputText2-html" placeholder="aurora.design">
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2-html">
    <label class="custom-control-label" for="customCheck2-html">Case à cocher personnalisée</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3-html" name="customRadio2-html" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3-html">Radio personnalisée 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4-html" name="customRadio2-html" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4-html">Radio personnalisée 2</label>
</div>

```html
<div class="form-group">
    <label for="exampleInputText2-html">Nom d'utilisateur</label>
    <input type="text" class="form-control is-valid" aria-describedby="Text1Error-html" id="exampleInputText2-html" placeholder="aurora.design">
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2-html">
    <label class="custom-control-label" for="customCheck2-html">Case à cocher personnalisée</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3-html" name="customRadio2-html" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3-html">Radio personnalisée 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4-html" name="customRadio2-html" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4-html">Radio personnalisée 2</label>
</div>
```

</doctabpanel>
    <doctabpanel type="design">
          

## Boîtes d’erreur

Les boîtes d’erreur sont conçues comme suit :

<section class="alert alert-danger alert-danger-banner">
    <h2>Erreur relative à un champ ou champ obligatoire</h2>
    <p> Veuillez vérifier les champs suivants: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 – Vous devez accepter les conditions.
</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 – Vous devez choisir une option.</a></li>
    </ul>
</section>

Un rectangle de la même largeur que le contenant du formulaire. Une bordure de 4px et un trait d’une largeur de 1px utilisant la couleur <badge style="background-color: #923534;">#923534</badge>. La boîte a un remplissage de 15px.

L’en-tête de la boîte utilise le style d’en-tête 2 et le texte utilise le style paragraphe. Une copie d’erreur est affichée dans une liste numérotée en utilisant <badge style="background-color: #923534;">#923534</badge>. Chaque erreur a un lien qui mène l’utilisateur à l’erreur en ligne sur la page.


## Erreurs en ligne

La bordure du champ de saisie sera visible à l’aide de la couleur <badge style="background-color: #923534;">#923534</badge>. S’il y a une erreur sur un bouton de saisie, l’étiquette est affichée à l’aide de la même couleur.

Les erreurs en ligne sont conçues comme suit :

L’erreur est placée 10px en dessous du champ de saisie. Le texte est dans la police Nunito sans régulier à 14px de la couleur <badge style="background-color: #923534">#923534</badge>.

<label for="exampleInputText1-design">Nom d'utilisateur</label>
<input type="text" class="form-control is-invalid" aria-describedby="Text1Error-design" id="exampleInputText1-design" placeholder="aurora.design">
<small id="Text1Error-design" class="invalid-feedback">Le nom d’utilisateur existe déjà.</small>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-design" aria-describedby="CheckboxError-design">
    <label class="custom-control-label" for="customCheck1-design">Accepter les conditions</label>
    <small id="CheckboxError-design" class="invalid-feedback">Vous devez accepter les conditions.</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-design" name="customRadio-design" class="custom-control-input is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio1-design">Radio personnalisée 1</label>
    </div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-design" name="customRadio-design" class="custom-control-input  is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio2-design">Radio personnalisée 2</label>
    <small id="RadioError-design" class="invalid-feedback">Vous devez choisir une option.
</small>
</div>

## Saisies validées

Lorsqu’un utilisateur corrige les erreurs de saisie, la boîte d’erreur disparaît et les saisies individuelles indiquent à l’utilisateur que l’erreur a été corrigée.

Les styles suivants représentent les saisies validées :  

La bordure du champ de saisie est indiquée par la couleur <badge style="background-color: #2B542C;">#2B542C</badge>. S’il y a une erreur dans la saisie de bouton, l’étiquette sera affichée à l’aide de la même couleur.

Le texte de renseignements sur l’erreur, situé en dessous du champ de saisie, disparaîtra.

<label for="exampleInputText2">Nom d'utilisateur</label>
<input type="text" class="form-control is-valid" aria-describedby="Text1Error" id="exampleInputText2" placeholder="aurora.design">

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Case à cocher personnalisée</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio2" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3">Radio personnalisée 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio2" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4">Radio personnalisée 2</label>
</div>
      
</doctabpanel>
    </documentationtabs>


