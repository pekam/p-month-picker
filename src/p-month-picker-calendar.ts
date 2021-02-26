/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {html, css, customElement, property} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import {clickOnKey, isInvalid, yearMonthToValue} from "./p-month-picker-util";

/**
 * @element p-month-picker-calendar
 */
@customElement('p-month-picker-calendar')
class MonthPickerCalendar extends VaadinElement {
  static get is() {
    return 'p-month-picker-calendar';
  }

  static get version() {
    return '0.1.0';
  }

  @property({type: String}) value;
  @property({type: Array}) shortMonthNames = [];
  @property({type: Number}) openedYear = 2020;
  @property({type: String}) min;
  @property({type: String}) max;

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

      .month-button[disabled] {
        pointer-events: none;
      }
    `;
  }

  render() {
    return html`

      <div class="header">
        <button class="yearButton prevYear"
            @click=${() => this.openedYear--}
            @keydown=${e => clickOnKey(e, ' ', 'Enter')}
        ></button>
          ${this.openedYear}
        <button class="yearButton nextYear"
            @click=${() => this.openedYear++}
            @keydown=${e => clickOnKey(e, ' ', 'Enter')}
        ></button>
      </div>

      <div class="month-grid">
        ${this.shortMonthNames
          .map((name, index) => (
            {
              content: name,
              value: yearMonthToValue({year: this.openedYear, month: index + 1})
            }))
          .map((props) => ({
              ...props,
              disabled: isInvalid(props.value, this.min, this.max)
            }))
          .map(({content, value, disabled}) => html`
            <div class="month-button"
              data-value=${value}
              ?selected=${this.value === value}
              @click=${() => disabled || this.dispatchEvent(new CustomEvent('month-clicked', {detail: value}))}
              @keydown=${e => clickOnKey(e, ' ', 'Enter')}
              ?disabled=${disabled}
              tabindex=${disabled ? "-1" : "0"}>
                ${content}
            </div>`)}
      </div>`;
  }

}

export { MonthPickerCalendar };

declare global {
  interface HTMLElementTagNameMap {
    'p-month-picker-calendar': MonthPickerCalendar;
  }
}
