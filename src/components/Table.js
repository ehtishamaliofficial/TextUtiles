import React from 'react'

export default function Table(props) {
   const table = ()=>{
     var number=parseInt(document.getElementById("tableNumber").value)
     var endNumber=parseInt(document.getElementById("tableEndNumber").value)
     var print_Table=""
     for(var a=1;a<=endNumber;a++){
       var temp=number+"x"+a+"="+number*a+"\n"
       print_Table+=temp

     }
     document.getElementById("exampleFormControlTextarea1").value=print_Table
   }

  return (
   
      <>
      <div className='container'>
      <div className="input-group flex-nowrap my-3">
      <span className="input-group-text" id="addon-wrapping" style={{backgroundColor: props.mode === 'dark' ? "#342e2e" : "white", color:props.mode === 'dark'?'white':'black'}} >Table</span>
      <input type="text" className="form-control" id='tableNumber' placeholder="Enter Number to Table " aria-label="" aria-describedby="addon-wrapping" style={{backgroundColor: props.mode === 'dark' ? "#342e2e" : "white", color:props.mode === 'dark'?'white':'black'}}/>
      </div>

      <div className="input-group flex-nowrap my-3">
      <span className="input-group-text" id="addon-wrapping" style={{backgroundColor: props.mode === 'dark' ? "#342e2e" : "white", color:props.mode === 'dark'?'white':'black'}} >End Number</span>
      <input type="text" className="form-control" id='tableEndNumber' placeholder="Enter Number to Table End number" aria-label="" aria-describedby="addon-wrapping" style={{backgroundColor: props.mode === 'dark' ? "#342e2e" : "white", color:props.mode === 'dark'?'white':'black'}}/>
      </div>

      <button type="button" onClick={table} class="btn btn-primary my-3">Table</button>

      <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label" style={{ color: props.mode==='dark'?'white':'black'}}>Table</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" style={{backgroundColor: props.mode === 'dark' ? "#342e2e" : "white", color:props.mode === 'dark'?'white':'black'}} ></textarea>
       </div>
       </div>
      </>
  )
}
