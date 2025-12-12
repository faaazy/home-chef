import { createBrowserRouter, RouterProvider } from "react-router";
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
} from "./utils/loaders";
import Category from "./pages/Category";
import CategoryList from "./pages/categoryList";

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
          path: "category/",
          element: <CategoryList />,
          loader: allMealCategoriesLoader,
        },
        {
          path: "category/:category",
          element: <Category />,
          loader: mealCategoriesLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
