import { useState } from "react";
import "./CookbookCreate.css";

const CookbookCreate = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", amount: "" },
  ]);

  const [instructions, setInstructions] = useState([{ id: 1, step: "" }]);

  return (
    <div className="create-recipe">
      <div className="container">
        <h3 className="create-recipe__title">Create your own recipe!</h3>

        <form className="create-recipe__form">
          <div className="create-recipe__form-item">
            <h4 htmlFor="title">Recipe name*</h4>
            <input type="text" id="title" required placeholder="Carbonara" />
          </div>

          <div className="create-recipe__form-item">
            <h4>Ingredients</h4>
            <button type="button">Add ingredient</button>

            <div className="create-recipe__form-item__list">
              {ingredients.map((ingredient, i) => (
                <div
                  className="create-recipe__form-item__list-ingredient"
                  key={ingredient.id}
                >
                  <div className="ingredient-counter">
                    <i>Ingredient - {i + 1}</i>
                  </div>
                  <label htmlFor="ingredientName">Ingredient Name</label>
                  <input
                    type="text"
                    id="ingredientName"
                    placeholder="Lettuce..."
                    required
                    // value={ingredient.value}
                  />

                  <label htmlFor="ingredientAmount">Ingredient Amount</label>
                  <input
                    type="text"
                    id="ingredientAmount"
                    placeholder="2..."
                    required
                    // value={ingredient.amount}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="create-recipe__form-item">
            <h4>Instructions</h4>
            <button type="button">Add instruction step</button>

            <div className="create-recipe__form-item__list">
              {instructions.map((instruction, i) => (
                <div
                  className="create-recipe__form-item__list-instruction"
                  key={instruction.id}
                >
                  <div className="instruction-step">{i + 1}</div>
                  <div className="instruction-step__content">
                    <textarea
                      placeholder={`Describe step ${i + 1}`}
                      // value={instruction.step}
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
