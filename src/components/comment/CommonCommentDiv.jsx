import moment from 'moment'
import React from 'react'


const CommonCommentDiv = ({item,setReplyCommentId, sub}) => {
  return (
    <div className={`${sub} border p-2 mb-4 rounded`}
    style={{border:"1px solid #e3e9f1"}}
    >
        <div className={`d-flex comment-avatar`}>
                <p>{item.name.slice(0, 1)}</p>
                <p className='text-dark'>{item.name}</p>
                <p className='text-dark'>{moment(item.time).format("DD MMM, YYYY")}</p>
              </div>
              <div>
                <p className='ms-3 text-dark'>{item.body}</p>
              </div>
              <div>
                {!sub ? (<p type="button" onClick={() => setReplyCommentId(item.id)}><u>Cevap ver</u></p>) : null}
              </div>
    </div>
  )
}

export default CommonCommentDiv