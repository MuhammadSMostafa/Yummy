import UI from "./ui.module.js";

export default class Meal {
  constructor() {
    const that = this;
    $(".meal-item").on("click", function () {
      that.getCurrentMeal(this.dataset.id);
    });
  }

  async getCurrentMeal(id) {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchData(id);
    ui.displayDetails(data.meals[0]);
  }

  async fetchData(id) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data;
  }
}
