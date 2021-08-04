import { LightningElement, wire } from 'lwc';
import searchChars from '@salesforce/apex/CharacterController.searchChars';
export default class CharacterTableLwc extends LightningElement {
    searchTerm = '';
    @wire(searchChars, {searchTerm: '$searchTerm'})
    characters;
    
    handleSearchTermChange(event) {
        window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
	
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
    }
    
    
}