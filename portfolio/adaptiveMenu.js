let burger = document.querySelector('.burger');
let navList = document.querySelector('.nav-list');
let back = document.querySelector('body');
let nav = document.querySelector('.nav');
let header = document.querySelector('.header-container');
let navItems = document.querySelectorAll('.nav-item');
let line = document.querySelectorAll('.burger span');

burger.onclick = function(){
    burger.classList.toggle('active');
    navList.classList.toggle('active');
    back.classList.toggle('lock');
    header.classList.toggle('lock');
    navList.classList.toggle('open');
    changeBurgerheme();
}

navList.onclick = function () {
    navList.classList.remove('active');
    back.classList.remove('lock');
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function () {
        navList.classList.remove('open');
        burger.classList.remove('active');
        back.classList.remove('lock');
        changeBurgerheme();
    }
}

function changeBurgerheme(){
    if (burger.classList.contains('active')) {
        if(burger.classList.contains('light-theme'))
        line.forEach(el => el.classList.toggle('light-theme'));
    }
    else {
        line.forEach(el => el.classList.remove('light-theme'));
    }
}