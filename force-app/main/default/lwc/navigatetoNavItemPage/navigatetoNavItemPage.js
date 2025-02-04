import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigatetoNavItemPage extends NavigationMixin(LightningElement) {

  navigateToTab(){
    this[NavigationMixin.Navigate]({
      type:'standard__navItemPage',
      attributes:{
        apiName:'Memory_Game_in_LWC'
      }
    })
  }
}