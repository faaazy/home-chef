import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mockSearchApi as searchApi } from "../../../utils/mockData";

const SearchBar = ({ onSearch, className = "" }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (inputValue.trim()) {
      timeoutRef.current = setTimeout(async () => {
        const results = await searchApi.getSuggestions(inputValue);
        setSuggestions(results);
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputValue]);

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
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <form onSubmit={submitFormHandler} className="search-bar__form">
        <div className="search-bar__input-wrapper">
          <Search />
          <input
            type="text"
            className="search-bar__input"
            value={inputValue}
            onChange={(e) => inputChangeHandler(e)}
            name="search"
            placeholder="Search what you need..."
          />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-bar__suggestions">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="search-bar__suggestion">
                {suggestion.text}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
