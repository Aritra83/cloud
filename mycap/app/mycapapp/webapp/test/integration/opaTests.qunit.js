sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sap/mycapapp/test/integration/FirstJourney',
		'com/sap/mycapapp/test/integration/pages/SalesOrderList',
		'com/sap/mycapapp/test/integration/pages/SalesOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderList, SalesOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sap/mycapapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderList: SalesOrderList,
					onTheSalesOrderObjectPage: SalesOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);