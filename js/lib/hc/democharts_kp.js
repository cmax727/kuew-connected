$(function () {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        })
    
        var chart;
        $('#realtime_node').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'REALTIME KUEW ACTIVITY'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Kuew Interactions'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                })()
            }]
        });
       
       
       
//sales funnel master


    
//    $('#k_master_funnel').highcharts({
//        chart: {
//            type: 'funnel',
//            marginRight: 100
//        },
//        title: {
//            text: 'Kuew Macro Funnel',
//            x: -50
//        },
//        plotOptions: {
//            series: {
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b> ({point.y:,.0f})',
//                    color: 'black',
//                    softConnector: true
//                },
//                neckWidth: '30%',
//                neckHeight: '25%'
//                
//                //-- Other available options
//                // height: pixels or percent
//                // width: pixels or percent
//            }
//        },
//        legend: {
//            enabled: true
//        },
//        series: [{
//            name: 'Unique users',
//            data: [
//                ['Socially Acquired',   15654],
//                ['Qualified and directly Kuewed',       4064],
//                ['Provided >50% of requested info stats', 1987],
//                ['Confirmed Active',    976],
//                ['Secondary Marketing Opt-In',    846]
//            ]
//        }]
//    });

//Kuew Panel Sample Charts
$(function () {
        $('#kuew_plat_src').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Kuewbie Platform Sources'
            },
            subtitle: {
                text: 'Updated Hourly'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Kuewbie Quantity'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Kuew Landing Page',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
            }, {
                name: 'Mobile',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
            }, {
                name: 'Social Networks',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
            }, {
                name: 'Email',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            },{
                name: 'Direct OnSite',
                data: [26, 77, 2, 45.4, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            }]
        });
    });
    
       
    
    //area chart
    
    $(function () {
        $('#source_mention').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Mention Sources'
            },
            
            xAxis: {
                categories: ['08/05/2013', '08/06/2013', '08/07/2013', '08/08/2013', '08/09/2013', 'Yesterday', 'Today'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Facebook',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Twitter',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Blogs',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'Email',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'SMS',
                data: [2, 2, 2, 6, 13, 30, 46]
            }, {
                name: 'Landing Page',
                data: [5, 4, 1, 22, 13, 30, 34]
            }]
        });
    });
    
//column with negative values
  $(function () {
        $('#sentiment').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Column chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
            }]
        });
    });
  
   
});
});
       








