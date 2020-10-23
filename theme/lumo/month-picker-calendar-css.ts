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

  .month-button {
    border-radius: var(--lumo-border-radius-l);

    --_month-button-height: var(--lumo-size-m);
  }

  .month-button[selected] {
    background: var(--lumo-primary-color);
    color: var(--lumo-base-color);
    font-weight: 600;
  }
`;
