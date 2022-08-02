import React, { useEffect, useState } from 'react'

const GlobalContext = React.createContext()
const Provider = ({children}) => {
    const [text,setText] =useState('')
    const [amount,setAmount] =useState(0)
    const [data,setData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) :[])

    useEffect(()=>{

    },[data])

    const handleChange =(e)=>{
        console.log(text)
        if(e.target ===amount){
            setAmount(e.target.value)
        }
        setText(e.target.value)
       
    }
    const handleAmountChange =(e)=>{
        console.log(amount)
            setAmount(e.target.value)
    }
    const deleteHandler = (e,id)=>{
        e.preventDefault()
        const copy = [...data]
        const item = copy.filter(item =>item.id !== id)
        setData(item)
        console.log("working")
    }
    const addHandler =()=>{
        if(text !== '' && amount !==0){
            const dataInfo ={
                id:data.length,
                text:text,
                amount:parseInt(amount)
            }
            setData([...data,dataInfo])
            setAmount(0)
            setText("")
        }
        console.log("clicked")
    }
    console.log(data)
    const state ={
        data,
        deleteHandler,
handleAmountChange,
handleChange,
addHandler,
setAmount,
amount,
text,
setText
    }
  return (
    <GlobalContext.Provider value={state}>
         {children}
    </GlobalContext.Provider>
  )
}
const consumer = GlobalContext.consumer
export  {Provider,consumer,GlobalContext}
