import i18Obj from './translate.js';

const lightTheme = ['.switch-theme','theme-icon','body','.burger','.section-price','.nav-list','.nav-link','.section-skills','.section-title','.section-title-h2','.button-black', '.contacts-title'];

let switchTheme = document.querySelector('.container.header-container button');
let switchIcon = document.querySelector('.theme-icon');


let arrayOfElements = lightTheme.map(element => document.querySelectorAll(element));

let arrayOfClasses = [];
arrayOfElements.forEach(el => arrayOfClasses.push([].slice.call(el)));

switchTheme.addEventListener('click', function (event) {
    setIcon();
    arrayOfClasses = arrayOfClasses.flat();
    arrayOfClasses.forEach(element => element.classList.toggle('light-theme'));
    let theme = document.body.classList.contains('light-theme') ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
});

if(localStorage.getItem('theme')) {
    arrayOfClasses = arrayOfClasses.flat();
    arrayOfClasses.forEach(element => element.classList.toggle('light-theme'));
    let theme = document.body.classList.contains('light-theme') ? 'light-theme' : '';
    if (theme == 'light-theme') {
        switchIcon.firstElementChild.setAttribute('xlink:href', './assets/svg/sprite.svg#carbon_moon');
    }
    localStorage.setItem('theme', theme);
}

function setIcon () {
    if (switchTheme.classList.contains('light-theme')) {
        switchIcon.firstElementChild.setAttribute('xlink:href', 'assets/svg/sprite.svg#carbon_sun');
    }
    else {
        switchIcon.firstElementChild.setAttribute('xlink:href', 'assets/svg/sprite.svg#carbon_moon');
    }
}


let portfolioBtns = document.querySelectorAll('.button-black');
portfolioBtns.forEach(function (b) {
    b.addEventListener('click', function (event) {
        if(!event.target.classList.contains('active')){
            changeImg(event.target.dataset.season);
            removeClass(portfolioBtns, 'active');
            event.target.classList.add('active');
    }
    });
});

function changeImg(folder) {
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio/${folder}/${index + 1}.jpg`);
  }

  function removeClass(collection, className) {
    collection.forEach(item => item.classList.remove(className));
} 


const radioBtns = document.getElementsByName('radio');
radioBtns.forEach(function (b){
    b.addEventListener('click', function (event){
        if(!event.target.classList.contains('active')){
        removeClass(radioBtns, 'active');
        switchLang(event.target.dataset.lang);
        event.target.classList.add('active');
        localStorage.setItem('lang', event.target.dataset.lang)
        }
    })
});

function switchLang(lang) {
    const strings = document.querySelectorAll('[data-i18]');
    strings.forEach(function(str) {
    const property = str.dataset.i18;
    str.textContent = i18Obj[lang][property];
    })
}

if(localStorage.getItem('lang')) {
    let lang = localStorage.getItem('lang');
    switchLang(lang);
    let switchBtn = document.querySelector(`[data-lang=${lang}]`);
    removeClass(radioBtns, 'active');
    switchBtn.classList.add('active');
}


const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

seasons.forEach(season => {
    for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `assets/img/portfolio/${season}/${i}.jpg`;
    }
});


console.log(`
Score: 85 / 75
Смена изображений в секции portfolio - 25
    + при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
    + кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5
Перевод страницы на два языка -25
    + при клике по надписи ru англоязычная страница переводится на русский язык +10
    + при клике по надписи en русскоязычная страница переводится на английский язык +10
    + надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5
Переключение светлой и тёмной темы - 25
    + тёмная тема приложения сменяется светлой +10
    + светлая тема приложения сменяется тёмной +10
    + после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
    + Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
    + РЕАЛИЗОВАН ДЛЯ КНОПОК В ПОРТФОЛИО Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
`);