import { searchApi } from "./api";

export const recipeLoader = async ({ params }) => {
  const recipe = await searchApi.getRecipeById(params.id);

  if (!recipe) {
    throw new Response("Recipe not found", { status: 404 });
  }

  return recipe;
};

export const randomMealLoader = async () => {
  const res = await searchApi.getRandomMeal();
  console.log(res);

  if (!res) {
    throw new Response("meal not found", { status: 404 });
  }

  return res;
};
