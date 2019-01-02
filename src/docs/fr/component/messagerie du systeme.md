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

## Best Practices

*texte ici*

Les messages de notification devraient être simples et aussi courts que possible et devraient aussi utiliser des mots clés. Les messages longs peuvent être imprécis et peuvent avoir une incidence sur la taille et la lisibilité du message.

Exemple d’une notification claire : Votre photo de profil a été modifiée avec succès.

### When to use

**Les messages d’erreur** sont utilisées pour les pannes de système et les erreurs de l’utilisateur.Par exemple, « Votre mot de passe doit contenir au moins huit (8) caractères. »

**Les messages d’avertissement** sont utilisées pour les notifications d'erreurs futures potentielles. Par exemple « Verr. Maj. est activé ce qui pourrait faire en sorte que vous entriez votre mot de passe incorrectement. »

**Les messages d’information** servent à fournir des renseignements supplémentaires et des notes à l’utilisateur qu’elles peuvent trouver utiles selon le contexte. Par exemple, « Vous pouvez changer votre mot de passe dans les paramètres. »

**Les messages de succès** sont utilisées pour confirmer qu’une tâche a été achevée avec succès. Par exemple, « Votre mot de passe a été mis à jour avec succès. »

<documentationtabs remove="react">
    <doctabpanel type="html">
        

## Default Alerts
*texte ici*
    
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

## Custom Icon Alerts

*texte ici*

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

## Conveying meaning to assistive technologies

*texte ici*

## Dismissing

*texte ici*

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

## Default Alerts

*texte ici*

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

## Custom Icon Alerts

*texte ici*

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


