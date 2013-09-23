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
            rect:['0%','0%','100%','101.9%','auto','auto']
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
            ["style", "top", '-0.96%'],
            ["transform", "scaleY", '0.98119'],
            ["style", "height", '101.92%'],
            ["transform", "scaleX", '0.98115'],
            ["style", "left", '-0.94%'],
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
            { id: "eid72", tween: [ "transform", "${_actions}", "scaleY", '0.98119', { fromValue: '0.98119'}], position: 1000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Stage}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_actions}", "top", '-0.96%', { fromValue: '-0.96%'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_actions}", "left", '-0.94%', { fromValue: '-0.94%'}], position: 1000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Stage}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "transform", "${_actions}", "scaleX", '0.98115', { fromValue: '0.98115'}], position: 1000, duration: 0 }         ]
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
      rect: ['-5.6%','-3.6%','109.6%','107.5%','auto','auto'],
      id: 'balloons',
      transform: [[],[],[],['0.89123','0.89123']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/balloons.png','0px','0px']
   },
   {
      rect: ['13.1%','34.3%','74.2%','21.1%','auto','auto'],
      font: ['open-sans, sans-serif',[150,'%'],'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'actions',
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
            ["style", "left", '13.08%'],
            ["style", "font-size", '173%'],
            ["style", "top", '5.66%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '21.13%'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '74.24%']
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
         "${_balloons}": [
            ["style", "top", '-4.08%'],
            ["transform", "scaleY", '0.89123'],
            ["transform", "scaleX", '0.89123'],
            ["style", "height", '110.06%'],
            ["style", "left", '-6.11%'],
            ["style", "width", '112.2%']
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
            { id: "eid41", tween: [ "style", "${_balloons}", "top", '25.09%', { fromValue: '-4.08%'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid27", tween: [ "style", "${_balloons}", "left", '-6.11%', { fromValue: '-6.11%'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_circle}", "left", '-6.1%', { fromValue: '-6.1%'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "transform", "${_balloons}", "scaleY", '0.66', { fromValue: '0.89123'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "style", "${_circle}", "top", '-6%', { fromValue: '-6%'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_circle}", "width", '112.2%', { fromValue: '112.2%'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_balloons}", "scaleX", '0.66', { fromValue: '0.89123'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid45", tween: [ "style", "${_Text}", "font-size", '295%', { fromValue: '173%'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid23", tween: [ "style", "${_balloons}", "height", '110.06%', { fromValue: '110.06%'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_balloons}", "width", '112.2%', { fromValue: '112.2%'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_circle}", "height", '110.06%', { fromValue: '110.06%'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutSine" },
            { id: "eid47", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid48", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 0, easing: "swing" },
            { id: "eid46", tween: [ "style", "${_Text}", "top", '32.83%', { fromValue: '5.66%'}], position: 0, duration: 500, easing: "easeInOutSine" }         ]
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
})(jQuery, AdobeEdge, "EDGE-balloons");
