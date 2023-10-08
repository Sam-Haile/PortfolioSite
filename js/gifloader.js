document.addEventListener("DOMContentLoaded", function () {
  const imgContainers = document.querySelectorAll(".img__container");

  imgContainers.forEach(function (imgContainer) {
    const loadingSign = imgContainer.querySelector(".loadingSign");
    const gameplayGif = imgContainer.querySelector(".gameplay__gif");

    imgContainer.addEventListener("mouseover", function () {
      // Show the loading sign and hide the gameplay gif
      loadingSign.style.display = "block";
      gameplayGif.style.display = "none";

      // Preload the gif from the data-gif attribute
      let gifSrc = imgContainer.getAttribute("data-gif");
      let gifImage = new Image();
      gifImage.src = gifSrc;

      // Once the gif is loaded
      gifImage.onload = function () {
        // Hide the loading sign, update the gif src, and display the gif
        loadingSign.style.display = "none";
        gameplayGif.src = gifSrc;
        gameplayGif.style.display = "block";
      };
    });
  });
});
