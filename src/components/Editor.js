import {FaFreeCodeCamp} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import { FaExpandArrowsAlt } from "react-icons/fa";



// Main component
function Editor(props)
{
    // function to handle changes in the editor and reflect them in real time in the editor.
    const getText = () => {
        let Ta = document.querySelector('.textarea');
        props.handleChange(Ta.value);
    }

    // function too handle the minimizing and maximizing of the editor
    const getHeight = () => 
    {
        let cN = document.querySelector('.textarea');
        let h = cN.scrollHeight;
        let curr = cN.offsetHeight;
        let prev = document.querySelector('.previewer_container');
        console.log(h);
        console.log(curr);

        if(curr!==h){    //Maxmimize
            cN.style.height = h.toString()+'px';
            prev.style.display = 'None';
        }else if((curr > 200) && (curr===h)){   //Minimize
            cN.style.height = '200px';
            prev.style.display='block';
           
        }
        else
        {

        }

 

    }
    return(
        <div className='editor_container'>
            <header className="toolbar">
                    <div id='fire_icon' className='icons'>
                        <FaFreeCodeCamp/>
                    </div>
                    <div className='section_name'><b>Editor</b></div>
                    <div className="expand_contract icons">
                        <ButtonComponent click={getHeight} />

                    </div>
            </header>
            <textarea className="textarea" onChange={getText}></textarea>

        </div>
    )
}



//Seperate button component
const ButtonComponent = (props) => {
   
        return(
            <button className='buttons_ec' onClick={props.click}>
                               <FaExpandArrowsAlt/>
            </button>
        )
        
  
}

export default Editor;
