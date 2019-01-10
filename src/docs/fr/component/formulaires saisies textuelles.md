---
path: "/component/text-inputs"
subnav: "4/Forms/Formulaires/6"
lang: "fr"
title: "Saisies textuelles"
---

<helmet>
<title> Saisies textuelles - Système de conception Aurora </title>
</helmet>

# Saisies textuelles

Les champs de saisie permettent aux utilisateurs de fournir de l’information en entrant du texte dans une page. L’information peut être entrée au moyen d’une variété de champs de saisie différents comme les champs de texte (zone de texte), les cases à cocher, les boutons radio et la saisie de données. Les champs de saisie apparaissent typiquement dans les formulaires et devraient clairement indiquer que l’utilisateur peut saisir de l’information à l’aide d’étiquettes, d’infobulles, d’espace réservé de texte et d’un style approprié.

## Microcopie
La microcopie est le texte dessous et le champ de saisie qui fournit des renseignements supplémentaires sur ce champ. Les microcopies devraient être des phrases brèves qui peuvent indiquent à l’utilisateur comment remplir le champ.

## Texte d’espace réservé

Le texte contenu dans les espaces réservés n’est utilisé que pour fournir des renseignements supplémentaires ou des directives supplémentaires sur la façon de remplir une zone de texte. Le texte contenu dans les espaces réservés ne remplace pas une étiquette ou une microcopie. Le texte contenu dans les espaces réservés ne devrait être utilisé que si un exemple d’entrée de texte améliore l’expérience de l’utilisateur, plutôt que pour remplacer d’autres indicateurs de renseignements importants.

<documentationtabs remove="react">
      <doctabpanel type="html">
          

## Contrôles de forme

Les contrôles de forme textuelle, comme `<input>`, `<select>`, et `<textarea>` sont stylisés à l’aide de la classe `.form-control`. On y retrouve des styles d’apparence générale, d’état accentué, de taille et plus.

## Saisies textuelles

L’étiquette `<input>` précise un champ de saisie que l’utilisateur peut remplir à l’aide de données.

Des éléments d’`<input>` sont utilisés dans un élément `<form>` pour indiquer les contrôles de saisie qui permettent à l’utilisateur d’entrer des données.

Assurez vous d’utiliser un attribut `type` approprié pour toutes les saisies (p. ex., `email` pour une adresse courriel ou `number` pour une information numérique) afin de tirer profit des contrôles de saisie les plus nouveaux, comme la vérification de courriel, la sélection du nombre, et plus.

<div class="form-group">
    <label for="inputText1">Nom complét</label>
    <input type="text" class="form-control" id="inputText1">
</div>

<div class="form-group">
    <label for="inputEmail3">Adresse de courriel</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
</div>

<div class="form-group">
    <label for="inputNumber1"> Quantité </label>
    <input type="number" class="form-control" id="inputNumber1">
</div>

```html
<div class="form-group">
    <label for="inputText1">Nom complét</label>
    <input type="text" class="form-control" id="inputText1">
</div>

<div class="form-group">
    <label for="inputEmail3">Adresse de courriel</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
</div>

<div class="form-group">
    <label for="inputNumber1"> Quantité </label>
    <input type="number" class="form-control" id="inputNumber1">
</div>
```

## Zone de texte

L’étiquette `<textarea>` définit un contrôle de saisie de texte sur plusieurs lignes.

<div class="form-group">
    <label for="exampleFormControlTextarea1">Commentaires</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

```html
<div class="form-group">
    <label for="exampleFormControlTextarea1">Commentaires</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```

## Champ sélectionné

L’élément `<select>` est utilisé pour créer une liste déroulante.

Les étiquettes `<option>` dans l’élément `<select>` définissent les options proposées dans la liste.

<div class="form-group">
    <label for="carSelect">Voitures</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>

```html
<div class="form-group">
    <label for="carSelect">Autos</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>
```

## Microcopie

Le texte d’aide devrait être clairement associé au contrôle de forme auquel il est lié à l’aide de l’attribut `aria-describedby`. Cette démarche permettra de veiller à ce que les technologies d’assistance, comme les lecteurs d’écran, annoncent cette microcopie lorsque l’utilisateur porte son attention sur le contrôle ou qu’il le saisit.

Les microcopies en dessous des données saisies peuvent être stylisées à l’aide de `.form-text`. Cette classe comprend `display: block` et ajoute un espace à la marge supérieure pour faciliter l’espacement par rapport aux données saisies du haut. Le texte d’aide en ligne peut être mis en œuvre facilement à l’aide d’un élément de HTML en ligne quelconque et de classes d’utilitaire comme `.text-muted`.

  <div class="form-group">
    <label for="exampleInputNumber1">Numéro de téléphone</label>
    <input type="text" class="form-control" id="exampleInputNumber1" aria-describedby="numberExample1" placeholder="(613) 123-3456">
    <small id="numberExample1" class="form-text">Assuerer d'inclure votre indicatif téléphonique! </small>
  </div>


  ```html
  <div class="form-group">
    <label for="exampleInputNumber1">Numéro de téléphone</label>
    <input type="text" class="form-control" id="exampleInputNumber1" aria-describedby="numberExample1" placeholder="(613) 123-3456">
    <small id="numberExample1" class="form-text">Assuerer d'inclure votre indicatif téléphonique! </small>
  </div>

```
          
</doctabpanel>
      <doctabpanel type="design">
          

## Champs de texte

Les champs de texte sont conçus comme suit :

<label for="exampleInputEmail1">Courriel</label>
<input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="sierra@example.com">

**Normal** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

**Accent** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

Lorsqu’il y a une erreur dans un champ textuel, mettre le champ en surbrillance en rouge démontre un niveau significatif plus élevé qu’en bleu. Voir les erreurs et les confirmations [Erreurs et les validations](/component/errors-and-validation) pour de plus amples renseignements sur les erreurs de saisie.

Les champs de saisie textuelle peuvent également comprendre des éléments interactifs à la droite du champ. Les éléments interactifs seront toujours affichés à l’aide d’une icône, comme un œil pour montrer un mot de passe visible ou caché.

## Zone de texte

Les zones de texte possèdent les mêmes éléments de style que d’autres saisies de texte, mais sont plus hautes. Elles sont généralement utilisées pour des questions ouvertes, où on demande à l’utilisateur de fournir des descriptions ou des renseignements supplémentaires.


<div class="form-group">
    <label for="exampleFormControlTextarea2">Commentaires</label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
</div>

## Champ sélectionné

Les champs sélectionnés sont un menu déroulant d’options précises. Ils ont pour but de fournir aux utilisateurs un achèvement facile quand il n’y a que quelques options.

Les champs sélectionnés sont conçus comme suit :

**Normal** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15px par 27px par 15px par 12px. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.

<div class="mt-2">
    <label for="carSelect2">Voitures</label>
    <select id="carSelect2" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>
<br>

**Accent** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15 par 27 par 15 par 12. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.

## Texte d’espace réservé

Le style de police du texte d’espace réservé est le « Nunito Sans Regular », à 14 px, <badge style="background-color: #666666">#666666</badge>.

Pour obtenir de plus amples renseignements sur les styles de polices du texte d’espace réservé, veuillez consulter la section sur la [Typographie](/components/tpography).

## Microcopie

Le style de microcopie est comme suit :

10 px sous le champ de saisie. Le texte est affiché de la même façon que le texte d’espace réservé; Nunito Sans Regular à 14 px, <badge style="background-color: #666666">#666666</badge>

S’il y a plus d’une ligne, le texte retourne à ligne et a un interlignage sur 18 points.

  <div class="form-group">
    <label for="exampleInputNumber2">Numéro de téléphone</label>
    <input type="text" class="form-control" id="exampleInputNumber2" aria-describedby="numberExample2" placeholder="(613) 123-3456">
    <small id="numberExample2" class="form-text">Assuerer d'inclure votre indicatif téléphonique! </small>
  </div>

</doctabpanel>
    </documentationtabs>

