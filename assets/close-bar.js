/* CLOSE BANNER */
const blackBannerButton = document.querySelector("#close-banner");

blackBannerButton.addEventListener("click", closeBanner);

function closeBanner(event) {
    this.parentNode.style.display = "none";
}
