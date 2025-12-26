import { useState } from "react";
import "./PantryFilters.css";
import Select from "../UI/Select/Select";
import {
  ArrowUpZA,
  ArrowDownZA,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
} from "lucide-react";

const PantryFilters = () => {
  const [sortValue, setSortValue] = useState("name-asc");
  const [categoryValue, setCategoryValue] = useState("all");

  const [pantryCategories] = useState([
    { value: "all", text: "All products" },
    { value: "chicken", text: "Chicken" },
    { value: "fruit", text: "Fruit" },
    { value: "vegetables", text: "Vegetables" },
  ]);

  const sortOptions = [
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

  return (
    <div className="pantry__display-filter">
      <div className="pantry__display-filter__item">
        <Select
          options={pantryCategories}
          value={categoryValue}
          onChange={setCategoryValue}
        />
      </div>

      <div className="pantry__display-filter__item">
        <Select
          options={sortOptions}
          value={sortValue}
          onChange={setSortValue}
        />
      </div>
    </div>
  );
};

export default PantryFilters;
