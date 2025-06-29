document.addEventListener("DOMContentLoaded", function () {
    const questionHeaders = document.querySelectorAll('li h2.question');

    questionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const parentLi = this.closest('li');
            if (parentLi) {
                parentLi.classList.toggle('collapsed');
            }
        });
    });
})