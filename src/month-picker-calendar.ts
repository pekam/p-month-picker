/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {html, css, customElement, property, query} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import './vaadin-positioned-overlay';
import {render} from "lit-html";

/**
 * @element month-picker-calendar
 */
@customElement('month-picker-calendar')
class MonthPickerCalendar extends VaadinElement {
  static get is() {
    return 'month-picker-calendar';
  }

  static get version() {
    return '0.1.0';
  }

  @property({type: Array}) monthNames = [];

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
    return html`${this.monthNames.map(month => html`<div>${month.substr(0, 3)}</div>`)}`;
  }

}

export { MonthPickerCalendar };

declare global {
  interface HTMLElementTagNameMap {
    'month-picker-calendar': MonthPickerCalendar;
  }
}
