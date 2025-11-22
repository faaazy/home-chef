import "./Header.css";
import { NavLink, useNavigate } from "react-router";
import SearchBar from "./UI/SearchBar/SearchBar";
import { ChefHat } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const searchSubmitHandler = (query) => {
    console.log(query);
    navigate(`/recipes/${query}`);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="logo">
            <ChefHat size={30} color="#f6aa1cff" />
            <NavLink to={"/"}>HomeChef</NavLink>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink to={"recipes"}>Recipes</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to={"meal-plan"}>Meal Plan</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to={"pantry"}>Pantry</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to={"shopping-list"}>Shopping list</NavLink>
              </li>

              <li className="nav__list-item">
                <SearchBar onSearch={searchSubmitHandler} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
