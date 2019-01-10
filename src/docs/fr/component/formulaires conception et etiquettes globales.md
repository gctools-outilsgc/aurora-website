---
path: "/component/overall-design-and-labels"
subnav: "4/Forms/Formulaires/1"
lang: "fr"
title: "Conception et étiquettes globales"
---

<helmet>
<title> Formulaires: conception et étiquettes globals - Système de conception Aurora </title>
</helmet>

# Conception et étiquettes globales

## Conception

Les formulaires doivent être conçus verticalement, car cela améliore leur balayabilité. Dans la mesure du possible, un formulaire devrait être sur une seule colonne.

Les renseignements peuvent être présentés sur plusieurs colonnes s’ils sont regroupés ensemble (champs du prénom et du nom de famille).

Les entrées devraient être regroupées et en séquence, de la façon la plus logique que possible. Si plusieurs entrées sont nécessaires pour un groupe de renseignements (p. ex., l’adresse municipale, le code postal et la province), ces entrées doivent être placées à proximité l’une de l’autre.

Habituellement, les formulaires commencent par les renseignements les plus importants ou les plus courants, comme le nom d’utilisateur, le mot de passe, le prénom ou le nom de famille, l’adresse de courriel, etc.

Pour les formulaires complexes, les renseignements doivent être publiés à l’aide de plusieurs étapes ou pages. Si c’est le cas, il est important d’inclure une barre de progression tout au long du formulaire, ainsi qu’une façon de naviguer vers l’avant et vers l’arrière entre les étapes.

<div class="card mb-3">
<div class="card-body">
<h3 class="card-title h5">Exemple d'un formulaire</h3>
<form>
  <div class="form-group">
    <label for="inputEmail3">Courriel</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
    <small id="emailHelp1" class="form-text text-muted">Nous ne partagerons jamais votre adresse e-mail avec quiconque.</small>
  </div>

  <div class="form-group">
    <label for="inputPassword3">Mot de passe</label>
    <input type="password" class="form-control" id="inputPassword3">
  </div>

  <div class="form-group">
    <label for="inputSelect">Sélectionner</label>
    <select class="form-control" id="inputSelect">
      <option selected></option>
      <option>...</option>
    </select>
  </div>
  <div class="form-group">
    <label for="inputSelect2">Sélectionner</label>
    <select class="custom-select" id="inputSelect2" multiple>
        <option selected>Ouvrir ce menu</option>
        <option value="1">Un</option>
        <option value="2">Deux</option>
        <option value="3">Trois</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Zone de texte</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <div class="custom-file">
        <label class="custom-file-label" for="customFile">Fichier</label>
        <input type="file" id="file" class="custom-file-input" aria-label="Fichier">
        <span class="custom-file-control"></span>
    </div>
  </div>

  <div class="form-group">
    <fieldset>
        <legend>Boutons radio</legend>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Premiere Radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Deuxième radio
            </label>
          </div>
          <div class="form-check disabled">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
            <label class="form-check-label" for="gridRadios3">
              Troisième
   disabled radio
            </label>
          </div>
    </fieldset>
  </div>

  <div class="form-group">
    <fieldset>
      <legend>Cases à cocher</legend>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Exemple case à cocher
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck2" disabled>
        <label class="form-check-label" for="gridCheck2">
          Exemple case à cocher désactivé
        </label>
      </div>
    </fieldset>
  </div>

  <button color="primary" href="#example">Soumettre</button>

</form>
</div>
</div>

## Étiquettes

Les utilisateurs doivent être en mesure de lire facilement les étiquettes et de comprendre intuitivement comment l’étiquette est liée à son champ. Le langage des étiquettes devrait concis, et elles devraient renfermer suffisamment de renseignements pour que l’utilisateur puisse inscrire les renseignements requis.

Si des renseignements supplémentaires sont nécessaires au-delà de l’étiquette, ces renseignements devraient être publiés dans une infobulle ou une microcopie séparée.

### Placement des étiquettes

Les étiquettes devraient suivre le format vertical du formulaire. Placez les étiquettes au dessus de leur champ respectif. Groupez une étiquette avec une étiquette avec son champ pour qu’il y ait une distinction claire entre les champs. N’utilisez pas le texte d’espace réservé pour les étiquettes, car cela empêche l’utilisateur de passer en revue de façon appropriée le formulaire. Les étiquettes ont une marge inférieure de 10 px du champ de saisie.

### Texte dans les étiquettes

La façon dont les étiquettes sont écrites a un effet sur leur lisibilité. Il ne faut pas écrire toutes les étiquettes en majuscules, car cela réduit leur lisibilité. Les étiquettes ne doivent pas être les mêmes que le texte d’espace réservé, parce les deux doivent être séparés. N’utilisez pas les symboles pour représenter le contenu requis.

## Champs obligatoires

Les saisies devraient être clairement indiquées comme facultatives ou obligatoires. Cette indicateur peut-être partie d'étiquette. 

Si la plupart des champs dans le formulaire sont obligatoires, veuillez indiquer seulement les champs facultatifs.

Si la plupart des champs dans le formulaire sont facultatifs, veuillez indiquer seulement les champs obligatoires.


## Regroupement et ensembles de champs

Pour aider les utilisateurs à mieux comprendre un formulaire, il peut s’avérer utile de regrouper des saisies dans des catégories ou des ensembles de champs. Les ensembles de champs devraient être regroupés visuellement sur la page et étiquetés à l’aide de l’en-tête 3, ainsi qu’un séparateur en dessous.

## Indicateurs d’étapes

S’il est possible de le faire, il est recommandé de limiter les formulaires à une seule page. Si un formulaire compte plus d’une page, utilisez un [indicateur d’étape](/component/progress-indicators).

Si un formulaire compte plus d’une page, il est recommandé de fournir à l’utilisateur une représentation visuelle de progression pour qu’il connaisse son niveau d’achèvement. Le style des [Indicateurs d’étape](/component/progress-indicators) est écrit dans sa propre section du présent document.

## Navigation
Il peut être nécessaire de naviguer vers différentes pages pour les inclure dans un formulaire. S’ils sont liés à un champ particulier, par exemple « J’ai oublié le mot de passe? », il faut inclure le lien en ligne et en dessous du champ connexe. Si le lien est lié à l’ensemble du formulaire, par exemple, « Inscrivez-vous ici », inscrivez le lien au bas du formulaire, séparé sur le plan visuel.
