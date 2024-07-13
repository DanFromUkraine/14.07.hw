const BASE_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
import tpl from "../templates/render_cards.handlebars";

export const data = getData();
function getData() {
  return fetch(BASE_URL).then((resp) => {
    const promise_data = resp.json();
    promise_data.then(data_array => {
        renderCard(data_array);
        return data_array.drinks;
    })
    
    return promise_data;
});
}

function renderCard(data) {
  const { drinks } = data;
  drinks.forEach((drink) => {
    drink.price = Math.random() * 1000;
  });
  document
    .querySelector(".cards")
    .insertAdjacentHTML("afterbegin", tpl(drinks));
}
