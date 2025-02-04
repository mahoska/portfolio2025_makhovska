import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRelationship extends NavigationMixin(LightningElement) {
  navigateToRelatedList(){
    this[NavigationMixin.Navigate]({
      type:'standard__recordRelationshipPage',
      attributes: {
        recordId: '001JX00000YkjbXYAR',
        objectApiName:'Account',
        relationshipApiName:'Contacts',
        actionName:'view'
      }
    })
  }
}