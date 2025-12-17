const API_MEALDB_QUERY = "https://www.themealdb.com/api/json/v1/1/";
const API_SPOONACULAR_QUERY = "https://api.spoonacular.com/recipes/";
const SPOONACULAR_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
// const res = await fetch(
//   `${API_SPOONACULAR_QUERY}complexSearch?query=${query}&apiKey=${SPOONACULAR_KEY}`
// );

export const searchApi = {
  async getSearchResults(query) {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}search.php?s=${query}`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  // recipe by id
  async getRecipeById(id) {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}lookup.php?i=${id}`);
      console.log(res);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  // random meal
  async getRandomMeal() {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}random.php`);
      console.log(res);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  // get categories
  async getCategories() {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}categories.php`);

      if (!res.ok) throw new Error("request failed");

      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async getMealsByCategory(category) {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}filter.php?c=${category}`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getAreaCategories() {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}list.php?a=list`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getAreaMeals(area) {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}filter.php?a=${area}`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getIngredientsList() {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}list.php?i=list`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },

  async getMealsByIngredient(ingredient) {
    try {
      const res = await fetch(`${API_MEALDB_QUERY}filter.php?i=${ingredient}`);

      if (!res.ok) throw new Error("request failed");

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  },
};
