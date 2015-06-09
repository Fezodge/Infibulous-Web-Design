$(document).ready(function() {
	
    $('button.menu-button').on('click', function() {
        alert($(this).toString());
        $(this).hide();
    });
});
	
});