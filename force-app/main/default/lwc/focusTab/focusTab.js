import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, getAllTabInfo, focusTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi'
export default class FocusTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp
    async setFocusHandler(){
        if(this.isConsoleApp){
            const allTabs = await getAllTabInfo()
            const {tabId} = await getFocusedTabInfo()
            console.log("allTabs", allTabs)
            // if(allTabs.length>1){
            //     await focusTab(allTabs[1].tabId)
            // }
            const selectedTabIndex = allTabs.findIndex(nextTab=>{
                return nextTab.tabId === tabId
            })
            const nextTabId = allTabs[selectedTabIndex+1].tabId
            await focusTab(nextTabId)
        }
    }
}