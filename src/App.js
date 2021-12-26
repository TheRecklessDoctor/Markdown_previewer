import './App.css';
import Editor from './components/Editor';
import Previwer from './components/Previewer';
import {useState} from 'react';
function App() {
  
  const [markdown,setMark] = useState("")

  return (
    <div className="App">
    <div className='subcont'>
        
        <Editor handleChange={setMark} />    {/* Editor component */}

        <Previwer text={markdown} />         {/* Previewer component*/ }
    </div>
    </div>
  );
}

export default App;
