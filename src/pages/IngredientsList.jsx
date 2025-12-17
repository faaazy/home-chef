import { useLoaderData, useNavigate } from "react-router";
import "./IngredientsList.css";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IngredientsList = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { meals } = useLoaderData();
  const navigate = useNavigate();

  const itemsPerPage = 20;

  useEffect(() => {
    if (meals && meals.length > 0) {
      setAllIngredients(meals);
      setLoading(false);
    }
  }, [meals]);

  const currentIngredients = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allIngredients.slice(startIndex, endIndex);
  }, [allIngredients, currentPage]);

  const totalPages = Math.ceil(allIngredients.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ingredientClickHandler = (ingredient) => {
    const styledIngredient = ingredient.split(" ").join("_");

    navigate(`/ingredient/${styledIngredient}`);
  };

  if (loading) {
    return (
      <section className="ingredient-list">
        <div className="container">
          <div className="loading">Loading ingredients...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="ingredient-list">
      <div className="container">
        <div className="ingredient-list__heading">
          <h2 className="ingredient-list__title">
            {allIngredients.length} Ingredients
          </h2>

          {allIngredients.length > itemsPerPage && (
            <div className="pagination-controls">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                <ChevronLeft size={30} strokeWidth={3} />
              </button>

              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                <ChevronRight size={30} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>

        <div className="ingredient-list__grid">
          {currentIngredients.map((ingredient) => (
            <div
              onClick={() => ingredientClickHandler(ingredient.strIngredient)}
              className="ingredient__grid-item"
              key={ingredient.idIngredient}
            >
              <div className="ingredient__grid-item__img">
                <img
                  loading="lazy"
                  src={ingredient.strThumb}
                  alt={ingredient.strIngredient}
                />
              </div>

              <div className="ingredient__grid-item__img-title">
                <h4>{ingredient.strIngredient}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsList;
