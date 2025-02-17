/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-13-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class RefreshAccount {
 @AuraEnabled
 public static List<Account> getAccountRating(Id accountId){
  try {
    return [SELECT Id, Rating FROM Account WHERE Id = :accountId];
  } catch (Exception e) {
    throw new AuraHandledException(e.getMessage());
  }
 }
}