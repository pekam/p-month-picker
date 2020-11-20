import {OverlayElement} from "@vaadin/vaadin-overlay";
import {_PositionMixin} from "@vaadin/vaadin-overlay/src/vaadin-overlay-position-mixin";

/*
 * PositionMixin has not yet been released as part of <vaadin-overlay>.
 * Including it here enables aligning the overlay below the field.
 */
customElements.whenDefined('vaadin-overlay').then(() => {
  class PositionedOverlay extends _PositionMixin(OverlayElement) {
    static get is() {
      return 'vaadin-positioned-overlay';
    }

    constructor() {
      super();
      // Hack to make the overlay itself not focusable:
      this.addEventListener('opened-changed', () =>
        this.opened && (this.shadowRoot.querySelector('#overlay').tabIndex = -1));
    }
  }
  customElements.define(PositionedOverlay.is, PositionedOverlay);
});
