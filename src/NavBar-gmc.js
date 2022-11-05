import candy from './images/candy-icom.png';
import './NavBar-gmc.css';
function NavBar() {
    return (
        <div>
             <img className='candyimg1' src={candy}/>
            <nav className='nav'>
                <a href="/" className='sitetitle'>
                    <p className='Title'> GetMeCandy</p>
                </a>
                <image className='candyimage' src={candy} height={110} width={105}/>
            
            
            <button className='ConnectWalletButtonNav'>Connect Wallet</button>
        </nav>
        </div>
    );
}
export default NavBar;