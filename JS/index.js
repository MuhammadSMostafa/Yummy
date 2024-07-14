"use strict";
import UI from "./ui.module.js";
import Search from "./search.module.js";
import Ingredients from "./ingredients.module.js";
import Category from "./category.module.js";
import Area from "./area.module.js";
import Contact from "./contact.module.js";
new Search("", false);
const ui = new UI();

$("#aside-btn").on("click", function (e) {
  ui.asideToggle();
});

$("#search").on("click", function (e) {
  $(".search").removeClass("hidden").siblings().addClass("hidden");
  $(".home-meals").html("").removeClass("hidden");
  ui.asideToggle();
});

$("#categories").on("click", function (e) {
  ui.changePage(e.target.id);
  new Category();
});

$("#area").on("click", function (e) {
  ui.changePage(e.target.id);
  new Area();
});

$("#ingredients").on("click", function (e) {
  ui.changePage(e.target.id);
  new Ingredients();
});

$("#contact").on("click", function (e) {
  ui.changePage(e.target.id);
  new Contact();
});

$("#searchName").on("input", function (e) {
  $("#searchFirstLetter").val("");
  new Search($(e.target).val(), false);
});

$("#searchFirstLetter").on("input", function (e) {
  $("#searchName").val("");
  if ($(e.target).val().length == 1) {
    new Search($(e.target).val(), true);
  }
});
