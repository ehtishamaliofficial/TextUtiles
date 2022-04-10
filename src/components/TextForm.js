import React, { useState } from 'react'
import { jsPDF } from "jspdf";

export default function TextForm(props) {
    const [txt, setTxt] = useState('');
    const upercase=()=> {
        if(txt.length>0){

            let newTxt=txt.toUpperCase();
            setTxt(newTxt);
            props.showAlert("Converted to UpperCase","success");
        }
        else{
            props.showAlert("Write Someting to Converted to UpperCase"," alert");
        }
        
        
    }

    const change=(event)=>{
        setTxt(event.target.value)
    }
    const genratePDF=()=>{
        let newTxt=txt;
        const doc=new jsPDF();
        doc.text(newTxt,10,10,0,100);
        doc.save("Download.pdf");
    }
    const clear=()=>{
        setTxt("");
        props.showAlert("Clear all Text","warning");
    }

  return (
    <div>

        <div className="mb-3 container" style={{color : props.mode === 'dark' ?'white':'black'}}  >
            <h1 >Enter Text Below</h1>
            <textarea className="form-control" value={txt} onChange={change} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode === 'dark' ?'#342e2e':'white' , color : props.mode === 'dark' ?'white':'black'}}></textarea>
            <button  className="btn btn-primary my-2" onClick={upercase} >Upercase</button>
            <button  onClick={genratePDF} className="btn btn-outline-success mx-3">Convert In PDF</button>
            <button  onClick={clear} className="btn btn-outline-danger mx-1">Clear</button>
            <h3 className='mx-3'>word Count</h3>
            <p>{txt.split(' ').length}Words, {txt.length}Characters</p>
            <h2 className='mx-4'>Priview</h2>
            <p className='container'>{txt}</p>
        </div>
    </div>
  )
}
