import "./Home.css";
import { useLoaderData, useNavigate } from "react-router";

const Home = () => {
  const mealData = useLoaderData();
  const navigate = useNavigate();

  console.log(mealData);

  const { strMeal, strMealThumb, idMeal } = mealData.randomMeal.meals[0];

  const randomRecipeClickHandler = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  // TODO: think about it, how to get meals by category if i only have: id and title.
  // or get from api before everything idk
  const popularCategoryClickHandler = (category) => {
    console.log(category);

    // navigate(`/category/${category}`);
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
              <img
                loading="lazy"
                src={strMealThumb}
                alt={strMealThumb}
                className="home__item-img"
              />
            </div>
          </div>

          <div className="home__grid-categories">
            <h2 className="home__grid-categories__title">Popular Categories</h2>
            <div className="home__grid-categories__items">
              {mealData.categories.map(({ meals }) => (
                <div
                  onClick={() => popularCategoryClickHandler(meals[1].strMeal)}
                  className="home__grid-categories__item"
                  key={meals[1].idMeal}
                >
                  <div className="home__grid-categories__item-wrapper">
                    <img
                      loading="lazy"
                      src={meals[1].strMealThumb}
                      alt={meals[1].strMealThumb}
                    />
                  </div>
                  <h3 className="home__grid-categories__item-title">
                    {meals[1].strMeal}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
