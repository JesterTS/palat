$(document).ready(function(){
    
});

function slideFaq(id){
    var visibleContent = $('#content-faq-'+id).css('display');

    if(visibleContent === 'none'){
        $('#btn-faq-'+id).removeClass('btn-open-faq');
        $('#btn-faq-'+id).addClass('btn-close-faq');
    }else{
       
        $('#btn-faq-'+id).addClass('btn-open-faq');
        $('#btn-faq-'+id).removeClass('btn-close-faq');
    }
    $('#content-faq-'+id).slideToggle(400);
    
}
function openAuthMenu(){
    $('.block-auth-content').css('top','0px');
}
function closeAuthMenu(){
    var heightBlock = $('.block-auth-content').height();
    heightBlock = heightBlock + 70;
    $('.block-auth-content').css('top','-'+heightBlock+'px');
}
function openMenu(){
    $('.menu-header').css('right','0px');
}
function closeMenu(){
    $('.menu-header').css('right','-250px');
}

function gameStart(){
    $('.content-chat-block').show();
    $('.btn-start-game').hide();
    $('.line-rull').addClass('animation-rull');
}
function openListUser(){
    $('.chat-list-user').show();
}
function closeListUser(){
    $('.chat-list-user').hide();
}
function closeModal(){
    $('.modal_winner-2').hide();
    $('.modal_winner').hide();
}