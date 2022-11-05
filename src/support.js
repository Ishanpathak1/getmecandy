import './dashboard.css';
import React,{useState} from 'react';
import standingwithlapotop from './images/standwithlaptop.png';
import candyimg from './images/candy-icom.png';
import sollogo from './images/solanaLogoMark.png';
import phone from './images/phone.png';
function Support(){
    const [selects,setSelects]=useState()
    const [Num,setNum]=useState()
    
    function getNum(Num){
        setNum(Num.target.value * 0.1)
    }
    return(
        <>
        <div className='ForImageOutput'></div>
        <div className='ForNameOutput'></div>
        <div className='ForNameText'>Name</div>
        <div className='ForBioOutput'></div>
        <div className='ForBioText'>Bio</div>
        <div className='ForCandy'></div>
        <p className='candytext'>candy</p>
        <img className='candyimg' src={candyimg}/>
        <div className='smallrec1'>
           <select value={Num} onChange={Num=>setNum(Num.target.value)}>
                
                <option selected value={1} >1</option>
                <option value={2} >2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}> 25</option>
            </select>
           
        </div>
        <div className='ForSolana'></div>
        <p className='soltext'>solana</p>
        <div className='smallrec2'>{Math.round(Num*0.1*100)/100} </div>
        <img className='sollogoimg' src={sollogo}/>
        <div className='SVL'>Send With Love</div>
        <button className='sendButton'>Send</button>
        <div className="ForMessage">
            <div className='ForMessageText'><label htmlfor="ForMessage"></label></div>
            <input type="text"  name="message" id="message" className="ForMessageText"/>
        </div>
        <img className='swlimg' src={standingwithlapotop} />
        <img className='phoneimg' src={phone} />

            

        
        </>
    );
};
export default Support;