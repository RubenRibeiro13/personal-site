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

for (let i = 0; i < $(".navigation-menu a").length; i++) {
  if ($(".navigation-menu a").eq(i).text() === $("h2").text()) {
    $(".navigation-menu a").eq(i).addClass("current-section");
    break;
  }
}

$(".current-year").text(new Date().getFullYear());

$(window).on("unload", function() {
  sessionStorage.setItem("savedScrollTop", $(window).scrollTop() + "");
});
