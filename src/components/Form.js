// FormPopup.js
import React, { useState } from 'react';
import { useTable } from './Context/TableContext';
import './Form.css'
import toast from 'react-hot-toast';
const Form = () => {
  const { dispatch } = useTable();
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRow = () => {
   
    const newRow = {
      name: formData.name,
      age: parseInt(formData.age),
      email: formData.email,
    };

    dispatch({ type: 'ADD_ROW', payload: newRow });
    
    toast.success("added new user!" );
  };

  return (
    <div className="form-popup">
      <h2>Add User</h2>
      <label htmlFor="name"style={{marginBottom:"30px",marginRight:'5px'}}>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} value={formData.name} style={{marginBottom:"30px"}}/>

      <label htmlFor="age" style={{marginLeft:"60px",marginRight:'5px'}}>Contact:</label> 
      <input type="number" name="age" onChange={handleInputChange} value={formData.age} /><br/>
      
      <label htmlFor="email" style={{marginRight:'5px'}}>Email:</label> 
      <input type="email" name="email" onChange={handleInputChange} value={formData.email} />

      <button onClick={handleAddRow} 
      style={{marginLeft:"450px" , padding:"7px 15px",
      backgroundColor:"#00d2ff",color:"white",
      border:"none",borderRadius:"5px"
      ,cursor:"pointer"}}>Add</button>
      
    </div>
  );
};

export default Form;
