import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {

  closeModal(){
   this.dispatchEvent(new CustomEvent('close'));
  }

  handleSlotFooterChange(){
   const footerElement = this.template.querySelector('.slds-modal__footer');
   if(footerElement){
     footerElement.classList.remove('slds-hide');
   }
  }

  handleSlotHeaderChange(){
   const footerElement = this.template.querySelector('.slds-modal__header');
   if(footerElement){
     footerElement.classList.remove('remove_header');
   }
  }
}