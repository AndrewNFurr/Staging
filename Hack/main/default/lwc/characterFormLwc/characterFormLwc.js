import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CHARACTER_OBJECT from '@salesforce/schema/Character__c';
import NAME_FIELD from '@salesforce/schema/Character__c.Name';
import STRENGTH_FIELD from '@salesforce/schema/Character__c.Strength__c';
import DEXTERITY_FIELD from '@salesforce/schema/Character__c.Dexterity__c';
import WISDOM_FIELD from '@salesforce/schema/Character__c.Wisdom__c';
import CHARISMA_FIELD from '@salesforce/schema/Character__c.Charisma__c';
import CONSTITUTION_FIELD from '@salesforce/schema/Character__c.Constitution__c';
import INTELLIGENCE_FIELD from '@salesforce/schema/Character__c.Intelligence__c';
import CLASS_FIELD from '@salesforce/schema/Character__c.Class__c';
import RACE_FIELD from '@salesforce/schema/Character__c.Race__c';
import ALIGNMENT_FIELD from '@salesforce/schema/Character__c.Alignment__c';
import DEITY_FIELD from '@salesforce/schema/Character__c.Deity__c';
import WEIGHT_FIELD from '@salesforce/schema/Character__c.Weight__c';
import HEIGHT_FIELD from '@salesforce/schema/Character__c.Height__c';
import SIZE_FIELD from '@salesforce/schema/Character__c.Size__c';
import CURRENT_HP_FIELD from '@salesforce/schema/Character__c.Current_HP__c';
import MAX_HP_FIELD from '@salesforce/schema/Character__c.Max_Hp__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Character__c.Description__c';
export default class CharacterFormLwc extends LightningElement {
    objectApiName = CHARACTER_OBJECT;
    fields = [NAME_FIELD, DEITY_FIELD, DESCRIPTION_FIELD, STRENGTH_FIELD, DEXTERITY_FIELD, WISDOM_FIELD, INTELLIGENCE_FIELD, CHARISMA_FIELD, CONSTITUTION_FIELD, SIZE_FIELD, CLASS_FIELD, WEIGHT_FIELD, HEIGHT_FIELD, RACE_FIELD, ALIGNMENT_FIELD, MAX_HP_FIELD, CURRENT_HP_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Hear Comes a Daredevil!",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}