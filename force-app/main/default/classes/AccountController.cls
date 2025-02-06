/**
 * @description       : 
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 02-05-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Phone,  Type, Industry FROM Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountByTypeList(String type){
        return [SELECT Id, Name, Type, Industry FROM Account  WHERE Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccount(String searchKey){
      String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account  WHERE Name LIKE :key LIMIT 5];
    }
}