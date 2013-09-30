//Gauges
var currentKuewCount, currentFilterCount, currentDataPointBalance ;

 var currentKuewCount = new JustGage({
    id: "currentKuewCount",
    value: getRandomInt(0, 7), 
    min: 0,
    max: 7,
    relativeGaugeSize: true,
    customSectors: [{
      color : "#ff0000",
      lo : 0,
      hi : 3
    },{
      color : "#00ff00",
      lo : 4,
      hi : 5
    }, {
      color : "#0000ff",
      lo : 6,
      hi : 7
    }],
    title: "Active Kuews",
    label: "of 7",
    gaugeWidthScale: .1,
    
  }); 
  
  var currentFilterCount = new JustGage({
    id: "currentFilterCount",
    value: getRandomInt(0, 18000),  
    min: 0,
    max: 18000,
    relativeGaugeSize: true,
    customSectors: [{
      color : "#ff0000",
      lo : 0,
      hi : 6000
    },{
      color : "#00ff00",
      lo : 6001,
      hi : 12000
    }, {
      color : "#0000ff",
      lo : 12001,
      hi : 18000
    }],
    title: "Remaining Datapoints",
    label: "of 18,000",
    gaugeWidthScale: .1,
  });
var currentDataPointBalance = new JustGage({
    id: "currentDataPointBalance",
    value: getRandomInt(0, 18000),
    min: 0,
    max: 18000,
    relativeGaugeSize: true,
    customSectors: [{
        color : "#ff0000",
        lo : 0,
        hi : 6000
    },{
        color : "#00ff00",
        lo : 6001,
        hi : 12000
    }, {
        color : "#0000ff",
        lo : 12001,
        hi : 18000
    }],
    title: "Remaining Datapoints",
    label: "of 18,000",
    gaugeWidthScale: .1,
});
