
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".scroll-image");
    const finalMessage = document.getElementById("finalMessage");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function onScroll() {
        images.forEach(img => {
            if (isInViewport(img)) {
                img.classList.add("visible");
            }
        });

        if (isInViewport(finalMessage)) {
            finalMessage.classList.add("show");
        }
    }

    const heartContainer = document.querySelector('.heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

    window.addEventListener("scroll", onScroll);
    onScroll();
});
