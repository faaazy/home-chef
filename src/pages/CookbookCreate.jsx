import { useState } from "react";
import "./CookbookCreate.css";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CookbookCreate = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", amount: "" },
  ]);
  const [instructions, setInstructions] = useState([{ id: 1, step: "" }]);

  const navigate = useNavigate();

  // ingredients
  const addIngredientHandler = () => {
    setIngredients([
      ...ingredients,
      {
        id: Date.now(),
        name: "",
        amount: "",
      },
    ]);
  };

  const deleteIngredientHandler = (id) => {
    if (ingredients.length === 1) return;

    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  // instructions
  const addInstructionHandler = () => {
    setInstructions([
      ...instructions,
      {
        id: Date.now(),
        step: "",
      },
    ]);
  };

  const deleteInstructionHandler = (id) => {
    if (instructions.length === 1) return;

    setInstructions(
      instructions.filter((instruction) => instruction.id !== id)
    );
  };

  // form
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const ingredientInputs = event.target.querySelectorAll("[data-ingredient]");
    const collectedIngredients = [];

    ingredientInputs.forEach((div) => {
      const nameInput = div.querySelector("[data-ingredient-name]");
      const amountInput = div.querySelector("[data-ingredient-amount]");

      if (nameInput && nameInput.value.trim()) {
        collectedIngredients.push({
          name: nameInput.value.trim(),
          amount: amountInput ? amountInput.value.trim() : "",
        });
      }
    });

    const instructionTextareas = event.target.querySelectorAll(
      "[data-instruction] textarea"
    );
    const collectedInstructions = Array.from(instructionTextareas)
      .map((textarea) => textarea.value.trim())
      .filter((step) => step);

    const recipeData = {
      id: `custom-${Date.now()}`,
      title: formData.get("title"),
      ingredients: collectedIngredients.map(
        (ing) => `${ing.amount} ${ing.name}`
      ),
      instructions: collectedInstructions,
    };

    const customRecipes = JSON.parse(
      localStorage.getItem("customRecipes") || "[]"
    );

    const updatedRecipes = [...customRecipes, recipeData];
    localStorage.setItem("customRecipes", JSON.stringify(updatedRecipes));

    event.target.reset();
    setIngredients([{ id: 1, name: "", amount: "" }]);
    setInstructions([{ id: 1, step: "" }]);

    navigate("/cookbook");
  };

  return (
    <div className="create-recipe">
      <div className="container">
        <h3 className="create-recipe__title">Create your own recipe!</h3>

        <form className="create-recipe__form" onSubmit={formSubmitHandler}>
          <div className="create-recipe__form-item">
            <h4 htmlFor="title">Recipe name*</h4>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Carbonara"
            />
          </div>

          <div className="create-recipe__form-item">
            <h4>Ingredients</h4>
            <button type="button" onClick={addIngredientHandler}>
              Add ingredient
            </button>

            <div className="create-recipe__form-item__list">
              {ingredients.map((ingredient, i) => (
                <div
                  className="create-recipe__form-item__list-ingredient"
                  key={ingredient.id}
                  data-ingredient
                >
                  <div className="ingredient-header">
                    <div className="ingredient-counter">
                      <i>Ingredient - {i + 1}</i>
                    </div>
                    <div
                      className="ingredient-delete"
                      onClick={() => deleteIngredientHandler(ingredient.id)}
                    >
                      <X />
                    </div>
                  </div>
                  <label htmlFor="ingredientName">Ingredient Name</label>
                  <input
                    type="text"
                    id="ingredientName"
                    data-ingredient-name
                    placeholder="Lettuce..."
                    required
                  />

                  <label htmlFor="ingredientAmount">Ingredient Amount</label>
                  <input
                    type="text"
                    id="ingredientAmount"
                    data-ingredient-amount
                    placeholder="2..."
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="create-recipe__form-item">
            <h4>Instructions</h4>
            <button type="button" onClick={addInstructionHandler}>
              Add instruction step
            </button>

            <div className="create-recipe__form-item__list">
              {instructions.map((instruction, i) => (
                <div
                  className="create-recipe__form-item__list-instruction"
                  key={instruction.id}
                  data-instruction
                >
                  <div className="instruction-header">
                    <div className="instruction-step">{i + 1}</div>
                    <div
                      className="ingredient-delete"
                      onClick={() => deleteInstructionHandler(instruction.id)}
                    >
                      <X />
                    </div>
                  </div>
                  <div className="instruction-step__content">
                    <textarea
                      placeholder={`Describe step ${i + 1}`}
                      rows={2}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="create-recipe__form-submit">
            <button type="submit">Save your recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CookbookCreate;
