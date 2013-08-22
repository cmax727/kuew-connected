/**
 * @author alu
 * DeepMenu v1.0
 * 2013-06-16
 */

(function($) {

	// ============================ DeepMenu ============================ //
	var DeepMenu = function(element,options){
		this.element = $(element);	// (JQ) DOM element of the menu (root)
		this.currentLayer = null;	// DeepMenuLayer which is currently visible
		this.rootLayer = null;		// DeepMenuLayer
		this.layers = [];			// array of DeepMenuLayers
		this.options = options;
		this.navigation = null;		// DeepMenuNavigation
		this.markElement = null;	// (JQ) DOM element (on tile corner) which indicates if tile points to the deeper layer
		this.nextLayer = null;		// layer which is going to be shown after the current one hides itself
		this.animationType = null;
		this.actionsLocked = false; // used for actions locking while doing transitions
		this.hoverBackground = null;
		this.textColor = null;
        this.duration = null;
	};
	
	/* Class names */
	DeepMenu.DEEP_MENU_CLASS = "deep-menu-js";
	DeepMenu.DEEP_MENU_GRID_CLASS = "deep-menu-grid";
	DeepMenu.DEEP_MENU_NAVIGATION_CLASS = "deep-menu-navigation";
	DeepMenu.DEEP_MENU_NAVIGATION_HOME_CLASS = "deep-menu-navigation-home";
	DeepMenu.DEEP_MENU_NAVIGATION_BACK_CLASS = "deep-menu-navigation-back";
	DeepMenu.DEEP_MENU_TILE_MARK_CLASS_PREFIX = "deep-menu-tile-mark-";

	DeepMenu.prototype.setActionsLocked = function(locked){
		this.actionsLocked = locked;
	};
	
	DeepMenu.prototype.getPropertyValue = function(property){
	    var value = this.options[property];
	    if(typeof value === 'undefined'){
	        if(property == 'hGap'){
	             value = 0;
	        }else if(property == 'vGap'){
	            value = 0;
	        }else if(property == 'animation'){
	            value = 'center';
	        }else if(property == 'mark-width'){
	            value = 10;
	        }else if(property == 'navIconBack'){
	            value = 'img/back_20x20.png';
	        }else if(property == 'navIconHome'){
	            value = 'img/home_20x20.png';
	        }else if(property == 'navIconHeight'){
	            value = 20;
	        }else if(property == 'navIconWidth'){
	            value = 20;
	        }else if(property == 'hover-background'){
	            value = 'transparent';
	        }else if(property == 'text-color'){
	            value = '#000000';
	        }else if(property == 'static-nav'){
                value = false;
            }else if(property == 'mark-color'){
                value = '#FFFFFF';
            }else if(property == 'duration'){
                value = 800;
            }
	    }
		return value;
	};
	
	DeepMenu.prototype.isNextLayerWaiting = function(){
        return this.nextLayer;
	};
	
	/* Goes to the first layer */
	DeepMenu.prototype.home = function(){
		if(!this.currentLayer.element.is(this.rootLayer.element) && !this.actionsLocked){
			this.showLayer(this.rootLayer);
		}
	};

	/* Goes to the previous layer */
	DeepMenu.prototype.back = function(){
		var previousLayer = this.currentLayer.previousLayer;
		if( previousLayer && !this.actionsLocked){
			this.showLayer(previousLayer);
		}
	};
	
	/* Sets the layer which is currently visible */
	DeepMenu.prototype.setCurrentLayer = function(layer){
		this.currentLayer = layer;
	};
	
	/* Adds a new layer */
	DeepMenu.prototype.addLayer = function(layer){
		this.layers.push(layer);
	};
	
	/* Creates mark which indicates that tile points to the deeper layer */
	DeepMenu.prototype.generateMark = function(markType){
		var markElement = $("<div></div>");
		var markTypeRecognized = true;
		
		var borderColor = this.getPropertyValue("mark-color");
		var borderWidth = this.getPropertyValue("mark-width");
		
		var transparentBorderPart = borderWidth+"px solid transparent";
		var visibleBorderPart = borderWidth+"px solid "+borderColor;
		
		if(markType === 'top-left'){
			markElement.css({"border-right": transparentBorderPart,"border-top": visibleBorderPart,"top": "0px","left": "0px"});	
		}else if(markType === 'top-right'){
			markElement.css({"border-right": visibleBorderPart,"border-bottom": transparentBorderPart,"top": "0px","right": "0px"});	
		}else if(markType === 'bottom-right'){
			markElement.css({"border-left": transparentBorderPart,"border-bottom": visibleBorderPart,"bottom": "0px","right": "0px"});
		}else if(markType === 'bottom-left'){
			markElement.css({"border-left": visibleBorderPart,"border-top": transparentBorderPart,"bottom": "0px","left": "0px"});
		}else{
			markTypeRecognized = false;
		}
		
		if(markTypeRecognized){
			markElement.attr('class',DeepMenu.DEEP_MENU_TILE_MARK_CLASS_PREFIX+markType);
		}else{
			markElement = null;
		}
		
		return markElement;
	};
	
	/* Traverses the menu tree and creates layer hierarchy */
	DeepMenu.prototype.traverseMenuTree = function(layerElement, pointingTile){
		var self = this;
		var layerElementTiles = $(layerElement).children("li");
		/* Check if given layer has any tiles */
		if( layerElementTiles.length ){
			var layer = new DeepMenuLayer(layerElement, self);
			
			/* If not pointing tile is provided, current layer is root and
			   there are no tiles which point to this layer. */
			if(pointingTile){
				pointingTile.setChildLayer(layer);
				layer.setPreviousLayer(pointingTile.layer);
			}else{
				self.rootLayer = layer;
			}
			$.each(layerElementTiles,function(){
				var tileElement = $(this).children("div").first();
				
				tileElement.hover(
                    function(){ $(this).css('background-color', self.hoverBackground);},
                    function(){ $(this).css('background-color','transparent');}
                ).find('a').css('color',self.textColor);

                $('img',tileElement).after('<br/>');
				
				/* Check if tile div element was found and create tile */
				var tile = null;
				if( tileElement.length ){
					tile = new DeepMenuLayerTile(tileElement,layer);
					tile.setSize(self.getPropertyValue("tileW"), self.getPropertyValue("tileH"));
					layer.addTile(tile);
				}
				
				/* Start recursion if current tile points to child layer */
				var childLayer = $(this).children("ul");
				if( childLayer.length ){
					/* If deeper layer indicator is generated, attach it to the tile. */
					if(self.markElement){
						tile.element.append(self.markElement.clone());
					}
					self.traverseMenuTree(childLayer[0], tile);
				}
			});
			self.addLayer(layer);
		}
	};
	
	/* Traverses menu tree, creates grid layers and adds navigation */
	DeepMenu.prototype.init = function(){
        this.duration = this.getPropertyValue('duration')/2;
	    this.textColor = this.getPropertyValue('text-color');
	    this.hoverBackground = this.getPropertyValue('hover-background');
	    this.animationType = this.getPropertyValue('animation');
	    
		/* Generate mark, which is used to indicate whether tile links to the deeper layer */	
		this.markElement = this.generateMark(this.getPropertyValue('mark-type'));
		
		var rootLayerElement = this.element.children("ul:first");
		if( rootLayerElement.length ){
			this.traverseMenuTree(rootLayerElement, null);
		}
		var navigationInstance = new DeepMenuNavigation(this);
		navigationInstance.init();
		
		this.navigation = navigationInstance;

   //     this.element.css("margin-top",this.getPropertyValue('navIconHeight')+"px");

        if(!this.getPropertyValue("static-nav")){
            this.element.mouseover(function(){
                navigationInstance.setNavigationVisibility(true);
            });

            this.element.mouseout(function(){
                navigationInstance.setNavigationVisibility(false);
            });

            this.navigation.element.mouseover(function(){
                navigationInstance.setNavigationVisibility(true);
            });

            this.navigation.element.mouseout(function(){
                navigationInstance.setNavigationVisibility(false);
            });
        }
	};
	
	/* Shows given DeepMenuLayer */
	DeepMenu.prototype.showLayer = function(deepMenuLayer){
		this.setActionsLocked(true);
		
		/* Indicates if transition between layers is needed */
		var doTransition = true;
		
		if( !this.currentLayer ){
			doTransition = false;
		}
		
		var doLayout = false;
		if(!deepMenuLayer.getGridBox()){
			deepMenuLayer.constructGrid();
			doLayout = true;
		}
		
		if(doTransition){
			deepMenuLayer.getGridBox().hide();
		}
		
		this.element.append(deepMenuLayer.getGridBox());
		
		if(doLayout){
			deepMenuLayer.layoutGrid();	
		}
		
		/* Does transition between two layers 
		   (hides current layer and shows next one) */
		if(doTransition){
			/* Put next layer into the hidden state */
			deepMenuLayer.animateTiles(this.animationType,true,0);
			
			/* Set the layer which is waiting to be showed */
			this.nextLayer = deepMenuLayer;

            this.navigation.handleStaticNavigation(deepMenuLayer);

			/* Hide current layer and show the next layer */
			this.currentLayer.animateTiles(this.animationType,true,this.duration);

		}else{
			this.setCurrentLayer(deepMenuLayer);
			this.setActionsLocked(false);
			this.element.css('width',deepMenuLayer.getGridBox().width());
		}
		
		
	};
	// ============================ DeepMenu ============================ //
	
	// ============================ DeepMenuNavigation ================== //
	var DeepMenuNavigation = function(deepMenu){
		this.element = null;			// (JQ) DOM element of the navigation object
		this.homeElement = null;		// (JQ) DOM element of the home 'button'
		this.backElement = null;		// (JQ) DOM element of the back 'button'
		this.deepMenu = deepMenu;
		this.homeImage = null;
		this.backImage = null;
		this.visible = false;
		this.navigationTimeout = null;	// timer for the hide event
		this.delay = 1000;				// how much time to wait until hide event
	};

    /* If navigation is static and current layer has parent layer, icons will be always visible */
    DeepMenuNavigation.prototype.handleStaticNavigation = function(layer){
        if(layer.previousLayer){
            this.showNavigation();
        }else{
            this.hideNavigation();
        }
    };
	
	/* Creates navigation elements */
	DeepMenuNavigation.prototype.init = function(){
		this.element = $("<div></div>");
		this.element.attr('class',DeepMenu.DEEP_MENU_NAVIGATION_CLASS);
		
		this.homeElement = $("<div></div>");
		this.homeElement.attr('class',DeepMenu.DEEP_MENU_NAVIGATION_HOME_CLASS);
		
		this.backElement = $("<div></div>");
		this.backElement.attr('class',DeepMenu.DEEP_MENU_NAVIGATION_BACK_CLASS);
		
		this.backElement.appendTo(this.element);
		this.homeElement.appendTo(this.element);
		
		this.homeImage = new Image();
		this.homeImage.src = this.deepMenu.getPropertyValue('navIconHome');
		
		this.backImage = new Image();
		this.backImage.src = this.deepMenu.getPropertyValue('navIconBack');
		
		
		this.homeElement.append(this.homeImage);
		this.backElement.append(this.backImage);
		
		var deepMenu = this.deepMenu;
		this.homeElement.click(function(){
			deepMenu.home();
		});
		
		this.backElement.click(function(){
			deepMenu.back();
		});
		
		var navigationIconHeight = this.deepMenu.getPropertyValue('navIconHeight');
		this.element.height(navigationIconHeight);
		this.deepMenu.element.append(this.element);
		
		this.backElement.hide().css('margin-left',navigationIconHeight+'px');
		this.homeElement.hide().css('margin-left',navigationIconHeight+'px');
	};
	
	/* Shows/hides navigation and controls timer which is resposible for this transition */
	DeepMenuNavigation.prototype.setNavigationVisibility= function(show){
	    /* do not show navigation buttons if current layer is the first one */
		if(show && this.deepMenu.currentLayer.previousLayer){
			clearTimeout(this.navigationTimeout);
			this.showNavigation();	
		}else{
			clearTimeout(this.navigationTimeout);
			var self = this;
			self.navigationTimeout = setTimeout(function(){
				self.hideNavigation();
			},self.delay);
		}
	};
	
	/* Shows navigation */
	DeepMenuNavigation.prototype.showNavigation = function(){
		var self = this;
		if(!self.visible){
			this.homeElement.animate({opacity:'show','margin-left':'0px'},'normal','swing',function(){
				self.visible = true;
			});
			this.backElement.animate({opacity:'show','margin-left':'0px'},'normal','swing');
		}
	};
	
	/* Hides navigation */
	DeepMenuNavigation.prototype.hideNavigation = function(){
		var self = this;
		if(self.visible){
			this.homeElement.animate({opacity:'hide','margin-left':'+=20'},'normal','swing',function(){
				self.visible = false;
			});
			this.backElement.animate({opacity:'hide','margin-left':'+=20'},'normal','swing');	
		}
	};
	// ============================ DeepMenuNavigation ================== //

	// ============================ DeepMenuLayer ============================ //
	var DeepMenuLayer = function(element,deepMenu){
		this.element = $(element);	// (JQ) DOM element of the layer
		this.tiles = [];			// Array of DeepMenuLayerTile
		this.deepMenu = deepMenu;
		this.previousLayer = null;	// Parent DeepMenuLayer
		this.gridBoxElement = null;	// (JQ) DOM element which holds all tiles
		this.gridWidth = null;
		this.gridHeight = null;
		this.transitionCount = 0; 	// Counts how many tiles finished transition.
									// If transitionCount == tiles.length - all tiles finished transition.
	};
	
	DeepMenuLayer.prototype.resetTransitionCount = function(){
		this.transitionCount = 0;
	};
	
	/* Keeps track of tiles which are in transition */
	DeepMenuLayer.prototype.tileTransitionFinished = function(isRevert, doNothing){
		if(typeof doNothing === 'undefined'){
			doNothing = false;
		}
		this.transitionCount++;
		if(this.transitionCount == this.tiles.length && !doNothing){
			if(isRevert){
				if(this.deepMenu.isNextLayerWaiting()){
					this.swapLayers(this.deepMenu.nextLayer);
				}
			}else{
				this.deepMenu.setActionsLocked(false);
			}			
		}
	};

	/* Swaps layers: given layer will be shown instead of the current one */
	DeepMenuLayer.prototype.swapLayers = function(layer){
		var self = this;
		/* Hide current layer without collapsing while resizing */
		self.getGridBox().css('visibility','hidden');
		
		/* Make current layer same size as the next layer */
		self.getGridBox().animate({width:layer.getGridBox().css("width"),
								   height:layer.getGridBox().css("height")},400,
		function(){
				/* Detach current layer and restore its size */
				self.getGridBox().detach();
				self.restoreSize();
				
				/* Make next layer visible */
				layer.getGridBox().show().css('visibility','visible');

                $.each(layer.tiles,function(){
                    this.resetHoverState();
                });
				
				/* Animate tiles of the next layer */
				layer.animateTiles(self.deepMenu.animationType,false,self.deepMenu.duration);
				
				/* Mark next layer as the current layer (end of swapping) */
				self.deepMenu.setCurrentLayer(layer);
				
				/* No next layer is waiting to be showed */
				self.deepMenu.nextLayer = null;
		}
		);
	};

	// Calls specified animation type.
	// isRevert	: true - hides tiles, false - shows tiles.
	// speed	: animation speed (same as used in jQuery animation function)
	// callback	: function which will be called when last tile's animation ends (works only for revert animation)
	DeepMenuLayer.prototype.animateTiles = function(animationType, isRevert, speed){
		this.resetTransitionCount();
		if(animationType == 'diagonal'){
			this.animationDiagonal(isRevert, speed);
		}else if(animationType == 'center'){
			this.animationCenter(isRevert, speed);
		}else if(animationType == 'top'){
			this.animationTop(isRevert, speed);
		}else if(animationType == 'left'){
			this.animationLeft(isRevert, speed);
		}
	};
	
	/* Animation type: each tile starts transition from its center position */
	DeepMenuLayer.prototype.animationCenter = function(isRevert, speed){
		var self = this;
		var currentTile;
		for(var i=0 ; i<this.tiles.length; i++){
			currentTile = this.tiles[i];
			if(!isRevert){
				if(currentTile.restorePosition()){
					currentTile.element.css({'left':"+="+currentTile.width/2, 'top' :"+="+currentTile.height/2});
				}

				currentTile.element.animate({height:currentTile.height+'px', width :currentTile.width+'px',
										     left  :"-="+currentTile.width/2, top:"-="+currentTile.height/2,
									  		 opacity:1},speed,
									  		 function(){
									  		 	self.tileTransitionFinished(false);
									  		 }
				);
			}else{
				if(self.deepMenu.isNextLayerWaiting()){
					var tilePosition = currentTile.element.position();
					currentTile.setDefaultPosition(tilePosition.left,tilePosition.top);
				}
				currentTile.element.animate({width:'0px',height:'0px',
											 left:"+="+currentTile.width/2,top:"+="+currentTile.height/2,
											 opacity:0},speed,
											 function(){
												self.tileTransitionFinished(true,!speed);
											 }
				);
			}
		}
	};
	
	/* Animation type: each tile starts transition from its corner (upper left corner) */
	DeepMenuLayer.prototype.animationDiagonal = function(isRevert, speed){
		var self = this;
		if(!isRevert){
			$.each(this.tiles,function(){
				this.element.animate({height:this.height+'px',
									  width :this.width+'px'},speed,function(){
									  	self.tileTransitionFinished(false);
									  });
			});
		}else{
			$.each(this.tiles,function(){
				this.element.animate({width:'0px',height:'0px'},speed,function(){
					self.tileTransitionFinished(true,!speed);
				});
			});
		}
	};
	
	DeepMenuLayer.prototype.animationTop = function(isRevert, speed){
		var self = this;
		if(!isRevert){
			$.each(this.tiles,function(){
				this.element.animate({height:this.height+'px'},speed,function(){
					self.tileTransitionFinished(false);	
				});
			});
		}else{
			$.each(this.tiles,function(){
					this.element.animate({height:'0px'},speed,function(){
					self.tileTransitionFinished(true,!speed);	
				});
			});
		}
	};
	
	DeepMenuLayer.prototype.animationLeft = function(isRevert, speed){
		var self = this;
		if(!isRevert){
			$.each(this.tiles,function(){
				this.element.animate({width:this.width+'px'},speed,function(){
					self.tileTransitionFinished(false);	
				});
			});
		}else{
			$.each(this.tiles,function(){
					this.element.animate({width:'0px'},speed,function(){
					self.tileTransitionFinished(true,!speed);	
				});
			});
		}
	};
	
	DeepMenuLayer.prototype.setPreviousLayer = function(layer){
		this.previousLayer = layer;
	};
	
	DeepMenuLayer.prototype.addTile = function(tile){
		this.tiles.push(tile);
	};
	
	DeepMenuLayer.prototype.getGridBox = function(){
		return this.gridBoxElement;
	};
	
	/* Calculates how should grid expand */
	DeepMenuLayer.prototype.getGridDimensions = function(totalItems, columns, rows ){
		var calculatedColumns = columns;
		var calculatedRows = Math.ceil(totalItems/columns);
		if(calculatedRows > 1){
			if(calculatedRows > rows){
				calculatedColumns = Math.ceil(totalItems/rows);
				calculatedRows = rows;
			}
		}else{
			calculatedRows = 1;
		}
		
		return [calculatedColumns,calculatedRows];
	};
	
	/* Layouts all the tiles of the constructed grid */
	DeepMenuLayer.prototype.layoutGrid = function(){
		var dimensions = this.getGridDimensions(this.tiles.length,
						  					    this.deepMenu.getPropertyValue('columns'),
						  					    this.deepMenu.getPropertyValue('rows'));

		var hGap = this.deepMenu.getPropertyValue('hGap');
		var vGap = this.deepMenu.getPropertyValue('vGap');

		this.getGridBox().layout({
			type: 'grid',
			columns:dimensions[0],
			rows:dimensions[1],
			hgap:hGap,
			vgap:vGap
		});
		this.gridHeight = this.gridBoxElement.outerHeight(false);
		this.gridWidth = this.gridBoxElement.outerWidth(false);
	};
	
	/* Restores grid size to the default */
	DeepMenuLayer.prototype.restoreSize = function(){
	    this.getGridBox().css({height:this.gridHeight+"px",
	                           width:this.gridWidth+"px"});
	};
	
	/* Constructs the grid of all the tiles which belong to the layer */
	DeepMenuLayer.prototype.constructGrid = function(){
	    var self = this;
		var gridClassElement = $("<div></div>");
		gridClassElement.attr('class',DeepMenu.DEEP_MENU_GRID_CLASS);
		$.each(this.tiles,function(){
			this.element.appendTo(gridClassElement);
			var childLayer = this.getChildLayer();
			if(childLayer){
				this.element.click(function(){
					if(!self.deepMenu.actionsLocked){
						self.deepMenu.showLayer(childLayer);	
					}
				});
			}
		});
		
		this.gridBoxElement = gridClassElement;
	};
	// ============================ DeepMenuLayer ============================ //
	
	// ============================ DeepMenuLayerTile ======================== //
	var DeepMenuLayerTile = function(tileElement, layer){
		this.element = $(tileElement);				// (JQ) DOM element for the tile object
		this.layer = layer;							// DeepMenuLayer which contains this tile
		this.childLayer = null;						// DeepMenuLayer which can be reached from this tile
		this.width = 0;
		this.height = 0;
		this.defaultPosition = {left:-1,top:-1};
	};

    DeepMenuLayerTile.prototype.resetHoverState = function(){
        this.element.mouseleave();
    };
	
	DeepMenuLayerTile.prototype.restorePosition = function(){
		if(this.defaultPosition.left >= 0 && this.defaultPosition.top >= 0){
			this.element.css({left: this.defaultPosition.left+"px",
			                  top : this.defaultPosition.top+"px"});
			return true;
		}else{
			return false;
		}
	};
	
	DeepMenuLayerTile.prototype.setDefaultPosition = function(left,top){
		this.defaultPosition.left = left;
		this.defaultPosition.top = top;
	};
	
	DeepMenuLayerTile.prototype.setSize = function(width,height){
	    this.width = width;
	    this.height = height;
		this.element.css({width : width+'px',
		                  height: height+'px'});
	};
	
	/* Layer which will be shown, if tile is clicked */
	DeepMenuLayerTile.prototype.setChildLayer = function(layer){
		this.childLayer = layer;
	};
	
	DeepMenuLayerTile.prototype.getChildLayer = function(){
		return this.childLayer;
	};
	
	// ============================ DeepMenuLayerTile ======================== //
	
	// ============================ jQuery plug-in ============================ //
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
})(jQuery);
