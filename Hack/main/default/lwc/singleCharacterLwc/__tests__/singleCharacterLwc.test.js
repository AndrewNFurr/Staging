import { createElement } from 'lwc';
import SingleCharacterLwc from 'c/singleCharacterLwc';
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
 
const mockCharacter = require('./data/character.json');


describe('c-single-character-lwc', () => {
  beforeEach(() => {
    const element = createElement('c-single-character-lwc', {
      is: SingleCharacterLwc
    });
    element.character = mockCharacter;
    element.description = false;
    document.body.appendChild(element);
  })
  afterEach(() => {
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('displays a single character', () => {
    const element = document.querySelector('c-single-character-lwc');
    //element.character = mockCharacter;
    const el = element.shadowRoot.querySelector('lightning-card');
    expect(el.title).toBe(mockCharacter.Name);
  });
    
  it('displays the description of a single character', () => {
    const element = document.querySelector('c-single-character-lwc');
    const button = element.shadowRoot.querySelector('.desc-button');
    button.dispatchEvent(new CustomEvent('click'));
  });
  return Promise.resolve().then(() => {
    const desc = element.shadowRoot.querySelector('p');
    expect(element.description).toBe(true);
  });
});