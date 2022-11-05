import './create.css';
import {useState} from "react";
import rocket from './images/rocket.png';

function Create() {
    const[name,setName]=useState("Enter Name Here")
    const[bio,setBio]=useState("Enter Bio")
    const[link,setLink]=useState("Enter Link")
    function getLink(val){
        setLink(val.target.value)
    }
    function getBio(val){
        setBio(val.target.value)
    }
    function getName(val)
    {
        setName(val.target.value)

    }
    return(
        <>
        <div className='GlassMorphismrec1'>

        </div>
        
        <div className="ForCommName">
               <div className="ForCommNameText"> <label htmlFor="ForName">Name</label></div>
               <input type="text" value={name} onChange={getName} required name="CommName" id="CommName" className="ForCommNameInput"/>
        </div>
        <div className="ForLink">
               <div className="ForLinkText"> <label htmlFor="ForLink">Link</label></div>
               <input type="text" value={link} onChange={getLink} required name="link" id="link" className="ForLinkInput"/>
        </div>
        <div className="ForBio">
            <div className='ForBioText'><label htmlfor="ForBio">Bio</label></div>
            <input type="text" value={bio} onChange={getBio}  name="Bio" id="Bio" className="ForBioInput"/>
        </div>
        <div className='ForImage'>
            <div>
           <div className='ForImageText'> <label for="img">Upload Image</label></div>
            <input className='uploadbutton' type="file" id="img" name="img" accept="image/*"/>
            <input className='submittext' type="submit"/>
            
            </div>

            
        </div>
        <button className='createbutton'>Create</button>
        <img className='rocketimage' src={rocket} />
        </>
    );
};
export default Create;