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

<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="espace réservé pour le addresse email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mot de passe
</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="espace réservé pour le mot de passe">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputSelect" class="col-sm-2 col-form-label">Sélectionner</label>
    <div class="col-sm-10">
      <select class="form-control" id="inputSelect">
        <option selected></option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputSelect2" class="col-sm-2 col-form-label">Sélectionner</label>
    <div class="col-sm-10">
        <select class="custom-select" id="inputSelect2" multiple>
            <option selected>Ouvrir ce menu</option>
            <option value="1">Un</option>
            <option value="2">Deux</option>
            <option value="3">Trois</option>
        </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Zone de texte</label>
    <div class="col-sm-10">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="exampleFormControlFile1" class="col-sm-2 col-form-label">Fichier
</label>
    <div class="col-sm-10">
      <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Boutons radio</legend>
      <div class="col-sm-10">
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
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Cases à cocher</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          exemple case à cocher
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Se connecter
</button>
    </div>
  </div>
</form>

## Étiquettes

Les utilisateurs doivent être en mesure de lire facilement les étiquettes et de comprendre intuitivement comment l’étiquette est liée à son champ. Le langage des étiquettes devrait concis, et elles devraient renfermer suffisamment de renseignements pour que l’utilisateur puisse inscrire les renseignements requis.
Si des renseignements supplémentaires sont nécessaires au-delà de l’étiquette, ces renseignements devraient être publiés dans une infobulle ou une microcopie séparée.

### Placement des étiquettes

Les étiquettes devraient suivre le format vertical du formulaire. Placez les étiquettes au dessus de leur champ respectif. Groupez une étiquette avec une étiquette avec son champ pour qu’il y ait une distinction claire entre les champs. N’utilisez pas le texte d’espace réservé pour les étiquettes, car cela empêche l’utilisateur de passer en revue de façon appropriée le formulaire. Les étiquettes ont une marge inférieure de 10 px du champ de saisie.

### Texte dans les étiquettes

La façon dont les étiquettes sont écrites a un effet sur leur lisibilité. Il ne faut pas écrire toutes les étiquettes en majuscules, car cela réduit leur lisibilité. Les étiquettes ne doivent pas être les mêmes que le texte d’espace réservé, parce les deux doivent être séparés. N’utilisez pas les symboles pour représenter le contenu requis.

## Texte d’espace réservé

Le texte d’espace réservé est le texte qui apparaît directement dans le champ de saisie. Ce texte n’est pas censé être utilisé comme une étiquette, mais peut fournir des renseignements supplémentaires ou être une exemple pour l’utilisateur.

Le texte d’espace réservé vise à aider l’utilisateur à remplir avec plus d’exactitude le champ au lieu d’être l’indicateur principal du contenu du champ. Il peut être complémentaire à la microcopie, avec un texte d’espace réservé donnant un exemple et une microcopie fournissant des renseignements supplémentaires ou un contexte.

Dès que l’utilisateur commence à taper dans le champ, le texte d’espace réservé devrait disparaître.

Le style de police du texte d’espace réservé est le « Nunito Sans Regular », à 14 px, <badge style="background-color: #666666">#666666</badge>.


Pour obtenir de plus amples renseignements sur les styles de polices du texte d’espace réservé, veuillez consulter la section sur la [_typographie_](typographie.md).


## Microcopie
La microcopie est le texte dessous et le champ de saisie qui fournit des renseignements supplémentaires sur ce champ. Les microcopies devraient être des phrases brèves qui indiquent à l’utilisateur comment remplir le champ.

Le style des nombres est comme suit :
10 px sous le champ de saisie. Le texte est affiché de la même façon que le texte d’espace réservé; Nunito Sans Regular à 14 px, <badge style="background-color: #666666">#666666</badge>

S’il y a plus d’une ligne, le texte retourne à ligne et a un interlignage sur 18 points.

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Adresse e-mail
</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="entrer l'adresse e-mail
">
    <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre adresse e-mail avec quiconque.</small>
  </div>
<form>

<codeblock
    html='
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Adresse e-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="entrer ladresse e-mail">
            <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre adresse e-mail avec quiconque.</small>
        </div>
    <form>'
    react='
    <Form>
       <FormGroup>
          <Label for="exampleEmail">Adresse e-mail</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Nous ne partagerons jamais votre adresse e-mail avec quiconque.</FormText>
        </FormGroup>
    </Form>
    ' />
</codeblock>

### Regroupement et ensembles de champs

Pour aider les utilisateurs à mieux comprendre un formulaire, il peut s’avérer utile de regrouper des saisies dans des catégories ou des ensembles de champs. Les ensembles de champs devraient être regroupés visuellement sur la page et étiquetés à l’aide de l’en-tête 3, ainsi qu’un séparateur en dessous.

## Indicateurs d’étapes

S’il est possible de le faire, il est recommandé de limiter les formulaires à une seule page. Si un formulaire compte plus d’une page, utilisez un indicateur d’étape.
Si un formulaire compte plus d’une page, il est recommandé de fournir à l’utilisateur une représentation visuelle de progression pour qu’il connaisse son niveau d’achèvement. Le style des indicateurs d’étape est écrit dans sa propre section du présent document.

![Step indicator component at step 1](../../../img\components\steps indicator_1.png)

![Step indicator component at step 2](../../../img\components\steps indicator_2.png)

![Step indicator component at step 3](../../../img\components\steps indicator_3.png)

## Navigation
Il peut être nécessaire de naviguer vers différentes pages pour les inclure dans un formulaire. S’ils sont liés à un champ particulier, par exemple « J’ai oublié le mot de passe? », il faut inclure le lien en ligne et en dessous du champ connexe. Si le lien est lié à l’ensemble du formulaire, par exemple, « Inscrivez-vous ici », inscrivez le lien au bas du formulaire, séparé sur le plan visuel.
