import "./Header.css";
import { NavLink, useNavigate } from "react-router";
import SearchBar from "./UI/SearchBar/SearchBar";
import { ChevronDown, ChefHat } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navItemRef = useRef();

  const searchSubmitHandler = (query) => {
    console.log(query);
    navigate(`/recipe/${query}`);
  };

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navItemRef.current &&
        !navItemRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__row">
            <NavLink>
              <div className="logo">
                <ChefHat size={30} color="#f6aa1cff" />
                <div>HomeChef</div>
              </div>
            </NavLink>

            <nav className="nav">
              <ul className="nav__list">
                <li
                  className="nav__list-item"
                  ref={navItemRef}
                  onClick={toggleDropdown}
                >
                  <span>Recipes</span>
                  <ChevronDown
                    className={`${
                      isDropdownOpen ? "nav__list-item__icon-rotated" : ""
                    }`}
                  />
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

      <div
        ref={dropdownRef}
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
      >
        <div className="container">
          <div className="dropdown__row">
            <div className="dropdown__item">
              <div className="dropdown__item-header">
                <div className="dropdown__item-title">Categories</div>
                <NavLink
                  to={"/category"}
                  onClick={() => setIsDropdownOpen(false)}
                  className="dropdown__item-link"
                >
                  See all
                </NavLink>
              </div>
              <ul className="dropdown__list">
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/category/beef"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Beef
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/category/chicken"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Chicken
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/category/seafood"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Seafood
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown__item">
              <div className="dropdown__item-header">
                <div className="dropdown__item-title">Area</div>
                <NavLink
                  to={"/area"}
                  className="dropdown__item-link"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  See all
                </NavLink>
              </div>
              <ul className="dropdown__list">
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/area/american"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    American
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/area/italian"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Italian
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/area/russian"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Russian
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown__item">
              <div className="dropdown__item-header">
                <div className="dropdown__item-title">Ingredients</div>
                <NavLink
                  to={"/ingredient"}
                  className="dropdown__item-link"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  See all
                </NavLink>
              </div>
              <ul className="dropdown__list">
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/ingredient/salmon"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Salmon
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/ingredient/pork"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Pork
                  </NavLink>
                </li>
                <li className="dropdown__list-item">
                  <NavLink
                    to={"/ingredient/eggs"}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Eggs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isDropdownOpen && <div className="gray"></div>}
    </>
  );
};

export default Header;
