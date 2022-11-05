import './create.css';
import {useState} from "react";
import { useEffect } from 'react';
import rocket from './images/rocket.png';



function Create() {
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [imagePreviewSrc, setImagePreviewSrc] = useState('')

    const showImagePreview = (e) => {
        let selectedFile = e.target.files.item(0)
        if (selectedFile) {
            if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(selectedFile);
                fileReader.addEventListener('load', (event) => {
                    setImagePreviewSrc(event.target.result)
                    setIsImageSelected(true)
                })
            }
        } else {
            setIsImageSelected(false)
        }
    }
    
    return(
        <>
        <div className="card mb-3 mt-5" style={{ "maxWidth": "540px" }} >
            <div className="row g-0">
                <div className="col-md-4">
                    {isImageSelected ?
                        <img src={imagePreviewSrc} className="imgprev" alt="..." />
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="currentColor"
                            className="bi bi-image mt-3 ms-5 " viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path
                                d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg>}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        
                        <input  type="file" className='imageinp' onChange={showImagePreview} />
                    </div>
                </div>
            </div>
        </div>

        
        <div className='GlassMorphismrec1'>

        </div>
        
        <div className="ForCommName">
               <div className="ForCommNameText"> <label htmlFor="ForName">Name</label></div>
               <input type="text" placeholder='Enter Name Here' required name="CommName" id="CommName" className="ForCommNameInput"/>
        </div>
        <div className="ForLink">
               <div className="ForLinkText"> <label htmlFor="ForLink">Link</label></div>
               <input type="text" placeholder='Enter Link here' required name="link" id="link" className="ForLinkInput"/>
        </div>
        <div className="ForBio">
            <div className='ForBioInp'><label htmlfor="ForBio">Bio</label></div>
            <input type="text" placeholder='Enter Bio here'name="Bio" id="Bio" className="ForBioInput"/>
        </div>
        <div className='ForImage'>
            <div>
           <div className='ForImageText'> <label for="img">Upload Image</label></div>
           
            
            
            </div>

            
        </div>
        <button className='createbutton'>Create</button>
        <img className='rocketimage' src={rocket} />
        </>
    );
};
export default Create;