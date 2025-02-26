import { createElement } from 'lwc';
import MySixthCompForJestWire from 'c/mySixthCompForJestWire';
import getContactList from '@salesforce/apex/ContactController.getContactList';
// Realistic data with a list of contacts
const mockGetContactList = require('./data/getContactsList.json');
const mockGetContactListNoRecords = require('./data/getContactsListNoRecord.json');


// Mock getContactList Apex wire adapter
jest.mock(
    '@salesforce/apex/ContactController.getContactList',
    () => {
        const {
            createApexTestWireAdapter
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

describe('c-my-sixth-comp-for-jest-wire test suit', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        jest.clearAllMocks();
    });

    beforeEach(() =>{
      const element = createElement('c-my-sixth-comp-for-jest-wire', {
            is: MySixthCompForJestWire
      });
      document.body.appendChild(element);
    });


    it('render correct records', () => {
      const element = document.querySelector('c-my-sixth-comp-for-jest-wire');
      getContactList.emit(mockGetContactList);
      return Promise.resolve().then(()=>{
        const pElement = element.shadowRoot.querySelectorAll('p');
        expect(pElement.length).toBe(mockGetContactList.length);
        expect(pElement[0].textContent).toBe(mockGetContactList[0].Name);
      })
    });

    it('render no item when no  records are available', () => {
      const element = document.querySelector('c-my-sixth-comp-for-jest-wire');
      getContactList.emit(mockGetContactListNoRecords);
      return Promise.resolve().then(()=>{
        const pElement = element.shadowRoot.querySelectorAll('p');
        expect(pElement.length).toBe(mockGetContactListNoRecords.length);
      })
    });

    it("getContactsList @wire error", () => {
      const element = document.querySelector('c-my-sixth-comp-for-jest-wire');
      getContactList.error();
      return Promise.resolve().then(()=>{
        const errorElement = element.shadowRoot.querySelectorAll('.error');
        expect(errorElement.textContent).not.toBeNull();
      })
    })

});