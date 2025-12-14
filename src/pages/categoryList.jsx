import { useLoaderData, useNavigate } from "react-router";
import "./Category.css";

const CategoryList = () => {
  const { categories } = useLoaderData();
  const navigate = useNavigate();

  console.log(categories);

  const categoryClickHandler = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <section className="categories">
      <div className="container">
        <h2 className="category__title">Categories</h2>

        <div className="category__grid">
          {categories.map((category) => (
            <div
              onClick={() => categoryClickHandler(category.strCategory)}
              className="category__grid-item"
              key={category.idCategory}
            >
              <div className="category__grid-item__img">
                <img
                  loading="lazy"
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
              </div>

              <div className="category__grid-item__img-title">
                <h4>{category.strCategory}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
