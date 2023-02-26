import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';


const KapDetail = () => {
    const {state}=useLocation()
    console.log(state)
    const navigate = useNavigate()
  return (
    <div className="container w-50 mb-5">
            <button className='btn btn-warning' onClick={()=>navigate(-1)}>Geri</button>
        <div className="row">
            <div className="col">
            <div className='kapNews'>{parse(state)}</div>
            </div>
        </div>
    </div>
  )
}

export default KapDetail