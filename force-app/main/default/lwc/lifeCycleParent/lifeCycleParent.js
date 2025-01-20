import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

  name;
  isChildVisible = false;

  constructor(){
    super();
    console.log("parent constructor called");
  }

  connectedCallback() {
    console.log("parent connectedCallback called");
  }

  renderedCallback(){
    console.log("parent renderedCallback called");
  }


  changeHandler(event){
    this.name = event.target.value;
  }

  handleClick(){
    this.isChildVisible = !this.isChildVisible;
  }

  /*errorCallback(error, stack) {
    console.log(error.message);
    console.log(stack);
  }*/
}