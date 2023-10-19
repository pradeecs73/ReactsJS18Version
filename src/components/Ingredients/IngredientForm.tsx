import React, { useState } from 'react';
import './IngredientForm.css';


const IngredientForm = (props:any) => {
    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('');

    const submitHandler = (event:any) => {
        event.preventDefault();
        props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
      };

    return (
        <div className="container">
        <form onSubmit={submitHandler}>
             <div className="form-group">
                <label >Title</label>
                <input type="text" name="title" 
                 value={enteredTitle}  onChange={event => setEnteredTitle(event.target.value)}  placeholder="Enter title" />
             </div>
            

             <div className="form-group">
                 <label >Amount</label>
                 <input type="text" name="amount" 
                 value={enteredAmount}
                 onChange={event => 
                 setEnteredAmount(event.target.value)}   placeholder="Enter amount" />
             </div>
            

            <div style={{textAlign:"center"}}>
               <button type="submit" className="btn btn-primary">Submit</button>
             </div>
         </form> 
    
 </div>
         );

};

export default IngredientForm;