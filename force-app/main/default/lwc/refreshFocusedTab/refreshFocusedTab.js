import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, refreshTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi'
export default class RefreshFocusedTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp

    async refreshTabHandler(){
        if(this.isConsoleApp){
            const {tabId} = await getFocusedTabInfo()
            await refreshTab(tabId, {
                includeAllSubtabs:true
            })
        }
    }
}