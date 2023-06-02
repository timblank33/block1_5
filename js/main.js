/* eslint-disable semi */
const imagesScr = [
  'img/Bitmap.png',
  'img/Bitmap_1.png',
  'img/Bitmap_2.png',
  'img/Bitmap_3.png',
  'img/Bitmap_4.png',
  'img/Bitmap_5.png',
  'img/Bitmap_6.png',
  'img/Bitmap_7.png',
  'img/Bitmap_1.png',
  'img/Bitmap_2.png',
  'img/Bitmap_3.png'
];
const brandLogo = document.querySelector('.brand__logo');

const newBrandLogo = (item) => {
  const brandLogoBlock = document.createElement('div');
  brandLogoBlock.classList.add('brand__logo-block');
  brandLogoBlock.classList.add('swiper-slide');
  brandLogo.appendChild(brandLogoBlock);

  const brandLogoBlockImg = document.createElement('img');
  brandLogoBlockImg.classList.add('brand__logo-block-img');
  brandLogoBlock.appendChild(brandLogoBlockImg);

  const brandLogoBlockArrow = document.createElement('img');
  brandLogoBlockArrow.classList.add('brand__logo-block-arrow');
  brandLogoBlock.appendChild(brandLogoBlockArrow);
  brandLogoBlockArrow.src = 'img/go.svg';
  brandLogoBlockImg.src = item;
};

for (let i = 0; i < imagesScr.length; i++) {
  newBrandLogo(imagesScr[i]);
}

const brandMore = document.querySelector('.brand__more');
const brandMoreImg = document.querySelector('.brand__more-img');
const brandMoreText = document.querySelector('.brand__more-text');
brandLogo.style.maxHeight = '160px';
brandMore.addEventListener('click', () => {
  if (brandLogo.style.maxHeight === '160px') {
    brandLogo.style.maxHeight = `${brandLogo.scrollHeight}px`;
    brandMoreImg.style.transform = 'rotateX(180deg)';
    brandMoreText.textContent = 'Скрыть все';
  } else {
    brandLogo.style.maxHeight = '160px';
    brandMoreText.textContent = 'Показать все';
    brandMoreImg.style.transform = 'rotateX(0deg)';
  }
});

const brandSwiperWindow = document.querySelector('.brand__swiper-window');
brandSwiperWindow.classList.add('swiper');
if (window.innerWidth > 768) {
  brandSwiperWindow.classList.remove('swiper');
}
// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
