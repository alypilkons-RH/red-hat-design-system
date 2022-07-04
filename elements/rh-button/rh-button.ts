import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseButton } from '@patternfly/pfe-button/BaseButton.js';
import styles from './rh-button.css';

/**
 * Button
 * @slot - Place element content here
 */
@customElement('rh-button')
export class RhButton extends BaseButton {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseButton.styles, styles];

  override render() {
    return html`
      <span id="container">
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}
