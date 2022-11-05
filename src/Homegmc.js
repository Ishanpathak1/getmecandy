import './Home-gmc.css';

import dog from './images/dog.png';

function Homegmc(){
  return(
    <>
     
     <p className='Title-home'>getmecandy</p>
     <button className='CreateButton'>
      <a href='/create' >Create</a>
     </button>
     <button className='SignButton'>
     <a href='/dashboard'>Log-in</a>
     </button>
     <div className='dgimg'>
     <img className='dogimage' src={dog} height={353} width={352}/>
     </div>
    
    
    </>
  );
};
export default Homegmc;