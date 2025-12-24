import { useEffect, useRef, useState } from "react";
import "./PantryModal.css";

const PantryModal = ({ onAddNewProduct, closeModal }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductQty, setNewProductQty] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("eggs");
  const [newProductNotes, setNewProductNotes] = useState("");

  const backgroundRef = useRef();
  const modalRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      name: newProductName,
      qty: newProductQty,
      category: newProductCategory,
      notes: newProductNotes,
    };

    onAddNewProduct(newProduct);

    setNewProductName("");
    setNewProductQty("");
    setNewProductCategory("eggs");
    setNewProductNotes("");
  };

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, [closeModal]);

  return (
    <div className="pantry-modal" ref={backgroundRef}>
      <form
        className="pantry-modal__form"
        onSubmit={formSubmitHandler}
        ref={modalRef}
      >
        <div className="pantry-modal__form-title">New Product</div>

        <div className="pantry-modal__form-item">
          <label htmlFor="panryAddName">Name</label>
          <input
            onChange={(e) => setNewProductName(e.target.value)}
            value={newProductName}
            type="text"
            name="pantryAddName"
            id="panryAddName"
            placeholder="Apple..."
            required
            autoFocus
          />
        </div>

        <div className="pantry-modal__form-item">
          <label htmlFor="panryAddQty">Quantity</label>
          <input
            onChange={(e) => setNewProductQty(e.target.value)}
            value={newProductQty}
            type="text"
            name="panryAddQty"
            id="panryAddQty"
            placeholder="100ml..."
            required
          />
        </div>

        <div className="pantry-modal__form-item">
          <label htmlFor="panryAddCategory">Category</label>
          {/* custom select or something like search with suggestions */}
          <select
            value={newProductCategory}
            onChange={(e) => setNewProductCategory(e.target.value)}
          >
            <option value="eggs">Eggs</option>
            <option value="pork">Pork</option>
            <option value="chicken">Chicken</option>
          </select>
        </div>

        <div className="pantry-modal__form-item">
          <label htmlFor="panryAddNotes">Notes</label>
          <textarea
            onChange={(e) => setNewProductNotes(e.target.value)}
            value={newProductNotes}
            name="panryAddNotes"
            id="panryAddNotes"
            placeholder="Your notes..."
            maxLength={300}
            rows={4}
          />
        </div>

        <div className="pantry-modal__form-btn">
          <button>Add new Product</button>
        </div>
      </form>
    </div>
  );
};

export default PantryModal;
