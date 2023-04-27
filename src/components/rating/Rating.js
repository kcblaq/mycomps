import React, {useState} from 'react'
import './Rating.css';
import {AiFillStar} from 'react-icons/ai'



function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    
  return (
    <div className='star'>
        {
            [...Array(5)].map((star, i) => {
                i += 1
                return (
                    <button 
                    type='text'
                    key={i}
                    className={i <= hover || i <= rating ? 'on' : 'off'}
                    onClick={() => setRating(i)}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(rating)}

                    >
                        <div className='item'> <AiFillStar /> </div>
                    </button>
                )
                
            })
        
        }
        <br />
    </div>
  )
}

export default Rating