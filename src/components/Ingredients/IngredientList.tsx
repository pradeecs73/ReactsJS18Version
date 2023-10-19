import React from 'react';
import './IngredientList.css';

const IngredientList = (props:any) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ig:any) => (
          <li key={ig.id} onClick={()=>props.onRemoveItem(ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;