import { useEffect, useRef, useState } from "react";
import "./PantryModal.css";
import Select from "../UI/Select/Select";

const PantryModal = ({ onAddNewProduct, closeModal }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductQty, setNewProductQty] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("eggs");
  const [newProductNotes, setNewProductNotes] = useState("");

  const [newCategoryClicked, setNewCategoryClicked] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState("");

  const backgroundRef = useRef();
  const modalRef = useRef();

  const [categoryOptions, setCategoryOptions] = useState([
    { value: "eggs", text: "Eggs" },
    { value: "chicken", text: "Chicken" },
    { value: "beef", text: "Beef" },
    { value: "milk", text: "Milk" },
    { value: "oatmeal", text: "Oatmeal" },
  ]);

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

  const addNewCategoryHandler = () => {
    const trimmedValue = newCategoryValue.trim();

    if (!trimmedValue) return;

    const categoryExists = categoryOptions.some(
      (option) =>
        option.value === trimmedValue.toLowerCase() ||
        option.text.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (!categoryExists) {
      const newOption = {
        value: trimmedValue.toLowerCase(),
        text: trimmedValue,
      };

      setCategoryOptions((prev) => [...prev, newOption]);

      setNewProductCategory(newOption.value);
    } else {
      const existingOption = categoryOptions.find(
        (option) =>
          option.value === trimmedValue.toLowerCase() ||
          option.text.toLowerCase() === trimmedValue.toLowerCase()
      );
      if (existingOption) {
        setNewProductCategory(existingOption.value);
      }
    }

    setNewCategoryValue("");
    setNewCategoryClicked(false);
  };

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
          <Select
            className="white-bg"
            options={categoryOptions}
            value={newProductCategory}
            onChange={setNewProductCategory}
            searchable
          />

          {!newCategoryClicked && (
            <button
              className="add-category-btn"
              onClick={() => setNewCategoryClicked(true)}
            >
              Add new Category
            </button>
          )}

          {newCategoryClicked && (
            <div className="add-category">
              <input
                type="text"
                placeholder="New category..."
                value={newCategoryValue}
                onChange={(e) => setNewCategoryValue(e.target.value)}
                autoFocus
              />
              <button type="button" onClick={addNewCategoryHandler}>
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setNewCategoryClicked(false);
                  setNewCategoryValue("");
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          )}
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
