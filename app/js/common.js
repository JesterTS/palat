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
/* marker maps */
function initMap() {
    var centerLatLng = new google.maps.LatLng(50.4501, 30.5234);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,               // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
        map: map,                             // Карта на которую нужно добавить маркер
        title: "Текст всплывающей подсказки", // (Необязательно) Текст выводимый в момент наведения на маркер,
        icon: "img/icon/map.png"             // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
    });
}

function CustominitMap(LatId, lngId,th) {
    $('.map_link').removeClass('active');
    $(th).addClass('active');
    var centerLatLng = new google.maps.LatLng(LatId, lngId);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,               // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
        map: map,                             // Карта на которую нужно добавить маркер
        title: "Текст всплывающей подсказки", // (Необязательно) Текст выводимый в момент наведения на маркер,
        icon: "img/icon/map.png"             // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
    });
    google.maps.event.addDomListener(window, "load", marker);
}
/*Открытие форы на страницы контактов */
function openContactForm(){
    var displayForm = $('.modal_form').css('display');
    if(displayForm === 'none'){
        $('.text_btn_contact_show').html('Показать карты');

    }else{
        $('.text_btn_contact_show').html('Задаты питання');
    }
    $('.modal_form').slideToggle(500);
}
