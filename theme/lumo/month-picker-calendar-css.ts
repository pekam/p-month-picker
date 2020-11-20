import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

export const calendarStyles = css`
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
  }

  .yearButton::before {
    font-family: "lumo-icons";
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
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
`;
