import { LightningElement } from "lwc";

export default class SldsElement extends LightningElement {
    constructor () {
        super ();
        let _sldsPath = '../SLDS/styles';
        _sldsPath += '/salesforce-lightning-design-system.css';
        const styles = document.createElement ('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild (styles);

    }
}