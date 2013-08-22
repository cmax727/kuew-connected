


(function($){
	$.fn.deepMenu = function(options)
   	{
		return this.each(function()
	   	{
	    	var element = $(this);
	    	
	    	/* Modify a class name in order to use JS-enabled CSS */
	    	element.attr('class',DeepMenu.DEEP_MENU_CLASS);
	      	
	       	/* Return early if this element already has a plugin instance */
	   		if (element.data('deep-menu-plugin')) return;
	
	   		var deepMenu = new DeepMenu(this, options);
			var firstLayer = element.children("ul:first");
			if( firstLayer.length ){
				deepMenu.init();
				deepMenu.showLayer(deepMenu.rootLayer);
			}

	   		/* Store plugin object in this element's data */
	  		element.data('deep-menu-plugin', deepMenu);
		});
   	};
	// ============================ jQuery plug-in ============================ //
});

