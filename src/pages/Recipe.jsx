import { HeartIcon, Link, Youtube } from "lucide-react";
import { useLoaderData } from "react-router";
import Tag from "../components/UI/Tag/Tag";
import "./Recipe.css";
import { useFavorites } from "../context/FavoritesContext";

const Recipe = () => {
  const recipeData = useLoaderData();

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const {
    idMeal,
    strMeal,
    strArea,
    strCategory,
    strInstructions,
    strMealThumb,
    dateModified,
    strSource,
    strYoutube,
  } = recipeData.meals[0];

  console.log(recipeData.meals[0]);

  const timestamp = Date.parse(dateModified);
  const updatedDate = new Date(timestamp);

  const updatedDateConverted = updatedDate.toLocaleDateString();

  const styledInstructions = strInstructions.split(".");

  const ingredients = [];

  for (const key in recipeData.meals[0]) {
    if (key.startsWith("strIngredient")) {
      if (
        recipeData.meals[0][key] !== null &&
        recipeData.meals[0][key] !== ""
      ) {
        ingredients.push({
          ingredient: recipeData.meals[0][key],
        });
      }
    }
  }

  const clickFavoriteHandler = () => {
    if (isFavorite(idMeal)) {
      removeFavorite(idMeal);
    } else {
      const recipeData = {
        id: idMeal,
        title: strMeal,
        imgSrc: strMealThumb,
      };

      addFavorite(recipeData);
    }
  };

  return (
    <section className="recipe">
      <div className="container">
        <div className="recipe__item">
          <div className="recipe__item-tags">
            <Tag className={"tag--bordered"} linkTo={`/area/${strArea}`}>
              {strArea}
            </Tag>
            <Tag
              className={"tag--bordered"}
              linkTo={`/category/${strCategory}`}
            >
              {strCategory}
            </Tag>
            {ingredients.map(({ ingredient }, index) => (
              <Tag
                key={index}
                className={"tag--bordered"}
                linkTo={`/ingredient/${ingredient.split(" ").join("_")}`}
              >
                {ingredient}
              </Tag>
            ))}
          </div>

          <div className="recipe__heading">
            <h1 className="recipe__title">{strMeal}</h1>

            {isFavorite(idMeal) ? (
              <HeartIcon
                onClick={clickFavoriteHandler}
                className="favorite-icon favorite-icon--active"
                size={30}
              />
            ) : (
              <HeartIcon
                onClick={clickFavoriteHandler}
                className="favorite-icon "
                size={30}
              />
            )}
          </div>

          <div className="recipe__update">
            {dateModified !== null ? `Updated on ${updatedDateConverted}` : ""}
          </div>

          <div className="recipe__sources">
            <div className="recipe__source">
              <a href={strSource} target="_blank" title="Recipe source">
                <Link />
              </a>
            </div>
            <div className="recipe__source">
              <a href={strYoutube} target="_blank" title="Youtube recipe">
                <Youtube />
              </a>
            </div>
          </div>

          <div className="recipe__tutorial">
            <div className="recipe__thumbnail">
              <img src={strMealThumb} alt="" />
            </div>

            <div className="recipe__tutorial-ingredients">
              <div className="recipe__tutorial-ingredients__title">
                Ingredients
              </div>

              <ul className="recipe__desc">
                {ingredients.map((ingredient, i) => (
                  <li key={i}>
                    <strong>{i}</strong> {ingredient.ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="recipe__tutorial-instructions">
              <div className="recipe__tutorial-instructions__title">
                Instructions
              </div>
              <ul className="recipe__desc">
                {styledInstructions.map((str, i) => (
                  <li key={i}>
                    {str.length > 1 ? `${i} - ${str}` : null}
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
