import {
  ArrowUpZA,
  ArrowDownZA,
  ArrowUpWideNarrow,
  CircleCheck,
  Hash,
  ArrowDownWideNarrow,
  Plus,
  CaseSensitive,
  NotebookText,
  ChartBarStacked,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Select from "../components/UI/Select/Select";
import { useState } from "react";

const Pantry = () => {
  const [sortValue, setSortValue] = useState("name-asc");
  const [pantryProducts, setPantryProducts] = useState([]);

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
              <th>
                <CaseSensitive />
                Name
              </th>
              <th>
                <Hash />
                Qty
              </th>
              <th>
                <ChartBarStacked />
                Category
              </th>
              <th>
                <NotebookText />
                Notes
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* pantryProducts.map((pantryProduct, index) => ()) */}
          </tbody>
        </table>

        <div className="pantry__pagination">
          <div className="pagination-controls">
            <button
              // onClick={handlePrevPage}
              // disabled={currentPage === 1}
              className="pagination-btn"
            >
              <ChevronLeft size={30} strokeWidth={3} />
            </button>

            <span className="page-info">
              Page 0 of 10
              {/* Page {currentPage} of {totalPages} */}
            </span>

            <button
              // onClick={handleNextPage}
              // disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              <ChevronRight size={30} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pantry;
