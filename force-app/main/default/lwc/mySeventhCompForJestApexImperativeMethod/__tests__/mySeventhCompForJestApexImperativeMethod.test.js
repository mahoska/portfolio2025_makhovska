import { createElement } from 'lwc';
import MySeventhCompForJestApexImperativeMethod from 'c/mySeventhCompForJestApexImperativeMethod';
import  getAccountList from '@salesforce/apex/AccountController.getAccountList';
import {setImmediate} from 'timers';
const APEX_ACCOUNT_LIST_ERROR = require('./data/accountsError.json');
const APEX_ACCOUNT_LIST_SUCCESS = require('./data/accountsList.json');

   jest.mock('@salesforce/apex/AccountController.getAccountList', 
      () => ({
        default: jest.fn()
      }),
      { virtual: true }
    );

describe('c-my-seventh-comp-for-jest-apex-imperative-method test suit', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        jest.clearAllMocks();
    });

    beforeEach(() => {
        const element = createElement('c-my-seventh-comp-for-jest-apex-imperative-method', {
            is: MySeventhCompForJestApexImperativeMethod
        });
        document.body.appendChild(element);
    });

 

    it('render accounts returned from imperative apex call', () => {
      getAccountList.mockResolvedValue(APEX_ACCOUNT_LIST_SUCCESS);
      const element = document.querySelector('c-my-seventh-comp-for-jest-apex-imperative-method');  
      const buttonElement = element.shadowRoot.querySelector('lightning-button');
      buttonElement.click();
      return new Promise(setImmediate).then(()=>{
        const detailElems = element.shadowRoot.querySelectorAll('.accountName');
        expect(detailElems.length).toBe(APEX_ACCOUNT_LIST_SUCCESS.length);
        expect(detailElems[0].textContent).toBe(APEX_ACCOUNT_LIST_SUCCESS[0].Name);
        expect(detailElems[1].textContent).toBe(APEX_ACCOUNT_LIST_SUCCESS[1].Name);
      })
    });

    it('render the error when apex return an error', () => {
      const test = getAccountList.mockRejectedValue(APEX_ACCOUNT_LIST_ERROR);
      const element = document.querySelector('c-my-seventh-comp-for-jest-apex-imperative-method');  
      const buttonElement = element.shadowRoot.querySelector('lightning-button');
      buttonElement.click();
       return new Promise(setImmediate).then(()=>{
        const errorElement = element.shadowRoot.querySelector('.error');
        expect(errorElement).not.toBeNull();
       });
    });
});