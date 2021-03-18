<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-1.png" data-background-size="cover" -->

# Esri's Design System

#### Build Compelling Web Apps Faster Using the New Web Component Library

## Matt Driscoll – [@driskull](https://twitter.com/driskull)

## JC Franco – [@arfncode](https://twitter.com/arfncode)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Agenda

- Introduction
- Benefits
- Calcite tour
- Getting started
- Create demo apps
- Custom theming
- Examples in the wild

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Introduction

---

## Calcite - Esri's design system

- Visual language
  - Color
  - Spacing
  - Typography
  - Patterns
  - Principles
  - etc...
- Closes the gap between designers and UI engineers

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-2.png" data-background-size="cover"  -->

## Calcite components

- Web Components for Esri's Calcite Design System
  - New developer offering (developer subscription)
  - Provides a library of patterns
  - Ready-to-use, reusable
  - Helps developers easily build consistent Esri-branded apps
  - 50+ web components

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Benefits

Why use Calcite components?

---

## Consistency

- Consistent UX
  - Esri branded
  - Identity
  - Principles
  - Best practices
  - Conventions
- Clear Direction For Designers And Developers

---

## Accessibility

- Follows [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) rules
  - Semantics
  - Keyboard access
  - Color contrast
  - Text alternatives
- Continuous Integration (CI) aXe API

---

## Efficiency

- Reduced Effort & cost
  - Ease Esri apps follow agreed upon designs workflows
  - Reduce cost of design updates
  - DRY (Don't repeat yourself)
- Speed up development timelines

---

## Modern & Future proof

- Web components
  - Future proof (Native web technology)
  - Encapsulated (Shadow DOM)
  - Familiar (HTML)
  - Supports multiple frameworks (Framework agnostic)

---

## Browser Support

| IE / Edge  | Firefox         | Chrome          | Safari          |
| ---------- | --------------- | --------------- | --------------- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Calcite Tour

---

## Calcite components

- Dependencies
  - Calcite UI Icons
  - Calcite Colors

---

## Calcite icons

- todo

---

## Calcite colors

- todo

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Getting Started

---

## Web components

- Web standard
- APIs
- Tooling: [Stencil](https://stenciljs.com/)

---

## Web Components (what?)

- Built on web standards
- Supported by modern browsers

---

## Web Components (how?)

- Custom elements
  - Allow you to create HTML elements that the browser can work with
  - Lifecycle
    - `constructor`
    - `connectedCallback`
    - `disconnectedCallback`
    - `adoptedCallback`
    - `attributeChangedCallback`
- Shadow DOM
  - `<slot>`
- HTML templates

---

## Web Components (why?)

- Modularity
- Encapsulation
- Reusability
- Framework-agnostic\* ([most frameworks anyways 😅](https://custom-elements-everywhere.com/))

---

## Get the components

- [NPM](https://www.npmjs.com/package/@esri/calcite-components) / [Yarn](https://yarnpkg.com/package/@esri/calcite-components)
- [CDN](https://js.arcgis.com/calcite-components/)

---

## Plug & Play

- Use as native HTML elements

```html
<div class="example">
  <h4>native</h4>
  <label>
    Name (4 to 8 characters):
    <input
      type="text"
      minlength="4"
      maxlength="8"
      placeholder="John Doe"
      required
    />
  </label>
</div>

<div class="example">
  <h4>calcite</h4>
  <calcite-label layout="inline">
    Name (4 to 8 characters):
    <calcite-input
      min-length="4"
      max-length="8"
      placeholder="John Doe"
      required
    ></calcite-input>
  </calcite-label>
</div>
```

[Demo](https://codepen.io/jcfranco-the-scripter/pen/BaQeOzr?editors=1000)

---

## Configuring components

- Slots
- Properties
- Attributes

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<img src="./img/tip-no-thumbnail.png" height="200px">

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  <img
    slot="thumbnail"
    src="https://i.kym-cdn.com/photos/images/original/000/082/456/Okay.png"
    alt="This is an image of OK guy."
  />
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<img src="./img/tip-with-thumbnail.png" height="200px">

---

## Themes

- `theme="dark"`

---

## RTL

- Right-to-left support
- `dir="rtl"`

---

## Internationalization

Component text is customizable via `intl` attributes/properties

<img src="./img/modal-full.png" height="200px">

---

## Internationalization

Component text is customizable via `intl` attributes/properties

```html
<calcite-modal ...> ... </calcite-modal>
```

<img src="./img/modal-en.png" height="200px">

---

## Internationalization

Component text is customizable via `intl` attributes/properties

```html
<calcite-modal ... intl-close="Cerrar"> ... </calcite-modal>
```

<img src="./img/modal-es.png" height="200px">

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Demo: Getting started

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Create Esri branded apps

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Demo: Form

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Demo: Web mapping appplication

[![embedded-map-demo](./img/embedded-map.png)](../demos/embedded-map?webmapId=6c1f105834964553bddd0e7e31439d11)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Themable

- Style props for easy consistent styling

```html
<calcite-button appearance="outline" color="red" scale="l" icon-end="play" round
  >press play</calcite-button
>
```

[Demo](https://codepen.io/jcfranco-the-scripter/pen/OJbYopZ?editors=1000)

- CSS variables are available as well

[Demo](https://esri.github.io/calcite-components/?path=/story/overview-custom-theme--interactive-example)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Examples in the wild

---

## Map Viewer

[<img src="./img/map-viewer-beta.png" height="400px">](https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/try-out-the-new-map-viewer-beta/)

---

## What's Next

- Design system and components evolution ongoing
  - Improved documentation
  - More examples

---

## Summary

- Introduced Calcite components & documentation
- Benefits
- Getting started
- Demo apps
- Theming
- Examples

---

## Calcite Sessions

- Esri's Design System: Build Beautiful, Consistent Web Apps Faster
- Esri's Design System: Designing Applications Faster with UI Kits and Components

---

## Additional Resources

- https://developer.mozilla.org/en-US/docs/Web/Web_Components
- https://github.com/Esri/calcite-components/
- https://stenciljs.com/

---

# Questions? 🤔

> Where can I find the slides/source?

[bit.ly/componentsds21](https://bit.ly/componentsds21)

> Where can I submit a question?

[bit.ly/askjsapi](http://bit.ly/askjsapi)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png" data-background-size="cover" -->

<img src="../node_modules/esri-reveal.js-templates/img/esri-science-logo-white.png" />

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png" data-background-size="cover" -->

Please provide your feedback for this session by clicking on the session survey link directly below the video

<!-- .element: style="margin: 0 20%;" -->
