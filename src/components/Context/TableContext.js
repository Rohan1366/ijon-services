// TableContext.js
import React, { createContext, useContext, useReducer, useState } from 'react';

const TableContext = createContext();

const initialState = {
  tableData: [
    // Initial data
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', age: 28, email: 'bob@example.com' },
    { id: 4, name: 'Alice Johnson', age: 22, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', age: 35, email: 'charlie@example.com' },
    { id: 6, name: 'Eva Williams', age: 27, email: 'eva@example.com' },
    // ... (other initial data)
  ],
  isFormOpen: false,
  nextId: 7, // Initial next available id
};

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_FORM':
      return { ...state, isFormOpen: true };
    case 'CLOSE_FORM':
      return { ...state, isFormOpen: false };
    case 'ADD_ROW':
      return {
        ...state,
        tableData: [...state.tableData, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1,
        isFormOpen: false,
      };
      case 'DELETE_ROW':
      return {
        ...state,
        tableData: state.tableData.filter((row) => row.id !== action.payload),
      };
    
    default:
      return state;
  }
};

const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

const useTable = () => {
  const context = useContext(TableContext);
  
  return context;
};

export { TableProvider, useTable };
