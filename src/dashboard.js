import './dashboard.css';
import standingwithlapotop from './images/standwithlaptop.png';
import candyimg from './images/candy-icom.png';
import sollogo from './images/solanaLogoMark.png';
import phone from './images/phone.png';
function Dashboard(){
    return(
        <>
        <div className='ForImageOutput'></div>
        <div className='ForNameOutput'>Name</div>
        <div className='ForBioOutput'>Bio</div>
        <div className='ForCandy'></div>
        <p className='candytext'>candy</p>
        <img className='candyimg' src={candyimg}/>
        <div className='smallrec1'></div>
        <div className='ForSolana'></div>
        <p className='soltext'>solana</p>
        <div className='smallrec2'></div>
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
export default Dashboard;
