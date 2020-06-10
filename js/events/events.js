export default class Events {
    constructor() {

        this.internalLinks = document.querySelectorAll('body a[href^="#"]')
 
        this.menuNav = document.querySelector('.logo-navigation .navigation')
        this.menuHamburguer = document.querySelector('.menu-hamburger')

        this.resizeW = window.innerWidth

        this.initEvent()
    }

    initEvent() {    
        this.internalLinks.forEach((item) => {
            item.addEventListener('click', this.initScrollSmooth)
        })

        this.animateMenuHamburguer();
        this.checkResize()  
    }

    initScrollSmooth(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    animateMenuHamburguer() {

        if(this.menuHamburguer) {
            this.menuHamburguer.addEventListener('click', event => {
                this.menuNav.classList.toggle('active')
            })
        }
    }

    checkResize() {
        window.addEventListener('resize', () => {
            if (this.resizeW) {
                this.menuNav.classList.remove('active')
            }
        })
    }
}
