let menuAll = document.querySelectorAll('.menu i');
let angle = document.querySelectorAll('.angle i');
console.log(menuAll);
let next = 1;

[...menuAll].forEach((menu) => {
    menu.onclick = () => {
        let act = document.querySelector('.act');
        let active = document.querySelector('.active');
        active.classList.remove('active');
        act.classList.remove('act');
        menu.classList.add('act');
        if(menu.getAttribute('data-id') == '1') {
            let one = document.querySelector('.one');
            one.classList.add('active');
            next = 1;
        } else if(menu.getAttribute('data-id') == '2') {
            let two = document.querySelector('.two');
            two.classList.add('active');
            next = 2;
        } else if(menu.getAttribute('data-id') == '3') {
            let three = document.querySelector('.three');
            three.classList.add('active');
            next = 3;
        } else if(menu.getAttribute('data-id') == '4') {
            let four = document.querySelector('.four');
            four.classList.add('active');
            next = 4;
        }    
    }
});


[...angle].forEach((menu) => {
    menu.onclick = () => {
        if(menu.getAttribute('data-id') == 'prev') {
            next--;
            if(next < 1)
                next = 4;
        }else {
            next++;
            if(next > 4)
                next = 1;
        }
        let active = document.querySelector('.active');
        let act = document.querySelector('.act');
        active.classList.remove('active');
        act.classList.remove('act');
        if(next == 1) {
            let one = document.querySelector('.one');
            let menuOne = document.querySelector('.menu-one');
            menuOne.classList.add('act');
            one.classList.add('active');
        } else if(next == 2) {
            let two = document.querySelector('.two');
            let menuTwo = document.querySelector('.menu-two');
            menuTwo.classList.add('act');
            two.classList.add('active');
        } else if(next == 3) {
            let three = document.querySelector('.three');
            let menuThree = document.querySelector('.menu-three');
            menuThree.classList.add('act');
            three.classList.add('active');
        } else if(next == 4) {
            let four = document.querySelector('.four');
            let menuFour = document.querySelector('.menu-four');
            menuFour.classList.add('act');
            four.classList.add('active');
        }    
    }
});

