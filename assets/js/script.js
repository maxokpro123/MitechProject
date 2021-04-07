$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            766: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
});
jQuery("#carousel2").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },

        768: {
            items: 3
        },

        992: {
            items: 4
        },

        1200: {
            items: 6
        }
    }
});
window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
var boxSearch = {
    run: function() {
        this.see();
        this.close();
    },
    see: function() {
        var buttonSearch = document.querySelector('.button-search');
        var buttonSearch2 = document.querySelector('.button-search2')
        var boxSearch = document.querySelector('.showSearch');
        buttonSearch.addEventListener('click', function() {
                boxSearch.classList.add('see');
            }),
            buttonSearch2.addEventListener('click', function() {
                boxSearch.classList.add('see');
            })
    },
    close: function() {
        var buttonClose = document.querySelector('.close');
        var boxSearch = document.querySelector('.showSearch');
        buttonClose.addEventListener('click', function() {
            boxSearch.classList.remove('see');
        })
    }
}
boxSearch.run();
var navigationMobie = {
    run: function() {
        this.show();
        this.hide();
    },
    show: function() {
        var wrapper = document.querySelector('.wrapper');
        var menuButton = document.querySelector('.bar');
        var overlay = document.querySelector('.back__drop');
        var siteMenu = document.querySelector('.menu__responsive');
        menuButton.addEventListener('click', function() {
            overlay.classList.add('show');
            siteMenu.classList.add('show');
            wrapper.classList.add('tele');
        })

    },
    hide: function() {
        var wrapper = document.querySelector('.wrapper');
        var overlay = document.querySelector('.back__drop');
        var closeMenu = document.querySelector('.close__menu');
        var siteMenu = document.querySelector('.menu__responsive');
        closeMenu.addEventListener('click', function() {
                overlay.classList.remove('show');
                siteMenu.classList.remove('show');
                wrapper.classList.remove('tele');
            }),
            overlay.addEventListener('click', function() {
                overlay.classList.remove('show');
                siteMenu.classList.remove('show');
                wrapper.classList.remove('tele');
            })
    }
}
navigationMobie.run();
//navSearch
var navSearch = {
    run: function() {
        this.show();

    },
    show: function() {
        var dots = document.querySelector('.dot__3 .dot__3-link');
        var nav_search = document.querySelector('.nav__search');
        var banner = document.querySelector('.banner');
        var nav__searchlink = document.querySelector('.nav__search-link');
        var boxSearch = document.querySelector('.showSearch')
        dots.addEventListener('click', function() {
                nav_search.classList.toggle('show__2');
            }),
            nav__searchlink.addEventListener('click', function() {
                boxSearch.classList.add('see');
            }),
            banner.addEventListener('click', function() {
                nav_search.classList.remove('show__2');
            })

    },

}
navSearch.run();
//Dropdown
var click = document.querySelector('.box__menu .list__item .list__item-link .link__icon');
for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = document.querySelector('.panel');
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "block";
        }
    });
}