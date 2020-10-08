$('#menu-btn').click(function(){
    $('#content-wrapper').css('width','100%');
    $('#content-wrapper').css('transform','translate(0%)');
    $('#l-sidebar').css('transform','translate(0%)');
});

$('#close__btn').click(function(){
    $('#content-wrapper').css('width','0%');
    $('#content-wrapper').css('transform','translate(100%)');
    $('#l-sidebar').css('transform','translate(100%)');
});