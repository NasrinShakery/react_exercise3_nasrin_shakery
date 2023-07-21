import React, { useState, useEffect, useReducer } from "react";
import "./styles/style.scss";
import axios from "axios";

const Salon = () => {
   // const [chairsData, setChairsData] = useState([]);
   const [sectionAchairsData, setSectionAchairsData] = useState([]);
   const [sectionBchairsData, setSectionBchairsData] = useState([]);
   const [sectionCchairsData, setSectionCchairsData] = useState([]);
   const [sectionDchairsData, setSectionDchairsData] = useState([]);


   useEffect(() => {
      axios.get("./chairs.json")
      .then((response)=> {
         // setChairsData(response.data);
         setSectionAchairsData(response.data.filter((chair) => chair.section === "A"))
         setSectionBchairsData(response.data.filter((chair) => chair.section === "B"))
         setSectionCchairsData(response.data.filter((chair) => chair.section === "C"))
         setSectionDchairsData(response.data.filter((chair) => chair.section === "D"))
      })
   }, [] );

   return (
      <>
     
         <div className="stage">stage</div>

            <div className="sectionContainer">

               <div className="section sectionA">
                  {
                     sectionAchairsData.map((chair) =>(
                        <button key={chair.number} title={chair.price}>{chair.number}</button>
                     ))
                  }
               </div>
               
               <div className="section sectionB">
                  {
                     sectionBchairsData.map((chair) =>(
                        <button key={chair.number} title={chair.price}>{chair.number}</button>
                     ))
                  }
               </div>

               <div className="section sectionC">
                  {
                     sectionCchairsData.map((chair) =>(
                        <button key={chair.number} title={chair.price}>{chair.number}</button>
                     ))
                  }
               </div>

               <div className="section sectionD">
                  {
                     sectionDchairsData.map((chair) =>(
                        <button key={chair.number} title={chair.price}>{chair.number}</button>
                     ))
                  }
               </div>

            </div>
         
      </>
   );
};

export default Salon;
