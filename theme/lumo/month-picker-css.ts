import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

export const componentStyles = css`
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
`;
