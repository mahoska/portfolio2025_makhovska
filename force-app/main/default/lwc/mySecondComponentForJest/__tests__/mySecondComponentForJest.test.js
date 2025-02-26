import { createElement } from 'lwc';
import MySecondComponentForJest from 'c/mySecondComponentForJest';

describe('c-my-second-component-for-jest suit test', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() =>{
        const element = createElement('c-my-second-component-for-jest', {
            is: MySecondComponentForJest
        });
        document.body.appendChild(element);
    })
    it('Test default greet value should be Hello, World', () => {
        const element = document.querySelector('c-my-second-component-for-jest');
        const text = element.shadowRoot.querySelector('p');
        expect(text.textContent).toBe('Hello, World!');
    });

     it('Test default greet value should not be Hello, Bob', () => {
        const element = document.querySelector('c-my-second-component-for-jest');
        const text = element.shadowRoot.querySelector('p');
        expect(text.textContent).not.toBe('Hello, Bob!');
    });

    it('test input change event value', ()=>{
      const element = document.querySelector('c-my-second-component-for-jest');
      const inputElement = element.shadowRoot.querySelector('lightning-input');
      inputElement.value = 'Salesforce';
      inputElement.dispatchEvent(new CustomEvent('change'));
      const text = element.shadowRoot.querySelector('p');
      return Promise.resolve().then(()=>{
        expect(text.textContent).toBe('Hello, Salesforce!');
      })
    })
});