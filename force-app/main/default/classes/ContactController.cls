/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-08-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
      try {
        return [SELECT Id, Name, Title, Email FROM Contact LIMIT 20];
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
}