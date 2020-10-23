/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {html, css, customElement, property} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';

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
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 16rem;
      }

      :host([hidden]) {
        display: none !important;
      }

      .month-button {
        text-align: center;
        cursor: default;

        height: var(--_month-button-height);
        line-height: var(--_month-button-height);
      }
    `;
  }

  render() {
    return html`${this.monthNames.map(month => html`
        <div class="month-button" tabindex="0">
          ${month.substr(0, 3)}
        </div>`)}`;
  }

}

export { MonthPickerCalendar };

declare global {
  interface HTMLElementTagNameMap {
    'month-picker-calendar': MonthPickerCalendar;
  }
}
