sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sap/soapp/test/integration/FirstJourney',
		'com/sap/soapp/test/integration/pages/SalesOrderList',
		'com/sap/soapp/test/integration/pages/SalesOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderList, SalesOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sap/soapp') + '/index.html'
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