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
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_calendar}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_calendar}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("actions");
   //Edge symbol end:'actions'

})(jQuery, AdobeEdge, "EDGE-milestone");