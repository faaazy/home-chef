import { useLoaderData, useNavigate, useParams } from "react-router";
import "./IngredientsList.css";

const IngredientMeals = () => {
  const { meals } = useLoaderData();
  const navigate = useNavigate();

  const { ingredient } = useParams();

  console.log(meals, ingredient);

  const recipeClickHandler = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <section className="ingredient-meals">
      <div className="container">
        <h2 className="ingredient-meals__title">{`${ingredient[0].toUpperCase()}${ingredient.slice(
          1
        )}`}</h2>

        <div className="ingredient-meals__grid">
          {meals.map((meal) => (
            <div
              onClick={() => recipeClickHandler(meal.idMeal)}
              className="ingredient-meals__grid-item"
              key={meal.idMeal}
            >
              <div className="ingredient-meals__grid-item__img">
                <img
                  loading="lazy"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </div>

              <div className="ingredient-meals__grid-item__img-title">
                <h4>{meal.strMeal}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientMeals;
