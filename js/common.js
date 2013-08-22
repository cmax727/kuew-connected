requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
   

   	 paths: {
        			
        jquerymobile:  			'//code.jquery.com/mobile/1.2.0/jquery.mobile1.2.0.min',
        
        dm14:									'./dm/jquery.sizes',
        dm24:									'./dm/jlayout.grid',
        dm34:									'./dm/jquery.jlayout',
        dm44:									'./dm/DeepMenu',
        hchighcharts:				'./hc/highcharts',
        hcexporting:   			'./hc/modules/exporting',
        hcfunnel:      			'./hc/modules/funnel',
        hcannotations: 			'./hc/modules/annotations',
        hccanvastools:			'./hc/modules/canvastools',
        hcdata:        			'./hc/modules/data',
        hcheatmap:     			'./hc/modules/heatmap',
        hcmap:         			'./hc/modules/map',
        flexslider:						'./library/flexslider/jquery.flexslidermin',
        datatables:						'./library/dataTables/jquery.dataTables.min',
        calender:							'./library/fullcalendar/fullcalendar',
        gcal:									'./library/fullcalendar/gcal',
        hotkeys:              './library/forms/jquery.hotkeys',
        bseditor:            	'./library/forms/bootstrap-wysiwyg',
        picker:               './library/forms/picker',       
        datepicker:           './library/forms/picker.date', 
        timepicker:           './library/forms/picker.time', 
        bswizard:             './library/forms/jquery.bootstrap.wizard.min',
        flot:                 './library/charts/jquery.flot					',
        flotresize:          	'./library/charts/jquery.flot.resize	',
        flotstack:           	'./library/charts/jquery.flot.stack		',
        flotpie:             	'./library/charts/jquery.flot.pie.min	',
        sparkline:            './library/charts/jquery.sparkline.min',
        shcore     :          './library/syntaxHighlighter/shCore				 ',
        shbrushcss:           './library/syntaxHighlighter/shBrushCss		 ',
        shbrushxml:           './library/syntaxHighlighter/shBrushXml		 ',
        shbrushscript:        './library/syntaxHighlighter/shBrushJScript',
        bootstrap:						'bootstrap.min',
        xeditable:						'//cdnjs.cloudflare.com/ajax/libs/xeditable/1.4.5/bootstrapeditable/js/bootstrapeditable.min',
        proto:						'//cdnjs.cloudflare.com/ajax/libs/prototype/1.7.1.0/prototype',
        
        livicon:							'./liveicon/livicons-1.2',
        easypie:							'jquery.easypiechart',
        hoveralls:						'hoveralls/jquery.hoveralls',
        gritter:							'gritter.min',
        custom:								'/styler/custom',
        morris:								'//cdn.oesmith.co.uk/morris0.4.3.min',
        slimscroll:						'jquery.slimscroll',
        kpdemocharts:					'hc/democharts_kp',
        galgrid:							'grid',
        pbar:									'snips/pbar',
        fullscreen:						'snips/fullscreen',
        dash:									'snips/dash',
        clock:								'snips/clock',
        scharts:							'snips/charts',
        bee:									'./snips/bee',
        dmjq:									'./dm/dmjq',
       
      },
      
     shim: {
     		'bootstrap': {
     			deps: ['jquery'], 
     			exports: 'bootstrap'
     		},
     	
     		'kpdemocharts':	{
     			deps: ['jquery','sparkline','hchighcharts', 'hcfunnel', 'hcmap', 'hcexporting', 'hcannotations', 'hccanvastools'],
     			exports: 'kpdemocharts'
     		},
     		'bee': {
     			deps: ['jquery','dm14', 'dm24', 'dm34', 'dm44', 'dmjq'], 
     			exports: 'bee',
     		
     		},
     		'grid':{
     			deps:['jquery', 'modernizr.grid'],
     			exports: 'grid',
     		},
     		'livicons' :{
     			deps:['jquery'],
     			exports: 'livicons'
     		},
     		'loader' :{
     			deps:['jquery'],
     			exports: 'loader'
     		},
     		'jqueryeasing':{
     			deps:['jquery'],
     			exports:'jqueryeasing'
     		},
     		
     	}
    });
    
requirejs(['jquery','bootstrap','livicons12', 'bee'], function($,bootstrap,livicons12,bee){});


