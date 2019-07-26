import { buildCustomElementConstructor } from 'lwc';
import Electron from "utils/electron"
customElements.define('utils-electron', buildCustomElementConstructor(Electron));
