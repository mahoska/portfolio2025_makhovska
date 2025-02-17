import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, openSubtab, EnclosingTabId} from 'lightning/platformWorkspaceApi'
export default class OpenSubTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation

    @wire(EnclosingTabId)
    parentTabId

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
                recordId:'001dL000000NczFQAS',
                label:'Troop',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
    openTabUrl(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
                url:'/lightning/r/Account/001dL000000NczFQAS/view',
                label:'Account',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
                pageReference:{
                    type:'standard__objectPage',
                    attributes:{
                        objectApiName:'Account',
                        actionName:'list'
                    }
                },
                label:'Accounts list',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }

}