import React,{useState,useEffect} from 'react';
import Chair from './Chair';
import Stage from './Stage';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';
import './styles/style.scss';
import axios from 'axios';


const Salon = () => {
   const [data,setData] = useState([]);
   useEffect(() => {
      axios.get('chairs.json')
      .then((response) => setData(response.data))
   },[]);

   // useEffect(() => {
   //    async function fetchData() {
   //      // You can await here
   //      const response = await MyAPI.getData(someId);
   //      // ...
   //    }
   //    fetchData();
   //  }, [someId]); // Or [] if effect doesn't need props or state
  return (
    <>
      <Stage></Stage>
      <div className="sectionContainer">
         <div className="section sectionA">
            <SectionA data={data.filter(chair => chair.section ==="A")}></SectionA>
         </div>
         <div className="section sectionB">
            <SectionB data={data.filter(chair => chair.section ==="B")}></SectionB>
         </div>
         <div className="section sectionC">
            <SectionC data={data.filter(chair => chair.section ==="C")}></SectionC>
         </div>
         <div className="section sectionD">
            <SectionD data={data.filter(chair => chair.section ==="D")}></SectionD>
         </div>
      </div>
      
      
      
      
    </>
  )
}

export default Salon
// -------------------------------------
// import React, { useState, useEffect, useReducer } from "react";
// import "./styles/style.scss";
// import axios from "axios";

// const Salon = () => {
//    const [chairsData, setChairsData] = useState([]);
//    const [sectionAchairsData, setSectionAchairsData] = useState([]);
//    const [sectionBchairsData, setSectionBchairsData] = useState([]);
//    const [sectionCchairsData, setSectionCchairsData] = useState([]);
//    const [sectionDchairsData, setSectionDchairsData] = useState([]);


//    useEffect(() => {
//       axios.get("./chairs.json")
//       .then((response)=> {
//          setChairsData(response.data);
//          setSectionAchairsData(response.data.filter((chair) => chair.section === "A"))
//          setSectionBchairsData(response.data.filter((chair) => chair.section === "B"))
//          setSectionCchairsData(response.data.filter((chair) => chair.section === "C"))
//          setSectionDchairsData(response.data.filter((chair) => chair.section === "D"))
//       })
//    }, [] );

//    const chairStateHandler = (event)=>{
//       // console.log(event.target.id);
//       let btnId = event.target.id;
//       let btn = event.target;
//       let state = event.target.value;
//       // setSectionAchairsData (...sectionAchairsData)
//       // let chair = chairsData.find((chair) =>chair.number === btn);
//       // let chair = sectionChairsData.find((chair) => chair.number == btn);
//       let chair = chairsData.find((chair) => chair.number == btnId);
//       console.log(chair);
//       console.log(state);
//       console.log(btn);
//       if ( state === "unselected"){
//          btn.style.backgroundColor = "green";
//          btn.style.color = "white";
//       }else if ( state === "selected"){
//          btn.style.backgroundColor = "orange";
//          btn.style.color = "white";
         
//       }else if ( state === "reserving"){
      
//       }else if ( state === "reserved"){

//       }
      
      
//    }

//    return (
//       <>
     
//          <div className="stage">stage</div>

//             <div className="sectionContainer">

//                <div className="section sectionA">
//                   {
//                      sectionAchairsData.map((chair) =>(
//                         <button 
//                            key={chair.number}
//                            title={chair.price}
//                            id={chair.number}
//                            value = {chair.state}
//                            onClick={(event) => chairStateHandler(event)}
//                            >
//                               {chair.number}</button>
//                      ))
//                   }
//                </div>
               
//                <div className="section sectionB">
//                   {
//                      sectionBchairsData.map((chair) =>(
//                         <button key={chair.number} title={chair.price}>{chair.number}</button>
//                      ))
//                   }
//                </div>

//                <div className="section sectionC">
//                   {
//                      sectionCchairsData.map((chair) =>(
//                         <button key={chair.number} title={chair.price}>{chair.number}</button>
//                      ))
//                   }
//                </div>

//                <div className="section sectionD">
//                   {
//                      sectionDchairsData.map((chair) =>(
//                         <button key={chair.number} title={chair.price}>{chair.number}</button>
//                      ))
//                   }
//                </div>

//             </div>
         
//       </>
//    );
// };

// export default Salon;
