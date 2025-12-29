import { useEffect, useMemo, useRef, useState } from "react";
import "./Select.css";
import { ChevronDown, Search } from "lucide-react";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const dropdownRef = useRef();
  const searchInputRef = useRef();

  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions = useMemo(() => {
    if (!searchValue.trim()) return options;

    return options.filter(
      (option) =>
        option.text.toLowerCase().includes(searchValue.toLowerCase()) ||
        option.value.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [options, searchValue]);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  const optionSelectHandler = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchValue("");
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    setSearchValue(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  return (
    <div className={`custom-select ${className}`} ref={dropdownRef}>
      <div
        className="selected-option"
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchValue("");
        }}
      >
        {selectedOption ? (
          <>
            {selectedOption.icon}
            <span>{selectedOption.text}</span>
          </>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
        <ChevronDown
          className={`selected-option__arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="select-dropdown">
          {searchable && (
            <div className="search-container">
              <label htmlFor="search-input">
                <Search size={16} />
              </label>
              <input
                ref={searchInputRef}
                className="search-input"
                id="search-input"
                placeholder="Search category..."
                value={searchValue}
                onChange={inputChangeHandler}
                type="text"
              />
            </div>
          )}

          <div className="options-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`select-dropdown__item ${
                    value === option.value ? "active" : ""
                  }`}
                  onClick={() => {
                    optionSelectHandler(option.value);
                  }}
                >
                  {option.icon}
                  <span>{option.text}</span>
                </div>
              ))
            ) : (
              <div className="no-results">No Options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
