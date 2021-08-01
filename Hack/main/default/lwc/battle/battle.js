import { LightningElement, api, wire} from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import Battle_Selection_Channel from '@salesforce/messageChannel/Battle_Selection__c';
import getMonster from '@salesforce/apex/CharacterController.getMonster';
import getExp from '@salesforce/apex/CharacterController.getExp';
import updateCharHealth from '@salesforce/apex/CharacterController.updateCharHealth';
import updateMonHealth from '@salesforce/apex/CharacterController.updateMonHealth';
import takeCharTurn from '@salesforce/apex/CharacterController.takeCharTurn';
import takeMonTurn from '@salesforce/apex/CharacterController.takeMonTurn';
export default class Battle extends LightningElement {
    character = null;
    monster = null;
    charHealth = null;
    monHealth = null;
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
        this.charHealth = this.character.Max_Hp__c;
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    fightMonster() {
        let num = Math.floor(Math.random() * 10) +1;
        getMonster({monNum : num})
            .then(result => {
                this.monster = result;
                this.monHealth = this.monster.Health__c;
            })
            .catch(error => {
                this.error = error;
            });
    }
    startFlee() {
        this.monster = null;
        this.reset();
    }
    startBattle() {
        /*this.character.Max_Hp__c > this.monster.Damage__c &&
            (this.character.Damage__c > (this.monster.Health__c +this.monster.Defense__c * 1.25))
            takeCharTurn({charId: this.character.Id, monDam : this.monster.Damage__c })
            .then(result => {
                this.characer = result;
            })
            .catch(error => {
                this.error = error;
            });
        takeMonTurn({monId: this.monster.Id, charDam: (this.character.Damage__c - this.monster.Defense__c)})
            .then(result => {
                this.monster = result;
            })
            .catch(error => {
                this.error = error;
            })*/
        if (this.monHealth > 0 && this.charHealth > 0) {
        this.charHealth -= this.monster.Damage__c;
        this.monHealth -= (this.character.Damage__c - this.monster.Defense__c);
        
        console.log(this.monHealth, this.charHealth);
        } 
        if (this.monHealth <= 0) {
                this.win = true;
                getExp({charId : this.character.Id})
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        this.error = error;
                    })
            } else if (this.charHealth <= 0) {
                this.lose = true;
            }
    }
    reset() {
        this.win = false;
        this.lose = false;
        updateCharHealth({charId : this.character.Id})
            .then(result => {
                //this.character = result;
                this.charHealth = this.character.Max_Hp__c;
            })
            .catch(error => {
                this.error = error;
            });
        this.monHealth = null;
        this.monster = null;
        //this.character = null;
    }
}