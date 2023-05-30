let imagesScr = [
    '../img/Bitmap.png',
    '../img/Bitmap_1.png',
    '../img/Bitmap_2.png',
    '../img/Bitmap_3.png',
    '../img/Bitmap_4.png',
    '../img/Bitmap_5.png',
    '../img/Bitmap_6.png',
    '../img/Bitmap_7.png',
    '../img/Bitmap_1.png',
    '../img/Bitmap_2.png',
    '../img/Bitmap_3.png'
]

let brandLogo = document.querySelector('.brand__logo');

const newBrandLogo = item => {
    let brandLogoBlock = document.createElement('div');
    brandLogoBlock.classList.add('brand__logo-block');
    brandLogo.appendChild(brandLogoBlock);

    let brandLogoBlockImg = document.createElement('img');
    brandLogoBlockImg.classList.add('brand__logo-block-img');
    brandLogoBlock.appendChild(brandLogoBlockImg);

    let brandLogoBlockArrow = document.createElement('img');
    brandLogoBlockArrow.classList.add('brand__logo-block-arrow');
    brandLogoBlock.appendChild(brandLogoBlockArrow);
    brandLogoBlockArrow.src = '../img/go.svg';
    brandLogoBlockImg.src = item;
}

for(let i = 0; i < imagesScr.length; i++){
    newBrandLogo(imagesScr[i]);
}

let brandMore = document.querySelector('.brand__more');
let brandMoreImg = document.querySelector('.brand__more-img');
let brandMoreText = document.querySelector('.brand__more-text');

brandMore.addEventListener('click', () => {
    brandMoreImg.style.transition = 'transform .3s';
    if (brandLogo.style.maxHeight != '500px'){
        brandLogo.style.maxHeight = '500px';
        brandMoreImg.style.transform = 'rotateX(180deg)'
        brandMoreText.textContent = 'Скрыть все';
    } else {
        brandLogo.style.maxHeight = '160px';
        brandMoreText.textContent = 'Показать все';
        brandMoreImg.style.transform = 'rotateX(0deg)';
    }
});

