import { LightningElement, api, wire} from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import Battle_Selection_Channel from '@salesforce/messageChannel/Battle_Selection__c';
export default class Battle extends LightningElement {
    character = null;
    monster = null;
    subscription = null;
    @wire(MessageContext) 
    messageContext;
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            Battle_Selection_Channel,
            message => this.handleSelection(message)
        );
    }
    handleSelection(message) {
        console.log(message.battlee);
        this.character = message.battlee;
        console.log(this.character);
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
}