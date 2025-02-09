import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
  isOpen = false;

  showModalHandler(){
    this.isOpen = true;
  }

  closeHandler(){
    this.isOpen = false;
  }
}