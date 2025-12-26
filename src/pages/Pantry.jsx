import {
  CircleCheck,
  Hash,
  Plus,
  CaseSensitive,
  NotebookText,
  ChartBarStacked,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import "./Pantry.css";
import PantryModal from "../components/PantryModal/PantryModal";
import PantryFilters from "../components/PantryFilters/PantryFilters";

const Pantry = () => {
  const [pantryProducts, setPantryProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewProductHandler = (newProduct) => {
    setPantryProducts((prev) => [...prev, newProduct]);
    setIsModalOpen(false);
  };

  return (
    <section className="pantry">
      <div className="container">
        <h2 className="pantry__title">Pantry</h2>

        <div className="pantry__display">
          <div className="pantry__display-row">
            <div className="pantry__display-row__search">
              <input type="text" placeholder="Search products..." />
            </div>

            <div
              className="pantry__display-row__add"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus />
              <button className="pantry__display-row__add-btn">
                Add product
              </button>
            </div>
          </div>

          <PantryFilters />
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
            {pantryProducts.map((pantryProduct, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{pantryProduct.name}</td>
                <td>{pantryProduct.qty}</td>
                <td>{pantryProduct.category}</td>
                <td>{pantryProduct.notes}</td>
              </tr>
            ))}
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

        {isModalOpen && (
          <PantryModal
            onAddNewProduct={addNewProductHandler}
            closeModal={setIsModalOpen}
          />
        )}
      </div>
    </section>
  );
};

export default Pantry;
