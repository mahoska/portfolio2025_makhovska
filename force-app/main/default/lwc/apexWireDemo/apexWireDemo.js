import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getAccountByTypeList from '@salesforce/apex/AccountController.getAccountByTypeList';
export default class ApexWireDemo extends LightningElement {
   accountList;
   selectedType='';

   get typeOptions(){
       return [
           { label: 'Customer - Channel', value: 'Customer - Channel' },
           { label: 'Customer - Direct', value: 'Customer - Direct' },
           { label: 'Other', value: 'Other' }
       ];
   }
    
    @wire(getAccountList)
    accounts;

    @wire(getAccountList)
    accountsHandler({data, error}){
        if(data){
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel':
                item.Type === 'Customer - Direct' ? 'Direct':'-------'
                return {...item, newType}
            })

            console.log(JSON.stringify(this.accountList));
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getAccountByTypeList, {type:'$selectedType'})
    filteredAccounts;

    
    handleTypeChange(event){
        this.selectedType = event.target.value;
    }

}