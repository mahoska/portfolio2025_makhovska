import { LightningElement, api } from 'lwc';

export default class SpreadChild extends LightningElement {
    @api userName
    @api age
    @api className
}