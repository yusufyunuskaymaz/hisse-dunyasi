import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const SliderNews = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    console.log(state,"ssb")
  return (
    <div className="container  w-50" style={{minHeight:"62vh"}}>
        <div className="btn btn-warning mb-3" onClick={()=>navigate(-1)}>Geri</div>
        <div className="row">
            <div className="col fs-4 mb-5">
              <div className='text-center d-flex flex-column'>
              <h2 className='mt-3 mb-5 fs-1 text-center' style={{color:"#131722"}}>{state.name}</h2>

                <img className='rounded-4' src={state.image} alt="" />
                <span style={{color:"#6a6d78", fontSize:"1.3rem"}}>{state.date.slice(0,16).replace("T"," ")}</span>

              </div>
                <p className='mt-4'>{state.description}</p>
               <a href={state.url}> <p className='text-muted'>Kaynak: {state.source}</p></a>
            </div>
        </div>
    </div>
  )
}

export default SliderNews