import { useState } from "react";
import { Link } from "react-router";
import "./Cookbook.css";

const Cookbook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("customRecipes");
    return stored ? JSON.parse(stored) : [];
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="cookbook">
      <div className="container">
        <h1 className="cookbook__title">Cookbook</h1>
        <p className="cookbook__subtitle">Here are your own recipes</p>

        {recipes.length === 0 ? (
          <div className="empty">
            <h3>Cookbook is empty</h3>
            <Link to="/cookbook/create">Create new Recipe</Link>
          </div>
        ) : (
          <>
            <div className="cookbook__actions">
              <div className="cookbook__actions-search">
                <input
                  type="text"
                  placeholder="Search your recipes..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="cookbook__actions-create">
                <Link to="/cookbook/create">Create new Recipe</Link>
              </div>
            </div>
            <div className="cookbook__content">
              <div className="cookbook__content-stats">
                <div className="cookbook__content-stats__num">
                  {recipes.length}
                </div>
                <div className="cookbook__content-stats__title">Recipes</div>
              </div>

              {searchQuery && filteredRecipes.length === 0 ? (
                <div className="empty">
                  <p>Nothing found for {searchQuery}</p>
                  <button onClick={() => setSearchQuery("")}>
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="cookbook__grid">
                  {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="cookbook__grid-card">
                      <h3>{recipe.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cookbook;
