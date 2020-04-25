export default class Events {
    constructor() {

        this.linksInternos = document.querySelectorAll('body a[href^="#"]')
        this.menuNav = document.querySelector('.menu-top')
        this.menuHamburguer = document.querySelector('.menu-hamburguer')
        this.resizeW = window.innerWidth

        this.initEvent()
    }

    initEvent() {
        window.addEventListener('scroll', this.animaIconesVantagens)
        window.addEventListener('scroll', this.animaSecaoProdutos)
        
        this.linksInternos.forEach((item) => {
            item.addEventListener('click', this.initScrollSuave)
        })

        this.animaMenuHamburguer();
        this.verificaResize()
    }

    animaIconesVantagens() {
        const iconesVantagens = document.querySelectorAll('.svg-vantagens div')
        iconesVantagens.forEach((item, index) => {
            const iconeTop = item.getBoundingClientRect().top
            if (iconeTop < 700) {
                item.classList.add("icone-" + index);
                item.classList.add("ativo");
            }
        })
    }

    animaSecaoProdutos() {
        const divProdutos = document.querySelectorAll('.produto-individual')
        divProdutos.forEach((item) => {
            const prodTop = item.getBoundingClientRect().top
            if (prodTop < 700) {
                item.classList.add('ativo')
            }
        })
    }

    initScrollSuave(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    animaMenuHamburguer() {
        this.menuHamburguer.addEventListener('click', event => {
            this.menuNav.classList.toggle('ativo-mobile')

            if (this.menuNav.classList.contains('ativo-mobile')) {
                this.fecharComCliqueFora()
            }
        })
    }

    fecharComCliqueFora() {
        window.addEventListener('click', event => {
            let condition1 = event.srcElement.parentElement.localName
            let condition2 = event.target.parentElement.className
            if (condition1 != 'li' && condition2 != 'menu-hamburguer' && condition2 != 'container top') {
                this.menuNav.classList.remove('ativo-mobile')
            }
        })
    };

    verificaResize() {
        window.addEventListener('resize', () => {
            if (this.resizeW) {
                this.menuNav.classList.remove('ativo-mobile')
            }
        })
    }
}
