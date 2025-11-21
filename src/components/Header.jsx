import { Search } from "lucide-react";
import { NavLink } from "react-router";
import SearchBar from "./UI/SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      <div className="logo">
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
            <SearchBar />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
