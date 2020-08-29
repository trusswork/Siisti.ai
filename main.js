let navbar = $('.navbar');

$(window).scroll(function() {
  let oTop = $('.section-2').offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky")
  }


});

// // counter
// function counter() {
//   $('.count').each(function() {
//     $(this).prop('Counter', 0).animate({
//       Counter: $(this).text()
//     }, {
//       duration: 4000,
//       easing: 'swing',
//       step: function(now) {
//         $(this).text(Math.ceil(now));
//       }
//     });
//   });
// }


// $(window).scroll(function() {
//   var numbersDivHeight = $("#content").offset().top;

//   // you can reduce the offsetWidth to start the animation sooner or later than it is now
//   var offsetWidth = 200;
//   var scroll = $(window).scrollTop();
//   console.log(Math.trunc(numbersDivHeight));
//   console.log(scroll);
//   console.log(scroll == Math.trunc(numbersDivHeight));

//   if (scroll >= Math.trunc(numbersDivHeight) - offsetWidth) {
//     counter();
//     //assign an empty function to call COUNTER once , couldn't see a better option hehe
//     counter = function(){};
//   }
// });
