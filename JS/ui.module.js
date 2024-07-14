import Meal from "./meal.module.js";

export default class UI {
  asideToggle() {
    $(".aside-menu").animate({ width: "toggle" });
    $("#aside-btn").toggleClass("fa-align-justify").toggleClass("fa-xmark");
    let opening = $("#aside-btn").hasClass("fa-xmark") ? 0 : 300;
    for (let index = 0; index < 5; index++) {
      $(`#list li:nth(${index})`).animate(
        {
          top: opening,
        },
        500 + index * 100
      );
    }
  }

  showLoadingScreen() {
    $(".loading").removeClass("hidden");
  }

  hideLoadingScreen() {
    $(".loading").addClass("hidden");
  }

  showHome() {
    $(".home-meals").removeClass("hidden").siblings().addClass("hidden");
  }
  changePage(className) {
    $(`.${className}`).removeClass("hidden").siblings().addClass("hidden");
    this.asideToggle();
  }

  displayMeals(data) {
    let container = "";
    for (let i = 0; i < 20 && i < data.length; i++) {
      container += `
    <div class="meal-item group" data-id=${data[i].idMeal}>
      <img src="${data[i].strMealThumb}" alt="meal image" class="w-full">
      <div class="meal-layer">
        <p class="text-black text-2xl font-medium">${data[i].strMeal}</p>
      </div>
    </div>`;
    }
    $(".home-meals").html(container);
    this.hideLoadingScreen();
    new Meal();
  }

  displayCategories(data) {
    let container = "";
    for (let i = 0; i < 20 && i < data.length; i++) {
      container += `
      <div class="meal-item group category-item" data-category=${data[i].strCategory}>
            <img src="${data[i].strCategoryThumb}" alt="meal image" class="w-full">
            <div class="meal-layer f-col text-black">
              <h1 class="font-medium text-[25px]">${data[i].strCategory}</h1>
              <p class="font-normal text-[16px] line-clamp-2">${data[i].strCategoryDescription}</p>
            </div>
          </div>
          `;
    }
    $(".categories").html(container);
    this.hideLoadingScreen();
  }

  displayAreas(data) {
    let container = "";
    for (let i = 0; i < 20 && i < data.length; i++) {
      container += `
      <div class="area-item f-col justify-center gap-5 items-center cursor-pointer" data-area=${data[i].strArea}>
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <p>${data[i].strArea}</p>
      </div>
          `;
    }
    $(".area").html(container);
    this.hideLoadingScreen();
  }

  displayIngredients(data) {
    let container = "";
    for (let i = 0; i < 20 && i < data.length; i++) {
      container += `
      <div class="ingredients-item f-col justify-center gap-5 items-center cursor-pointer" data-item="${data[i].strIngredient}">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3 class="font-medium text-[25px]">${data[i].strIngredient}</h3>
        <p class="font-normal text-[16px] line-clamp-2">${data[i].strDescription}</p>
      </div>
          `;
    }
    $(".ingredients").html(container);
    this.hideLoadingScreen();
  }

  displayDetails(data) {
    let container = ``;
    let listTags = ``;
    let listRecipes = ``;
    for (let index = 1; index < 21; index++) {
      if (data["strIngredient" + index]) {
        listRecipes += `
            <li class="recipes-item">${data["strMeasure" + index]} ${
          data["strIngredient" + index]
        }</li>
        `;
      } else {
        break;
      }
    }
    const youtubeBtn = data.strYoutube
      ? `<a href="${data.strYoutube}" class="hover:bg-[#BB2D3B] bg-[#dc3545] link-btn" target="_blank">Youtube</a>`
      : "";
    const sourceBtn = data.strSource
      ? `<a href="${data.strSource}" class="hover:bg-[#157347] bg-[#198754] link-btn" target="_blank">Source</a>`
      : "";
    if (data.strTags) {
      const tagsString = data.strTags;
      const tagsArray = tagsString.split(",");
      tagsArray.forEach((element) => {
        listTags += `
            <li class="tags-item">${element}</li>
            `;
      });
    }
    container = ` <div class="meal-image  md:col-span-4">
          <img src="${data.strMealThumb}" alt="" class="rounded-lg">
          <h3 class="font-medium text-3xl">${data.strMeal}</h3>
        </div>
        <div class="meal-info f-col gap-2 md:col-span-8">
          <h2 class="font-medium text-3xl">Instructions</h2>
          <p>${data.strInstructions}</p>
          <p class="text-2xl font-bold">Area : <span class="font-medium text-2xl">${data.strArea}</span></p>
          <p class="text-2xl font-bold">Category : <span class="font-medium text-2xl">${data.strCategory}</span></p>
          <p class="text-2xl font-bold">Recipes : </p>
          <ul class="text-[#055160] list-items">
            ${listRecipes}
          </ul>
          <p class="text-2xl font-bold">Tags: </p>
          <ul class=" text-[#842029] list-items mb-2">
          ${listTags}
          </ul>
        <div>
        ${youtubeBtn}
        ${sourceBtn}
        </div>
        </div>`;
    $(".meal-details")
      .html(container)
      .removeClass("hidden")
      .siblings()
      .addClass("hidden");
    this.hideLoadingScreen();
  }
}
