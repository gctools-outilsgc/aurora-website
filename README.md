# Design-System-code

The site generator for the design system. You can see its current build at  
 <a href="https://gctools-outilsgc.github.io/design-system-code/"> https://gctools-outilsgc.github.io/design-system-code/ </a>

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
---
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
- The `path` should be the **same** for both english and french file.
- The `subnav` is the `order_of_the_subnav`/`subnav_english_name`/`subnav_french_name`/`order_in_the_subnav`. It should be the **same** in both files.
- The `lang` should be either `en` or `fr`. 
- The `title` will be added in the side naviguation of the section. It should be in french in the french file.

Now the file should be processed by Gatsby and should appear at the `path` specified in both frontmatters.  

The dynamic side naviguation should show your new documentation section when you run the `yarn run develop` command. If it does not appear on the path, try deleting the `public` and `.cache` folder before running the `yarn run develop` command again.

When you see that your documentation has appeared in both french and english, you may commit your changes and push upstream. Run the `yarn run deploy` command to update the live site.

**If you do not interact with commands when working with a github project**, you can add your files to a new branch and it will be tested and merged. 
