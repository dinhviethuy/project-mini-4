let menuAll = document.querySelectorAll('.menu i');
let angle = document.querySelectorAll('.angle i');
let menuMobile = document.querySelector('.menuMobile');
let menu = document.querySelector('.mobile');
let close = document.querySelector('.closee');
let content = document.querySelector('.content');
let next = 1;

menuMobile.onclick = () => {
    menuMobile.classList.add('hidden');
    menu.classList.remove('hidden');
    close.classList.remove('hidden');
}

close.onclick = () => {
    menuMobile.classList.remove('hidden');
    menu.classList.add('hidden');
    close.classList.add('hidden');
}

content.onclick = () => {
    menuMobile.classList.remove('hidden');
    menu.classList.add('hidden');
    close.classList.add('hidden');

}

[...menuAll].forEach((menu) => {
    menu.onclick = () => {
        let act = document.querySelector('.act');
        let active = document.querySelector('.active');
        let actMobi = document.querySelector('.act-mobi');
        if(actMobi)
            actMobi.classList.remove('act-mobi');
        active.classList.remove('active');
        act.classList.remove('act');
        menu.classList.add('act');
        if(menu.getAttribute('data-id') == '1') {
            let one = document.querySelector('.one');
            let oneMenu = document.querySelector('.one-menu');
            if(oneMenu)
                oneMenu.classList.add('act-mobi');
            one.classList.add('active');
            next = 1;
        } else if(menu.getAttribute('data-id') == '2') {
            let two = document.querySelector('.two');
            let twoMenu = document.querySelector('.two-menu');
            if(twoMenu)
                twoMenu.classList.add('act-mobi');
            two.classList.add('active');
            next = 2;
        } else if(menu.getAttribute('data-id') == '3') {
            let three = document.querySelector('.three');
            let threeMenu = document.querySelector('.three-menu');
            if(threeMenu)
                threeMenu.classList.add('act-mobi');
            three.classList.add('active');
            next = 3;
        } else if(menu.getAttribute('data-id') == '4') {
            let four = document.querySelector('.four');
            let fourMenu = document.querySelector('.four-menu');
            if(fourMenu)
                fourMenu.classList.add('act-mobi');
            four.classList.add('active');
            next = 4;
        }  
        
        
        
    }
    menu.onmouseover = () => {
        let item;
        if(menu.getAttribute('data-id') == '1') {
            item = document.querySelector('.menu--one');
            item.classList.remove('hiddenn');
        }
        if(menu.getAttribute('data-id') == '2') {
            item = document.querySelector('.menu--two');
            item.classList.remove('hiddenn');
        }
        if(menu.getAttribute('data-id') == '3') {
            item = document.querySelector('.menu--three');
            item.classList.remove('hiddenn');
        }
        if(menu.getAttribute('data-id') == '4') {
            item = document.querySelector('.menu--four');
            item.classList.remove('hiddenn');
        }
    }
    menu.onmouseout = () => {
        if(menu.getAttribute('data-id') == '1') {
            item = document.querySelector('.menu--one');
            item.classList.add('hiddenn');
        }
        if(menu.getAttribute('data-id') == '2') {
            item = document.querySelector('.menu--two');
            item.classList.add('hiddenn');
        }
        if(menu.getAttribute('data-id') == '3') {
            item = document.querySelector('.menu--three');
            item.classList.add('hiddenn');
        }
        if(menu.getAttribute('data-id') == '4') {
            item = document.querySelector('.menu--four');
            item.classList.add('hiddenn');
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
        let actMobi = document.querySelector('.act-mobi');
        if(actMobi)
            actMobi.classList.remove('act-mobi');
        active.classList.remove('active');
        act.classList.remove('act');
        if(next == 1) {
            let one = document.querySelector('.one');
            let menuOne = document.querySelector('.menu-one');
            let oneMenu = document.querySelector('.one-menu');
            if(oneMenu)
                oneMenu.classList.add('act-mobi');
            menuOne.classList.add('act');
            one.classList.add('active');
        } else if(next == 2) {
            let two = document.querySelector('.two');
            let menuTwo = document.querySelector('.menu-two');
            let twoMenu = document.querySelector('.two-menu');
            if(twoMenu)
                twoMenu.classList.add('act-mobi');
            menuTwo.classList.add('act');
            two.classList.add('active');
        } else if(next == 3) {
            let three = document.querySelector('.three');
            let menuThree = document.querySelector('.menu-three');
            let threeMenu = document.querySelector('.three-menu');
            if(threeMenu)
                threeMenu.classList.add('act-mobi');
            menuThree.classList.add('act');
            three.classList.add('active');
        } else if(next == 4) {
            let four = document.querySelector('.four');
            let menuFour = document.querySelector('.menu-four');
            let fourMenu = document.querySelector('.four-menu');
            if(fourMenu)
                fourMenu.classList.add('act-mobi');
            menuFour.classList.add('act');
            four.classList.add('active');
        }    
    }
});

let bg = document.querySelector('.lm-animated-bg');
let body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
    let x = e.pageX * -1/70;
    let y = e.pageY * -1/70;
    bg.style.backgroundPosition = x + 'px ' + y + 'px';
})

let menuMobi = document.querySelectorAll('.menu__mobile p'); 

[...menuMobi].forEach((menuu) => {
    menuu.onclick = () => {
        menuMobile.classList.remove('hidden');
        menu.classList.add('hidden');
        let act = document.querySelector('.act-mobi');
        if(act) {
            let active = document.querySelector('.active');
            active.classList.remove('active');
            act.classList.remove('act-mobi');
            menuu.classList.add('act-mobi');
            if(menuu.getAttribute('data-id') == '1') {
                let one = document.querySelector('.one');
                one.classList.add('active');
                next = 1;
            } else if(menuu.getAttribute('data-id') == '2') {
                let two = document.querySelector('.two');
                two.classList.add('active');
                next = 2;
            } else if(menuu.getAttribute('data-id') == '3') {
                let three = document.querySelector('.three');
                three.classList.add('active');
                next = 3;
            } else if(menuu.getAttribute('data-id') == '4') {
                let four = document.querySelector('.four');
                four.classList.add('active');
                next = 4;
            }    
        }
    }
});

