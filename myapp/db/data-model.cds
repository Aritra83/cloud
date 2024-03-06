namespace sap.capire.myapp;
using { managed } from '@sap/cds/common';

entity Offers: managed {
  key OfferUUID : UUID;  
  ID      :Integer @readonly;
  owner   : String;
  place   : String;
  dateStart: Date ;
  dateEnd  : Date;
  description : String ;
  status      : String default 'available';
  //to_Orders    : Composition of many Orders on to_Orders.offer = $self;
}
