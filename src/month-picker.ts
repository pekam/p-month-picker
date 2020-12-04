/**
 * @license
 * This program is available under Apache License Version 2.0
 */
import {
  html,
  css,
  customElement,
  property,
  query,
  PropertyValues
} from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import './month-picker-overlay';
import {render} from "lit-html";
import './month-picker-calendar';
import {OverlayElement} from "@vaadin/vaadin-overlay/vaadin-overlay";
import {
  clickOnKey,
  yearMonthToValue,
  valueToYearMonth,
  YearMonth
} from "./month-picker-util";
import {TextFieldElement} from "@vaadin/vaadin-text-field/vaadin-text-field";
import { MonthPickerCalendar } from './month-picker-calendar';

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

  @property({type: String}) value = '';
  @property({type: Boolean}) opened = false;

  @property({type: String}) label = '';
  @property({type: String}) placeholder = '';
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) readonly = false;

  private monthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October", "November", "December"];
  private shortMonthNames = this.monthNames.map(m => m.substr(0, 3));

  @query('#textField') private textField: TextFieldElement;
  // Can't use @query for overlay, because it will be teleported to body
  private overlay: OverlayElement;
  private calendar: MonthPickerCalendar;

  private __boundInputClicked = this.__inputClicked.bind(this);
  private __boundInputValueChanged = this.__inputValueChanged.bind(this);
  private __boundOverlayOpenedChanged = this.__overlayOpenedChanged.bind(this);
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

  update(props: PropertyValues)  {
    super.update(props);
    this.overlay = this.overlay || this.shadowRoot.querySelector('#overlay');
    this.overlay && this.overlay.render();
    this.calendar = this.calendar || this.shadowRoot.querySelector('month-picker-calendar');
  }

  render() {
    return html`
      <vaadin-text-field
        id="textField"
        value=${this.formattedValue}
        @click=${this.__boundInputClicked}
        @keydown=${e => clickOnKey(e, ' ', 'ArrowDown')}
        @change=${this.__boundInputValueChanged}
        label=${this.label}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}>
          <div part="toggle-button" slot="suffix"></div>
      </vaadin-text-field>
      <month-picker-overlay
        id="overlay"
        .positionTarget=${this.textField}
        no-vertical-overlap
        .opened=${this.opened}
        @opened-changed=${this.__boundOverlayOpenedChanged}
        .renderer=${this.__boundRenderOverlay}>
      </month-picker-overlay>
    `;
  }

  /**
   * Override formatValue and parseValue to define how the current value is
   * presented in the field.
   */
  formatValue({year, month}: YearMonth) {
    return `${month}/${year}`;
  }

  /**
   * Override formatValue and parseValue to define how the current value is
   * presented in the field.
   */
  parseValue(inputValue: string): YearMonth | null {
    if (!inputValue.match(/^[0-9]+[/][0-9]+$/)) {
      return null;
    }
    const parts = inputValue.split('/');
    const month = parseInt(parts[0]);
    const year = parseInt(parts[1]);

    if (month < 1 || month > 12) {
      return null;
    }

    return {month,year};
  }

  get formattedValue() {
    return this.yearMonth
      ? this.formatValue(this.yearMonth)
      : '';
  }

  get yearMonth(): YearMonth | null {
    return valueToYearMonth(this.value);
  }

  private __inputClicked() {
    if (!this.disabled && !this.readonly) {
      this.opened = !this.opened;
    }
  }

  private __inputValueChanged() {
    const inputValue = this.textField.value;
    const yearMonth = this.parseValue(inputValue);
    if (yearMonth) {
      this.value = yearMonthToValue(yearMonth);
    } else {
      this.value = this.textField.value = '';
    }
  }

  private __overlayOpenedChanged(e: CustomEvent) {
    const opened = e.detail.value;
    this.opened = opened;
    if (opened) {
      this.calendar.openedYear = this.yearMonth
        ? this.yearMonth.year
        : new Date().getFullYear();
    }
  }

  private __renderOverlay(root: HTMLElement) {
    const content = html`
      <month-picker-calendar
        .value=${this.value}
        .shortMonthNames=${this.shortMonthNames}
        @month-clicked=${(e: CustomEvent) => this.value = (this.value === e.detail) ? '' : e.detail}
      ></month-picker-calendar>`
    render(content, root);
  }
}

export { MonthPicker };

declare global {
  interface HTMLElementTagNameMap {
    'month-picker': MonthPicker;
  }
}
