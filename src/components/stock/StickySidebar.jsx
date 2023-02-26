import React from 'react'
import Kazananlar from './TvWidgets/Kazananlar'


const StickySidebar = () => {
  return (
    <div className="row">
        <div className="col">
          <div className="">
            <div className="stockDetail mb-5"></div>
            <Kazananlar />
          </div>
        </div>
      </div>
  )
}

export default StickySidebar