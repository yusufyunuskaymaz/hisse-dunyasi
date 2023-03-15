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

        <GeneralTable stockCode={stockCode} />

    </div>
  )
}

export default WorldStockDetail