import { searchApi } from "./api";

export const recipeLoader = async ({ params }) => {
  const recipe = await searchApi.getRecipeById(params.id);

  if (!recipe) {
    throw new Response("Recipe not found", { status: 404 });
  }

  console.log(category);

  return recipe;
};

export const randomMealLoader = async () => {
  const res = await searchApi.getRandomMeal();
  const category = await searchApi.getHomeCategories("Breakfast");

  if (!res) {
    throw new Response("meal not found", { status: 404 });
  }

  return {
    res,
    category,
  };
};
