public class CharacterController {
    @AuraEnabled(Cacheable=true)
    public static List<Character__c> getChars() {
        List<Character__c> chars =  [
            SELECT Name, Description__c, Charisma__c, Constitution__c, Dexterity__c, 
                   Strength__c, Intelligence__c, Wisdom__c, 
                   Current_HP__c, Max_Hp__c, Height__c, Weight__c,
                   Race__c, Level__c, Size__c, Class__c, Alignment__c, Deity__c
            FROM Character__c
        ];
        system.debug(chars);
        return chars;
    }
    @AuraEnabled(Cacheable=true)
    public static List<Character__c> searchChars(String searchTerm) {
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getChars();
        }
        
        searchTerm = '%' + searchTerm + '%';
        List<Character__c> chars =  [
            SELECT Name, Description__c, Charisma__c, Constitution__c, Dexterity__c, 
                   Strength__c, Intelligence__c, Wisdom__c, 
                   Current_HP__c, Max_Hp__c, Height__c, Weight__c,
                   Race__c, Level__c, Size__c, Class__c, Alignment__c, Deity__c
            FROM Character__c
            WHERE Name LIKE :searchTerm
        ];
        system.debug(chars);
        return chars;
    }
    @AuraEnabled
    public static Character__c updateChar(Id charId, String random) {
        Character__c ch = [SELECT Description__c FROM Character__c WHERE id=:charId];
        ch.Description__c = random;
        update ch;
        return ch;
    }
}