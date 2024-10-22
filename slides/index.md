<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-1.png" data-background-size="cover" -->

# Calcite - Esri's Design System

#### Build Compelling Web Apps Faster Using the New Web Component Library

<h2 style="display: flex; gap: 14px; justify-content: center;"><calcite-avatar scale="l" full-name="Matt Driscoll" thumbnail="./img/matt.jpeg"></calcite-avatar> Matt Driscoll – <a href="https://twitter.com/driskull" target="_blank">@driskull</a></h2>

<h2 style="display: flex; gap: 14px; justify-content: center;"><calcite-avatar scale="l" full-name="JC Franco" thumbnail="./img/jc.jpg"></calcite-avatar> JC Franco – <a href="https://twitter.com/arfncode" target="_blank">@arfncode</a></h2>

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Agenda

- Introduction
- Benefits
- Building blocks
- Getting started
- Demo apps
- Q&A

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Introduction

Getting to know Calcite components

---

## Calcite - Esri's design system

- Visual language for products
  - Design guidelines
    - Color, Spacing, Typography...
  - Graphic resources (Icons, symbols, Sketch UI Kit)
  - Interactive documentation
    - Patterns & best practices
  - Reusable components
- Closes the gap between designers and UI engineers
- Releasing later this month

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-2.png" data-background-size="cover"  -->

## Calcite components

- Web Components for Calcite Design System
  - 50+ web components
    - Ready to use
    - Reusable
    - Provides a library of patterns
  - Internal & external use
    - [Developer subscription](https://developers.arcgis.com/pricing/build-arcgis-solutions/)
  - Easily build beautiful consistent apps

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Benefits

Why use Calcite components?

---

## Consistency <calcite-icon icon="thumbs-up"></calcite-icon>

- Consistent UX
  - Esri identity (look & feel)
  - Best practices
  - Conventions
- Clear direction for designers & developers

---

## Efficiency <calcite-icon icon="thumbs-up"></calcite-icon>

- Reduced effort & cost
  - Apps follow agreed upon designs workflows
  - Reduce cost of design updates
  - Reusable (Stop reinventing the wheel)
- Speed up development timelines

---

## Accessibility <calcite-icon icon="thumbs-up"></calcite-icon>

- Follows [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (W3 a11y guidelines)
  - Semantics
  - Keyboard access
  - Color contrast
  - Text alternatives
- Continuous Integration testing using [deque axe API](https://www.deque.com/)

---

## Standards-based <calcite-icon icon="thumbs-up"></calcite-icon>

- Web components
  - W3C specification (future-proof)
  - Encapsulation (Shadow DOM)
  - Familiarity (HTML)
  - Framework agnostic (Can be used in any framework)

---

## Modern browser Support <calcite-icon icon="thumbs-up"></calcite-icon>

<table>
  <thead>
    <tr>
      <th><img src="./img/chrome.svg" alt="Google Chrome" width="80px" /><h4>Chrome</h4></th>
      <th><img src="./img/firefox.svg" alt="Mozilla Firefox" width="80px" /><h4>Firefox</h4></th>
      <th><img src="./img/safari.svg" alt="Safari" width="80px" /><h4>Safari</h4></th>
      <th><img src="./img/edge.svg" alt="Microsoft Edge" width="80px" /><h4>Edge</h4></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Last 2 versions ✔</td>
    </tr>
  </tbody>
</table>

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Building blocks

Dissecting Calcite components

---

## Building Blocks

Foundations of Calcite components

- [Calcite Colors](https://www.npmjs.com/package/@esri/calcite-colors)
  - Esri's official color palette
  - Light/Dark theme
- [Calcite UI icons](https://www.npmjs.com/package/@esri/calcite-ui-icons)
  - 700+ UI SVG icons
- Calcite Styles (Coming soon...)
  - Sizing, Spacing, Color, Typography, Shadows...
  - [tailwindcss](https://tailwindcss.com/) - CSS framework
  - CSS custom properties (variables)
    - `var(--calcite-ui-background)`

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Demo: Building blocks

<calcite-notice active color="yellow" icon="exclamation-mark-triangle" scale="m" width="half">
    <div slot="notice-title">Unreleased documentation</div>
</calcite-notice>

- [DEMO: Icon Library](http://localhost:8000/#icon-library)
- [DEMO: Colors](http://localhost:8000/foundations/colors/)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Getting Started

Using Calcite components for your projects

---

## Web Components (what?)

- Suite of different technologies (web standards)
- Allows you to create reusable custom elements
  - Functionality encapsulated
  - Utilize them in your web apps
- Supported by modern browsers

---

## Web Components (how?)

- Custom elements
  - Browser-compatible elements
  - Use native APIs
  - DOM element lifecycle
- Shadow DOM
  - Encapsulates component HTML & CSS
  - `<slot>` for distributing content

---

## Plug & Play

Use as native HTML elements

<div class="r-stack">

<div class="r-stretch">

```html
<label>
  Name (4 to 8 characters):
  <input
    minlength="4"
    maxlength="8"
    placeholder="John Doe"
    required />
</label>
```

  <label>
    Name (4 to 8 characters):
    <input
      minlength="4"
      maxlength="8"
      placeholder="John Doe"
      required
    />
  </label>
</div>

<!-- .element: class="fragment fade-out" data-fragment-index="0" -->

<div class="r-stretch">

```html
<calcite-label layout="inline">
  Name (4 to 8 characters):
  <calcite-input
    min-length="4"
    max-length="8"
    placeholder="John Doe"
    required
  ></calcite-input>
</calcite-label>
```

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

<!-- .element: class="fragment" data-fragment-index="0" -->
</div>

---

## Configuring components

- Slots
- Properties/Attributes

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<div style="display:flex; height: 200px; align-items: center; justify-content: center;">
  <calcite-tip heading="My Tip">
    Okay Guy is a sullen-looking rage comic character...
  </calcite-tip>
</div>

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  <img
    slot="thumbnail"
    src="https://i.kym-cdn.com/photos/images/original/000/082/456/Okay.png"
    alt="This is an image of OK guy."
    height="100px"
  />
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<div style="display:flex; height: 350px; align-items: center; justify-content: center;">
  <calcite-tip heading="My Tip">
    <img
      slot="thumbnail"
      src="https://i.kym-cdn.com/photos/images/original/000/082/456/Okay.png"
      alt="This is an image of OK guy."
      height="200px"
    />
    Okay Guy is a sullen-looking rage comic character...
  </calcite-tip>
</div>

---

## Properties/Attributes

### Themes

- `theme="light"` (default)
- `theme="dark"`

<div style="display: flex; width: 50%; margin: 40px auto; gap: 40px;">
  <calcite-select label="light-select" theme="light" width="half">
    <calcite-option>one</calcite-option>
    <calcite-option>two</calcite-option>
    <calcite-option>three</calcite-option>
  </calcite-select>
  <calcite-select label="dark-select" theme="dark" width="half">
    <calcite-option>one</calcite-option>
    <calcite-option>two</calcite-option>
    <calcite-option>three</calcite-option>
  </calcite-select>
</div>

---

## Properties/Attributes

### Right-to-left (RTL) support

- `dir="rtl"`

<div style="display: flex; width: 50%; margin: 40px auto; gap: 40px;">
  <calcite-select label="light-select" width="half">
    <calcite-option>one</calcite-option>
    <calcite-option>two</calcite-option>
    <calcite-option>three</calcite-option>
  </calcite-select>
  <calcite-select label="dark-select" dir="rtl" width="half">
    <calcite-option>one</calcite-option>
    <calcite-option>two</calcite-option>
    <calcite-option>three</calcite-option>
  </calcite-select>
</div>

---

## Properties/Attributes

### Internationalization

Component text is customizable via `intl` attributes/properties

<img src="./img/modal-full.png" height="200px">

---

## Properties/Attributes

### Internationalization

Component text is customizable via `intl` attributes/properties

```html
<calcite-modal ...> ... </calcite-modal>
```

<img src="./img/modal-en.png" height="200px">

---

## Properties/Attributes

### Internationalization

Component text is customizable via `intl` attributes/properties

```html
<calcite-modal ... intl-close="Cerrar"> ... </calcite-modal>
```

<img src="./img/modal-es.png" height="200px">

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Theming

Customizing Calcite's appearance

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Themeable

- Style props for easy consistent styling

```html
<calcite-button
  appearance="outline"
  color="gray"
  scale="l"
  icon-end="play"
  round
>
  press play
</calcite-button>
```

<calcite-button appearance="outline" color="gray" scale="l" icon-end="play" round>
  press play
</calcite-button>

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Themeable

- [CSS custom properties (variables)](https://esri.github.io/calcite-components/?path=/story/theming-custom-theme--interactive) for color are available too

```html
<calcite-loader active
                style="--calcite-ui-brand: green;
                       --calcite-ui-brand-press: yellow;
                       --calcite-ui-brand-hover: red;"
></calcite-loader>
```

<calcite-loader active style="--calcite-ui-brand: green; --calcite-ui-brand-press: yellow; --calcite-ui-brand-hover
: red;"></calcite-loader>

---

## Get the components

- [NPM](https://www.npmjs.com/package/@esri/calcite-components) / [Yarn](https://yarnpkg.com/package/@esri/calcite-components)
- CDN

```html
<script
  type="module"
  src="<CDN URL or NPM path>/calcite.esm.js"
></script>

<link
  rel="stylesheet"
  type="text/css"
  href="<CDN URL or NPM path>/calcite.css"
/>
```

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Demo: Getting started

[![Getting started demo](./img/getting-started.png)](http://localhost:8000/getting-started-developers/)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Create Esri integrated apps

Building example applications

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Demo: Calcite Components Form

[![form components demo](./img/calcite-form.png)](https://codepen.io/driskull/pen/gOgPvaN?editors=1000)

- [DEMO: Calcite Form](https://codepen.io/driskull/pen/gOgPvaN?editors=1000)
- [DEMO: Notice component](http://localhost:8000/components/notice/)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

## Demo: Web mapping application

[![embedded-map-demo](./img/embedded-map.png)](https://codepen.io/jcfranco/pen/qBRmWmW?editors=1010)

<!-- .element style="margin: 0 auto; height: 40%; width: 40%" -->

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover"  -->

# Examples in the wild

Apps out there using Calcite components

<style>
  .grid-container {
    margin: auto 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . .";
  }
  .grid-container img {
    place-self: center;
    height: 150px;
  }
</style>
<div class="grid-container">
  <img src="./img/calcite-example-1.png" />
  <img src="./img/calcite-example-2.png" />
  <img src="./img/calcite-example-3.png" />
  <img src="./img/calcite-example-4.png" />
  <img src="./img/calcite-example-5.png" />
  <img src="./img/calcite-example-6.png" />
  <img src="./img/calcite-example-7.png" />
  <img src="./img/calcite-example-8.png" />
  <img src="./img/calcite-example-9.png" />
</div>

---

## Recap

- Introduction
- Benefits
- Building blocks
- Getting started
- Demo apps

---

## Calcite Sessions

- [Build Beautiful, Consistent Web Apps Faster](https://www.esri.com/en-us/about/events/devsummit/agenda/agenda/detail?q=design+system&date=2021-04-06)
  - Julie Powell, Julio Ochoa
- [Designing Applications Faster with UI Kits and Components](https://www.esri.com/en-us/about/events/devsummit/agenda/agenda/detail?q=design+system&date=2021-04-08)
  - Adam Tirella, Bryan Stifle

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png" data-background-size="cover" -->

Please provide your feedback for this session by clicking on the session survey link directly below the video

<!-- .element: style="margin: 0 20%;" -->

---

# Questions? 🤔

> Where can I find the slides/source?

[bit.ly/componentsds21](https://bit.ly/componentsds21)

> Where can I submit a question?

[bit.ly/askcalcite](https://bit.ly/askcalcite)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png" data-background-size="cover" -->

<img src="../node_modules/esri-reveal.js-templates/img/esri-science-logo-white.png" />
