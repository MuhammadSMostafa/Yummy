import Display from "./display.module.js";
import UI from "./ui.module.js";

export default class Category {
  constructor() {
    this.getCategories();
  }

  async getCategories() {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchData();
    ui.displayCategories(data.categories);
    new Display("c");
  }

  async fetchData() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    return data;
  }
}
