/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-08-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class MapControllerLwc {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
       return [SELECT Id, Name, description, BillingStreet, 
       BillingCountry, BillingCity, BillingState,
       BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
   }
}