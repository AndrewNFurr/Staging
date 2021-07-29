import { LightningElement, api, wire} from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import Battle_Selection_Channel from '@salesforce/messageChannel/Battle_Selection__c';
import getMonster from '@salesforce/apex/CharacterController.getMonster';
import getExp from '@salesforce/apex/CharacterController.getExp';
export default class Battle extends LightningElement {
    character = null;
    monster = null;
    subscription = null;
    win = false;
    lose = false;
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
    fightMonster() {
        let num = Math.floor(Math.random() * 10) +1;
        //let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //let choice = arr[num];
        getMonster({monNum : num})
            .then(result => {
                this.monster = result;
            })
            .catch(error => {
                this.error = error;
            });
            //console.log(this.monster);
    }
    startFlee() {
        this.monster = null;
    }
    startBattle() {
        if (this.character.Max_Hp__c > this.monster.Damage__c &&
            (this.character.Damage__c > (this.monster.Health__c +this.monster.Defense__c * 1.25))) {
                this.win = true;
                getExp({charId : this.character.Id})
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        this.error = error;
                    })
            } else {
                this.lose = true;
            }
    }
    reset() {
        this.monster = null;
        this.win = false;
        this.lose = false;
    }
}