import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/variables.css";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import {
  recipeLoader,
  mealCategoriesLoader,
  allMealCategoriesLoader,
  homeLoader,
  areaCategoriesLoader,
  areaMealsLoader,
  ingredientsListLoader,
  ingredientMealsLoader,
} from "./utils/loaders";
import Category from "./pages/Category";
import CategoryList from "./pages/CategoryList";
import AreaList from "./pages/AreaList";
import Area from "./pages/Area";
import IngredientsList from "./pages/IngredientsList";
import IngredientMeals from "./pages/IngredientMeals";
import Pantry from "./pages/Pantry";
import Cookbook from "./pages/Cookbook";
import Favorites from "./pages/Favorites";
import CookbookCreate from "./pages/CookbookCreate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
          loader: recipeLoader,
        },
        {
          path: "category",
          element: <CategoryList />,
          loader: allMealCategoriesLoader,
        },
        {
          path: "category/:category",
          element: <Category />,
          loader: mealCategoriesLoader,
        },
        {
          path: "area",
          element: <AreaList />,
          loader: areaCategoriesLoader,
        },
        {
          path: "area/:area",
          element: <Area />,
          loader: areaMealsLoader,
        },
        {
          path: "ingredient",
          element: <IngredientsList />,
          loader: ingredientsListLoader,
        },
        {
          path: "ingredient/:ingredient",
          element: <IngredientMeals />,
          loader: ingredientMealsLoader,
        },
        {
          path: "pantry",
          element: <Pantry />,
        },
        {
          path: "cookbook",
          element: <Cookbook />,
        },
        {
          path: "cookbook/create",
          element: <CookbookCreate />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
