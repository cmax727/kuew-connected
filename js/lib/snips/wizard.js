jQuery(function($) {
    $("#addrole_wiz").wizard();
        
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
    }); // #create_kuew.wizard

    $("#currentUsersGrid").mixitup({
        filterSelector: '.userFilter',
        sortSelector:   '.userSort',
    });
        
    $('#teamAssign').mixitup();

    $('#assignedTeam').mixitup();
    

    $("#teamAssign, #assignedTeam").sortable({
        connectWith: ['.assignedList'],
        items: '.mix',
    });
    
    $("#teamAssign li").each(function () {
        var $member = $(this);
        var $name = $member.data('name');
        var $role = $member.data('role');
        var $team = $member.data('team');
        var $myName = $member.next(".teamName");

        $member.find(".teamName").html('<div class="span12">' + $name + '</div><div class="span12">' + $role + '</div>');
    });

    $("#currentUsersGrid li").each(function () {
        var $member = $(this);
        var $name = $member.data('name');
        var $role = $member.data('role');
        var $team = $member.data('team');
        var $myName = $member.next(".teamName");

        $member.find(".teamName").html('<div class="span12">' + $name + '</div><div class="span12">' + $role + '</div>');
    });
    
    $("#currentUsersGrid li").click(function() {
        $("#usersGrid").animate({"width" : "40%"}, 750, function (){
            $('#userProfile').toggleClass("animated").toggleClass("flipInX").show("slow");
        });
    });

    $('.close-button').click(function() {
        $('#userProfile').toggleClass("flipInX").toggleClass("flipOutY").hide('slow', function() {
            $("#usersGrid").animate({"width" : "95%"}, 750);
        });
    });

    $('.radio').click(function() {
        $(this).find('input:radio')[0].checked = true; 

        var value = $("input[name=ktypegroup]:checked").val();

        $ ('#whattype').hide().html(value + '<br><small>sweet.</small>' ).fadeIn();
    });
});