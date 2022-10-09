import React from 'react'
import styles from '../css/Result_Display.css' 
const Result_Display = (props) => {
  var percent=Math.trunc((((props.v1-props.v2)/props.v1)*100));
  return (
    <div className='container'>
    <div className='box'>
     <p className='up'> {props.v1}</p>
     <p className='down'>Ascii bits</p>
    </div>
    <div className='box'>
      <p className='up'>{props.v2}</p>
      <p className='down'> Huffman Bits</p>
    </div>
    <div className='box'>
      <p className='up'>{percent}%</p>
      <p className='down'> Compression Achieved</p>
    </div>
    </div>
  )
}

export default Result_Display