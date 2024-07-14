import UI from "./ui.module.js";

export default class Search {
  constructor(mealName, input) {
    this.input = input;
    this.mealName = mealName;
    this.getMeals();
  }

  async getMeals() {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchDate();
    if (data) {
      ui.displayMeals(data);
    } else {
      ui.hideLoadingScreen();
      $(".home-meals").html("<p>No Data Found</p>");
    }
  }

  async fetchDate() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?${
        this.input ? "f" : "s"
      }=${this.mealName}`
    );
    const data = await response.json();
    return data.meals;
  }
}
