import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, getFocusedTabInfo, disableTabClose} from 'lightning/platformWorkspaceApi'
export default class DisableTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp
   async disableHandler(event){
        if(this.isConsoleApp){
           const {tabId} =  await getFocusedTabInfo()
           await disableTabClose(tabId, event.detail.checked)
        }
    }
}