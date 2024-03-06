sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myapplication/test/integration/FirstJourney',
		'myapplication/test/integration/pages/OffersList',
		'myapplication/test/integration/pages/OffersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OffersList, OffersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOffersList: OffersList,
					onTheOffersObjectPage: OffersObjectPage
                }
            },
            opaJourney.run
        );
    }
);