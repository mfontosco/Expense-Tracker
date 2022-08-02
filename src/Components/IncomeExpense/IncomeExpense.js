import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import styles from './IncomeExpense.module.css'

const IncomeExpense = () => {
  const store =useContext(GlobalContext)
  const {data} =store
  const filteredIncome = data.map(item=>parseInt(item.amount)).filter((item=>item > 0))
  .reduce((acc,curr)=> acc + curr,0)
  const filteredExpense = data.map(item=>parseInt(item.amount)).filter((item=>item < 0)).reduce((acc,curr)=> acc + curr,0)
  console.log(filteredIncome,filteredExpense)
  const symbol = filteredExpense  ? '-':""
  return (
    <div className={styles.container}>
      <div>
      <h2>INCOME</h2>
      <span><h2 style={{color:"green"}}>${filteredIncome}</h2></span>
      </div>
      <div className={styles.vertical}></div>
      <div>
      <h2>EXPENSE</h2>
      <span><h2 style={{color:"red"}}>{symbol} ${Math.abs(filteredExpense)}</h2></span>
      </div>
    </div>
  )
}

export default IncomeExpense
