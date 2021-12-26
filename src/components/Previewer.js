import {FaFreeCodeCamp} from 'react-icons/fa';
import { FaExpandArrowsAlt } from "react-icons/fa";
import { ReactMarkdown} from 'react-markdown/lib/react-markdown';
import { useState } from 'react';



//Main component
function Previwer(props)
{
    const [hidden,setHidden] = useState(false);

    //function to handle minimizing and maximizing of the previewer
    const changeHeight = () => {

        let editor = document.querySelector('.editor_container');
        if(!hidden){
            editor.style.display = 'None';
            console.log(1);
            setHidden(!hidden);

        }else{
            editor.style.display = 'block';
            console.log(2);
            setHidden(!hidden);
        }
       
    }
    return(
        <div className='previewer_container'>
        <header className="toolbar">
                <div id='fire_icon' className='icons'>
                    <FaFreeCodeCamp/>
                </div>
                <div className='section_name'><b>Previewer</b></div>
                <div className="expand_contract icons">
                        <ButtonComponent2 click={changeHeight}/>
                </div>
        </header>
        <div className="content">
            <p className='Viewer'><ReactMarkdown>{props.text}</ReactMarkdown></p>
        </div>
    </div>
    )
}


//Seperate button component
const ButtonComponent2 = (props) => {
    return(
        <button className='buttons_ec' onClick={props.click}>
            <FaExpandArrowsAlt/>
        </button>
    )
}

export default Previwer