
var tempChart = {
    title: {
        text: 'Monthly Average Temperature',
        x: -20 
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};

var tempChart2 = {
    chart: {
        type: 'spline'

    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { 
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Snow depth (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'Winter 2007-2008',
        data: [
        [Date.UTC(1970, 9, 27), 0],
        [Date.UTC(1970, 10, 10), 0.6],
        [Date.UTC(1970, 10, 18), 0.7],
        [Date.UTC(1970, 11, 2), 0.8],
        [Date.UTC(1970, 11, 9), 0.6],
        [Date.UTC(1970, 11, 16), 0.6],
        [Date.UTC(1970, 11, 28), 0.67],
        [Date.UTC(1971, 0, 1), 0.81],
        [Date.UTC(1971, 0, 8), 0.78],
        [Date.UTC(1971, 0, 12), 0.98],
        [Date.UTC(1971, 0, 27), 1.84],
        [Date.UTC(1971, 1, 10), 1.80],
        [Date.UTC(1971, 1, 18), 1.80],
        [Date.UTC(1971, 1, 24), 1.92],
        [Date.UTC(1971, 2, 4), 2.49],
        [Date.UTC(1971, 2, 11), 2.79],
        [Date.UTC(1971, 2, 15), 2.73],
        [Date.UTC(1971, 2, 25), 2.61],
        [Date.UTC(1971, 3, 2), 2.76],
        [Date.UTC(1971, 3, 6), 2.82],
        [Date.UTC(1971, 3, 13), 2.8],
        [Date.UTC(1971, 4, 3), 2.1],
        [Date.UTC(1971, 4, 26), 1.1],
        [Date.UTC(1971, 5, 9), 0.25],
        [Date.UTC(1971, 5, 12), 0]
        ]
    }, {
        name: 'Winter 2008-2009',
        data: [
        [Date.UTC(1970, 9, 18), 0],
        [Date.UTC(1970, 9, 26), 0.2],
        [Date.UTC(1970, 11, 1), 0.47],
        [Date.UTC(1970, 11, 11), 0.55],
        [Date.UTC(1970, 11, 25), 1.38],
        [Date.UTC(1971, 0, 8), 1.38],
        [Date.UTC(1971, 0, 15), 1.38],
        [Date.UTC(1971, 1, 1), 1.38],
        [Date.UTC(1971, 1, 8), 1.48],
        [Date.UTC(1971, 1, 21), 1.5],
        [Date.UTC(1971, 2, 12), 1.89],
        [Date.UTC(1971, 2, 25), 2.0],
        [Date.UTC(1971, 3, 4), 1.94],
        [Date.UTC(1971, 3, 9), 1.91],
        [Date.UTC(1971, 3, 13), 1.75],
        [Date.UTC(1971, 3, 19), 1.6],
        [Date.UTC(1971, 4, 25), 0.6],
        [Date.UTC(1971, 4, 31), 0.35],
        [Date.UTC(1971, 5, 7), 0]
        ]
    }, {
        name: 'Winter 2009-2010',
        data: [
        [Date.UTC(1970, 9, 9), 0],
        [Date.UTC(1970, 9, 14), 0.15],
        [Date.UTC(1970, 10, 28), 0.35],
        [Date.UTC(1970, 11, 12), 0.46],
        [Date.UTC(1971, 0, 1), 0.59],
        [Date.UTC(1971, 0, 24), 0.58],
        [Date.UTC(1971, 1, 1), 0.62],
        [Date.UTC(1971, 1, 7), 0.65],
        [Date.UTC(1971, 1, 23), 0.77],
        [Date.UTC(1971, 2, 8), 0.77],
        [Date.UTC(1971, 2, 14), 0.79],
        [Date.UTC(1971, 2, 24), 0.86],
        [Date.UTC(1971, 3, 4), 0.8],
        [Date.UTC(1971, 3, 18), 0.94],
        [Date.UTC(1971, 3, 24), 0.9],
        [Date.UTC(1971, 4, 16), 0.39],
        [Date.UTC(1971, 4, 21), 0]
        ]
    }]
};




var dashboardData = 
[
        {
            'id' : '_panel1', 
            'title' : 'Dashboard 1',
            'tabsIconic' : 'fa fa-area-chart',
            'css' : 'active', 
            "columnsList" : 
                            [
                                {
                                    'id': '_column1',
                                    'title' : 'Column 1',
                                    'widgetList':
                                                [ 
                                                    {'id': '_widget1', 'widgetName' : 'Widget 1', 'widgetType':'highcharts' ,'widgetData': tempChart }
                                                ]
                                },
                                {
                                    'id': '_column2',
                                    'title' : 'Column 2',
                                    'widgetList':
                                                [ 
                                                    {'id': '_widget2', 'widgetName' : 'Widget 2', 'widgetType':'highcharts' ,'widgetData': tempChart2 }
                                                ]
                                },
                                {
                                    'id': '_column2',
                                    'title' : 'Column 2',
                                    'widgetList':
                                                [ 
                                                    {'id': '_widget3', 'widgetName' : 'Widget 3', 'widgetType':'highcharts' ,'widgetData': tempChart2 },
                                                    {'id': '_widget4', 'widgetName' : 'Widget 4', 'widgetType':'highcharts' ,'widgetData': tempChart2 }
                                                ]
                                }
                            ]
        },
        {
            'id' : '_panel2', 
            'title' : 'Dashboard 2',
            'tabsIconic' : 'fa fa-bar-chart',
            'css' : '', 
            "columnsList" : 
                            [
                                {
                                    'id': '_column3',
                                    'title' : 'Column 3',
                                    'widgetList':
                                                [ 
                                                    {'id': '_widget4', 'widgetName' : 'Widget 4', 'widgetType':'highcharts' ,'widgetData': tempChart2 }
                                                ]
                                }
                            ]
        }
];
