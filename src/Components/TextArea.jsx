import React, { useState } from 'react';
import styles from '../css/TextArea.css'
import ASCII from '../ASCII.js'
import Huffmanfunc from '../Huffman';
import Result_Display from './Result_Display';

const TextArea = () => {
   const [text, settext] = useState('');
   const [val1, setval1] = useState(0);
   const [val2, setval2] = useState(0);
   const HandleOnChange = (event) =>{
      settext(event.target.value);
   }
   const operations= () =>{
      setval1(ASCII(text));
      setval2(Huffmanfunc(text));
   }
  return (
    <>
    <div className='heading'>ABC Compress</div>
    <textarea className='textarea' placeholder='Enter Text Here' rows='8' onChange={HandleOnChange}></textarea>
    <button className="button-75" role="button"><span className="text" onClick={operations}>Compress Test</span></button>
    <Result_Display v1={val1} v2={val2}/>
    </>
  )
}
export default TextArea
