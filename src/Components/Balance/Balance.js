import React,{useContext} from 'react'
import styles from './Balance.module.css'
import { GlobalContext } from '../../context'

const Balance = () => {
  const store =useContext(GlobalContext)
  const {data} =store
  const filteredIncome = data.map(item=>parseInt(item.amount)).filter((item=>item > 0))
  .reduce((acc,curr)=> acc + curr,0)
  const filteredExpense = data.map(item=>parseInt(item.amount)).filter((item=>item < 0)).reduce((acc,curr)=> acc + curr,0)
const balance =filteredIncome + filteredExpense
const symbol =balance < 0 ? "-" : ''
  return (
    <div className={styles.container}>
     <h2>YOUR BALANCE</h2>
      <h1>{symbol}${Math.abs(balance)}</h1>
    </div>
  )
}

export default Balance
