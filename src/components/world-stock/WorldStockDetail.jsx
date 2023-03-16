import React from 'react'
import { useLocation } from 'react-router-dom'
import GeneralTable from './GeneralTable'

const WorldStockDetail = () => {
    const {state} = useLocation()
    const stockCode = state.split(" (")[0].toLowerCase().trim()
    console.log(stockCode)

  return (
    <div className='container'>
        <h1>{state}</h1>

        <GeneralTable stockCode={stockCode} width={"1300"} height={"2000"} />

    </div>
  )
}

export default WorldStockDetail