// 상단 : Navbar
var cnt = 0;
$('#badge').on('click', function(){
    cnt++;
    if(cnt % 2){
        $('#badge').html('🌞 Light Mode 🔄');
        $('body').addClass('dark');
        $('.navbar').addClass('navbar-dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('bg-dark');
        $('.navbar').removeClass('bg-light');
        $('#logo').addClass('dark');
        $('.btn-login').addClass('dark');
        $('.list-group-item').addClass('dark');
        $('.white-bg').addClass('dark');
        $('.btn').addClass('dark');
        $('.tab-button').addClass('dark');
    } else {
        $('#badge').html('🌝 Dark Mode 🔄');
        $('body').removeClass('dark');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('bg-light');
        $('.navbar').removeClass('bg-dark');
        $('#logo').removeClass('dark');
        $('.btn-login').removeClass('dark');
        $('.list-group-item').removeClass('dark');
        $('.white-bg').removeClass('dark');
        $('.btn').removeClass('dark');
        $('.tab-button').removeClass('dark');
    }
})

$('.navbar-toggler').eq(0).on('click', function(){
    $('.list-group').eq(0).slideToggle('show');
})

$(window).on('scroll', function(){
    if (window.scrollY > 100){
        $('#logo').css('font-size', '30px');
        $('.list-group').css('margin-top', '115px');
        $('.alert').css('margin-top', '115px');
    } else {
        $('#logo').css('font-size', '25px');
        $('.list-group').css('margin-top', '100px');
        $('.alert').css('margin-top', '100px');
    }
})