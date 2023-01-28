import { useReducer, createContext } from 'react';

const dummy_exps = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e2',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e3',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  },
  {
    id: 'e11',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e21',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e31',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  },
  {
    id: 'e13',
    description: 'Shoes',
    amount: 59.99,
    date: new Date('2023-01-26')
  },
  {
    id: 'e277',
    description: 'Fruits',
    amount: 12.99,
    date: new Date('2023-01-17')
  },
  {
    id: 'e355',
    description: 'A book',
    amount: 25.99,
    date: new Date('2023-01-23')
  }
]

export const ExpensesContext = createContext({
  expenses: [],
  add: ({description, amount, date}) => {},
  delete: (id) => {},
  update: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case "UPDATE":
      const index = state.findIndex(e => e.id === action.payload.id);
      const expense = state[index];
      const updatedItem = {...expense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[index] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter(e => e.id !== action.payload.id);
    default:
      return state;
  }
}

const ExpensesContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(expensesReducer, dummy_exps);

  const addExpense = (expenseData) => {
    dispatch({type: 'ADD', payload: expenseData});
  }
  const deleteExpense = (id) => {
    dispatch({type: 'DELETE', payload: {id}});
  }
  
  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;
