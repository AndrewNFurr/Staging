import { LightningElement, wire } from 'lwc';
import searchChars from '@salesforce/apex/CharacterController.searchChars';
export default class CharacterTableLwc extends LightningElement {
    searchTerm = '';
    characters;
    @wire(searchChars, {searchTerm: '$searchTerm'})
    loadChars(result) {
        this.characters = result;
    }
    
    handleSearchTermChange(event) {
        window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
	
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
    }
    /*get hasResults() {
        return(this.characters.data.length > 0);
    };*/
    
    
}