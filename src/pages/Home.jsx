import "./Home.css";
import { useLoaderData, useNavigate } from "react-router";

const Home = () => {
  const mealData = useLoaderData();
  const navigate = useNavigate();

  console.log(mealData);

  const { strMeal, strMealThumb, idMeal } = mealData.res.meals[0];

  const {
    strMeal: categoryMealTitle,
    strMealThumb: categoryMealImg,
    idMeal: categoryMealId,
  } = mealData.category.meals[0];

  console.log(mealData.category);

  const randomRecipeClickHandler = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <section className="home">
      <div className="container">
        <h1 className="home__title">Try This Out!</h1>

        <div className="home__grid">
          <div
            className="home__item"
            onClick={() => randomRecipeClickHandler(idMeal)}
          >
            <h2 className="home__item-title">{strMeal}</h2>
            <div className="home__item-img__wrapper">
              <img src={strMealThumb} alt="" className="home__item-img" />
            </div>
          </div>

          <div className="home__grid-categories">
            <div className="home__grid-categories__item">
              <h3 className="home__grid-categories__item-title">
                {categoryMealTitle}
              </h3>
              <img src={categoryMealImg} alt={categoryMealTitle} />
            </div>

            <div className="home__grid-categories__item">
              <h3 className="home__grid-categories__item-title">
                {categoryMealTitle}
              </h3>
              <img src={categoryMealImg} alt={categoryMealTitle} />
            </div>

            <div className="home__grid-categories__item">
              <h3 className="home__grid-categories__item-title">
                {categoryMealTitle}
              </h3>
              <img src={categoryMealImg} alt={categoryMealTitle} />
            </div>

            <div className="home__grid-categories__item">
              <h3 className="home__grid-categories__item-title">
                {categoryMealTitle}
              </h3>
              <img src={categoryMealImg} alt={categoryMealTitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
