/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {html, css, customElement, property} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import {clickOnKey, formatValue} from "./month-picker-util";

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

  @property({type: String}) value;
  @property({type: Array}) monthNames = [];
  @property({type: Number}) currentYear = 2020;

  static get styles() {
    return css`
      :host {
      }

      :host([hidden]) {
        display: none !important;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .month-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 16rem;
      }

      .month-button {
        text-align: center;
        cursor: default;
        outline: none;

        height: var(--_month-button-height);
        line-height: var(--_month-button-height);
      }
    `;
  }

  render() {
    return html`

      <div class="header">
        <div class="yearButton prevYear" @click=${() => this.currentYear--}></div>
          ${this.currentYear}
        <div class="yearButton nextYear" @click=${() => this.currentYear++}></div>
      </div>

      <div class="month-grid">
        ${this.monthNames
          .map((name, index) => (
            {
              content: name.substr(0, 3),
              value: formatValue(this.currentYear, index + 1)
            }))
          .map(({content, value}) => html`
            <div class="month-button"
              data-value=${value}
              ?selected=${this.value === value}
              @click=${() => this.dispatchEvent(new CustomEvent('month-clicked', {detail: value}))}
              @keydown=${e => clickOnKey(e, ' ', 'Enter')}
              tabindex="0">
                ${content}
            </div>`)}
      </div>`;
  }

}

export { MonthPickerCalendar };

declare global {
  interface HTMLElementTagNameMap {
    'month-picker-calendar': MonthPickerCalendar;
  }
}
