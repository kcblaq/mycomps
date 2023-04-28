import React, { useState } from 'react'
import CustomModal from './CustomModal'

function ModalHolder() {
  const [open, setopen] = useState(true)
  const prevent = (e) => {
    e.stopPropagation()
  }
    
  return (
      <section className='flex flex-col items-center align-middle'> 
          <CustomModal openmodal={open} closemodal={() => setopen(false)} title={ "Here is my modal"} preventPropagate={prevent}/>
        
          <button onClick={()=> setopen(true)} className='fixed p-6'>Modal </button>
    </section>
  )
}

export default ModalHolder