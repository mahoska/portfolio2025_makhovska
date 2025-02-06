import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import findAccount from '@salesforce/apex/AccountController.findAccount';
export default class ApexImperativeDemo extends LightningElement {
  accounts;
  filteredAccounts;

  handleClick(){
    getAccountList().then(result=>{
      this.accounts = result;
    }).catch(error=>{
      console.log(error);
    })
  }

  searchHandler(event){
    
    let searchKey = event.target.value;
    findAccount({searchKey}).then(result=>{
       this.filteredAccounts = result;
    }).catch(error=>{
      console.log(error);
    })
  }
}