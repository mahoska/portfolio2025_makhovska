import { createElement } from 'lwc';
import MyFourthCompForJestLoop from 'c/myFourthCompForJestLoop';
const EXPECTED = ['Hanna', 'John', 'Mike'];

describe('c-my-fourth-comp-for-jest-loop test suite', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(()=>{
        const element = createElement('c-my-fourth-comp-for-jest-loop', {
            is: MyFourthCompForJestLoop
        });
        document.body.appendChild(element);
    })

    it('check user list length', () => {
        const element = document.querySelector('c-my-fourth-comp-for-jest-loop');
        const userDetails = element.shadowRoot.querySelectorAll('.forEachList>li');
        expect(userDetails.length).toBe(3);
    });

  it('display user list in specific order', () => {
      const element = document.querySelector('c-my-fourth-comp-for-jest-loop');
      const userDetails = Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'));
      const userList = userDetails.map(li=>li.textContent);
      expect(userList.length).toBe(3);
      expect(userList).toEqual(EXPECTED);
  });

  it('display first and last text in the iterator loop', () => {
      const element = document.querySelector('c-my-fourth-comp-for-jest-loop');
      const firstDiv = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child');
      expect(firstDiv.textContent).toBe('Start of List');
      const LastDiv = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child');
      expect(LastDiv.textContent).toBe('End of List');
  });


});