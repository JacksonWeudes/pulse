function heroAnimation()
{
    const hero = document.querySelector(".hero")

    window.addEventListener("scroll", () => {
        if(window.scrollY > 70){
            hero.classList.add("fade-out")
        }
        else{
            hero.classList.remove("fade-out")
        }
    })
}

function hideMobileNav()
{
    const mobileNav = document.querySelector(".mobile-nav")

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const windowHeight = window.innerHeight
        const docHeight = document.documentElement.scrollHeight

        if(scrollTop + windowHeight >= docHeight){
            mobileNav.classList.add("hide")
        }
        else{
            mobileNav.classList.remove("hide")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    heroAnimation()
    hideMobileNav()
})