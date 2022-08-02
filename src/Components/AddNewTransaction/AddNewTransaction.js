import React,{useContext} from 'react'
import styles from './AddNewTransaction.module.css'
import { GlobalContext } from '../../context'


const AddNewTransaction = () => {

  const store = useContext(GlobalContext)
  const {handleChange,amount,text,handleAmountChange,addHandler} =store
  return (
    <div className={styles.container}>
    <h4>Text</h4>
     <div>
     <input
        type='text'
        name='text'
        value={text}
        placeholder='Enter Text...'
        onChange={(e)=>handleChange(e)}
      />
     </div>
     <h4>Amount</h4>
     <h4>(Negative -Expense,Positive-Income)</h4>
      <div>
      <input
        type='number'
        name='amount'
        value={amount}
        placeholder='Enter Amount...'
        onChange={(e)=>handleAmountChange(e)}
      />
      </div>
      <button className={styles.btn}  onClick={()=>addHandler()}> Add Transaction</button>
    </div>
  )
}

export default AddNewTransaction
