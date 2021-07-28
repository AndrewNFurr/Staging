import { LightningElement, api } from 'lwc';
import updateChar from '@salesforce/apex/CharacterController.updateChar';
export default class SingleCharacterLwc extends LightningElement {
    @api character;
    error;
    description = false;
    handleDescription() {
        if (this.description == false) {
            this.description = true;
        } else {
            this.description = false;
        }
    }
    randomize() {
        const arr1 = ['Warrior', 'Wizard', 'Rogue', 'Paladin', 'Druid'];
        const arr2 = ['Staff', 'Sword', 'Hammer', 'Fork', 'Ax'];
        const arr3 = ['Fast', 'Strong', 'Smart', 'Charismatic', 'Wise'];
        const arr4 = ['Kills', 'Teaches', 'Loves', 'Ruins', 'Supports'];
        const arr5 = ['Moutains', 'Oceans', 'Forest', 'Underworld', 'Flatland'];
        
        let num1 = Math.floor(Math.random() * (4)) + 1;
        let num2 = Math.floor(Math.random() * (4)) + 1;
        let num3 = Math.floor(Math.random() * (4)) + 1;
        let num4 = Math.floor(Math.random() * (4)) + 1;
        let num5 = Math.floor(Math.random() * (4)) + 1;
        
        let val1 = arr1[num1];
        let val2 = arr2[num2];
        let val3 = arr3[num3];
        let val4 = arr4[num4];
        let val5 = arr5[num5];
        let string = `A mighty ${val1} who comes from the ${val5}. One who ${val4} all the enemies using a ${val2}. Very ${val3}.`;
        updateChar({charId : this.character.Id, random : string})
            .then(result => {
                this.character = result;
            })
            .catch(error => {
                this.error = error;
            });
        
    }
}