import { useLoaderData, useNavigate, useParams } from "react-router";
import "./Category.css";

const Category = () => {
  const { meals } = useLoaderData();
  const navigate = useNavigate();

  const { category } = useParams();

  console.log(meals, category);

  const recipeClickHandler = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <section className="category">
      <div className="container">
        <h2 className="category__title">{category}</h2>

        <div className="category__grid">
          {meals.map((meal) => (
            <div
              onClick={() => recipeClickHandler(meal.idMeal)}
              className="category__grid-item"
              key={meal.idMeal}
            >
              <div className="category__grid-item__img">
                <img
                  loading="lazy"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </div>

              <div className="category__grid-item__img-title">
                <h4>{meal.strMeal}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
