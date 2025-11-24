import { useLoaderData } from "react-router";

const Recipe = () => {
  const recipeData = useLoaderData();

  const { strMeal, strInstructions } = recipeData.meals[0];

  console.log(recipeData.meals[0]);

  return (
    <div>
      <div className="container">
        <h1>{strMeal}</h1>

        <p>{strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
