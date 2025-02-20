import { LightningElement, api } from 'lwc';
import CAR_PLACEHOLDER from '@salesforce/resourceUrl/placeholder';
export default class Placeholder extends LightningElement {
  @api message;
  placeholderURL = CAR_PLACEHOLDER;
}