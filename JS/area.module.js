import Display from "./display.module.js";
import UI from "./ui.module.js";

export default class Area {
  constructor() {
    this.getAreas();
  }

  async getAreas() {
    const ui = new UI();
    ui.showLoadingScreen();
    const data = await this.fetchData();
    ui.displayAreas(data.meals);
    new Display("a");
  }

  async fetchData() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await response.json();
    return data;
  }
}
