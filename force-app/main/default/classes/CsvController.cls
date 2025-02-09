/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-09-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class CsvController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
      try {
        return [SELECT Id, Name, Phone, AnnualRevenue, Industry FROM Account];
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
}