$(function () {
  if (window.matchMedia("(max-width: 770px)").matches) {
    $(".outline-trigger").click(function () {
      var $answer = $(this)
        .parents(".outline-content")
        .find(".outline-content-right");
      if ($(".outline-content-right").not($answer).hasClass("open")) {
        $(".outline-content-right").not($answer).removeClass("open");
        $(".outline-content-right").not($answer).slideUp();
      }
      if ($answer.hasClass("open")) {
        $answer.removeClass("open");
        $answer.slideUp();
        $(this)
          .parents(".outline-content")
          .find(".arrow")
          .css({ transform: "", right: "", top: "" });
      } else {
        $answer.addClass("open");
        $answer.slideDown();
        $(this)
          .parents(".outline-content")
          .find(".arrow")
          .css({ transform: "rotate(315deg)", right: "15px", top: "17px" });
      }
    });
  }
  //footer event

  $(".asking-answer-container").hide();

  $(".footer-clickevent").click(function () {
    var hiddenContent = $(this).parent().next();
    if ($(this).parent().hasClass("isOpen")) {
      hiddenContent.slideToggle();
      $(this).parent().removeClass("isOpen");
    } else {
      hiddenContent.slideToggle();
      $(this).parent().addClass("isOpen");
    }
  });
  //elevetor
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".elevetor-container").fadeIn();
    } else {
      $(".elevetor-container").fadeOut();
    }
  });
  $(".elevetor-container").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  $(".btn").click(function () {
    $("html,body").animate({ scrollTop: $(".form").offset().top });
  });
});
