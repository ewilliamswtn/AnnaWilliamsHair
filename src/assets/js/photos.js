
// jquery init
$(document).ready(function() {

  $('.materialboxed').materialbox();

  // Add smooth scrolling to 'Contact' Nav link
  $("a").on('click', function(event) {

    if (this.hash == "#photos") {

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


  var bLazy = new Blazy({
    breakpoints: [{
      width: 420 // Max-width
          , src: 'data-src-small'
  }]
      , success: function(element){
      setTimeout(function(){
    // We want to remove the loader gif now.
    // First we find the parent container
    // then we remove the "loading" class which holds the loader image
    var parent = element.parentNode;
    parent.className = parent.className.replace(/\bloading\b/,'');
      }, 200);
        }
   });

