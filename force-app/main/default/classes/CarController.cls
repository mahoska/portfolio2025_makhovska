/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-20-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class CarController {

  @AuraEnabled(cacheable=true)
  public static List<Car__c> getCars(Filters filters){

    String key, whereClause = '';
    Decimal maxPrice;
    String[] categories, makeType, criteria = new List<String>();
    String query = '';

    System.debug(filters);
   if(filters !=null){
            maxPrice = filters.maxPrice;
            categories = filters.categories;
            makeType = filters.makeType;
            if(!String.isEmpty(filters.searchKey)){
                key = '%'+ filters.searchKey + '%';
                criteria.add('Name LIKE :key');
            }
            if(filters.maxPrice >= 0){
                criteria.add('MSRP__c <= :maxPrice');
            }
            if(filters.categories != null){
                criteria.add('Category__c IN :categories');
            }
            if(filters.makeType != null){
                criteria.add('Make__c IN :makeType');
            }
            if(criteria.size()>0){
                whereClause =  ' WHERE ' + String.join(criteria, ' AND ');
            }
        }
        query = 'SELECT Id, Name, MSRP__c, Description__c, Category__c, Picture_URL__c FROM Car__c ' + whereClause + ' WITH SECURITY_ENFORCED ORDER BY Name';
        System.debug(query);

    try {
      return  Database.query(query);
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  
  @AuraEnabled(cacheable=true)
  public static List<Car__c> getSimilarCars(Id carId, List<String> makeType){
    return  [SELECT Id, Name, MSRP__c, Description__c, Category__c, Picture_URL__c,Make__c FROM Car__c WHERE Make__c IN :makeType AND Id != :carId];
  }

  //wrapper class
  public class Filters{
    @AuraEnabled
    public String searchKey {get; set;}
    @AuraEnabled
    public Decimal maxPrice {get; set;}
    @AuraEnabled
    public List<String> categories {get; set;}
    @AuraEnabled
    public List<String> makeType {get; set;}
  }

}