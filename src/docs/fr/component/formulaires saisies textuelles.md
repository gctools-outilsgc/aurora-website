---
path: "/component/text-inputs"
subnav: "4/Forms/Formulaires/4"
lang: "fr"
title: "Saisies textuelles"
---

<helmet>
<title> Saisies textuelles - Système de conception Aurora </title>
</helmet>

# Saisies textuelles

Les champs de saisie permettent aux utilisateurs de fournir de l’information en entrant du texte dans une page. L’information peut être entrée au moyen d’une variété de champs de saisie différents comme les champs de texte (zone de texte), les cases à cocher, les boutons radio et la saisie de données. Les champs de saisie apparaissent typiquement dans les formulaires et devraient clairement indiquer que l’utilisateur peut saisir de l’information à l’aide d’étiquettes, d’infobulles, d’espace réservé de texte et d’un style approprié.

## Microcopie
La microcopie est le texte dessous et le champ de saisie qui fournit des renseignements supplémentaires sur ce champ. Les microcopies devraient être des phrases brèves qui indiquent à l’utilisateur comment remplir le champ.

## Texte d’espace réservé

Le texte d’espace réservé est le texte qui apparaît directement dans le champ de saisie. Ce texte n’est pas censé être utilisé comme une étiquette, mais peut fournir des renseignements supplémentaires ou être une exemple pour l’utilisateur.

Le texte d’espace réservé vise à aider l’utilisateur à remplir avec plus d’exactitude le champ au lieu d’être l’indicateur principal du contenu du champ. Il peut être complémentaire à la microcopie, avec un texte d’espace réservé donnant un exemple et une microcopie fournissant des renseignements supplémentaires ou un contexte.

Dès que l’utilisateur commence à taper dans le champ, le texte d’espace réservé devrait disparaître.

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
            <label for="exampleInputEmail1">Adresse de courriel</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="entrer ladresse e-mail">
            <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre adresse e-mail avec quiconque.</small>
        </div>
    <form>'
    react='
    <Form>
       <FormGroup>
          <Label for="exampleEmail">Adresse de courriel</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Nous ne partagerons jamais votre adresse e-mail avec quiconque.</FormText>
        </FormGroup>
    </Form>
    ' />
</codeblock>

<documentationtabs remove="react">
      <doctabpanel type="html">
          
## Form Controls

*texte ici*

## Text Inputs

*texte ici*

<div class="form-group">
    <label for="inputEmail3">Adresse de courriel</label>
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1">
</div>

```html
<div class="form-group"> 
    <label for="inputEmail3">Adresse de courriel</label> 
    <input type="email" class="form-control" id="inputEmail3" aria-describedby="emailHelp1"> 
</div>
```

## Text Area 

*texte ici*

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

## Select Field

*texte ici*

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

*texte ici*
          

</doctabpanel>
      <doctabpanel type="design">
          

## Zone de texte

Le champ de texte sélectionné par l’utilisateur devrait être indiqué visuellement. Mettre en surbrillance la boîte de texte sélectionnée montre à l’utilisateur le champ qu'ils remplissent sans ajouter trop de poids visuel.

Lorsqu’il y a une erreur dans un champ textuel, mettre le champ en surbrillance en rouge démontre un niveau significatif plus élevé qu’en bleu. Voir les erreurs et les confirmations pour de plus amples renseignements sur les erreurs de saisie.

Les champs de saisie textuelle peuvent également comprendre des éléments interactifs à la droite du champ. Les éléments interactifs seront toujours affichés à l’aide d’une icône, comme un œil pour montrer un mot de passe visible ou caché.

Les champs de texte sont conçus comme suit :

<label for="exampleInputEmail1">Structure de l’étiquette</label>
<input type="email" class="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Entrer le courriel">
<small id="emailHelp" class="form-text text-muted">Structure du texte – pour donner des indices et des choses</small>

**Normal** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

**Accent** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. Il y a 10px de remplissage entre le champ et l’étiquette. Le champ de saisie a un remplissage de 15px par 12px.

<label for="exampleInputEmail2">Structure de l’étiquette</label>
<input type="email" class="form-control" id="exampleInputEmail2"
        aria-describedby="emailHelp"
        placeholder="Entrer le courriel">
<small id="emailHelp" class="form-text text-muted">Structure du texte – pour donner des indices et des choses</small>

## Text Area

*texte ici*

<div class="form-group">
    <label for="exampleFormControlTextarea1">Commentaires</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

## Champ sélectionné

Les champs sélectionnés sont un menu déroulant d’options précises. Ils ont pour but de fournir aux utilisateurs un achèvement facile quand il n’y a que quelques options.

Les champs sélectionnés sont conçus comme suit :

**Normal** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge>. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15px par 27px par 15px par 12px. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.

<div class="mt-2">
    <label for="carSelect">Voitures</label>
    <select id="carSelect" class="form-control">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
</div>
<br>

**Accent** : un rectangle ayant une hauteur de 42px et une bordure de 4px. Un trait d’une largeur de 1px avec la couleur <badge style="background-color: #269ABC;color:black;">#269ABC</badge>. Le contrôle du menu déroulant est aligné à droite, 27px à partir du bord de la saisie. La ligne au bord est de 1px de couleur <badge style="background-color: #CCCCCC;color:black;">#CCCCCC</badge> et s’étend jusqu’à 5px à partir du haut vers le bas de la saisie. De 15 par 27 par 15 par 12. L’icône de chevron est alignée avec le texte et est de 9px à partir du bord gauche et de 18px de haut en bas.

*Élément de champ sélectionné d’accent*

## Texte d’espace réservé

Le style de police du texte d’espace réservé est le « Nunito Sans Regular », à 14 px, <badge style="background-color: #666666">#666666</badge>.

Pour obtenir de plus amples renseignements sur les styles de polices du texte d’espace réservé, veuillez consulter la section sur la [_typographie_](typographie.md).

## Microcopie

Le style de microcopie est comme suit :
10 px sous le champ de saisie. Le texte est affiché de la même façon que le texte d’espace réservé; Nunito Sans Regular à 14 px, <badge style="background-color: #666666">#666666</badge>

S’il y a plus d’une ligne, le texte retourne à ligne et a un interlignage sur 18 points.

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sierra@example.com">
    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
  </div>
<form>

</doctabpanel>
    </documentationtabs>

