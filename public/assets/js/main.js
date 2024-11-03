// Glide
var glide = new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 3,
    breakpoints: {
        768: {
            perView: 1
        },
        1024: {
            perView: 2
        }
    }
});
glide.mount();

// Masonry
document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
    });
});

// Granim
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: '../assets/images/bg.webp',
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});