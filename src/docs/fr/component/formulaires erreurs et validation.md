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

## Boîtes d’erreur

*texte ici*

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Boîtes d’erreur

*texte ici*

<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p> Please verify the following fields: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>

```html
<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p> Please verify the following fields: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>
```
## Erreurs en ligne

*texte ici*

<div class="form-group">
    <label for="exampleInputText1-html">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Username already exists</small>
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Agree to Terms and Conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Custom radio 1</label>
</div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Custom radio 2</label>
    <small id="RadioError-html" class="invalid-feedback">You must select one option</small>
</div>


```html
<div class="form-group">
    <label for="exampleInputText1-html">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Username already exists</small>
</div>                

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Agree to Terms and Conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Custom radio 1</label>
</div> 

<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Custom radio 2</label>
    <small id="RadioError-html" class="invalid-feedback">You must select one option</small>
</div>
```

## Validated Errors

*texte ici*

<div class="form-group">
    <label for="exampleInputText2-html">Username</label>
    <input type="text" class="form-control is-valid" aria-describedby="Text1Error-html" id="exampleInputText2-html" placeholder="aurora.design">
</div>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2-html">
    <label class="custom-control-label" for="customCheck2-html">Custom check</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3-html" name="customRadio2-html" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3-html">Custom radio 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4-html" name="customRadio2-html" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4-html">Custom radio 2</label>
</div>

```html
<div class="form-group">
    <label for="exampleInputText1-html">Username</label>
    <input type="text" class="form-control is-invalid" aria-describedby="Text1Error-html" id="exampleInputText1-html" placeholder="aurora.design">
    <small id="Text1Error-html" class="invalid-feedback">Username already exists</small>
</div>                

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-html" aria-describedby="CheckboxError-html">
    <label class="custom-control-label" for="customCheck1-html">Agree to Terms and Conditions</label>
    <small id="CheckboxError-html" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-html" name="customRadio-html" class="custom-control-input is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio1-html">Custom radio 1</label>
</div> 

<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-html" name="customRadio-html" class="custom-control-input  is-invalid" aria-describedby="RadioError-html">
    <label class="custom-control-label" for="customRadio2-html">Custom radio 2</label>
    <small id="RadioError-html" class="invalid-feedback">You must select one option</small>
</div>
```

</doctabpanel>
    <doctabpanel type="design">
          

## Boîtes d’erreur

Les boîtes d’erreur sont conçues comme suit :

<section class="alert alert-danger alert-danger-banner">
    <h2>Field error or required</h2>
    <p> Please verify the following fields: </p>
    <ul class="list-unstyled">
    <li><a href="#exampleInputText1-html" class="alert-link">1 - Nom d’utilisateur existe déjà</a></li>
    <li><a href="#customCheck1-html" class="alert-link">2 - You must agree to the Terms and Conditions</a></li>
    <li><a href="#customRadio2-html" class="alert-link">3 - You must select one option</a></li>
    </ul>
</section>

Un rectangle de la même largeur que le contenant du formulaire. Une bordure de 4px et un trait d’une largeur de 1px utilisant la couleur <badge style="background-color: #923534;">#923534</badge>. La boîte a un remplissage de 15px. Dans le coin supérieur gauche, il y a un cercle rouge avec une icône « X » blanche de 25px.

L’en-tête de la boîte utilise le style d’en-tête 2 et le texte utilise le style paragraphe. Une copie d’erreur est affichée dans une liste numérotée en utilisant <badge style="background-color: #923534;">#923534</badge>. Chaque erreur est un lien qui mène l’utilisateur à l’erreur en ligne sur la page.


## Erreurs en ligne

La bordure du champ de saisie sera visible à l’aide de la couleur <badge style="background-color: #923534;">#923534</badge>. S’il y a une erreur sur un bouton de saisie, l’étiquette est affichée à l’aide de la même couleur.

Les erreurs en ligne sont affichées sous le champ de saisie et indiquent à l’utilisateur la façon de corriger l’erreur. Les erreurs en ligne devraient être aussi concises que possible et limitées à une ligne qui tient en dessous du champ de saisie.

Les erreurs en ligne sont conçues comme suit :

L’icône « x » à la gauche du texte d’erreur. L’erreur est placée 10px en dessous du champ de saisie. Le texte est dans la police Nunito sans régulier à 14px de la couleur <badge style="background-color: #923534">#923534</badge>.

<label for="exampleInputText1-design">Username</label>
<input type="text" class="form-control is-invalid" aria-describedby="Text1Error-design" id="exampleInputText1-design" placeholder="aurora.design">
<small id="Text1Error-design" class="invalid-feedback">Username already exists</small>

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-invalid" id="customCheck1-design" aria-describedby="CheckboxError-design">
    <label class="custom-control-label" for="customCheck1-design">Agree to Terms and Conditions</label>
    <small id="CheckboxError-design" class="invalid-feedback">You must agree to the Terms and Conditions</small>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio1-design" name="customRadio-design" class="custom-control-input is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio1-design">Custom radio 1</label>
    </div>
    
<div class="custom-control custom-radio mb-3">
    <input type="radio" id="customRadio2-design" name="customRadio-design" class="custom-control-input  is-invalid" aria-describedby="RadioError-design">
    <label class="custom-control-label" for="customRadio2-design">Custom radio 2</label>
    <small id="RadioError-design" class="invalid-feedback">You must select one option</small>
</div>

## Validated Errors

*texte ici*

<label for="exampleInputText2">Username</label>
<input type="text" class="form-control is-valid" aria-describedby="Text1Error" id="exampleInputText2" placeholder="aurora.design">

<div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input is-valid" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Custom check</label>
</div>

<div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="customRadio2" class="custom-control-input is-valid">
    <label class="custom-control-label" for="customRadio3">Custom radio 1</label>
    </div>
<div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="customRadio2" class="custom-control-input  is-valid">
    <label class="custom-control-label" for="customRadio4">Custom radio 2</label>
</div>
      
</doctabpanel>
    </documentationtabs>


