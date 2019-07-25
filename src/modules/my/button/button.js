import SldsElement from 'utils/sldsElement';
import { api } from 'lwc';

export default class Button extends SldsElement {
    @api message;

    getData() {
        // eslint-disable-next-line no-alert
        //alert(this.message);

        fetch (`http://localhost:5000/upper?msg=${this.message}`)
        .then (response => {return response.text ()})
        .then (text => {
            // eslint-disable-next-line no-alert
            alert(text);
        })
        .catch (error => {
            // eslint-disable-next-line no-alert
            alert(`Failed: ${error}`);
        })
    }
}
