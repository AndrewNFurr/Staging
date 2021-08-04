import { createElement } from 'lwc';
import SingleCharacterLwc from '../singleCharacterLwc';
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
 
const mockCharacter = require('./data/character.json');

describe('c-single-character-lwc', () => {
  beforeEach(() => {
    const element = createElement('c-single-character-lwc', {
      is: SingleCharacterLwc
    });
    document.body.appendChild(element);
  })
  afterEach(() => {
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
    
  it('displays the description of a single character', () => {
    const element = document.querySelector('c-single-character-lwc');
    
    console.log(element, mockCharacter.character);
    const button = element.shadowRoot.querySelector('lightning-button-icon');
    button.click();
    const desc = element.shadowRoot.querySelector('#desc');
    expect(desc).not.toBe(null);
  });
});