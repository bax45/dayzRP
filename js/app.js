$('.gallery').flipster({
    stile:'carousel',
    spacing: -0.3,
});


var login = document.querySelector('#login');
var modal_bg = document.querySelector('.modal_bg');
var modal_close = document.querySelector('.modal_close');
login.addEventListener('click',function(){
    modal_bg.classList.add('modal_active');
});
modal_close.addEventListener('click',function(){
    modal_bg.classList.remove('modal_active');
});