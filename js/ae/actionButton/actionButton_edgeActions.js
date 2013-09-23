/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'actions'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_balloons}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element// play the timeline from the given position (ms or label)
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_balloons}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("actions");
   //Edge symbol end:'actions'

})(jQuery, AdobeEdge, "EDGE-balloons");