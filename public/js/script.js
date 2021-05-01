$(function () {
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1500
      );
      return false;
    }
  });
});
$(document).ready(function () {
  var scroll = $(this).scrollTop();
  var topDist = $(".navbar").height();

  if (scroll >= topDist) {
    $(".navbar").css("background-color", "#1F1F1F");
    $(".brand-logo").css("height", 60);
  } else {
    $(".navbar").css("background-color", "transparent");

    $(".brand-logo").css("height", 100);
  }

  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = $(".navbar").height();

    if (scroll >= topDist) {
      $(".navbar").css("background-color", "#1F1F1F");
      $(".brand-logo").css("height", 60);
    } else {
      $(".navbar").css("background-color", "transparent");

      $(".brand-logo").css("height", 100);
    }
  });
});
$("#owl-two").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$("#owl-two1").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$("#owl-two2").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$("#owl-two3").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-arrow-circle-left'></i>",
    "<i class='fas fa-arrow-circle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  $(".popup-btn").on("click", function () {
    $(".video-popup").fadeIn("slow");
    return false;
  });

  $(".popup-bg").on("click", function () {
    $(".video-popup").fadeOut("slow");
    $(".youtube-video")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
    return false;
  });

  $(".close-btn").on("click", function () {
    $(".video-popup").fadeOut("slow");
    $(".youtube-video")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
    return false;
  });
});
$(".popup-button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".video-1").offset().top + 340,
    },
    "slow"
  );
});


function donor() {
  if (document.getElementById('check-1').checked) {
    var headingDiv = document.getElementById("title");
    headingDiv.innerHTML = "<h3 class='mb-4 text-center' style='font-weight: bolder;' id='title'>Register as a Donor</h3>";
  } else {
    var headingDiv = document.getElementById("title");
    headingDiv.innerHTML = "<h3 class='mb-4 text-center' style='font-weight: bolder;' id='title'>Register as a Recepient</h3>";
  }
}

function D5000() {
  var prev = document.getElementById("tamount").innerHTML
  var prevint = parseInt(prev);
  var previntnew = prevint + 5000;
  var prevstr = previntnew.toString();
  var amount = document.getElementById("tamount")
  prev = prevstr;
  amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>" + prevstr + "</div>";
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated"));
  ul.appendChild(li);
}
function D10000() {
  var amount = document.getElementById("tamount")
  amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 10000</div>";
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated 10000"));
  ul.appendChild(li);
}
function D500000() {
  var amount = document.getElementById("tamount")
  amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 500000</div>";
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("  You donated 500000"));
  ul.appendChild(li);
}
function D1000000() {
  var amount = document.getElementById("tamount")
  amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 1000000</div>";
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated 1000000"));
  ul.appendChild(li);
}
function donatenow () {
  var amount = document.getElementById("tamount")
  var inamount = document.getElementById("amount").value
  amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. " + inamount + "</div>";
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("You donated Rs. " + inamount));
  ul.appendChild(li);
}