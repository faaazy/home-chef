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
import { useEffect, useMemo, useState } from "react";
import "./Pantry.css";
import PantryModal from "../components/PantryModal/PantryModal";
import PantryFilters from "../components/PantryFilters/PantryFilters";

const Pantry = () => {
  console.log(localStorage.getItem("pantryProducts"));

  const [pantryProducts, setPantryProducts] = useState(() => {
    const stored = localStorage.getItem("pantryProducts");
    return stored ? JSON.parse(stored) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editClickedProduct, setEditClickedProduct] = useState(null);

  const itemsPerPage = 5;

  const currentIngredients = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pantryProducts.slice(startIndex, endIndex);
  }, [pantryProducts, currentPage]);

  const totalPages = Math.ceil(pantryProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const addNewProductHandler = (newProduct) => {
    if (newProduct.id) {
      setPantryProducts((prev) =>
        prev.map((product) =>
          product.id === newProduct.id ? newProduct : product
        )
      );
    } else {
      const newProductWithId = {
        ...newProduct,
        id: Date.now(),
        done: false,
      };
      setPantryProducts((prev) => [...prev, newProductWithId]);
    }

    setIsModalOpen(false);
    setEditClickedProduct(null);
  };

  useEffect(() => {
    localStorage.setItem("pantryProducts", JSON.stringify(pantryProducts));
  }, [pantryProducts]);

  const editClickHandler = (product) => {
    setIsModalOpen(true);
    setEditClickedProduct(product);
  };

  const deleteClickHandler = (productId) => {
    setPantryProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const onCheckClickHandler = (productId) => {
    setPantryProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, done: !product.done } : product
      )
    );
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
              onClick={() => {
                setEditClickedProduct(null);
                setIsModalOpen(true);
              }}
            >
              <Plus />
              <button className="pantry__display-row__add-btn">
                Add product
              </button>
            </div>
          </div>

          <PantryFilters />
        </div>

        {pantryProducts.length > 0 ? (
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
                    Name
                  </div>
                </th>
                <th>
                  <div className="pantry-th">
                    <Hash size={20} />
                    Qty
                  </div>
                </th>
                <th>
                  <div className="pantry-th">
                    <ChartBarStacked size={20} />
                    Category
                  </div>
                </th>
                <th>
                  <div className="pantry-th">
                    <NotebookText size={20} />
                    Notes
                  </div>
                </th>
                <th>
                  <div className="pantry-th">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentIngredients.map((pantryProduct, index) => (
                <tr key={index} className={pantryProduct.done ? "done" : ""}>
                  <td>
                    <div className="pantry-td">
                      <label
                        className="checkbox-container"
                        htmlFor={`pantry-checkbox-${index}`}
                      >
                        <input
                          type="checkbox"
                          name={`pantry-${index}`}
                          id={`pantry-checkbox-${index}`}
                          checked={pantryProduct.done || false}
                          onChange={() => onCheckClickHandler(pantryProduct.id)}
                        />
                        <span></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="pantry-td">{pantryProduct.name}</div>
                  </td>
                  <td>
                    <div className="pantry-td">{pantryProduct.qty}</div>
                  </td>
                  <td>
                    <div className="pantry-td">{pantryProduct.category}</div>
                  </td>
                  <td>
                    <div className="pantry-td">{pantryProduct.notes}</div>
                  </td>
                  <td>
                    <div className="pantry-td">
                      <button
                        className="pantry-edit__btn"
                        onClick={() => editClickHandler(pantryProduct)}
                      >
                        Edit
                      </button>
                      <button
                        className="pantry-delete__btn"
                        onClick={() => deleteClickHandler(pantryProduct.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty">Your pantry is empty...</div>
        )}

        {pantryProducts.length > 0 && (
          <div className="pantry__pagination">
            <div className="pagination-controls">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                <ChevronLeft size={30} strokeWidth={3} />
              </button>

              <span className="page-info">
                Page {currentPage} of {totalPages || 1}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                <ChevronRight size={30} strokeWidth={3} />
              </button>
            </div>
          </div>
        )}

        {isModalOpen && (
          <PantryModal
            onAddNewProduct={addNewProductHandler}
            closeModal={setIsModalOpen}
            onEditProduct={editClickedProduct ? editClickedProduct : null}
          />
        )}
      </div>
    </section>
  );
};

export default Pantry;
