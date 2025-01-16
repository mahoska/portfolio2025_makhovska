/**
 * @description       : for simple study tasks
 * @author            : Hanna Makhovska
 * @group             : 
 * @last modified on  : 01-13-2025
 * @last modified by  : Hanna Makhovska
**/
public with sharing class SimpleProgramm {

  // @description       : reverse string,  check the white space
  // and does it contains only numeric, only alpha, only alphanumeric.
  // check lowercase, uppercase

  //implement a logic if the string is in lower case, upper case 
  //contains length, substring, string after substring before
   public static void str15(String str){
    System.debug('Reverse string: '+str.reverse());
    System.debug('Is string contains white space: '+str.containsWhiteSpace());
    System.debug('String contains only numeric: '+str.isNumeric());
    System.debug('String contains only alpha: '+str.isAlpha());
    System.debug('String contains only alphanumeric: '+str.isAlphaNumeric());
    System.debug('String is entirely in lowercase: '+str.isAllLowerCase());
    System.debug('String is entirely in uppercasea: '+str.isAllUpperCase());


    //'This iS hArD to rEAD';
    System.debug('converted lowercase :'+str.toLowerCase());
    System.assertEquals('this is hard to read', str.toLowerCase());
    System.debug('converted uppercase :'+str.toUpperCase());
    System.debug('length :'+str.length());
    str = str.toLowerCase();
    System.debug('converted uppercase :'+ str.contains('read'));
    str = 'https://www.google.com';
    System.debug('company name:'+ str.substringBetween('.'));
    System.debug('company name:'+ str.substring(11,18));
    System.debug('Substring After : ' + str.substringAfter('.'));
    System.debug('Substring Before : ' + str.substringBefore('.'));
    System.debug('Substring After Last : ' + str.substringAfterLast('.'));
    System.debug('Substring Before Last : ' + str.substringBeforeLast('.'));
   }


}