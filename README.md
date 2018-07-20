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

To add documentation in the form of markdown files, you need to add the markdown file in the subfolder of your choice:  
```
src/docs/{yourLanguage}/{yourSection}/yourFile.md   
```
At the top of the file, you will need to add a small section that provides context. For example, at the top of my `src/docs/en/component/badges.md`...
```
---
path: "/component/badges"
---
```
Now the file should be processed by Gatsby and should appear at the path specified in the frontmatter.    

I am working on a dynamic naviguation element for the site. In the meantime, if you want to add a link to your documentation in the sidebar naviguation, you will need to go and add it manually in `src/component/sidenav.js`.
