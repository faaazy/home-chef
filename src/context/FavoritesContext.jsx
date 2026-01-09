import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    console.log(recipe);

    if (
      !favorites.some(
        (fav) => fav.id === recipe.id || fav.title === recipe.title
      )
    ) {
      setFavorites((prev) => [{ ...recipe }, ...prev]);
      return true;
    }

    return false;
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some((fav) => fav.id === recipeId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
