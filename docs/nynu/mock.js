// JavaScript
function play_bgm() {
  var audio = document.getElementById("bgm");
  audio.volume = 0.5;
  audio.play();
}

// jQuery
$(document).ready(function () {
  // P0
  $("#app-p0").click(function () {
    $("#_app-p0").hide();
    $("#app-p1").show();
  });

  // P1
  $("#app-p1-btn").click(function () {
    // $("#app-p1").css({"background-image": "url('assets/img/p2.png')"});
    $("#app-p1").hide();
    $("#app-p2").show();
  });

  // P2 - P6
  next_page(2, 6);

  // P7
  $("#app-p7-btnY").click(function () {
    $("#app-p7").hide();
    $("#app-p8-yes").show();
  });
  $("#app-p7-btnN").click(function () {
    $("#app-p7").hide();
    $("#app-p8-no").show();
  });

  // P8
  $("#app-p8-yes, #app-p8-no").click(function () {
    $(this).hide();
    $("#app-p9").show();
  });

  // P9 - P16
  next_page(9, 16);

  // P17
  $("#app-p17-btnHappy").click(function () {
    $("#app-p17").hide();
    $("#app-p18-happy").show();
  });
  $("#app-p17-btnUnhappy").click(function () {
    $("#app-p17").hide();
    $("#app-p18-unhappy").show();
  });
  $("#app-p17-btnFine").click(function () {
    $("#app-p17").hide();
    $("#app-p18-fine").show();
  });

  // P18
  $("#app-p18-happy, #app-p18-unhappy, #app-p18-fine").click(function () {
    $(this).hide();
    $("#app-p19").show();
  });

  // P19 - P31
  next_page(19, 31);

  // P32
  $("#app-p32").click(function () {
    $("#app-p32").hide();
    $("#_app-p-end").hide().fadeIn();
  });

  // For-loop next page function
  function next_page(start, end) {
    for (let i = start; i <= end; i++) {
      $("#app-p" + i).click(function () {
        $(this).hide();
        $("#app-p" + (i + 1)).show();
      });
    }
  }
});
