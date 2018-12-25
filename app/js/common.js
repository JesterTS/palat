$(document).ready(function(){
    $(".number-mask").mask("(380)-999-999-999");


    google.maps.event.addDomListener(window, "load", initMap);


});

/*Открытие блока контактов */
function openTabs(th,idBlock){
    $('.item_tabs').removeClass('active');
    $(th).addClass('active');
    $('.contact_page_block').hide();
    $('#'+idBlock).show();
}

