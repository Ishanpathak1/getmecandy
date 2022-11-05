import './dashboard.css';
import React,{useState} from 'react';
import standingwithlapotop from './images/standwithlaptop.png';
import candyimg from './images/candy-icom.png';
import sollogo from './images/solanaLogoMark.png';
import phone from './images/phone.png';
import TableLog from './table';
function Dashboard(){

    return(
        <>
        <div className='TableDesign'><TableLog/></div>
        <div className='ForImageOutput'></div>
        <div className='ForNameOutput'></div>
        <div className='ForNameText'>Name</div>
        <div className='ForBioOutput'></div>
        <div className='ForBioText'>Bio</div>
   
      
      
        
        
       
        <img className='swlimg' src={standingwithlapotop} />
        <img className='phoneimg' src={phone} />

            

        
        </>
    );
};
export default Dashboard;
