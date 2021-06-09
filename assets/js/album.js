ScrollOut({
  targets:'.scroll-ani .card'
})

//when it first reload, it gonna check
check($(window).width())

$(window ).resize(function() {
  check($(window).width())
});

function check(){
  if ($(window).width() < 768) {
    $('#album-row').addClass('flex-row flex-nowrap overflow-auto');
    $('#navbarHeader').addClass('fixed-bottom');
    $('.close-btn').removeClass('d-none');
    ScrollOut({
      targets: '.scroll-ani'
    })
  }
  //bigger
  if ($(window).width() > 768) {
    $('#album-row').removeClass('flex-row flex-nowrap overflow-auto');
    $('#navbarHeader').removeClass('fixed-bottom');
    $('.close-btn').addClass('d-none');
    ScrollOut({
      targets: '.scroll-ani, .card'
    })
  }
}
