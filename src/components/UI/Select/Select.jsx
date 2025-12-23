import { useEffect, useRef, useState } from "react";
import "./Select.css";
import {
  ArrowUpZA,
  ArrowDownZA,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  ChevronDown,
} from "lucide-react";

const Select = ({ selectedValue, onChange, className = "" }) => {
  const [isOpen, setIsOpen] = useState();
  const dropdownRef = useRef();

  const options = [
    { value: "name-asc", text: "Name A-Z", icon: <ArrowUpZA /> },
    { value: "name-desc", text: "Name Z-A", icon: <ArrowDownZA /> },
    {
      value: "qty-asc",
      text: "Qty (low to high)",
      icon: <ArrowUpWideNarrow />,
    },
    {
      value: "qty-desc",
      text: "Qty (high to low)",
      icon: <ArrowDownWideNarrow />,
    },
  ];

  const selectedOption =
    options.find((option) => option.value === selectedValue) || options[0];

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }

      document.addEventListener("mousedown", clickOutsideHandler);
      return () =>
        document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  return (
    <div className={`custom-select ${className}`}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption.icon}
        <span>{selectedOption.text}</span>
        <ChevronDown
          className={`selected-option__arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="select-dropdown" ref={dropdownRef}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-dropdown__item ${
                selectedValue === option.value ? "active" : ""
              }`}
              onClick={() => {
                onChange(option.value), setIsOpen(false);
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
