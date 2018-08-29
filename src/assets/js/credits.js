
// jquery init
$(document).ready(function() {

  // Add smooth scrolling to 'Contact' Nav link
  $("a").on('click', function(event) {

    if (this.hash == "#credits") {

      event.preventDefault();
      
      $('html, body').animate({
          scrollTop: 0,
          scrollLeft: 0
      }, 1000);

    // Make sure this.hash has a value before overriding default behavior
    } else if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



