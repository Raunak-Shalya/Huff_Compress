import React, { useState } from 'react';
import styles from '../css/TextArea.css'

const TextArea = () => {
   const [text, settext] = useState('Enter Text here')
   const HandleOnChange = (event) =>{
      settext(event.target.value);
      console.log(text);
   }
  return (
    <>
    <div className='heading'>ABC Compress</div>
    <textarea className='textarea' placeholder='Enter Text Here' rows='8' onChange={HandleOnChange}></textarea>
    </>
  )
}

export default TextArea