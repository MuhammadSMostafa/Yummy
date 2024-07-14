import UI from "./ui.module.js";

export default class Display {
  constructor(currentItems) {
    const that = this;
    this.currentItems = currentItems;
    if (currentItems === "i") {
      $(".ingredients-item").on("click", function () {
        that.items = this.dataset.item;
        that.getData();
      });
    } else if (currentItems === "a") {
      $(".area-item").on("click", function (e) {
        that.items = this.dataset.area;
        that.getData();
      });
    } else if (currentItems === "c") {
      $(".category-item").on("click", function () {
        that.items = this.dataset.category;
        that.getData();
      });
    }
  }

  async getData() {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchData();
    ui.displayMeals(data.meals);
    ui.showHome();
  }

  async fetchData() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${this.currentItems}=${this.items}`
    );
    const data = await response.json();
    return data;
  }
}
