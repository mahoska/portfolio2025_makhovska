import { LightningElement } from 'lwc';

export default class SpreadParent extends LightningElement {
    childProps={
        userName:"Salesforcetroop",
        age:23,
        city:"Melbourne",
        className:'childClass',
        onclick:this.updateAge.bind(this)
    }

    updateAge(){
        this.childProps={...this.childProps, age:this.childProps.age+1}
    }
}