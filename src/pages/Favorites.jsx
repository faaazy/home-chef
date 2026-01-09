import { Link, useNavigate } from "react-router";
import { useFavorites } from "../context/FavoritesContext";
import { X } from "lucide-react";
import "./Favorites.css";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  const navigate = useNavigate();

  return (
    <section className="favorites">
      <div className="container">
        <h1 className="favorites__title">Favorites</h1>

        {favorites.length === 0 ? (
          <div className="empty">
            <h3>Favorites are empty</h3>
            <Link to="/">View all Recipes</Link>
          </div>
        ) : (
          <>
            <div className="favorites__content">
              <div className="favorites__content-stats">
                <div className="favorites__content-stats__num">
                  {favorites.length}
                </div>
                <div className="favorites__content-stats__title">Favorites</div>
              </div>

              <div className="favorites__grid">
                {favorites.map((favorite) => (
                  <div key={favorite.id} className="favorites__grid-card">
                    <div className="favorites__grid-card__heading">
                      <h3 onClick={() => navigate(`/recipe/${favorite.id}`)}>
                        {favorite.title}
                      </h3>
                      <X
                        onClick={() => removeFavorite(favorite.id)}
                        size={30}
                        className="favorite-remove"
                      />
                    </div>

                    <div
                      className="favorites__grid-card__img"
                      onClick={() => navigate(`/recipe/${favorite.id}`)}
                    >
                      <img src={favorite.imgSrc} alt={favorite.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Favorites;
