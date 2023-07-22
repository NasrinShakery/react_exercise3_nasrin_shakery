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

