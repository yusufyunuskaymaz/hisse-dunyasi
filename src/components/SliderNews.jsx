import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const SliderNews = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    console.log(state,"ssb")
  return (
    <div className="container  w-50" style={{minHeight:"62vh"}}>
        <div className="btn btn-warning mb-5" onClick={()=>navigate(-1)}>Geri</div>
        <div className="row">
            <div className="col fs-4">
                <h2 className='mb-5 fs-1 text-center'>{state.name}</h2>
                {state.description}
            </div>
        </div>
    </div>
  )
}

export default SliderNews