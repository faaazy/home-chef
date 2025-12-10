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

  const popularCategoryClickHandler = (category, meal) => {
    console.log(category, meal);
    console.log(mealData);

    navigate(`/category/${category}`);
  };

  return (
    <section className="home">
      <div className="container">
        <h1 className="home__title">Try This Out!</h1>

        <div className="home__grid">
          {mealData && (
            <div
              className="home__item"
              onClick={() => randomRecipeClickHandler(idMeal)}
            >
              <h2 className="home__item-title">{strMeal}</h2>
              <div className="home__item-img__wrapper">
                <img
                  style={{ width: "700px", height: "700px" }}
                  loading="lazy"
                  src={strMealThumb}
                  alt={strMealThumb}
                  className="home__item-img"
                />
              </div>
            </div>
          )}

          <div className="home__grid-categories">
            <h2 className="home__grid-categories__title">Popular Categories</h2>
            <div className="home__grid-categories__items">
              {mealData.categories.map((item) => (
                <div
                  onClick={() =>
                    popularCategoryClickHandler(
                      item.category,
                      item.data.meals[1].strMeal
                    )
                  }
                  className="home__grid-categories__item"
                  key={item.data.meals[1].idMeal}
                >
                  <div className="home__grid-categories__item-wrapper">
                    <img
                      loading="lazy"
                      src={item.data.meals[1].strMealThumb}
                      alt={item.data.meals[1].strMealThumb}
                    />
                  </div>
                  <h3 className="home__grid-categories__item-title">
                    {item.category}
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
