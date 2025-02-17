import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, closeTab, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';

export default class CloseTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation

    closeHandler(){
        if(this.isConsoleNavigation){
            getFocusedTabInfo().then(tabInfo=>{
                console.log("tabInfo", tabInfo)
                closeTab(tabInfo.tabId)
            }).catch(error=>{
                console.error(error)
            })
        }
    }

    async closeAsyncHandler(){
        if(this.isConsoleNavigation){
            try{
               const {tabId} =  await getFocusedTabInfo()
               await closeTab(tabId)
            }catch(error){
                console.error(error)
            }
        }
    }
}