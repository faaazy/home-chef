import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { searchApi } from "../../../utils/api";
import "./SearchBar.css";

const SearchBar = ({ onSearch, className = "" }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (query.trim()) {
      timeoutRef.current = setTimeout(async () => {
        const results = await searchApi.getSearchResults(query);
        // console.log(results);

        setSuggestions(results.meals);
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    onSearch(query);

    setShowSuggestions(false);
  };

  const suggestionClickHandler = (suggestion) => {
    setQuery(suggestion.strMeal);
    setShowSuggestions(false);

    if (onSearch) {
      onSearch(suggestion.strMeal);
    }
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <form onSubmit={submitFormHandler} className="search-bar__form">
        <div className="search-bar__input-wrapper">
          <label htmlFor="search">
            <Search color="#220901ff" size={24} cursor={"pointer"} />
          </label>
          <input
            type="text"
            id="search"
            className="search-bar__input"
            value={query}
            onChange={(e) => inputChangeHandler(e)}
            onFocus={() => setShowSuggestions(true)}
            name="search"
            placeholder="Search what you need..."
            autoComplete="off"
          />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-bar__suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion.idMeal}
                className="search-bar__suggestion"
                onClick={() => suggestionClickHandler(suggestion)}
              >
                {suggestion.strMeal}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
