import { createElement } from 'lwc';
import MyFifthCompForJestNestedComp from 'c/myFifthCompForJestNestedComp';
const USER_RESULT = 'Hanna';
describe('c-my-fifth-comp-for-jest-nested-comp test suit', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
      const element = createElement('c-my-fifth-comp-for-jest-nested-comp', {
        is: MyFifthCompForJestNestedComp
      });
      document.body.appendChild(element);
    })

    it('render child component', () => {
      const  element = document.querySelector('c-my-fifth-comp-for-jest-nested-comp');
      const childElement = element.shadowRoot.querySelectorAll('c-my-fifth-comp-for-jest-child');
      expect(childElement.length).toBe(1);
    });

    it('set user data property correctly', () => {
      const  element = document.querySelector('c-my-fifth-comp-for-jest-nested-comp');
      const childElement = element.shadowRoot.querySelector('c-my-fifth-comp-for-jest-child');
      expect(childElement.userDetail.Name).toBe(USER_RESULT);
    });

    
});