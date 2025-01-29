import { LightningElement, wire } from 'lwc';
import SAMPLMS from '@salesforce/messageChannel/SampleMessageChannel__c';
import {MessageContext, publish} from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
  inputValue;

  @wire(MessageContext)
  context;

  inputHandler(event){
    this.inputValue = event.target.value;
  }

  publishMessage(){
    let message = {
      lmsData:{
        value : this.inputValue
      }
    }
    console.log()
    //publish(MessageContext, messageChannel, message)
    publish(this.context, SAMPLMS, message);
  }
}