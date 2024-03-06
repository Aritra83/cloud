using { sap.capire.myapp as my } from '../db/data-model';
service CatalogService @(path:'/browse') {

   annotate  Offers with     @odata.draft.enabled ;
    entity Offers as SELECT from my.Offers excluding { createdBy, modifiedBy } 
    //entity Orders as projection on my.Orders
    
    
}