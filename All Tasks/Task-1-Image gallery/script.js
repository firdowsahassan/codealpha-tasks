function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function filterImages(category) {
  const images = document.querySelectorAll('.gallery .image');
  images.forEach(img => {
    if (category === 'all') {
      img.style.display = 'block';
    } else {
      img.classList.contains(category)
        ? img.style.display = 'block'
        : img.style.display = 'none';
    }
  });
}
