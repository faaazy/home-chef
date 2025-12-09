import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/styles/variables.css";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import {
  recipeLoader,
  randomMealLoader,
  mealCategoriesLoader,
} from "./utils/loaders";
import Category from "./pages/Category";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: randomMealLoader,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
          loader: recipeLoader,
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
