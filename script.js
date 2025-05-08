
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

    window.addEventListener("scroll", onScroll);
    onScroll();
});
