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
  @property({type: Array}) shortMonthNames = [];
  @property({type: Number}) openedYear = 2020;

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
        <div class="yearButton prevYear" tabindex="0"
            @click=${() => this.openedYear--}
            @keydown=${e => clickOnKey(e, ' ', 'Enter')}
        ></div>
          ${this.openedYear}
        <div class="yearButton nextYear" tabindex="0"
            @click=${() => this.openedYear++}
            @keydown=${e => clickOnKey(e, ' ', 'Enter')}
        ></div>
      </div>

      <div class="month-grid">
        ${this.shortMonthNames
          .map((name, index) => (
            {
              content: name,
              value: formatValue({year: this.openedYear, month: index + 1})
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
