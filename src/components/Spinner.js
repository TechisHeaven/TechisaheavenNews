import React from 'react'
import loading from '../components/loading.gif'

const Spinner=()=>{
    return (
      <div className="text-center my-6">
        <img src={loading} alt="loading" style={{width : "3rem"}} />
      </div>
    )
}

export default Spinner
