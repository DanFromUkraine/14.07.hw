import render_cart_tpl from "../templates/render_cart.handlebars"

const cart_icon = document.querySelector(".cart-icon");
const cart_cont = document.querySelector(".cart-container");
const close_icon = document.querySelector("[data-action='close-modal']");
const cart_modal = document.querySelector(".cartModal");

function onCloseModal() {
    cart_modal.classList.remove("show-modal");
    cart_cont.classList.remove("show-modal");

   
}

cart_icon.addEventListener("click", () => {
    cart_modal.classList.toggle("show-modal");
    cart_cont.classList.toggle("show-modal");

    // document.querySelector(".cartTable").insertAdjacentHTML("beforeend", render_cart_tpl(JSON.parse(localStorage.getItem("cart"))));

    window.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            onCloseModal();
        }
    })
});

close_icon.addEventListener("click", () => {
    onCloseModal();
})

cart_cont.addEventListener("click", (e) => {
if (e.target === e.currentTarget) {
    onCloseModal();
}
})

