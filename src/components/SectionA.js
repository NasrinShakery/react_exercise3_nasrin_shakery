import React from 'react'
import Chair from './Chair';

const SectionA = (props) => {
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

export default SectionA