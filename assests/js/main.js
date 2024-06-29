$(document).ready(function(){
    console.log('End Game')
//Chat Script
$('.chat-toggle').on('click', function(){
  $(this).toggleClass('active')
  $('.mu-chat').toggleClass('open');
  $('.content-wrap').toggleClass('chatappered')
  setTimeout(function(){
    $('.guest-slide')[0].slick.refresh();
  }, 500)
})

$('.chat-head .close').on('click', function(){
  $('.chat-toggle').removeClass('active')
  $('.mu-chat').removeClass('open');
  $('.content-wrap').removeClass('chatappered');
  setTimeout(function(){
    $('.guest-slide')[0].slick.refresh();
  }, 500)
})

$('.toast-close').on('click',function(){
  $('.toast-blue').hide();
})
  $('.toggle').click(function(){
    $(this).toggleClass('isEnable')
  })
  $('.guest-slide').slick({
    slidesToShow: 3,
    dots: true,
    rows: 4,
    infinite: false,
    arrows:true,
    slidesToScroll: 3,
    prevArrow:"<button type='button' class='slick-prev pull-left'><svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.0896 4.41076C13.415 4.7362 13.415 5.26384 13.0896 5.58928L8.67884 10L13.0896 14.4108C13.415 14.7362 13.415 15.2638 13.0896 15.5893C12.7641 15.9147 12.2365 15.9147 11.9111 15.5893L6.91107 10.5893C6.58563 10.2638 6.58563 9.7362 6.91107 9.41076L11.9111 4.41076C12.2365 4.08533 12.7641 4.08533 13.0896 4.41076Z' fill='white'/></svg></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.91107 4.41076C7.23651 4.08533 7.76414 4.08533 8.08958 4.41076L13.0896 9.41076C13.415 9.7362 13.415 10.2638 13.0896 10.5893L8.08958 15.5893C7.76414 15.9147 7.23651 15.9147 6.91107 15.5893C6.58563 15.2638 6.58563 14.7362 6.91107 14.4108L11.3218 10L6.91107 5.58928C6.58563 5.26384 6.58563 4.7362 6.91107 4.41076Z' fill='white'/></svg></button>",
    responsive: [
    {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
   //participate Script
   $('#paricipantBtn, .close-sidebar').click(function(){
    
    $(".participate-sidebar").toggleClass("show");
    $('.content-wrap.postjoin').toggleClass("openParticipate");
    $('.guest-slide')[0].slick.refresh()
    // $('.guest-slide').slick({
    //   slidesToShow: 1,
    //   dots: true,
    //   rows: 1,
    //   infinite: false,
    //   arrows:true,
    //   slidesToScroll: 2,
    // })
    // $('.guest-slide')[0].slick.refresh()
   
  })

  $('.locked').click(function(){
   $('.lockalert').toggleClass('d-none')
   $(this).toggleClass('isAcive')
  })
  $('.close-alert').click(function(){
   $('.lockalert').toggleClass('d-none')
   $('.locked').removeClass('isAcive')
  })

  // Mute and Unmute
  $('#speaker').click(function(){
    $('.mute').toggleClass('d-none')
  })

  //Sound Border
  $('#speaker').click(function(){
    $('.camera-box').toggleClass('isSound')
  })

  // Camera on OFF
  $('#camera').click(function(){
    $('.camera-box').toggleClass('d-block')
    $('.camera-box p').toggleClass('d-none')
    $('.video-wrap').toggleClass('d-none')
  })


  //Tab Settings
  $('.back-btn').click(function(){
    $('#v-pills-tabContent .tab-pane').removeClass('show');
    $('#v-pills-tabContent .tab-pane').removeClass('active');
    $('.modal-left .nav-link').removeClass('active');
  })

  if (window.matchMedia('(max-width: 576px)').matches)
    {
      $('#v-pills-tabContent .tab-pane').removeClass('show');
      $('#v-pills-tabContent .tab-pane').removeClass('active');
      $('.modal-left .nav-link').removeClass('active');
    }
  $(window).resize(function()
    {
    var $theWindowSize = $(this).width();
    if($theWindowSize < 576)
        {
        $('#v-pills-tabContent .tab-pane').removeClass('show');
        $('#v-pills-tabContent .tab-pane').removeClass('active');
        $('.modal-left .nav-link').removeClass('active');
        }
    });



    // Gusest Slider
    // $('.guest-slide').slick({
    //   slidesToShow: 12,
    //   dots: false,
    //   infinite: false,
    //   arrows:false,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1450,
    //       settings: {
    //         slidesToShow: 2.9,
    //         slidesToScroll: 1,
    //       },
    //     },
      
    //     {
    //       breakpoint: 1281,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 1100,
    //       settings: {
    //         slidesToShow: 2.5,
    //         slidesToScroll: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 1.2,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    // });
    
  
    })