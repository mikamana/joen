
window.addEventListener("resize", e => {

    const query = window.matchMedia("(max-width: 1000px)");

    if (query.matches) {

        document.querySelectorAll("nav.menu_nav ul.submenu_list").forEach(node => {

            node.style.display = "none";

        })

        document.querySelector(".sub_on").style.display = "block";


        document.querySelectorAll(".menu_nav>ul>li>a").forEach(node => {

            node.addEventListener("click", e => {
                document.querySelectorAll(".submenu_list").forEach(node => {
                    node.style.display = "none";
                })
                e.target.nextElementSibling.style.display = "block";
            })

        })



    } else {

        document.querySelectorAll("nav.menu_nav ul.submenu_list").forEach(node => {

            node.style.display = "block";

        })
    }

})


document.querySelectorAll(".gnb_menu>ul>li").forEach(node => {

    node.addEventListener("mouseenter", e => {
        setTimeout(() => {
            e.target.classList.add('active')
            e.target.lastElementChild.style.transition = "all 1s"
        }, 1)

    })

    node.addEventListener('mouseleave', e => {

        e.target.classList.remove("active")

    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})


document.querySelector(".menu_bar").addEventListener("click", e => {

    document.querySelector(".menu_all_wrap").style.display = "block";


})

document.querySelector(".menu_close_btn").addEventListener("click", e => {

    document.querySelector(".menu_all_wrap").style.display = "none";

})

document.querySelectorAll(".menu_nav ul.submenu_list>li>a").forEach(node => {

    node.addEventListener("mouseenter", e => {

        e.target.classList.add("active")

    })

    node.addEventListener("mouseleave", e => {

        e.target.classList.remove("active")
    })
})//active


const changeHandler = () => {
    const query = window.matchMedia("(max-width: 1000px)");

    if (query.matches) {

        document.querySelector(".menu_bar").addEventListener('click', e => {

            document.querySelectorAll("nav.menu_nav ul.submenu_list").forEach(node => {

                node.style.display = "none";

            })
            document.querySelector(".sub_on").style.display = "block";

        })

        document.querySelectorAll(".menu_nav>ul>li>a").forEach(node => {

            node.addEventListener("click", e => {
                document.querySelectorAll(".submenu_list").forEach(node => {
                    node.style.display = "none";
                })
                e.target.nextElementSibling.style.display = "block";
            })

        })

    } else {
        document.querySelector(".menu_bar").addEventListener('click', e => {

            document.querySelectorAll("nav.menu_nav ul.submenu_list").forEach(node => {

                node.style.display = "block";

            })

        })

    }

}


changeHandler()