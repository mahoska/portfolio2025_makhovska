import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class LightningAlertDemo extends LightningElement {

  alertHandler(event){ 
    const {name} = event.target
    //window.alert("Hello") // earlier we were using this
    LightningAlert.open({
      message:"This is the alert message",
      variant:"headerless",
      label:`I am ${name} Alert Header`,
      theme:name // success ->green, warning -> orange, error --> red, info -->grey
    }).then(result=>{ 
      let x = 2
      let y = 3
      this.add(x,y)
    }) 
  }    

  add(a,b){
    console.log(a+b)
  }

  /*
    async alertHandler(event){ 
    const {name} = event.target
    //window.alert("Hello") // earlier we were using this
    await LightningAlert.open({
      message:"This is the alert message",
      variant:"headerless",
      label:`I am ${name} Alert Header`,
      theme:name // success ->green, warning -> orange, error --> red, info -->grey
    }) 
      let x = 2
      let y = 3
      this.add(x,y)
  } 
    */
}