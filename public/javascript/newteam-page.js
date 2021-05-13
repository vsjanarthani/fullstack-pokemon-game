$('#myCarousel').carousel({
    interval: false
  });
  $('#carousel-thumbs').carousel({
    interval: false
  });
  
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
  });
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
  // when user swipes, go next or previous
//   $('#myCarousel').swipe({
//     fallbackToMouseEvents: true,
//     swipeLeft: function(e) {
//       $('#myCarousel').carousel('next');
//     },
//     swipeRight: function(e) {
//       $('#myCarousel').carousel('prev');
//     },
//     allowPageScroll: 'vertical',
//     preventDefaultEvents: false,
//     threshold: 75
//   });
  
  
  $('#myCarousel .carousel-item img').on('click', function(e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
  });