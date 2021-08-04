import searchChars from '@salesforce/apex/CharacterController.searchChars';
import { createElement } from 'lwc';
import characterTableLwc from 'c/characterTableLwc';
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
 
const mockCharacterList = require('./data/getCharacters.json');
const searchCharsAdapter = registerApexTestWireAdapter(searchChars);

describe('c-character-table-lwc', () => {
  beforeEach(() => {
    const element = createElement('c-character-table-lwc', {
      is: characterTableLwc
    });
    document.body.appendChild(element);
  })
  afterEach(() => {
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
    
  it('displays the table of single characters', () => {
    const element = document.querySelector('c-character-table-lwc');
    searchCharsAdapter.emit(mockCharacterList);
    return Promise.resolve().then(() => {
        const pElem = element.shadowRoot.querySelectorAll('c-single-character-lwc');
        expect(pElem.length).toBe(mockCharacterList.length);
    })
  });
});