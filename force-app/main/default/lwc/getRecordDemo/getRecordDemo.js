import { LightningElement, wire, api } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class GetRecordDemo extends LightningElement {
  name;
  owner;
  annualRenevue;

  @api recordId;
  //@wire(getRecord,{recordId:'$recordId', layoutTypes:['Full], modes:['View]})
  @wire(getRecord,{recordId:'$recordId', fields:[NAME_FIELD,OWNER_FIELD,ANNUAL_REVENUE_FIELD]})
  accountHandler({data, error}){
    if(data){
      /*console.log(data);
      this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
      this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;
      this.annualRenevue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;*/
      this.name = getFieldValue(data, NAME_FIELD);
      this.owner = getFieldValue(data, OWNER_FIELD);
      this.annualRenevue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD);
    }
     if(error){
      console.error(error);
    }
  }

}