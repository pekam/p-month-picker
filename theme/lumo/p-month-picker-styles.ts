import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import {css} from "lit-element";
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

registerStyles('p-month-picker', css`
  :host {
    box-sizing: border-box;
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  [part="toggle-button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }
  [part="toggle-button"]::before {
    display: block;
    font-family: "lumo-icons";
    content: var(--lumo-icons-calendar);
  }
  [part="toggle-button"]:hover {
    color: var(--lumo-body-text-color);
  }
`);

registerStyles('p-month-picker-calendar', css`
  :host {
    box-sizing: border-box;
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .yearButton {
    outline: none;
    border: none;
    background: none;
  }

  .yearButton::before {
    font-family: "lumo-icons";
    font-size: calc(var(--lumo-icon-size-m) * 1.25);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }

  .yearButton[disabled]::before {
    color: var(--lumo-disabled-color);
  }

  .yearButton:focus::before {
    color: var(--lumo-primary-color);
  }

  .prevYear::before {
    content: var(--lumo-icons-chevron-left);
  }

  .nextYear::before {
    content: var(--lumo-icons-chevron-right);
  }

  .month-button {
    border-radius: var(--lumo-border-radius-l);

    --_month-button-height: var(--lumo-size-m);
  }

  .month-button:focus {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  .month-button[selected] {
    background: var(--lumo-primary-color);
    color: var(--lumo-base-color);
    font-weight: 600;
  }

  .month-button[disabled] {
    color: var(--lumo-disabled-text-color);
  }
`);

registerStyles('p-month-picker-overlay', css`
  [part="content"] {
    padding: var(--lumo-space-s);
  }
`);
