import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD,EMAIL_FIELD];
export default class WireDemoUserDetails extends LightningElement {
    userId = Id;
    
    //@wire(adapter,{adapterConfig})
    //propertyorfunction
    userDetails;
    @wire(getRecord,{recordId:'$userId', fields})
    userDetailHandler({data,error}){
      if(data){
        this.userDetails = data.fields;
      }
      if(error){
        console.error(error);
      }
    }

    @wire(getRecord,{recordId:'$userId', fields})
    userDetailProperty;
}