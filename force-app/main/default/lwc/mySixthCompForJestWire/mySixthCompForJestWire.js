import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class MySixthCompForJestWire extends LightningElement {
  @wire(getContactList)
  contacts;

  renderedCallback(){
    if(this.contacts && this.contacts.data){
      //console.log('contact list');
      //console.log(JSON.stringify(this.contacts.data));
    }
  }
}