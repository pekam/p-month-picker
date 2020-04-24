import { css } from 'lit-element';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';

export const componentStyles = css`
  :host {
    box-sizing: border-box;
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
