const photoDialog = document.querySelector('#photo-dialog');
const galleryButtons = [...document.querySelectorAll('.gallery-open')];
const fullPhoto = document.querySelector('#photo-full');
const photoCaption = document.querySelector('#photo-caption');
const photoCount = document.querySelector('#photo-count');
let selectedPhoto = 0;
function showPhoto(index) {
 selectedPhoto = (index + galleryButtons.length) % galleryButtons.length;
 const button = galleryButtons[selectedPhoto];
 const image = button.querySelector('img');
 fullPhoto.src = image.getAttribute('src').replace('-thumb.jpg', '.jpg');
 fullPhoto.alt = image.alt;
 photoCaption.textContent = button.closest('figure').querySelector('figcaption').textContent.replace(/^\d+/, '').trim();
 photoCount.textContent = `${selectedPhoto + 1} / ${galleryButtons.length}`;
}
galleryButtons.forEach((button,index) => button.addEventListener('click', () => {showPhoto(index);photoDialog.showModal();}));
document.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
document.querySelector('.photo-prev').addEventListener('click', () => showPhoto(selectedPhoto - 1));
document.querySelector('.photo-next').addEventListener('click', () => showPhoto(selectedPhoto + 1));
photoDialog.addEventListener('keydown', event => {if(event.key === 'ArrowLeft'){event.preventDefault();showPhoto(selectedPhoto - 1);}if(event.key === 'ArrowRight'){event.preventDefault();showPhoto(selectedPhoto + 1);}});
photoDialog.addEventListener('click', event => {const box=photoDialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)photoDialog.close();});
