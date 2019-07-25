import SldsElement from "utils/sldsElement";
import {api} from "lwc";

export default class Button extends SldsElement {
    @api message;

    getData () {
        // eslint-disable-next-line no-alert
        alert (this.message);
    }
}