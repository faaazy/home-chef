import { useState } from "react";
import "./PantryFilters.css";
import Select from "../UI/Select/Select";
import {
  ArrowUpZA,
  ArrowDownZA,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
} from "lucide-react";

const PantryFilters = ({
  sortValue,
  onSortChange,
  categoryValue,
  onCategoryChange,
  categories,
}) => {
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
          options={categories}
          value={categoryValue}
          onChange={onCategoryChange}
        />
      </div>

      <div className="pantry__display-filter__item">
        <Select
          options={sortOptions}
          value={sortValue}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default PantryFilters;
