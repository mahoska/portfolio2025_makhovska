import { LightningElement } from 'lwc';

export default class MySecondComponentForJest extends LightningElement {
  greeting = 'World';

  handleChange(event){
    this.greeting = event.target.value;
  }
}