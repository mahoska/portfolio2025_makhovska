import { LightningElement } from 'lwc';
import signintemplate from './signin.html';
import signuptemplate from './signup.html';
import defaulttemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {

  selectedButton = '';
  render(){
    return this.selectedButton === 'Signin' ?  signintemplate : 
      this.selectedButton === 'Signup' ?  signuptemplate : defaulttemplate;
  }

  handleClick(event){
    this.selectedButton = event.target.label;
  }

  submitHandler(event){
    console.log(`${event.target.label} successfully!`);
  }
  

}