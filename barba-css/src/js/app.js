
import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// global hiiks to change background color useing a css variable and data value. 
barba.hooks.before((data) => {
    const background = data.current.container.dataset.background;
    body.style.setProperty('--page-background' , background);
});

// init Barba
barba.init({
    transitions: [
        {
            name: 'home',
            to: {
                namespace:['home']
            },
            sync: true,
            once() {},
            leave() {},
            enter() {},

            beforeEnter() {
                console.log('home')
            },

        }, {
            name: 'fade',
            to: {
                namespace:['fade']
            },
            leave() {},
            enter() {},
        }, {
            name: 'clip',
            sync: true,
            to: {
                namespace:['clip']
            },
            leave() {},
            enter() {},
            // beforeEnter() {
            //     console.log('beforeEnter')
            // },
        }, {
            name: 'with-cover',
            
            to: {
                namespace:['with-cover']
            },
            leave() {},
            enter() {},
            // beforeEnter() {
            //     console.log('with-cover')
            // },
        }, 

    ]
});