/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {html, css, customElement, property, query} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import './vaadin-positioned-overlay';
import {render} from "lit-html";
import './month-picker-calendar';

/**
 * `<month-picker>` is a Web Component.
 *
 * @element month-picker
 */
@customElement('month-picker')
class MonthPicker extends VaadinElement {
  static get is() {
    return 'month-picker';
  }

  static get version() {
    return '0.1.0';
  }

  @property({type: String}) value = '2020-01';
  @property({type: Boolean}) opened = false;

  @property({type: Array}) monthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October", "November", "December"];

  @query('#textField') textField: HTMLElement;

  private __boundInputClicked = this.__inputClicked.bind(this);
  private __boundInputValueChanged = this.__inputValueChanged.bind(this);
  private __boundRenderOverlay = this.__renderOverlay.bind(this);

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    `;
  }

  render() {
    return html`
      <vaadin-text-field
        id="textField"
        value=${this.value}
        @click=${this.__boundInputClicked}
        @value-changed=${this.__boundInputValueChanged}>
      </vaadin-text-field>
      <vaadin-positioned-overlay
        .positionTarget=${this.textField}
        no-vertical-overlap
        .opened=${this.opened}
        @opened-changed=${(e: CustomEvent) => this.opened = e.detail.value}
        .renderer=${this.__boundRenderOverlay}>
      </vaadin-positioned-overlay>
    `;
  }

  private __inputClicked(e: MouseEvent) {
    this.opened = true;
  }

  private __inputValueChanged(e: CustomEvent) {
    this.value = e.detail.value;
  }

  private __renderOverlay(root: HTMLElement) {
    const content = html`
      <month-picker-calendar .monthNames=${this.monthNames}></month-picker-calendar>`
    render(content, root);
  }
}

export { MonthPicker };

declare global {
  interface HTMLElementTagNameMap {
    'month-picker': MonthPicker;
  }
}
