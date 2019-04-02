$(function() {
    $('#accordion .content').hide();
    $('#accordion h2:first').addClass('active').next().slideDown('slow');
    $('#accordion h2').click(function() {
        if($(this).next().is(':hidden')) {
            $('#accordion h2').removeClass('active').next().slideUp('slow');
            $(this).toggleClass('active').next().slideDown('slow');
        }
    });
});