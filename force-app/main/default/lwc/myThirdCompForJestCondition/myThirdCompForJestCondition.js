import { LightningElement } from 'lwc';

export default class MyThirdCompForJestCondition extends LightningElement {
  isVisible = false;

  changeHandler(event){
    this.isVisible = event.target.checked;
  }
}