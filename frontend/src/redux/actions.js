// // actions.js
// export const addIncome = (income) => {
//     return {
//       type: 'ADD_INCOME',
//       payload: income,
//     };
//   }

//   export const getIncomes = (incomes) => {
//     return {
//       type: 'GET_INCOMES',
//       payload: incomes,
//     };
//   }

//   export const deleteIncome = (id) => {
//     return {
//       type: 'DELETE_INCOME',
//       payload: id,
//     };
//   }

//   export const addExpense = (expense) => {
//     return {
//       type: 'ADD_EXPENSE',
//       payload: expense,
//     };
//   }

//   export const getExpenses = (expenses) => {
//     return {
//       type: 'GET_EXPENSES',
//       payload: expenses,
//     };
//   }

//   export const deleteExpense = (id) => {
//     return {
//       type: 'DELETE_EXPENSE',
//       payload: id,
//     };
//   }

//   export const setError = (error) => {
//     return {
//       type: 'SET_ERROR',
//       payload: error,
//     };
//   }

//   // reducers.js
//   const initialState = {
//     incomes: [],
//     expenses: [],
//     error: null,
//   };

//   export const globalReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_INCOME':
//         // Implement the logic to add income here
//         return state;
//       case 'GET_INCOMES':
//         // Implement the logic to get incomes here
//         return state;
//       case 'DELETE_INCOME':
//         // Implement the logic to delete income here
//         return state;
//       case 'ADD_EXPENSE':
//         // Implement the logic to add expense here
//         return state;
//       case 'GET_EXPENSES':
//         // Implement the logic to get expenses here
//         return state;
//       case 'DELETE_EXPENSE':
//         // Implement the logic to delete expense here
//         return state;
//       case 'SET_ERROR':
//         return {
//           ...state,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   }

//   // store.js
//   import { createStore } from 'redux';
//   import { globalReducer } from './reducers';

//   const store = createStore(globalReducer);

//   export default store;

//import in root level
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./store"; // Import your Redux store
// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// import in App component
// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { addIncome, getIncomes, deleteIncome, addExpense, getExpenses, deleteExpense, setError } from './actions';

// function App() {
//   const [active, setActive] = useState(1);
//   const incomes = useSelector(state => state.incomes);
//   const expenses = useSelector(state => state.expenses);
//   const error = useSelector(state => state.error);
//   const dispatch = useDispatch();

//   const displayData = () => {
//     switch (active) {
//       case 1:
//         return <Dashboard />;
//       case 2:
//         return <Dashboard />;
//       case 3:
//         return <Income />;
//       case 4:
//         return <Expenses />;
//       case 5:
//         return <Options />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     // ...
//   );
// }

// export default App;
