document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contact-modal");
    const button = document.getElementById("contact-button");
    const close = document.querySelector(".close");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
