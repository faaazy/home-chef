import { Utensils, Youtube } from "lucide-react";
import { useLoaderData } from "react-router";
import Tag from "../components/UI/Tag/Tag";
import "./Recipe.css";

const Recipe = () => {
  const recipeData = useLoaderData();

  const { strMeal, strArea, strCategory, strInstructions, dateModified } =
    recipeData.meals[0];

  console.log(recipeData.meals[0]);

  const timestamp = Date.parse(dateModified);
  const updatedDate = new Date(timestamp);

  const updatedDateConverted = updatedDate.toLocaleDateString();

  return (
    <section className="recipe">
      <div className="container">
        <div className="recipe__item">
          <div className="recipe__item-tags">
            {/* TODO: might add tags for ingirdients */}
            <Tag className={"tag--bordered"} linkTo={`/area/${strArea}`}>
              {strArea}
            </Tag>
            <Tag
              className={"tag--bordered"}
              linkTo={`/category/${strCategory}`}
            >
              {strCategory}
            </Tag>
          </div>

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
    </section>
  );
};

export default Recipe;
