import { createElement } from 'lwc';
import UnitTest from 'c/unitTest';
  
describe('c-battle', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
    
  it('displays unit status with default unitNumber', () => {
    const element = createElement('c-battle', {
      is: UnitTest
    });
    expect(element.monHealth).toBe(220);
    // Add the element to the jsdom instance
    document.body.appendChild(element);
    // Verify displayed greeting
    const div = element.shadowRoot.querySelector('div');
    expect(div.textContent).toBe('Unit 5 alive!');
  });
});