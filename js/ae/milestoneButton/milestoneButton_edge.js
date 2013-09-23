/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'actions',
            type:'rect',
            rect:['0','0','100%','101.9%','auto','auto']
         }],
         symbolInstances: [
         {
            id:'actions',
            symbolName:'actions'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_actions}": [
            ["style", "height", '101.92%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "hoverStart": 1000,
            "hoverEnd": 2000
         },
         timeline: [
            { id: "eid7", tween: [ "style", "${_Stage}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Stage}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"actions": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-5.4%','-4.9%','109.6%','107.5%','auto','auto'],
      id: 'circle',
      transform: [[],[],[],['0.89123','0.89123']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/circle.png','0px','0px']
   },
   {
      id: 'calendar',
      type: 'image',
      rect: ['19.6%','21.9%','61.6%','56.6%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/calendar.png','0px','0px']
   },
   {
      rect: ['13.1%','34.3%','74.2%','21.1%','auto','auto'],
      font: ['open-sans, sans-serif',[150,'%'],'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'milestones',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '3.46%'],
            ["style", "font-size", '173%'],
            ["style", "top", '5.28%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.13%'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '92.7%']
         ],
         "${_circle}": [
            ["style", "top", '-6%'],
            ["transform", "scaleY", '0.89123'],
            ["transform", "scaleX", '0.89123'],
            ["style", "height", '110.06%'],
            ["style", "left", '-6.1%'],
            ["style", "width", '112.2%']
         ],
         "${symbolSelector}": [
            ["style", "height", '265px'],
            ["style", "width", '260px']
         ],
         "${_calendar}": [
            ["style", "top", '21.89%'],
            ["transform", "scaleY", '1'],
            ["style", "height", '56.6%'],
            ["transform", "scaleX", '1'],
            ["style", "left", '23.01%'],
            ["style", "width", '61.61%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "hoverEnd": 500
         },
         timeline: [
            { id: "eid87", tween: [ "style", "${_Text}", "width", '92.7%', { fromValue: '92.7%'}], position: 500, duration: 0, easing: "easeInOutSine" },
            { id: "eid78", tween: [ "style", "${_calendar}", "width", '30.75%', { fromValue: '61.61%'}], position: 2, duration: 498, easing: "easeInOutSine" },
            { id: "eid73", tween: [ "transform", "${_calendar}", "scaleX", '1', { fromValue: '1'}], position: 2, duration: 0, easing: "easeInOutSine" },
            { id: "eid37", tween: [ "style", "${_circle}", "left", '-6.1%', { fromValue: '-6.1%'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_calendar}", "height", '28.23%', { fromValue: '56.6%'}], position: 2, duration: 498, easing: "easeInOutSine" },
            { id: "eid80", tween: [ "style", "${_Text}", "left", '4.62%', { fromValue: '3.46%'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid75", tween: [ "style", "${_calendar}", "top", '65.65%', { fromValue: '21.89%'}], position: 2, duration: 498, easing: "easeInOutSine" },
            { id: "eid35", tween: [ "style", "${_circle}", "width", '112.2%', { fromValue: '112.2%'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_calendar}", "scaleY", '1', { fromValue: '1'}], position: 2, duration: 0, easing: "easeInOutSine" },
            { id: "eid45", tween: [ "style", "${_Text}", "font-size", '295%', { fromValue: '173%'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "style", "${_circle}", "top", '-6%', { fromValue: '-6%'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid48", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 0, easing: "swing" },
            { id: "eid36", tween: [ "style", "${_circle}", "height", '110.06%', { fromValue: '110.06%'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid77", tween: [ "style", "${_calendar}", "left", '34.62%', { fromValue: '23.01%'}], position: 2, duration: 498, easing: "easeInOutSine" },
            { id: "eid46", tween: [ "style", "${_Text}", "top", '32.83%', { fromValue: '5.28%'}], position: 0, duration: 500, easing: "easeInOutSine" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-milestone");
