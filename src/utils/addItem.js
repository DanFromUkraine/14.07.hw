import { data } from "./getData";

setTimeout(() => {
  const cards = document.querySelectorAll(".order");
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      data.then(resolvedData => {
        add_to_ls_cart(
          resolvedData.drinks.find(drink => drink.idDrink === e.target.dataset.id)
        );
      });
    });
  })
}, 1000);

function add_to_ls_cart({strDrink, price}) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const ls_add = value => localStorage.setItem("cart", JSON.stringify(value));
  if (cart) {
    const new_cart = [...cart, {strDrink, price}];
    ls_add(new_cart);
  } else {
    ls_add({strDrink, price});
  }
}