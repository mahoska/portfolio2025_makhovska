import { createElement } from 'lwc';
import MyFirstComponentForJest from 'c/myFirstComponentForJest';

describe('c-my-first-component-for-jest test suite', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('display first greeting', () => {
        // Arrange
        const element = createElement('c-my-first-component-for-jest', {
            is: MyFirstComponentForJest
        });

        document.body.appendChild(element);

        const firstDiv = element.shadowRoot.querySelector('div.first');
        expect(firstDiv.textContent).toBe('Hello, World!');
    });

    it('display second greeting', () => {
        // Arrange
        const element = createElement('c-my-first-component-for-jest', {
            is: MyFirstComponentForJest
        });

        document.body.appendChild(element);

        const secondDiv = element.shadowRoot.querySelector('div.second');
        expect(secondDiv.textContent).toBe('My, World!');
    });
});