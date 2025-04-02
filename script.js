$(document).ready(function () {
    let currentIndex = 0;
    let images = $(".gallery img");
    let lightbox = $(".lightbox");
    let lightboxImg = $(".lightbox img");

    function showImage(index) {
      if (index >= 0 && index < images.length) {
        currentIndex = index;
        let imgSrc = images.eq(index).attr("src");
        lightboxImg.attr("src", imgSrc);
        lightbox.fadeIn();
      }
    }

    images.click(function () {
      let index = images.index(this);
      showImage(index);
    });

    $(".close").click(function () {
      lightbox.fadeOut();
    });

    $(".prev").click(function () {
      showImage(currentIndex - 1);
    });

    $(".next").click(function () {
      showImage(currentIndex + 1);
    });

    $(document).keydown(function (e) {
      if (e.key === "Escape") lightbox.fadeOut();
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
});

