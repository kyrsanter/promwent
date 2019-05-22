window.addEventListener('load', function() {

    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');
    var slideCard = document.querySelector('.slide-item');
    var slideCardsWrapperSmall = document.querySelector('.clients__slider').offsetWidth;
    var slideCardsWrapper = document.querySelector('.clients__slider-items_wrapper');
    slideCardsWrapper.addEventListener('touchstart', start);
    slideCardsWrapper.addEventListener('touchmove', move);
    slideCardsWrapper.addEventListener('touchend', end);
    var left = 0;
    var slideCardWidth = slideCard.offsetWidth;
    var slideCardsWrapperWidth = slideCardsWrapper.offsetWidth;
    nextBtn.disabled = true;
    nextBtn.style.background = "rgba(183, 41, 109, 1)";
    prevBtn.addEventListener('click', toLeft);
    nextBtn.addEventListener('click', toRight);

    function toLeft() {
        nextBtn.disabled = false;
        nextBtn.style.background = "#224d96";
        left = left - slideCardWidth;
        if (left === slideCardsWrapperSmall - slideCardsWrapperWidth) {
            this.disabled = true;
            this.style.background = "rgba(183, 41, 109, 1)";
        }
        slideCardsWrapper.style.left = left + 'px';
    }
    function toRight() {
        prevBtn.disabled = false;
        prevBtn.style.background = "#224d96";
        left = left + slideCardWidth;
        if (left === 0) {
            this.disabled = true;
            this.style.background = "rgba(183, 41, 109, 1)";
        }
        slideCardsWrapper.style.left = left + 'px';
    }

    var posStart = 0;

    

    function start(e) {
        posStart = e.touches[0].screenX;
        return;
    }

    function end(e) {
        var posEnd = e.changedTouches[0].screenX;
        moveSlide(posEnd) 
    }

    function moveSlide(end) {
        if (posStart > end) {
            console.log("left");
            left = left + (end - posStart);
            if (left > slideCardsWrapperSmall - slideCardsWrapperWidth) {
                left = slideCardsWrapperSmall - slideCardsWrapperWidth;
            }
            slideCardsWrapper.style.left = left + 'px';
        }
        else {
            left = left - (posStart - end);
            if (left > 0) {
                slideCardsWrapper.classList.add("slide_anim");
                left = 0;
            }
            slideCardsWrapper.style.left = left + 'px';
            console.log("right");
        }
    }

    function move(e) {
        
    }
})