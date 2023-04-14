import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mifan-hello')
export class MiFanHello extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mifan-hello': MiFanHello;
  }
}
