import { useEffect, useRef, useState } from "react";
import "./Select.css";
import { ChevronDown } from "lucide-react";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  return (
    <div className={`custom-select ${className}`} ref={dropdownRef}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
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
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-dropdown__item ${
                value === option.value ? "active" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.icon}
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
