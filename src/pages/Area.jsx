import { useLoaderData, useNavigate, useParams } from "react-router";
import "./Area.css";

const Area = () => {
  // TODO: need to optimize loading(cuz 50 pictures load at one time)

  const { meals } = useLoaderData();
  const navigate = useNavigate();

  const { area } = useParams();

  console.log(meals, area);

  const recipeClickHandler = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <section className="area">
      <div className="container">
        <h2 className="area__title">{`${area[0].toUpperCase()}${area.slice(
          1
        )}`}</h2>

        <div className="area__grid">
          {meals.map((meal) => (
            <div
              onClick={() => recipeClickHandler(meal.idMeal)}
              className="area__grid-item"
              key={meal.idMeal}
            >
              <div className="area__grid-item__img">
                <img
                  loading="lazy"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </div>

              <div className="area__grid-item__img-title">
                <h4>{meal.strMeal}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Area;
