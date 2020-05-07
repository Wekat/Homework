// $( "#location" ).click(function() {
//     $( "#extended_location" ).slideToggle( "slow", function() {
//       // Animation complete.
//     });
// });

// $( "#music" ).click(function() {
//     $( "#extended_music" ).slideToggle( "slow", function() {
//       // Animation complete.
//     });
// });

// $( "#notes" ).click(function() {
//     $( "#extended_notes" ).slideToggle( "slow", function() {
//       // Animation complete.
//     });
// });

// $( "#books" ).click(function() {
//     $( "#extended_books" ).slideToggle( "slow", function() {
//       // Animation complete.
//     });
// });

// $( "#tendances" ).click(function() {
//     $( "#extended_tendances" ).slideToggle( "slow", function() {
//       // Animation complete.
//     });
// });

//BETTER OPTION

$('.title_box').on('click', function() {
  $(this).next().slideToggle("slow", function() {
    // Animation complete.
  });
});