# README

([Français](#système-de-conception-aurora))

## Aurora design system - https://design.gccollab.ca/

We created Aurora design system to standardize the visual language and user experience of the Digital Collaboration Division’s (GCTools) online applications and tools. 

Aurora was built by a multi-disciplinary team of developers, designers, UX researchers, writers and data scientists. Combining the expertise of all of these roles allowed us to create a design system with a wide range of elements. 

Work for Aurora was done entirely in the open. We wanted to keep the spirit of government, while providing the quality and fun seen in the private sector. 

Using Aurora is complementary to the Web Experience Toolkit (WET), Canada.ca Style Guide, the Federal Identity Policy (FiP) and WCAG 2.1.

Aurora is available for anyone who wants to use it!

### What is a design system?

A design system is a catalogue of everything that makes up your digital product including user interface elements, writing style, guiding principles, coding standards, visual design, etc. using reusable components for easy development.

### How to use

Every element in Aurora design system has a design component, code and documentation. By downloading our UI kit (for Adobe Illustrator) you have access to all of the components sketches in addition to the code provided on the site. 

We recommend that while building a new product you begin by following the system as closely as possible, then you can adapt certain elements (i.e. colours, language style, icons) to suit your own product or brand.

### Who can use this design system?

Aurora design system is open for anyone to use! It was originally created to help guide digital collaboration tools used within the Government of Canada, but the system can be adapted to create citizen-focused services or external digital products.

### How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md)

**Do not post any security issues on github!** Security vulnerabilities must be reported by creating a ticket with the Digital Collaboration Division [help desk](https://gccollab.ca/help/knowledgebase).

### License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [MIT licence](LICENSE).

## Install

Download this repo and move into it, then run:

```sh
yarn
```

To start your local dev env:

```sh
yarn run develop
```

## Deploy

To push your site to gh-pages:

```sh
yarn run deploy
```

## Adding Content

### Adding Documentation

To add documentation in the form of markdown files, you need to add the markdown files for **both languages** in the section of your choice:

```
src/docs/en/{yourSection}/yourEnglishFile.md
src/docs/fr/{yourSection}/yourFrenchFile.md
```

At the top of the file, you will need to add a small section that provides context. For example, at the top of my `src/docs/en/component/badges.md`...

```
---
path: "/component/badges"
subnav: "1/Standard/Standard/2"
lang: "en"
title: "Badges"
---
```

- The `path` should be the **same** for both English and French file.
- The `subnav` is the `order_of_the_subnav`/`subnav_english_name`/`subnav_french_name`/`order_in_the_subnav`. It should be the **same** in both files.
- The `lang` should be either `en` or `fr`. 
- The `title` will be added in the side navigation of the section. It should be in French in the French file.

Now the file should be processed by Gatsby and should appear at the `path` specified in both frontmatters.

The dynamic side navigation should show your new documentation section when you run the `yarn run develop` command. If it does not appear on the path, try deleting the `public` and `.cache` folder before running the `yarn run develop` command again.

When you see that your documentation has appeared in both French and English, you may commit your changes and push upstream. Run the `yarn run deploy` command to update the live site.

**If you do not interact with commands when working with a github project**, you can add your files to a new branch and it will be tested and merged. 

______________________

## Système de conception Aurora - https://design.gccollab.ca/

Nous avons créé le système de conception Aurora afin de normaliser le langage visuel et l’expérience-utilisateur des applications et des outils (OutilsGC) créés par la Division de la collaboration numérique. 

Le système Aurora a été créé par une équipe multidisciplinaire composée de concepteurs, de chercheurs EU, de rédacteurs et de scientifiques des données. En combinant l’expertise de tous ces rôles, nous en sommes arrivés à un système de conception doté d’une vaste gamme d’éléments. 

Le travail que nous avons effectué dans le cadre d’Aurora a été réalisé entièrement à partir d’un environnement ouvert. Nous tenions à respecter l’esprit du gouvernement, tout en y apportant la qualité et le plaisir que l’on retrouve dans le secteur privée. 

Le système Aurora est maintenant disponible pour quiconque souhaite l’utiliser! 

### Qu’est-ce qu’un système de conception?

Un système de conception, c’est un catalogue de tout ce qui constitue votre produit numérique, y compris les éléments de l’interface-utilisateur, le style de rédaction, les principes directeurs, les normes de codage, la conception visuelle, etc., tout en se servant de composantes réutilisables qui viennent en faciliter l’élaboration. 

### Comment s’en servir

Chaque élément du système de conception Aurora est doté d’une composante de conception, d’un code, de même que d’une documentation connexe. En téléchargeant notre trousse UI (pour Adobe Illustrator), vous aurez accès à toutes les conceptions de composantes, de même qu’au code qui est fourni à partir du site Web. 

Lorsque vous élaborez un nouveau produit, nous vous recommandons d’utiliser le système le plus fidèlement possible et d’adapter certains éléments de votre produit ou de votre marque par la suite (couleurs, style linguistique, icônes).


### Qui peut se servir de ce système de conception?

N’importe qui peut se servir du système de conception Aurora! Au départ, il a été conçu de façon à appuyer la conception d’outils de collaboration numériques au sein du gouvernement du Canada, mais ce système peut également être adapté de façon à créer des services axés sur les citoyens ou des produits numériques externes.

### Comment contribuer

Voir [CONTRIBUTING.md](CONTRIBUTING.md)

**Ne publiez aucun problème de sécurité sur github!** Les vulnérabilités de sécurité doivent être signalées en créant un billet avec le [Bureau d'aide](https://gccollab.ca/help/knowledgebase) de la Division de la collaboration numérique.

### Licence

Sauf indication contraire, le code source de ce projet est protégé par le droit d'auteur de la Couronne du gouvernement du Canada et distribué sous la [licence sélectionnée](LICENSE).
