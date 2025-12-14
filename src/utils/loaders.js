import { searchApi } from "./api";

export const recipeLoader = async ({ params }) => {
  const recipe = await searchApi.getRecipeById(params.id);

  if (!recipe) {
    throw new Response("Recipe not found", { status: 404 });
  }

  console.log(recipe);

  return recipe;
};

export const homeLoader = async () => {
  const [randomMeal, categories] = await Promise.all([
    searchApi.getRandomMeal(),
    searchApi.getCategories(),
  ]);

  if (!randomMeal) {
    throw new Response("meal not found", { status: 404 });
  }

  return {
    randomMeal,
    categories,
  };
};

export const mealCategoriesLoader = async ({ params }) => {
  const categoryMeals = await searchApi.getMealsByCategory(params.category);

  if (!categoryMeals) {
    throw new Response("meals by this category not found", { status: 404 });
  }

  return categoryMeals;
};

export const allMealCategoriesLoader = async () => {
  const mealCategories = await searchApi.getCategories();

  if (!mealCategories) {
    throw new Response("meal categories are not found", { status: 404 });
  }

  return mealCategories;
};

export const areaCategoriesLoader = async () => {
  const areaCategories = await searchApi.getAreaCategories();

  if (!areaCategories) {
    throw new Response("area categories are not found", { status: 404 });
  }

  return areaCategories;
};

export const areaMealsLoader = async ({ params }) => {
  const areaMeals = await searchApi.getAreaMeals(params.area);

  if (!areaMeals) {
    throw new Response("area meals are not found", { status: 404 });
  }

  return areaMeals;
};

export const ingredientsListLoader = async () => {
  const ingredientsList = await searchApi.getIngredientsList();

  if (!ingredientsList) {
    throw new Response("area categories are not found", { status: 404 });
  }

  return ingredientsList;
};

export const ingredientMealsLoader = async ({ params }) => {
  const ingredientMeals = await searchApi.getMealsByIngredient(
    params.ingredient
  );

  if (!ingredientMeals)
    throw new Response("meals by ingredient are not found", { status: 404 });

  return ingredientMeals;
};
