import { NavLink } from "react-router";

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
            <div className="search-bar">
              {/* svg of search */}
              <input
                type="text"
                className="search-bar__input"
                autoComplete="list"
                // learn about it
                list="suggestions"
                name="search"
                placeholder="search what you need..."
                // value={""}
              />
            </div>
            <div id="suggestions">
              <ul>
                <li>
                  <a className="search-bar__suggestion-link" href="#"></a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
