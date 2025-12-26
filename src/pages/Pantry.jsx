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
                <div className="pantry-th">
                  <CircleCheck />
                </div>
              </th>
              <th>
                <div className="pantry-th">
                  <CaseSensitive size={20} />
                  <span>Name</span>
                </div>
              </th>
              <th>
                <div className="pantry-th">
                  <Hash size={20} />
                  <span>Qty</span>
                </div>
              </th>
              <th>
                <div className="pantry-th">
                  <ChartBarStacked size={20} />
                  <span>Category</span>
                </div>
              </th>
              <th>
                <div className="pantry-th">
                  <NotebookText size={20} />
                  <span>Notes</span>
                </div>
              </th>
              <th>
                <div className="pantry-th">
                  <span>Actions</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pantryProducts.map((pantryProduct, index) => (
              <tr key={index}>
                <td>
                  <div className="pantry-td">
                    <span>{index}</span>
                  </div>
                </td>
                <td>
                  <div className="pantry-td">
                    <span>{pantryProduct.name}</span>
                  </div>
                </td>
                <td>
                  <div className="pantry-td">
                    <span>{pantryProduct.qty}</span>
                  </div>
                </td>
                <span>
                  <div className="pantry-td">
                    <span>{pantryProduct.category}</span>
                  </div>
                </span>
                <td>
                  <div className="pantry-td">
                    <span>{pantryProduct.notes}</span>
                  </div>
                </td>
                <td>
                  <div className="pantry-td">
                    <button>Edit</button> <button>Delete</button>
                  </div>
                </td>
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
