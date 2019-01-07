---
path: "/component/system-messaging"
subnav: "2/Standard/Standard/8"
lang: "fr"
title: "Messagerie du système"
---

<helmet>
    <title> Messagerie du système - Système de conception Aurora </title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/solid.css" integrity="sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/regular.css" integrity="sha384-aubIA90W7NxJ+Ly4QHAqo1JBSwQ0jejV75iHhj59KRwVjLVHjuhS3LkDAoa/ltO4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0" crossorigin="anonymous">
</helmet>

# Messagerie du système

Les notifications du système sont de courts messages qui apparaissent pour communiquer de l’information à l’utilisateur. Des notifications apparaissent comme des bannières en premier plan qui ont besoin d’être fermées ou qui se ferment après une période de temps. Il y a quatre niveaux de gravité qui peuvent être appliqués à la notification : erreur, avertissement, information et succès.

## Pratiques exemplaires

Les messages de notification devraient être simples et aussi courts que possible et devraient aussi utiliser des mots clés. Les messages longs peuvent être imprécis et peuvent avoir une incidence sur la taille et la lisibilité du message.

Exemple d’une notification claire : Votre photo de profil a été modifiée avec succès.

Les messages du système doivent se trouver au haut de la page ou à l’endroit le plus pratique et visible pour l’utilisateur.

### Quand utiliser

**Les messages d’erreur** sont utilisées pour les pannes de système et les erreurs de l’utilisateur.Par exemple, « Votre mot de passe doit contenir au moins huit (8) caractères. »

**Les messages d’avertissement** sont utilisées pour les notifications d'erreurs futures potentielles. Par exemple « Verr. Maj. est activé ce qui pourrait faire en sorte que vous entriez votre mot de passe incorrectement. »

**Les messages d’information** servent à fournir des renseignements supplémentaires et des notes à l’utilisateur qu’elles peuvent trouver utiles selon le contexte. Par exemple, « Vous pouvez changer votre mot de passe dans les paramètres. »

**Les messages de succès** sont utilisées pour confirmer qu’une tâche a été achevée avec succès. Par exemple, « Votre mot de passe a été mis à jour avec succès. »

<documentationtabs remove="react">
    <doctabpanel type="html">
        

## Alertes par défaut
Des alertes et un bouton optionnel de rejet sont disponibles pour toutes les longueurs de texte. Pour vous assurer d’avoir un style approprié, utilisez une des quatre classes contextuelles: `.alert-danger`, `.alert-warning`, `.alert-info`ou `.alert-success`

Utilisez la classe d’utilitaire `.alert-link` pour rapidement fournir des liens de couleurs correspondants à l’intérieur de toute alerte.

    
<Alert color="danger">
    C’est une alerte en cas de danger avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="warning">
    C’est une alerte d'avertissement avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="info">
    C’est une alerte d'information avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="success">
    C’est une alerte en cas de succès avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

```html
<div class="alert alert-danger" role="alert">
    C’est une alerte en cas de danger avec <a href="#example" class="alert-link">un exemple de lien</a>.
</div>

<div class="alert alert-warning" role="alert">
    C’est une alerte d'avertissement avec <a href="#example" class="alert-link">un exemple de lien</a>.
</div>

<div class="alert alert-info" role="alert">
    C’est une alerte d'information avec <a href="#example" class="alert-link">un exemple de lien</a>.
</div>

<div class="alert alert-success" role="alert">
    C’est une alerte en cas de succès avec <a href="#example" class="alert-link">un exemple de lien</a>.
</div>
```

## Icônes d’alertes personnalisées

En plus des alertes par défaut du bootstrap, Aurora utilise des icônes d’alertes personnalisées pour différents types de contextes de messages.

Utilisez la classe `.alert-icon` pour créer une icône d’alerte personnalisée. L’icône d’alerte personnalisée comprend une section .icon et une section `.message`. Votre icône peut être ajoutée à l’icône `<div>`.

<div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-check-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

```html
<div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-check-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>
```

## Donner un sens aux technologies d’assistance
L’utilisation de couleurs pour ajouter du sens fournit seulement une indication visuelle qui n’est pas transmise aux utilisateurs de technologies d’assistance, comme les lecteurs d’écran. Veillez à ce que les renseignements indiqués par la couleur se différencient de manière évidente du contenu (p. ex., le texte visible) ou qu’ils soient inclus de différentes manières, par l’ajout de texte caché avec la classe `.sr-only`, par exemple.

Ajouter `role="alert"` à votre alerte système pour fournir plus de contexte aux technologies d’assistance.

## Rejet

Aurora importe automatiquement l’application Bootstrap, de JavaScript, nécessaire pour une fonctionnalité interactive. Voici la manière d’utiliser le module d’extension d’alerte de JavaScript : 
* sur le bouton de rejet, ajoutez l’attribut `data-dismiss="alert"`, ce qui active la fonctionnalité de JavaScript et assurez-vous de l’accompagner de l’élément `<button>` pour avoir un comportement adéquat sur l’ensemble des appareils; 
* pour animer les alertes lorsqu’on les rejette, assurez-vous d’ajouter les classes `.fade` et `.show`.


<div class="alert alert-info alert-dismissible fade show" role="alert">
    C’est une alerte d'information avec <a href="#example" class="alert-link">un exemple de lien</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

 <div class="alert-icon alert-info alert-dismissible fade show" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fa fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

```html
<div class="alert alert-info alert-dismissible fade show" role="alert">
    C’est une alerte d'information avec <a href="#example" class="alert-link">un exemple de lien</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

 <div class="alert-icon alert-info alert-dismissible fade show" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fa fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" color="link">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

</doctabpanel>
    <doctabpanel type="design">

## Alertes par défaut

Les messages d’alerte par défaut sont fournis dans le bootstrap. Aurora utilise ces alertes ainsi que les alertes personnalisées (voir ci-dessous).

Les alertes par défaut sont présentées comme suit :
Rectangle de la largeur du contenant, avec un rayon de contour 4px. La hauteur dépend de la taille du texte du message avec un remplissage de 12px par 20px.

La boîte de message comprend un ombrage non décalé et un flou de 5px. L’ombrage est noir (<badge style="background-color: #000000"> #000000</badge>) avec 15 % d’opacité.

Le texte du message utilise le style de paragraphe Aurora : Nunito Sans à 16 points.

La couleur du message dépend du type d’alerte. Consultez la section [Couleur](/component/colour) pour de plus amples renseignements. Les messages par défaut utilisent une couleur en sourdine pour remplir la boîte de message.


<Alert color="danger">
    C’est une alerte en cas de danger avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="warning">
    C’est une alerte d'avertissement avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="info">
    C’est une alerte d'information avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

<Alert color="success">
    C’est une alerte en cas de succès avec <a href="#example" class="alert-link">un exemple de lien</a>.
</Alert>

## Icônes d’alertes personnalisées

Les icônes d’alertes personnalisées sont présentées comme suit :

La boîte possède la même largeur que le contenant. La hauteur du message dépend du texte. Le remplissage autour du texte est de 12px par 20px. La boîte de message a un rayon de contour de 4px.

La boîte de couleurs sur le côté du message possède une largeur de 60px et le rayon de contour dans le coin supérieur gauche et le coin inférieur gauche est de 4px. La couleur dépend du type d’alerte. Reportez-vous à la section Couleur pour de plus amples renseignements. Les alertes personnalisées utilisent une couleur brillante.

La boîte de message comprend un ombrage non décalé et un flou de 5px. L’ombrage est noir (<badge style="background-color: #000000"> #000000</badge>) avec 15 % d’opacité.
Le titre de la notification utilise le style H5 : Nunito Sans, à 18 points. Le texte du message utilise le style de paragraphe ordinaire : Nunito Sans à 16 points.

Aurora utilise Font Awesome pour les icônes de la boîte de messages, mais ces icônes sont personnalisables et servent simplement à des fins de conception. Consultez les icônes pour de plus amples renseignements. Pour les alertes personnalisées, la couleur la plus brillante est utilisée pour la boîte d’icône; le reste de la boîte de message est blanc (<badge style="background-color: #FFFFFF; color:black;"> #FFFFFF</badge>)

<div class="alert-icon alert-danger" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="far fa-times-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-warning" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-exclamation-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-info" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>

 <div class="alert-icon alert-success" role="alert">
  <div class="icon" aria-hidden="true">
    <i class="fas fa-info-circle" style="font-size:40px"></i>
  </div>
  <div class="message">
    <h3>Titre du message</h3>
    <p>Message</p>
  </div>
</div>
      
</doctabpanel>
    </documentationtabs>


