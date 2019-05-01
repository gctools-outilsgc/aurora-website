---
path: "/overview/checklist"
subnav: "2/Community/Communauté/2"
lang: "en"
title: "Contibuting"
---

<helmet>
<title> Contributing - Aurora Design System </title>
</helmet>

# Contributing to Aurora

Adding a new component to the [Aurora design system](https://design.gccollab.ca/) requires several steps and pieces to be fully integrated into the system. Since Aurora provides comprehensive designs, code, accessibility guidelines and documentation for each component or pattern, we’ve created a checklist of what needs to be completed before adding to the system.

For more information on contributing to Aurora, please read our [README file](https://github.com/gctools-outilsgc/aurora-website/blob/master/README.md) on Github or [contact us](mailto:sierra.duffey@tbs-sct.gc.ca)! 

What’s required to add a new component to the Aurora design system: 

- Design the component (in Adobe Illustrator), and have a single .ai file.

- Add the component to the [Aurora UI kit](https://github.com/gctools-outilsgc/aurora-design-system/blob/master/design%20files/ui_kit.ai)

- Build the component

  - If the component is part of [Bootstrap](https://getbootstrap.com/), build the custom CSS class
  - If the component is custom, build the applicable CSS class and HTML
  - React component


- Add the component(s) to the appropriate repos / packages in a new branch.

    - [aurora-design-system repo](https://github.com/gctools-outilsgc/aurora-design-system)
    - [gctools-components repo](https://github.com/gctools-outilsgc/gctools-components)


- Create a Pull Request to add the component to the project.

- Write documentation and translate.

    - Design specifications and best practices
    - HTML documentation, including accessibility considerations
    - React documentation


- Add the documentation to the website in the [aurora-website repo](https://github.com/gctools-outilsgc/aurora-website) on a new branch.

- Create a Pull Request to add the documentation to the project. 