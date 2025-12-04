import { Utensils, Youtube } from "lucide-react";
import { useLoaderData } from "react-router";

const Recipe = () => {
  const recipeData = useLoaderData();

  const { strMeal, strInstructions, dateModified } = recipeData.meals[0];

  console.log(recipeData.meals[0]);

  const timestamp = Date.parse(dateModified);
  const updatedDate = new Date(timestamp);

  const updatedDateConverted = updatedDate.toLocaleDateString();

  return (
    <div>
      <div className="container">
        <div className="recipe__item">
          {
            /* there will be some tags
           by category and country area */
            //
            //
          }

          <h1>{strMeal}</h1>

          <p>{strInstructions}</p>

          <div className="recipe__update">
            Updated on {updatedDateConverted}
          </div>

          <div className="recipe__sources">
            <div className="recipe__source">
              <a
                href="https://www.bbcgoodfood.com/recipes/chorizo-tomato-salad"
                target="_blank"
                title="Recipe source"
              >
                <Utensils />
                Source
              </a>
            </div>
            <div className="recipe__source">
              <a
                href="https://www.youtube.com/watch?v=RFlENguMJNA"
                target="_blank"
                title="Youtube recipe"
              >
                <Youtube />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
