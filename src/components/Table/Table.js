import React from 'react'
import './Table.css'
import { useState , useEffect } from 'react';
import { useTable } from '../Context/TableContext';
import Form from '../Form';
const Table = () => {
  const { state, dispatch } = useTable();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [isAddFormOpen, setAddFormOpen] = useState(false);



const handleAddRow = () => {
  setAddFormOpen(true);
};

const closeAddForm = () => {
  setAddFormOpen(false);
};

const handleDeleteRow = (id) => {
  dispatch({ type: 'DELETE_ROW', payload: id });
};
const totalPages = Math.ceil(state.tableData.length / pageSize);
const startIndex = (currentPage - 1) * pageSize;
const endIndex = Math.min(startIndex + pageSize, state.tableData.length);
const currentData = state.tableData.slice(startIndex, endIndex);

const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};
  return (
    <div >
      <div style={{textAlign:"end"}}>
       <button onClick={() => dispatch({ type: 'OPEN_FORM' })}
      style={{padding:"7px 15px",
              marginRight:"110px",
              marginTop:"20px",
              backgroundColor:"#205323",
              color:"white",
              borderRadius:"5px",
              cursor:"pointer"}} >ADD</button>
                {state.isFormOpen && <Form />}</div>
               
        <table className="my-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
         
          
        </tr>
      </thead>
      <tbody>
      {currentData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              
              <td>{row.email}</td>
              <td><span style={{color:"blue",}}>Edit</span>
              <span style={{color:"red",textAlign:'center',marginLeft:"100px",cursor:"pointer"}} class="material-symbols-outlined" onClick={() => handleDeleteRow(row.id)}> 
               delete
               </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    <div className="pagination">
        
        <span style={{marginTop:"-10px"}}>{`Page${currentPage}of ${totalPages}`}</span>
        
        <button style={{border:"none", backgroundColor:"white",marginTop:"10px"}}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span class="material-symbols-outlined" >
          chevron_left
          </span>
        </button>
        <button
        style={{border:"none" , backgroundColor:"white",marginTop:"10px"}}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span class="material-symbols-outlined"  style={{marginBottom:"-10px"}}>
           chevron_right
           </span>
        </button>
        
      </div>
    </div>
  )
}

export default Table