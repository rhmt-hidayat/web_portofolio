// even saat di klik
$('.page-scroll').on('click', function (e) {


    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap element ybs
    var elementTujuan = $(tujuan);
    // pindah scroll
    $('body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 2000, 'easeInOutExpo');

    e.preventDefault();

});