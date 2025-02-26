import { createElement } from 'lwc';
import MyThirdCompForJestCondition from 'c/myThirdCompForJestCondition';

describe('c-my-third-comp-for-jest-condition suit test', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
      const element = createElement('c-my-third-comp-for-jest-condition', {
            is: MyThirdCompForJestCondition
        });
        document.body.appendChild(element);
    })

    it('do not show password', () => {
      const element = document.querySelector('c-my-third-comp-for-jest-condition');
      const passwordElement = element.shadowRoot.querySelector('.userInfo');
      expect(passwordElement.textContent).toBe(' My password is ******* ');
    });

    it('show user password when checkbox is checked', () => {
      const element = document.querySelector('c-my-third-comp-for-jest-condition');
      const inputElement = element.shadowRoot.querySelector('lightning-input');
      inputElement.checked = true;
      inputElement.dispatchEvent(new CustomEvent('change'));
          
      return Promise.resolve().then(() => {
        const passwordElement = element.shadowRoot.querySelector('.userInfo');
        expect(passwordElement.textContent).toBe(' My password is THF$567 ');
      })
    });

});