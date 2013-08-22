requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
   paths: {
        jquery: 							'//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.',
        jquery-ui:						'//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min',
        jquery-mobile:  			'//code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min',
        jquery-easing:				'//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min',
        dm14:									'dm/jquery.sizes',
        dm24:									'dm/jlayout.grid',
        dm34:									'dm/jquery.jlayout',
        dm44:									'dm/DeepMenu',
        hc-highcharts:				'hc/highcharts
        hc-exporting:   			'hc/modules/exporting',
        hc-funnel:      			'hc/modules/funnel',
        hc-annotations: 			'hc/modules/annotations',
        hc-canvas-tools:			'hc/modules/canvas-tools',
        hc-data:        			'hc/modules/data',
        hc-heatmap:     			'hc/modules/heatmap',
        hc-map:         			'hc/modules/map',
        flexslider:						'library/flexslider/jquery.flexslider-min',
        datatables:						'library/dataTables/jquery.dataTables.min',
        calender:							'library/fullcalendar/fullcalendar',
        gcal:									'library/fullcalendar/gcal',
        hotkeys:              'library/forms/jquery.hotkeys'
        bseditor:             'library/forms/bootstrap-wysiwyg',
        picker:               'library/forms/picker.js',       
        datepicker:           'library/forms/picker.date', 
        timepicker:           'library/forms/picker.time', 
        bswizard:             'library/forms/jquery.bootstrap.wizard.min',
        flot:                 'library/charts/jquery.flot					',
        flot-resize:          'library/charts/jquery.flot.resize	',
        flot-stack:           'library/charts/jquery.flot.stack		',
        flot-pie:             'library/charts/jquery.flot.pie.min	',
        sparkline:            'library/charts/jquery.sparkline.min',
        shcore     :          'library/syntaxHighlighter/shCore				 ',
        shbrushcss:           'library/syntaxHighlighter/shBrushCss		 ',
        shbrushxml:           'library/syntaxHighlighter/shBrushXml		 ',
        shbrushscript:        'library/syntaxHighlighter/shBrushJScript',
        bootstrap:						'bootstrap/js/bootstrap.min',
        xeditable:						'//cdnjs.cloudflare.com/ajax/libs/x-editable/1.4.5/bootstrap-editable/js/bootstrap-editable.min',
        prototype:						'//cdnjs.cloudflare.com/ajax/libs/prototype/1.7.1.0/prototype',
        raphael:							'liveicon/raphael			',
        livicon:             'liveicon/livicons-1.2',
        easypie:							'jquery.easy-pie-chart',
        hoveralls:						'hoveralls/jquery.hoveralls',
        gritter:							'gritter.min',
        custom:								'/styler/custom',
        morris:								'//cdn.oesmith.co.uk/morris-0.4.3.min',
        slimscroll:						'jquery.slimscroll',
        kpdemocharts:					'hc/democharts_kp',
        galgrid:							'grid',
        pbar:									'snips/pbar',
        fullscreen:						'snips/fullscreen',
        dash:									'snips/dash',
        clock:								'snips/clock',
        scharts:							'snips/charts',
        bee:									'snips/bee',
    } 
});

/ Start the main app logic.
requirejs(['jquery', 'jquery-ui', 'jquery-mobile', 'jquery-easing'],
function   ($,        canvas,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});