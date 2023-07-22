import React, { useReducer } from 'react'

let initChairObj = {
  "number": 0,
  "section": "",
  "price": 0,
  "state": ""
};

const reducer = (state, action) =>{
  switch(action.chairState){
    case "unselected":
      action.btn.target.style.backgroundColor = "Green";
      return {...state, state: "selected"};
    case "selected":
      action.btn.target.style.backgroundColor = "orange";
      return {...state, state: "reserving"}
    case "reserving":
      action.btn.target.style.backgroundColor = "red";
        return {...state, state: "reserved"}
    case "reserved":
      return state;
    default :
      return state;
  }
}

const Chair = (props) => {
  initChairObj = props.chairData;
  const [chairObj, dispatch] = useReducer(reducer, initChairObj);
  return (
    <>
      {
         <button
            title= {chairObj.price}
            onClick={(event)=> {
              dispatch({chairState:chairObj.state, btn:event});
            }}
         >{props.chairData.number}</button>

      }
    </>
  )
}

export default Chair