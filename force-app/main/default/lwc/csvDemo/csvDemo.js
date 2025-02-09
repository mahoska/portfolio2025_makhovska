import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CsvController.getAccounts';
import {exportCSVFile} from 'c/utils';
export default class CsvDemo extends LightningElement {
  accountData;
  accountHeaders = {
    Id:"Record Id",
    Name:"Name",
    Industry:"Industry",
    AnnualRevenue:"Annual Revenue",
    Phone:"Phone"
  }

  @wire(getAccounts)
  accountHandler({data, error}){
    if(data){
       console.log(data);
       this.accountData = data;
    }
    if(error){
       console.log(error);
    }
  }

  csvGenerator(){
    console. log('exportCSVFile called');
    //headers, totalData, fileTitle
    exportCSVFile(this.accountHeaders, this.accountData, "account_records");
  }
}