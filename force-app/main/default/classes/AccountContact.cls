/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-12-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class AccountContact {
  @AuraEnabled(cacheable=true)
  public static List<Account> allAccountsWithContacts(){
    try {
      return [SELECT Id, Name, Phone, Website, (SELECT Id, Name, Phone, Email FROM Contacts) FROM Account LIMIT 5];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}