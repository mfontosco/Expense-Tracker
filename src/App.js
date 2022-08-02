import { useContext } from 'react';
import './App.css';
import AddNewTransaction from './Components/AddNewTransaction/AddNewTransaction';
import Balance from './Components/Balance/Balance';
import Header from './Components/Header/Header';
import History from './Components/History/History';
import IncomeExpense from './Components/IncomeExpense/IncomeExpense';
import { GlobalContext } from './context';
function App() {

  
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <h2>History</h2> 
     <History/>
     
      <h2>Add New Transaction</h2>
      <AddNewTransaction/>

    </div>
  );
}

export default App;
