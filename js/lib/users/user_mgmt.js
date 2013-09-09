$(function(){
	
	//add role wizard
            $("#addrole_wiz").wizard();

//create kuew wizard
        
        $("#create_kuew").wizard({
                    transitions: {
                        kuewOrsub: function( $step, action ) {
                            var branch = $step.find("[name=kuewOrsub]:checked").val();
                            

                            if (!branch) {
                                alert("Please select a value to continue.");
                            }

                            return branch;
                        
                      },
                    kuewOpts: function( $step, action ) {
                        var branches = $step.find("[name=kuewOpts]:checked").val(); 
                        
                        if (!branches) {
                            alert("You need at least a Kuew!");
                        }
                        return branches;
                },
            },
        });
        
//end create kuew wizard

//begin user grid
        $("#currentUsersGrid").mixitup({
            filterSelector: '.userFilter',
            sortSelector:   '.userSort',
        });
            
    $('#teamAssign').mixitup();

    $('#assignedTeam').mixitup();
        

//end user grid

//begin team assign to kuew sortable

    $("#teamAssign, #assignedTeam").sortable({
            connectWith: ['.assignedList'],
            items: '.mix',
        });

//end team assign to kuew sortable

//begin team data filter stuff

        
    $("#teamAssign li").each(function () {
            var $member = $(this);
            var $name = $member.data('name');
            var $role = $member.data('role');
            var $team = $member.data('team');
            var $myName = $member.next(".teamName");

        $member.find(".teamName").html('<div class="span12">' + $name + '<\/div><div class="span12">' + $role + '<\/div>');
        });

    $("#currentUsersGrid li").each(function () {
            var $member = $(this);
            var $name = $member.data('name');
            var $role = $member.data('role');
                var $team = $member.data('team');
            var $myName = $member.next(".teamName");

        $member.find(".teamName").html('<div class="span12">' + $name + '<\/div><div class="span12">' + $role + '<\/div>');
        });
 //end team data filter stuff
 
 //begin user transitons   
       
     $("#currentUsersGrid li").click(function() {
    $("#usersGrid").toggleClass("animated").toggleClass("flipOutX").hide('slow', function (){
    $('#userProfile').toggleClass("animated").toggleClass("flipInX").show("slow");
    });
    });
     $('#userProfile > div.close-button').click(function() {
    $('#userProfile').toggleClass("flipInX").toggleClass("flipOutX").hide('slow', function() {
    $("#usersGrid").show('slow').toggleClass("flipInX").toggleClass("flipOutX");
    });
    });
 

	   
     $("#viewDeptButton").click(function() {
    $("#usersGrid").toggleClass("animated").toggleClass("flipOutX").hide("slow", function (){
    $('#viewDept').toggleClass("animated").toggleClass("flipInX").show("slow");
    });
    });
     $('#deptGoBack').click(function() {
    $('#viewDept').toggleClass("flipInX").toggleClass("flipOutX").hide("slow", function() {
    $("#usersGrid").show("slow").toggleClass("flipInX").toggleClass("flipOutX");
    });
    });
    
      $('#usersGoBack').click(function() {
    $('#usersSlide').toggleClass("animated").toggleClass("flipOutX").toggleClass("slidePageInFromLeft")
    });
    
     $('#profileGoBack').click(function() {
    $('#userProfile').toggleClass("flipInX").toggleClass("flipOutX").hide("slow", function() {
    $("#usersGrid").show("slow").toggleClass("flipInX").toggleClass("flipOutX");
    });
    });
    
     $('#deptGoBack2').click(function() {
    $('#userProfile').toggleClass("flipInX").toggleClass("flipOutX").hide("slow", function() {
    $("#usersGrid").show("slow").toggleClass("flipInX").toggleClass("flipOutX");
    });
    });
    
    $('#addUsrBtn').click(function() {
    $('#viewDept').toggleClass("flipInX").toggleClass("flipOutX").hide("slow", function() {
    $("#addUser").show("slow").toggleClass("animated").toggleClass("flipInX");
    });
    });
    
    $('#viewDept .quickhover').click(function() {
    $('#viewDept').toggleClass("flipInX").toggleClass("flipOutX").hide("slow", function() {
    $("#userProfile").show("slow").toggleClass("flipInX").toggleClass("flipOutX");
    });
    });
    
    //end transitions
    
    //div slimscrolls for user
 
 		$('.deptScroll').slimScroll({
 			height: '326px',
 			 		});
 	
 	//user mgmt popovers
 	
 		
// 		$('.mix').mouseenter(function() {
// 			var self = $(this);	
// 			var $profileModal = $('#userProfileModal');
// 			
// 			$profileModal.toggleClass("animated").toggleClass("fadeIn", function() {
// 			$(this).modal('toggle')});
// 		});
// 		
// 		$('.mix').mouseleave(function() {
// 			var self = $(this);	
// 			var $profileModal = $('#userProfileModal');
// 			
// 			$profileModal.toggleClass("fadeOut", function() {
// 			$(this).modal('toggle')});
// 		});

	$('.mix').popover({
		
			html: true,
		
			trigger: 'hover',
			placement: 'top',
			 content: '#userPopover',
    
  });

 			

   
    
    //$('.close-button').click(function() {
    //$('#userProfile').toggleClass("flipInX").toggleClass("flipOutX").hide('slow', function() {
    //$("#usersGrid").show('slow').toggleClass("flipInX").toggleClass("flipOutX");
    //});
    //});
    $("#userFilter div[data-filter]").each(function () {
    var div = $(this);
    var classFilters = div.data('filter').split(' ');
    var selector = [];

    for (var i = 0; i < classFilters.length; i++) {
        selector.push("li." + classFilters[i]);
    }

    div.hover(function () {
        $("#currentUsersGrid").find(selector.join(", ")).addClass("selected");
    }, function () {
        $("#currentUsersGrid").find(selector.join(", ")).removeClass("selected");
    });

    });
$('.radio').click(function() {
    $(this).find('input:radio')[0].checked = true; 

    var value = $("input[name=ktypegroup]:checked").val();

    $ ('#whattype').hide().html(value + '<br><small>sweet.<\/small>' ).fadeIn();
    });


//role summary script
    
     $("#addRoleToSummary").click(function () {
    var nameMe = $('#newRoleName').val();
    var summaryName = $('#roleNameSummary');
    var summaryBased = $('#roleBasedSummary');
    var summaryParent = $('#roleParentSummary');
    var basedRoleValue = $('#basedRole').val();
    var parentRoleValue = $('#parentRole').val();
    var basedRoleName = $('#basedRole option:selected').text();
    var parentRoleName = $('#parentRole option:selected').text();
    var parentLabel = $('label[for=parentRole]').text();
    var basedLabel = $('label[for=basedRole]').text();


    $(summaryName).html('<h1>' + nameMe + '<\/h1>');
    $(summaryParent).html('<strong>' + parentLabel + '<\/strong>' + parentRoleName);
    $(summaryBased).html('<strong>' + basedLabel + '<\/strong>' + basedRoleName);
    $("input:checkbox[name=addRole]:checked").each(function () { 
        var label = $(this).closest('.row-fluid').find('.wizcell-label');
        var labelValue = $(label).html();
      
      
      $('#roleReportsSummary ul').append('<li><span>' + labelValue + '<\/span><\/li>');
    });

    });
    
//end role summaary

//user skills array
var tokenInput = $('#skillsInput').tokenizer({
    source: ['HTML5', 'PHP', 'JQuery', 'Graphic Design', 'UI', 'Marketing', 'Market Research', 'Social Media', 'Social Media Marketing', 'Facebook Marketing', 'LinkedIn', 'Email Marketing', 'MySql', 'Kuew', 'Human Resources', 'Management '],
    allowUknownTags: false,
    separators: [', ', ' ', '.']
    });
 });   
//4('#skillsInput').focusout(function () {
//	var list = $('#UserSkillList');
	