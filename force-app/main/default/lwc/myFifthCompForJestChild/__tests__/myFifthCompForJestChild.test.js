import { createElement } from 'lwc';
import MyFifthCompForJestChild from 'c/myFifthCompForJestChild';
const USER_DATA = { Id:'1', Name:'Hanna'};
const MESSAGE = 'No user data available';
describe('c-my-fifth-comp-for-jest-child', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('render name based on public property', () => {
      const element = createElement('c-my-fifth-comp-for-jest-child', {
            is: MyFifthCompForJestChild
        });
      element.userDetail = USER_DATA;
      document.body.appendChild(element);
      
      const divElement = element.shadowRoot.querySelector('.userName');
      expect(divElement.textContent).toBe(USER_DATA.Name);
    });

    it('render message is userDetails not available', () => {
      const element = createElement('c-my-fifth-comp-for-jest-child', {
            is: MyFifthCompForJestChild
        });
      document.body.appendChild(element);
      const pElement = element.shadowRoot.querySelector('p');
      expect(pElement.textContent).toBe(MESSAGE);
    });
});