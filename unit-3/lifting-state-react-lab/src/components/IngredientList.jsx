import React from 'react';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ color: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
