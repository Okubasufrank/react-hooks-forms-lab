import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ setItems , items, onItemFormSubmit}) {

  const [myItem, setmyitem] = useState({
    id: uuid(),
    name: '',
    category: 'Produce'
  })

 
  
  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit(myItem)
    console.log(myItem)

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value= {myItem.name} onChange={(e) => setmyitem({...myItem, name: e.target.value})} />
      </label>

      <label>
        Category
        <select name="category" value={ myItem.category} onChange = {(e) => setmyitem({...myItem, category: e.target.value})}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
