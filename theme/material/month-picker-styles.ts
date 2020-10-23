import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { componentStyles } from './month-picker-css';
import {calendarStyles} from "./month-picker-calendar-css";

registerStyles('month-picker', componentStyles);
registerStyles('month-picker-calendar', calendarStyles);
