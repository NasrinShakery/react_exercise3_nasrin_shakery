import React from 'react'
import Chair from './Chair';

const SectionC = (props) => {
  return (
    <>
      
      {
         props.data.map(chair => (
            <Chair key={chair.number} chairData={chair}></Chair>

         ))
      }
    </>
  )
}

export default SectionC