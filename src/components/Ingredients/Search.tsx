import React, { useState, useEffect, useRef } from 'react';
import './Search.css';

const Search = (props:any) => {

  const { onLoadIngredients } = props;
  const { ingredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef:any = useRef();

  useEffect(() => {

    if (enteredFilter === inputRef.current.value) {

      if(enteredFilter.length === 0)
      {

        onLoadIngredients([{id:Math.random(),title:"pradeep",amount:10},{id:Math.random(),title:"prasad",amount:20}]);
      }
      else{
        const enteredText=enteredFilter;
        const ingredientsCopy=[...ingredients];
        const filteredArray= ingredientsCopy.filter((ingredient:any) => ingredient.title === enteredText)
        
        if(filteredArray.length)
        {
          onLoadIngredients(filteredArray);
        }
        //console.log(filteredArray);
       // onLoadIngredients(filteredArray);

      }

    }

  }, [enteredFilter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
 
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
           
          />
        </div>

    </section>
  );
};

export default Search;
