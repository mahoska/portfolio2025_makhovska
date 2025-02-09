/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-09-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class OpportunityController {
   @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOpportunities(){
    try {
      return [SELECT StageName FROM Opportunity];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
   }
}