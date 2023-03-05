import React from 'react'
import Kazananlar from './TvWidgets/Kazananlar'


const StickySidebar = () => {
  return (
    <div className="row stickSidebar d-none d-md-block">
        <div className="col">
          <div className="">
            <Kazananlar />
            <div className="stockDetail mb-5"></div>
          </div>
        </div>
      </div>
  )
}

export default StickySidebar