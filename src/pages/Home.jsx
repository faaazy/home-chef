import { useLoaderData } from "react-router";

const Home = () => {
  const mealData = useLoaderData();

  const { strMeal, strMealThumb } = mealData.meals[0];

  return (
    <div>
      <div className="container">
        <h1 className="home__title">Try this out!</h1>

        <div className="home__item">
          <h2 className="home__item-title">{strMeal}</h2>
          <img src={strMealThumb} alt="" className="home__item-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
