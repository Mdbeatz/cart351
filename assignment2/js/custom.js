// Our Custom JS
$(document).ready(function() {

  let starsOut = 0;
  let shootingstarX = -100; // Start stars out of DOM
  let maxY = 2000;
  let minY = 400;
  let shootingstarY = Math.floor(Math.random() * (maxY - minY)) + minY;
  let numclicks = 0;
  let maxHeight = 70;
  let minHeight = 40;
  let maxWidth = 70;
  let minWidth = 40;
  let maxTheta = 360;
  let minTheta = 60;
  let starH = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
  let starW = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;
  let theta = Math.floor(Math.random() * (maxTheta - minTheta)) + minTheta;

  console.log(theta);


  function createimage() {
    var img = document.createElement("IMG");
    img.setAttribute("src", "assets/star2.svg");
    img.setAttribute("width", starW);
    img.setAttribute("class", "mainstarclass shootingstar" + i);
    img.setAttribute("height", starH);

    $(".shootingstarscontainer").prepend(img);

    let shootingstar = document.getElementsByClassName("shootingstar" + i);

    $(document.getElementsByClassName("shootingstar0")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar1")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar2")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar3")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar4")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar5")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar6")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar7")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar8")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar9")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });

    $(".mainstarclass").css({
      "transform": "rotate(" + theta + "deg)"
    });
  }

  var starsamount = 10;

  for (var i = 0; i < starsamount; i++) {
    createimage();
  }

  function resetCoords() {
    $(document.getElementsByClassName("shootingstar0")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar1")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar2")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar3")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar4")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar5")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar6")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar7")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar8")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });
    $(document.getElementsByClassName("shootingstar9")).offset({
      top: (Math.floor(Math.random() * (maxY - minY)) + minY),
      left: shootingstarX
    });

    loopingStars();

    if (theta >= 360) {
      theta = 0;
      console.log("set back all stars to 0 deg rotation: " + theta)
    }

  }


  function loopingStars() {

    let minSpeed = 8000;
    let maxSpeed = 9500;

    $('.shootingstar0').delay(0).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 0 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar1').delay(5000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 1 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar2').delay(7000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 2 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar3').delay(9000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 3 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar4').delay(11000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 4 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar5').delay(5000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 5 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar6').delay(7000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 6 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar7').delay(9000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 7 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar8').delay(11000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 8 out of canvas. Total amout of stars out: " + starsOut)
    });

    $('.shootingstar9').delay(13000).animate({
      left: (Math.floor(Math.random() * 100) + 5) + "%",
      top: -(Math.floor(Math.random() * 100) + 10) + "vh",
    }, (Math.floor(Math.random() * maxSpeed) + minSpeed), function() {
      starsOut++;
      console.log("Shooting star 9 out of canvas. Total amout of stars out: " + starsOut)

      console.log("STARS OUT: " + starsOut);

      resetCoords();

    });
  }

  $("#authors").text("M&M");
  $("#title").text("Working Title");
  $("#score").text("Glowing Stars: " + numclicks);

  function UpdateScore() {
    $("#score").text("Glowing Stars: " + numclicks);
    numclicks = numclicks;



    if (numclicks >= 10) {

      console.log("clicked all stars to glow");

      // fade ending in
      $("#ending").fadeIn(4000);

      $(".wishContainer").delay(500).fadeIn(4000);
    }

  }

  // trigger event once with spacebar keypress
  $(document).one("keypress", function(event) {
    if (event.keyCode === 32 || event.which === 32) {

      // play music
      $("#audio").get(0).play();

      // fade intro out
      $("#intro").fadeOut(800);

      // fade stars bg in
      $("#particles-js").fadeTo(8000, 1);

      // fade title in
      $("#title").delay(5500).fadeIn(4000, function() {
        // fade title out
        $("#title").delay(1500).fadeOut(4000);
      });

      // fade score in
      $("#score").delay(10500).fadeIn(4000);

      // fade instructions in
      $("#instructions").delay(10000).fadeIn(4000, function() {
        // fade instructions out
        $("#instructions").delay(1000).fadeOut(4000);

        // loop shooting stars
        loopingStars();

      });
    }
  });


  $(".shootingstar0").one("click", function() {
    theta = theta + 360;
    console.log("clicked 0");

    $(".shootingstar0").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar0").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();
  });

  $(".shootingstar1").one("click", function() {
    console.log("clicked 1");
    theta = theta + 360;

    $(".shootingstar1").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar1").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();

  });

  $(".shootingstar2").one("click", function() {
    console.log("clicked 2");
    theta = theta + 360;

    $(".shootingstar2").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar2").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();
  });

  $(".shootingstar3").one("click", function() {
    theta = theta + 360;
    console.log("clicked 0");

    $(".shootingstar3").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar3").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();
  });

  $(".shootingstar4").one("click", function() {
    console.log("clicked 1");
    theta = theta + 360;

    $(".shootingstar4").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar4").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();

  });

  $(".shootingstar5").one("click", function() {
    console.log("clicked 1");
    theta = theta + 360;

    $(".shootingstar5").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar5").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();

  });

  $(".shootingstar6").one("click", function() {
    console.log("clicked 2");
    theta = theta + 360;

    $(".shootingstar6").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar6").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();
  });

  $(".shootingstar7").one("click", function() {
    theta = theta + 360;
    console.log("clicked 0");

    $(".shootingstar7").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar7").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();
  });

  $(".shootingstar8").one("click", function() {
    console.log("clicked 1");
    theta = theta + 360;

    $(".shootingstar8").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar8").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();

  });

  $(".shootingstar9").one("click", function() {
    console.log("clicked 2");
    theta = theta + 360;

    $(".shootingstar9").css({
      "transform": "rotate(" + theta + "deg)"
    });
    $(".shootingstar9").css({
      "opacity": "1"
    });

    console.log(theta);
    numclicks++;
    console.log(numclicks);
    UpdateScore();


  });



  // Wishes start

  let wishesCount = 0;
  let maxWishes = 3;

  function addWish() {
    if ($('input').val().trim() == "") {
      // Show alert message
      $('.alert').fadeIn(200);
    } else {
      // Hide alert message
      $('.alert').hide();

      // Get input
      let $wish = $('input').val();

      // Create new wish
      let $newWish = $('<li class="wish">' + $wish + '</li>');

      // Add new wish to end of wish list
      let $addWish = $('ul').append($newWish);

      // Hide wish before adding it into the wishes list
      $newWish.hide().fadeIn(500);

      // Refocus input box for next wish input
      $('input').val("").focus();

      wishesCount++;
      console.log("Wishes Count ::: " + wishesCount);
    }

    if (wishesCount === maxWishes) {
      console.log("Max Wishes reached. No more wishes for you!");

      $(".alert").text("Awesome! You've made your " + maxWishes + " wishes.");
      $(".alert").fadeIn(200);
      $("input").hide();
      $(".input-buttons").hide();
    }
  };


  // Clear alert message
  $('i.fa-times').on('click', function() {
    $('.alert').hide();
  });

  // Call addWish function on click
  $('.add-wish').on('click', addWish);

  // Call addWish function when enter key is pressed
  $(document).on('keypress', function(event) {
    if (event.which == 13) {
      addWish();
    }
  });

  // Clear typed text and refocus input box
  $('.clear-text').on('click', function(event) {
    event.preventDefault();
    $('input').val("").focus();
  });

  // Wishes end

});
