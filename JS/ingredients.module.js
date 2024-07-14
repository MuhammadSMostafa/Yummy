import Display from "./display.module.js";
import UI from "./ui.module.js";

export default class Ingredients {
  constructor() {
    this.getIngredients();
  }

  async getIngredients() {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchData();
    ui.displayIngredients(data.meals);
    new Display("i");
  }

  async fetchData() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    const data = await response.json();
    return data;
  }
}
