import { LightningElement, wire } from 'lwc';
import SAMPLMS from '@salesforce/messageChannel/SampleMessageChannel__c';
import {MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
  recieveMessage;
  subscription;

  @wire(MessageContext)
  context;

  connectedCallback() {
    this.subscribeMessage();
  }

  subscribeMessage(){
    //subscribe(MessageContext, messageChannel, listener, subscriberOptions)
    this.subscription = subscribe(this.context, SAMPLMS, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE});
  }

  handleMessage(message){
    this.recieveMessage = message.lmsData.value ? message.lmsData.value : "No message published!";
  }

  unsubscribeMessage(){
    unsubscribe(this.subscription);
    this.subscription = null;
  }
}