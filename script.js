function changeImage(element) {
    const mainImage = document.getElementById('current-image');
    mainImage.src = element.src;
    mainImage.alt = element.alt;
}
