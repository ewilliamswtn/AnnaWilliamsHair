




// jquery init
$(document).ready(function() {


  if ($(window).width() <= 480) {
    $(".bcg").addClass("bcgMobile");
    $(".area3").addClass("area3Mobile");
    $(".bcg3").addClass("bcg3Mobile");
  }

  $(window).resize(function() {
    if ($(window).width() <= 480) {
      $(".bcg").addClass("bcgMobile");
      $(".area3").addClass("area3Mobile");
      $(".bcg3").addClass("bcg3Mobile");
    } else if ($(window).width() > 480) {
      $(".bcg").removeClass("bcgMobile");
      $(".area3").removeClass("area3Mobile");
      $(".bcg3").removeClass("bcg3Mobile");
    }
  });

  // skrollr init
  var s = skrollr.init({
    smoothScrolling: false,
    mobileDeceleration: 0.004
  });


// Uncomment below to remove variable stored in browser (for test purposes)
// localStorage.removeItem("newSesh");

  // Check to see if new session.
  // * If new session: Navbar animation plays.
  // * If not: Animation will not play.
  if (localStorage.getItem("newSesh") == null) {


    // Nav shows only 'Anna Williams Hair' instead of
    // logo & links
    $(".awhLogo").html("Anna Williams Hair");
    $(".navHide").css("display", "none");

    // Set function to fire after a delay
    setTimeout(function() {

      // Change 'Anna Williams Hair' into Logo on Nav
      $(".awhLogo").html("AWH");

      // Show Nav Links
      $(".navHide").show(1000 , function() {
        $(this).css("display", "block");
        localStorage.setItem("newSesh", "f");
      });
    }, 2000);

  }


  // Add smooth scrolling to 'Contact' Nav link
  $("a").on('click', function(event) {

    if (this.hash == "#index") {

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


