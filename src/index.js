import "./components/Button.js"
import "./components/Dropdown.js"

const template = document.createElement("template")

template.innerHTML = `
  <style>
    :host {
      font-family: sans-serif;
    }
  </style>

  <div>
    <h1>Web Components with Webpack Starter Kit</h1>
  </div>
`

class App extends HTMLElement {
  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: "open" })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define("my-app", App)
