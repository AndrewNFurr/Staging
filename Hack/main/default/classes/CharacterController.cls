public class CharacterController {
    @AuraEnabled(Cacheable=true)
    public static List<Character__c> getChars() {
        List<Character__c> chars =  [
            SELECT Name, Description__c, Charisma__c, Constitution__c, Dexterity__c, 
                   Strength__c, Intelligence__c, Wisdom__c, Damage__c,
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
                   Strength__c, Intelligence__c, Wisdom__c, Damage__c,
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
        Character__c ch = [
        SELECT  Name, Description__c, Charisma__c, Constitution__c, Dexterity__c, 
                Strength__c, Intelligence__c, Wisdom__c, Damage__c,
                Current_HP__c, Max_Hp__c, Height__c, Weight__c,
                Race__c, Level__c, Size__c, Class__c, Alignment__c, Deity__c 
        FROM Character__c 
        WHERE id=:charId];
        ch.Description__c = random;
        update ch;
        return ch;
    }
    @AuraEnabled 
    public static Character__c getExp(Id charId) {
        Character__c ch = [SELECT Exp__c FROM Character__c WHERE id=:charId];
        ch.Exp__c += 10;
        update ch;
        return ch;
    }

    @AuraEnabled
    public static Monster__c getMonster(Integer monNum){
        system.debug(monNum);
        Monster__c appeared = [
            SELECT Name, Damage__c, Defense__c, Health__c, Number__c, Description__c, Current_HP__c
            FROM Monster__c
            WHERE Number__c =: monNum
            LIMIT 1
          ];
          return appeared;
    }
    @AuraEnabled
    public static Character__c updateCharHealth(Id charId) {
        Character__c ch = [SELECT Max_Hp__c, Current_HP__c FROM Character__c WHERE id=:charId];
        ch.Current_HP__c = ch.Max_Hp__c;
        update ch;
        return ch;
    }
    @AuraEnabled
    public static Monster__c updateMonHealth(Id monId) {
        Monster__c mon = [SELECT Health__c, Current_HP__c FROM Monster__c WHERE Id =: monId];
        mon.Current_HP__c = mon.Health__c;
        update mon;
        return mon;
    }
    @AuraEnabled
    public static Character__c takeCharTurn(Id charId, Integer monDam) {
        Character__c ch = [SELECT Current_HP__c FROM Character__c WHERE Id =:charId];
        ch.Current_Hp__c -= monDam;
        update ch;
        return ch;
    }
    @AuraEnabled
    public static Monster__c takeMonTurn(Integer charDam, Id monId) {
        Monster__c mon = [SELECT Current_HP__c FROM Monster__c WHERE Id =: monId];
        mon.Current_Hp__c -= charDam;
        update mon;
        return mon;
    }
}