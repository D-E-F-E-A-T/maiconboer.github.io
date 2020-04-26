export default class Events {
    constructor() {

        this.internalLinks = document.querySelectorAll('body a[href^="#"]')
        this.menuNav = document.querySelector('.menu-top')
        this.menuHamburguer = document.querySelector('.menu-hamburguer')
        this.resizeW = window.innerWidth

        this.initEvent()
    }

    initEvent() {
        window.addEventListener('scroll', this.animateIconsAdvantages)
        window.addEventListener('scroll', this.animateProductsSection)
        
        this.internalLinks.forEach((item) => {
            item.addEventListener('click', this.initScrollSmooth)
        })

        this.animateMenuHamburguer();
        this.checkResize()
    }

    animateIconsAdvantages() {
        const iconsAdvantages = document.querySelectorAll('.svg-benefits div')
        iconsAdvantages.forEach((item, index) => {
            const iconTop = item.getBoundingClientRect().top
            if (iconTop < 700) {
                item.classList.add("icone-" + index);
                item.classList.add("ativo");
            }
        })
    }

    animateProductsSection() {
        const divProducts = document.querySelectorAll('.product-individual')
        divProducts.forEach((item) => {
            const prodTop = item.getBoundingClientRect().top
            if (prodTop < 700) {
                item.classList.add('ativo')
            }
        })
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
        this.menuHamburguer.addEventListener('click', event => {
            this.menuNav.classList.toggle('ativo-mobile')

            if (this.menuNav.classList.contains('ativo-mobile')) {
                this.closeWithClickAway()
            }
        })
    }

    closeWithClickAway() {
        window.addEventListener('click', event => {
            let condition1 = event.srcElement.parentElement.localName
            let condition2 = event.target.parentElement.className
            if (condition1 != 'li' && condition2 != 'menu-hamburguer' && condition2 != 'container top') {
                this.menuNav.classList.remove('ativo-mobile')
            }
        })
    };

    checkResize() {
        window.addEventListener('resize', () => {
            if (this.resizeW) {
                this.menuNav.classList.remove('ativo-mobile')
            }
        })
    }
}
