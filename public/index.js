if ($("input").val() === "1") {
  $(window).scrollTop(0);
} else if ($("input").val() === "2") {
  $(window).scrollTop(sessionStorage.getItem("savedScrollTop"));
} else {
  if (window.innerHeight < window.innerWidth) {
    $(window).scrollTop(window.innerHeight);
  } else {
    $(window).scrollTop(window.innerWidth);
  }
}

for (let i = 0; i < $("main li").length; i++) {
  if ($("main li").eq(i).text() === $("h2").text()) {
    $("main li a").eq(i).addClass("current-section");
    break;
  }
}

$(window).on("unload", function() {
  sessionStorage.setItem("savedScrollTop", $(window).scrollTop() + "");
});
