
$(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function () {

        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/

        var b = $(window).scrollTop();

        if (b > 72) {
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 2,
            },
            1200: {
                items: 3,
                loop: false
            }
        }
    })

    // SMOOTHSCROLL
    $(function () {
        $('.navbar .nav-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

});

window.onload = function () {
    var popup = document.getElementById("linkedin-popup");
    popup.style.display = "block";
    var closeButton = document.getElementById("close-popup");
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
}
$(document).ready(function () {
    // Show the popup
    $('#linkedin-popup').modal('show');
});
// Show Details button functionality
var showDetailsButton = document.getElementById("show-details");
var details = document.getElementById("details");

showDetailsButton.addEventListener("click", function () {
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
});
