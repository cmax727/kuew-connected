/*-------Bee Menu----------------*/
$(function ($){
$('#bee_menu').deepMenu({
				tileW: 65,
				tileH: 65,
				columns: 8,
				rows: 1,
				duration: 200,
				//navIconBack: 'img/back_20x20.png',
				//navIconHome: 'img/icons/home_20x20.png',
				navIconHeight: 30,
				navIconWidth: 30,
				hGap: 10,
			});
$('.deep-menu-navigation').each(function() {
    $(this).insertAfter($(this).parent().find('.deep-menu-grid'));
});
});
	
	
