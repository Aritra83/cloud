using CatalogService from './cat-service';

annotate CatalogService.Offers with{
    ID        @title : 'Offer ID';
    owner       @title : 'Owner';
    place         @title : 'Place';
    dateStart     @title : 'Start Date';
    dateEnd  @title : 'end Date';
     description     @title : 'Description';
    status @title : 'Status';

    
}

annotate CatalogService.Offers with @(
    UI: {
        HeaderInfo: {
			TypeName: 'Offer',
			TypeNamePlural: 'Offers',
			Title          : {
                $Type : 'UI.DataField',
                Value : ID
            },
			Description : {
				$Type: 'UI.DataField',
				Value: description
			}
		},
        SelectionFields: [ID],
        LineItem:[
            {Value: ID},
            {Value: owner},
            {Value: place}
           
        ],
        Facets: [
            {$Type: 'UI.ReferenceFacet', Label: 'Main', Target: '@UI.FieldGroup#Main'}        
        ],
        FieldGroup#Main: {
            Data: [
                {Value: ID},
            {Value: owner},
            {Value: place}
            ]
        }
    }
){};