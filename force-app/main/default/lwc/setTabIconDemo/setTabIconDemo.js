import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, getFocusedTabInfo, setTabIcon} from 'lightning/platformWorkspaceApi'

const ICON_NAME = 'utility:alert'
const ICON_ALT_TEXT = 'Alert'
export default class SetTabIconDemo extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp
    async setIconHandler(){
        if(this.isConsoleApp){
            const {tabId} = await getFocusedTabInfo()
            setTabIcon(tabId, ICON_NAME, {
                iconAlt:ICON_ALT_TEXT
            })
        }
    }
}