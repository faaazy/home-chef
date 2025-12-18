import {
  ArrowUpZA,
  ArrowDownZA,
  ArrowUpWideNarrow,
  CircleCheck,
  Hash,
  ArrowDownWideNarrow,
  Plus,
} from "lucide-react";
import Select from "../components/UI/Select/Select";
import { useState } from "react";

const Pantry = () => {
  const [sortValue, setSortValue] = useState("name-asc");

  return (
    <section className="pantry">
      <div className="container">
        <h2 className="pantry__title">Pantry</h2>

        <div className="pantry__heading">
          <div className="pantry__heading-tabs">
            <div className="pantry__heading-tabs__item">Home</div>
            <div className="pantry__heading-tabs__item">Pantry</div>
            <div className="pantry__heading-tabs__item">Recipes</div>
          </div>
        </div>

        <div className="pantry__display">
          <div className="pantry__display-title">My Pantry</div>

          <div className="pantry__display-row">
            <div className="pantry__display-row__search">
              <input type="text" placeholder="Search products..." />
            </div>

            <div className="pantry__display-row__add">
              <Plus />
              <button className="pantry__display-row__add-btn">
                Add product
              </button>
            </div>
          </div>

          <div className="pantry__display-filter">
            <div className="pantry__display-filter__item">
              <select name="pantry-display-categories">
                <option value="all">All products</option>
                {/* TODO: all user's categories that he chose */}
                {/* {pantryCategories.map((category, index) => )} */}
              </select>
            </div>

            <div className="pantry__display-filter__item">
              <Select selectedValue={sortValue} onChange={setSortValue} />
            </div>
          </div>
        </div>

        <table className="pantry__table">
          <thead className="pantry__table-heading">
            <tr>
              <th>
                <CircleCheck />
              </th>
              <th>Name</th>
              <th>
                <Hash />
                Qty
              </th>
              <th>Notes</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default Pantry;
