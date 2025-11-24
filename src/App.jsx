import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/styles/variables.css";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { recipeLoader, randomMealLoader } from "./utils/loaders";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
