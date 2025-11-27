import { useLoaderData } from "react-router";

const Recipe = () => {
  const recipeData = useLoaderData();

  const { strMeal, strInstructions } = recipeData.meals[0];

  console.log(recipeData.meals[0]);

  return (
    <div>
      <div className="container">
        <div className="recipe__item">
          <h1>{strMeal}</h1>

          <p>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
