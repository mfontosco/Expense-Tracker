import React,{useContext} from 'react'
import styles from './History.module.css'
import { GlobalContext } from '../../context'


const History = () => {
  const store = useContext(GlobalContext)
  const {data,deleteHandler}= store
  return (
    <div className={styles.container}>
      <ul>
      {
        data.length > 0 && data.map(item=>
        <div key={item.id}  style={{borderRight:item.amount  > 0 ? "5px solid green" :"5px solid red"}}>
        <li >
      {console.log(item.amount)}
      <span className={styles.close} onClick={(e)=>deleteHandler(e,item.id)}>X</span>
            <h2>{item.text}</h2>
            <span className={styles.amount}><h2>{item.amount}</h2></span>
        </li>
        </div>
     
        )
        }
        
      </ul>
    </div>
  )
}

export default History
