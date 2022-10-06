import React, { useState } from 'react';
import styles from '../css/TextArea.css'
import ASCII from '../ASCII.js'
import Huffmanfunc from '../Huffman';
const TextArea = () => {
   const [text, settext] = useState('Enter Text here')
   const HandleOnChange = (event) =>{
      settext(event.target.value);
   }
   let val1,val2;
   const operations= () =>{
      val1=ASCII(text);
      console.log(val1);
      val2=Huffmanfunc(text);
       console.log(val2);
   }
  return (
    <>
    <div className='heading'>ABC Compress</div>
    <textarea className='textarea' placeholder='Enter Text Here' rows='8' onChange={HandleOnChange}></textarea>
    <button className="button-75" role="button"><span className="text" onClick={operations}>Compress Test</span></button>
    </>
  )
}
export default TextArea
