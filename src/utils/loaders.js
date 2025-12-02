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
  const [randomMeal, breakfast, chicken, seafood, dessert] = await Promise.all([
    searchApi.getRandomMeal(),
    searchApi.getHomeCategories("Breakfast"),
    searchApi.getHomeCategories("Chicken"),
    searchApi.getHomeCategories("Seafood"),
    searchApi.getHomeCategories("Dessert"),
  ]);

  if (!randomMeal) {
    throw new Response("meal not found", { status: 404 });
  }

  return {
    randomMeal,
    categories: [breakfast, chicken, seafood, dessert],
  };
};
