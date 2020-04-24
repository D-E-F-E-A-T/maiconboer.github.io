// animação icones seção vantagens
function animationIcon() {
    // icones seção vantagens
    const iconesVantagens = document.querySelectorAll('.svg-vantagens div')
    function animaScroll() {
        iconesVantagens.forEach((item, index) => {
            const iconeTop = item.getBoundingClientRect().top
            if (iconeTop < 700) {
                item.classList.add("icone-" + index);
                item.classList.add("ativo");
            }
        })
        window.addEventListener('scroll', animaScroll)
    }
    animaScroll();
}
animationIcon();
// end animationIcon 

// animação sections produto
function animationSection() {
    // animação seção produtos
    const divProdutos = document.querySelectorAll('.produto-individual')
    function animaScrollProd() {
        divProdutos.forEach((item) => {
            const prodTop = item.getBoundingClientRect().top
            if (prodTop < 700) {
                item.classList.add('ativo')
            }
        })
        window.addEventListener('scroll', animaScrollProd)
    }
    animaScrollProd()
}
animationSection();
// end animationSection

// animação scroll suave
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('body a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
        linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();
// end animação scroll suave

// animação menu hamburger
function initMenu() {
    const menuNav = document.querySelector('.menu-top')
    const menuHamburguer = document.querySelector('.menu-hamburguer')
    menuHamburguer.addEventListener('click', function() {
        menuNav.classList.toggle('ativo-mobile')
    })
}
initMenu()

// animação para fechar recolher menu caso houver resize
function verificaResize() {
    window.addEventListener('resize', function() {
        const resizeTrue = window.innerWidth
        const menuHamburguer = document.querySelector('.menu-top')
        if(resizeTrue) {
            menuHamburguer.classList.remove('ativo-mobile')
        }
    })
}
verificaResize()
